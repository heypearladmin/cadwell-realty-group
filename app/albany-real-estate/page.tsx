import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  serviceSchema,
  breadcrumbSchema,
  webPageSchema,
  faqSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Albany Oregon Real Estate · Cadwell Group",
  description:
    "Albany, Oregon real estate guided by Jason Cadwell of Cadwell Group. Buy, sell, or value your home in Albany, Linn County, and Benton County with a hyperlocal expert.",
  alternates: { canonical: `${site.websiteUrl}/albany-real-estate` },
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

const cityFaqs = [
  {
    q: "What is the Albany, Oregon real estate market like right now?",
    a: "Albany's market remains active across most price bands, with strongest buyer demand in North Albany's newer subdivisions and Historic Downtown's walkable blocks. Inventory is tighter than the national average in the $350K–$550K range. Cadwell Group tracks weekly showing activity and price adjustments to give sellers and buyers the most current read.",
  },
  {
    q: "How much do homes cost in Albany, Oregon?",
    a: "Albany home prices vary widely by neighborhood and condition. Entry-level homes typically start in the $280K–$350K range in South Albany and Periwinkle. North Albany and Knox Butte new construction runs $450K–$650K+. Historic Downtown properties span a wide range depending on condition and lot. Contact Jason Cadwell for a free, no-pressure valuation specific to your block.",
  },
  {
    q: "What neighborhoods should I consider when buying in Albany, Oregon?",
    a: "Albany has distinct pockets for different lifestyles. North Albany offers newer construction with top-rated schools and easy access to Corvallis. Historic Downtown (Monteith and Hackleman districts) offers character homes near the Willamette riverfront. Knox Butte and Oak Creek are popular for new construction families. South Albany and Periwinkle offer more affordable entry points with established neighborhoods.",
  },
  {
    q: "How do I sell my home in Albany, Oregon for the highest price?",
    a: "The three biggest levers are pricing strategy, presentation, and launch timing. Cadwell Group provides a custom seller playbook: a pricing analysis based on current comps, professional photography and digital marketing, and a coordinated launch to maximize early showing velocity — which is where most of the best offers come from.",
  },
  {
    q: "Is Albany, Oregon a good place to live?",
    a: "Albany offers a rare combination of affordability, natural access, and small-city character. It sits between Salem and Corvallis on I-5, with direct access to the Willamette Valley, Cascade foothills, and the Oregon coast. The city has a strong arts and food scene, Linn County's family-friendly pace, and a real estate market that still rewards buyers who move with local knowledge.",
  },
];

const highlights = [
  { label: "Primary market", value: "Albany, OR" },
  { label: "Counties served", value: "Linn & Benton" },
  { label: "Brokerage", value: "Jason Mitchell Group" },
  { label: "Response time", value: "1 business day" },
];

const neighborhoods = [
  { name: "North Albany", slug: "north-albany", vibe: "Top-rated schools · new construction" },
  { name: "Historic Downtown", slug: "historic-downtown-albany", vibe: "Riverfront · walkable" },
  { name: "Periwinkle", slug: "periwinkle", vibe: "Established · affordable entry" },
  { name: "Knox Butte", slug: "knox-butte", vibe: "New builds · family-friendly" },
  { name: "Oak Creek", slug: "oak-creek", vibe: "Quiet streets · move-up buyers" },
  { name: "South Albany", slug: "south-albany", vibe: "Value · quick I-5 access" },
];

export default function AlbanyRealEstatePage() {
  const pageUrl = `${site.websiteUrl}/albany-real-estate`;

  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          serviceSchema({
            name: "Albany Oregon Real Estate",
            url: pageUrl,
            description:
              "Albany, Oregon real estate services — buying, selling, and home valuations across Linn and Benton Counties, guided by Jason Cadwell of Cadwell Group.",
            category: "Real Estate Services",
          }),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Albany Oregon Real Estate", url: pageUrl },
          ]),
          webPageSchema({
            name: "Albany Oregon Real Estate · Cadwell Group",
            url: pageUrl,
            description:
              "Albany, Oregon real estate guided by Jason Cadwell of Cadwell Group. Buy, sell, or value your home in Albany, Linn County, and Benton County with a hyperlocal expert.",
          }),
          faqSchema(cityFaqs),
        ]}
      />

      {/* Hero */}
      <section className="section-wrap pt-40 pb-section-y md:pt-48 md:pb-section-y-md">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Albany, Oregon · Linn & Benton Counties</p>
        </div>
        <h1 className="display-xl mt-7 max-w-4xl text-ink">
          Albany, Oregon Real Estate —
          <span className="italic-serif"> guided by a local who knows every block.</span>
        </h1>
        <p className="dek mt-8 max-w-3xl">
          Jason Cadwell of Cadwell Group is Albany&rsquo;s hyperlocal real estate authority.
          Whether you&rsquo;re selling a family home, buying your first property, or evaluating a
          new construction lot, you get one advisor who reads this market daily — not a team that
          hands you off.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={site.contactPath} className="btn-primary">
            Get a free home valuation
          </Link>
          <Link href={site.neighborhoodsPath} className="btn-ghost">
            Explore neighborhoods
          </Link>
        </div>
      </section>

      {/* Quick highlights */}
      <section className="section-wrap pb-section-y">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-ink/[0.08] bg-paper-deep/60 p-6">
              <p className="font-display text-[1.75rem] font-medium leading-none text-cadwell md:text-[2rem]">
                {h.value}
              </p>
              <p className="mt-3 caption">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What makes Albany unique */}
      <section className="section-wrap pb-section-y">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">The market</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          What should buyers and sellers know about
          <span className="italic-serif"> the Albany, Oregon real estate market?</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              heading: "Affordability relative to the valley",
              body: "Albany consistently offers lower entry prices than Corvallis and Salem while sharing the same I-5 corridor access. Buyers relocating from Portland or the Bay Area often find Albany's value-to-quality ratio significant.",
            },
            {
              heading: "Neighborhood character matters",
              body: "Albany is not one market — it's six distinct pockets. North Albany buyers are often driven by school ratings and new builds. Downtown buyers want walkability and character. South Albany buyers prioritize value. Each micro-market reads differently.",
            },
            {
              heading: "Inventory cycles faster at the right price",
              body: "Overpriced listings sit. Accurately positioned homes in Albany's core price bands still attract multiple offers within the first two weeks. The gap between list price and sell price is mostly a function of launch strategy.",
            },
            {
              heading: "New construction is active",
              body: "Knox Butte, North Albany, and Timber Ridge are seeing active builder activity. New construction buyers benefit most from having an independent advocate at the table — the builder's sales agent represents the builder, not you.",
            },
            {
              heading: "Schools drive North Albany demand",
              body: "Families consistently target North Albany for access to North Albany Elementary and West Albany High. Properties within those attendance zones hold value better in soft markets and attract more qualified buyers.",
            },
            {
              heading: "Willamette Valley lifestyle",
              body: "Proximity to the Cascades, the coast (1.5 hours), and the valley wine country are real lifestyle factors that Albany buyers from out of state consistently cite. The outdoor access is a competitive advantage versus other mid-sized Oregon cities.",
            },
          ].map((card) => (
            <article
              key={card.heading}
              className="rounded-2xl border border-ink/[0.08] bg-paper p-7 shadow-surface"
            >
              <h3 className="font-display text-[1.25rem] font-medium leading-tight text-ink">
                {card.heading}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.72] text-charcoal">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-wrap pb-section-y">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Albany neighborhoods</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          Which Albany neighborhood
          <span className="italic-serif"> is right for your move?</span>
        </h2>
        <p className="dek mt-6 max-w-2xl">
          Albany&rsquo;s six main pockets each attract different buyers. Here&rsquo;s how to read the map.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-paper p-7 shadow-surface transition-shadow duration-cinema ease-cinema hover:shadow-surface-hover"
            >
              <div>
                <h3 className="font-display text-[1.35rem] font-medium text-ink">{n.name}</h3>
                <p className="mt-2 text-[0.875rem] text-charcoal/80">{n.vibe}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cadwell">
                Read the guide
                <span aria-hidden className="block h-px w-6 bg-cadwell transition-all duration-cinema ease-cinema group-hover:w-10" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Sell CTA */}
      <section className="section-wrap pb-section-y">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">For Albany sellers</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          How do you sell your Albany home
          <span className="italic-serif"> for the highest possible price?</span>
        </h2>
        <p className="dek mt-6 max-w-2xl">
          The answer is pricing precision, modern marketing, and a launch timed to buyer momentum.
          Cadwell Group gives sellers a custom playbook — not a generic checklist.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={site.sellPath} className="btn-primary">See the seller playbook</Link>
          <Link href={site.contactPath} className="btn-ghost">Get your home value</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-wrap pb-section-y-lg">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Frequently asked</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          Common questions about
          <span className="italic-serif"> Albany, Oregon real estate</span>
        </h2>
        <dl className="mt-14 divide-y divide-ink/[0.08]">
          {cityFaqs.map((faq) => (
            <div key={faq.q} className="py-8">
              <dt className="font-display text-[1.2rem] font-medium text-ink md:text-[1.3rem]">
                {faq.q}
              </dt>
              <dd className="mt-4 text-[0.9875rem] leading-[1.78] text-charcoal/85">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Final CTA */}
      <section className="section-wrap pb-section-y-lg border-t border-ink/[0.08] pt-14">
        <p className="caption !text-ink/50">Ready to move?</p>
        <h2 className="display-lg mt-4 max-w-2xl text-ink">
          Talk to Albany&rsquo;s
          <span className="italic-serif"> most trusted local advisor.</span>
        </h2>
        <p className="dek mt-6 max-w-xl">
          Whether you&rsquo;re buying, selling, or just want an honest number on your home — send a
          note and Jason will respond within one business day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={site.contactPath} className="btn-primary">
            Start a conversation
          </Link>
          <Link href={`tel:${site.phone}`} className="btn-ghost">
            Call {site.phone}
          </Link>
        </div>
        <p className="mt-6 text-[0.8125rem] text-muted">
          {site.brokerage.fullName} · {site.brokerage.licenseLine}
        </p>
      </section>
    </main>
  );
}
