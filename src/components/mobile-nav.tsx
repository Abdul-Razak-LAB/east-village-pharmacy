"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  items: NavItem[];
};

export default function MobileNav({ items }: MobileNavProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    detailsRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const details = detailsRef.current;
      if (!details || !details.open) {
        return;
      }

      if (details.contains(event.target as Node)) {
        return;
      }

      closeMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <details ref={detailsRef} className="relative lg:hidden">
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
          {items.map((item) => (
            item.label === "Services" ? (
              <div key={`${item.label}-mobile-menu`} className="border-b border-[var(--line)]">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:bg-[var(--surface-muted)] hover:text-[var(--brand-green-700)]"
                >
                  {item.label}
                </Link>
                <div className="grid gap-1 px-4 pb-3">
                  <Link
                    href="/compounding"
                    onClick={closeMenu}
                    className="rounded-lg bg-[#f6f9f4] px-3 py-2 text-xs font-semibold text-[var(--brand-green-800)] transition hover:bg-[#edf4e9]"
                  >
                    Compounding
                  </Link>
                  <Link
                    href="/wellness-shop"
                    onClick={closeMenu}
                    className="rounded-lg bg-[#f6f9f4] px-3 py-2 text-xs font-semibold text-[var(--brand-green-800)] transition hover:bg-[#edf4e9]"
                  >
                    Wellness Shop
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={`${item.label}-mobile-menu`}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-[var(--line)] px-4 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:bg-[var(--surface-muted)] hover:text-[var(--brand-green-700)] last:border-b-0"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </details>
  );
}
