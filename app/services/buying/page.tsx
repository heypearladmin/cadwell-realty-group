import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { serviceSchema, breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Buying a Home in Albany, Oregon · Complete Resource Hub",
  description:
    "Every buying resource you need to purchase a home in Albany, Oregon — guides, market insights, neighborhood breakdowns, and expert advice from Cadwell Group.",
  alternates: { canonical: `${site.websiteUrl}/services/buying` },
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

const buyingFaqs = [
  {
    q: "How much do I need to put down to buy a home in Albany, Oregon?",
    a: "Conventional loans typically require 3–20% down depending on loan type and borrower profile. FHA loans allow 3.5% down with a 580+ credit score. Oregon Housing and Community Services (OHCS) offers down payment assistance programs for qualifying first-time buyers. Contact Jason Cadwell to connect with Albany lenders experienced with local market pricing.",
  },
  {
    q: "How long does it take to buy a home in Albany, Oregon?",
    a: "From accepted offer to close, the typical Albany transaction takes 30–45 days. Getting pre-approved before you write your first offer is the most effective way to compress the timeline and compete confidently in the $350,000–$500,000 range where Albany's market is most active.",
  },
  {
    q: "Do I need a buyer's agent to purchase a home in Albany?",
    a: "You're not required to have a buyer's agent, but purchasing without one means negotiating directly against a listing agent whose fiduciary duty is to the seller. A buyer's agent costs you nothing — their commission is paid by the seller — and provides comparable sales data, inspection expertise, and negotiation support at no out-of-pocket cost.",
  },
  {
    q: "What is the best neighborhood in Albany, Oregon for families?",
    a: "North Albany is the most popular choice for families relocating to Albany, offering top-rated schools, newer construction, and proximity to the Corvallis corridor. South Albany and Periwinkle offer the most affordable entry points with established neighborhoods and Greater Albany Public Schools. Your best neighborhood depends on school priorities, budget, and lifestyle.",
  },
  {
    q: "Is Albany, Oregon a good place to buy a home in 2026?",
    a: "Albany offers strong relative affordability compared to Corvallis and Salem while sharing I-5 corridor access and Willamette Valley lifestyle. The $350K–$500K range has consistent buyer demand with limited inventory. For buyers moving from Portland or the Bay Area, Albany's value-to-quality ratio is significant. Local expertise matters more in a market this specific than national trend data.",
  },
];

const resources = [
  {
    category: "Buying",
    title: "Buying in Albany, Oregon",
    dek: "The complete buyer's hub — neighborhoods, pricing, market conditions, and what every buyer needs to know about this specific market.",
    href: "/albany-real-estate",
  },
  {
    category: "New Construction",
    title: "New Construction in Albany",
    dek: "Builder advocacy from lot selection through final walkthrough. Why the builder's sales agent works for the builder — not for you.",
    href: "/new-construction",
  },
  {
    category: "Buyer's Guide",
    title: "First-Time Buyer's Guide",
    dek: "Everything first-time buyers need to know about the Albany market — from pre-approval to closing day — without the jargon.",
    href: "/blog/first-time-buyer-guide-albany-oregon",
  },
  {
    category: "Buyer's Guide",
    title: "Home Buying Guide for Albany",
    dek: "Financing, market trends, neighborhood breakdowns, and offer strategy — the essential local buyer's reference.",
    href: "/blog/your-ultimate-guide-to-buy-albany-oregon-homes",
  },
  {
    category: "Offer Strategy",
    title: "Making a Competitive Offer",
    dek: "How to write an offer that wins in Albany's market without overpaying. Escalation clauses, contingencies, and timing.",
    href: "/blog/how-to-make-a-competitive-offer-albany-oregon",
  },
  {
    category: "Market Research",
    title: "New vs. Existing Homes in 2026",
    dek: "A side-by-side comparison of new construction and resale homes in Albany — cost, timeline, negotiating leverage, and risk.",
    href: "/blog/2026-albany-home-buying-guide-new-vs-existing",
  },
  {
    category: "Market Research",
    title: "Rent vs. Buy in Albany — 2026",
    dek: "The honest financial breakdown for Albany buyers: when renting makes sense, when buying wins, and what the math actually says.",
    href: "/blog/rent-vs-buy-albany-oregon-2026",
  },
  {
    category: "Relocation",
    title: "Relocating to Albany, Oregon",
    dek: "The complete relocation guide for families and remote workers moving to Albany — what to know before you arrive.",
    href: "/blog/relocating-to-albany-oregon-2026",
  },
  {
    category: "Market Research",
    title: "Albany vs. Corvallis for Buyers",
    dek: "Which Willamette Valley city makes sense for your move? A direct comparison of price, schools, lifestyle, and commute.",
    href: "/blog/albany-vs-corvallis-oregon-home-buyers",
  },
];

const steps = [
  {
    step: "01",
    title: "Get Pre-Approved",
    dek: "Know your budget before you tour a single home. Pre-approval signals seriousness to sellers and lets you move fast when the right property appears.",
  },
  {
    step: "02",
    title: "Find the Right Home",
    dek: "Search with a local buyer's agent who knows Albany's six distinct pockets — not just MLS data, but which streets, schools, and blocks matter.",
  },
  {
    step: "03",
    title: "Make a Smart Offer",
    dek: "Price, terms, and timing all matter. The right offer strategy in Albany's market is different from the generic advice you find online.",
  },
  {
    step: "04",
    title: "Inspect and Protect Yourself",
    dek: "A good inspection reveals what a listing agent won't volunteer. We help you understand what's material and what's cosmetic.",
  },
  {
    step: "05",
    title: "Close with Confidence",
    dek: "Navigate title, escrow, and funding with a single point of contact who explains every line item — no handoffs, no surprises.",
  },
];

export default function BuyingPillarPage() {
  const pageUrl = `${site.websiteUrl}/services/buying`;

  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          serviceSchema({
            name: "Home Buying in Albany, Oregon",
            url: pageUrl,
            description:
              "Complete buying resources for Albany, Oregon home buyers — guides, market data, neighborhood expertise, and professional buyer representation from Cadwell Group.",
            category: "Real Estate — Home Buying",
          }),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Buying Resources", url: pageUrl },
          ]),
          webPageSchema({
            name: "Buying a Home in Albany, Oregon · Complete Resource Hub",
            url: pageUrl,
            description:
              "Every buying resource you need to purchase a home in Albany, Oregon — guides, market insights, neighborhood breakdowns, and expert advice from Cadwell Group.",
          }),
          faqSchema(buyingFaqs),
        ]}
      />

      {/* Hero */}
      <section className="section-wrap pt-40 pb-section-y md:pt-48 md:pb-section-y-md">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink/50">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-ink/70">Buying Resources</li>
          </ol>
        </nav>

        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">For buyers in Albany, OR</p>
        </div>
        <h1 className="display-xl mt-7 max-w-4xl text-ink">
          Everything you need to
          <span className="italic-serif"> buy a home in Albany, Oregon.</span>
        </h1>
        <p className="dek mt-8 max-w-3xl">
          Albany's real estate market rewards buyers who understand the micro-level differences
          between neighborhoods, price bands, and timing. This resource hub collects everything
          Cadwell Group knows about buying here — organized so you can move from research to
          closing without wasted time.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={site.contactPath} className="btn-primary">
            Talk to a buyer's agent
          </Link>
          <Link href="/albany-real-estate" className="btn-ghost">
            Explore the market
          </Link>
        </div>
      </section>

      {/* Buying process */}
      <section id="process" className="section-wrap pb-section-y">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">The buying journey</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          How does buying a home
          <span className="italic-serif"> in Albany, Oregon work?</span>
        </h2>
        <ol className="mt-14 grid gap-4 md:grid-cols-5 md:gap-5">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative flex flex-col gap-3 rounded-2xl bg-paper-deep/70 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="caption !text-cadwell">Step {s.step}</span>
                <span className="h-2 w-2 rounded-full bg-cadwell" aria-hidden />
              </div>
              <h3 className="font-display text-[1.15rem] font-medium text-ink">{s.title}</h3>
              <p className="text-[0.875rem] leading-[1.65] text-charcoal/80">{s.dek}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Resource grid */}
      <section className="section-wrap pb-section-y">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Buyer resources</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          Guides, research, and
          <span className="italic-serif"> local intel for Albany buyers.</span>
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-paper p-7 shadow-surface transition-shadow duration-cinema ease-cinema hover:shadow-surface-hover"
            >
              <div>
                <p className="caption !text-cadwell">{r.category}</p>
                <h3 className="mt-3 font-display text-[1.2rem] font-medium leading-tight text-ink md:text-[1.3rem]">
                  {r.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.7] text-charcoal/75">{r.dek}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-cadwell">
                Read the guide
                <span
                  aria-hidden
                  className="block h-px w-5 bg-cadwell transition-all duration-cinema ease-cinema group-hover:w-9"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lead magnet + CTA split */}
      <section className="section-wrap pb-section-y border-t border-ink/[0.08] pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Start the conversation</p>
            </div>
            <h2 className="display-md mt-6 max-w-xl text-ink">
              Ready to find your
              <span className="italic-serif"> Albany home?</span>
            </h2>
            <p className="mt-5 text-[0.9875rem] leading-[1.75] text-charcoal">
              Whether you&rsquo;re six months out or ready to write an offer next week, Jason
              Cadwell provides a no-pressure consultation specific to your situation — budget,
              timeline, neighborhood, and financing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={site.contactPath} className="btn-primary">
                Book a buyer consultation
              </Link>
              <Link href="/albany-real-estate" className="btn-ghost">
                See the market
              </Link>
            </div>
            <p className="mt-6 text-[0.8125rem] text-muted">
              {site.brokerage.fullName} · {site.brokerage.licenseLine}
            </p>
          </div>
          <LeadMagnetForm
            magnet="buyer-checklist"
            title="Free: Albany Home Buyer's Checklist"
            description="Everything you need to do before, during, and after buying a home in Albany — from credit check to closing day."
            ctaLabel="Download the free checklist"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-wrap pb-section-y-lg border-t border-ink/[0.08] pt-14">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Frequently asked</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          Common questions about
          <span className="italic-serif"> buying in Albany, Oregon</span>
        </h2>
        <dl className="mt-14 divide-y divide-ink/[0.08]">
          {buyingFaqs.map((faq) => (
            <div key={faq.q} className="py-8">
              <dt className="font-display text-[1.2rem] font-medium text-ink md:text-[1.3rem]">
                {faq.q}
              </dt>
              <dd className="mt-4 text-[0.9875rem] leading-[1.78] text-charcoal/85">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
