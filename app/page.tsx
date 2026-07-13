import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeExplore } from "@/components/home/HomeExplore";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarket } from "@/components/home/HomeMarket";
import { HomeNeighborhoods } from "@/components/home/HomeNeighborhoods";
import { HomeNewConstruction } from "@/components/home/HomeNewConstruction";
import { HomeSeller } from "@/components/home/HomeSeller";
import { HomeSocialProof } from "@/components/home/HomeSocialProof";
import { HomeTrust } from "@/components/home/HomeTrust";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, speakableSchema, webPageSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";
import { faqItems } from "@/lib/home-content";

export default function HomePage() {
  return (
    <main id="main" className="overflow-hidden">
      <JsonLd schema={[
        faqSchema(faqItems),
        speakableSchema(["h1", "h2", ".dek", ".display-xl"]),
        webPageSchema({
          name: `${site.brand} · ${site.tagline}`,
          url: site.websiteUrl,
          description: site.description,
        }),
      ]} />
      <HomeHero />
      <HomeTrust />
      <HomeAbout />
      <HomeExplore />
      <HomeSeller />
      <HomeNewConstruction />
      <HomeNeighborhoods />
      <HomeMarket />
      <HomeSocialProof />
      <HomeFaq />
      <HomeFinalCta />
    </main>
  );
}
