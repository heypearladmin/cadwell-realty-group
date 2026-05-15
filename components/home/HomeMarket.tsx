"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { insightCards, marketInsights } from "@/lib/home-content";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

/**
 * HomeMarket — Modern editorial blog/insights section.
 * Carousel-style cards with feature article + 3 supporting previews.
 */
export function HomeMarket() {
  const [feature, ...rest] = insightCards;

  return (
    <section
      id="journal"
      className="relative isolate bg-paper py-section-y-md md:py-section-y-lg"
    >
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="section-wrap relative">
        {/* Heading + signal */}
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
              <p className="eyebrow">{marketInsights.eyebrow}</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-7 text-ink"
            >
              Read Albany
              <span className="italic-serif"> before you tour it.</span>
            </motion.h2>
          </motion.div>

          {/* Live signal card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="md:col-span-5 md:pl-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper-deep/70 p-6 md:p-7">
              <div className="flex items-center gap-2">
                <span className="live-dot" aria-hidden />
                <p className="caption">{marketInsights.signalLabel}</p>
              </div>
              <p className="mt-4 font-display text-[2.75rem] font-medium leading-none text-cadwell md:text-[3.25rem]">
                {marketInsights.signalValue}
              </p>
              <p className="mt-4 text-[0.875rem] leading-[1.7] text-charcoal/80">
                {marketInsights.signalDek}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Featured + cards */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-7">
          {/* Feature article */}
          {feature && (
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[24px] md:col-span-7"
            >
              <Link href={feature.href} className="block">
                <div className="relative aspect-[5/4] w-full overflow-hidden md:aspect-[5/3]">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                    <p className="caption !text-paper/70">{feature.eyebrow}</p>
                    <h3 className="mt-3 font-display text-[2rem] font-medium leading-tight text-paper md:text-[2.5rem]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-[36rem] text-[0.95rem] leading-[1.7] text-paper/85">
                      {feature.dek}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Supporting cards stack */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="space-y-4 md:col-span-5 md:space-y-5"
          >
            {rest.map((c) => (
              <motion.li
                key={c.title}
                variants={fadeUp}
                transition={transitionBase}
                className="group"
              >
                <Link
                  href={c.href}
                  className="flex items-stretch gap-4 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper p-4 transition-shadow duration-cinema ease-cinema hover:shadow-surface md:gap-5 md:p-5"
                >
                  <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl md:w-32">
                    <Image
                      src={c.imageSrc}
                      alt={c.imageAlt}
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col py-1">
                    <p className="caption">{c.eyebrow}</p>
                    <h4 className="mt-2 font-display text-[1.2rem] font-medium leading-tight text-ink md:text-[1.3rem]">
                      {c.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-[0.875rem] leading-[1.6] text-charcoal/75">
                      {c.dek}
                    </p>
                    <span className="mt-auto pt-2 text-[0.72rem] uppercase tracking-[0.22em] text-cadwell">
                      Read →
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 border-t border-ink/[0.08] pt-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="font-display text-[1.25rem] italic-serif text-ink md:text-[1.4rem]">
              New guides published most weeks.
            </p>
            <Link href="/blog" className="btn-ghost">
              Open the journal
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
