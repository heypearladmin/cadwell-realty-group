import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { serviceSchema, breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Selling a Home in Albany, Oregon · Complete Resource Hub",
  description:
    "Every selling resource you need to list your home in Albany, Oregon — guides, pricing intel, marketing playbook, and expert strategy from Cadwell Group.",
  alternates: { canonical: `${site.websiteUrl}/services/selling` },
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

const sellingFaqs = [
  {
    q: "What is the best time to sell a home in Albany, Oregon?",
    a: "Spring (March–May) and early summer (June–July) consistently produce the most buyer activity in Albany, driven by families closing before the school year. Well-priced listings in North Albany frequently receive multiple offers within the first two weeks during these windows. Correctly priced homes sell in every season — accurate pricing matters more than calendar timing.",
  },
  {
    q: "How much does it cost to sell a home in Albany, Oregon?",
    a: "Total seller-side costs in a typical Albany transaction run 7–9% of the sale price, including real estate commission, title insurance ($1,200–$1,800), escrow fees ($800–$1,200), property tax proration, and any closing credits negotiated with the buyer. On a $440,000 sale with no remaining mortgage, a seller typically nets $400,000–$410,000.",
  },
  {
    q: "How long does it take to sell a home in Albany, Oregon?",
    a: "Well-priced Albany homes in the $350,000–$500,000 range average 18–22 days on market in 2026. North Albany homes near top schools often receive offers within 7–14 days in spring. Overpriced listings sit 45–60+ days before reducing — accurate pricing from day one is the most effective tool for a fast sale at full market value.",
  },
  {
    q: "How do I know what my Albany home is worth?",
    a: "A Comparative Market Analysis (CMA) from a local Albany agent is the most accurate tool — it accounts for micro-location factors (school attendance zones, street-level differences) that automated tools like Zillow Zestimate miss by 10–20%. Jason Cadwell provides no-obligation CMAs for Albany homeowners, typically delivered within 48 hours.",
  },
  {
    q: "Which home improvements add the most value before selling in Albany?",
    a: "Fresh interior paint ($1,500–$3,000), professional carpet cleaning or replacement, updated light fixtures, and landscaping cleanup have the strongest ROI. Large structural renovations rarely return their full cost. Major deferred maintenance — roof leaks, failing water heaters, crawlspace moisture — should always be addressed before listing. Skip the kitchen remodel; do the deferred maintenance.",
  },
];

const resources = [
  {
    category: "Selling",
    title: "Sell Your Albany Home",
    dek: "The complete seller strategy — custom positioning plan, modern digital launch, and a single advisor from listing to close.",
    href: "/sell",
  },
  {
    category: "Home Value",
    title: "What's My Home Worth?",
    dek: "How Albany home values are set, what moves the number, and why automated tools miss by 10–20% in this specific market.",
    href: "/blog/albany-oregon-home-valuation-guide",
  },
  {
    category: "Seller's Guide",
    title: "How to Sell Your Albany Home",
    dek: "Step-by-step seller strategy for Albany — pricing, preparation, launch timing, and what to expect from the first showing to close.",
    href: "/blog/sell-your-home-in-albany-oregon",
  },
  {
    category: "Seller's Guide",
    title: "Seller's Timeline: Decision to Close",
    dek: "A stage-by-stage breakdown of what to expect when selling in Albany — from the decision to list through final closing.",
    href: "/blog/albany-home-seller-timeline-decision-to-close",
  },
  {
    category: "Market Research",
    title: "What Makes Albany Homes Sell Faster",
    dek: "The data-backed factors that cut days on market in Albany — pricing accuracy, presentation, and launch velocity.",
    href: "/blog/what-makes-a-home-sell-faster-in-albany",
  },
  {
    category: "Neighborhood",
    title: "Selling in North Albany",
    dek: "North Albany's school attendance zones, buyer demographics, and what sellers in this corridor need to know about timing and pricing.",
    href: "/blog/sell-your-north-albany-home-with-local-expertise",
  },
  {
    category: "Neighborhood",
    title: "Selling a Historic Downtown Albany Home",
    dek: "The Monteith and Hackleman district selling guide — what buyers look for, how to price character homes, and where the market is moving.",
    href: "/blog/sell-your-historic-downtown-albany-home",
  },
  {
    category: "Life Stage",
    title: "Downsizing in Albany, Oregon",
    dek: "A practical guide to rightsizing — what to sell, where to move, and how to navigate the financial and emotional side of downsizing.",
    href: "/blog/downsizing-in-albany-oregon-guide",
  },
];

const steps = [
  {
    step: "01",
    title: "Know Your Home's Value",
    dek: "Accurate pricing is the foundation of every successful Albany sale. A CMA from a local agent beats any automated tool in this market.",
  },
  {
    step: "02",
    title: "Prepare Strategically",
    dek: "Fix what matters, skip what doesn't. The right pre-sale prep focuses on deferred maintenance and presentation — not renovations.",
  },
  {
    step: "03",
    title: "Launch to Market",
    dek: "Professional photography, a timed MLS launch, and digital reach to the buyers most likely to pay full price in Albany.",
  },
  {
    step: "04",
    title: "Navigate Offers",
    dek: "Every offer tells a story. Review terms, buyer strength, and contingencies with an advisor who negotiates on your behalf — not theirs.",
  },
  {
    step: "05",
    title: "Close with Clarity",
    dek: "Escrow, title, and your net proceeds — explained clearly, managed precisely, with a single advisor available through funding.",
  },
];

export default function SellingPillarPage() {
  const pageUrl = `${site.websiteUrl}/services/selling`;

  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          serviceSchema({
            name: "Home Selling in Albany, Oregon",
            url: pageUrl,
            description:
              "Complete selling resources for Albany, Oregon home sellers — pricing guides, market data, neighborhood-specific strategy, and professional listing representation from Cadwell Group.",
            category: "Real Estate — Home Selling",
          }),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Selling Resources", url: pageUrl },
          ]),
          webPageSchema({
            name: "Selling a Home in Albany, Oregon · Complete Resource Hub",
            url: pageUrl,
            description:
              "Every selling resource you need to list your home in Albany, Oregon — guides, pricing intel, marketing playbook, and expert strategy from Cadwell Group.",
          }),
          faqSchema(sellingFaqs),
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
            <li className="text-ink/70">Selling Resources</li>
          </ol>
        </nav>

        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">For sellers in Albany, OR</p>
        </div>
        <h1 className="display-xl mt-7 max-w-4xl text-ink">
          Everything you need to
          <span className="italic-serif"> sell your Albany home for top dollar.</span>
        </h1>
        <p className="dek mt-8 max-w-3xl">
          Selling a home in Albany is not a generic process. It&rsquo;s a micro-market where the
          right pricing, the right timing, and the right first impression determine whether you
          receive multiple offers or watch days-on-market climb. This hub collects every selling
          resource Cadwell Group has built — organized for sellers who want the full picture.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={site.contactPath} className="btn-primary">
            Get your home value
          </Link>
          <Link href={`${site.contactPath}?topic=valuation`} className="btn-ghost">
            Request a listing consultation
          </Link>
        </div>
      </section>

      {/* Selling process */}
      <section id="process" className="section-wrap pb-section-y">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">The selling process</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          How does selling a home
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
          <p className="eyebrow">Seller resources</p>
        </div>
        <h2 className="display-lg mt-7 max-w-3xl text-ink">
          Guides, strategy, and
          <span className="italic-serif"> local intel for Albany sellers.</span>
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
              Ready to see what your
              <span className="italic-serif"> Albany home is worth?</span>
            </h2>
            <p className="mt-5 text-[0.9875rem] leading-[1.75] text-charcoal">
              Jason Cadwell provides a no-obligation Comparative Market Analysis for Albany
              homeowners — typically delivered within 48 hours. No Zestimate. No generic formula.
              A real number based on what comparable homes have actually sold for on your block.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={site.contactPath} className="btn-primary">
                Get your home value
              </Link>
              <Link href="/sell" className="btn-ghost">
                See the seller playbook
              </Link>
            </div>
            <p className="mt-6 text-[0.8125rem] text-muted">
              {site.brokerage.fullName} · {site.brokerage.licenseLine}
            </p>
          </div>
          <LeadMagnetForm
            magnet="seller-prep-guide"
            title="Free: Albany Seller's Prep Guide"
            description="What to do in the 60 days before you list — repairs worth doing, what to skip, and how to price correctly."
            ctaLabel="Download the free guide"
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
          <span className="italic-serif"> selling in Albany, Oregon</span>
        </h2>
        <dl className="mt-14 divide-y divide-ink/[0.08]">
          {sellingFaqs.map((faq) => (
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
