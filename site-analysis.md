# Digital Archaeology & UX Analysis
## theatlantisgrail.com — Portfolio Reinterpretation Study

---

## 1. What This Site Fundamentally Is

The Atlantis Grail website is a **single-page author hub** for a living, active book series. It is not a traditional multi-page website — it is one enormous HTML file (`~3,500 lines`) that uses **anchor links** (`#news`, `#author`, `#faq`, etc.) to simulate navigation. Every section of the site — book listings, author bio, news, FAQ, swag, wiki, fanfic policy, film project — exists on a single scrolling document.

This is not an accident of laziness. It reflects the author's workflow: she updates the page herself, chronologically, by inserting new content at the top of the news section. The entire site is a **personal authoring surface**, not a designed product. It evolved organically from roughly 2014–2025.

Understanding this is critical. The density and clutter are **symptoms of real, productive use**, not negligence.

---

## 2. Technical Foundation

| Property | Value |
|---|---|
| DOCTYPE | HTML 4.0 Transitional |
| Layout method | Nested `<table>` elements |
| Styling | Inline `<font>` tags, `bgcolor` attributes, inline `style=""` |
| Responsive design | None |
| CSS framework | None |
| JavaScript | Inline third-party widget scripts only |
| Analytics | Old Google Analytics (UA-), Facebook Pixel |
| Email | MailChimp (popup + embedded form) |
| Ads | Google AdSense (multiple placements in sidebar) |
| Page count | **One page.** All navigation is anchor-based. |

The body uses a book cover image as a tiling background, with a cream/parchment table overlaid on top of it — giving it a layered, scrapbook quality. The site uses three main colors:

- **Cream/Parchment** (`#F8F1E2`) — background of content areas
- **Burgundy/Wine** (`#6B001E`) — headings, links, emphasis
- **Royal Blue** (`#09449E`) — navigation bars

The header logo image is notably striking — a dark space photography background with a glowing golden grail chalice/ring structure. This is the strongest visual asset on the site.

---

## 3. Layout Structure

```
┌─────────────────────────────────────────────────┐
│          BLUE NAVIGATION BAR (24 items)          │
├──────────────┬──────────────────────────────────┤
│              │  LOGO/HEADER IMAGE               │
│              │  Publishers Weekly quote         │
│   LEFT       │  Book cover grids (4 series)     │
│  SIDEBAR     │  Second nav bar repeat           │
│  (~25%)      │  Series pitch / blurb            │
│              │  ABOUT THE AUTHOR                │
│              │  NEWS AND ANNOUNCEMENTS (long)   │
│  Book ads    │  HARDCOVER & PAPERBACK           │
│  Social      │  PRE-ORDERS                      │
│  icons       │  AUDIOBOOKS                      │
│  Pinterest   │  NOVELLAS section                │
│  embeds      │  TAG SWAG                        │
│  Newsletter  │  FAN FICTION                     │
│  Ads         │  FILM PROJECT                    │
│  Swag        │  WIKI                            │
│  Quiz        │  FAQ                             │
└──────────────┴──────────────────────────────────┘
```

The left sidebar contains essentially a **second, redundant version of the entire site in miniature** — book ads with full ISBNs and buy links, newsletter form, social icons, Pinterest board embeds, community links, and Zazzle product ads. This is the densest and most visually cluttered area of the page.

---

## 4. Navigation Analysis

The navigation bar is a single horizontal row of 24 pipe-separated links, using font size 2 Arial white text on the blue bar. At any normal screen width it wraps into multiple lines. From the screenshots, it is clearly two dense rows of text on desktop.

### Full Navigation Inventory

| Item | Type | Destination | Category |
|---|---|---|---|
| News & Announcements | Anchor | `#news` | Internal |
| Author Direct Sales Store | External | veranazarianbooks.com | External |
| Deluxe Special Editions | External | veranazarianbooks.com/collections/... | External |
| Hardcover & Paperback | Anchor | `#paper` | Internal |
| Pre-Orders | Anchor | `#pre-orders` | Internal |
| Novellas | Anchor | `#novellas` | Internal |
| Audiobooks | Anchor | `#audiobooks` | Internal |
| TAG Swag | Anchor | `#swag` | Internal |
| Fan Forum | External | atlantisgrail.proboards.com | External |
| Discord | External | discord.gg/... | External |
| Facebook Group | External | facebook.com/groups/adasg | External |
| TAG Con | External | tag.fan/tagcon.htm | External |
| TAG Wiki | Anchor | `#wiki` → Wikia link | External |
| FanFic | Anchor | `#fanfic` | Internal (stub) |
| Movie Project | Anchor | `#movie` | Internal |
| Color Quadrant Quiz | External | norilana.com/TAG-Quiz.htm | External |
| YouTube Channel | External | youtube.com/... | External |
| Atlantean Calendar | External | tag.fan/TAG-Calendar.html | External |
| TAG Tea | External | tag.fan/tea.htm | External |
| TAG.Fan | External | tag.fan | External |
| Patreon (Adult 18+) | External | patreon.com/VeraNazarian | External |
| Ream (Adult 18+) | External | reamstories.com/veranazarian | External |
| About the Author | Anchor | `#author` | Internal |
| FAQ | Anchor | `#faq` | Internal |

**Key observation:** Of 24 navigation items, only **9 are actually internal** page sections. The rest are outbound links. The nav bar is functioning as a community link directory as much as a site navigation tool.

### Navigation Categorization for Portfolio

| Item | Recommendation | Rationale |
|---|---|---|
| Books / Series | **Keep** | Core identity |
| News / Announcements | **Simplify** | Keep as a section, not an archive |
| About the Author | **Keep** | Core page |
| FAQ | **Keep** | Core page |
| Audiobooks | **Keep** (merged into Books page) | Simple content |
| Author Direct Store | **External Link Only** | Not a site section |
| Deluxe Editions | **External Link Only** | Subset of store |
| Hardcover & Paperback | **Simplify** → merge into Books | Just ISBN info |
| Pre-Orders | **Omit** | Explains why it doesn't exist |
| TAG Swag | **External Link Only** | Link to Zazzle store |
| Fan Forum | **External Link Only** | Third-party platform |
| Discord | **External Link Only** | Third-party platform |
| Facebook Group | **External Link Only** | Third-party platform |
| TAG Con | **External Link Only** | Fan-run event site |
| TAG Wiki | **External Link Only** | Wikia/Fandom |
| FanFic | **Simplify** → small note on About page | One paragraph |
| Film Project | **Keep** (as a subsection) | Identity-defining milestone |
| Color Quadrant Quiz | **External Link Only** | Hosted on norilana.com |
| YouTube Channel | **External Link Only** | Social channel |
| Atlantean Calendar | **External Link Only** | tag.fan tool |
| TAG Tea | **Omit** | Very niche/ephemeral |
| TAG.Fan | **External Link Only** | Fan site |
| Patreon / Ream | **External Link Only** | Subscription platforms |

**Proposed portfolio navigation** (5–7 items max):
- Home
- Books (all series)
- News
- Community *(external links grouped)*
- About
- *(optional)* Film Project

---

## 5. Left Sidebar Analysis

The sidebar is the most visually overwhelming part of the site. It contains approximately **25 distinct elements** stacked vertically.

### Sidebar Inventory

| Element | Notes | Recommendation |
|---|---|---|
| "Click here for LATEST NEWS" button | Redundant with nav | **Omit** |
| Social media icons (9 platforms) | BookBub, FB, Twitter, Pinterest, LinkedIn, Goodreads, YouTube, Instagram, Newsletter | **Simplify** → footer icons |
| QUALIFY book ad with Free! + retailer links | Good CTA | **Relocate** → Hero or Books page |
| MailChimp newsletter signup | Real functional element | **Keep** → as a section/modal |
| "Street Team" button embed code textarea | Fan marketing tool from ~2015 | **Omit** |
| Fan Forum button + text | External link promotion | **External Link Only** → Community page |
| Pinterest "Boys of TAG" embed | Embedded Pinterest board widget | **Omit** |
| Wattpad logo + text | Preview chapters there | **External Link Only** |
| Pinterest "TAG" board embed | Second Pinterest board | **Omit** |
| BookBub follow button | Duplicate of icon | **Omit** |
| Pinterest "Music of TAG" embed | Third Pinterest board | **Omit** |
| Pinterest "Fan Art" embed | Fourth Pinterest board | **Omit** |
| SURVIVE book ad (full) | Full ISBNs + 15+ buy links | **Relocate** → Books page |
| WIN book ad (full) | Same | **Relocate** → Books page |
| COMPETE book ad (full) | Same | **Relocate** → Books page |
| QUALIFY book ad (full) | Same | **Relocate** → Books page |
| QR code (mailing list) | Mostly irrelevant on web | **Omit** |
| Goodreads giveaway widget | **Ended September 2015** — stale | **Omit** |
| NetGalley ARC widget | For Qualify ARC, years past | **Omit** |
| Facebook Page Badge | Facebook deprecated these | **Omit** |
| Facebook Follow/Like buttons | Old SDK, likely broken | **Omit** |
| Twitter Share/Follow buttons | Old Twitter SDK | **Omit** |
| Google+1 button | **Google+ is dead (2019)** | **Omit** |
| Pinterest Share button | Old | **Omit** |
| Google AdSense blocks (×4) | Monetization for real site, not portfolio | **Omit** |
| Color Quadrant Quiz banner | Nice fan engagement feature | **External Link Only** |
| Zazzle swag product images (×5) | Merchandise promotion | **External Link Only** → Community or footer |

**Summary:** The sidebar is almost entirely **dead weight for a portfolio project**. Its meaningful elements — social links, newsletter signup, book CTAs — belong elsewhere in a modern layout. None of the Pinterest embeds, Facebook widgets, Google widgets, or AdSense blocks belong in a modern reimagination.

---

## 6. Main Content Sections

### 6a. Header / Hero

**Original:** A static banner image (`Qualify-Website-Header-Logo.jpg`) — a beautiful dark space scene with the golden grail chalice/ring, centered. Below it, a Publishers Weekly pull-quote in blue.

**Assessment:** This is the strongest visual element on the site. The art direction of the book covers (dark space, vibrant colors, cosmic scale) defines the aesthetic identity.

**Recommendation:** **Keep** — the hero should feature the logo/series art, a short pitch tagline, and a primary CTA (Get Book 1 Free / Start Reading). This is the identity anchor of the site.

---

### 6b. Book Cover Grids

**Original:** Four separate horizontal rows of book covers, one per series:
1. The Atlantis Grail Original Series (4 books + 1 forthcoming)
2. Dawn of the Atlantis Grail Prequel Series (1 available + 4 forthcoming)
3. The Atlantis Grail Novella Series (2 available + 1 forthcoming)
4. The Atlantis Grail Superfan Extras Series (2 available)

Each cover is a small image (160×256) with "Available Now!" / "Forthcoming..." status and inline retailer links.

**Assessment:** The book grid is core identity content. The series organization (Original → Prequel → Novellas → Extras) is logical and well-structured. The problem is that each cover has 7–8 inline retailer links in tiny text directly beneath it, creating visual clutter.

**Recommendation:** **Simplify** — book cards with cover image, title, status badge. Retailer links go inside a book detail panel/modal or a dedicated book page. Keep the series grouping structure as it reflects the actual publishing organization.

---

### 6c. Series Blurb / Pitch Text

**Original:** A section of formatted text introducing the premise of QUALIFY — "You have two options. You die or you Qualify." The copy is well-written, with dramatic punchy sentences alternating with italic callouts in burgundy.

**Assessment:** This is genuinely good marketing copy. The writing style (short punchy italics for dramatic beats) is clearly intentional and part of the site's voice. This is core content.

**Recommendation:** **Keep** — this belongs on the homepage, probably in the hero or immediately below it. It's the elevator pitch.

---

### 6d. About the Author

**Original:** A white-background section with a small author photo, biographical paragraph, list of other works, and cover art credit.

**Assessment:** Standard and essential. The bio is warm and distinctive — mentions double-refugee background, Vermont with four cats, Armenian humor, Russian suffering. This is memorable and personality-driven.

**Recommendation:** **Keep** — core page. Should have its own dedicated `/about` route. Expand with a larger author photo, the bio, other works list, and links to veranazarian.com.

---

### 6e. News & Announcements

**Original:** A long reverse-chronological list of updates, each separated by `<hr>`, with an italicized date stamp. The archive runs from at least **July 2017 to December 2025** — roughly 8 years of entries.

**Content types in the archive:**
- Writing progress bars (custom HTML divs) for in-progress books
- Book release announcements with full retailer link lists
- KingSumo giveaway embeds
- Patreon/Ream promotion sections with comparison charts
- TAG Con announcements (2020, 2021, 2022)
- Award news (Dragon Awards 2018 finalist)
- Convention schedule appearances (Dragon\*Con 2018)
- Film option announcement (2018)
- Wattpad chapter preview posts
- Planet map reveal
- Audiobook deal announcement

**Assessment:** This is the most content-heavy section and the one that makes the page so long. The archive is a genuine chronicle of the author's journey. For a real site, it matters. For a portfolio recreation, it does not need to be fully reproduced.

**Recommendation for portfolio:** **Simplify** — include the most recent ~4–6 announcements (from 2023–2025) to demonstrate what the section looks like:
- EOS publication (Aug 2025)
- AMREVET DAYS ONE release (Feb 2025)  
- Author Direct Store launch (Oct 2024)
- Patreon/Ream announcement (Feb 2023)
- Writing progress bars for DEA

The writing progress bars are a uniquely charming, community-oriented element — they show readers the real-time state of an in-progress book. **Keep this component** as it is distinctive and identity-defining.

A reasonable cutoff: **2023 to present** (approximately 3 years). Anything before that becomes a historical archive that a portfolio wouldn't need.

---

### 6f. Hardcover & Paperback / ISBNs

**Original:** A section listing ISBNs for all four main books in hardcover and paperback, with buy links and a note about ordering from local bookstores or libraries.

**Assessment:** This exists because the site serves real readers who need to order print books. It's a practical reference section.

**Recommendation:** **Relocate** → merge into each book's detail page/card. The portfolio needs to demonstrate this content exists, but it doesn't need its own navigation item or major section.

---

### 6g. Pre-Orders

**Original:** A section explaining *why there are no pre-orders* — because the author self-publishes and releases as soon as books are ready.

**Assessment:** This is an FAQ answer masquerading as a section. It exists because fans kept asking. For a portfolio site with static content, this concept doesn't apply.

**Recommendation:** **Omit** as a section. The content (explanation of the author's release process) belongs in the FAQ.

---

### 6h. Audiobooks

**Original:** A brief note that audiobooks are available from Tantor Media for the main series (Qualify, Compete, Win, Survive), narrated by Sofia Willingham, with full vendor link lists in the announcements section.

**Assessment:** The audiobook information is now stale in the static section (it says "coming soon" from the Tantor deal announcement) but the links in the news section are more current. The books are published and available.

**Recommendation:** **Keep** (merged into Books page) — each book's detail should note audiobook availability with a link to Audible or the narrator's page. This doesn't need its own nav item.

---

### 6i. Novellas, Prequel Series, and More

**Original:** A section that lays out the entire planned TAG universe:
- Original 4-book series
- Novella series (12+ planned titles)
- Superfan Extras series
- Prequel series (Dawn of the Atlantis Grail, 5 books)
- 5th original novel (The Book of Everything)
- AMREVET DAYS (Adult 18+ spinoff)
- Planned specialty books (cookbook, dictionary, pilot manual)

**Assessment:** This is the "roadmap" section — it tells fans what's coming. It's uniquely identity-defining because the TAG-verse is unusually expansive for an indie author. The scale of the universe (a 12-book main+prequel series + 12+ novellas + extras) is remarkable and worth showcasing.

**Recommendation:** **Simplify** — present as a visual universe roadmap or reading order guide. This is a strong portfolio component because it demonstrates both the breadth of the series and the site's role in organizing it.

---

### 6j. TAG Swag

**Original:** A section promoting the Zazzle store, with inline product images (mugs, t-shirts, keychains, totes, ornaments, ceramic tiles, water bottles, travel mugs). Each product links to Zazzle.

**Assessment:** Merchandise exists on a real author site and contributes to community/fan culture identity. For a portfolio, reproducing inline Zazzle product images is unnecessary and they look dated.

**Recommendation:** **External Link Only** — one clean banner/CTA linking to the Zazzle store. Optionally show 3–4 product images in a tasteful grid if demonstrating the Swag section concept.

---

### 6k. Fan Fiction

**Original:** A minimal stub section with one sentence linking to the author's official FanFic policy on veranazarian.com.

**Assessment:** Almost no content here. The real policy lives elsewhere.

**Recommendation:** **Relocate** → mention on the Community page or About page as a brief note with an external link. Does not need its own section.

---

### 6l. Film Project

**Original:** Announcement that TAG has been optioned for film/TV development, with two embedded YouTube videos (Dragon\*Con 2018 announcement, TAG Con 2020 "Hollywood Connection" panel), and a note about the IMDB listing.

**Assessment:** This is **identity-defining content**. The film option is a major milestone for an indie author and a strong selling point for the series. The YouTube embeds contain real content (actual panel discussions).

**Recommendation:** **Keep** — this deserves a dedicated section (possibly its own tab or card on the About page). Include the IMDB link and reference to the Dragoncon announcement. Keep one YouTube embed. The 2020 "Hollywood Connection" panel is more current and relevant.

---

### 6m. TAG Wiki

**Original:** One paragraph linking to the Fandom/Wikia wiki for the series.

**Assessment:** The wiki represents a real fan community effort. But it's an external resource.

**Recommendation:** **External Link Only** — link on the Community page. No need for a section.

---

### 6n. FAQ

**Original:** Three detailed questions and answers:
1. Book lengths (word counts, page counts for all books)
2. What's next / writing plan (full upcoming publication roadmap)
3. Reading order (chronological list of all books)
4. When will the next book be done (explanation of "pantser" writing style)

**Assessment:** The FAQ is substantive and charming. The "pantser" explanation is personality-rich writing that reveals a lot about the author's voice. Question 3 (reading order) is especially useful as a reference.

**Recommendation:** **Keep** — as a dedicated FAQ page. The reading order question could also be extracted as a standalone "Reading Order" component on the Books page. The "pantser" explanation is a great piece of author voice content.

---

## 7. Community Features Assessment

| Feature | Platform | Assessment | Recommendation |
|---|---|---|---|
| Fan Discussion Forum | ProBoards (atlantisgrail.proboards.com) | Active fan community, old platform | **External Link Only** |
| Discord Server | discord.gg | Likely the most active real-time community now | **External Link Only** (with Discord icon) |
| Facebook Group "Astra Daimon and Shoelace Girls" | Facebook | Active fan group | **External Link Only** |
| Facebook Group "TAG Spoilers" | Facebook | Secondary fan group | **External Link Only** |
| TAG Con | tag.fan | Fan-organized annual virtual convention | **External Link Only** |
| TAG Wiki | Fandom/Wikia | Fan encyclopedia | **External Link Only** |
| Atlantean Calendar | tag.fan | Custom date converter tool | **External Link Only** |
| TAG Tea | PlumDeluxe.com affiliate | Actual branded tea blends | **External Link Only** |
| TAG.Fan | tag.fan | Fan hub site | **External Link Only** |
| Patreon | patreon.com | Advance chapters, adult content | **External Link Only** |
| Ream | reamstories.com | Same as Patreon, different platform | **External Link Only** |
| Wattpad | wattpad.com | Holiday preview chapters | **External Link Only** |
| Goodreads | goodreads.com | Author profile + reader reviews | **External Link Only** |
| YouTube Channel | youtube.com | Author videos, panels | **External Link Only** |
| Color Quadrant Quiz | norilana.com | Personality quiz (Red/Blue/Green/Yellow) | **External Link Only** (but worth featuring prominently — very fan-engaging) |
| IMDB | imdb.com/title/tt8385470 | Film project listing | **External Link Only** |

**Conclusion on community:** All community features are third-party platforms. A portfolio site should have a single **Community** page or section that lists these clearly with icons and brief descriptions — rather than embedding widgets and frames throughout. The community is large and active enough that showing its breadth is a strength, but none of it needs to be rendered inline.

---

## 8. Social Media & Widgets Assessment

| Widget/Platform | Status | Recommendation |
|---|---|---|
| Google Analytics (UA-) | **Obsolete** — UA sunset 2023 | **Omit** |
| Facebook Pixel | Heavy tracking, GDPR issues | **Omit** |
| MailChimp popup | Real functional element | **Keep** as email signup |
| MailChimp embedded form | Duplicate of popup | **Keep** (one instance) |
| Facebook page badge | **Deprecated** by Facebook | **Omit** |
| Facebook Follow/Like SDK | Old, likely broken | **Omit** |
| Twitter share/follow widgets | Old Twitter SDK | **Omit** |
| Google+1 button | **Google+ dead since 2019** | **Omit** |
| Pinterest board embeds (×4) | Slow, cluttered | **Omit** → Link to Pinterest profile |
| Pinterest share button | Old | **Omit** |
| Google AdSense (×4 sidebar slots) | Monetization for real site | **Omit** |
| Goodreads giveaway widget | **Ended Sept 2015** | **Omit** |
| NetGalley ARC widget | For Qualify ARC, years past | **Omit** |
| KingSumo giveaway embed | Current (Dec 2025 giveaway) | **Omit** (time-limited) |
| YouTube embeds (×2 in film section) | Active content | **Keep** (one) |
| Wattpad widget | Broken/removed by Wattpad | **Omit** |
| BookBub follow button | Active platform | **External Link Only** → icon |
| Social icon strip (9 icons) | Core social presence | **Keep** (simplified, in footer/header) |

---

## 9. Identity vs. Accumulation — The Key Distinction

After a thorough analysis, the **core identity** of the site can be distilled to:

### What defines this site's identity (intrinsic)
1. **The series and its universe** — 4 main books + prequel + novellas + extras, all organized and described
2. **The aesthetic** — dark space, golden cosmic imagery, cream/burgundy color palette
3. **The author's voice** — personal, warm, humorous, direct. The news updates are written in first person and feel like journal entries.
4. **The writing progress bars** — a public accountability and fan engagement tool unique to this author
5. **The series pitch/blurb** — "You have two options. You die or you Qualify." This tagline defines the series identity.
6. **The film option** — a milestone that validates the series
7. **The Color Quadrant quiz** — a beloved fan identity feature (Red/Blue/Green/Yellow Quadrants)
8. **The reading order** — an active reference for a complex multi-series universe
9. **The fan community breadth** — Discord, forum, convention, wiki, fanfic = a real living fandom

### What only exists because it's a real long-running site (accidental accumulation)
1. Four embedded Pinterest boards (widgets that slow the page)
2. Google+ button (dead platform)
3. A Goodreads giveaway that ended in September 2015
4. Google AdSense in the sidebar (monetization)
5. ISBNs listed inline for 15+ Amazon country-specific links per book
6. "Street team" embed code textarea for fans to paste HTML
7. NetGalley ARC widget for a book that came out in 2014
8. A Pre-Orders section that explains why there are no pre-orders
9. Dragon\*Con 2018 panel schedule
10. Complete news archive back to 2017

---

## 10. Proposed Portfolio Site Structure

### Pages / Routes

```
/ (Home)
├── /books (or series sub-routes)
│   └── /books/[slug] (individual book detail)
├── /news
├── /community
├── /about
└── /faq
```

### Home Page Sections
1. **Hero** — Series logo, tagline ("You qualify or you die"), CTA (Get Book 1 Free)
2. **Series Blurb** — The pitch text, styled dramatically
3. **Book Grid** — All series organized (Original → Prequel → Novellas → Extras), with cover cards
4. **News Preview** — 3 most recent announcements, link to /news
5. **Writing Progress** — Current work-in-progress bars (DEA, AMREVET DAYS TWO)
6. **Community Teaser** — Discord, Forum, TAG Con as featured community links
7. **Email Signup** — Newsletter CTA section
8. **Film Project Callout** — Brief card with film option highlight

### Books Page
- Grouped series display
- Each book: cover, title, series position, status, tagline/blurb, buy links (simplified: Amazon, B&N, Kobo, Apple, Google Play — not 15 Amazon country variants)
- Reading order guide

### News Page
- Reverse-chronological entries (2023–present, ~6–8 posts)
- Writing progress bars
- Category tags (Release, Update, Community)

### Community Page
- Discord, Fan Forum, Facebook Group, TAG Con, TAG Wiki, Atlantean Calendar, Color Quadrant Quiz, Wattpad, Patreon, Ream, TAG Tea, TAG.Fan, Goodreads, YouTube
- Each as a card with icon, name, short description, and link

### About Page
- Author bio + photo
- Other works (non-TAG books)
- Fan Fiction policy note
- Film Project section with YouTube embed + IMDB link
- Cover art credit

### FAQ Page
- Book lengths
- Reading order
- Release schedule / "pantser" explanation
- What's coming next

---

## 11. Content Cutoff Recommendations

### News Archive
- **Include:** 2023–present (~6–8 entries)
- **Represent but don't reproduce:** Older entries exist (via a "View full archive" external link to real site)
- **Specifically include:**
  - EOS release (Aug 2025)
  - AMREVET DAYS ONE release (Feb 2025)
  - Author Direct Store launch (Oct 2024)
  - Patreon/Ream platform announcement (Feb 2023)
  - Current writing progress (DEA, AMREVET DAYS TWO)

### Buy Links
- **Include:** Amazon (US), Barnes & Noble, Kobo, Apple Books, Google Play, Smashwords
- **Omit:** Amazon UK/CA/DE/FR/JP/IN/IT/ES (12 country variants per book)
- **Omit:** AddAll, BookFinder, Book Depository, Powell's, Books-A-Million as inline links (these can go in a "More retailers" external link if needed)

### Community Links
- **Include:** Discord, Facebook Group, Fan Forum, TAG Con, TAG Wiki, Patreon, YouTube, Goodreads, Color Quadrant Quiz
- **Omit (or footnote):** TAG Tea, TAG.Fan (very niche), NetGalley, Wattpad (account still active but less prominent now)

---

## 12. Summary Categorization Table

| Content Element | Category |
|---|---|
| Series header logo / hero image | **Keep** |
| Series pitch / blurb text | **Keep** |
| Book cover grids (all 4 series) | **Keep** |
| Series organization structure | **Keep** |
| Writing progress bars | **Keep** |
| Author bio + photo | **Keep** |
| Film project section | **Keep** |
| Email newsletter signup | **Keep** |
| Social media icons (footer) | **Keep** |
| FAQ (3–4 questions) | **Keep** |
| News section (recent) | **Keep** |
| Reading order guide | **Keep** |
| Book detail / buy links | **Simplify** |
| Swag section | **External Link Only** |
| Community links (Discord, Forum, etc.) | **External Link Only** |
| Color Quadrant Quiz | **External Link Only** |
| Pinterest boards | **External Link Only** (icon only) |
| Patreon / Ream | **External Link Only** |
| YouTube channel | **External Link Only** |
| TAG.Fan | **External Link Only** |
| Fan Fiction policy | **Relocate** → About page |
| Hardcover ISBNs | **Relocate** → Book detail |
| Pre-Orders explanation | **Relocate** → FAQ |
| Audiobook info | **Relocate** → Book detail |
| Novella/reading plan | **Relocate** → Books page / FAQ |
| Old news archive (pre-2023) | **Omit** |
| Google AdSense | **Omit** |
| Google Analytics (UA) | **Omit** |
| Facebook Pixel | **Omit** |
| Google+1 button | **Omit** |
| Pinterest board embeds | **Omit** |
| Goodreads giveaway widget | **Omit** |
| NetGalley ARC widget | **Omit** |
| Street team embed code textarea | **Omit** |
| Facebook Like/Follow SDK | **Omit** |
| Twitter share widgets | **Omit** |
| Amazon country variants (15/book) | **Omit** |
| Dragon\*Con 2018 schedule | **Omit** |
| Wattpad widget | **Omit** |
| BookBub follow button (standalone) | **Omit** |
| QR code (mailing list) | **Omit** |
| TAG Tea | **Omit** |

---

## 13. Visual Identity Observations

From the screenshots and source code, these visual elements are worth preserving in spirit:

1. **Dark space / cosmic aesthetic** — the cover art and header logo establish a consistent world. Deep blues, blacks, and glowing gold/amber tones.
2. **Burgundy wine color (#6B001E)** — used for italic dramatic text, headings, and emphasis. This is the "voice color" of the site.
3. **Cream/parchment warmth** — the #F8F1E2 background gives the site a papery, readable quality that contrasts with the dark cover art.
4. **Book covers as the primary visual asset** — the four main book covers (Qualify/Compete/Win/Survive) have strong, consistent branding with the Norilana logo and the artist at GoOnWrite.com.
5. **The Grail chalice logo** — the golden ringed planetary grail object in the header is the series' icon. It appears on merchandise and the site header.
6. **Italic dramatic callouts** — the site uses italic bold burgundy text for one-liners like *"You have two options. You die or you Qualify."* and *"But there's a catch."* This is a recognizable voice pattern.

A modern reinterpretation should:
- Retain the dark cosmic palette for hero areas
- Use cream/warm tones for reading areas (content)
- Use the burgundy as an accent color for dramatic text and CTAs
- Feature book covers prominently with good aspect ratios
- Preserve the italic dramatic voice in section headers

---

*Analysis based on full HTML source (3,470 lines, 164KB) of theatlantisgrail.com fetched June 2026, supplemented by live screenshots.*
