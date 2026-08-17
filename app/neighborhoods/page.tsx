import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { neighborhoods } from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Albany Oregon Neighborhoods",
  description:
    "Featured Albany, Oregon neighborhoods. North Albany, Historic Downtown (Monteith & Hackleman), Periwinkle, Knox Butte, and Oak Creek. Hyperlocal guides from Cadwell Group.",
  alternates: { canonical: `${site.websiteUrl}/neighborhoods` },
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

export default function NeighborhoodsIndexPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Neighborhoods", url: `${site.websiteUrl}/neighborhoods` },
          ]),
          webPageSchema({
            name: "Albany Oregon Neighborhoods",
            url: `${site.websiteUrl}/neighborhoods`,
            description: "Featured Albany, Oregon neighborhoods. North Albany, Historic Downtown, Periwinkle, Knox Butte, and Oak Creek. Hyperlocal guides from Cadwell Group.",
          }),
        ]}
      />
      <section className="section-wrap pt-40 pb-section-y md:pt-48 md:pb-section-y-md">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Albany neighborhoods</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          Read the corridor
          <span className="italic-serif"> before you tour it.</span>
        </h1>
        <p className="dek mt-8">
          Each pocket of Albany has its own rhythm. School paths, riverfront mornings, builder
          quality, and the slow streets locals quietly protect. Pick the one that fits your life.
        </p>
      </section>

      <section className="section-wrap pb-section-y-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-y-20">
          {neighborhoods.map((n) => (
            <Link key={n.slug} href={n.href} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                <Image
                  src={n.imageSrc}
                  alt={n.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.05]"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="display-sm text-ink">{n.title}</h2>
                  <span className="caption">{n.vibe}</span>
                </div>
                <p className="text-[0.9375rem] leading-[1.7] text-charcoal/85">{n.dek}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cadwell">
                  Read the guide
                  <span aria-hidden className="block h-px w-8 bg-cadwell transition-all duration-cinema ease-cinema group-hover:w-12" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-section-y-lg border-t border-ink/[0.08] pt-14">
        <div className="max-w-lg">
          <LeadMagnetForm
            magnet="neighborhood-comparison"
            title="Free: Albany Neighborhood Comparison Guide"
            description="Side-by-side breakdown of all 5 Albany neighborhoods — prices, schools, commute times, and who each area is best for."
            ctaLabel="Download the free comparison"
          />
        </div>
      </section>
    </main>
  );
}
