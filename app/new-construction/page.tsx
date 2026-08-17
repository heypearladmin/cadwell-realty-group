import type { Metadata } from "next";
import Link from "next/link";
import { newConstruction } from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "New Construction in Albany, Oregon",
  description:
    "New construction homes in Albany, Oregon. Cadwell Group partners with respected Albany builders to advocate for buyers from lot selection through final walkthrough.",
  alternates: { canonical: `${site.websiteUrl}/new-construction` },
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

export default function NewConstructionPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          serviceSchema({
            name: "New Construction Homes in Albany, Oregon",
            url: `${site.websiteUrl}/new-construction`,
            description:
              "New construction homes in Albany, Oregon. Cadwell Group partners with respected Albany builders to advocate for buyers from lot selection through final walkthrough.",
            category: "Real Estate — New Construction",
          }),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "New Construction", url: `${site.websiteUrl}/new-construction` },
          ]),
          webPageSchema({
            name: "New Construction in Albany, Oregon",
            url: `${site.websiteUrl}/new-construction`,
            description: "New construction homes in Albany, Oregon. Cadwell Group partners with respected Albany builders to advocate for buyers from lot selection through final walkthrough.",
          }),
          faqSchema([
            { q: "How long does it take to build a new home in Albany, Oregon?", a: "Production builders in Albany's Knox Butte and North Albany corridors typically quote 7–12 months from design center completion to close. Spec homes already under construction can close in 30–60 days. Custom builds run 12–18 months depending on design complexity. Most Albany new construction closings slip 4–8 weeks from the original estimated close date — plan accordingly." },
            { q: "Do I need a buyer's agent for new construction in Albany?", a: "Yes — and it costs you nothing. Builder sales representatives work for the builder, not for you. A buyer's agent reviews the contract, guides you through the design center, coordinates inspections, and advocates for your interests at no out-of-pocket cost since most production builders in Albany pay the buyer's agent commission." },
            { q: "Can I negotiate the price on a new construction home in Albany?", a: "Production builders rarely discount base prices. Where builders have flexibility is in incentives: closing cost credits, design center upgrade allowances, lot premium waivers, and rate buydowns. A buyer's agent with existing builder relationships surfaces these incentives more effectively than a buyer walking in cold." },
            { q: "Should I use the builder's preferred lender for my new construction home?", a: "Builder preferred lenders often offer closing cost credits ($5,000–$10,000) that appear attractive. Always compare the full loan estimate — including the rate — against at least one independent lender. If the preferred lender's rate is 0.125–0.25% higher, the credit may not compensate over the loan's life. Get competing estimates before committing." },
            { q: "Do I need a home inspection on a new construction home in Albany?", a: "Yes. Municipal inspections are compliance checks against code — not quality assessments. A two-phase independent inspection (pre-drywall and final pre-close) catches installation errors before you take ownership. Buyers who skip inspections on new construction have limited recourse after closing for issues not covered by warranty." },
          ]),
        ]}
      />
      <section className="section-wrap pt-40 pb-section-y md:pt-48 md:pb-section-y-md">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">{newConstruction.eyebrow}</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          A better way to <span className="italic-serif">buy new in Albany.</span>
        </h1>
        <p className="dek mt-8 max-w-3xl">{newConstruction.dek}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={site.contactPath} className="btn-primary">Talk new construction</Link>
          <Link href="#process" className="btn-ghost">See the process</Link>
        </div>
      </section>

      <section className="section-wrap pb-section-y">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {newConstruction.benefits.map((b, i) => (
            <article key={b.title} className="rounded-[20px] border border-ink/[0.08] bg-paper p-7 shadow-surface">
              <p className="caption !text-cadwell">0{i + 1} · Benefit</p>
              <h3 className="mt-4 font-display text-[1.4rem] font-medium leading-tight text-ink md:text-[1.5rem]">{b.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-[1.7] text-charcoal">{b.dek}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-wrap pb-section-y-lg">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">The process</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          How does buying new construction
          <span className="italic-serif"> in Albany, Oregon work?</span>
        </h2>

        <ol className="mt-14 grid gap-4 md:grid-cols-4 md:gap-6">
          {newConstruction.timeline.map((t, i) => (
            <li key={t.step} className="relative flex flex-col gap-3 rounded-2xl bg-paper-deep/70 p-6">
              <div className="flex items-center justify-between">
                <span className="caption !text-cadwell">Step {String(i + 1).padStart(2, "0")}</span>
                <span className="h-2 w-2 rounded-full bg-cadwell" aria-hidden />
              </div>
              <h3 className="font-display text-[1.25rem] font-medium text-ink">{t.step}</h3>
              <p className="text-[0.875rem] leading-[1.65] text-charcoal/80">{t.dek}</p>
            </li>
          ))}
        </ol>

        <div className="mt-section-y border-t border-ink/[0.08] pt-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="font-display text-[1.25rem] italic-serif text-ink md:text-[1.5rem]">Want a no-pressure conversation about lots, builders, and timing?</p>
            <Link href={site.contactPath} className="btn-primary">Start the conversation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
