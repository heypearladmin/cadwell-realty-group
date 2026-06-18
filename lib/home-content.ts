/**
 * Cadwell Realty Group — homepage content.
 * Voice: confident, modern, approachable, intelligent, local-first.
 * Em-dashes avoided per brand voice. Image src paths point at the Albany asset
 * set in /public/images/ (Cascades, Willamette, Linn & Benton imagery).
 */

/* ─────────────────────────── Hero ─────────────────────────── */

export const heroContent = {
  eyebrow: "Albany, Oregon · Linn & Benton Counties",
  headlineBefore: "Albany real estate,",
  headlineItalic: "guided with confidence.",
  dek: "Cadwell Realty Group is the trusted hyperlocal authority for Albany homeowners, sellers, and the families moving here next. Local strategy, calm guidance, and modern marketing that actually moves the needle.",
  primaryCta: { label: "Book a consultation", href: "/contact" },
  secondaryCta: { label: "Explore Albany homes", href: "/neighborhoods" },
  landscapeSrc: "/images/hero-albany-willamette.webp",
  portraitSrc: "/images/hero-albany-willamette-mobile.webp",
  imageAlt:
    "Cinematic golden-hour view of the Willamette River and downtown Albany, Oregon with warm documentary lighting.",
  marqueeLines: [
    "Local expertise",
    "Seller-focused strategy",
    "Modern digital exposure",
    "New construction specialists",
    "Calm, confident guidance",
  ],
} as const;

/* ─────────────────────────── Trust / Authority strip ─────────────────────────── */

export const trustColophon = {
  eyebrow: "Trusted authority",
  title: "Built for sellers. Backed by results.",
  lines: [
    { label: "Years guiding Albany families", value: "10+" },
    { label: "Closings, last 24 months", value: "120+" },
    { label: "Avg. days on market", value: "18" },
    { label: "Sellers represented to ask or above", value: "94%" },
  ],
  proof:
    "Cadwell Realty Group is powered by Jason Mitchell Group, one of the most respected real estate teams in the country. Local intel, national infrastructure, single point of contact.",
} as const;

export const localGuide = {
  eyebrow: "Your Albany advisor",
  title: "Calm strategy. Local intel. A clear path to your next move.",
  dek: "I grew up watching Albany change one season at a time. Today I help sellers prepare with intention, move-up buyers stretch without overreaching, and new-construction families partner with the right builder on the right lot. The pace is yours. The plan is mine.",
  pullQuote:
    "Hyperlocal is not a buzzword. It is which street drains in November, which builder honors the punch list, and which block holds value when the market shifts.",
  aboutHref: "/about",
  aboutLabel: "Read Jason's full story",
} as const;

/* ─────────────────────────── Hyperlocal Albany — Explore ─────────────────────────── */

export type ExploreCategory =
  | "river-life"
  | "downtown"
  | "schools"
  | "parks"
  | "restaurants"
  | "weekends"
  | "neighborhood-guides"
  | "family";

export type ExploreTile = {
  category: ExploreCategory;
  title: string;
  dek: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const exploreTiles: ExploreTile[] = [
  {
    category: "river-life",
    title: "The Willamette & the Calapooia",
    dek: "Two rivers, one town. Riverfront paths, sturgeon mornings, and the quiet bends that locals keep for sunset.",
    href: "/blog/river-life",
    imageSrc: "/images/explore-willamette-river.webp",
    imageAlt:
      "Soft morning light over the Willamette River in Albany, Oregon with mist rising off the water.",
  },
  {
    category: "downtown",
    title: "Historic downtown Albany",
    dek: "More National Register homes than almost anywhere on the West Coast. Brickwork, bookshops, and Saturday mornings on First Avenue.",
    href: "/blog/downtown-albany",
    imageSrc: "/images/explore-downtown-albany.webp",
    imageAlt:
      "Historic downtown Albany Oregon at golden hour with brick facades and warm storefront light.",
  },
  {
    category: "schools",
    title: "Schools & school paths",
    dek: "Greater Albany Public Schools, charter options, and the neighborhoods that walk to their bell.",
    href: "/blog/schools",
    imageSrc: "/images/explore-albany-schools.webp",
    imageAlt:
      "Tree-lined walking path leading to an Albany elementary school in soft afternoon light.",
  },
  {
    category: "parks",
    title: "Parks & the riverfront",
    dek: "Monteith, Bryant, Takena Landing. Where families gather, dogs run, and Albany takes its weekend breath.",
    href: "/blog/parks",
    imageSrc: "/images/explore-albany-parks.webp",
    imageAlt:
      "Families walking the Albany riverfront path at golden hour with autumn trees overhead.",
  },
  {
    category: "restaurants",
    title: "Where Albany eats",
    dek: "Sybaris, Calapooia Brewing, Frankie's, and the corner spots locals quietly send their out-of-town family to first.",
    href: "/blog/restaurants",
    imageSrc: "/images/explore-albany-restaurants.webp",
    imageAlt:
      "Warmly lit downtown Albany restaurant interior with brick walls and pendant lighting.",
  },
  {
    category: "weekends",
    title: "Weekend rhythm",
    dek: "Farmers market Saturdays, antique strolls down Lyon Street, slow Sunday coffee, and harvest drives toward the foothills.",
    href: "/blog/weekends",
    imageSrc: "/images/explore-albany-farmers-market.webp",
    imageAlt:
      "Albany Saturday farmers market with woven baskets of fresh Willamette Valley produce in soft morning light.",
  },
  {
    category: "neighborhood-guides",
    title: "Neighborhood guides",
    dek: "North Albany, Periwinkle, South Albany, Knox Butte, Oak Creek. What each pocket is actually like to live in.",
    href: "/neighborhoods",
    imageSrc: "/images/explore-albany-neighborhoods.webp",
    imageAlt:
      "Tree canopied residential street in North Albany with mature maples arching over the lane.",
  },
  {
    category: "family",
    title: "Hidden corners",
    dek: "Talking Water Gardens, Timber-Linn loops, the back routes to Lebanon. The Albany only locals reliably find.",
    href: "/blog/hidden-corners",
    imageSrc: "/images/explore-albany-hidden-corners.webp",
    imageAlt:
      "Quiet wetland boardwalk at Talking Water Gardens with reflective pools and tall grasses.",
  },
];

/* ─────────────────────────── Seller-Focused ─────────────────────────── */

export type SellerStep = {
  step: string;
  title: string;
  dek: string;
};

export const sellerSection = {
  eyebrow: "For sellers",
  title: "Selling in Albany deserves a strategy, not a sign in the yard.",
  dek: "Sellers are the heart of our business. Every listing gets a custom positioning plan, a modern digital launch, and a single advisor who answers the phone. No handoffs. No noise.",
  cta: { label: "Get your home value", href: "/sell" },
  secondaryCta: { label: "See our seller playbook", href: "/sell#playbook" },
  steps: [
    {
      step: "01",
      title: "Pre-market positioning",
      dek: "We walk the home, read the comps honestly, and align on a price band that earns multiple offers without leaving money on the table.",
    },
    {
      step: "02",
      title: "Cinematic marketing",
      dek: "Magazine-grade photography, drone, twilight when it earns its keep, floor plans, and a custom property page that converts.",
    },
    {
      step: "03",
      title: "Modern digital exposure",
      dek: "Targeted social, MLS syndication done right, Jason Mitchell Group buyer network, and short-form video that actually gets watched.",
    },
    {
      step: "04",
      title: "Negotiation & close",
      dek: "Calm, transparent negotiation. We translate every clause into plain English and close on the timeline that fits your life.",
    },
  ] as SellerStep[],
  metrics: [
    { value: "18 days", label: "Avg. days on market" },
    { value: "+2.4%", label: "Avg. over original list" },
    { value: "94%", label: "Sellers at ask or above" },
  ],
} as const;

/* ─────────────────────────── New Construction ─────────────────────────── */

export type BuilderBenefit = {
  title: string;
  dek: string;
};

export const newConstruction = {
  eyebrow: "New construction",
  title: "A better way to buy new in Albany.",
  dek: "We work hand in hand with Albany's most respected builders. You get a true buyer advocate at the table, builder incentives unlocked, and a process that protects you from contract to keys.",
  cta: { label: "See new construction homes", href: "/new-construction" },
  benefits: [
    {
      title: "Builder access",
      dek: "Long-standing relationships with Albany's quality builders mean you see lots, floor plans, and incentives before the public does.",
    },
    {
      title: "Contract protection",
      dek: "Builder contracts are written for builders. We read every clause and negotiate the ones that matter for you.",
    },
    {
      title: "Lot strategy",
      dek: "Solar orientation, drainage, school path, resale ceiling. The right lot doubles the win on the right floor plan.",
    },
    {
      title: "Walkthroughs that catch",
      dek: "Pre-drywall and final walkthrough checklists built from years of new builds. We find what tired eyes miss.",
    },
  ] as BuilderBenefit[],
  timeline: [
    { step: "Discover", dek: "Builder fit, lot, floor plan." },
    { step: "Reserve", dek: "Smart contract review, deposit, design selections." },
    { step: "Build", dek: "Milestone walkthroughs and weekly status notes." },
    { step: "Close", dek: "Final walkthrough, punch list, keys, follow-up." },
  ],
} as const;

/* ─────────────────────────── Featured neighborhoods ─────────────────────────── */

export type Neighborhood = {
  slug: string;
  title: string;
  dek: string;
  vibe: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "north-albany",
    title: "North Albany",
    dek: "Across the Willamette and quietly its own town. Top schools, wide lots, and a calm that feels earned.",
    vibe: "Family-scale & calm",
    href: "/neighborhoods/north-albany",
    imageSrc: "/images/neighborhood-north-albany.webp",
    imageAlt:
      "North Albany residential street at golden hour with mature trees and craftsman-style homes.",
  },
  {
    slug: "historic-downtown",
    title: "Historic Downtown",
    dek: "Monteith and Hackleman districts. National Register homes, brick blocks, riverfront, and a Saturday rhythm.",
    vibe: "Walkable & historic",
    href: "/neighborhoods/historic-downtown",
    imageSrc: "/images/neighborhood-historic-downtown.webp",
    imageAlt:
      "Historic downtown Albany Oregon at soft hour with brick storefronts and First Avenue light.",
  },
  {
    slug: "knox-butte",
    title: "Knox Butte",
    dek: "Newer construction, easy I-5 access, family-built streets, and views that climb gently toward the Cascades.",
    vibe: "New & connected",
    href: "/neighborhoods/knox-butte",
    imageSrc: "/images/neighborhood-knox-butte.webp",
    imageAlt:
      "Aerial view of Knox Butte neighborhood in east Albany with new homes and Cascade foothills beyond.",
  },
  {
    slug: "periwinkle",
    title: "Periwinkle",
    dek: "Mid-century roots and mature canopy. The kind of pocket where neighbors know each other and home values quietly hold.",
    vibe: "Established & leafy",
    href: "/neighborhoods/periwinkle",
    imageSrc: "/images/neighborhood-periwinkle.webp",
    imageAlt:
      "Periwinkle neighborhood in Albany Oregon with mature canopy oaks arching over a quiet residential lane.",
  },
  {
    slug: "oak-creek",
    title: "Oak Creek & South Albany",
    dek: "Wide lots, modern builds, walking trails, and an everyday quiet most growing families are quietly chasing.",
    vibe: "Quiet & growing",
    href: "/neighborhoods/oak-creek",
    imageSrc: "/images/neighborhood-oak-creek.webp",
    imageAlt:
      "Aerial of Oak Creek master-planned community in south Albany Oregon with trails and Cascade horizon.",
  },
];

/* ─────────────────────────── Video / Content Authority ─────────────────────────── */

export type VideoCard = {
  kind: "market-update" | "community-spotlight" | "lifestyle-reel" | "local-business";
  eyebrow: string;
  title: string;
  dek: string;
  posterSrc: string;
  posterAlt: string;
  runtime: string;
  href: string;
};

export const videoAuthority = {
  eyebrow: "On camera",
  title: "Field notes you can watch.",
  dek: "Short, honest videos from around Albany. Market reads, neighborhood walks, builder spotlights, and the local businesses that make this town feel like home. New episodes most weeks.",
  primaryCta: { label: "Watch on YouTube", href: "https://www.youtube.com/@CadwellRealtyGroup" },
  secondaryCta: { label: "Follow on Instagram", href: "https://www.instagram.com/jasoncadwell.crg/" },
} as const;

export const videoCards: VideoCard[] = [
  {
    kind: "market-update",
    eyebrow: "Market update",
    title: "What Albany is actually doing this month",
    dek: "Inventory by price band, what closed, and where the smart move is right now.",
    posterSrc: "/images/video-market-update-poster.webp",
    posterAlt:
      "Editorial film poster of Albany Oregon skyline at soft hour with the Willamette bending through.",
    runtime: "6 min",
    href: "https://www.youtube.com/@CadwellRealtyGroup",
  },
  {
    kind: "community-spotlight",
    eyebrow: "Community spotlight",
    title: "A Saturday morning at Monteith Park",
    dek: "A walk through one of the most quietly beloved corners of Albany.",
    posterSrc: "/images/video-community-spotlight-poster.webp",
    posterAlt:
      "Cinematic still of Monteith Park footbridge in Albany Oregon with mature trees and morning sunlight.",
    runtime: "4 min",
    href: "https://www.youtube.com/@CadwellRealtyGroup",
  },
  {
    kind: "lifestyle-reel",
    eyebrow: "Lifestyle reel",
    title: "One perfect day in Albany",
    dek: "Coffee on First, paths along the Willamette, and the slow part of Sunday in 90 seconds.",
    posterSrc: "/images/video-lifestyle-reel-poster.webp",
    posterAlt:
      "Cinematic still of golden-hour light along the Willamette River in Albany with autumn trees.",
    runtime: "1 min",
    href: "https://www.instagram.com/jasoncadwell.crg/",
  },
];

/* ─────────────────────────── Social cadence ─────────────────────────── */

export const socialCadence = {
  eyebrow: "Content rhythm",
  title: "Where Albany meets your feed.",
  dek: "A weekly drumbeat of stories, reels, hyperlocal carousels, and Google Business updates. Education first, sales third.",
  cadenceLines: [
    { label: "Stories", value: "2 / week" },
    { label: "Reels", value: "2 / week" },
    { label: "Hyperlocal carousel", value: "1 / week" },
    { label: "Link post", value: "1 / week" },
    { label: "Google Business photos", value: "3 / week" },
  ],
} as const;

/* ─────────────────────────── Testimonials ─────────────────────────── */

export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jason never rushed us. He translated inspection findings into decisions we could sleep on and made the negotiation feel human. The Albany move finally felt easy.",
    attribution: "Morgan & Alex",
    context: "Relocated to North Albany",
  },
  {
    quote:
      "He reads this town the way a good editor reads a manuscript. What to keep, what to cut, what to protect. Our home sold in nine days, over ask, with zero drama.",
    attribution: "Lane",
    context: "Sold in Historic Downtown",
  },
  {
    quote:
      "We toured five builders. Jason was the only advisor in the room who actually read the contract. We saved on closing costs and ended up on the right lot.",
    attribution: "Priya & Jordan",
    context: "New construction, Knox Butte",
  },
  {
    quote:
      "Calm, clear, and quietly competitive on our behalf. The marketing was the most polished we have seen in Linn County.",
    attribution: "The Bennetts",
    context: "Move-up sellers, Periwinkle",
  },
];

export const googleReviewStats = {
  rating: "5.0",
  count: "90+",
  source: "Google Reviews",
  href: "https://www.google.com/search?q=Cadwell+Group+Albany+Oregon",
};

export type StoryWin = {
  metric: string;
  title: string;
  dek: string;
};

export const storyWins: StoryWin[] = [
  {
    metric: "9 days",
    title: "On market for a Monteith cottage",
    dek: "A careful price band read and a buyer pool we already knew. Sold above asking with one inspection request.",
  },
  {
    metric: "$0",
    title: "Surprises at close",
    dek: "Disclosure questions answered up front and a lender on speed dial. A drama-free close for a relocating family.",
  },
  {
    metric: "3 months",
    title: "From first call to keys",
    dek: "A retiree downsizing from a multi-acre property. Patient touring, clear math, and a result that fit the next chapter.",
  },
];

/* ─────────────────────────── Market Insights / Journal ─────────────────────────── */

export type InsightCard = {
  kind: "moving" | "cost-of-living" | "lifestyle" | "trends";
  eyebrow: string;
  title: string;
  dek: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const marketInsights = {
  eyebrow: "Field notes",
  title: "Read Albany before you tour it.",
  dek: "Plain-English guides for the questions buyers, sellers, and the curious actually ask. Updated as the Albany market shifts.",
  signalLabel: "Albany 12-month home value index",
  signalValue: "+4.2%",
  signalDek: "Trailing year change in median sold price across Linn County, single family detached (illustrative).",
} as const;

export const insightCards: InsightCard[] = [
  {
    kind: "moving",
    eyebrow: "Moving guide",
    title: "Moving to Albany, Oregon",
    dek: "Schools, commute math, weather rhythm, and which parts of town work for which season of life.",
    href: "/blog/moving-to-albany",
    imageSrc: "/images/insight-moving-to-albany.webp",
    imageAlt:
      "Wide editorial photograph of Albany Oregon skyline at golden hour with river bend in foreground.",
  },
  {
    kind: "cost-of-living",
    eyebrow: "Numbers",
    title: "Albany cost of living",
    dek: "Housing, taxes, utilities, and the small line items that quietly add up here vs. Portland or the coast.",
    href: "/blog/cost-of-living",
    imageSrc: "/images/insight-cost-of-living-albany.webp",
    imageAlt:
      "Editorial flat lay of Albany home keys, a coffee, and a small leather notebook on warm paper.",
  },
  {
    kind: "lifestyle",
    eyebrow: "Lifestyle",
    title: "Willamette rituals & weekend rhythm",
    dek: "River paths, market mornings, harvest drives, and the slow part of Sunday locals quietly protect.",
    href: "/blog/lifestyle",
    imageSrc: "/images/insight-albany-lifestyle.webp",
    imageAlt:
      "Editorial photograph of soft morning light over the Willamette in Albany with autumn trees on the bank.",
  },
  {
    kind: "trends",
    eyebrow: "Market trends",
    title: "Albany real estate trends",
    dek: "What is moving, what is sitting, and where the next chapter of the Willamette Valley is being written.",
    href: "/blog/market-trends",
    imageSrc: "/images/insight-albany-market-trends.webp",
    imageAlt:
      "Aerial editorial photograph of an Albany residential corridor in soft afternoon light.",
  },
];

/* ─────────────────────────── FAQ (SEO) ─────────────────────────── */

export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Who is the best realtor in Albany, Oregon for sellers?",
    a: "Jason Cadwell of Cadwell Realty Group, powered by Jason Mitchell Group, is widely recognized as a seller-focused authority in Albany. The team brings hyperlocal market intelligence, magazine-grade marketing, and a single point of contact from listing to close.",
  },
  {
    q: "How much is my home worth in Albany, Oregon?",
    a: "Albany home values vary by neighborhood, school path, lot size, and condition. Cadwell Realty Group provides a free, no-pressure home valuation that reads recent comps and current buyer demand against your specific block.",
  },
  {
    q: "Is now a good time to sell my home in Albany?",
    a: "It depends on your price band, your timing, and your goals. We give you the honest version: where buyer demand is strongest, where it has softened, and what your specific home is likely to do over the next 90 days.",
  },
  {
    q: "Do you help with new construction in Albany, OR?",
    a: "Yes. New construction is one of our focus areas. We partner with respected Albany builders, advocate for you on the contract, and protect your interests from lot selection through final walkthrough.",
  },
  {
    q: "Which Albany neighborhoods do you cover?",
    a: "North Albany, Historic Downtown (Monteith and Hackleman), Periwinkle, Knox Butte, Oak Creek, South Albany, and the surrounding Linn and Benton County communities.",
  },
];

/* ─────────────────────────── Final CTA ─────────────────────────── */

export const finalCta = {
  eyebrow: "Whenever you are ready",
  title: "Let's make your next move a confident one.",
  dek: "First-time selling, moving up, relocating to Albany, or just curious about your home's number. Send a note and we'll respond within a business day.",
  button: { label: "Schedule a consultation", href: "/contact" },
  secondary: { label: "Call Jason · (541) 619-4303", href: "tel:+15416194303" },
  desktopSrc: "/images/cta-cascades-twilight.webp",
  mobileSrc: "/images/cta-cascades-twilight-mobile.webp",
  imageAlt:
    "Twilight silhouette of the Cascade foothills outside Albany Oregon with a warm horizon glow.",
} as const;

/* ─────────────────────────── Shared texture ─────────────────────────── */

export const trustTextureSrc = "/images/texture-paper-warm.webp" as const;

/* ─────────────────────────── Newsletter ─────────────────────────── */

export const newsletterCopy = {
  eyebrow: "The dispatch",
  title: "Albany notes, once a month.",
  dek: "A short, honest email. Market reads, new guides, and the occasional Willamette update. No spam. Unsubscribe any time.",
  placeholder: "you@example.com",
  cta: "Subscribe",
  consentLine: "We respect your inbox.",
} as const;

/* ─────────────────────────── Blog & Neighborhood helpers ─────────────────────────── */

export type BlogArticle = {
  slug: string;
  eyebrow: string;
  title: string;
  dek: string;
  imageSrc: string;
  imageAlt: string;
  category: "Explore" | "Market Insights";
  href: string;
};

function slugFromBlogHref(href: string): string | null {
  const match = /^\/blog\/(.+)$/.exec(href);
  return match ? match[1] : null;
}

export function findBlogArticle(slug: string): BlogArticle | null {
  const fromExplore = exploreTiles.find((t) => slugFromBlogHref(t.href) === slug);
  if (fromExplore) {
    return {
      slug,
      eyebrow: "Explore Albany",
      title: fromExplore.title,
      dek: fromExplore.dek,
      imageSrc: fromExplore.imageSrc,
      imageAlt: fromExplore.imageAlt,
      category: "Explore",
      href: fromExplore.href,
    };
  }
  const fromInsight = insightCards.find((c) => slugFromBlogHref(c.href) === slug);
  if (fromInsight) {
    return {
      slug,
      eyebrow: fromInsight.eyebrow,
      title: fromInsight.title,
      dek: fromInsight.dek,
      imageSrc: fromInsight.imageSrc,
      imageAlt: fromInsight.imageAlt,
      category: "Market Insights",
      href: fromInsight.href,
    };
  }
  return null;
}

export function getAllBlogSlugs(): string[] {
  const slugs = new Set<string>();
  for (const t of exploreTiles) {
    const s = slugFromBlogHref(t.href);
    if (s) slugs.add(s);
  }
  for (const c of insightCards) {
    const s = slugFromBlogHref(c.href);
    if (s) slugs.add(s);
  }
  return Array.from(slugs);
}

export function findNeighborhood(slug: string): Neighborhood | null {
  return neighborhoods.find((n) => n.slug === slug) ?? null;
}

export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug);
}

export function getRelatedNeighborhoods(currentSlug: string, count = 2): Neighborhood[] {
  return neighborhoods.filter((n) => n.slug !== currentSlug).slice(0, count);
}
