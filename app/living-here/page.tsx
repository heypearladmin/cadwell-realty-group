import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Living in Albany, Oregon — A Local's Guide",
  description:
    "Everything you need to know about daily life in Albany, Oregon — commutes, healthcare, parks, events, schools, shopping, and what makes this city worth staying.",
  alternates: { canonical: `${site.websiteUrl}/living-here` },
};

const guides = [
  {
    category: "Getting Around",
    eyebrow: "Commute & Transit",
    title: "How Albany Connects to the Rest of the Valley",
    body: "Albany sits on Interstate 5 at the midpoint between Portland (75 miles north) and Eugene (45 miles south). Corvallis is 10 miles west on Highway 20 — a 20-minute drive that most residents do daily. Amtrak's Cascades line stops at Albany Station, giving commuters a car-free option to Portland or Eugene. For daily errands, Albany is primarily car-dependent outside of Historic Downtown.",
    links: [
      { label: "Amtrak Cascades schedule", href: "https://www.amtrak.com/stations/any" },
      { label: "Linn-Benton Loop transit", href: "https://www.linntransit.com" },
    ],
  },
  {
    category: "Healthcare",
    eyebrow: "Medical Services",
    title: "Healthcare in Albany — Samaritan and Beyond",
    body: "Samaritan Albany General Hospital is the primary medical facility serving Albany and the greater Linn County area. It offers emergency services, surgical care, women's health, and a full range of outpatient specialties. For specialized care, OHSU and PeaceHealth in Eugene are accessible within an hour. Albany also has a strong network of independent primary care and dental practices.",
    links: [
      { label: "Samaritan Albany General Hospital", href: "https://www.samhealth.org/locations/samaritan-albany-general-hospital" },
    ],
  },
  {
    category: "Parks & Outdoors",
    eyebrow: "Recreation",
    title: "Parks, Trails, and Rivers",
    body: "Albany has two rivers — the Willamette and the Calapooia — both accessible within city limits. The Dave Clark Riverfront Path runs along the Willamette and connects to Monteith Riverpark, a hub for summer events. Timber Linn Park in Southeast Albany offers athletic fields, a lake, and walking trails. Talking Water Gardens is an award-winning water treatment facility turned wildlife habitat and walking destination.",
    links: [
      { label: "City of Albany Parks", href: "https://www.cityofalbany.net/departments/parks-recreation" },
    ],
  },
  {
    category: "Community Events",
    eyebrow: "Things to Do",
    title: "Albany's Calendar — What Keeps This City Moving",
    body: "Albany punches above its weight for community events. The World Championship Timber Carnival (held July 4th weekend) is a multi-day logging competition and one of Oregon's oldest celebrations. The Albany Farmers Market runs Saturday mornings spring through fall at the Monteith Riverpark. The Historic Homes Tour, held annually in June, opens Albany's Victorian and Craftsman inventory to the public. First Friday Art Walk brings the downtown alive monthly.",
    links: [
      { label: "Albany Visitors Association", href: "https://www.albanyvisitors.com" },
    ],
  },
  {
    category: "Schools",
    eyebrow: "Education",
    title: "Schools in Albany — GAPS and Corvallis District",
    body: "Most Albany addresses fall within the Greater Albany Public Schools (GAPS) district, which serves 14 elementaries, three middle schools, and two high schools — West Albany and South Albany. GAPS consistently performs above Oregon state averages. A portion of North Albany addresses in Benton County access the Corvallis School District, one of Oregon's highest-rated. School attendance zones matter: always verify the exact zone for any specific address before buying.",
    links: [
      { label: "Greater Albany Public Schools", href: "https://www.albany.k12.or.us" },
      { label: "Corvallis School District", href: "https://www.corvallis.k12.or.us" },
    ],
  },
  {
    category: "Weather",
    eyebrow: "Climate",
    title: "What to Expect from Albany's Weather Year-Round",
    body: "Albany sits in the Willamette Valley's marine climate zone — mild, wet winters and warm, dry summers. January averages 40°F, July averages 82°F. Rain falls predominantly October through April; summers are reliably dry with long daylight hours. Snow is uncommon but possible 1–3 times per winter, usually melting within a day. The temperate climate supports year-round outdoor recreation and one of Oregon's most productive agricultural regions surrounding the city.",
    links: [],
  },
  {
    category: "Shopping & Dining",
    eyebrow: "Local Life",
    title: "Where Albany Eats, Shops, and Spends Its Weekends",
    body: "Albany's dining scene is anchored by independent restaurants downtown — Sybaris (the local fine dining standard), Calapooia Brewing, Novak's Hungarian restaurant, and a strong coffee shop culture along First Avenue. For everyday shopping, Albany has a full commercial corridor along Geary Street and the Santiam Highway with major grocery chains, home improvement, and retail. Corvallis (20 minutes) significantly expands specialty dining, farmers market access, and OSU-adjacent retail.",
    links: [],
  },
  {
    category: "Utilities",
    eyebrow: "Practical Info",
    title: "Setting Up Utilities in Albany, Oregon",
    body: "Electricity in Albany is provided by Pacific Power for most residential addresses. Natural gas is through NW Natural. Water and sewer are managed by the City of Albany utilities department. Internet options include Xfinity (Comcast) as the primary cable provider; fiber availability varies by neighborhood. Waste collection is handled through the city's contract with Republic Services. Albany's utility costs run close to Oregon state averages — electric bills for a standard home average $90–$140/month.",
    links: [
      { label: "City of Albany Utilities", href: "https://www.cityofalbany.net/departments/public-works/utilities" },
    ],
  },
];

export default function LivingHerePage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Living Here", url: `${site.websiteUrl}/living-here` },
          ]),
          webPageSchema({
            name: "Living in Albany, Oregon — A Local's Guide",
            url: `${site.websiteUrl}/living-here`,
            description: "Everything you need to know about daily life in Albany, Oregon.",
          }),
        ]}
      />

      <section className="section-wrap pt-40 pb-section-y md:pt-48">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Living Here</p>
        </div>
        <h1 className="display-xl mt-7 max-w-3xl text-ink">
          Albany, Oregon —{" "}
          <span className="italic-serif">a local's honest guide.</span>
        </h1>
        <p className="dek mt-8 max-w-2xl">
          What it's actually like to live here. Commutes, healthcare, schools, weather, events, and the things only locals know — written for people seriously considering making Albany home.
        </p>
      </section>

      <section className="section-wrap pb-section-y-lg">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <article
              key={g.category}
              className="rounded-2xl border border-ink/[0.08] bg-paper-deep p-8"
            >
              <p className="caption !text-cadwell">{g.eyebrow}</p>
              <h2 className="mt-4 font-display text-[1.35rem] font-medium leading-snug text-ink">
                {g.title}
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.75] text-ink/70">{g.body}</p>
              {g.links.length > 0 && (
                <ul className="mt-5 space-y-1.5">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link text-[0.875rem]"
                      >
                        {l.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-section-y-lg border-t border-ink/[0.08] pt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="caption !text-ink/50">Ready to make Albany home?</p>
            <h2 className="display-lg mt-4 max-w-xl text-ink">
              Talk to someone who actually{" "}
              <span className="italic-serif">lives here.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={site.contactPath} className="btn-primary">
              Start a conversation
            </Link>
            <Link href="/neighborhoods" className="btn-ghost">
              Explore neighborhoods
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
