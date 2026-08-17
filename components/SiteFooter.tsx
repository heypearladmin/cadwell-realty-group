import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { TrackLink } from "@/components/TrackLink";
import { newsletterCopy } from "@/lib/home-content";
import { site } from "@/lib/site";

const footerNav: { label: string; href: string }[] = [
  { label: "Neighborhoods", href: site.neighborhoodsPath },
  { label: "Sell your home", href: site.sellPath },
  { label: "New Construction", href: site.newConstructionPath },
  { label: "Journal", href: site.blogPath },
  { label: "About Jason", href: site.aboutPath },
  { label: "Contact", href: site.contactPath },
  { label: "Privacy Policy", href: site.policiesPath },
  { label: "Terms & Conditions", href: site.termsPath },
];

const socialLinks: { label: string; href: string }[] = [
  { label: "Facebook", href: site.social.facebook },
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "YouTube", href: site.social.youtube },
];

const seoChips = [
  "Albany OR Realtor",
  "Albany Oregon homes for sale",
  "Sell my home Albany Oregon",
  "Albany OR new construction",
  "Albany Oregon neighborhoods",
  "Linn County real estate",
  "North Albany homes",
  "Knox Butte new construction",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-20" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cadwell/70 to-transparent" />

      <div className="section-wrap relative pt-section-y-md pb-10 md:pt-section-y-lg">
        {/* Sign-off + newsletter */}
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Link
              href="/"
              className="inline-flex items-center gap-4 transition-opacity duration-cinema ease-cinema hover:opacity-90"
              aria-label={`${site.brand} home`}
            >
              <span className="relative block h-16 w-16 shrink-0">
                <Image
                  src={site.logoSrc}
                  alt={site.logoAlt}
                  fill
                  sizes="64px"
                  className="object-contain brightness-0 invert"
                />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-[1.35rem] font-semibold tracking-tight text-paper">
                  {site.brand}
                </span>
                <span className="caption !text-paper/55">
                  {site.geoLong}
                </span>
              </span>
            </Link>

            <div className="mt-10 flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow-light">A closing note</p>
            </div>
            <p className="display-lg mt-6 text-paper">
              The map is easy. The feeling takes longer. Let&apos;s walk it together.
            </p>
            <p className="mt-6 max-w-[40rem] text-[0.9375rem] leading-[1.78] text-paper/70">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {seoChips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-paper/15 px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-paper/55"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow-light">{newsletterCopy.eyebrow}</p>
            </div>
            <h2 className="display-md mt-6 text-paper">{newsletterCopy.title}</h2>
            <p className="mt-5 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-paper/70">
              {newsletterCopy.dek}
            </p>
            <div className="mt-7">
              <NewsletterForm variant="inline" tone="dark" />
            </div>
          </div>
        </div>

        {/* Link rail */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-paper/[0.10] pt-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="caption !text-paper/55">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              <li>
                <TrackLink href={site.phoneHref} eventName="phone_click" className="editorial-link editorial-link-light text-paper hover:!text-cadwell-soft">
                  {site.phone}
                </TrackLink>
              </li>
              <li>
                <TrackLink href={site.emailHref} eventName="email_click" className="editorial-link editorial-link-light break-all text-paper hover:!text-cadwell-soft">
                  {site.email}
                </TrackLink>
              </li>
              <li className="pt-2 text-[0.8125rem] leading-relaxed text-paper/55">
                {site.brokerage.address}
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="caption !text-paper/55">Sections</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="editorial-link editorial-link-light text-paper/85 hover:!text-cadwell-soft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="caption !text-paper/55">Off site</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link editorial-link-light text-paper/85 hover:!text-cadwell-soft"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="caption !text-paper/55">Brokerage</p>
            <p className="mt-4 text-[0.875rem] leading-relaxed text-paper/65">
              Powered by
              <br />
              <span className="text-paper">{site.brokerage.name}</span>
              <br />
              <span className="text-[0.8125rem]">{site.brokerage.licenseLine}</span>
            </p>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-16 border-t border-paper/[0.10] pt-8 md:mt-20 md:pt-10">
          <div className="flex flex-col items-start justify-between gap-4 text-[0.78rem] text-paper/55 md:flex-row md:items-center">
            <p className="tracking-wide">
              © {new Date().getFullYear()} {site.legalName} · Equal Housing Opportunity
            </p>
            <p className="caption !text-paper/45">
              Albany · North Albany · Periwinkle · Knox Butte · Oak Creek · Linn & Benton Counties
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
