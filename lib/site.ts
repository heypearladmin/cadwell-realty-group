export const site = {
  brand: "Cadwell Realty Group",
  shortBrand: "Cadwell Realty",
  agentName: "Jason Cadwell",
  legalName: "Cadwell Realty Group",
  tagline: "Albany Real Estate, Guided With Confidence",
  description:
    "Cadwell Realty Group, led by Jason Cadwell and powered by Jason Mitchell Group, is the trusted Albany, Oregon real estate authority. Hyperlocal expertise, seller-focused strategy, and calm, confident guidance for every move.",

  // Hyperlocal positioning
  city: "Albany",
  region: "Oregon",
  state: "OR",
  geo: "Albany, Oregon",
  geoLong: "Albany, Oregon · Linn & Benton Counties",
  positioning: "The trusted Albany real estate authority helping people make confident moves.",

  // Contact
  phone: "(541) 619-4303",
  phoneHref: "tel:+15416194303",
  email: "jason@cadwellrealtygroup.com",
  emailHref: "mailto:jason@cadwellrealtygroup.com",
  websiteUrl: "https://cadwellrealtygroup.com",

  // Brokerage
  brokerage: {
    name: "Jason Mitchell Group",
    fullName: "Cadwell Realty Group · Powered by Jason Mitchell Group",
    licenseLine: "Licensed in the State of Oregon",
    address: "Albany, Oregon · Serving Linn & Benton Counties",
  },

  // Brand mark (existing filename retained)
  logoSrc: "/images/todd-logo.png",
  logoAlt: "Cadwell Realty Group monogram",

  // Open Graph (existing filename retained)
  ogImage: "/images/og-todd-spencer-new-braunfels.jpg",

  // Agent portrait (existing filename retained)
  agentPortraitSrc: "/images/todd-spencer-editorial-portrait.jpg",
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
