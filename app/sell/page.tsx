import type { Metadata } from "next";
import Link from "next/link";
import { sellerSection } from "@/lib/home-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sell Your Home · Albany Oregon",
  description:
    "Sell your home in Albany, Oregon with confidence. Cadwell Realty Group offers a seller-focused, cinematic marketing playbook, calm strategy, and a single point of contact from listing to close.",
};

export default function SellPage() {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap pt-40 pb-section-y md:pt-48 md:pb-section-y-md">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">For sellers in Albany, OR</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          Selling in Albany deserves
          <span className="italic-serif"> a strategy, not a sign in the yard.</span>
        </h1>
        <p className="dek mt-8 max-w-3xl">
          Sellers are the heart of our business. Every listing gets a custom positioning plan, a
          modern digital launch, and a single advisor who answers the phone. No handoffs. No noise.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={site.contactPath} className="btn-primary">Get your home value</Link>
          <Link href={`${site.contactPath}?topic=valuation`} className="btn-ghost">Request a listing consultation</Link>
        </div>
      </section>

      <section className="section-wrap pb-section-y">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {sellerSection.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-ink/[0.08] bg-paper-deep/60 p-7">
              <p className="font-display text-[2.5rem] font-medium leading-none text-cadwell md:text-[3rem]">{m.value}</p>
              <p className="mt-3 caption">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="playbook" className="section-wrap pb-section-y-lg">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">The seller playbook</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          Honest. Modern. <span className="italic-serif">Repeatable.</span>
        </h2>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 md:gap-6">
          {sellerSection.steps.map((s) => (
            <li key={s.step} className="relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper p-7 shadow-surface md:p-9">
              <div className="absolute right-6 top-5 font-display text-[3.5rem] font-medium leading-none text-cadwell/15 md:text-[4.5rem]">{s.step}</div>
              <p className="caption !text-cadwell">{`Step ${s.step}`}</p>
              <h3 className="mt-3 font-display text-[1.5rem] font-medium leading-tight text-ink md:text-[1.75rem]">{s.title}</h3>
              <p className="mt-4 max-w-[36rem] text-[0.95rem] leading-[1.72] text-charcoal">{s.dek}</p>
            </li>
          ))}
        </ol>

        <div className="mt-section-y border-t border-ink/[0.08] pt-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="font-display text-[1.25rem] italic-serif text-ink md:text-[1.5rem]">Ready to see what your home is worth in this market?</p>
            <Link href={site.contactPath} className="btn-primary">Get your home value</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
