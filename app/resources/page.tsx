import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Albany Real Estate Resources — Free Guides & Downloads",
  description:
    "Free resources for Albany, Oregon home buyers and sellers — downloadable checklists, market reports, neighborhood guides, and key articles from Cadwell Group.",
  alternates: { canonical: `${site.websiteUrl}/resources` },
};

const guides = [
  {
    magnet: "buyer-checklist" as const,
    title: "Albany Home Buyer's Checklist",
    description:
      "Everything to do before, during, and after buying in Albany — from credit prep to closing day. A step-by-step guide built for this market.",
    ctaLabel: "Download free checklist",
    forWho: "For buyers",
  },
  {
    magnet: "seller-prep-guide" as const,
    title: "Albany Seller's Prep Guide",
    description:
      "What to do in the 30–90 days before listing your Albany home. Covers pricing strategy, repairs that ROI, staging basics, and launch timing.",
    ctaLabel: "Download free seller guide",
    forWho: "For sellers",
  },
  {
    magnet: "neighborhood-comparison" as const,
    title: "Albany Neighborhood Comparison Guide",
    description:
      "Side-by-side breakdown of all 5 Albany neighborhoods — prices, schools, commute times, and who each area is best for.",
    ctaLabel: "Download free comparison",
    forWho: "For buyers & movers",
  },
  {
    magnet: "market-report-2026" as const,
    title: "Albany Market Report 2026",
    description:
      "Median prices, days on market, appreciation rates, and neighborhood-by-neighborhood data for mid-2026. What the market is actually doing.",
    ctaLabel: "Download free report",
    forWho: "For buyers & sellers",
  },
];

const articleLinks = [
  {
    category: "Buying",
    articles: [
      { label: "Albany Real Estate — Buyer's Overview", href: "/albany-real-estate" },
      { label: "How to Make a Competitive Offer in Albany", href: "/blog/how-to-make-a-competitive-offer-albany-oregon" },
      { label: "Linn County vs. Benton County — Which Side to Buy On", href: "/blog/linn-county-vs-benton-county-albany-buyers" },
    ],
  },
  {
    category: "Selling",
    articles: [
      { label: "Albany Seller Playbook", href: "/sell" },
      { label: "Albany Home Seller Timeline", href: "/blog/albany-home-seller-timeline-decision-to-close" },
    ],
  },
  {
    category: "Neighborhoods",
    articles: [
      { label: "Albany Neighborhoods Overview", href: "/neighborhoods" },
      { label: "Knox Butte & Oak Creek Neighborhood Guide", href: "/blog/knox-butte-oak-creek-neighborhood-guide" },
      { label: "Downsizing in Albany — A Guide", href: "/blog/downsizing-in-albany-oregon-guide" },
    ],
  },
  {
    category: "Living Here",
    articles: [
      { label: "Living in Albany, Oregon — A Local's Guide", href: "/living-here" },
      { label: "Local Business Guide — Vetted Albany Vendors", href: "/local-business-guide" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Resources", url: `${site.websiteUrl}/resources` },
          ]),
          webPageSchema({
            name: "Albany Real Estate Resources — Free Guides & Downloads",
            url: `${site.websiteUrl}/resources`,
            description:
              "Free resources for Albany, Oregon home buyers and sellers — checklists, market reports, and neighborhood guides from Cadwell Group.",
          }),
        ]}
      />

      <section className="section-wrap pt-40 pb-section-y md:pt-48">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Resources</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          Free guides for Albany
          <span className="italic-serif"> buyers and sellers.</span>
        </h1>
        <p className="dek mt-8 max-w-2xl">
          Everything Cadwell Group has published — downloadable PDFs, neighborhood guides, market data, and local resources — in one place. No fluff, no gated paywalls.
        </p>
      </section>

      {/* Downloadable guides */}
      <section className="section-wrap pb-section-y-lg">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Free downloads</p>
        </div>
        <h2 className="display-lg mt-7 max-w-2xl text-ink">
          Guides you can
          <span className="italic-serif"> take with you.</span>
        </h2>
        <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.7] text-ink/65">
          Enter your name and email to download. We&rsquo;ll add you to the Cadwell Group newsletter — unsubscribe any time.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <div key={g.magnet} className="relative rounded-2xl border border-ink/[0.08] bg-paper-deep p-8">
              <span className="caption !text-cadwell">{g.forWho}</span>
              <LeadMagnetForm
                magnet={g.magnet}
                title={g.title}
                description={g.description}
                ctaLabel={g.ctaLabel}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Article links */}
      <section className="section-wrap pb-section-y-lg border-t border-ink/[0.08] pt-14">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Key articles</p>
        </div>
        <h2 className="display-lg mt-7 max-w-2xl text-ink">
          Read up on
          <span className="italic-serif"> the Albany market.</span>
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {articleLinks.map((cat) => (
            <div key={cat.category}>
              <h3 className="caption !text-cadwell mb-5">{cat.category}</h3>
              <ul className="space-y-3">
                {cat.articles.map((a) => (
                  <li key={a.href}>
                    <Link
                      href={a.href}
                      className="editorial-link text-[0.9rem] leading-snug"
                    >
                      {a.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-wrap pb-section-y-lg border-t border-ink/[0.08] pt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="caption !text-ink/50">Have a question not covered here?</p>
            <h2 className="display-lg mt-4 max-w-xl text-ink">
              Jason answers every
              <span className="italic-serif"> inquiry personally.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={site.contactPath} className="btn-primary">
              Contact Jason
            </Link>
            <Link href={site.blogPath} className="btn-ghost">
              Browse all articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
