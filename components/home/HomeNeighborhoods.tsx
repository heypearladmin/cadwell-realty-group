"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { neighborhoods } from "@/lib/home-content";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

/**
 * HomeNeighborhoods — featured Albany neighborhood guides.
 * Horizontally scrollable on mobile, asymmetric editorial grid on desktop.
 */
export function HomeNeighborhoods() {
  return (
    <section
      id="neighborhoods"
      className="relative isolate overflow-hidden bg-paper-deep py-section-y-md md:py-section-y-lg"
    >
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-wrap relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="max-w-[40rem]"
          >
            <motion.div variants={fadeUp} transition={transitionBase} className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Albany neighborhoods</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-7 text-ink"
            >
              Pick a pocket of Albany
              <span className="italic-serif"> that fits your life.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end"
          >
            <Link href="/neighborhoods" className="nav-link text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cadwell">
              View all neighborhoods →
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-14 grid auto-rows-[260px] grid-cols-6 gap-4 md:auto-rows-[300px] md:gap-5 lg:auto-rows-[340px]"
        >
          {/* Feature tile — North Albany */}
          <NeighborhoodTile
            n={neighborhoods[0]}
            className="col-span-6 row-span-2 md:col-span-3"
            feature
          />
          {neighborhoods[1] && <NeighborhoodTile n={neighborhoods[1]} className="col-span-3" />}
          {neighborhoods[2] && <NeighborhoodTile n={neighborhoods[2]} className="col-span-3" />}
          {neighborhoods[3] && <NeighborhoodTile n={neighborhoods[3]} className="col-span-3" />}
          {neighborhoods[4] && <NeighborhoodTile n={neighborhoods[4]} className="col-span-3" />}
        </motion.div>
      </div>
    </section>
  );
}

function NeighborhoodTile({
  n,
  className = "",
  feature = false,
}: {
  n: (typeof neighborhoods)[number];
  className?: string;
  feature?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={transitionBase}
      className={`group relative overflow-hidden rounded-[22px] ${className}`}
    >
      <Link href={n.href} className="block h-full w-full">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={n.imageSrc}
            alt={n.imageAlt}
            fill
            sizes={feature ? "(min-width: 768px) 48vw, 100vw" : "(min-width: 768px) 24vw, 50vw"}
            className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
            <div>
              <p className="caption !text-paper/70">{n.vibe}</p>
              <h3
                className={`mt-2 font-display ${
                  feature ? "text-[2rem] md:text-[2.5rem]" : "text-[1.35rem] md:text-[1.5rem]"
                } font-medium leading-tight text-paper`}
              >
                {n.title}
              </h3>
              {feature && (
                <p className="mt-3 max-w-[32rem] text-[0.95rem] leading-[1.65] text-paper/85">
                  {n.dek}
                </p>
              )}
            </div>
            <span
              aria-hidden
              className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper/15 backdrop-blur-md transition-colors duration-cinema ease-cinema group-hover:bg-cadwell"
            >
              <span className="text-paper">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
