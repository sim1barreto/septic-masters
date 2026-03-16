# Septic Masters — Headless WordPress + Next.js

A production-ready headless CMS architecture built from the Figma Make TypeScript export.

**Stack:** WordPress (Gutenberg content editing) → REST API → Next.js 15 (frontend rendering)

---

## Architecture overview

```
Client browser
      ↑
Next.js 15 (App Router, SSR)
  └─ app/page.tsx  ──fetch──▶  /wp-json/site/v1/blocks/{slug}
  └─ BlockRenderer.tsx           │
  └─ components/blocks/*.tsx     ▼
                          WordPress (XAMPP)
                            parse_blocks()
                            Gutenberg block attrs
```

The WordPress plugin stores **content** (text, images, data arrays) inside Gutenberg block attributes. The Next.js frontend fetches those attributes via REST and renders the actual UI. No PHP templates are involved — `save()` always returns `null`.

---

## Project structure

```
septic masters - final/
│
├── src/                          ← Original Figma Make export (reference only)
│   └── app/
│       ├── components/           ← Source React components
│       └── pages/                ← Source page compositions
│
├── frontend/                     ← Next.js 15 production app
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx            ← Root layout — mounts Navbar + Footer on every page
│   │   ├── page.tsx              ← Home page (fetches slug 'home')
│   │   ├── about/page.tsx        ← About page (fetches slug 'about')
│   │   ├── services/page.tsx     ← Services page (fetches slug 'services')
│   │   ├── service-areas/page.tsx← Service Areas page
│   │   ├── contact/page.tsx      ← Contact page
│   │   └── BlockRenderer.tsx     ← Maps blockName → React component
│   ├── components/
│   │   ├── layout/               ← Sitewide layout — NOT Gutenberg blocks
│   │   │   ├── Navbar.tsx        ← Fixed top nav, scroll-aware, mobile menu
│   │   │   └── Footer.tsx        ← 4-col footer with emergency CTA banner
│   │   └── blocks/               ← One file per Gutenberg block (22 total)
│   ├── lib/
│   │   └── blocks.ts             ← fetchBlocks() + Block type
│   ├── .env.local                ← NEXT_PUBLIC_WP_API_URL
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── package.json
│
└── wp-plugin/                    ← WordPress Gutenberg plugin
    ├── plugin.php                ← Block registration + REST endpoint
    ├── package.json
    ├── webpack.config.js
    └── src/blocks/               ← One folder per block
        ├── {block}/
        │   ├── block.json        ← Schema, attributes, defaults
        │   ├── index.js          ← registerBlockType()
        │   └── edit.js           ← Gutenberg editor UI
        └── ...
```

---

## Setup instructions

### Step 1 — WordPress plugin

1. Copy `wp-plugin/` to your WordPress plugins directory:
   ```
   C:\xampp\htdocs\wordpress\wp-content\plugins\septic-masters-blocks\
   ```

2. Activate in **WP Admin → Plugins → Septic Masters Blocks**

### Step 2 — Build the blocks

```bash
cd wp-plugin
npm install
npm run build
```

After build, verify these directories exist:
```
wp-plugin/build/
  hero/               faq/
  services/           emergency-banner/
  testimonials/       service-area-map/
  why-us/             page-hero/
  how-it-works/       about-story/
  trust-bar/          values-grid/
  lead-capture/       timeline/
                      team-grid/
                      promise-cta/
                      services-detail/
                      cta-banner/
                      service-areas-grid/
                      coverage-map/
                      contact-info-bar/
                      contact-form/
```
Each folder contains `block.json` + `index.js`.

### Step 3 — Build page templates in WordPress

Create one WordPress **Page** per route, then add the corresponding blocks:

| WordPress page slug | Route | Blocks to add (in order) |
|---|---|---|
| `home` | `/` | See [Home page blocks](#home) |
| `about` | `/about` | See [About page blocks](#about) |
| `services` | `/services` | See [Services page blocks](#services) |
| `service-areas` | `/service-areas` | See [Service Areas blocks](#service-areas) |
| `contact` | `/contact` | See [Contact page blocks](#contact) |

Each block will appear under the **Septic Masters** category in the block inserter. Edit all content via the right-side Inspector Controls panel. Publish the page.

### Step 4 — Run the Next.js frontend

```bash
cd frontend
npm install
```

Edit `.env.local` and set the URL to your local WordPress install:
```
NEXT_PUBLIC_WP_API_URL=http://localhost/wordpress
```

Then start the dev server:
```bash
npm run dev
```

Open `http://localhost:3000` — the page fetches block data from WordPress and renders it.

---

## REST API

### Endpoint

```
GET /wp-json/site/v1/blocks/{slug}
```

**Parameters:** `slug` — the WordPress page slug (e.g. `home`, `about`)

**Response format:**
```json
[
  {
    "blockName": "septic-masters/hero",
    "attrs": {
      "headline": "Central Texas' #1 Septic Service Experts",
      "phone": "(555) 123-4567",
      "trustPoints": ["Licensed & Insured", "Same-Day Service", "Free Estimates"],
      "stats": [
        { "label": "Response Time", "value": "< 2 Hours" }
      ]
    },
    "innerBlocks": []
  },
  {
    "blockName": "septic-masters/trust-bar",
    "attrs": { "stats": [...] },
    "innerBlocks": []
  }
]
```

**Example fetch in Next.js:**
```ts
const blocks = await fetch('http://localhost/wordpress/wp-json/site/v1/blocks/home')
  .then(r => r.json());
```

---

## Layout components

Navbar and Footer are **not Gutenberg blocks**. They are hardcoded Next.js components that wrap every page via `frontend/app/layout.tsx`. They are not content-managed through WordPress — edit them directly in code.

| File | Description |
|---|---|
| `frontend/components/layout/Navbar.tsx` | Fixed top nav, scroll-aware background, active link underline, mobile slide-down menu, sticky bottom call-to-action bar on mobile |
| `frontend/components/layout/Footer.tsx` | Dark footer with emergency CTA banner, 4-column grid (brand, quick links, services, contact info), certification badges, copyright |

### Customising layout content

To update phone numbers, nav links, social URLs, or service list in the footer, edit the constants at the top of each file:

- **Navbar** — `navLinks` array, phone number in the two `href="tel:"` anchors
- **Footer** — `services` array, `quickLinks` array, `serviceAreas` array, phone/email in the contact column

---

## Complete block registry

### Status key
- ✅ Built and ready
- ✅ Not yet built — required for complete site

---

### Shared / reusable blocks

| Block name | Title | Status | Used on pages |
|---|---|---|---|
| `septic-masters/page-hero` | Inner Page Hero | ✅ | About, Services, Service Areas, Contact |
| `septic-masters/cta-banner` | Dark CTA Banner | ✅ | Services, Service Areas |
| `septic-masters/faq` | FAQ Accordion | ✅ | Home, Services |

---

### Home page blocks {#home}

Add these blocks to the WordPress page with slug `home`, in this order:

| # | Block name | Title | Status |
|---|---|---|---|
| 1 | `septic-masters/hero` | Hero Section | ✅ |
| 2 | `septic-masters/trust-bar` | Trust Bar | ✅ |
| 3 | `septic-masters/services` | Services Grid | ✅ |
| 4 | `septic-masters/how-it-works` | How It Works | ✅ |
| 5 | `septic-masters/why-us` | Why Choose Us | ✅ |
| 6 | `septic-masters/testimonials` | Testimonials Carousel | ✅ |
| 7 | `septic-masters/service-area-map` | Service Area Map | ✅ |
| 8 | `septic-masters/emergency-banner` | Emergency Banner | ✅ |
| 9 | `septic-masters/faq` | FAQ Accordion | ✅ |
| 10 | `septic-masters/lead-capture` | Lead Capture Form | ✅ |

---

### About page blocks {#about}

Add these blocks to the WordPress page with slug `about`, in this order:

| # | Block name | Title | Status | Source component |
|---|---|---|---|---|
| 1 | `septic-masters/page-hero` | Inner Page Hero | ✅ | `About.tsx` hero section |
| 2 | `septic-masters/about-story` | Our Story | ✅ | `About.tsx` story section |
| 3 | `septic-masters/values-grid` | Our Values | ✅ | `About.tsx` values section |
| 4 | `septic-masters/timeline` | Company Timeline | ✅ | `About.tsx` milestone timeline |
| 5 | `septic-masters/team-grid` | Meet the Team | ✅ | `About.tsx` team section |
| 6 | `septic-masters/promise-cta` | Our Promise | ✅ | `About.tsx` guarantee section |
| 7 | `septic-masters/lead-capture` | Lead Capture Form | ✅ | — |

---

### Services page blocks {#services}

Add these blocks to the WordPress page with slug `services`, in this order:

| # | Block name | Title | Status | Source component |
|---|---|---|---|---|
| 1 | `septic-masters/page-hero` | Inner Page Hero | ✅ | `Services.tsx` hero |
| 2 | `septic-masters/services-detail` | Services Detail List | ✅ | `Services.tsx` accordion cards |
| 3 | `septic-masters/faq` | FAQ Accordion | ✅ | `Services.tsx` FAQ section |
| 4 | `septic-masters/cta-banner` | Dark CTA Banner | ✅ | `Services.tsx` bottom CTA |

---

### Service Areas page blocks {#service-areas}

Add these blocks to the WordPress page with slug `service-areas`, in this order:

| # | Block name | Title | Status | Source component |
|---|---|---|---|---|
| 1 | `septic-masters/page-hero` | Inner Page Hero | ✅ | `ServiceAreas.tsx` hero |
| 2 | `septic-masters/service-areas-grid` | Primary Service Areas | ✅ | `ServiceAreas.tsx` primary cities grid |
| 3 | `septic-masters/coverage-map` | Coverage Map | ✅ | `ServiceAreas.tsx` extended coverage |
| 4 | `septic-masters/cta-banner` | Dark CTA Banner | ✅ | `ServiceAreas.tsx` bottom CTA |

---

### Contact page blocks {#contact}

Add these blocks to the WordPress page with slug `contact`, in this order:

| # | Block name | Title | Status | Source component |
|---|---|---|---|---|
| 1 | `septic-masters/page-hero` | Inner Page Hero | ✅ | `Contact.tsx` hero |
| 2 | `septic-masters/contact-info-bar` | Contact Info Bar | ✅ | `Contact.tsx` info row |
| 3 | `septic-masters/contact-form` | Contact Form | ✅ | `Contact.tsx` form + sidebar |

---

## Block map — all 22 blocks

| Block slug | Next.js component | Pages |
|---|---|---|
| `hero` | `HeroBlock.tsx` | Home |
| `trust-bar` | `TrustBarBlock.tsx` | Home |
| `services` | `ServicesBlock.tsx` | Home |
| `how-it-works` | `HowItWorksBlock.tsx` | Home |
| `why-us` | `WhyUsBlock.tsx` | Home |
| `testimonials` | `TestimonialsBlock.tsx` | Home |
| `service-area-map` | `ServiceAreaMapBlock.tsx` | Home |
| `emergency-banner` | `EmergencyBannerBlock.tsx` | Home |
| `faq` | `FAQBlock.tsx` | Home, Services |
| `lead-capture` | `LeadCaptureBlock.tsx` | Home, About |
| `page-hero` | `PageHeroBlock.tsx` | About, Services, Service Areas, Contact |
| `about-story` | `AboutStoryBlock.tsx` | About |
| `values-grid` | `ValuesGridBlock.tsx` | About |
| `timeline` | `TimelineBlock.tsx` | About |
| `team-grid` | `TeamGridBlock.tsx` | About |
| `promise-cta` | `PromiseCTABlock.tsx` | About |
| `services-detail` | `ServicesDetailBlock.tsx` | Services |
| `cta-banner` | `CTABannerBlock.tsx` | Services, Service Areas |
| `service-areas-grid` | `ServiceAreasGridBlock.tsx` | Service Areas |
| `coverage-map` | `CoverageMapBlock.tsx` | Service Areas |
| `contact-info-bar` | `ContactInfoBarBlock.tsx` | Contact |
| `contact-form` | `ContactFormBlock.tsx` | Contact |

**22 blocks built · 0 pending**

---

## Layout components

| Component | File | Notes |
|---|---|---|
| `Navbar` | `components/layout/Navbar.tsx` | Fixed top, scroll-aware, mobile menu + bottom bar |
| `Footer` | `components/layout/Footer.tsx` | 4-col, emergency CTA strip, certifications |

Both are mounted in `app/layout.tsx` and appear on every page.

---

## Adding a new block — checklist

To add a block in the future, create these files:

```
wp-plugin/src/blocks/{name}/
  block.json    ← apiVersion, name, title, category, editorScript, attributes
  index.js      ← registerBlockType(metadata, { edit: Edit, save: () => null })
  edit.js       ← editor UI with useBlockProps + InspectorControls

frontend/components/blocks/{Name}Block.tsx
  ← "use client"
  ← type BlockProps = { attrs: Record<string, unknown>; innerBlocks: unknown[] }
  ← default values for all attrs
  ← framer-motion animations (useInView for scroll-triggered)
```

Then register in `frontend/app/BlockRenderer.tsx`:
```ts
const BLOCK_MAP = {
  ...existing,
  'septic-masters/page-hero': PageHeroBlock,
  // etc.
};
```

And add to `wp-plugin/webpack.config.js` entry map:
```js
'page-hero/index': './src/blocks/page-hero/index.js',
```

Rebuild the plugin: `npm run build`

---

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_WP_API_URL` | `http://localhost` | Base URL of your WordPress install |

---

## Development workflow

```bash
# Terminal 1 — watch-compile Gutenberg blocks
cd wp-plugin
npm run start

# Terminal 2 — Next.js dev server
cd frontend
npm run dev
```

Changes to block `edit.js` take effect on browser refresh (Gutenberg editor).
Changes to Next.js `Block.tsx` components hot-reload instantly.

---

## Original Figma Make export

The `src/` directory contains the original Vite + React export from Figma Make. It is **not deployed** — it serves as the source of truth for component logic and design tokens.

To preview it:
```bash
npm install   # from project root
npm run dev
```

Key design tokens used throughout all blocks:

| Token | Value | Usage |
|---|---|---|
| Navy | `#0B2545` | Primary background, headings |
| Dark Green | `#1E7A45` | Section accents, badges |
| Medium Green | `#25A55F` | CTAs, icons, trust marks |
| Teal | `#4FD4A4` | Secondary accents |
| Red | `#BE2026` | Emergency, urgent, primary CTA buttons |
| Yellow | `#F4C542` | Star ratings, highlights |
| Light BG | `#F7F9F8` | Alternate section backgrounds |
| Border | `#E2E8F0` | Card borders |
| Body text | `#4A5568` | Paragraph text |
| Muted text | `#718096` | Secondary text |
