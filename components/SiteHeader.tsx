"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/albany-real-estate", label: "Buying" },
  { href: site.sellPath, label: "Selling" },
  { href: site.neighborhoodsPath, label: "Neighborhoods" },
  { href: "/living-here", label: "Living Here" },
  { href: "/local-business-guide", label: "Local Business Guide" },
  { href: site.blogPath, label: "Blog" },
  { href: "/resources", label: "Resources" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [menuOpen]);

  const opaque = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-cinema ease-cinema ${
          opaque
            ? "border-b border-ink/[0.08] bg-paper/85 backdrop-blur-xl shadow-[0_18px_40px_-30px_rgba(0,0,0,0.18)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="section-wrap flex items-center justify-between gap-6 py-4 md:py-5">
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity duration-cinema ease-cinema hover:opacity-90"
            onClick={() => setMenuOpen(false)}
            aria-label={`${site.brand}, Albany Oregon home`}
          >
            <span className="relative block h-10 w-10 shrink-0 md:h-11 md:w-11">
              <Image
                src={site.logoSrc}
                alt={site.logoAlt}
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={`whitespace-nowrap font-display text-[1.0625rem] font-semibold tracking-tight transition-colors duration-cinema ease-cinema md:text-[1.15rem] ${
                  opaque ? "text-ink" : "text-paper drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
                }`}
              >
                {site.brand}
              </span>
              <span
                className={`hidden whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.32em] transition-colors duration-cinema ease-cinema md:inline ${
                  opaque ? "text-muted" : "text-paper/75"
                }`}
              >
                Albany, Oregon
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-[0.9rem] font-medium transition-colors duration-cinema ease-cinema ${
                  opaque
                    ? "text-ink/70 hover:text-cadwell"
                    : "text-paper/85 hover:text-paper"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={site.contactPath}
              className={`hidden whitespace-nowrap !px-5 !py-2.5 sm:inline-flex ${
                opaque ? "btn-primary" : "btn-on-dark"
              }`}
            >
              Book a call
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((s) => !s)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-cinema ease-cinema lg:hidden ${
                opaque ? "border-ink/15 text-ink" : "border-paper/30 text-paper"
              }`}
            >
              <span className="sr-only">Toggle menu</span>
              <span aria-hidden className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-full transition-transform duration-cinema ease-cinema ${
                    opaque ? "bg-ink" : "bg-paper"
                  } ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 transition-opacity duration-cinema ease-cinema ${
                    opaque ? "bg-ink" : "bg-paper"
                  } ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full transition-transform duration-cinema ease-cinema ${
                    opaque ? "bg-ink" : "bg-paper"
                  } ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-overlay"
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/85 backdrop-blur-xl" />
            <div className="noise-overlay" />
            <motion.nav
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="relative flex h-full flex-col justify-between px-7 pb-12 pt-28"
              aria-label="Mobile"
            >
              <ul className="space-y-3">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.12 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-display text-[2rem] font-medium leading-tight text-paper transition-colors duration-cinema ease-cinema hover:text-cadwell-soft"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-4 border-t border-paper/15 pt-7 text-paper/80">
                <a href={site.phoneHref} className="block text-[1.05rem] font-medium text-paper">
                  {site.phone}
                </a>
                <a href={site.emailHref} className="block text-[0.95rem] text-paper/80">
                  {site.email}
                </a>
                <p className="caption !text-paper/55">{site.brokerage.fullName}</p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
