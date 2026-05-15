"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { googleReviewStats, testimonials } from "@/lib/home-content";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

/**
 * HomeSocialProof — large editorial pull quotes with cinematic transitions.
 * Soft card depth, generous spacing, glass-tinted highlight on first card.
 */
export function HomeSocialProof() {
  const [first, ...rest] = testimonials;

  return (
    <section
      id="testimonials"
      className="relative isolate bg-paper py-section-y-md md:py-section-y-lg"
    >
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="section-wrap relative">
        <div className="grid items-end gap-10 md:grid-cols-12">
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
              <p className="eyebrow">In their words</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-7 text-ink"
            >
              The kind of close
              <span className="italic-serif"> people quietly tell their friends about.</span>
            </motion.h2>
          </motion.div>

          <motion.a
            href={googleReviewStats.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-5 md:pl-6"
          >
            <div className="rounded-2xl border border-ink/[0.08] bg-paper-deep/70 p-6 transition-shadow duration-cinema hover:shadow-surface md:p-7">
              <p className="caption">{googleReviewStats.source}</p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-[3rem] font-medium leading-none text-ink md:text-[3.5rem]">
                  {googleReviewStats.rating}
                </span>
                <span className="text-[0.85rem] uppercase tracking-[0.22em] text-cadwell">
                  ★★★★★
                </span>
              </div>
              <p className="mt-3 text-[0.95rem] leading-[1.6] text-charcoal/85">
                {googleReviewStats.count} verified five-star reviews from Albany families, sellers, and new construction buyers.
              </p>
            </div>
          </motion.a>
        </div>

        {/* Testimonial cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-14 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-7"
        >
          {/* Feature pull quote */}
          {first && (
            <motion.figure
              variants={fadeUp}
              transition={transitionBase}
              className="relative overflow-hidden rounded-[24px] border border-cadwell/15 bg-paper-deep/80 p-8 md:col-span-7 md:p-12"
            >
              <span
                aria-hidden
                className="absolute -left-2 top-0 font-display text-[10rem] font-medium leading-none text-cadwell/15 md:text-[14rem]"
              >
                &ldquo;
              </span>
              <blockquote className="relative font-display text-[1.5rem] font-medium leading-[1.35] text-ink md:text-[2rem]">
                {first.quote}
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-4">
                <span className="tick" aria-hidden />
                <div>
                  <p className="font-display text-[1.1rem] font-medium text-ink">
                    {first.attribution}
                  </p>
                  <p className="text-[0.78rem] uppercase tracking-[0.22em] text-muted">
                    {first.context}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          )}

          {/* Stack of secondary testimonials */}
          <motion.ul
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-5 md:col-span-5"
          >
            {rest.map((t) => (
              <motion.li
                key={t.attribution}
                variants={fadeUp}
                transition={transitionBase}
                className="rounded-2xl border border-ink/[0.08] bg-paper p-6 transition-shadow duration-cinema hover:shadow-surface md:p-7"
              >
                <blockquote className="text-[1rem] leading-[1.65] text-ink md:text-[1.05rem]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.22em]">
                  <span className="h-px w-6 bg-cadwell" aria-hidden />
                  <span className="text-ink">{t.attribution}</span>
                  <span className="text-muted">· {t.context}</span>
                </figcaption>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/[0.08] pt-10"
        >
          <p className="font-display text-[1.25rem] italic-serif text-ink md:text-[1.4rem]">
            Want to talk to a recent client?
          </p>
          <Link href="/contact" className="btn-primary">
            Request a reference
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
