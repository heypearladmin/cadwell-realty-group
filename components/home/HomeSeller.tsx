"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { sellerSection } from "@/lib/home-content";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

/**
 * HomeSeller — Premium SaaS landing page meets luxury real estate.
 * Numbered steps, animated metrics, glassy ink-tone backdrop.
 */
export function HomeSeller() {
  return (
    <section
      id="sell"
      className="relative isolate overflow-hidden bg-ink py-section-y-md text-paper md:py-section-y-lg"
    >
      {/* Glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-halo-red opacity-90"
      />
      <div aria-hidden className="noise-overlay" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-cadwell/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-[24rem] w-[24rem] rounded-full bg-paper/[0.05] blur-[120px]"
      />

      <div className="section-wrap relative">
        {/* Heading */}
        <div className="grid gap-10 md:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
            }}
            className="md:col-span-7"
          >
            <motion.div variants={fadeUp} transition={transitionBase} className="flex items-center gap-3">
              <span className="tick-light" aria-hidden />
              <p className="eyebrow-light">{sellerSection.eyebrow}</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-7 text-paper"
            >
              {sellerSection.title}
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="md:col-span-5 md:pl-6"
          >
            <p className="dek-light">{sellerSection.dek}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={sellerSection.cta.href} className="btn-cadwell-dark">
                {sellerSection.cta.label}
              </Link>
              <Link href={sellerSection.secondaryCta.href} className="btn-ghost-on-dark">
                {sellerSection.secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Metrics rail */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-6"
        >
          {sellerSection.metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              transition={transitionBase}
              className="glass-card-dark rounded-2xl px-5 py-6 md:px-8 md:py-8"
            >
              <p className="font-display text-[2rem] font-medium leading-none text-paper md:text-[2.75rem]">
                {m.value}
              </p>
              <p className="mt-3 text-[0.78rem] uppercase tracking-[0.22em] text-paper/65">
                {m.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Numbered playbook steps */}
        <div id="playbook" className="mt-section-y border-t border-paper/[0.10] pt-section-y">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-end justify-between gap-6"
          >
            <h3 className="display-md text-paper">The seller playbook.</h3>
            <p className="caption !text-paper/55">Honest. Modern. Repeatable.</p>
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6"
          >
            {sellerSection.steps.map((s) => (
              <motion.li
                key={s.step}
                variants={fadeUp}
                transition={transitionBase}
                className="group relative overflow-hidden rounded-2xl border border-paper/[0.10] bg-paper/[0.03] p-6 backdrop-blur md:p-8"
              >
                <div className="absolute right-6 top-6 font-display text-[3.5rem] font-medium leading-none text-paper/10 transition-colors duration-cinema group-hover:text-cadwell/40 md:text-[5rem]">
                  {s.step}
                </div>
                <p className="caption !text-cadwell-soft">{`Step ${s.step}`}</p>
                <h4 className="mt-3 font-display text-[1.4rem] font-medium leading-tight text-paper md:text-[1.6rem]">
                  {s.title}
                </h4>
                <p className="mt-4 max-w-[36rem] text-[0.95rem] leading-[1.7] text-paper/75">
                  {s.dek}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cadwell/0 via-cadwell/60 to-cadwell/0 opacity-0 transition-opacity duration-cinema group-hover:opacity-100" />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
