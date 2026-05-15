"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { localGuide, trustColophon } from "@/lib/home-content";
import { site } from "@/lib/site";
import {
  editorialEase,
  fadeUp,
  transitionBase,
  viewportOnce,
} from "./motion";

/* ─────── Animated counter helper ─────── */
function parseNumeric(value: string): { num: number; suffix: string; prefix: string } {
  // matches optional leading non-digit, digits (with decimal), trailing non-digits
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, prefix: "" };
  return { prefix: match[1] ?? "", num: parseFloat(match[2]), suffix: match[3] ?? "" };
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);
  const { num, suffix, prefix } = parseNumeric(value);

  useEffect(() => {
    if (!inView || isNaN(num) || num === 0) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const isInt = !value.includes(".");
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = num * eased;
      const formatted = isInt ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, prefix, suffix, value]);

  return <span ref={ref}>{display}</span>;
}

/**
 * HomeTrust
 * Trust strip + About section opener. Animated counters and a calm editorial layout.
 */
export function HomeTrust() {
  return (
    <section className="relative isolate bg-paper py-section-y md:py-section-y-md">
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="section-wrap relative">
        {/* Top eyebrow row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={transitionBase}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">{trustColophon.eyebrow}</p>
          </div>
          <h2 className="display-lg max-w-[44rem] text-ink">{trustColophon.title}</h2>
        </motion.div>

        {/* Animated counters */}
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-ink/[0.08] pt-12 md:grid-cols-4"
        >
          {trustColophon.lines.map((line) => (
            <motion.div key={line.label} variants={fadeUp} transition={transitionBase}>
              <dt className="caption">{line.label}</dt>
              <dd className="display-lg mt-4 text-ink">
                <Counter value={line.value} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Proof line */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.78, ease: editorialEase, delay: 0.15 }}
          className="mt-14 max-w-[58rem] text-[1.0625rem] leading-[1.78] text-charcoal/85"
        >
          {trustColophon.proof}
        </motion.p>

        {/* Local guide bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-section-y grid gap-10 border-t border-ink/[0.08] pt-section-y md:grid-cols-12"
        >
          <motion.div variants={fadeUp} transition={transitionBase} className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">{localGuide.eyebrow}</p>
            </div>
            <h3 className="display-md mt-6 text-ink">{localGuide.title}</h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="md:col-span-7 md:pl-8"
          >
            <p className="dek">{localGuide.dek}</p>
            <blockquote className="mt-9 border-l-2 border-cadwell pl-5 font-display text-[1.4rem] italic-serif leading-snug text-ink/90 md:text-[1.6rem]">
              &ldquo;{localGuide.pullQuote}&rdquo;
            </blockquote>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.78rem] uppercase tracking-[0.22em]">
              <Link href={localGuide.aboutHref} className="nav-link text-cadwell">
                {localGuide.aboutLabel}
              </Link>
              <span className="hidden h-3 w-px bg-ink/15 md:block" aria-hidden />
              <a
                href={site.phoneHref}
                className="nav-link text-ink/70 hover:text-cadwell"
              >
                {site.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
