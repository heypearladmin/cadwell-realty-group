import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findFaq, getAllFaqs } from "@/lib/faq-utils";
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
    title: faq.question,
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

  const pageUrl = `${site.websiteUrl}/faq/${slug}`;

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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink/50">
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
                <span className="line-clamp-1 max-w-[200px] block">{faq.sourceArticleTitle}</span>
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-ink/75">Answer</li>
          </ol>
        </nav>

        <div className="max-w-[52rem]">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Frequently Asked</p>
          </div>

          {/* Question */}
          <h1 className="display-xl text-ink">{faq.question}</h1>

          {/* Answer */}
          <div className="mt-10 border-t border-ink/[0.08] pt-10">
            <p className="text-[1.125rem] leading-[1.8] text-ink/80">{faq.answer}</p>
          </div>

          {/* Source article card */}
          <div className="mt-12 rounded-2xl border border-ink/[0.08] bg-paper-deep px-7 py-6">
            <p className="caption !text-ink/50 mb-2">From the guide</p>
            <Link
              href={`/blog/${faq.sourceArticleSlug}`}
              className="text-[1rem] font-medium text-ink transition-colors hover:text-cadwell"
            >
              {faq.sourceArticleTitle}
              <span aria-hidden className="ml-2 text-cadwell">→</span>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-16 border-t border-ink/[0.08] pt-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Need more guidance?</p>
            </div>
            <h2 className="display-md text-ink">Talk to Jason directly.</h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">
              Every situation is different. A short conversation often answers more than
              any article can.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={site.contactPath} className="btn-primary">
                Send a note
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={`/blog/${faq.sourceArticleSlug}`}
                className="btn-ghost"
              >
                Read full article
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
