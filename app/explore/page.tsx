import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { exploreTiles } from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Explore Albany, Oregon",
  description:
    "Restaurants, river life, schools, parks, downtown, weekend rhythm, neighborhood guides, and hidden corners. A premium hyperlocal read for Albany, Oregon.",
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

export default function ExploreIndexPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: site.websiteUrl },
          { name: "Explore Albany", url: `${site.websiteUrl}/explore` },
        ])}
      />
      <section className="section-wrap pt-40 pb-section-y md:pt-48 md:pb-section-y-md">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Explore Albany</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          A city worth knowing,
          <span className="italic-serif"> one vignette at a time.</span>
        </h1>
        <p className="dek mt-8">
          Eight ways into Albany. The Willamette and the Calapooia. Historic Monteith blocks.
          Greater Albany schools. Family parks and quiet trails. Restaurants worth the drive and
          the small Saturday rituals that turn a ZIP code into a neighborhood.
        </p>
      </section>

      <section className="section-wrap pb-section-y-lg">
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {exploreTiles.map((tile, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={tile.category} className="group grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-center">
                <Link href={tile.href} className={`block lg:col-span-7 ${reverse ? "lg:order-2 lg:col-start-6" : ""}`}>
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                    <Image src={tile.imageSrc} alt={tile.imageAlt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.05]" />
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 flex items-center gap-2 text-paper/85 sm:left-8 sm:top-8">
                      <span className="caption !text-paper/70">№ {String(i + 1).padStart(2, "0")} / 08</span>
                      <span aria-hidden className="h-px w-6 bg-paper/40" />
                    </div>
                  </div>
                </Link>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:col-start-1" : "lg:pl-2"}`}>
                  <Link href={tile.href} className="block">
                    <p className="caption">{tile.category.replace(/-/g, " ")}</p>
                    <h2 className="display-md mt-4 text-ink transition-colors duration-cinema ease-cinema group-hover:text-cadwell">{tile.title}</h2>
                    <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.78] text-charcoal/85">{tile.dek}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cadwell">
                      Read field note
                      <span aria-hidden className="block h-px w-8 bg-cadwell transition-all duration-cinema ease-cinema group-hover:w-14" />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
