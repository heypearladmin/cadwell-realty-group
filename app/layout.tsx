import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { MobileFloatingCta } from "@/components/MobileFloatingCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import { realEstateAgentSchema, webSiteSchema } from "@/lib/seo/schema";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sub = Inter({
  subsets: ["latin"],
  variable: "--font-sub",
  display: "swap",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cadwellrealtygroup.com";

const seoTitle = `${site.brand} · ${site.tagline}`;

const siteSchema = [realEstateAgentSchema(), webSiteSchema()];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
  keywords: [...site.seoKeywords],
  authors: [{ name: site.agentName }],
  alternates: { canonical: site.websiteUrl },
  openGraph: {
    title: seoTitle,
    description: site.description,
    type: "website",
    locale: "en_US",
    url: site.websiteUrl,
    siteName: site.brand,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Editorial preview of Albany, Oregon and the Willamette River corridor.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: site.logoSrc },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sub.variable} ${body.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cadwell focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileFloatingCta />
      </body>
    </html>
  );
}
