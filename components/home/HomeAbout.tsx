"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import {
  fadeUp,
  revealMask,
  transitionBase,
  transitionSlow,
  useParallaxY,
  viewportOnce,
} from "./motion";

const bullets = [
  { title: "Local-first", dek: "Born in Linn County, fluent in Albany's pockets, paths, and price bands." },
  { title: "Seller advocate", dek: "Every listing gets a positioning plan, not just a sign in the yard." },
  { title: "Calm under pressure", dek: "Inspection week happens. We translate noise into decisions you can sleep on." },
  { title: "Modern marketing", dek: "Magazine-grade photography, video, social, and a story buyers actually read." },
];

/**
 * HomeAbout — editorial portrait + storytelling for Jason Cadwell.
 * Asymmetric grid, layered captions, gentle parallax on the portrait.
 */
export function HomeAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const yPortrait = useParallaxY(ref, [-30, 30]);

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-paper-deep py-section-y-md md:py-section-y-lg"
    >
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="section-wrap relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="grid gap-14 md:grid-cols-12 md:gap-12 lg:gap-16"
        >
          {/* Portrait column */}
          <div className="relative md:col-span-6 lg:col-span-5">
            <motion.div
              ref={ref}
              variants={fadeUp}
              transition={transitionSlow}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] frame-ink"
            >
              <motion.div className="absolute inset-0" style={{ y: yPortrait }}>
                <Image
                  src={site.agentPortraitSrc}
                  alt={site.agentPortraitAlt}
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/65 to-transparent" />

              {/* Floating glass caption */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="absolute bottom-5 left-5 right-5 rounded-2xl glass-card-dark px-5 py-4 text-paper"
              >
                <p className="caption !text-paper/70">{site.geo}</p>
                <p className="mt-1 font-display text-[1.15rem] italic-serif">
                  &ldquo;Calm strategy beats loud sales. Every time.&rdquo;
                </p>
                <p className="mt-1 text-[0.78rem] uppercase tracking-[0.22em] text-paper/65">
                  — {site.agentName}
                </p>
              </motion.div>
            </motion.div>

            {/* Sub frame */}
            <motion.div
              variants={fadeUp}
              transition={transitionBase}
              className="mt-6 flex items-center gap-4 text-[0.78rem] uppercase tracking-[0.22em] text-charcoal"
            >
              <span className="tick" aria-hidden />
              <span>{site.brokerage.fullName}</span>
            </motion.div>
          </div>

          {/* Copy column */}
          <div className="md:col-span-6 lg:col-span-7 lg:pl-6">
            <motion.div variants={fadeUp} transition={transitionBase} className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">About Jason</p>
            </motion.div>

            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-6 text-ink"
            >
              A trusted local advisor,
              <span className="italic-serif"> not a high-pressure salesperson.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={transitionBase}
              className="dek mt-7"
            >
              I have spent over a decade quietly learning Albany. The streets that hold value when
              the market shifts. The schools families actually walk to. The builders who honor their
              punch list. Real estate is the easy part. The trust takes longer, and that&apos;s the
              part I take seriously.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={transitionBase}
              className="body-prose mt-6 max-w-[42rem]"
            >
              Cadwell Group exists for the families, sellers, and move-up buyers who want a
              calm, intelligent advisor in their corner. Powered by Jason Mitchell Group, we pair
              hyperlocal Albany intel with national-scale infrastructure and a marketing standard
              most of the valley has not seen yet.
            </motion.p>

            {/* Stagger bullets */}
            <motion.ul
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
              }}
              className="mt-12 grid gap-6 sm:grid-cols-2"
            >
              {bullets.map((b) => (
                <motion.li
                  key={b.title}
                  variants={fadeUp}
                  transition={transitionBase}
                  className="rounded-2xl border border-ink/[0.08] bg-paper/85 p-5 backdrop-blur"
                >
                  <p className="caption !text-cadwell">{b.title}</p>
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-charcoal">{b.dek}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              transition={transitionBase}
              className="mt-12 flex flex-wrap items-center gap-3"
            >
              <Link href={site.aboutPath} className="btn-primary">
                Read Jason&apos;s full story
              </Link>
              <Link href={site.contactPath} className="btn-ghost">
                Start a conversation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
