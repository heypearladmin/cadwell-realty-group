"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { newConstruction } from "@/lib/home-content";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

/**
 * HomeNewConstruction — modern builder showcase section.
 * Editorial card grid + timeline strip with hairline rules.
 */
export function HomeNewConstruction() {
  return (
    <section
      id="new-construction"
      className="relative isolate bg-paper py-section-y-md md:py-section-y-lg"
    >
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="section-wrap relative">
        <div className="grid gap-10 md:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="md:col-span-7"
          >
            <motion.div variants={fadeUp} transition={transitionBase} className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">{newConstruction.eyebrow}</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-7 text-ink"
            >
              A better way to{" "}
              <span className="italic-serif">buy new in Albany.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-5 md:pl-6"
          >
            <p className="dek">{newConstruction.dek}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={newConstruction.cta.href} className="btn-primary">
                {newConstruction.cta.label}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Benefit cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4"
        >
          {newConstruction.benefits.map((b, i) => (
            <motion.article
              key={b.title}
              variants={fadeUp}
              transition={transitionBase}
              className="group relative overflow-hidden rounded-[20px] border border-ink/[0.08] bg-paper p-6 shadow-surface transition-shadow duration-cinema ease-cinema hover:shadow-surface-hover md:p-7"
            >
              <p className="caption !text-cadwell">
                0{i + 1} · Benefit
              </p>
              <h3 className="mt-4 font-display text-[1.35rem] font-medium leading-tight text-ink md:text-[1.5rem]">
                {b.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.72] text-charcoal/85">{b.dek}</p>
              <div className="absolute inset-x-6 bottom-5 h-px bg-gradient-to-r from-cadwell/0 via-cadwell/55 to-cadwell/0 opacity-0 transition-opacity duration-cinema ease-cinema group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* Timeline strip */}
        <div className="mt-section-y border-t border-ink/[0.08] pt-section-y">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <h3 className="display-md text-ink">The build process, simplified.</h3>
            <p className="caption">Discover · Reserve · Build · Close</p>
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="mt-12 grid gap-4 md:grid-cols-4 md:gap-6"
          >
            {newConstruction.timeline.map((t, i) => (
              <motion.li
                key={t.step}
                variants={fadeUp}
                transition={transitionBase}
                className="relative flex flex-col gap-3 rounded-2xl bg-paper-deep/70 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="caption !text-cadwell">Step {String(i + 1).padStart(2, "0")}</span>
                  <span className="h-2 w-2 rounded-full bg-cadwell" aria-hidden />
                </div>
                <h4 className="font-display text-[1.25rem] font-medium text-ink">{t.step}</h4>
                <p className="text-[0.875rem] leading-[1.65] text-charcoal/80">{t.dek}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
