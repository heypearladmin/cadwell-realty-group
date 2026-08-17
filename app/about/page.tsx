import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: `About ${site.agentName} · Albany Oregon Realtor`,
  description: `About ${site.agentName} of ${site.brand}. ${site.description}`,
  alternates: { canonical: `${site.websiteUrl}/about` },
  openGraph: { title: "About Jason Cadwell · Albany Oregon Realtor", images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

const pillars = [
  {
    title: "Born of Albany",
    dek: "Raised in the Willamette Valley. I learned this town one neighborhood, one season, and one Saturday market at a time.",
  },
  {
    title: "Powered by scale",
    dek: "Cadwell Group is powered by Jason Mitchell Group — one of the country's most respected real estate teams. National infrastructure, local intel, single point of contact.",
  },
  {
    title: "Seller-led",
    dek: "Most of what I do is help Albany families sell well. Pricing strategy, modern marketing, calm negotiation, and a close that holds together.",
  },
  {
    title: "Builder-fluent",
    dek: "I work side by side with Albany's most respected builders. New construction families get a buyer advocate at the table from contract to keys.",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          personSchema(),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: `About ${site.agentName}`, url: `${site.websiteUrl}/about` },
          ]),
          webPageSchema({
            name: `About ${site.agentName} · Albany Oregon Realtor`,
            url: `${site.websiteUrl}/about`,
            description: `About ${site.agentName} of ${site.brand}. ${site.description}`,
          }),
        ]}
      />
      <section className="relative isolate overflow-hidden bg-paper-deep pb-section-y-md pt-40 md:pb-section-y-lg md:pt-section-y-md">
        <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-50" />
        <div className="section-wrap relative grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">About {site.agentName}</p>
            </div>
            <h1 className="display-xl mt-7 text-ink">
              A trusted Albany advisor,
              <span className="italic-serif"> not a high-pressure salesperson.</span>
            </h1>
            <p className="dek mt-7">
              Jason Cadwell leads Cadwell Group, powered by Jason Mitchell Group, with a focus on helping buyers and sellers navigate the Albany, Oregon market with more clarity and confidence. His work centers on seller strategy, move-up buyers, relocation, and new construction across Linn and Benton Counties. Jason&apos;s brand stands apart through calm strategy, practical guidance, and strong local market context — designed to help people understand pricing, positioning, neighborhood differences, and the tradeoffs that shape a real estate decision.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] frame-ink">
              <Image
                src={site.agentPortraitSrc}
                alt={site.agentPortraitAlt}
                fill
                priority
                sizes="(min-width: 768px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/65 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl glass-card-dark px-5 py-4 text-paper">
                <p className="caption !text-paper/70">{site.geo}</p>
                <p className="mt-1 font-display text-[1.15rem] italic-serif">
                  &ldquo;Calm strategy beats loud sales. Every time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-section-y md:py-section-y-md">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">What we stand for</p>
        </div>
        <h2 className="display-lg mt-7 max-w-[40rem] text-ink">
          Why do Albany sellers and buyers
          <span className="italic-serif"> choose Jason Cadwell?</span>
        </h2>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 md:gap-6">
          {pillars.map((p) => (
            <li
              key={p.title}
              className="rounded-2xl border border-ink/[0.08] bg-paper-deep/60 p-7 md:p-8"
            >
              <h3 className="font-display text-[1.5rem] font-medium leading-tight text-ink">{p.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-[1.72] text-charcoal">{p.dek}</p>
            </li>
          ))}
        </ul>

        <div className="mt-section-y flex flex-wrap gap-3 border-t border-ink/[0.08] pt-10">
          <Link href={site.contactPath} className="btn-primary">
            Start a conversation
          </Link>
          <Link href={site.neighborhoodsPath} className="btn-ghost">
            Neighborhood guides
          </Link>
        </div>
      </section>
    </main>
  );
}
