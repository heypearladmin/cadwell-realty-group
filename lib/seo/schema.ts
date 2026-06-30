import { site } from "@/lib/site";

type SchemaObject = Record<string, unknown>;

function withContext(schema: SchemaObject): SchemaObject {
  return { "@context": "https://schema.org", ...schema };
}

const base = site.websiteUrl;

export function realEstateAgentSchema(): SchemaObject {
  return withContext({
    "@type": "RealEstateAgent",
    "@id": `${base}/#agent`,
    name: site.brand,
    alternateName: site.agentName,
    url: base,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    image: `${base}${site.agentPortraitSrc}`,
    logo: `${base}${site.logoSrc}`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Albany", containedInPlace: "Oregon" },
      { "@type": "AdministrativeArea", name: "Linn County, Oregon" },
      { "@type": "AdministrativeArea", name: "Benton County, Oregon" },
    ],
    founder: {
      "@type": "Person",
      "@id": `${base}/#agent-person`,
      name: site.agentName,
    },
    parentOrganization: {
      "@type": "Organization",
      name: site.brokerage.name,
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
    ],
  });
}

export function webSiteSchema(): SchemaObject {
  return withContext({
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: site.brand,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": `${base}/#agent` },
  });
}

export function personSchema(): SchemaObject {
  return withContext({
    "@type": "Person",
    "@id": `${base}/#agent-person`,
    name: site.agentName,
    url: base,
    jobTitle: "Real Estate Agent",
    description: `${site.agentName} is Albany, Oregon's trusted real estate authority. ${site.description}`,
    worksFor: { "@id": `${base}/#agent` },
    image: {
      "@type": "ImageObject",
      url: `${base}${site.agentPortraitSrc}`,
      caption: `${site.agentName}, ${site.brand}`,
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
    ],
  });
}

export function localBusinessSchema(): SchemaObject {
  return withContext({
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": `${base}/#localbusiness`,
    name: site.brand,
    url: base,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Albany", containedInPlace: "Oregon" },
      { "@type": "AdministrativeArea", name: "Linn County, Oregon" },
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
    ],
  });
}

export function serviceSchema(params: {
  name: string;
  url: string;
  description: string;
  category?: string;
}): SchemaObject {
  return withContext({
    "@type": "Service",
    "@id": `${params.url}#service`,
    name: params.name,
    url: params.url,
    description: params.description,
    serviceType: params.category ?? "Real Estate Services",
    areaServed: [
      { "@type": "City", name: "Albany", containedInPlace: "Oregon" },
      { "@type": "AdministrativeArea", name: "Linn County, Oregon" },
    ],
    provider: { "@id": `${base}/#agent` },
  });
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): SchemaObject {
  return withContext({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function faqSchema(
  items: { q: string; a: string }[]
): SchemaObject {
  return withContext({
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  });
}

export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}): SchemaObject {
  return withContext({
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    ...(params.image ? { image: params.image.startsWith("http") ? params.image : `${base}${params.image}` } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    dateModified: params.dateModified ?? params.datePublished,
    author: { "@id": `${base}/#agent-person` },
    publisher: { "@id": `${base}/#agent` },
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
  });
}

export function blogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  keywords?: string[];
}): SchemaObject {
  return withContext({
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    url: params.url,
    ...(params.image ? { image: params.image.startsWith("http") ? params.image : `${base}${params.image}` } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    ...(params.keywords ? { keywords: params.keywords.join(", ") } : {}),
    author: { "@id": `${base}/#agent-person` },
    publisher: { "@id": `${base}/#agent` },
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
  });
}

export function webPageSchema(params: {
  name: string;
  url: string;
  description: string;
}): SchemaObject {
  return withContext({
    "@type": "WebPage",
    "@id": `${params.url}#webpage`,
    name: params.name,
    url: params.url,
    description: params.description,
    isPartOf: { "@id": `${base}/#website` },
    about: { "@id": `${base}/#agent` },
    inLanguage: "en-US",
  });
}

export function organizationSchema(): SchemaObject {
  return withContext({
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: site.brand,
    legalName: site.legalName,
    url: base,
    logo: {
      "@type": "ImageObject",
      url: `${base}${site.logoSrc}`,
      caption: site.logoAlt,
    },
    telephone: site.phone,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
    ],
    memberOf: {
      "@type": "Organization",
      name: site.brokerage.name,
    },
  });
}

export function speakableSchema(cssSelectors: string[]): SchemaObject {
  return withContext({
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: base,
  });
}

export function neighborhoodPageSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  city?: string;
}): SchemaObject {
  return withContext({
    "@type": "Article",
    "@id": `${params.url}#article`,
    headline: params.title,
    description: params.description,
    url: params.url,
    about: {
      "@type": "Place",
      name: params.title,
      description: params.description,
      containedInPlace: {
        "@type": "City",
        name: params.city ?? site.city,
        containedInPlace: {
          "@type": "State",
          name: site.region,
        },
      },
    },
    ...(params.image ? { image: params.image.startsWith("http") ? params.image : `${base}${params.image}` } : {}),
    author: { "@id": `${base}/#agent-person` },
    publisher: { "@id": `${base}/#agent` },
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
  });
}
