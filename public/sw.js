const CACHE_NAME = "east-village-pwa-v2";
const APP_SHELL = [
  "/",
  "/manifest.webmanifest",
  "/assets/welcome.png",
  "/assets/home1.png",
  "/assets/book-consultation.png",
  "/assets/services123.png",
  "/assets/prescription123.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  // Always use the network for documents and Next.js internals to avoid stale chunk reload loops.
  if (
    event.request.mode === "navigate" ||
    requestUrl.pathname.startsWith("/_next/") ||
    requestUrl.pathname.startsWith("/api/")
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          const contentType = networkResponse.headers.get("content-type") || "";
          if (contentType.includes("text/html")) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => cachedResponse || caches.match("/"));
    })
  );
});
