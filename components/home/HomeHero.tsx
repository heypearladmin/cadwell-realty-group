"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroContent } from "@/lib/home-content";
import { site } from "@/lib/site";
import {
  editorialEase,
  fadeUp,
  revealMask,
  transitionBase,
  transitionSlow,
  useParallaxY,
  viewportOnce,
} from "./motion";

/**
 * HomeHero — full-viewport cinematic hero.
 * Layered image, scrim, masked text reveal, parallax background.
 */
export function HomeHero() {
  const wrapRef = useRef<HTMLElement>(null);
  const yBg = useParallaxY(wrapRef, [0, 40]);
  const reduce = useReducedMotion();

  return (
    <section
      ref={wrapRef}
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-ink text-paper"
      aria-label="Cadwell Group hero"
    >
      {/* Background imagery: desktop landscape + mobile portrait */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: yBg }}
      >
        <div className="ken-burns absolute inset-0 hidden md:block">
          <Image
            src={heroContent.landscapeSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <div className="ken-burns absolute inset-0 md:hidden">
          <Image
            src={heroContent.portraitSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
        </div>
        {/* Layered scrims */}
        <div className="absolute inset-0 scrim-bottom" />
        <div className="absolute inset-0 scrim-edge md:opacity-80" />
        <div className="absolute inset-0 bg-ink/15 md:bg-ink/[0.18]" />
        <div className="noise-overlay" />
      </motion.div>

      {/* Hairline brand bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cadwell/60 to-transparent" />

      <div className="section-wrap relative w-full pb-16 pt-44 md:pb-24 md:pt-48 lg:pb-28 lg:pt-52">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-[68rem]"
        >
          {/* Eyebrow + tick */}
          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="flex items-center gap-4"
          >
            <span className="tick-light" aria-hidden />
            <p className="eyebrow-light">{heroContent.eyebrow}</p>
          </motion.div>

          {/* Masked editorial headline */}
          <motion.h1
            variants={revealMask}
            transition={transitionSlow}
            className="display-hero mt-7 text-paper"
          >
            <span className="block">{heroContent.headlineBefore}</span>
            <span className="italic-serif block text-paper/95">
              {heroContent.headlineItalic}
            </span>
          </motion.h1>

          {/* Dek */}
          <motion.p
            variants={fadeUp}
            transition={transitionBase}
            className="dek-light mt-8 max-w-[40rem]"
          >
            {heroContent.dek}
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="mt-10 flex flex-wrap items-center gap-3 md:gap-4"
          >
            <Link href={heroContent.primaryCta.href} className="btn-on-dark">
              {heroContent.primaryCta.label}
            </Link>
            <Link href={heroContent.secondaryCta.href} className="btn-ghost-on-dark">
              {heroContent.secondaryCta.label}
            </Link>
          </motion.div>

          {/* Authority colophon row */}
          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-paper/65"
          >
            <span className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em]">
              <span className="live-dot" aria-hidden />
              Cadwell Group
            </span>
            <span className="hidden h-3 w-px bg-paper/30 md:block" aria-hidden />
            <span className="text-[0.78rem] uppercase tracking-[0.22em] text-paper/55">
              Powered by {site.brokerage.name}
            </span>
            <span className="hidden h-3 w-px bg-paper/30 md:block" aria-hidden />
            <a
              href={site.phoneHref}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-paper/80 transition-colors hover:text-paper"
            >
              {site.phone}
            </a>
          </motion.div>
        </motion.div>

        {/* Marquee ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: editorialEase, delay: 0.4 }}
          className="mt-16 hidden border-t border-paper/15 pt-6 md:block"
          aria-hidden={reduce ? undefined : true}
        >
          <div className="flex items-center justify-between gap-6 text-[0.7rem] uppercase tracking-[0.32em] text-paper/55">
            {heroContent.marqueeLines.map((line) => (
              <span key={line} className="whitespace-nowrap">
                {line}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2, delay: 1.1, ease: editorialEase }}
        className="absolute inset-x-0 bottom-6 hidden justify-center md:flex"
      >
        <span className="flex flex-col items-center gap-2 text-[0.62rem] uppercase tracking-[0.4em] text-paper/55">
          Scroll
          <span className="block h-8 w-px bg-paper/40" />
        </span>
      </motion.div>
    </section>
  );
}
