# Cadwell Group — Image Asset Request Checklist

**Project:** cadwellrealtygroup.com
**Agent:** Jason Cadwell · Cadwell Group · Powered by Jason Mitchell Group
**Region:** Albany, Oregon · Linn & Benton Counties
**Style direction:** Luxury editorial · cinematic documentary · Apple-level minimalism · soft Oregon light · warm shadow, cool highlight palette

> **Important:** The website code references the existing filenames listed below.
> Replace the underlying image files in place (same filenames, same paths) and the
> site will render the new assets automatically. Mobile portrait variants should be
> shot or cropped separately where indicated.

**Naming convention:** lowercase, hyphen-separated, kept identical to current paths so the codebase
does not need to change. New optional supporting assets (suggested) are listed at the end of each
section.

**Universal cinematic style notes**
- Soft documentary lighting, never harsh midday
- Real Albany locations whenever possible
- People should be candid, mid-action, not posed
- Color palette: muted greens, oxidized red brick, warm wood tones, river silver, soft sky
- Crisp focus on subject, gentle background fall-off
- File format: `.webp` for photo, `.png` only when transparency needed
- Color profile: sRGB, embedded
- Compression: high quality (≥85), under 600 KB per asset where possible

---

## 1 · Hero Section

### `/public/images/hero-new-braunfels-river.webp`
- **Dimensions:** 3840 × 2160 (3840 × 2160 source, optimized to ~2400 × 1350 deliverable)
- **Aspect / orientation:** 16:9 · landscape
- **Description:** Cinematic golden-hour aerial of downtown Albany and the Willamette River bend, with the Lyon Street Bridge visible and the Cascade foothills softly receding on the horizon. Warm documentary lighting, light atmospheric haze, single small boat or kayaker for human scale.
- **Cinematic direction:** Wide establishing shot, drone or rooftop perspective, color graded toward warm amber highlights and cool teal shadows. Leave negative space on the bottom-left third where the editorial headline will overlay.

### `/public/images/hero-new-braunfels-river-mobile.webp`
- **Dimensions:** 1440 × 2560
- **Aspect / orientation:** 9:16 · portrait
- **Description:** Vertical companion of the same scene, recomposed for mobile so the river fills the lower half and the sky breathes above.
- **Cinematic direction:** Slow Ken Burns-friendly composition with breathing room top and bottom for text overlay.

### `/public/images/og-todd-spencer-new-braunfels.jpg`
- **Dimensions:** 1200 × 630
- **Aspect / orientation:** 1.91:1 · landscape (Open Graph)
- **Description:** Social share card. Wide Albany skyline at soft hour with a subtle red Cadwell wordmark in the lower-right corner.
- **Cinematic direction:** Stronger contrast than the hero so it pops in feeds; mild vignetting at corners.

---

## 2 · Trust / Authority Strip

(Uses the shared paper texture below — no dedicated image asset needed.)

### `/public/images/texture-paper-warm.webp`
- **Dimensions:** 1920 × 1080 (tileable)
- **Aspect / orientation:** Landscape, tileable
- **Description:** Subtle cold-press paper grain with a faint warm wash for editorial section backgrounds.
- **Cinematic direction:** Very low contrast, almost invisible at full opacity, designed to be used at ~50% opacity behind type.

---

## 3 · About Jason Section

### `/public/images/todd-spencer-editorial-portrait.jpg`
- **Dimensions:** 2000 × 2500
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Editorial portrait of Jason Cadwell along the Albany Willamette Riverfront Park at golden hour. Wearing a relaxed dark sport coat over a quality t-shirt. Looking past the camera, mid-thought, not smiling for camera. Trees and the river softly out of focus behind.
- **Cinematic direction:** 50mm or 85mm equivalent, shallow depth of field, warm documentary tones. The portrait must feel like a Magnum-style real estate editorial, not a corporate headshot.

**Supporting (optional, suggested filename):**
- `/public/images/about-jason-walking-monteith.webp` · 2400 × 1600 · 3:2 · landscape · Jason walking a Monteith-district sidewalk in autumn, falling leaves, mid-stride, candid.
- `/public/images/about-jason-builder-walkthrough.webp` · 2400 × 1600 · 3:2 · landscape · Jason on a new-construction job site with a clipboard, sun raking across drywall.

---

## 4 · Hyperlocal Albany — Explore Tiles

Each tile is rendered in the editorial grid on the home page and re-used on `/explore`
and `/blog/<slug>` interior pages.

### `/public/images/explore-river-life-comal-float.webp`
- **Dimensions:** 2400 × 3000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Soft morning light over the Willamette River in Albany. Mist rising off the water, a single kayaker pushing off, autumn trees on the bank.
- **Cinematic direction:** Cool dawn palette, glassy water, painterly.

### `/public/images/explore-restaurants-gruene-supper.webp`
- **Dimensions:** 2400 × 1800
- **Aspect / orientation:** 4:3 · landscape (also crops to 4:5)
- **Description:** Historic downtown Albany at golden hour. First Avenue brick facades, warm storefront lighting, two or three pedestrians, no harsh signage.
- **Cinematic direction:** Wes Anderson symmetry meets documentary; warm tungsten light spill from shops onto the sidewalk.

### `/public/images/explore-live-music-gruene-hall.webp`
- **Dimensions:** 2400 × 3000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Tree-lined walking path leading to an Albany elementary school (use a GAPS school path like Periwinkle, Sunrise, or Oak Elementary) in soft afternoon light. Parent and child silhouettes acceptable but not necessary.
- **Cinematic direction:** Documentary suburban editorial, fall leaves, warm low sun.

### `/public/images/explore-family-activities-river-sunset.webp`
- **Dimensions:** 2400 × 3000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Families walking the Albany riverfront path at golden hour with autumn trees overhead. Soft, real, not staged.
- **Cinematic direction:** Backlit subjects, warm rim light, river out of focus behind.

### `/public/images/explore-breweries-faust-taproom.webp`
- **Dimensions:** 2400 × 3000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Warmly lit downtown Albany restaurant interior with brick walls and pendant lighting. Two glasses of wine, soft conversation in the background. Could feature Sybaris, Calapooia Brewing, or Frankie's.
- **Cinematic direction:** Editorial food-and-drink feel; shallow DOF, warm tungsten, no logos in frame.

### `/public/images/explore-weekend-activities-farmers-market.webp`
- **Dimensions:** 2400 × 3000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Albany Saturday farmers market (Monteith Riverpark) with woven baskets of fresh Willamette Valley produce, soft morning light, peaches and tomatoes.
- **Cinematic direction:** Slightly desaturated documentary palette with one warm color pop.

### `/public/images/explore-neighborhood-guides-canopy-drive.webp`
- **Dimensions:** 2400 × 3000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Tree-canopied residential street in North Albany with mature maples arching over the lane.
- **Cinematic direction:** Long lens compression, late afternoon light filtering through the canopy, classic craftsman homes on either side.

### `/public/images/explore-hidden-gems-secret-cove.webp`
- **Dimensions:** 2400 × 1800
- **Aspect / orientation:** 4:3 · landscape (also crops 4:5)
- **Description:** Quiet wetland boardwalk at Talking Water Gardens with reflective pools and tall grasses at soft hour.
- **Cinematic direction:** Mirror-still water, mood-forward, painterly. Almost no people in frame.

---

## 5 · Seller-Focused Section

Visuals are atmospheric (no dedicated photographic asset required in the current build), but the
following are recommended supporting images if a future redesign adds photography:

- `/public/images/sell-listing-walkthrough.webp` · 2400 × 1600 · 3:2 · landscape · Jason with a seller in a sunlit Albany living room, mid-walkthrough.
- `/public/images/sell-photographer-twilight.webp` · 2400 × 1600 · 3:2 · landscape · Twilight exterior shoot in progress — tripod, glowing windows, lavender sky.

---

## 6 · New Construction / Builders Section

Recommended supporting images:

- `/public/images/new-construction-lot-cascades.webp` · 2400 × 1600 · 3:2 · landscape · Fresh foundation lot with Cascade foothills behind, late golden hour.
- `/public/images/new-construction-walkthrough.webp` · 2400 × 1600 · 3:2 · landscape · Jason in hardhat, mid-rough-in, sun raking across studs.
- `/public/images/new-construction-floor-plan.webp` · 1600 × 1600 · 1:1 · square · Flat lay of architectural plans, coffee, fine pen.

---

## 7 · Featured Neighborhoods

### `/public/images/neighborhood-gruene-historic-limestone.webp` (used for **North Albany**)
- **Dimensions:** 2400 × 1800
- **Aspect / orientation:** 4:3 · landscape
- **Description:** North Albany residential street at golden hour with mature trees and craftsman-style homes. Gravel driveway, garden hose coiled, no people.
- **Cinematic direction:** Sun raking across a single white craftsman; deep blue shadow side; quiet weekend feel.

### `/public/images/neighborhood-downtown-new-braunfels-plaza.webp` (used for **Historic Downtown**)
- **Dimensions:** 2400 × 1800
- **Aspect / orientation:** 4:3 · landscape
- **Description:** Historic downtown Albany at soft hour with brick storefronts and First Avenue light. Monteith Historic District feel — National Register homes, lamp posts, autumn trees.
- **Cinematic direction:** Editorial main-street photography, blue hour with warm window glow.

### `/public/images/neighborhood-canyon-lake-shoreline.webp` (used for **Knox Butte**)
- **Dimensions:** 2400 × 1800
- **Aspect / orientation:** 4:3 · landscape
- **Description:** Aerial view of Knox Butte (east Albany) with new homes and Cascade foothills beyond. Morning light, soft cloud cover.
- **Cinematic direction:** Drone or elevated perspective, gentle haze, layered hills.

### `/public/images/neighborhood-vintage-oaks-canopy.webp` (used for **Periwinkle**)
- **Dimensions:** 2400 × 1800
- **Aspect / orientation:** 4:3 · landscape
- **Description:** Periwinkle neighborhood in Albany with mature canopy oaks arching over a quiet residential lane.
- **Cinematic direction:** Compressed lens canopy shot; dappled light on asphalt.

### `/public/images/neighborhood-veramendi-aerial.webp` (used for **Oak Creek & South Albany**)
- **Dimensions:** 2400 × 1800
- **Aspect / orientation:** 4:3 · landscape
- **Description:** Aerial of Oak Creek master-planned community in south Albany with trails and Cascade horizon.
- **Cinematic direction:** Drone perspective at slight tilt, late afternoon, soft warm light on tile roofs.

---

## 8 · Market Insights / Journal Cards

### `/public/images/insight-moving-to-new-braunfels.webp`
- **Dimensions:** 2400 × 1500
- **Aspect / orientation:** 8:5 · landscape
- **Description:** Wide editorial photograph of Albany skyline at golden hour with river bend in foreground.
- **Cinematic direction:** Magazine cover treatment; gentle horizontal banding of color (water · town · sky).

### `/public/images/insight-cost-of-living-guide.webp`
- **Dimensions:** 1800 × 1800
- **Aspect / orientation:** 1:1 · square
- **Description:** Editorial flat lay of Albany home keys, a coffee, and a small leather notebook on warm paper.
- **Cinematic direction:** Overhead, top-down, soft natural window light; subtle paper texture beneath objects.

### `/public/images/insight-lifestyle-river-rituals.webp`
- **Dimensions:** 1800 × 1800
- **Aspect / orientation:** 1:1 · square
- **Description:** Editorial photograph of soft morning light over the Willamette in Albany with autumn trees on the bank.
- **Cinematic direction:** Painterly water + foliage, no horizon line.

### `/public/images/insight-real-estate-trends.webp`
- **Dimensions:** 1800 × 1800
- **Aspect / orientation:** 1:1 · square
- **Description:** Aerial editorial photograph of an Albany residential corridor in soft afternoon light.
- **Cinematic direction:** Bird's-eye geometry of rooftops and streets, low sun angle, slight tilt.

---

## 9 · Social / Content Section (Video Posters)

### `/public/images/video-market-update-poster.webp`
- **Dimensions:** 1600 × 2000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Cinematic film-poster still of Albany skyline at soft hour with the Willamette bending through and a single moving figure in middle ground.
- **Cinematic direction:** Editorial poster look. High-contrast top half, breathing room for the play button overlay.

### `/public/images/video-community-spotlight-poster.webp`
- **Dimensions:** 1600 × 2000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Cinematic still of Monteith Park footbridge in Albany with mature trees and morning sunlight.
- **Cinematic direction:** Backlit, lens flare acceptable, soft documentary palette.

### `/public/images/video-lifestyle-reel-poster.webp`
- **Dimensions:** 1600 × 2000
- **Aspect / orientation:** 4:5 · portrait
- **Description:** Cinematic still of golden-hour light along the Willamette River in Albany with autumn trees.
- **Cinematic direction:** Anamorphic feel, slow shutter water, warm-cool split tone.

---

## 10 · Testimonials Section

No dedicated photography required in the current build. Optional supporting assets:

- `/public/images/testimonial-couple-keys.webp` · 1600 × 2000 · 4:5 · portrait · Albany couple holding keys outside a craftsman porch, candid laughter.
- `/public/images/testimonial-handshake.webp` · 1600 × 1600 · 1:1 · square · Mid-handshake on a Knox Butte build site, warm late light.

---

## 11 · Final CTA

### `/public/images/cta-hill-country-twilight.webp`
- **Dimensions:** 3840 × 2160
- **Aspect / orientation:** 16:9 · landscape
- **Description:** Twilight silhouette of the Cascade foothills outside Albany with a warm horizon glow. A single farmhouse light pin-prick in the middle distance.
- **Cinematic direction:** Long exposure feel; deep blue night sky transitioning to amber horizon; quiet, emotional, end-of-day.

### `/public/images/cta-hill-country-twilight-mobile.webp`
- **Dimensions:** 1440 × 2560
- **Aspect / orientation:** 9:16 · portrait
- **Description:** Vertical companion of the same twilight scene.
- **Cinematic direction:** Same color treatment; more sky, less foreground.

---

## 12 · Footer / Branding

### `/public/images/todd-logo.png`
- **Dimensions:** 512 × 512 (square mark) plus 1200 × 400 horizontal lockup if available
- **Aspect / orientation:** Square (primary) / horizontal (secondary)
- **Description:** Cadwell Group monogram in **Cadwell Red (#C00000)** on transparent background. Provide a black version and a white (knock-out) version. The current site code uses this file in both light and dark contexts — the dark footer applies a `brightness-0 invert` filter, so a clean single-color PNG with transparent background is required.
- **Cinematic direction:** Clean, modern, editorial. No drop shadows, no gradients.

---

## Recommended Naming for Future New Assets (Albany-native filenames)

If or when you migrate filenames away from the legacy paths, a clean Albany-native convention
would look like:

- `/public/images/hero/albany-willamette-sunset-hero.webp`
- `/public/images/hero/albany-willamette-sunset-hero-mobile.webp`
- `/public/images/portraits/jason-cadwell-editorial-portrait.webp`
- `/public/images/neighborhoods/north-albany-craftsman-street.webp`
- `/public/images/neighborhoods/monteith-historic-downtown.webp`
- `/public/images/neighborhoods/knox-butte-aerial.webp`
- `/public/images/neighborhoods/periwinkle-canopy-drive.webp`
- `/public/images/neighborhoods/oak-creek-aerial.webp`
- `/public/images/explore/willamette-mist-morning.webp`
- `/public/images/explore/first-ave-downtown-golden-hour.webp`
- `/public/images/explore/gaps-school-path.webp`
- `/public/images/explore/riverfront-family-walk.webp`
- `/public/images/explore/calapooia-brewing-interior.webp`
- `/public/images/explore/monteith-farmers-market.webp`
- `/public/images/explore/talking-water-gardens.webp`
- `/public/images/cta/cascades-twilight-horizon.webp`
- `/public/images/cta/cascades-twilight-horizon-mobile.webp`
- `/public/images/og/cadwell-realty-og-share.jpg`
- `/public/images/brand/cadwell-monogram.png`
- `/public/images/brand/cadwell-wordmark.png`

Swapping over is a quick string-replace once the new files are in place.

---

## Delivery Checklist for the Design / Content Team

- [ ] Hero landscape (3840 × 2160)
- [ ] Hero mobile portrait (1440 × 2560)
- [ ] OG share image (1200 × 630)
- [ ] Editorial portrait of Jason (2000 × 2500)
- [ ] 8 × Explore tiles (mix of 4:5 portrait and 4:3 landscape)
- [ ] 5 × Neighborhood feature images (2400 × 1800)
- [ ] 4 × Market insight cards (mix of 8:5 and 1:1)
- [ ] 3 × Video poster stills (1600 × 2000)
- [ ] CTA twilight landscape (3840 × 2160)
- [ ] CTA twilight mobile portrait (1440 × 2560)
- [ ] Cadwell monogram + wordmark (PNG, transparent, single color)
- [ ] Paper grain texture (tileable 1920 × 1080)
- [ ] All images delivered as `.webp` (photos) or `.png` (logos)
- [ ] sRGB color profile embedded
- [ ] Each image ≤ 600 KB after compression

> When uploading replacements, keep the existing filenames and paths exactly. The site
> will pick them up on the next deploy with no code changes required.
