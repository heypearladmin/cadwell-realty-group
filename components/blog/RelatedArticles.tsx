import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

type Props = { posts: BlogPost[] };

export function RelatedArticles({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <aside
      aria-labelledby="related-heading"
      className="border-t border-ink/[0.08] pt-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="tick" aria-hidden />
        <p className="eyebrow">Keep reading</p>
      </div>
      <h2 id="related-heading" className="display-md text-ink">
        Related Articles
      </h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.href}
            className="group block overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper-deep transition-shadow duration-cinema ease-cinema hover:shadow-surface-hover"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/[0.04]">
              <Image
                src={post.imageSrc}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1100ms] ease-cinema group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <div className="px-5 py-4">
              <p className="caption !text-ink/45 mb-2">{post.eyebrow}</p>
              <h3 className="text-[0.9375rem] font-medium leading-snug text-ink transition-colors duration-cinema ease-cinema group-hover:text-cadwell">
                {post.title}
              </h3>
              {post.publishedAt && (
                <p className="mt-2 text-[0.78rem] text-ink/40">{post.publishedAt}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
