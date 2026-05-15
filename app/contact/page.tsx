import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Jason Cadwell · Albany Oregon Realtor",
  description: `Get in touch with ${site.agentName} of ${site.brand}. Hyperlocal Albany, Oregon real estate guidance for sellers, move-up buyers, and new construction families.`,
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap pb-section-y-md pt-40 md:pt-48 md:pb-section-y-lg">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Contact</p>
            </div>
            <h1 className="display-xl mt-7 text-ink">
              Tell me the chapter
              <span className="italic-serif"> you&apos;re in.</span>
            </h1>
            <p className="dek mt-7">
              Send a note. Selling, moving up, relocating to Albany, or just curious about your
              home&apos;s value. I read every message and respond within a business day.
            </p>

            <div className="mt-12 space-y-4 border-t border-ink/[0.08] pt-10 text-[0.95rem] text-charcoal">
              <p>
                <span className="caption block">Call</span>
                <Link href={site.phoneHref} className="mt-2 inline-block font-display text-[1.5rem] font-medium text-ink hover:text-cadwell">
                  {site.phone}
                </Link>
              </p>
              <p>
                <span className="caption block">Email</span>
                <Link href={site.emailHref} className="mt-2 inline-block text-ink hover:text-cadwell">
                  {site.email}
                </Link>
              </p>
              <p>
                <span className="caption block">Office</span>
                <span className="mt-2 inline-block">{site.brokerage.address}</span>
              </p>
              <p className="pt-3 text-[0.78rem] uppercase tracking-[0.22em] text-muted">
                {site.brokerage.fullName}
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:pl-8">
            <form className="grid gap-6 rounded-3xl border border-ink/[0.08] bg-paper-deep/60 p-8 md:p-10">
              <div className="grid gap-2">
                <label htmlFor="name" className="caption">Name</label>
                <input id="name" name="name" type="text" required className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="caption">Email</label>
                <input id="email" name="email" type="email" required className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="caption">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="topic" className="caption">I&apos;d like to talk about</label>
                <select id="topic" name="topic" className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none" defaultValue="selling">
                  <option value="selling">Selling my home</option>
                  <option value="buying">Buying in Albany</option>
                  <option value="new-construction">New construction</option>
                  <option value="valuation">A free home valuation</option>
                  <option value="general">Something else</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="caption">Message</label>
                <textarea id="message" name="message" rows={6} required className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none" />
              </div>
              <button type="submit" className="btn-primary justify-self-start">Send note</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
