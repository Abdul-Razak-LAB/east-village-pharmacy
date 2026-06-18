import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PWARegister from "../components/pwa-register";
import "./globals.css";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Compounding", href: "/compounding" },
  { label: "Services", href: "/services" },
  { label: "Wellness Shop", href: "/wellness-shop" },
  { label: "For Providers", href: "/consultation" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const metadata: Metadata = {
  title: "East Village Pharmacy",
  description:
    "Trusted care, advanced compounding, and digital consultation requests for East Village Pharmacy.",
  manifest: "/manifest.webmanifest",
  themeColor: "#073d2b",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "East Village Rx",
  },
  icons: {
    icon: "/assets/new%20logo.png",
    apple: "/assets/new%20logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PWARegister />
        <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0a543c] to-[#063d2d] text-white shadow-[0_10px_24px_-16px_rgba(6,42,29,0.8)]">
          <div className="bg-white text-[var(--ink)]">
            <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-10">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--brand-gold-300)] shadow-[0_6px_12px_-8px_rgba(6,40,28,0.7)] sm:h-12 sm:w-12">
                  <Image
                    src="/assets/new%20logo.png"
                    alt="East Village Pharmacy logo"
                    fill
                    sizes="48px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="font-sans text-lg font-bold leading-none text-[var(--brand-green-900)] sm:text-xl lg:text-2xl">East Village Pharmacy</p>
                  <p className="mt-1 font-sans text-[10px] font-semibold tracking-[0.12em] text-[var(--brand-gold-600)] sm:text-xs">Compounding Care</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-4 text-sm font-semibold text-slate-800 lg:flex xl:gap-7 xl:text-[1rem]">
                {primaryNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="border-b-2 border-transparent pb-0.5 transition duration-200 hover:border-[var(--brand-gold-600)] hover:text-[var(--brand-green-700)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <details className="relative lg:hidden">
                  <summary
                    aria-label="Open navigation menu"
                    className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md border border-[var(--line)] bg-white text-[var(--brand-green-900)] transition hover:bg-emerald-50 [&::-webkit-details-marker]:hidden"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 7h16" />
                      <path d="M4 12h16" />
                      <path d="M4 17h16" />
                    </svg>
                  </summary>

                  <div className="absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-xl border border-[var(--line)] bg-white shadow-[0_14px_28px_-16px_rgba(4,24,40,0.4)]">
                    <nav className="grid">
                      {primaryNav.map((item) => (
                        <Link
                          key={`${item.label}-mobile-menu`}
                          href={item.href}
                          className="border-b border-[var(--line)] px-4 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:bg-[var(--surface-muted)] hover:text-[var(--brand-green-700)] last:border-b-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </details>

                <Link href="/prescription" className="btn-silentech-primary px-3 py-2 text-xs tracking-[0.06em] sm:px-4 sm:text-sm lg:px-5 lg:py-2.5">
                  REFILL RX
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <a
          href="https://wa.me/233209225268?text=Hi%20East%20Village%20Pharmacy%2C%20I%20would%20like%20to%20book%20a%20consultation%20meeting."
          target="_blank"
          rel="noreferrer"
          aria-label="Book Meeting on WhatsApp"
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_14px_30px_-16px_rgba(7,84,47,0.95)] ring-1 ring-black/5 transition hover:brightness-105 sm:bottom-6 sm:right-6"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M19.06 4.94A9.9 9.9 0 0 0 12 2C6.49 2 2 6.49 2 12a9.9 9.9 0 0 0 1.34 4.96L2 22l5.16-1.33A9.9 9.9 0 0 0 12 22c5.51 0 10-4.49 10-10a9.9 9.9 0 0 0-2.94-7.06ZM12 20.2a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.06.79.82-2.99-.2-.31A8.09 8.09 0 0 1 3.8 12C3.8 7.48 7.48 3.8 12 3.8S20.2 7.48 20.2 12 16.52 20.2 12 20.2Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.24-.64.8-.78.97-.14.17-.28.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.24-1.48-1.38-1.72-.14-.24-.01-.37.11-.5.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.39 1 2.56c.12.16 1.74 2.66 4.22 3.72.59.25 1.05.4 1.41.51.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.05-.1-.22-.16-.47-.28Z" />
            </svg>
          </span>
          <span className="hidden sm:inline">Book Meeting on WhatsApp</span>
        </a>

        <footer className="mt-10 border-t border-[#13264d] bg-[#06142f] text-white">
          <div className="mx-auto grid max-w-[1520px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr_1fr] lg:px-10">
            <div>
              <h2 className="font-sans text-xl font-bold uppercase tracking-[0.08em] !text-white">Stay Informed</h2>
              <p className="mt-2 max-w-md text-sm text-emerald-50">
                Join our mailing list for health tips, special offers, and pharmacy updates.
              </p>
              <form className="mt-4 flex max-w-md overflow-hidden rounded-md border border-white/25 bg-white/10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/65 focus:outline-none"
                />
                <button type="button" className="bg-[var(--brand-gold-600)] px-4 py-2 text-xs font-bold tracking-[0.08em] text-white">
                  SUBSCRIBE
                </button>
              </form>
            </div>

            <div>
              <p className="font-sans text-2xl font-bold leading-none text-white sm:text-3xl">East Village Pharmacy</p>
              <p className="mt-1 font-sans text-[11px] font-semibold tracking-[0.12em] text-[var(--brand-gold-300)] sm:text-xs">Compounding Care</p>
              <div className="mt-4 flex gap-3 text-sm text-emerald-50">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25">f</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25">ig</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25">G</span>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] !text-white">Visit Us</h2>
              <div className="mt-3 space-y-2 text-sm text-emerald-50">
                <p>12450 Crabapple Rd, Suite 210</p>
                <p>Alpharetta, GA 30004</p>
                <p>(470) 555-0123</p>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#040d23]">
            <div className="mx-auto flex max-w-[1520px] flex-col gap-2 px-4 py-4 text-xs text-emerald-50/90 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
              <p>© {year} East Village Compounding Pharmacy. All rights reserved.</p>
              <p>For emergencies, call 911. Prescription and consultation requests are monitored during business hours.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
