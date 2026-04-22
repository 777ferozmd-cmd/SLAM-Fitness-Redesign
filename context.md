# SLAM Fitness Studio — Website Rebuild Context

## Project Overview

Build a modern, high-performance gym website for **SLAM Fitness Studio**, a premium unisex gym chain in Chennai. The design is based on 4 reference UI screenshots provided by the client — a dark, cinematic fitness website with a punchy red accent (`#FF1A1A`), rounded photo corners, Poppins typography, and two-column alternating layouts.

This is a complete rebuild of `slamfitnessstudio.in`. The goal is a world-class fitness brand website that converts visitors into members and franchise leads.

> **📐 Design details live in `design.md`** — read it before writing any CSS, component, or layout code. Every color, font size, border-radius, animation, and component pattern is specified there. `context.md` covers content and architecture; `design.md` covers all visual decisions.

---

## Design System

> Full visual specification is in **`design.md`**. This section is a summary only — always defer to `design.md` for exact values.

### Aesthetic Direction
Dark, cinematic, premium. The visual language is confident and clean — not aggressive or loud. Two-column alternating layouts, rounded photo corners, a single punchy red accent, and Poppins at varying weights carry all the visual weight.

### Color Tokens (summary — see `design.md` §1 for full palette)
- **Background:** `#0D0D0D` (primary), `#141414` (sections), `#1A1A1A` (cards)
- **Accent:** `#FF1A1A` — punchy red. Used for: CTA buttons, active accordion fills, keyword highlights in headlines, icon tints. **Not neon, not lime.**
- **Text:** `#FFFFFF` (headlines), `#B0B0B0` (body), `#6B6B6B` (muted/captions)
- **Borders:** `1px solid #2A2A2A`, active border `#FF1A1A`

### Typography (summary — see `design.md` §2 for full scale)
- **Single font family: `Poppins`** (Google Fonts) — Bold/ExtraBold for headings, Regular/Medium for body
- **NOT** Bebas Neue, Anton, Barlow Condensed, or any condensed/all-caps display font
- Headlines in **Title Case**, NOT ALL CAPS
- Hero H1: `clamp(52px, 6vw, 72px)` / Section H2: `clamp(36px, 4.5vw, 56px)`
- **Headline accent pattern:** First significant word in `#FF1A1A`, remainder in white

### Layout (summary — see `design.md` §3–4)
- Max width: `1200px` / Section padding: `96px` vertical, `80px` horizontal
- Primary layout pattern: alternating two-column 50/50 splits
- All content photos: `border-radius: 16–24px` — never sharp corners
- Hero content: left-aligned, pinned bottom-left, never centered

### Motion (summary — see `design.md` §7)
- Staggered fade-up on hero load (`opacity 0→1`, `translateY 20→0`)
- Scroll-triggered reveals via `IntersectionObserver`
- Stat counters animate on viewport entry
- Accordion: height + background color transition `300ms ease`
- Nav: transparent → `rgba(13,13,13,0.92)` + `backdrop-filter: blur(16px)` on scroll

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS + custom CSS variables for design tokens
- **Animations:** Framer Motion for scroll-triggered animations and page transitions
- **Icons:** Lucide React
- **Fonts:** Google Fonts (self-hosted via `next/font`)
- **Images:** `next/image` with optimized loading
- **Forms:** React Hook Form with basic validation
- **Deployment-ready:** Static export or Vercel

---

## Site Architecture — 14 Pages

### Page List

| # | Route | Page Name | Priority |
|---|---|---|---|
| 1 | `/` | Home | P0 |
| 2 | `/about` | About Us | P0 |
| 3 | `/services/weight-loss-weight-gain` | Weight Loss & Weight Gain | P0 |
| 4 | `/services/functional-training` | Functional Fitness | P0 |
| 5 | `/services/bootcamp` | Fitness Bootcamp | P0 |
| 6 | `/services/body-transformation` | Body Transformation | P0 |
| 7 | `/trainers` | Meet the Trainers | P1 |
| 8 | `/transformations` | Transformation Gallery | P1 |
| 9 | `/pricing` | Membership & Pricing | P1 |
| 10 | `/blog` | Blog Index | P2 |
| 11 | `/blog/[slug]` | Blog Post | P2 |
| 12 | `/locations` | Store Locator | P2 |
| 13 | `/franchise` | Franchise Opportunity | P2 |
| 14 | `/contact` | Contact / Book a Trial | P0 |

---

## Page-by-Page Layout Specifications

---

### PAGE 1: Home (`/`)

**Purpose:** Establish brand authority, drive trial bookings, introduce all services.

#### Section 1 — Hero (Full Viewport)
- Full-viewport-height (`100vh`) cinematic athlete photo, full bleed, with `rgba(0,0,0,0.45)` overlay
- **Content pinned bottom-left** — NOT centered. `padding-left: 80px`, `padding-bottom: 80px`
- Content stack (bottom to top):
  1. **Social proof cluster** (bottommost): 4 overlapping circular avatars + `★★★★★ 4.5` gold stars + `"From 580+ Google Reviews"` in muted gray
  2. **Primary CTA:** `[Claim Your Free Trial]` — solid red `#FF1A1A`, white text, `border-radius: 8px`, `padding: 16px 32px`
  3. **Body copy:** `18px`, `#C8C8C8`, `max-width: 420px` — `"Expert coaches. Personalised programs tailored to your goals, your body, and your schedule."`
  4. **H1 headline:** `clamp(52px, 6vw, 72px)`, `font-weight: 800`, white, `line-height: 1.1` — `"Where Chennai Comes to Train"`
- Eyebrow label above H1: `SLAM FITNESS STUDIO` in `#FF1A1A`, `12px`, uppercase, `letter-spacing: 0.12em`
- No ghost button on hero — single red CTA only

#### Section 2 — Stats Bar (Full-width dark strip)
- Background: `#141414`, full width, `padding: 40px 80px`
- 4 stats in a row, separated by `1px solid #2A2A2A` vertical dividers:
  - `2000+` Members / `10+` Expert Coaches / `4` Specialised Programs / `4–6 Weeks` Visible Results
- Value: `48–56px`, `font-weight: 800`, white — animated counter on scroll entry
- Label: `14px`, `color: #6B6B6B`, below value

#### Section 3 — Services / Programs (Accordion Layout)
- **Two-column layout:** Left = H2 + intro copy + accordion list. Right = tall photo `border-radius: 16px`
- Section H2 with accent pattern: `"<red>Programs</red> Built Around Your Goals"`
- Intro copy: `"From fat loss to muscle gain — SLAM has a structured program for every body type and goal."`
- **Accordion list** of 4 services (see `design.md` §5.4 for full accordion spec):
  - Active item: solid `#FF1A1A` fill, white text, shows description
  - Inactive items: `1px solid #2A2A2A` border, white title, `⊕` icon right
  - Default active: Weight Loss & Weight Gain (first item)
- Right column photo: gym/training action shot, `border-radius: 16px`, `height: ~520px`, `object-fit: cover`

#### Section 4 — "Coaching Built Around You" (Two-Column Feature)
- **Two-column layout:** Left = group/people photo (bleeds to edge or `border-radius: 0`). Right = text content
- Section H2: `"<red>Coaching</red> Built Around You"` — `clamp(36px, 4vw, 52px)`, `font-weight: 700`
- Body copy `18px`, `#B0B0B0`, `max-width: 480px`, `line-height: 1.65`:
  `"Not sure where to start? Our certified trainers build programs based on your goals, your body, and your schedule. This is how real results happen."`
- **Text-link CTA only** (no filled button): `"Book a Free Consultation →"` — white, `font-weight: 700`, underline on hover
- 4–5 feature points with `#FF1A1A` dot/checkmark: personalised programs, certified coaches, nutrition + training, beginner-friendly, flexible timings

#### Section 5 — Transformation Teaser
- Dark section with 3 before/after transformation cards in a horizontal scroll
- Title: `REAL PEOPLE. REAL RESULTS.`
- Each card: before/after photo side-by-side, member name, program type, timeframe
- CTA link: `[See All Transformations →]`

#### Section 6 — Trainer Spotlight
- Title: `TRAINED BY THE BEST`
- Horizontal scrolling trainer cards (3 visible on desktop)
- Each card: headshot photo with dark overlay, name, specialisation, years of experience
- CTA: `[Meet the Full Team →]`

#### Section 7 — "Ready to Start?" CTA Banner
- Full-width, centered content, `background: #141414`, generous padding `96px`
- Eyebrow: `"FREE CONSULTATION"` in `#FF1A1A`, uppercase tracked
- Large H2: `"Ready to Start Your Transformation?"` — white, `52px`, `font-weight: 700`
- Sub: `"Book a free consultation with our coaches. No commitments. No pressure."` — `#B0B0B0`
- Single red CTA button: `[Book Your Free Trial]`

#### Section 8 — Blog Preview
- Title: `FROM THE SLAM BLOG`
- 3 blog cards in a row:
  - Thumbnail, category tag, title, read time, link
- CTA: `[Read All Articles →]`

#### Section 9 — Franchise Strip
- Horizontal dark strip with: `Own a SLAM Studio` + short 1-line pitch + `[Franchise Enquiry →]` button
- Subtle background texture or pattern

#### Section 10 — Footer
(see Footer spec below)

---

### PAGE 2: About Us (`/about`)

#### Sections:
1. **Hero** — Full-bleed image, title: `OUR STORY`
2. **Brand Story** — 2-column: left text narrative, right large quote pull
   - Copy: Founded with a mission to make premium fitness accessible in Chennai. Not a gym — a lifestyle destination. Growing across the city. Expert professionals. Luxurious experience.
3. **Mission & Values** — 3-column cards: Mission / Vision / Values
4. **Timeline / Milestones** — Horizontal scrolling timeline of SLAM's growth
5. **Parent Company** — Brief mention of Paulsons Group with credibility copy
6. **CTA** — Join the SLAM family banner

---

### PAGE 3: Weight Loss & Weight Gain (`/services/weight-loss-weight-gain`)

**This is the core SEO page — most content-heavy.**

#### Sections:
1. **Hero** — Full-screen, title: `TWO GOALS. ONE MISSION.` Subtitle: `Weight Loss & Weight Gain Programs`
2. **Intro Split** — Two columns side by side:
   - Left: **Weight Loss** — `#FF1A1A` icon, headline, 3-bullet description
   - Right: **Weight Gain** — `#FF1A1A` icon, headline, 3-bullet description
   - Divider: `1px solid #2A2A2A` vertical line between them
3. **How It Works** — 4-step process (numbered steps):
   1. Personalised Assessment
   2. Custom Program Design (training + nutrition)
   3. Consistent Coached Training
   4. Progress Tracking & Milestones
4. **Program Details** — Expandable accordion or tab toggle:
   - Weight Loss tab: HIIT, functional workouts, calorie-optimised circuits, cardio, treadmill/rowing/assault bike
   - Weight Gain tab: Progressive overload, strength circuits, compound movements, calorie-surplus diet
5. **Health Benefits** — Icon grid: manages type 2 diabetes, hypertension, cardiovascular risk, lean mass preservation
6. **Results Timeline** — Visual graphic: `4–6 weeks = visible results`
7. **Who Is This For?** — 3 profile cards: Beginners / Women / Health-focused adults
8. **FAQ Section** — All 19 FAQs from the original site, in accordion format, properly structured
9. **Booking CTA** — Full-width dark strip with form or button

---

### PAGE 4: Functional Training (`/services/functional-training`)

#### Sections:
1. Hero — Title: `MOVE BETTER. PERFORM HARDER.`
2. What is Functional Training — text + image
3. Benefits list — multi-muscle engagement, metabolism boost, calorie burn
4. Who it's for
5. Sample workout moves (icon grid)
6. CTA

---

### PAGE 5: Fitness Bootcamp (`/services/bootcamp`)

#### Sections:
1. Hero — Title: `THE BOOTCAMP EXPERIENCE`
2. What makes it different — group energy, long-lasting results, healthy lifestyle
3. Session structure / what to expect
4. Community testimonials
5. Schedule teaser
6. CTA

---

### PAGE 6: Body Transformation (`/services/body-transformation`)

#### Sections:
1. Hero — Title: `YOUR BEST BODY STARTS HERE`
2. Transformation approach — combined training + nutrition
3. 3-phase transformation plan (phases shown visually)
4. Before/after gallery preview (3 cards)
5. CTA

---

### PAGE 7: Trainers (`/trainers`)

#### Sections:
1. Hero — Title: `THE COACHES BEHIND YOUR RESULTS`
2. Trainer grid — 6-card grid (3 per row desktop, 2 on tablet, 1 on mobile)
   - Each card: photo, name, specialisation, certifications, years of experience, social link
3. Philosophy section — copy about trainer quality standards at SLAM
4. CTA — Book a session with a trainer

---

### PAGE 8: Transformation Gallery (`/transformations`)

#### Sections:
1. Hero — Title: `REAL PEOPLE. REAL RESULTS.`
2. Filter tabs: All / Weight Loss / Weight Gain / Body Transformation / Bootcamp
3. Masonry or grid of before/after cards
4. Testimonial strip — 3 short quote cards
5. CTA — Start your transformation

---

### PAGE 9: Pricing (`/pricing`)

#### Sections:
1. Hero — Title: `CHOOSE YOUR PLAN`
2. 3 pricing tiers in cards:
   - **Starter** — Monthly, basic access
   - **SLAMer** — 3-month, includes nutrition guidance *(highlight as recommended)*
   - **Elite** — 6–12 month, personal training + diet + priority access
3. Features comparison table below the cards
4. FAQ — 3–4 pricing-specific questions (no hidden fees, what's included, etc.)
5. CTA — Book free consultation

---

### PAGE 10–11: Blog (`/blog` + `/blog/[slug]`)

#### Blog Index:
1. Hero with search bar
2. Featured post (large card)
3. Article grid — 3 columns
4. Category filter tabs: All / Nutrition / Workouts / Lifestyle / Transformation

#### Blog Post:
1. Full-width header with title, author, date, category tag
2. Hero image
3. Article body with proper typography (drop caps, pull quotes)
4. Related articles section at bottom

---

### PAGE 12: Locations (`/locations`)

#### Sections:
1. Hero — Title: `FIND YOUR SLAM`
2. Location cards — each with: area name, address, phone, hours, map embed or link
3. City map overview
4. Corporate office details:
   - `#18/70, Halls Road, Kilpauk, Chennai – 600 010`
   - `+91 70944 79145`

---

### PAGE 13: Franchise (`/franchise`)

#### Sections:
1. Hero — Title: `OWN A SLAM STUDIO` with bold entrepreneurship sub-copy
2. Why franchise with SLAM — 4 value props
3. Investment overview (without specific numbers — lead gen focus)
4. Process steps — 4 steps from enquiry to launch
5. Contact form — collects: name, city, investment capacity, phone, email
6. Contact: `+91 91768 40500` / `+91 98414 63406` / `+91 99628 54265` / `ceo@paulsons.in`

---

### PAGE 14: Contact / Book a Trial (`/contact`)

#### Sections:
1. Hero — Title: `LET'S GET YOU STARTED`
2. Two-column layout:
   - Left: Contact form
     - Fields: Full Name, Phone, Email, Goal (dropdown: Weight Loss / Weight Gain / Functional Training / Bootcamp / Body Transformation / Not Sure), Message
     - Submit CTA: `[Book My Free Trial]`
   - Right: Contact info block
     - Customer Care: `70944 05880`
     - Email: `customercare.slam@gmail.com`
     - Address: Kilpauk, Chennai
     - Social links: Instagram, Facebook
3. WhatsApp floating CTA button (bottom-right corner, fixed position, accent color) — links to WhatsApp chat

---

## Global Components

### Navbar
- Logo left, nav links center, CTA button right
- Links: Home / About / Services (dropdown) / Blog / Locations / Franchise / Contact
- Services dropdown items: Weight Loss & Weight Gain / Functional Training / Bootcamp / Body Transformation
- On scroll: becomes sticky with `backdrop-filter: blur(16px)` dark bg
- Mobile: hamburger → full-screen overlay menu with staggered link animation
- CTA button: `[Join SLAM]` in accent red

### Footer
- 4-column grid:
  - Col 1: Logo + tagline + Instagram/Facebook icons
  - Col 2: Quick Links (Home, About, Blog, Store Locator, Franchise, Contact)
  - Col 3: Services (all 4 service page links)
  - Col 4: Contact info
    - Mr Suresh Babu — `70944 05880`
    - `customercare.slam@gmail.com`
    - Corporate: `#18/70 Halls Road, Kilpauk, Chennai 600 010`
    - `+91 70944 79145`
- Bottom bar: `© 2025 SLAM Fitness Studio. All Rights Reserved.`
- Thin `#FF1A1A` red line above footer as divider

### CTA Button Variants
- **Primary:** Punchy red fill (`#FF1A1A`), white text, `border-radius: 8px`. Hover: darken to `#CC0000`, `translateY(-1px)`
- **Secondary / Ghost:** Transparent, white border, white text, hover fills with accent
- **Text link:** White underline with arrow `→`
- All buttons: `padding: 14px 32px`, `font-weight: 700`, `letter-spacing: 0.05em`, `text-transform: uppercase`

### WhatsApp Floating Button
- Fixed bottom-right corner
- WhatsApp icon in white on dark `#1A1A1A` circle — keep distinct from brand red
- Subtle pulse animation
- Links to: `https://wa.me/917094405880`

---

## Copy — Full Content Reference

### Brand Messaging Hierarchy

**Tagline (hero use):** `NOT JUST A GYM. A WAY OF LIFE.`

**Mission statement:** SLAM Fitness Studio is a premium fitness destination in Chennai, combining expert coaching, personalised programs, and nutritional guidance to deliver real, lasting transformation — for weight loss, weight gain, and everything in between.

**Value Props (use throughout site):**
1. Personalised programs tailored to your body, goals, and schedule
2. Certified, experienced coaches with one-on-one attention
3. Training + nutrition — both sides of the transformation equation
4. Beginner-friendly. Flexible timings. No judgment.
5. Community of SLAMers who celebrate every milestone with you
6. Proven results: visible changes within 4–6 weeks of consistent training
7. Manages health conditions: type 2 diabetes, hypertension, cardiovascular risk

### Weight Loss Program Copy
- Headline: `LOSE WEIGHT THE RIGHT WAY`
- Body: Structured training that burns calories efficiently and sustainably. We design weight-loss routines that fit your pace, schedule, and comfort. HIIT, functional workouts, and calorie-optimised circuits help you burn fat while preserving lean muscle.
- Program includes: HIIT sessions, functional training, cardio circuits, nutrition planning, progress tracking

### Weight Gain Program Copy
- Headline: `BUILD SOLID, LASTING MASS`
- Body: Progressive overload, strength circuits, and targeted exercises designed to build real muscle — not just scale weight. We pair expert training with a calorie-surplus nutrition plan to sculpt a fuller, stronger physique.
- Program includes: Strength training, progressive overload, compound lifts, mass-building nutrition plan

### Stats to Display
- `2000+` Active Members
- `10+` Expert Coaches
- `4–6 Weeks` to Visible Results
- `4` Specialised Programs

### FAQ Copy (full — use on `/services/weight-loss-weight-gain`)

**Q: Which type of gym is best for weight loss?**
A gym that combines strength training, cardio, and functional workouts is most effective. Look for programs focused on calorie burn, endurance, and muscle building, with nutritional guidance for long-term results. SLAM checks all of these.

**Q: How long does it take to see results?**
Most members see visible improvements within 4–6 weeks of consistent training and proper nutrition.

**Q: Do you provide diet plans?**
Yes. Expert-designed diet plans complement your training to ensure balanced nutrition, faster recovery, and sustainable transformation.

**Q: Can beginners join?**
Absolutely. Step-by-step programs focus on proper form, gradual intensity, and balanced nutrition. Trainers guide you through every stage.

**Q: Can women join a gym for weight loss?**
Yes. SLAM creates a safe, supportive environment with workouts tailored to female fitness goals — toning, strength training, fat loss, and flexibility.

**Q: Does strength training help with weight gain?**
Yes. Lifting weights enhances muscle tone, boosts metabolism, and burns calories even after your workout.

**Q: What's the ideal time to work out?**
Morning workouts enhance metabolism; evening sessions improve strength and endurance. SLAM offers flexible timings to fit your lifestyle.

**Q: Can I gain weight at the same gym where I lose it?**
Yes. SLAM offers both programs, customised to your body's needs. Trainers adjust your workouts and nutrition for balanced transformation.

**Q: Which gym class is best for weight loss?**
HIIT, functional workouts, and circuit training boost metabolism, burn calories, and tone muscles effectively.

**Q: Which exercise is best for weight loss?**
Squats, burpees, jump rope, treadmill sprints, and kettlebell swings. Combining strength and cardio yields faster fat burn.

**Q: Which gym machine is best for weight loss?**
Treadmill, rowing machine, stair climber, and assault bike — combine with strength exercises for maximum fat loss.

**Q: Can functional training help with weight loss?**
Yes. Functional workouts engage multiple muscles, boost calorie burn, and enhance overall performance.

**Q: Is diet or exercise more important?**
Both work hand in hand. A structured diet fuels your workouts, while consistent training accelerates fat loss.

**Q: Can a weight gain gym help me bulk up naturally?**
Yes. Progressive overload, muscle activation, and calorie-surplus nutrition help you gain lean mass naturally.

---

## Contact Information (use across site)

| Field | Value |
|---|---|
| Customer Care | 70944 05880 |
| Customer Email | customercare.slam@gmail.com |
| Corporate Address | #18/70, Halls Road, Kilpauk, Chennai – 600 010 |
| Corporate Phone | +91 70944 79145 |
| Corporate Email | aneesh@paulsons.in |
| Contact Person | Mr Suresh Babu (Additional President) |
| Feedback Email | sureshs@paulsons.in |
| Franchise Phone 1 | +91 91768 40500 |
| Franchise Phone 2 | +91 98414 63406 |
| Franchise Phone 3 | +91 99628 54265 |
| Franchise Email | ceo@paulsons.in |
| Instagram | https://www.instagram.com/slamfitnessstudio/ |
| Facebook | https://www.facebook.com/slamfitnessindia/ |

---

## SEO Configuration

### Page Titles & Meta Descriptions

| Page | Title Tag | Meta Description |
|---|---|---|
| Home | SLAM Fitness Studio — Best Gym in Chennai | Chennai's premium unisex gym for weight loss, weight gain, functional training & body transformation. Expert coaches. Real results. |
| Weight Loss & Weight Gain | Weight Loss & Weight Gain Gym in Chennai — SLAM | Personalised weight loss and weight gain programs in Chennai with expert trainers and nutrition guidance. See results in 4–6 weeks. |
| Functional Training | Functional Fitness Gym in Chennai — SLAM | Chennai's best functional fitness training programs. Multi-muscle workouts for performance, fat burn, and strength. |
| Bootcamp | Fitness Bootcamp in Chennai — SLAM | High-energy fitness bootcamps in Chennai. Group training for lasting results and a healthier lifestyle. |
| Body Transformation | Body Transformation Gym in Chennai — SLAM | Complete body transformation programs in Chennai combining expert training with personalised nutrition. |
| Trainers | Expert Gym Trainers in Chennai — SLAM | Meet SLAM's certified fitness coaches — specialists in weight loss, muscle gain, functional training, and body transformation. |
| Pricing | Gym Membership Pricing in Chennai — SLAM | Flexible gym membership plans in Chennai for every goal and budget. Start with a free trial. |
| Contact | Book a Free Trial — SLAM Fitness Studio Chennai | Book a free consultation or trial class at SLAM Fitness Studio, Chennai. No commitment required. |

### Primary Keywords (use naturally in copy)
- Weight loss gym in Chennai
- Weight gain gym Chennai
- Best gym in Chennai
- Functional fitness gym Chennai
- Body transformation gym Chennai
- Fitness bootcamp Chennai
- Personal training Chennai
- Unisex gym Chennai
- Gym for women Chennai
- HIIT gym Chennai

---

## Image Guidelines

Since final photography will be sourced by the client, use placeholder strategies:

- **Hero sections:** Use `https://images.unsplash.com` dark gym/fitness images as placeholders — always with a dark overlay (`rgba(0,0,0,0.5)` minimum)
- **Trainer cards:** Use placeholder silhouette with initials on dark background
- **Before/after:** Use placeholder cards with gradient backgrounds + dummy text
- **Blog thumbnails:** Use Unsplash fitness images with category color overlay
- Ensure all `<Image>` components have `alt` text that includes relevant keywords
- Aspect ratios: Hero = `16:9`, Trainer cards = `3:4`, Blog thumbs = `16:9`, Service cards = `4:3`

---

## Performance & Accessibility Requirements

- Lighthouse score target: **90+** on Performance, Accessibility, SEO
- All images use `next/image` with `loading="lazy"` (except above-fold)
- Fonts loaded via `next/font/google` — no layout shift
- All interactive elements have `:focus-visible` ring styles
- Color contrast: minimum 4.5:1 for all body text on dark backgrounds
- ARIA labels on all icon-only buttons
- Semantic HTML: proper `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>` usage
- Schema markup: `LocalBusiness` JSON-LD on homepage and contact page
- Canonical URLs on all pages
- `robots.txt` and `sitemap.xml` generated

---

## File Structure

```
/
├── design.md                   # ← READ FIRST. All visual/design specs
├── context.md                  # ← This file. Content + architecture
├── app/
│   ├── layout.tsx              # Root layout with nav + footer
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── weight-loss-weight-gain/page.tsx
│   │   ├── functional-training/page.tsx
│   │   ├── bootcamp/page.tsx
│   │   └── body-transformation/page.tsx
│   ├── trainers/page.tsx
│   ├── transformations/page.tsx
│   ├── pricing/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── locations/page.tsx
│   ├── franchise/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── AnimatedCounter.tsx
│   │   └── SectionLabel.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WhySLAM.tsx
│   │   ├── TransformationTeaser.tsx
│   │   ├── TrainerSpotlight.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── FranchiseStrip.tsx
│   │   └── BookingCTA.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       └── FranchiseForm.tsx
├── lib/
│   ├── constants.ts            # Contact info, nav links, service data
│   └── blog-data.ts            # Static blog content
├── public/
│   └── images/
└── tailwind.config.ts
```

---

## constants.ts Reference Data

```typescript
export const CONTACT = {
  customerCare: "70944 05880",
  customerEmail: "customercare.slam@gmail.com",
  corporateAddress: "#18/70, Halls Road, Kilpauk, Chennai – 600 010",
  corporatePhone: "+91 70944 79145",
  corporateEmail: "aneesh@paulsons.in",
  whatsapp: "917094405880",
  instagram: "https://www.instagram.com/slamfitnessstudio/",
  facebook: "https://www.facebook.com/slamfitnessindia/",
  franchise: {
    phones: ["+91 91768 40500", "+91 98414 63406", "+91 99628 54265"],
    email: "ceo@paulsons.in",
  },
}

export const SERVICES = [
  {
    slug: "weight-loss-weight-gain",
    title: "Weight Loss & Weight Gain",
    tagline: "Two Goals, One Mission",
    description: "Personalised programs for fat loss and muscle gain, combining training and nutrition.",
    icon: "Scale",
  },
  {
    slug: "functional-training",
    title: "Functional Fitness",
    tagline: "Move Better. Perform Harder.",
    description: "Multi-muscle, performance-based training that improves real-world strength.",
    icon: "Zap",
  },
  {
    slug: "bootcamp",
    title: "Fitness Bootcamp",
    tagline: "The Bootcamp Experience",
    description: "High-energy group training sessions for lasting results and healthier habits.",
    icon: "Flame",
  },
  {
    slug: "body-transformation",
    title: "Body Transformation",
    tagline: "Your Best Body Starts Here",
    description: "Complete physique transformation through structured training and nutrition.",
    icon: "Trophy",
  },
]

export const STATS = [
  { value: 2000, suffix: "+", label: "Active Members" },
  { value: 10, suffix: "+", label: "Expert Coaches" },
  { value: 4, suffix: "", label: "Specialised Programs" },
  { value: 6, suffix: " Weeks", label: "To Visible Results", prefix: "4–" },
]
```

---

## Tailwind & Design Token Setup

> See `design.md` §9–10 for the full `tailwind.config.ts` and `globals.css` with all CSS custom properties. Copy those exactly into the project before writing any component code.

Build pages in this order to get a shippable product fast:

1. **Global layout** — Navbar, Footer, WhatsApp button, design tokens, fonts
2. **Home page** — All 10 sections
3. **Contact page** — Form + contact info (lead capture)
4. **Weight Loss & Weight Gain** — Highest SEO value service page
5. **Pricing page** — Conversion-critical
6. **Remaining service pages** — Functional, Bootcamp, Body Transformation
7. **About page**
8. **Trainers + Transformations pages**
9. **Blog index + post template**
10. **Locations + Franchise pages**
