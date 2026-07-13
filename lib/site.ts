export const site = {
  brand: "Cadwell Group",
  shortBrand: "Cadwell",
  agentName: "Jason Cadwell",
  legalName: "Cadwell Realty Group",
  tagline: "Albany Real Estate, Guided With Confidence",
  description:
    "Jason Cadwell is a local Albany, Oregon real estate professional focused on seller strategy, move-up buyers, relocation, and new construction. Through Cadwell Group, powered by Jason Mitchell Group, he brings calm strategy and local insight to every move.",

  // Hyperlocal positioning
  city: "Albany",
  region: "Oregon",
  state: "OR",
  geo: "Albany, Oregon",
  geoLong: "Albany, Oregon · Linn & Benton Counties",
  positioning: "The trusted Albany real estate authority helping people make confident moves.",

  // Contact
  phone: "(541) 229-1856",
  phoneHref: "tel:+15412291856",
  email: "jason@cadwellrealtygroup.com",
  emailHref: "mailto:jason@cadwellrealtygroup.com",
  websiteUrl: "https://www.jason-cadwell.com",

  // Brokerage
  brokerage: {
    name: "Jason Mitchell Group",
    fullName: "Cadwell Group · Powered by Jason Mitchell Group",
    licenseLine: "Licensed in the State of Oregon",
    address: "Albany, Oregon · Serving Linn & Benton Counties",
  },

  // Brand mark
  logoSrc: "/images/cadwell-logo.png",
  logoAlt: "Cadwell Group monogram",

  // Open Graph
  ogImage: "/images/og-cadwell-realty-albany.jpg",

  // Agent portrait
  agentPortraitSrc: "/images/jason-cadwell-portrait.jpg",
  agentPortraitAlt:
    "Editorial portrait of Jason Cadwell along the Willamette riverfront in Albany, Oregon at golden hour.",

  // Social
  social: {
    facebook: "https://www.facebook.com/JasonCadwellRealtyGroup/",
    instagram: "https://www.instagram.com/jasoncadwell.crg/",
    linkedin: "https://www.linkedin.com/in/jason-cadwell-5b29949",
    youtube: "https://www.youtube.com/@CadwellRealtyGroup",
  },

  // Route paths
  contactPath: "/contact",
  neighborhoodsPath: "/neighborhoods",
  aboutPath: "/about",
  blogPath: "/blog",
  sellPath: "/sell",
  newConstructionPath: "/new-construction",
  termsPath: "/terms",
  policiesPath: "/policies",

  // Local SEO keywords for footer / meta
  seoKeywords: [
    "Albany OR Realtor",
    "Albany Oregon homes for sale",
    "Albany Oregon real estate",
    "Albany home values",
    "Albany OR new construction",
    "Sell my home Albany Oregon",
    "Albany Oregon neighborhoods",
  ],
} as const;

export type SiteConfig = typeof site;
