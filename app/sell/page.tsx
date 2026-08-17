import type { Metadata } from "next";
import Link from "next/link";
import { sellerSection } from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo/schema";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Sell Your Home · Albany Oregon",
  description:
    "Sell your home in Albany, Oregon with confidence. Cadwell Group offers a seller-focused, cinematic marketing playbook, calm strategy, and a single point of contact from listing to close.",
  alternates: { canonical: `${site.websiteUrl}/sell` },
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

export default function SellPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          serviceSchema({
            name: "Home Selling in Albany, Oregon",
            url: `${site.websiteUrl}/sell`,
            description:
              "Sell your home in Albany, Oregon with confidence. Cadwell Group offers a seller-focused marketing playbook, calm strategy, and a single point of contact from listing to close.",
            category: "Real Estate — Home Selling",
          }),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Sell Your Home", url: `${site.websiteUrl}/sell` },
          ]),
          webPageSchema({
            name: "Sell Your Home · Albany Oregon",
            url: `${site.websiteUrl}/sell`,
            description: "Sell your home in Albany, Oregon with confidence. Cadwell Group offers a seller-focused marketing playbook, calm strategy, and a single point of contact from listing to close.",
          }),
          faqSchema([
            { q: "How long does it take to sell a home in Albany, Oregon?", a: "Well-priced Albany homes in the $350,000–$500,000 range typically sell in 18–22 days on average. Homes in North Albany near top schools often receive offers within 7–14 days during spring and summer. Overpriced listings sit 45–60+ days before reducing. Accurate pricing from day one is the single most effective tool for a fast sale." },
            { q: "What is the best time of year to sell a home in Albany, Oregon?", a: "Spring (March–May) and early summer (June–July) consistently produce the most buyer activity, driven by families closing before the school year. Well-priced listings in North Albany frequently receive multiple offers in the first two weeks. Correctly priced homes do sell year-round — fall markets can also be active for motivated buyers." },
            { q: "How much does it cost to sell a home in Albany, Oregon?", a: "Total seller-side costs in a typical Albany transaction run 7–9% of the sale price when commission is included. This covers real estate commission, title insurance (approximately $1,200–$1,800), escrow fees ($800–$1,200), property tax proration, and any closing credits negotiated with the buyer." },
            { q: "Which home improvements add the most value before selling in Albany?", a: "Fresh interior paint ($1,500–$3,000), professional carpet cleaning or replacement, updated light fixtures, and landscaping cleanup have the strongest ROI. Large structural renovations rarely return their full cost. Major deferred maintenance — roof leaks, failing water heaters, crawlspace moisture — should always be addressed before listing." },
            { q: "Do I need an agent to sell my home in Albany, Oregon?", a: "Selling without an agent in Albany typically results in a lower sale price — data consistently shows FSBO homes sell for less than agent-listed homes. A listing agent brings pricing expertise, professional photography, MLS exposure, and negotiation skill. Contact Jason Cadwell at Cadwell Group for a no-obligation listing consultation: (541) 619-4303." },
          ]),
        ]}
      />
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
          How does Cadwell Group
          <span className="italic-serif"> sell Albany homes for more?</span>
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

        <div className="mt-section-y border-t border-ink/[0.08] pt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-display text-[1.25rem] italic-serif text-ink md:text-[1.5rem]">Ready to see what your home is worth in this market?</p>
            <Link href={site.contactPath} className="btn-primary mt-6 inline-flex">Get your home value</Link>
          </div>
          <LeadMagnetForm
            magnet="seller-prep-guide"
            title="Free: Albany Seller's Prep Guide"
            description="What to do in the 60 days before you list — repairs worth doing, what to skip, and how to price correctly."
            ctaLabel="Download the free guide"
          />
        </div>
      </section>
    </main>
  );
}
