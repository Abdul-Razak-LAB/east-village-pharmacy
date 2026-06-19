import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "East Village Compounding Pharmacy",
    short_name: "East Village Rx",
    description: "Trusted care, advanced compounding, and digital consultation requests for East Village Pharmacy.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1f3ee",
    theme_color: "#073d2b",
    lang: "en",
    icons: [
      {
        src: "/assets/new%20logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/assets/new%20logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
