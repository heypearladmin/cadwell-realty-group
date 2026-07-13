"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { finalCta } from "@/lib/home-content";
import { site } from "@/lib/site";
import {
  fadeUp,
  revealMask,
  transitionBase,
  transitionSlow,
  useParallaxY,
  viewportOnce,
} from "./motion";

/**
 * HomeFinalCta — powerful emotional close with cinematic background.
 */
export function HomeFinalCta() {
  const ref = useRef<HTMLElement>(null);
  const yBg = useParallaxY(ref, [0, 80]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[80svh] w-full items-center overflow-hidden bg-ink text-paper"
      aria-label="Schedule a consultation with Jason Cadwell"
    >
      {/* Background */}
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ y: yBg }}>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={finalCta.desktopSrc}
            alt={finalCta.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src={finalCta.mobileSrc}
            alt={finalCta.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 scrim-bottom opacity-90" />
        <div className="noise-overlay" />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cadwell/30 blur-[120px]"
      />

      <div className="section-wrap relative w-full py-section-y-md md:py-section-y-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="max-w-[58rem]"
        >
          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="flex items-center gap-3"
          >
            <span className="tick-light" aria-hidden />
            <p className="eyebrow-light">{finalCta.eyebrow}</p>
          </motion.div>

          <motion.h2
            variants={revealMask}
            transition={transitionSlow}
            className="display-hero mt-7 text-paper"
          >
            Let&apos;s make your next move
            <span className="italic-serif block text-cadwell-soft">a confident one.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={transitionBase}
            className="dek-light mt-8 max-w-[40rem]"
          >
            {finalCta.dek}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link href={finalCta.button.href} className="btn-on-dark">
              {finalCta.button.label}
            </Link>
            <div className="flex flex-col gap-1">
              <a href={site.phoneHref} className="btn-ghost-on-dark">
                Call Jason · {site.phone}
              </a>
              <a href={site.trackingPhoneHref} className="text-center text-[0.72rem] tracking-[0.14em] text-paper/45 hover:text-paper/70 transition-colors duration-cinema ease-cinema">
                {site.trackingPhone}
              </a>
            </div>
          </motion.div>

          {/* Trust signature */}
          <motion.div
            variants={fadeUp}
            transition={transitionBase}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-paper/70"
          >
            <span className="text-[0.72rem] uppercase tracking-[0.28em]">
              {site.brokerage.fullName}
            </span>
            <span className="hidden h-3 w-px bg-paper/30 md:block" aria-hidden />
            <span className="text-[0.72rem] uppercase tracking-[0.28em]">
              {site.geoLong}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
