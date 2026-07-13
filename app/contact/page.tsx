import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { TrackLink } from "@/components/TrackLink";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Contact Jason Cadwell · Albany Oregon Realtor",
  description: `Reach ${site.agentName} at ${site.brand} for Albany real estate guidance. Sellers, buyers, and new construction families welcome.`,
  openGraph: { description: `Reach ${site.agentName} at ${site.brand} for Albany real estate guidance. Sellers, buyers, and new construction families welcome.`, images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { images: [site.ogImage] },
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Contact", url: `${site.websiteUrl}/contact` },
          ]),
          webPageSchema({
            name: "Contact Jason Cadwell · Albany Oregon Realtor",
            url: `${site.websiteUrl}/contact`,
            description: `Get in touch with ${site.agentName} of ${site.brand}. Hyperlocal Albany, Oregon real estate guidance for sellers, move-up buyers, and new construction families.`,
          }),
        ]}
      />
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
                <TrackLink href={site.phoneHref} eventName="phone_click" className="mt-2 inline-block font-display text-[1.5rem] font-medium text-ink hover:text-cadwell">
                  {site.phone}
                </TrackLink>
                <TrackLink href={site.trackingPhoneHref} eventName="tracking_phone_click" className="mt-1 block text-[0.95rem] text-ink/55 hover:text-cadwell">
                  {site.trackingPhone}
                </TrackLink>
              </p>
              <p>
                <span className="caption block">Email</span>
                <TrackLink href={site.emailHref} eventName="email_click" className="mt-2 inline-block text-ink hover:text-cadwell">
                  {site.email}
                </TrackLink>
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
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
