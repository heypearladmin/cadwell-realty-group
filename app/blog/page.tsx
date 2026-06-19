import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { exploreTiles, insightCards } from "@/lib/home-content";
import { blogPosts } from "@/lib/blog-posts";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Journal · Albany Oregon Field Notes",
  description:
    "Field notes from Albany, Oregon. Moving guides, cost of living, lifestyle rituals, new construction insights, and real estate market trends from Cadwell Realty Group.",
  openGraph: { images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

export default function BlogIndexPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: site.websiteUrl },
    { name: "Journal", url: `${site.websiteUrl}/blog` },
  ]);

  const all = [
    ...blogPosts.map((p) => ({
      kind: p.category,
      eyebrow: p.eyebrow,
      title: p.title,
      dek: p.dek,
      href: p.href,
      imageSrc: p.imageSrc,
      imageAlt: p.imageAlt,
      tag: p.eyebrow,
    })),
    ...insightCards.map((c) => ({ ...c, tag: c.eyebrow })),
    ...exploreTiles.map((t) => ({
      kind: t.category,
      eyebrow: "Explore Albany",
      title: t.title,
      dek: t.dek,
      href: t.href,
      imageSrc: t.imageSrc,
      imageAlt: t.imageAlt,
      tag: "Explore Albany",
    })),
  ];

  return (
    <main id="main" className="bg-paper">
      <JsonLd schema={crumbs} />
      <section className="section-wrap pt-40 pb-section-y md:pt-48 md:pb-section-y-md">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Journal</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          Field notes from
          <span className="italic-serif"> Albany, Oregon.</span>
        </h1>
        <p className="dek mt-8">
          Honest, plain-English guides for the questions buyers, sellers, and the curious actually
          ask. Market reads, neighborhood deep dives, builder spotlights, and the slow side of
          Albany worth knowing.
        </p>
      </section>

      <section className="section-wrap pb-section-y-lg">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {all.map((card) => (
            <article key={`${card.kind}-${card.title}`} className="group">
              <Link href={card.href} className="block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.05]"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-paper/15 px-3 py-1.5 backdrop-blur-md">
                    <span className="caption !text-paper/80">{card.tag}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="display-sm text-ink">{card.title}</h2>
                  <p className="mt-3 text-[0.9375rem] leading-[1.7] text-charcoal/85">{card.dek}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cadwell">
                    Continue reading
                    <span aria-hidden className="block h-px w-8 bg-cadwell transition-all duration-cinema ease-cinema group-hover:w-12" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
