"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialCadence, videoAuthority, videoCards } from "@/lib/home-content";
import { site } from "@/lib/site";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

const socialLinks = [
  { label: "YouTube", href: site.social.youtube },
  { label: "Instagram", href: site.social.instagram },
  { label: "Facebook", href: site.social.facebook },
  { label: "LinkedIn", href: site.social.linkedin },
];

/**
 * HomeVideoAuthority — Social / content section.
 * Modern creator-driven layout with video poster cards and cadence rail.
 */
export function HomeVideoAuthority() {
  return (
    <section
      id="content"
      className="relative isolate overflow-hidden bg-ink py-section-y-md text-paper md:py-section-y-lg"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-cadwell/25 blur-[120px]"
      />
      <div aria-hidden className="noise-overlay" />

      <div className="section-wrap relative">
        {/* Heading */}
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
              <span className="tick-light" aria-hidden />
              <p className="eyebrow-light">{videoAuthority.eyebrow}</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-7 text-paper"
            >
              Field notes you can{" "}
              <span className="italic-serif text-cadwell-soft">watch.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-5 md:pl-6"
          >
            <p className="dek-light">{videoAuthority.dek}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={videoAuthority.primaryCta.href} className="btn-on-dark">
                {videoAuthority.primaryCta.label}
              </Link>
              <Link href={videoAuthority.secondaryCta.href} className="btn-ghost-on-dark">
                {videoAuthority.secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Video poster cards */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {videoCards.map((v) => (
            <motion.li
              key={v.title}
              variants={fadeUp}
              transition={transitionBase}
              className="group relative overflow-hidden rounded-[20px] border border-paper/[0.10] bg-paper/[0.03] backdrop-blur"
            >
              <Link href={v.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={v.posterSrc}
                    alt={v.posterAlt}
                    fill
                    sizes="(min-width: 768px) 32vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

                  {/* Play disc */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-paper/15 px-3 py-1.5 backdrop-blur-md">
                    <span className="live-dot" aria-hidden />
                    <span className="text-[0.65rem] uppercase tracking-[0.22em] text-paper/85">
                      {v.runtime}
                    </span>
                  </div>

                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-cadwell text-paper shadow-glow transition-transform duration-cinema ease-cinema group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="caption !text-paper/70">{v.eyebrow}</p>
                    <h3 className="mt-2 font-display text-[1.4rem] font-medium leading-tight text-paper md:text-[1.5rem]">
                      {v.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[0.875rem] leading-[1.6] text-paper/75">
                      {v.dek}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Cadence ribbon */}
        <div className="mt-section-y border-t border-paper/[0.10] pt-section-y">
          <div className="grid gap-10 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5"
            >
              <p className="eyebrow-light">{socialCadence.eyebrow}</p>
              <h3 className="display-md mt-5 text-paper">{socialCadence.title}</h3>
              <p className="mt-6 text-[0.95rem] leading-[1.7] text-paper/75">{socialCadence.dek}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-paper/15 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.22em] text-paper/85 transition-colors duration-cinema ease-cinema hover:border-cadwell hover:text-cadwell-soft"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              className="md:col-span-7"
            >
              {socialCadence.cadenceLines.map((line, i) => (
                <motion.li
                  key={line.label}
                  variants={fadeUp}
                  transition={transitionBase}
                  className={`flex items-baseline justify-between gap-6 py-5 ${
                    i !== socialCadence.cadenceLines.length - 1 ? "border-b border-paper/[0.10]" : ""
                  }`}
                >
                  <span className="font-display text-[1.15rem] font-medium text-paper md:text-[1.35rem]">
                    {line.label}
                  </span>
                  <span className="text-[0.78rem] uppercase tracking-[0.22em] text-cadwell-soft md:text-[0.85rem]">
                    {line.value}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
