# Tasks — The Atlantis Grail Portfolio

Feature-based, commit-based. One phase = one working commit. Nothing gets created before it is needed.

---

## Phase 1 — Design System & Router Scaffolding
**Commit:** `feat: design system tokens, fonts, and router scaffolding`

- [ ] `tailwind.config.js` — extend with all color tokens, font families, shadows, keyframes
- [ ] `src/index.css` — Google Fonts `@import` (Cinzel, Cormorant Garamond, Inter, JetBrains Mono), Tailwind directives, base resets (box-sizing, scroll-behavior, selection color), `@keyframes grailPulse` and `@keyframes fadeUp`
- [ ] `src/App.tsx` — wire up all 5 routes (`/`, `/books`, `/news`, `/community`, `/about`) each pointing to a minimal stub page that renders a `<p>` with the page name so routing works from day one
- [ ] `src/pages/home/index.tsx` — stub
- [ ] `src/pages/books/index.tsx` — stub
- [ ] `src/pages/news/index.tsx` — stub
- [ ] `src/pages/community/index.tsx` — stub
- [ ] `src/pages/about/index.tsx` — stub
- [ ] Delete old `src/pages/index.tsx`

> ✅ After this phase: `npm run dev` loads, all 5 routes resolve, fonts load, Tailwind tokens are available everywhere.

---

## Phase 2 — Navbar + Hero Section
**Commit:** `feat: navbar and hero section`

What Hero needs: navbar overlaying it, the grail logo image, static text, two CTA buttons, scroll chevron, star texture background, gold pulse animation.

- [ ] `src/components/layout/Navbar.tsx`
  - Fixed position, transparent initially, transitions to `cosmos-900/90 backdrop-blur` on scroll (JS `window.scroll` listener via `useState`)
  - Left: wordmark "THE ATLANTIS GRAIL" (Cinzel, gold)
  - Center: 5 nav links with hover underline slide-in (CSS `::after` transition)
  - Right: "Start Reading" pill button (inline styled — do not abstract yet)
  - Mobile: hamburger icon only, no overlay yet (comes in Phase 13)
  - 1px gold bottom border at `gold-400/20` opacity
- [ ] `src/pages/home/components/Hero.tsx`
  - Full-viewport `min-h-screen`, `cosmos-950` background
  - CSS star scatter on `::before` pseudo via `radial-gradient` repeating pattern
  - Warm gold radial gradient overlay centered-right (simulating light from the grail)
  - Grail logo `<img src="/images/grail-logo.webp">` with `animate-grail-pulse`, with a CSS placeholder (sized `280px × 280px`, `cosmos-800` bg) until image is dropped in
  - Series title, author byline, italic tagline — all static strings, no data files
  - Two side-by-side CTA links (inline, not a shared component yet)
  - Scroll chevron with CSS `@keyframes bounce` at bottom of viewport
- [ ] `src/pages/home/index.tsx` — import and render `<Navbar>` and `<Hero>`

> ✅ After this phase: hero section is fully built and visually complete. Navbar appears. The page looks like an actual site.

---

## Phase 3 — Series Pitch Section
**Commit:** `feat: series pitch asymmetric layout`

What this section needs: two-column layout, editorial typography alternating between dramatic callouts and body prose, one book cover image with tilt and shadow, a CTA link. All static — no data files.

- [x] `src/pages/home/components/SeriesPitch.tsx`
  - `parchment-100` background, `py-24` vertical padding
  - Desktop: CSS grid `grid-cols-[55fr_45fr]`, gap, `max-w-7xl mx-auto px-6`
  - Left column: alternating `<h2>` (Cormorant Garamond italic, `wine-700`) and `<p>` (Inter, `parchment-600`) blocks for each dramatic beat of the pitch text. All hardcoded strings.
  - Right column: `<img src="/images/qualify.webp">` with `rotate-1` transform, negative margin bottom (`-mb-10`), `shadow-lift`, CSS placeholder if image missing. Small "Get Book 1 Free →" link below.
  - Mobile: single column, cover stacks on top
- [x] `src/pages/home/index.tsx` — add `<SeriesPitch>` below `<Hero>`

> ✅ After this phase: the dramatic pitch copy and the tilted Qualify cover are visible below the hero.

---

## Phase 4 — Book Showcase Section
**Commit:** `feat: book showcase with fanned shelf display`

First time we need book data and the scroll reveal hook. Extract shared primitives only if they're used in 2+ places this phase.

- [x] `src/types/index.ts` — define `BookStatus`, `BuyLink`, `Edition`, `Book` interfaces
- [x] `src/data/books.ts` — all 15 books across 4 series with slugs, titles, taglines, series metadata, status, cover paths (`/images/*.webp`), buy links (Amazon, B&N, Kobo, Apple, Google Play), editions with ISBNs
- [x] `src/hooks/useScrollReveal.ts` — `IntersectionObserver` hook, returns `[ref, isVisible]`, `threshold: 0.15` (already existed)
- [x] `src/pages/home/components/BookShowcase.tsx`
  - `cosmos-900` background, `py-24`
  - 4 series groups, each with a series title treatment: Cinzel, gold, flanked by thin `border-t border-gold-400/30` rules (achieved with `flex items-center gap-4`)
  - **Fanned shelf**: `flex` row with covers overlapping via negative `margin-left` on all but the first. Covers: `w-[180px]` with `aspect-[5/8]`. First/active cover: `w-[200px]`. CSS placeholder bg `cosmos-800` with book title text until image lands.
  - Hover on cover: `scale-105 -translate-y-3 shadow-glow z-10 transition-all duration-300`. A detail panel slides up from below (`absolute bottom-0`, `translateY` toggle via `useState` tracking hovered slug).
  - Detail panel: title, tagline, status badge (inline span, not a component yet), and 5 buy link buttons (inline `<a>` tags, not a component yet)
  - Mobile: `overflow-x-auto` horizontal scroll strip with `scroll-snap-type-x`, each cover `snap-start`, detail always visible below
  - Wrap each series group in `useScrollReveal` for fade-up on enter
- [x] `src/pages/home/index.tsx` — add `<BookShowcase>`

> ✅ After this phase: all 15 books are displayed in the fanned shelf layout per series. Hover interaction works. Data lives in a typed file.

---

## Phase 5 — Writing Progress Section
**Commit:** `feat: writing progress bars`

- [ ] `src/pages/home/components/WritingProgress.tsx`
  - `parchment-100` background, compact section `py-16`
  - "What the author is working on right now" label (Inter italic, `parchment-600`)
  - Two progress items hardcoded: DEA (5.53%) and AMREVET DAYS TWO (18.79%)
  - Each: book title in Cinzel, stats in `font-mono text-sm`, custom progress bar — `cosmos-800` track, green fill for DEA, red (`wine-500`) fill for AMREVET, `rounded-full h-2`
  - Bar width driven by CSS custom property `--progress-width` set inline via `style`. Animated with `progressFill` keyframe triggered when `useScrollReveal` fires (`isVisible` → add class with animation)
  - "Current Chapter: Chapter X" line below each bar
- [ ] `src/pages/home/index.tsx` — add `<WritingProgress>`

> ✅ After this phase: the progress bars animate in on scroll. The section is warm and personal.

---

## Phase 6 — Latest News Section
**Commit:** `feat: latest news editorial section`

- [ ] `src/types/index.ts` — add `NewsEntry` interface (id, date, title, body, image?)
- [ ] `src/data/news.ts` — 6 entries from 2023–2025 (EOS release Aug 2025, AMREVET DAYS ONE Feb 2025, Author Store Oct 2024, Patreon announcement Feb 2023, Winter 2025 giveaway note, writing progress update)
- [ ] `src/pages/home/components/LatestNews.tsx`
  - `cosmos-900` background, `py-24`
  - Section title "News & Announcements" in Cinzel with gold rules
  - **Featured entry** (first): two-column layout on desktop — left ~60% has large Cinzel title, date in `font-mono gold-400`, truncated body prose. Right: cover image if present, otherwise none. Visually the biggest item.
  - **Remaining 3 entries**: stacked below, each a horizontal row — date column left (`font-mono text-sm gold-400 w-32 shrink-0`), title + one-line excerpt right. A `border-t border-cosmos-700` separates them. No images.
  - "View all news →" link at bottom right, styled as text link with arrow
  - Fade-up on scroll reveal for the entire section
- [ ] `src/pages/home/index.tsx` — add `<LatestNews>`

> ✅ After this phase: editorial news feed is live. Featured entry dominates. Smaller entries are minimal.

---

## Phase 7 — Community Constellation, Film Callout & Email CTA
**Commit:** `feat: community constellation, film callout, and email CTA sections`

Three remaining home sections. Community constellation is the most complex.

- [ ] `src/pages/home/components/CommunityConstellation.tsx`
  - `cosmos-950` background, `py-24`
  - **Desktop** (`lg:`): SVG or absolutely-positioned `div` constellation. 9 nodes (Discord, Forum, Facebook Group, Patreon, Ream, TAG Wiki, YouTube, Color Quadrant Quiz, Goodreads) placed at specific `top`/`left` % positions inside a `relative` container. Each node: a small glowing dot (`w-3 h-3 rounded-full bg-gold-400 shadow-glow`) + label below. SVG `<line>` elements connecting related nodes (Discord↔Forum↔Facebook, Patreon↔Ream, Wiki↔Quiz). On hover: dot scales up, a tooltip-style card appears with name, 1-line description, external link.
  - **Mobile** (`< lg`): hidden constellation, show a clean stacked list with icon + name + description + link for each node
  - Section title "The Fandom" in Cinzel
- [ ] `src/pages/home/components/FilmCallout.tsx`
  - `cosmos-900` background, full-width horizontal band `py-20`
  - Left side: "OPTIONED FOR FILM/TV" in Cinzel small-caps, `gold-400`. "Feature film and TV series development announced at Dragon\*Con 2018." in Inter. IMDB link button.
  - Right side: YouTube embed `<iframe>` for the TAG Con 2020 Hollywood Connection panel (`https://www.youtube.com/embed/h-r0eORZW9k`), `aspect-video w-full max-w-lg`
  - Thin gold `border-t` line above section
- [ ] `src/pages/home/components/EmailCta.tsx`
  - `parchment-100` background, `py-20`
  - Two-column split on desktop
  - Left: "Never miss a release" heading (Cinzel), short sentence, email `<input>` + "Subscribe" `<button>` on one row. Button has `type="submit"` and an `onClick` that calls `e.preventDefault()` — non-functional demo. Input has `placeholder="Your email address"`.
  - Right: "Discover Your Quadrant" — four colored circles in a 2×2 arrangement (`w-16 h-16 rounded-full`): `#ef4444` Red, `#09449e` Blue, `#22c55e` Green, `#e8b84a` Yellow. Each labeled below. Below the 2×2: "Take the Color Quadrant Quiz →" external link to `http://www.norilana.com/TAG-Quiz.htm`
- [ ] `src/pages/home/index.tsx` — add all three sections

> ✅ After this phase: the homepage is complete end-to-end. All 8 sections render.

---

## Phase 8 — Footer
**Commit:** `feat: footer and page layout wrapper`

Now that the homepage is complete and we see what footer needs, build it and wrap it globally.

- [ ] `src/components/layout/Footer.tsx`
  - `cosmos-950` background, `py-16 px-6`
  - Thin `border-t border-gold-400/20` line at top
  - Three-column grid on desktop, stacked on mobile
  - Col 1: wordmark + "by Vera Nazarian" + tagline + copyright `©2026`
  - Col 2: quick links list (Home, Books, News, Community, About) — Cinzel, small, `text-parchment-200`
  - Col 3: six social icon links (Goodreads, Instagram, YouTube, Discord, Facebook, Patreon) as a row of SVG icons + mini email form (non-functional, same pattern as EmailCta)
  - SVG icons: inline SVGs or Unicode character fallbacks — no icon library imported
- [ ] `src/components/layout/PageLayout.tsx` — renders `<Navbar>`, `{children}`, `<Footer>`
- [ ] `src/App.tsx` — wrap each `<Route element>` in `<PageLayout>`

> ✅ After this phase: footer appears on all pages. Layout is consistent globally.

---

## Phase 9 — Books Page
**Commit:** `feat: books page with magazine-spread layout`

Books data already exists from Phase 4. Build the full dedicated page now.

- [ ] `src/pages/books/components/SeriesGroup.tsx` — renders a series heading + the books in that series
- [ ] `src/pages/books/components/BookSpread.tsx`
  - Magazine-spread layout: alternating left/right cover placement per book (odd index = cover left, even = cover right)
  - Cover: `w-[240px] aspect-[5/8] shrink-0`, CSS placeholder until image present
  - Info side: title (Cinzel H2), series position + release date (mono), page count, status badge (`inline-flex px-3 py-1 rounded-full text-sm` — inline style, no shared component yet), tagline (Cormorant italic), buy link row (5 `<a>` tags styled as small outlined pill links)
  - Accordion for edition ISBNs: `<details><summary>` native HTML, no JS needed
- [ ] `src/pages/books/components/ReadingOrder.tsx`
  - Numbered list, `parchment-100` bg panel
  - Each entry: number + tiny cover thumbnail (`w-10 aspect-[5/8]`) + title + series label
- [ ] `src/pages/books/index.tsx` — slim dark page-hero banner, then `<SeriesGroup>` for each of 4 series, then `<ReadingOrder>`

> ✅ After this phase: books page is complete with full series listings, ISBNs, buy links, and reading order.

---

## Phase 10 — News Page
**Commit:** `feat: news page full editorial feed`

News data already exists from Phase 6. Build the dedicated page.

- [ ] `src/pages/news/components/FeaturedNews.tsx` — same large featured entry layout as in `LatestNews` but with full body text, not truncated
- [ ] `src/pages/news/components/NewsEntry.tsx` — single entry: date in mono, Cinzel heading, full body prose, optional centered image, `border-b border-parchment-300` separator
- [ ] `src/pages/news/index.tsx`
  - `parchment-100` page background
  - Slim dark page-hero with "News & Announcements" title
  - "Currently Writing" pinned card at top: two progress bars (reuse the same bar markup from Phase 5 — don't abstract yet, just copy the markup; they're in different pages)
  - `<FeaturedNews>` for entry[0]
  - `<NewsEntry>` for entries[1–5]

> ✅ After this phase: news page renders all 6 entries with progress bars pinned at top.

---

## Phase 11 — Community Page
**Commit:** `feat: community page with grouped external links`

- [ ] `src/types/index.ts` — add `CommunityLink` and `CommunityGroup` interfaces
- [ ] `src/data/community.ts` — ~12 links organized into 5 groups: Join the Conversation, Support the Author, Explore the Universe, Watch & Listen, Fan Creativity
- [ ] `src/pages/community/components/CommunityItem.tsx` — icon + name + description + external link button. The items within a group are staggered vertically (`odd: mt-0, even: mt-6`) to avoid flat grid look.
- [ ] `src/pages/community/components/CommunityGroup.tsx` — group heading + renders `<CommunityItem>` list
- [ ] `src/pages/community/index.tsx` — slim dark page-hero "The Fandom", then 5 `<CommunityGroup>` sections with alternating `parchment-100` / `parchment-50` backgrounds

> ✅ After this phase: community page is complete with all external links organized.

---

## Phase 12 — About Page
**Commit:** `feat: about page with bio, film project, and FAQ`

- [ ] `src/types/index.ts` — add `OtherWork` and `FaqEntry` interfaces
- [ ] `src/data/author.ts` — bio paragraphs, photo path (`/images/vera-nazarian.webp`), other works list with titles and Amazon links
- [ ] `src/data/faq.ts` — 4 Q&A entries (book lengths, reading order, what's next, pantser explanation)
- [ ] `src/pages/about/components/AuthorBio.tsx`
  - `parchment-100` bg, two-column desktop layout
  - Left: `<img src="/images/vera-nazarian.webp">` with CSS placeholder, slight `rounded-lg`
  - Right: bio paragraphs, a pull-quote from the bio styled in Cormorant Garamond italic `text-xl wine-700`
- [ ] `src/pages/about/components/OtherWorks.tsx` — brief horizontal scrollable strip of other book titles (no covers, just titles + links — she has non-TAG books)
- [ ] `src/pages/about/components/FilmProject.tsx`
  - `cosmos-900` background section
  - "OPTIONED FOR FILM/TV" callout (same content as home section, but more detail — add IMDB link, Dragon\*Con context, the YouTube embed)
- [ ] `src/pages/about/components/FaqSection.tsx`
  - `parchment-50` bg
  - Each FAQ entry: `<details><summary>` native accordion — Cinzel summary, Inter body answer
  - Reading order rendered as a numbered list inside its answer
- [ ] `src/pages/about/index.tsx` — composes all 4 sections

> ✅ After this phase: all 5 pages are fully built and functional.

---

## Phase 13 — Mobile Nav & Responsive Pass
**Commit:** `feat: mobile navigation and responsive layout fixes`

Go through every page/component and fix mobile. The hamburger nav was deferred until now.

- [ ] `src/components/layout/Navbar.tsx` — add hamburger button (`☰`/`✕` toggle via `useState`), fullscreen overlay (`fixed inset-0 cosmos-950 z-50 flex flex-col items-center justify-center`), stagger-in animation on nav links via CSS classes applied with `setTimeout` delays
- [ ] Hero: verify text scales with `clamp()` or responsive Tailwind text sizes, no overflow
- [ ] SeriesPitch: single column on mobile (cover on top, text below)
- [ ] BookShowcase: verify horizontal scroll strip works on touch, snap behavior correct
- [ ] CommunityConstellation: verify mobile list renders correctly, constellation hidden at `< lg`
- [ ] FilmCallout: stack layout on mobile (YouTube embed on top, text below)
- [ ] EmailCta: single column, quadrant circles remain 2×2 but smaller
- [ ] Footer: three columns collapse gracefully
- [ ] Books page: BookSpread alternating flips to always cover-top on mobile
- [ ] News page: featured entry stacks to single column

> ✅ After this phase: fully responsive on 375px, 768px, 1440px. Mobile nav works.

---

## Phase 14 — Scroll Animations & Micro-interactions
**Commit:** `feat: scroll animations and micro-interactions`

Wire `useScrollReveal` systematically. Add hover states that weren't worth doing earlier.

- [ ] Hero: no scroll reveal (already visible). Add `animate-grail-pulse` to grail image if not already applied.
- [ ] SeriesPitch: fade-up on left column prose blocks (staggered by 100ms per block), fade-up on cover.
- [ ] BookShowcase: each series group fades up on enter. Cover scale reveal (`scale-95 opacity-0 → scale-100 opacity-100`) when showcase enters viewport. Verify hover interaction is smooth.
- [ ] WritingProgress: progress bar width animation triggers on reveal.
- [ ] LatestNews: featured entry fades up, smaller entries stagger-fade.
- [ ] CommunityConstellation: nodes fade in staggered from center outward.
- [ ] FilmCallout: section fades up.
- [ ] EmailCta: fade-up on both columns.
- [ ] Books page: each BookSpread fades up individually as user scrolls.
- [ ] News page: each NewsEntry fades up.
- [ ] Community page: each CommunityGroup fades up, items stagger.
- [ ] About page: AuthorBio two columns fade-up, FAQ items stagger open-ready.
- [ ] Nav hover underline: verify `::after` CSS transition is smooth on all links.
- [ ] Book cover hover: verify `transition-all duration-300` feels right, shadow-glow applied.

> ✅ After this phase: the site feels alive and cinematic without being overdone.

---

## Phase 15 — Accessibility & Final QA
**Commit:** `chore: accessibility, build verification, and final QA`

- [ ] All `<img>` tags have descriptive `alt` text
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`
- [ ] All interactive elements are keyboard-focusable with visible focus rings (Tailwind `focus-visible:ring-2 focus-visible:ring-gold-400`)
- [ ] Mobile nav overlay traps focus while open
- [ ] Color contrast: check wine-700 on parchment-100, gold-400 on cosmos-900 meet WCAG AA
- [ ] `<h1>` appears once per page
- [ ] FAQ `<details>/<summary>` accessible to screen readers
- [ ] YouTube iframes have `title` attributes
- [ ] `npm run build` passes with zero TypeScript errors
- [ ] Manual smoke test: all 5 routes load, all external links open correctly, images show placeholders gracefully, mobile nav opens/closes

> ✅ After this phase: the project is portfolio-ready.
