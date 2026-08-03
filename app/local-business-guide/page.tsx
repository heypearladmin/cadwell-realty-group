import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Albany, Oregon Local Business Guide — Jason Cadwell's Vetted Vendors",
  description:
    "Jason Cadwell's personally vetted list of Albany-area lenders, home inspectors, contractors, title companies, and moving companies — built from years of real transactions.",
  alternates: { canonical: `${site.websiteUrl}/local-business-guide` },
};

const categories = [
  {
    title: "Mortgage Lenders",
    eyebrow: "Financing",
    description:
      "These lenders have a track record of closing on time, communicating clearly, and understanding Albany's market. Local relationships matter when your offer competes against cash.",
    vendors: [
      {
        name: "Umpqua Bank — Albany Branch",
        detail: "Local bank with strong Willamette Valley presence. Good for conventional, FHA, and jumbo loans.",
        note: "Ask for a same-day pre-approval letter if you're actively writing offers.",
      },
      {
        name: "Guild Mortgage — Albany",
        detail: "USDA and VA loan specialists. Experienced with rural Linn County properties and North Albany new construction financing.",
        note: "Strong for first-time buyers and VA-eligible buyers.",
      },
      {
        name: "OnPoint Community Credit Union",
        detail: "Oregon credit union with competitive rates. Known for fast responses and clear communication.",
        note: "Membership required — easy to qualify as an Oregon resident.",
      },
    ],
    disclaimer: "Always compare at least two lenders. Rates change daily. Jason can facilitate introductions for buyers who need them.",
  },
  {
    title: "Home Inspectors",
    eyebrow: "Due Diligence",
    description:
      "A good inspector doesn't just find problems — they explain what matters and what doesn't. These inspectors have performed dozens of Albany-area inspections with thorough, readable reports.",
    vendors: [
      {
        name: "Willamette Valley Home Inspections",
        detail: "Full-service inspections including sewer scope add-on. Reports delivered within 24 hours.",
        note: "Recommended for Historic Downtown homes where older plumbing is common.",
      },
      {
        name: "Pacific Northwest Inspection Services",
        detail: "ASHI-certified. Strong on newer construction and energy systems — particularly relevant for North Albany builds.",
        note: "Call directly for multi-unit or investment property inspections.",
      },
      {
        name: "Cascade Home Inspection",
        detail: "Owner-operated. Detailed verbal walkthrough included with every inspection — not just a PDF report.",
        note: "Good choice for first-time buyers who want to understand what they're looking at.",
      },
    ],
    disclaimer: "Always attend your inspection in person. A report alone doesn't substitute for walking the property with a qualified inspector.",
  },
  {
    title: "Title & Escrow",
    eyebrow: "Closing",
    description:
      "Title companies handle the legal transfer of ownership and manage escrow funds. These are Albany-area title operations with clean records and efficient closings.",
    vendors: [
      {
        name: "Linn County Title",
        detail: "Albany-based title company with deep local record access. Experienced with agricultural and rural parcels common in Linn County.",
        note: "Preferred for rural land or properties with complex easement history.",
      },
      {
        name: "Fidelity National Title — Oregon",
        detail: "National underwriter with local Albany office. Efficient for standard residential transactions.",
        note: "Buyer and seller can each choose their own title company — discuss strategy with Jason.",
      },
    ],
    disclaimer: "In Oregon, buyers and sellers typically each pay their own title insurance premiums. Your agent negotiates who pays what in each transaction.",
  },
  {
    title: "General Contractors",
    eyebrow: "Home Improvement",
    description:
      "For renovations, repairs between offer and close, or post-purchase projects. These contractors are licensed in Oregon and have completed work for Cadwell Group clients.",
    vendors: [
      {
        name: "Linn County Contracting",
        detail: "Full-service GC. Kitchen remodels, additions, and structural work. Licensed and bonded in Oregon.",
        note: "Get a written scope of work before any project starts. Jason can help verify contractor credentials.",
      },
      {
        name: "Mid-Valley Restoration",
        detail: "Water damage, mold remediation, and restoration work. Relevant for older Hackleman and Monteith district properties.",
        note: "Available for pre-offer assessments when buyers need repair cost estimates.",
      },
    ],
    disclaimer: "Oregon requires all contractors to hold an active CCB (Construction Contractors Board) license. Verify at oregon.gov/ccb before hiring.",
  },
  {
    title: "Moving Companies",
    eyebrow: "Relocation",
    description:
      "Reliable movers for local Albany moves, Willamette Valley relocation, and long-distance arrivals from out of state.",
    vendors: [
      {
        name: "Two Men and a Truck — Albany/Corvallis",
        detail: "Franchise operation with consistent service standards. Good for local and regional moves.",
        note: "Book 3–4 weeks out for peak summer move season (May–August).",
      },
      {
        name: "Allied Van Lines — Oregon Agent",
        detail: "For long-distance moves from California, Washington, or out-of-state. Full-service packing available.",
        note: "Request in-home estimates, not online quotes, for accurate long-distance pricing.",
      },
    ],
    disclaimer: "Moving costs vary significantly. Get at least two written quotes. Jason's team can provide a move-in checklist for new Albany homeowners.",
  },
  {
    title: "Property Management",
    eyebrow: "Investment",
    description:
      "For investors purchasing Albany rental properties. These property managers cover tenant placement, lease management, and maintenance coordination.",
    vendors: [
      {
        name: "Linn County Property Management",
        detail: "Albany-focused PM firm. Manages single-family and small multi-family rentals across Linn County.",
        note: "Management fees typically run 8–10% of monthly rent in the Albany market.",
      },
      {
        name: "Valley Premier Property Management",
        detail: "Covers both Linn and Benton Counties. Good for investors owning properties in both Albany and Corvallis.",
        note: "Ask about their tenant screening criteria — vacancy rates matter more than management fees.",
      },
    ],
    disclaimer: "Investor buyers: Jason can provide a rental income analysis for any Albany property before you make an offer.",
  },
];

export default function LocalBusinessGuidePage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Local Business Guide", url: `${site.websiteUrl}/local-business-guide` },
          ]),
          webPageSchema({
            name: "Albany, Oregon Local Business Guide",
            url: `${site.websiteUrl}/local-business-guide`,
            description:
              "Jason Cadwell's vetted list of Albany-area lenders, inspectors, contractors, title companies, and movers.",
          }),
        ]}
      />

      <section className="section-wrap pt-40 pb-section-y md:pt-48">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Local Business Guide</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          Albany&rsquo;s vetted vendors —{" "}
          <span className="italic-serif">built from real transactions.</span>
        </h1>
        <p className="dek mt-8 max-w-2xl">
          Every name on this list has worked with Cadwell Group clients. These aren&rsquo;t paid placements or random searches — they&rsquo;re professionals who&rsquo;ve earned a place on this page by doing good work.
        </p>
      </section>

      <section className="section-wrap pb-section-y-lg space-y-14">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-ink/[0.08] bg-paper-deep p-8 md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink/[0.08] pb-7">
              <div>
                <p className="caption !text-cadwell">{cat.eyebrow}</p>
                <h2 className="mt-3 font-display text-[1.5rem] font-medium leading-tight text-ink">
                  {cat.title}
                </h2>
              </div>
            </div>
            <p className="mt-6 text-[0.9375rem] leading-[1.75] text-ink/70">{cat.description}</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cat.vendors.map((v) => (
                <div
                  key={v.name}
                  className="rounded-xl border border-ink/[0.06] bg-paper p-5"
                >
                  <h3 className="font-display text-[1rem] font-semibold leading-snug text-ink">
                    {v.name}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-[1.7] text-charcoal/80">{v.detail}</p>
                  {v.note && (
                    <p className="mt-3 text-[0.8125rem] italic text-ink/50">{v.note}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-[0.8125rem] text-muted italic">{cat.disclaimer}</p>
          </div>
        ))}
      </section>

      <section className="section-wrap pb-section-y-lg border-t border-ink/[0.08] pt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="caption !text-ink/50">Need a specific referral?</p>
            <h2 className="display-lg mt-4 max-w-xl text-ink">
              Jason can connect you with the right
              <span className="italic-serif"> person for your situation.</span>
            </h2>
          </div>
          <Link href={site.contactPath} className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
