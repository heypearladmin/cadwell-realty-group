import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findFaq,
  getAllFaqs,
  getRelatedFaqs,
  getTakeawaysForPost,
  getNonFaqSections,
  getSourcesForPost,
  getPostForFaq,
} from "@/lib/faq-utils";
import { getRelatedPosts, headingToId } from "@/lib/blog-utils";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllFaqs().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = findFaq(slug);
  if (!faq) return {};
  const canonicalUrl = `${site.websiteUrl}/faq/${slug}`;
  const description = faq.answer.slice(0, 155) + (faq.answer.length > 155 ? "…" : "");
  return {
    title: `${faq.question} — ${site.brand}`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: faq.question,
      description,
      url: canonicalUrl,
      type: "article",
    },
    twitter: { site: "@cadwellrealty", card: "summary" },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const faq = findFaq(slug);
  if (!faq) notFound();

  const post = getPostForFaq(faq);
  const pageUrl = `${site.websiteUrl}/faq/${slug}`;

  const takeaways = post ? getTakeawaysForPost(post) : [];
  const contentSections = post ? getNonFaqSections(post.sections) : [];
  const relatedFaqs = getRelatedFaqs(slug, faq.sourceArticleSlug);
  const sources = getSourcesForPost(faq.sourceArticleSlug);
  const relatedPosts = post
    ? getRelatedPosts(faq.sourceArticleSlug, post.category, 3)
    : [];

  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          faqSchema([{ q: faq.question, a: faq.answer }]),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Journal", url: `${site.websiteUrl}/blog` },
            {
              name: faq.sourceArticleTitle,
              url: `${site.websiteUrl}/blog/${faq.sourceArticleSlug}`,
            },
            { name: faq.question, url: pageUrl },
          ]),
          webPageSchema({
            name: faq.question,
            url: pageUrl,
            description: faq.answer.slice(0, 155),
          }),
        ]}
      />

      <article className="section-wrap pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-[52rem]">

          {/* ── 1. BREADCRUMB ─────────────────────────────────── */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink/50">
              <li>
                <Link href="/" className="hover:text-ink transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href={site.blogPath} className="hover:text-ink transition-colors">
                  Journal
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link
                  href={`/blog/${faq.sourceArticleSlug}`}
                  className="hover:text-ink transition-colors"
                >
                  <span className="line-clamp-1 max-w-[18ch] block">
                    {faq.sourceArticleTitle}
                  </span>
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-ink/75">Answer</li>
            </ol>
          </nav>

          {/* ── HERO: label + H1 + meta ───────────────────────── */}
          <div className="flex items-center gap-3 mb-6">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Frequently Asked</p>
          </div>

          <h1 className="display-xl text-ink">{faq.question}</h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.8125rem] text-ink/50">
            <span>By {site.agentName}</span>
            <span aria-hidden className="text-ink/25">·</span>
            <span>
              <Link
                href={`/blog/${faq.sourceArticleSlug}`}
                className="hover:text-ink transition-colors"
              >
                {faq.sourceArticleTitle}
              </Link>
            </span>
            {post?.publishedAt && (
              <>
                <span aria-hidden className="text-ink/25">·</span>
                <span>
                  Last Updated: <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                </span>
              </>
            )}
          </div>

          {/* ── 2. QUICK ANSWER ───────────────────────────────── */}
          <div className="mt-10 rounded-2xl border-l-4 border-cadwell bg-paper-deep px-7 py-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Quick Answer</p>
            </div>
            <p className="text-[1.0625rem] leading-[1.78] text-ink/85">{faq.answer}</p>
          </div>

          {/* ── 3. KEY TAKEAWAYS ──────────────────────────────── */}
          {takeaways.length > 0 && (
            <div className="mt-10 border-t border-ink/[0.08] pt-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Key Takeaways</p>
              </div>
              <ul className="space-y-3" role="list">
                {takeaways.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.25em] shrink-0 text-cadwell text-[0.9rem] font-semibold"
                    >
                      ✓
                    </span>
                    <span className="text-[0.9375rem] leading-[1.65] text-ink/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── 4. EXPANDED ARTICLE ───────────────────────────── */}
          {contentSections.length > 0 && (
            <div className="mt-14 space-y-12">
              {contentSections.map((section) => (
                <section
                  key={section.heading}
                  id={headingToId(section.heading)}
                  className="border-t border-ink/[0.08] pt-10 scroll-mt-24"
                >
                  <h2 className="display-md text-ink">{section.heading}</h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[1.0625rem] leading-[1.78] text-ink/75"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* ── 6. RELATED QUESTIONS ──────────────────────────── */}
          {relatedFaqs.length > 0 && (
            <div className="mt-14 border-t border-ink/[0.08] pt-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Related Questions</p>
              </div>
              <h2 className="display-md text-ink mb-7">People also ask</h2>
              <ul className="space-y-3" role="list">
                {relatedFaqs.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/faq/${related.slug}`}
                      className="group flex items-center justify-between gap-6 rounded-2xl border border-ink/[0.08] bg-paper-deep px-6 py-4 transition-all duration-cinema ease-cinema hover:border-cadwell/25 hover:bg-paper hover:shadow-surface"
                    >
                      <span className="text-[0.9375rem] font-medium leading-snug text-ink transition-colors duration-cinema ease-cinema group-hover:text-cadwell">
                        {related.question}
                      </span>
                      <span
                        aria-hidden
                        className="shrink-0 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-cadwell opacity-60 transition-opacity group-hover:opacity-100"
                      >
                        Read →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── 7. SOURCES ────────────────────────────────────── */}
          {sources.length > 0 && (
            <div className="mt-12 border-t border-ink/[0.08] pt-10">
              <p className="caption !text-ink/50 mb-4">Sources</p>
              <ul className="space-y-2.5" role="list">
                {sources.map((source) => (
                  <li key={source.url} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-[0.3em] shrink-0 text-ink/30 text-[0.75rem]">•</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.875rem] text-ink/60 underline underline-offset-2 decoration-ink/25 transition-colors hover:text-ink hover:decoration-ink/60"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── 9. RELATED ARTICLES ───────────────────────────── */}
          {relatedPosts.length > 0 && (
            <div className="mt-14 border-t border-ink/[0.08] pt-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Keep reading</p>
              </div>
              <h2 className="display-md text-ink mb-7">Related Articles</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={rp.href}
                    className="group block overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper-deep transition-shadow duration-cinema ease-cinema hover:shadow-surface-hover"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/[0.04]">
                      <Image
                        src={rp.imageSrc}
                        alt={rp.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-5 py-4">
                      <p className="caption !text-ink/45 mb-2">{rp.eyebrow}</p>
                      <h3 className="text-[0.875rem] font-medium leading-snug text-ink transition-colors duration-cinema ease-cinema group-hover:text-cadwell">
                        {rp.title}
                      </h3>
                      {rp.publishedAt && (
                        <p className="mt-2 text-[0.75rem] text-ink/40">{rp.publishedAt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ── 10. CTA ───────────────────────────────────────── */}
          <div className="mt-14 rounded-2xl border border-ink/[0.08] bg-paper-deep px-7 py-8">
            <p className="caption !text-ink/50 mb-3">Need guidance?</p>
            <h2 className="font-display text-[1.5rem] font-medium leading-tight text-ink">
              Have a specific question about Albany real estate?
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-[1.72] text-ink/70">
              Every situation is different. A short conversation with Jason often answers more
              than any article can — and it&apos;s free.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href={site.contactPath} className="btn-primary">
                Book a consultation
                <span aria-hidden>→</span>
              </Link>
              <Link href={site.blogPath} className="editorial-link text-sm font-medium">
                More field notes
              </Link>
            </div>
          </div>

        </div>
      </article>
    </main>
  );
}
