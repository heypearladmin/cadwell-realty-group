"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/lib/home-content";
import { fadeUp, revealMask, transitionBase, transitionSlow, viewportOnce } from "./motion";

/**
 * HomeFaq — SEO-friendly accordion for Albany Oregon real estate questions.
 * Includes JSON-LD FAQPage schema for hyperlocal authority.
 */
export function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      className="relative isolate bg-paper-deep py-section-y-md md:py-section-y-lg"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-wrap relative">
        <div className="grid gap-12 md:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="md:col-span-5"
          >
            <motion.div variants={fadeUp} transition={transitionBase} className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">FAQ</p>
            </motion.div>
            <motion.h2
              variants={revealMask}
              transition={transitionSlow}
              className="display-lg mt-7 text-ink"
            >
              The questions Albany families
              <span className="italic-serif"> actually ask.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={transitionBase} className="dek mt-6">
              No fluff. Real answers about selling, buying, and building new in Albany, Oregon.
            </motion.p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
            className="md:col-span-7"
          >
            {faqItems.map((f, i) => {
              const open = openIdx === i;
              return (
                <motion.li
                  key={f.q}
                  variants={fadeUp}
                  transition={transitionBase}
                  className="border-b border-ink/[0.10] first:border-t"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-cinema ease-cinema hover:text-cadwell md:py-7"
                  >
                    <span className="flex-1 font-display text-[1.2rem] font-medium leading-snug text-ink md:text-[1.35rem]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-transform duration-cinema ease-cinema ${
                        open ? "rotate-45 border-cadwell text-cadwell" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current">
                        <path d="M12 5v14M5 12h14" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[44rem] pb-7 text-[0.95rem] leading-[1.72] text-charcoal md:pb-8 md:text-[1rem]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
