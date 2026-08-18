"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// ── Nav data ────────────────────────────────────────────────────────────────

const flatLinks = [
  { href: site.neighborhoodsPath, label: "Neighborhoods" },
  { href: "/living-here", label: "Living Here" },
  { href: "/local-business-guide", label: "Local Business Guide" },
  { href: site.blogPath, label: "Blog" },
  { href: "/resources", label: "Resources" },
] as const;

type NavLink = { href: string; label: string };

const buyingLinks: NavLink[] = [
  { href: "/albany-real-estate", label: "Buying in Albany" },
  { href: "/new-construction", label: "New Construction" },
  { href: "/blog/first-time-buyer-guide-albany-oregon", label: "First-Time Buyers" },
  { href: "/blog/your-ultimate-guide-to-buy-albany-oregon-homes", label: "Home Buying Guide" },
  { href: "/blog/how-to-make-a-competitive-offer-albany-oregon", label: "Making an Offer" },
];

const sellingLinks: NavLink[] = [
  { href: "/sell", label: "Selling Your Home" },
  { href: "/blog/albany-oregon-home-valuation-guide", label: "What's My Home Worth?" },
  { href: "/blog/sell-your-home-in-albany-oregon", label: "Seller's Guide" },
  { href: "/blog/albany-home-seller-timeline-decision-to-close", label: "Seller's Timeline" },
  { href: "/blog/what-makes-a-home-sell-faster-in-albany", label: "What Sells Faster" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

// ── Component ────────────────────────────────────────────────────────────────

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // Collapse mobile accordion when overlay closes
  useEffect(() => {
    if (!menuOpen) setServicesExpanded(false);
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
          {/* Logo */}
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`nav-link flex items-center gap-1.5 text-[0.9rem] font-medium transition-colors duration-cinema ease-cinema ${
                  opaque ? "text-ink/70 hover:text-cadwell" : "text-paper/85 hover:text-paper"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((s) => !s)}
              >
                Services
                <motion.svg
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="h-3 w-3 shrink-0"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <path d="M2 4l4 4 4-4" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className="absolute left-0 top-full z-50 pt-3"
                    role="region"
                    aria-label="Services menu"
                  >
                    <div className="w-[480px] overflow-hidden rounded-2xl border border-ink/[0.07] bg-paper shadow-[0_8px_48px_rgba(0,0,0,0.14)]">
                      <div className="grid grid-cols-2">
                        {/* Buying column */}
                        <div className="border-r border-ink/[0.07] p-6">
                          <p className="eyebrow mb-4 block">Buying</p>
                          <ul className="space-y-0.5">
                            {buyingLinks.map((l) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  className="block rounded-lg px-2 py-1.5 text-[0.875rem] text-ink/65 transition-colors duration-150 hover:bg-paper-deep hover:text-cadwell"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 border-t border-ink/[0.07] pt-3">
                            <Link
                              href="/services/buying"
                              className="block rounded-lg px-2 py-1.5 text-[0.8125rem] font-semibold text-cadwell transition-colors duration-150 hover:text-cadwell/80"
                              onClick={() => setServicesOpen(false)}
                            >
                              View All Buying →
                            </Link>
                          </div>
                        </div>

                        {/* Selling column */}
                        <div className="p-6">
                          <p className="eyebrow mb-4 block">Selling</p>
                          <ul className="space-y-0.5">
                            {sellingLinks.map((l) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  className="block rounded-lg px-2 py-1.5 text-[0.875rem] text-ink/65 transition-colors duration-150 hover:bg-paper-deep hover:text-cadwell"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 border-t border-ink/[0.07] pt-3">
                            <Link
                              href="/services/selling"
                              className="block rounded-lg px-2 py-1.5 text-[0.8125rem] font-semibold text-cadwell transition-colors duration-150 hover:text-cadwell/80"
                              onClick={() => setServicesOpen(false)}
                            >
                              View All Selling →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Flat links */}
            {flatLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-[0.9rem] font-medium transition-colors duration-cinema ease-cinema ${
                  opaque ? "text-ink/70 hover:text-cadwell" : "text-paper/85 hover:text-paper"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
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

      {/* Mobile nav overlay */}
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
                {/* Services accordion */}
                <motion.li
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => setServicesExpanded((s) => !s)}
                    className="flex w-full items-center justify-between font-display text-[2rem] font-medium leading-tight text-paper transition-colors duration-cinema ease-cinema hover:text-cadwell-soft"
                  >
                    Services
                    <motion.span
                      animate={{ rotate: servicesExpanded ? 45 : 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[1.8rem] leading-none text-paper/40"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-5 pb-2">
                          {/* Buying sub-group */}
                          <div className="border-l-2 border-cadwell/40 pl-4">
                            <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-cadwell-soft">
                              Buying
                            </p>
                            <ul className="space-y-0.5">
                              {buyingLinks.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-1 text-[1rem] font-medium text-paper/75 transition-colors hover:text-paper"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <Link
                                  href="/services/buying"
                                  onClick={() => setMenuOpen(false)}
                                  className="mt-1 block py-1 text-[0.85rem] font-semibold text-cadwell-soft transition-colors hover:text-paper"
                                >
                                  View All Buying →
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Selling sub-group */}
                          <div className="border-l-2 border-cadwell/40 pl-4">
                            <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-cadwell-soft">
                              Selling
                            </p>
                            <ul className="space-y-0.5">
                              {sellingLinks.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-1 text-[1rem] font-medium text-paper/75 transition-colors hover:text-paper"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <Link
                                  href="/services/selling"
                                  onClick={() => setMenuOpen(false)}
                                  className="mt-1 block py-1 text-[0.85rem] font-semibold text-cadwell-soft transition-colors hover:text-paper"
                                >
                                  View All Selling →
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Flat links */}
                {flatLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.165 + i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
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
