# design.md — SLAM Fitness Studio Visual Specification

> This is the single source of truth for all visual decisions. Read this before writing any CSS, component, or layout code. `context.md` covers content and architecture; this file covers every color, font size, border-radius, animation, spacing value, and component pattern.

---

## §1 — Color Palette

```css
/* Background scale */
--color-bg-primary:    #0D0D0D;   /* Page base */
--color-bg-section:    #141414;   /* Alternating dark sections, stat bar */
--color-bg-card:       #1A1A1A;   /* Cards, dropdowns */
--color-bg-overlay:    rgba(0, 0, 0, 0.45);  /* Hero image overlay */
--color-bg-nav:        rgba(13, 13, 13, 0.92); /* Sticky nav */

/* Accent */
--color-accent:        #FF1A1A;   /* CTAs, highlights, icon tints, accordion active */
--color-accent-hover:  #CC0000;   /* Button hover state */
--color-accent-muted:  rgba(255, 26, 26, 0.12); /* Subtle accent fills */

/* Text */
--color-text-heading:  #FFFFFF;
--color-text-body:     #B0B0B0;
--color-text-muted:    #6B6B6B;
--color-text-caption:  #808080;

/* Borders */
--color-border:        #2A2A2A;   /* Default 1px borders */
--color-border-active: #FF1A1A;   /* Active/focus borders */

/* Stars / Social proof */
--color-star:          #FFD700;   /* Gold star rating */
```

### Usage Rules
- `#FF1A1A` is used **only** for: CTA buttons, first keyword in headline accent pattern, accordion active fill, icon tints, eyebrow labels. Never use it as a background for large areas.
- Never use neon, lime, or teal. The palette is strictly dark + white + single red.
- All section backgrounds alternate between `#0D0D0D` and `#141414` to create visual rhythm without color noise.

---

## §2 — Typography

### Font Family
```css
font-family: 'Poppins', sans-serif;
```
Loaded via `next/font/google`. No other typeface is used anywhere on the site.

**Do NOT use:** Bebas Neue, Anton, Barlow Condensed, Inter, or any condensed/display font.

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `--text-hero` | `clamp(52px, 6vw, 72px)` | 800 | 1.1 | H1 hero headline |
| `--text-h2` | `clamp(36px, 4.5vw, 56px)` | 700 | 1.2 | Section H2 |
| `--text-h3` | `clamp(24px, 3vw, 32px)` | 600 | 1.3 | Sub-section headings |
| `--text-h4` | `20px` | 600 | 1.4 | Card headings, accordion titles |
| `--text-body-lg` | `18px` | 400 | 1.65 | Hero sub-copy, section intro |
| `--text-body` | `16px` | 400 | 1.7 | Standard body copy |
| `--text-sm` | `14px` | 400 | 1.6 | Captions, labels, muted text |
| `--text-xs` | `12px` | 500 | — | Eyebrow labels, stat labels |
| `--text-stat` | `clamp(40px, 5vw, 56px)` | 800 | 1.0 | Animated stat numbers |

### Casing Rules
- **Headlines:** Title Case — e.g., `"Where Chennai Comes to Train"` — **NOT ALL CAPS**
- **Eyebrow labels:** ALL CAPS with `letter-spacing: 0.12em` — e.g., `SLAM FITNESS STUDIO`
- **CTA buttons:** ALL CAPS or Title Case — e.g., `[CLAIM YOUR FREE TRIAL]`

### Headline Accent Pattern
Every primary H2 uses the pattern: **first significant word in `#FF1A1A`**, rest in white.

```html
<!-- Example markup -->
<h2>
  <span style="color: #FF1A1A">Programs</span> Built Around Your Goals
</h2>
```

Examples across the site:
- `Programs Built Around Your Goals`
- `Coaching Built Around You`
- `Why Choose SLAM`
- `Real People. Real Results.`

---

## §3 — Spacing & Layout

### Container
```css
--container-max:    1200px;
--container-pad-x:  80px;   /* Desktop horizontal padding */
--container-pad-y:  96px;   /* Section vertical padding */
```

Responsive overrides:
```css
@media (max-width: 1024px) { --container-pad-x: 48px; --container-pad-y: 72px; }
@media (max-width: 768px)  { --container-pad-x: 24px; --container-pad-y: 56px; }
@media (max-width: 480px)  { --container-pad-x: 16px; --container-pad-y: 48px; }
```

### Spacing Scale (use these values only)
```
4px  8px  12px  16px  20px  24px  32px  40px  48px  56px  64px  80px  96px  120px
```

### Grid
- Primary pattern: **Two-column 50/50 alternating split** — content left + photo right, then photo left + content right
- Sections alternate left/right to create visual rhythm
- Column gap: `80px` desktop, `48px` tablet
- Service grid on homepage: `2×2` cards

---

## §4 — Border Radius & Imagery

### Border Radius Scale
```css
--radius-sm:    8px;   /* Buttons, inputs, tags */
--radius-md:    12px;  /* Small cards */
--radius-lg:    16px;  /* Standard content photos */
--radius-xl:    24px;  /* Hero-adjacent photos, feature images */
--radius-full:  9999px; /* Pill badges, avatar circles */
```

**Rule:** All content photos use `border-radius: 16–24px`. Never use sharp/zero border radius on imagery.

### Image Aspect Ratios
| Context | Ratio | Notes |
|---|---|---|
| Hero / full bleed | 16:9 | Full viewport height for hero |
| Two-column feature photo | 1:1 or 3:4 | `object-fit: cover`, `height: ~520px` |
| Trainer card | 3:4 | Portrait, `border-radius: 16px` |
| Blog thumbnail | 16:9 | Category color overlay on hover |
| Service card | 4:3 | Action shot |
| Avatar (social proof) | 1:1 | Circular, 48px diameter |

### Overlay Rule
Every hero or background photo must have a dark overlay:
```css
/* Minimum overlay */
background: linear-gradient(
  to top,
  rgba(0, 0, 0, 0.70) 0%,
  rgba(0, 0, 0, 0.45) 50%,
  rgba(0, 0, 0, 0.20) 100%
);
```

---

## §5 — Component Specifications

### §5.1 — Primary CTA Button
```css
/* Filled Red — primary action */
.btn-primary {
  background: #FF1A1A;
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background 200ms ease, transform 200ms ease;
}
.btn-primary:hover {
  background: #CC0000;
  transform: translateY(-1px);
}
```

### §5.2 — Ghost Button (Secondary)
```css
.btn-ghost {
  background: transparent;
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1.5px solid #FFFFFF;
  transition: background 200ms ease, border-color 200ms ease;
}
.btn-ghost:hover {
  background: #FF1A1A;
  border-color: #FF1A1A;
}
```

### §5.3 — Text Link CTA
```css
.btn-text {
  color: #FFFFFF;
  font-weight: 700;
  font-size: 16px;
  text-decoration: underline;
  text-underline-offset: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 200ms ease;
}
.btn-text:hover { color: #FF1A1A; }
/* Append: → character */
```

### §5.4 — Accordion (Services Section)

**Active item:**
```css
.accordion-item.active {
  background: #FF1A1A;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
}
.accordion-item.active .accordion-title {
  font-weight: 700;
  color: #FFFFFF;
}
.accordion-body {
  /* Revealed on active: description copy */
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  padding: 12px 0 0;
}
```

**Inactive item:**
```css
.accordion-item {
  border: 1px solid #2A2A2A;
  border-radius: 8px;
  padding: 18px 20px;
  cursor: pointer;
  transition: background 300ms ease, border-color 300ms ease;
}
.accordion-item:hover {
  border-color: #FF1A1A;
}
.accordion-icon {
  /* Right-aligned */
  color: #FF1A1A;
  font-size: 20px;
  /* ⊕ when closed, ⊖ when open */
}
```

Height transition:
```css
.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease;
}
.accordion-item.active .accordion-body {
  max-height: 200px;
}
```

### §5.5 — Navbar
```css
/* Default: transparent */
nav.default {
  background: transparent;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 24px 80px;
  transition: background 300ms ease, backdrop-filter 300ms ease;
}

/* Scrolled: glassmorphism */
nav.scrolled {
  background: rgba(13, 13, 13, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid #2A2A2A;
  padding: 16px 80px;
}

/* Nav links */
.nav-link {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 200ms ease;
}
.nav-link:hover { color: #FF1A1A; }
.nav-link.active { color: #FF1A1A; }

/* Services dropdown */
.nav-dropdown {
  background: #1A1A1A;
  border: 1px solid #2A2A2A;
  border-radius: 12px;
  padding: 8px;
  min-width: 260px;
}
```

**Mobile nav (< 768px):**
- Hamburger icon (3 lines → X transition)
- Full-screen overlay: `background: #0D0D0D`, `z-index: 200`
- Links staggered in with `translateX` + `opacity` animation (50ms delay each)

### §5.6 — Stat Card
```css
.stat-card {
  text-align: center;
  padding: 40px;
  border-right: 1px solid #2A2A2A;
}
.stat-card:last-child { border-right: none; }

.stat-value {
  font-size: clamp(40px, 5vw, 56px);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.0;
}
.stat-label {
  font-size: 14px;
  color: #6B6B6B;
  margin-top: 8px;
  font-weight: 400;
}
```

### §5.7 — Trainer Card
```css
.trainer-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 3/4;
  cursor: pointer;
}
.trainer-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;
}
.trainer-card:hover img { transform: scale(1.04); }

.trainer-card-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.90) 0%, transparent 100%);
  padding: 32px 20px 20px;
}
.trainer-name {
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
}
.trainer-spec {
  font-size: 13px;
  color: #FF1A1A;
  font-weight: 500;
  margin-top: 2px;
}
.trainer-years {
  font-size: 12px;
  color: #B0B0B0;
  margin-top: 4px;
}
```

### §5.8 — Blog Card
```css
.blog-card {
  background: #1A1A1A;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #2A2A2A;
  transition: border-color 300ms ease, transform 300ms ease;
}
.blog-card:hover {
  border-color: #FF1A1A;
  transform: translateY(-4px);
}
.blog-card-image {
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
}
.blog-card-body { padding: 20px; }
.blog-category {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  color: #FF1A1A;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
}
.blog-title {
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.4;
}
.blog-read-time {
  font-size: 12px;
  color: #6B6B6B;
  margin-top: 10px;
}
```

### §5.9 — Pricing Card
```css
.pricing-card {
  background: #1A1A1A;
  border: 1px solid #2A2A2A;
  border-radius: 20px;
  padding: 40px 32px;
  transition: border-color 300ms ease;
}
.pricing-card.recommended {
  border-color: #FF1A1A;
  position: relative;
}
.recommended-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #FF1A1A;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 16px;
  border-radius: 999px;
}
.pricing-amount {
  font-size: 48px;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1;
}
.pricing-period {
  font-size: 14px;
  color: #6B6B6B;
}
.pricing-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #B0B0B0;
  padding: 8px 0;
  border-bottom: 1px solid #2A2A2A;
}
.pricing-feature-icon { color: #FF1A1A; width: 16px; }
```

### §5.10 — WhatsApp Floating Button
```css
.whatsapp-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 99;
  width: 56px;
  height: 56px;
  background: #1A1A1A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  cursor: pointer;
  animation: pulse 2.5s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
  50% { box-shadow: 0 4px 32px rgba(37,211,102,0.3); }
}
```

### §5.11 — Eyebrow Label
Used above every major section heading:
```css
.eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #FF1A1A;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
}
```

### §5.12 — Section Divider
```css
/* Red 2px line above footer */
.divider-red {
  width: 100%;
  height: 2px;
  background: #FF1A1A;
}

/* Subtle dot separator between inline items */
.separator {
  width: 1px;
  height: 40px;
  background: #2A2A2A;
}
```

### §5.13 — Feature Point (bullet with red dot)
```css
.feature-point {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}
.feature-dot {
  width: 8px;
  height: 8px;
  background: #FF1A1A;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 8px;
}
.feature-text {
  font-size: 16px;
  color: #B0B0B0;
  line-height: 1.6;
}
```

---

## §6 — Hero Specifications

### Global Hero Pattern
```css
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}
.hero-image {
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}
.hero-content {
  position: absolute;
  bottom: 80px;
  left: 80px;
  z-index: 2;
  max-width: 620px;
}
```

**Content stack (bottom to top — markup order: top to bottom):**
1. Eyebrow label (`SLAM FITNESS STUDIO`)
2. H1 headline
3. Body copy (`18px`, `#C8C8C8`, `max-width: 420px`)
4. Primary CTA button
5. Social proof cluster (avatars + stars + review count)

### Social Proof Cluster
```css
.social-proof {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}
.avatars {
  display: flex;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #0D0D0D;
  margin-left: -10px;
  object-fit: cover;
}
.avatar:first-child { margin-left: 0; }
.stars {
  color: #FFD700;
  font-size: 16px;
  letter-spacing: 2px;
}
.review-count {
  font-size: 13px;
  color: #6B6B6B;
}
```

---

## §7 — Motion & Animation

### §7.1 — Page Load (Hero)
Staggered fade-up sequence on mount:
```javascript
// Framer Motion variants
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};
// Apply custom={0}, custom={1}, custom={2} etc. to each child
```

### §7.2 — Scroll-Triggered Reveals
Use `IntersectionObserver` (or Framer Motion `whileInView`):
```javascript
const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};
// Trigger when 20% of element is visible:
// viewport={{ once: true, amount: 0.2 }}
```

For staggered children (e.g. service cards, stat items):
```javascript
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};
```

### §7.3 — Animated Stat Counter
```javascript
// On IntersectionObserver entry:
function animateCounter(element, target, duration = 1800) {
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    element.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else element.textContent = target; // snap to final
  };
  requestAnimationFrame(update);
}
```

### §7.4 — Nav Scroll Transition
```javascript
useEffect(() => {
  const handler = () => {
    setScrolled(window.scrollY > 20);
  };
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}, []);
```

### §7.5 — Image Hover (trainer / blog cards)
```css
/* CSS only — no JS needed */
.card img {
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}
.card:hover img { transform: scale(1.04); }
```

### §7.6 — Accordion Transition
```css
transition: max-height 300ms ease, background 300ms ease, border-color 300ms ease;
```

### §7.7 — Button Micro-interaction
```css
.btn-primary {
  transition: background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
}
.btn-primary:hover {
  background: #CC0000;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(255, 26, 26, 0.25);
}
.btn-primary:active {
  transform: translateY(0);
}
```

---

## §8 — Responsive Breakpoints

```css
/* Breakpoints */
--bp-xs:  480px;
--bp-sm:  640px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
```

| Viewport | Layout | Columns |
|---|---|---|
| > 1024px | Full desktop | 2-col splits, 3-col grids |
| 768–1024px | Tablet | Stack 2-col → single col, 2 cards/row |
| < 768px | Mobile | Full single column, 1 card/row |
| < 480px | Small mobile | Reduce padding, smaller type scale |

### Two-Column Responsive Collapse
```css
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 768px) {
  .two-col {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  /* On mobile, image always goes above text regardless of desktop order */
  .two-col .image-col { order: -1; }
}
```

### Nav → Mobile
- `< 768px`: hide desktop nav, show hamburger
- Hamburger becomes X on open; overlay takes full screen

---

## §9 — Tailwind Config (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slam-bg':       '#0D0D0D',
        'slam-section':  '#141414',
        'slam-card':     '#1A1A1A',
        'slam-accent':   '#FF1A1A',
        'slam-accent-hover': '#CC0000',
        'slam-border':   '#2A2A2A',
        'slam-text':     '#FFFFFF',
        'slam-body':     '#B0B0B0',
        'slam-muted':    '#6B6B6B',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        'slam-sm':  '8px',
        'slam-md':  '12px',
        'slam-lg':  '16px',
        'slam-xl':  '24px',
      },
      maxWidth: {
        'container': '1200px',
      },
      animation: {
        'pulse-whatsapp': 'pulse-whatsapp 2.5s ease-in-out infinite',
        'fade-up':        'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'pulse-whatsapp': {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(0,0,0,0.4)' },
          '50%':       { boxShadow: '0 4px 32px rgba(37,211,102,0.3)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

## §10 — Global CSS (`globals.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
/* Note: use next/font/google in layout.tsx instead of @import in production */

:root {
  /* Colors */
  --color-bg-primary:    #0D0D0D;
  --color-bg-section:    #141414;
  --color-bg-card:       #1A1A1A;
  --color-accent:        #FF1A1A;
  --color-accent-hover:  #CC0000;
  --color-border:        #2A2A2A;
  --color-text:          #FFFFFF;
  --color-body:          #B0B0B0;
  --color-muted:         #6B6B6B;

  /* Layout */
  --container-max:    1200px;
  --container-pad-x:  80px;
  --container-pad-y:  96px;

  /* Type */
  --font-primary: 'Poppins', sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text);
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

/* Focus visible ring for accessibility */
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Scrollbar (optional dark styling) */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg-primary); }
::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-accent); }

/* Container utility */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad-x);
}

/* Section padding utility */
.section {
  padding: var(--container-pad-y) 0;
}

/* Alternating section backgrounds */
.section-dark    { background: var(--color-bg-primary); }
.section-darker  { background: var(--color-bg-section); }

@media (max-width: 1024px) {
  :root {
    --container-pad-x: 48px;
    --container-pad-y: 72px;
  }
}
@media (max-width: 768px) {
  :root {
    --container-pad-x: 24px;
    --container-pad-y: 56px;
  }
}
@media (max-width: 480px) {
  :root {
    --container-pad-x: 16px;
    --container-pad-y: 48px;
  }
}
```

---

## §11 — Accessibility Requirements

- Minimum contrast ratio: **4.5:1** for all body text on dark backgrounds
  - `#B0B0B0` on `#0D0D0D` = 6.2:1 ✓
  - `#FFFFFF` on `#0D0D0D` = 19.1:1 ✓
  - `#6B6B6B` on `#0D0D0D` = 3.3:1 — use only for captions/muted, never for readable body copy
- All icon-only buttons: `aria-label` required
- All images: descriptive `alt` text including relevant SEO keywords
- Interactive elements: `:focus-visible` ring in `#FF1A1A`
- Semantic HTML: `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`
- Form inputs: `<label>` elements properly associated via `htmlFor`

---

## §12 — SEO / Schema Markup

Add on homepage and `/contact`:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SLAM Fitness Studio",
  "url": "https://slamfitnessstudio.in",
  "telephone": "+917094405880",
  "email": "customercare.slam@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#18/70, Halls Road, Kilpauk",
    "addressLocality": "Chennai",
    "postalCode": "600010",
    "addressCountry": "IN"
  },
  "image": "https://slamfitnessstudio.in/og-image.jpg",
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 05:00-22:00"
}
```

---

*End of design.md — always read this file before writing any CSS, component, or layout code.*
