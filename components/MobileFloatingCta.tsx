"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * MobileFloatingCta
 * Appears after the user scrolls past the hero on small screens, offering a quick
 * "Book a call" pill. Subtle entrance with Framer Motion.
 */
export function MobileFloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const past = y > Math.max(window.innerHeight * 0.7, 480);
      // hide near the bottom (avoid clashing with footer CTA)
      const nearBottom =
        window.innerHeight + y > document.documentElement.scrollHeight - 400;
      setShow(past && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-5 sm:hidden"
        >
          <div className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-ink/85 p-1.5 shadow-glow backdrop-blur-xl">
            <a
              href={site.phoneHref}
              className="rounded-full px-3 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-paper/85"
              aria-label={"Call Jason at " + site.phone}
            >
              Call
            </a>
            <Link
              href={site.contactPath}
              className="rounded-full bg-cadwell px-5 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-paper"
            >
              Book a call
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
