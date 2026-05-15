"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { exploreTiles } from "@/lib/home-content";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

/**
 * HomeExplore — Hyperlocal Albany editorial grid.
 * Asymmetric tile composition with documentary captions and hover zooms.
 * Travel-editorial-meets-real-estate-intelligence.
 */
export function HomeExplore() {
  // 8 tiles arranged into a magazine grid:
  // row 1: wide left + 1 small
  // row 2: 2 small + 1 tall right
  // row 3: 1 small + 1 wide right
  // row 4: 1 wide
  const [t0, t1, t2, t3, t4, t5, t6, t7] = exploreTiles;

  return (
    <section
      id="albany"
      className="relative isolate bg-paper py-section-y-md md:py-section-y-lg"
    >
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-40" />

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
              <p className="eyebrow">Hyperlocal Albany</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-6 text-ink"
            >
              The Albany only locals
              <span className="italic-serif"> reliably find.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="md:col-span-5 md:pl-6"
          >
            <span className="dek block">
              Riverfront mornings on the Willamette. National Register blocks in Monteith. Family
              afternoons at Bryant. New construction climbing toward the Cascades. Each pocket of
              Albany has its own rhythm, and that&apos;s the part we know best.
            </span>
          </motion.p>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="mt-14 grid auto-rows-[minmax(220px,auto)] grid-cols-12 gap-4 md:mt-16 md:gap-5">
          {/* Row 1 — wide left */}
          {t0 && <Tile tile={t0} className="col-span-12 md:col-span-7 md:row-span-2" aspect="aspect-[4/3] md:aspect-auto md:h-full" feature />}
          {t1 && <Tile tile={t1} className="col-span-6 md:col-span-5" aspect="aspect-[4/5]" />}
          {t2 && <Tile tile={t2} className="col-span-6 md:col-span-5" aspect="aspect-[4/5]" />}

          {/* Row 2 */}
          {t3 && <Tile tile={t3} className="col-span-6 md:col-span-4" aspect="aspect-[4/5]" />}
          {t4 && <Tile tile={t4} className="col-span-6 md:col-span-4" aspect="aspect-[4/5]" />}
          {t5 && <Tile tile={t5} className="col-span-12 md:col-span-4" aspect="aspect-[4/5]" />}

          {/* Row 3 */}
          {t6 && <Tile tile={t6} className="col-span-12 md:col-span-7" aspect="aspect-[16/9] md:aspect-[16/8]" feature />}
          {t7 && <Tile tile={t7} className="col-span-12 md:col-span-5" aspect="aspect-[4/3]" />}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/[0.08] pt-10"
        >
          <p className="font-display text-[1.25rem] italic-serif text-ink md:text-[1.4rem]">
            Want the longer version of any of these?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/neighborhoods" className="btn-primary">
              See all neighborhoods
            </Link>
            <Link href="/blog" className="btn-ghost">
              Open the journal
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Tile({
  tile,
  className = "",
  aspect = "aspect-[4/5]",
  feature = false,
}: {
  tile: (typeof exploreTiles)[number];
  className?: string;
  aspect?: string;
  feature?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[22px] ${className}`}
    >
      <Link href={tile.href} className="block h-full w-full">
        <div className={`relative ${aspect} w-full overflow-hidden`}>
          <Image
            src={tile.imageSrc}
            alt={tile.imageAlt}
            fill
            sizes={feature ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
            className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="caption !text-paper/70">{tile.category.replace(/-/g, " ")}</p>
            <h3
              className={`mt-2 font-display ${
                feature ? "text-[1.75rem] md:text-[2.1rem]" : "text-[1.25rem] md:text-[1.4rem]"
              } font-medium leading-tight text-paper`}
            >
              {tile.title}
            </h3>
            {feature && (
              <p className="mt-3 max-w-[34rem] text-[0.95rem] leading-[1.65] text-paper/85">
                {tile.dek}
              </p>
            )}
          </div>
          <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-paper/15 backdrop-blur-md transition-colors duration-cinema ease-cinema group-hover:bg-cadwell">
            <span className="text-paper" aria-hidden>
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
