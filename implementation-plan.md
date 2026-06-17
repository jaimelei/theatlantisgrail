# The Atlantis Grail — Modern Portfolio Reinterpretation

## Goal

Build a visually stunning, modern portfolio-scale website inspired by [theatlantisgrail.com](https://theatlantisgrail.com). This is not a 1:1 recreation — it is a **cinematic reimagining** that preserves the site's identity (cosmic aesthetic, author voice, series universe) while shedding 11 years of accumulated cruft.

The design philosophy is **editorial, not SaaS**. Think film franchise website meets literary journal — not a generic landing page template.

---

## Confirmed Decisions

| Decision | Choice |
|---|---|
| **Parallax** | ❌ None — no parallax effects anywhere |
| **Animations** | CSS-only + `IntersectionObserver` hook — zero new dependencies |
| **Images** | Self-hosted in `/public/images/` — exact filenames defined below |
| **Newsletter** | Non-functional demo — styled correctly, no submission handler |

---

## 1. Brand Design System

### 1a. Color Palette

Derived from the original site's visual identity: dark cosmic space + warm parchment + burgundy accents.

| Token | Hex | Usage |
|---|---|---|
| `cosmos-950` | `#030712` | Deepest background (hero, footer) |
| `cosmos-900` | `#0a0f1e` | Dark section backgrounds |
| `cosmos-800` | `#111936` | Card backgrounds on dark |
| `cosmos-700` | `#1a2550` | Elevated surfaces on dark |
| `cosmos-400` | `#6b7cb5` | Muted text on dark backgrounds |
| `parchment-50` | `#fdfaf3` | Lightest content background |
| `parchment-100` | `#f8f1e2` | Primary light background (matches original `#F8F1E2`) |
| `parchment-200` | `#f0e4cc` | Slightly darker parchment |
| `parchment-300` | `#e0cfa8` | Borders, dividers on light |
| `parchment-600` | `#8a7350` | Muted text on light |
| `wine-700` | `#6b001e` | Primary accent (matches original `#6B001E`) |
| `wine-600` | `#8b0a2d` | Hover state for accent |
| `wine-500` | `#a81237` | Lighter accent variant |
| `wine-400` | `#c93a5e` | Lighter still, for badges |
| `royal-700` | `#09449e` | Secondary accent (matches original nav `#09449E`) |
| `royal-600` | `#1a5bc4` | Hover for secondary |
| `royal-500` | `#3b76de` | Links on dark backgrounds |
| `gold-400` | `#e8b84a` | The grail gold — highlights, stars, shimmer |
| `gold-300` | `#f0cf72` | Lighter gold for glows |
| `gold-500` | `#c89a30` | Deeper gold for text |
| `ember-500` | `#ef4444` | Status: "Available Now!" badges |
| `green-500` | `#22c55e` | Progress bars (writing progress) |

### 1b. Typography

```
Primary heading: "Cinzel" (serif, uppercase, regal — evokes Atlantean/classical feel)
Secondary heading: "Cormorant Garamond" (serif, italic — editorial dramatic callouts)
Body: "Inter" (sans-serif, clean — readable body copy)
Mono: "JetBrains Mono" (for ISBNs, word counts, progress stats)
```

| Level | Font | Size (desktop) | Weight | Tracking | Usage |
|---|---|---|---|---|---|
| Display | Cinzel | 4rem–5rem | 700 | 0.08em | Hero title, page titles |
| H1 | Cinzel | 2.5rem | 600 | 0.05em | Section titles |
| H2 | Cormorant Garamond | 2rem | 600 italic | normal | Dramatic callouts ("You die or you Qualify") |
| H3 | Cinzel | 1.25rem | 600 | 0.04em | Subsection titles |
| Body lg | Inter | 1.125rem | 400 | normal | Blurb text, featured paragraphs |
| Body | Inter | 1rem | 400 | normal | Standard body |
| Body sm | Inter | 0.875rem | 400 | normal | Captions, metadata |
| Stat | JetBrains Mono | 0.875rem | 500 | 0.02em | ISBN, word counts, progress numbers |

### 1c. Spacing Scale

Tailwind default scale, extended with section-level tokens:

| Token | Value | Usage |
|---|---|---|
| `section-y` | `6rem` (96px) desktop / `4rem` mobile | Vertical padding between major sections |
| `section-x` | `max-w-7xl mx-auto px-6` | Horizontal content constraint |
| `gap-cards` | `2rem` | Gap between book elements |
| `gap-tight` | `1rem` | Tight internal spacing |

### 1d. Border Radii & Shadows

| Token | Value | Usage |
|---|---|---|
| `radius-card` | `0.75rem` (12px) | Book cards, content cards |
| `radius-pill` | `9999px` | Buttons, badges |
| `radius-subtle` | `0.375rem` (6px) | Input fields, small elements |
| `shadow-glow` | `0 0 40px rgba(232, 184, 74, 0.15)` | Gold glow on hover (the grail glow) |
| `shadow-lift` | `0 8px 30px rgba(0, 0, 0, 0.3)` | Elevated dark cards |
| `shadow-soft` | `0 4px 20px rgba(0, 0, 0, 0.08)` | Light-background cards |

---

## 2. Animation Strategy

All animations serve the **cinematic, editorial** feel. No gratuitous bouncing or spinning.

### Scroll-Triggered Reveals
- **Fade-up**: Elements rise 30px and fade in as they enter viewport. Staggered by `100ms` per sibling.
- **Parallax drift**: Background decorative elements (star particles, gradient orbs) move at 0.3–0.5× scroll speed.
- **Scale reveal**: Book covers start at `scale(0.95) opacity(0)` and settle to `scale(1) opacity(1)`.

### Micro-Interactions
- **Book cover hover**: Subtle `scale(1.03)` + `shadow-glow` gold shimmer + cover image slight brightness increase.
- **Nav link hover**: Underline slides in from left using `::after` pseudo-element width transition.
- **Button hover**: Background gradient shift + subtle `translateY(-1px)`.
- **Progress bar**: Animated width on scroll-into-view, `transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Page transitions**: Fade between routes, `200ms ease`.

### Ambient Effects
- **Hero**: Extremely subtle radial gradient pulse on the golden grail area (CSS `@keyframes` on `opacity` between 0.8–1.0, 4s cycle). Barely noticeable — gives the gold a living shimmer.
- **Stars**: CSS-only scattered micro-dots on dark backgrounds using `radial-gradient` on a pseudo-element. No canvas, no JS.

### Implementation
A custom `useScrollReveal` hook with `IntersectionObserver`. CSS transitions and `@keyframes` for everything. **No parallax anywhere — not on backgrounds, not on images, not on text layers.**

---

## 3. Responsive Strategy

Three breakpoint tiers:

| Breakpoint | Tailwind | Width | Behavior |
|---|---|---|---|
| Mobile | default | < 768px | Single column, stacked layout, hamburger nav |
| Tablet | `md:` | 768–1279px | 2-column book grids, side-by-side content |
| Desktop | `lg:` / `xl:` | 1280px+ | Full cinematic layout, parallax active |

Key responsive patterns:
- Hero text scales down via `clamp()` — never hardcoded font sizes.
- Book cover showcase transitions from a horizontal spread (desktop) to a vertical carousel feel (mobile).
- Nav collapses to a fullscreen slide-over on mobile with a frosted glass backdrop.
- Dark/light section alternation is preserved at all breakpoints.

---

## 4. Page-by-Page Layout Specifications

### 4a. Shared Layout Components

---

#### Navbar

**Not a generic top bar.** A layered, atmospheric header:

- **Desktop**: Fixed, transparent on dark hero sections. Background fades to `cosmos-900/90 backdrop-blur-md` on scroll (after hero).  
  - Left: Series wordmark/logo ("THE ATLANTIS GRAIL" in Cinzel, small, gold)
  - Center: 5 nav links (Home, Books, News, Community, About) — Cinzel uppercase, letter-spaced, `text-sm`.
  - Right: "Start Reading" CTA button (pill-shaped, wine-700 background, gold text).
  - A thin gold line (`1px, gold-400/30`) runs along the bottom edge — subtle, regal.

- **Mobile**: Hamburger icon (right). Tap opens a fullscreen overlay with `cosmos-950` background and centered, large nav links with stagger-in animation.

---

#### Footer

Full-width `cosmos-950` background. Three-column layout (collapses to stacked on mobile):

- **Column 1**: Series wordmark + one-line tagline + copyright
- **Column 2**: Quick links (Books, News, About, FAQ)
- **Column 3**: Social icons (a curated row: Goodreads, Instagram, YouTube, Discord, Facebook, Patreon) + email signup mini-form (email input + submit button, single row)

A thin decorative gold gradient line above the footer. Very restrained — no clutter.

---

### 4b. Home Page (`/`)

The homepage is a **cinematic vertical scroll experience** with alternating dark and light full-bleed sections. Each section fills most or all of the viewport. The user scrolls through a narrative.

---

#### Section 1: Hero (Full viewport, dark)

**Layout**: Full viewport height. Centered content over a dark atmospheric background.

**Background**: A layered composition:
- Base: `cosmos-950` solid
- Middle: Large radial gradient (very subtle warm gold → transparent) positioned center-right, simulating light from the grail
- Top: Faint star scatter texture via CSS (tiny dots)
- The series header image (the golden grail chalice) is placed as a centered hero image, about 280–340px wide, with the subtle gold pulse animation

**Content** (vertically centered, text-centered):
1. The grail logo image (the actual chalice artwork from the original site)
2. Series title: "THE ATLANTIS GRAIL" — Cinzel Display, gold-400, letter-spaced `0.12em`
3. Author: "by Vera Nazarian" — Cormorant Garamond italic, parchment-200, smaller
4. Tagline: *"You have two options. You die, or you Qualify."* — Cormorant Garamond, `text-2xl`, italic, parchment-100
5. Two CTAs side by side:
   - "Start Reading — Free" → pill button, wine-700 bg, gold text
   - "Explore the Series" → pill button, transparent with gold border

**Scroll indicator**: A small down-chevron with a gentle bounce animation at the bottom of the viewport.

---

#### Section 2: Series Pitch (Light parchment background)

**Layout**: Asymmetric — not centered text. A two-column composition on desktop.

- **Left (~55%)**: The pitch text, styled as editorial prose. Each dramatic beat gets its own block:
  - *"You have two options. You die, or you Qualify."* — Cormorant Garamond H2, wine-700, italic
  - Body paragraph (Inter, parchment-600 text) describing the premise
  - *"But there's a catch."* — Cormorant Garamond H2, wine-700, italic
  - More body text
  - *"There is only one problem."*
  - Final body paragraph
  - *"You Qualify or you die."* — final beat, slightly larger

  The dramatic callouts and body prose alternate, creating a rhythm. Each callout fades in on scroll.

- **Right (~45%)**: The Qualify book cover, slightly oversized (stretching outside its containing box by `20px` on the right and `40px` on the bottom via negative margins), angled with a very subtle `rotate-1` tilt, casting a `shadow-lift`. Below it, a small "Get Book 1 Free" CTA link.

- **Mobile**: Stacks to single column — cover on top, pitch text below.

---

#### Section 3: Book Showcase (Dark cosmos background)

**This is the signature section. NOT a simple card grid.**

**Layout concept**: A **cinematic book spread** — books are displayed as stacked layers with depth, not flat tiles in a row.

**Structure for each series**:

**Series title** (e.g., "The Atlantis Grail — Original Series") appears in Cinzel, gold-400, centered, with thin gold rules extending left and right (like `——— Title ———`).

**Book display — "Fanned Shelf"**:
- On desktop, books are arranged in a **fanned horizontal spread** — each cover slightly overlaps the next, with the foreground cover being largest and most prominent. Covers are `200×320px` for the main, `170×272px` for the others. Each has a subtle `shadow-lift`.
- **Hover/click** on a cover: it lifts forward (`scale(1.08), translateY(-12px)`) and a panel slides in below or beside it showing: title, subtitle, tagline, status badge, and 5 simplified buy links (Amazon, B&N, Kobo, Apple, Google Play).
- The cover being hovered pushes its neighbors slightly apart.

**Mobile adaptation**: A horizontal scrollable strip — each cover is full-width within a scroll-snap container. Swipe to browse. Below each cover, the detail info is always visible.

**Series groups** (4 total):
1. Original Series (5 books)
2. Dawn of the Atlantis Grail (5 books, most showing "Forthcoming")
3. Novella Series (3 books)
4. Superfan Extras (2 books)

Each group separated by generous spacing and its own title treatment.

---

#### Section 4: Writing Progress (Parchment background, narrow section)

**Layout**: A compact, centered section — not tall. Two progress bars stacked.

Each bar has:
- Title: "DEA — Writing Progress" in Cinzel H3
- A custom-styled progress bar: rounded-full, `cosmos-800` track, `green-500` fill for the first bar and `ember-500` for the second
- Stats in JetBrains Mono: "11,057 / 200,000 (5.53%)"
- "Current Chapter: Chapter 4" — centered, Inter body text

The bars animate their width on scroll-into-view.

A small label above: "What the author is working on right now" — Inter, italic, parchment-600.

This section is intentionally **warm and personal** — it's the site's most community-facing element.

---

#### Section 5: Latest News (Dark cosmos background)

**Layout**: NOT a card grid. An **editorial news feed** with varied entry sizes.

- The **first/most recent entry** is a large feature: full-width, with a hero image (the EOS cover), big title in Cinzel, date in mono, and the first paragraph of the announcement. This takes up ~60% of the section width on desktop, with a large cover image on the right.

- The **remaining 2–3 entries** are displayed as smaller, stacked items below — each is a horizontal row with a left date column (mono, gold-400) and the text on the right. Minimal, editorial.

- A "View All News →" link at the bottom leads to `/news`.

---

#### Section 6: Community Constellation (Dark cosmos — special)

**NOT a grid of cards.**

**Concept**: Community links displayed as a **constellation map** — on dark background, each community node (Discord, Forum, Patreon, Wiki, etc.) is a small glowing dot positioned organically (not in a grid), with thin connecting lines between related ones. Each dot has a label and icon. On hover, the dot pulses and a tooltip-style card appears with a description and external link.

**Mobile fallback**: A clean vertical list with icons, names, and short descriptions. The constellation is desktop-only (it relies on spatial positioning).

This section should feel like looking at a star chart — fitting the cosmic theme.

---

#### Section 7: Film Project Callout (Full-bleed, cinematic)

**Layout**: A wide horizontal band with `cosmos-900` background and a subtle film-grain texture (CSS noise).

- Left: IMDB-style card with "OPTIONED FOR FILM/TV" in gold-400 Cinzel, small caps. Below: "Feature film and TV series development" in Inter.
- Right: A YouTube embed (the TAG Con "Hollywood Connection" panel) or a thumbnail linking to it.
- Very cinematic — horizontal rules, gold accent line.

---

#### Section 8: Email CTA + Color Quadrant Teaser (Parchment)

**Layout**: Split section.

- **Left**: Email signup — "Never miss a release" heading, email input + subscribe button. Warm, inviting.
- **Right**: "Discover Your Quadrant" teaser — a 2×2 grid of four colored circles (Red, Blue, Green, Yellow) with a CTA: "Take the Color Quadrant Quiz →" linking to the external quiz. This is a fun, visual element that represents the series' fan identity system.

---

### 4c. Books Page (`/books`)

**Hero**: Slim dark banner — title "The Series" in Cinzel Display, centered, with a subtle gradient background.

**Content**: Organized by series, each in its own section with alternating parchment/white backgrounds.

**Book detail**: Each book gets a **magazine-spread-style** layout:
- Cover on one side (large, `240×384px`)
- On the other side: title, series position, release date, page count, tagline/blurb, status badge
- Below: Collapsed/accordion section for edition details (Hardcover ISBN, Paperback ISBN, Ebook formats)
- Buy links as a horizontal row of small retailer logo buttons

**Reading Order**: At the bottom of the page, a clean numbered list with all books in recommended reading order, with small inline cover thumbnails.

---

### 4d. News Page (`/news`)

**Layout**: Single-column editorial feed. Each entry gets:
- Date (gold-400, JetBrains Mono)
- Title/heading (Cinzel H3 or H2)
- Body text (Inter, parchment-600)
- Optional image (centered, constrained width)
- Horizontal rule separator

Content: 6–8 entries from 2023–2025 (as identified in the analysis).

The writing progress bars appear at the top of this page as a pinned "Currently Writing" card.

---

### 4e. Community Page (`/community`)

**Hero**: Slim dark banner — "The Fandom" title.

**Content**: Organized into thematic groups, each group gets a section heading:

**"Join the Conversation"** — Discord, Fan Forum, Facebook Group
**"Support the Author"** — Patreon, Ream, Author Direct Store
**"Explore the Universe"** — TAG Wiki, Atlantean Calendar, Color Quadrant Quiz
**"Watch & Listen"** — YouTube Channel, Audiobooks (Tantor Media link)
**"Fan Creativity"** — FanFic policy note, TAG.Fan site

Each item: icon + name + 1-sentence description + external link button. Layout within each group is a **staggered, offset row** — not a flat grid. Items are offset vertically by `1rem–2rem` from their neighbors, creating visual interest.

---

### 4f. About Page (`/about`)

**Layout**: Long-form editorial.

**Section 1**: Author bio — large author photo on the left (or top on mobile), biographical text on the right. Warm, parchment background. Pull-quote from the bio highlighted in Cormorant Garamond italic.

**Section 2**: Other Works — a brief list of the author's non-TAG books with cover thumbnails and titles.

**Section 3**: Film Project — the detailed section with YouTube embed, IMDB link, and the Dragon\*Con announcement context.

**Section 4**: FAQ — accordions/expandable panels for each question. Cinzel headings, Inter body text. The "pantser" explanation and reading order are the highlights.

---

## 5. Image Naming Convention

All images live in `public/images/`. Drop the file in with the exact name and it works immediately.

### Book Covers
| Book | Filename | Dimensions |
|---|---|---|
| Qualify | `qualify.webp` | 400×640 |
| Compete | `compete.webp` | 400×640 |
| Win | `win.webp` | 400×640 |
| Survive | `survive.webp` | 400×640 |
| The Book of Everything | `book-of-everything.webp` | 400×640 |
| Eos (DOTAG #1) | `eos.webp` | 400×640 |
| Dea (DOTAG #2) | `dea.webp` | 400×640 |
| Niktos (DOTAG #3) | `niktos.webp` | 400×640 |
| Ghost (DOTAG #4) | `ghost.webp` | 400×640 |
| Starlight (DOTAG #5) | `starlight.webp` | 400×640 |
| Aeson: Blue (Novella) | `aeson-blue.webp` | 400×640 |
| Aeson: Black (Novella) | `aeson-black.webp` | 400×640 |
| Xelio: Red (Novella) | `xelio-red.webp` | 400×640 |
| TAG Companion (Extras) | `tag-companion.webp` | 400×640 |
| People of TAG (Extras) | `people-of-tag.webp` | 400×640 |

### Other Images
| Asset | Filename | Notes |
|---|---|---|
| Series header logo (grail chalice) | `grail-logo.webp` | Used in hero, ~400px wide |
| Author photo | `vera-nazarian.webp` | Portrait orientation |
| "Qualify or Die" banner (promo) | `qualify-banner.webp` | Used in film section or pitch |

### In Code
All images are referenced as `/images/[filename]`. For example:
```tsx
<img src="/images/qualify.webp" alt="Qualify — The Atlantis Grail Book One" />
```
Before the user drops in real images, code will render a graceful placeholder using CSS background-color + dimensions, so the layout is correct from day one.

---

## 6. Data Architecture

All content lives in static TypeScript files in `src/data/`.

```
src/data/
├── books.ts        # All books with covers, titles, series, buy links, ISBNs, status
├── news.ts         # 6-8 news entries with dates, titles, content, images
├── community.ts    # Community links with icons, names, descriptions, URLs
├── author.ts       # Author bio, photo, other works
└── faq.ts          # FAQ questions and answers
```

### Book data shape:
```ts
type BookStatus = 'available' | 'coming-next' | 'forthcoming'

interface Book {
  slug: string
  title: string
  series: 'original' | 'prequel' | 'novella' | 'extras'
  seriesName: string
  number: number
  tagline: string
  status: BookStatus
  releaseDate?: string
  pageCount?: number
  wordCount?: number
  coverImage: string
  buyLinks: { label: string; url: string }[]
  editions?: { format: string; isbn13: string; isbn10: string; price: string }[]
}
```

---

## 7. Component Hierarchy

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageLayout.tsx       # Wraps pages with Navbar + Footer
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx            # "Available Now!", "Forthcoming"
│   │   ├── ProgressBar.tsx      # Writing progress
│   │   ├── SocialIcon.tsx
│   │   ├── ExternalLink.tsx
│   │   └── ScrollReveal.tsx     # Intersection Observer wrapper
│   └── common/
│       ├── SectionTitle.tsx     # Cinzel + gold rules pattern
│       └── DramaticCallout.tsx  # Cormorant italic quote blocks
│
├── pages/
│   ├── home/
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── Hero.tsx
│   │       ├── SeriesPitch.tsx
│   │       ├── BookShowcase.tsx
│   │       ├── WritingProgress.tsx
│   │       ├── LatestNews.tsx
│   │       ├── CommunityConstellation.tsx
│   │       ├── FilmCallout.tsx
│   │       └── EmailCta.tsx
│   ├── books/
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── BookSpread.tsx     # Magazine-style book layout
│   │       ├── SeriesGroup.tsx
│   │       └── ReadingOrder.tsx
│   ├── news/
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── NewsEntry.tsx
│   │       └── FeaturedNews.tsx
│   ├── community/
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── CommunityGroup.tsx
│   │       └── CommunityItem.tsx
│   └── about/
│       ├── index.tsx
│       └── components/
│           ├── AuthorBio.tsx
│           ├── OtherWorks.tsx
│           ├── FilmProject.tsx
│           └── FaqSection.tsx
│
├── hooks/
│   └── useScrollReveal.ts
│
├── data/
│   ├── books.ts
│   ├── news.ts
│   ├── community.ts
│   ├── author.ts
│   └── faq.ts
│
├── types/
│   └── index.ts
│
└── styles/
    └── index.css              # Tailwind directives + @font-face + custom keyframes
```

---

## 8. Tailwind Configuration

```ts
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmos: {
          950: '#030712', 900: '#0a0f1e', 800: '#111936',
          700: '#1a2550', 400: '#6b7cb5',
        },
        parchment: {
          50: '#fdfaf3', 100: '#f8f1e2', 200: '#f0e4cc',
          300: '#e0cfa8', 600: '#8a7350',
        },
        wine: {
          700: '#6b001e', 600: '#8b0a2d', 500: '#a81237', 400: '#c93a5e',
        },
        royal: {
          700: '#09449e', 600: '#1a5bc4', 500: '#3b76de',
        },
        gold: {
          500: '#c89a30', 400: '#e8b84a', 300: '#f0cf72',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        editorial: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(232, 184, 74, 0.15)',
        lift: '0 8px 30px rgba(0, 0, 0, 0.3)',
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'grail-pulse': 'grailPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'progress-fill': 'progressFill 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        grailPulse: {
          '0%, 100%': { opacity: '0.85', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.08)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        progressFill: {
          from: { width: '0%' },
          to: { width: 'var(--progress-width)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 9. Build Order

The implementation should proceed in this order, each phase building on the last:

### Phase 1: Foundation
- [ ] Tailwind config with all design tokens
- [ ] `index.css` with Google Fonts imports, custom base styles, keyframes
- [ ] Types (`src/types/index.ts`)
- [ ] Data files (`src/data/*.ts`)
- [ ] `useScrollReveal` hook
- [ ] UI primitives: `Button`, `Badge`, `ScrollReveal`, `SectionTitle`, `DramaticCallout`
- [ ] Layout: `Navbar`, `Footer`, `PageLayout`
- [ ] Router setup (all routes wired)

### Phase 2: Home Page
- [ ] Hero section
- [ ] Series Pitch section
- [ ] Book Showcase section
- [ ] Writing Progress section
- [ ] Latest News section
- [ ] Community Constellation (simplified version first)
- [ ] Film Callout section
- [ ] Email CTA + Quadrant Teaser section

### Phase 3: Secondary Pages
- [ ] Books page (full series listings)
- [ ] News page (editorial feed)
- [ ] Community page
- [ ] About page (bio + film project + FAQ)

### Phase 4: Polish
- [ ] Scroll animations and stagger timing
- [ ] Mobile nav (hamburger + overlay)
- [ ] Responsive fine-tuning across all breakpoints
- [ ] Accessibility (focus states, ARIA labels, semantic HTML)
- [ ] Final visual QA

---

## 10. Proposed Changes

### Foundation

#### [NEW] [index.ts](file:///d:/Lei/Websites/2026/theatlantisgrail/src/types/index.ts)
TypeScript interfaces for Book, NewsEntry, CommunityLink, FAQ, Author data.

#### [NEW] [books.ts](file:///d:/Lei/Websites/2026/theatlantisgrail/src/data/books.ts)
Static data for all 14 books across 4 series, with covers, buy links, ISBNs, status.

#### [NEW] [news.ts](file:///d:/Lei/Websites/2026/theatlantisgrail/src/data/news.ts)
6–8 news entries from 2023–2025.

#### [NEW] [community.ts](file:///d:/Lei/Websites/2026/theatlantisgrail/src/data/community.ts)
~12 community links with descriptions and icons.

#### [NEW] [author.ts](file:///d:/Lei/Websites/2026/theatlantisgrail/src/data/author.ts)
Author bio, other works, film project details.

#### [NEW] [faq.ts](file:///d:/Lei/Websites/2026/theatlantisgrail/src/data/faq.ts)
3–4 FAQ questions with long-form answers.

---

### Styles & Config

#### [MODIFY] [tailwind.config.js](file:///d:/Lei/Websites/2026/theatlantisgrail/tailwind.config.js)
Extend with custom colors, fonts, shadows, animations, keyframes.

#### [MODIFY] [index.css](file:///d:/Lei/Websites/2026/theatlantisgrail/src/index.css)
Add Google Fonts imports, base typography resets, custom utility classes, star texture, keyframe animations.

---

### Components

#### [NEW] [Navbar.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/layout/Navbar.tsx)
#### [NEW] [Footer.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/layout/Footer.tsx)
#### [NEW] [PageLayout.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/layout/PageLayout.tsx)
#### [NEW] [Button.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/ui/Button.tsx)
#### [NEW] [Badge.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/ui/Badge.tsx)
#### [NEW] [ProgressBar.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/ui/ProgressBar.tsx)
#### [NEW] [ScrollReveal.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/ui/ScrollReveal.tsx)
#### [NEW] [SectionTitle.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/common/SectionTitle.tsx)
#### [NEW] [DramaticCallout.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/components/common/DramaticCallout.tsx)

---

### Pages

#### [MODIFY] [App.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/App.tsx)
Add routes for `/books`, `/news`, `/community`, `/about`.

#### [MODIFY] [index.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/pages/index.tsx) → rename to `home/index.tsx`
Full home page with all 8 sections.

#### [NEW] Home section components (8 files in `pages/home/components/`)
#### [NEW] [books/index.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/pages/books/index.tsx)
#### [NEW] [news/index.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/pages/news/index.tsx)
#### [NEW] [community/index.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/pages/community/index.tsx)
#### [NEW] [about/index.tsx](file:///d:/Lei/Websites/2026/theatlantisgrail/src/pages/about/index.tsx)

---

### Hooks

#### [NEW] [useScrollReveal.ts](file:///d:/Lei/Websites/2026/theatlantisgrail/src/hooks/useScrollReveal.ts)
Custom hook wrapping IntersectionObserver for scroll-triggered animations.

---

## 11. Verification Plan

### Manual Verification
- Visual QA at 3 breakpoints (375px mobile, 768px tablet, 1440px desktop)
- Check scroll animations fire correctly on each section
- Verify all external links open in new tabs
- Test mobile nav open/close
- Verify book cover hover interactions
- Check progress bar animations
- Ensure no horizontal scroll overflow at any breakpoint

### Build Verification
```bash
npm run build
```
Ensure clean TypeScript compilation and production build with no errors.
