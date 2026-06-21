# CLAUDE.md — St. Luke's Medical Laboratory

This file is read at session start. It is the canonical project memory. Update it whenever you change architecture, business facts, or conventions.

---

## 1. What this is

The marketing website for **St. Luke's Medical Laboratory** — an independent diagnostic lab in **Ja-Ela, Sri Lanka**. Production URL: **https://www.stlukesmedilab.com**. Hosted on **Vercel**, repo on GitHub at `SudewaJay/st-lukes-website`, branch `main` auto-deploys.

**Strategy in one paragraph:** compete against national chains (Asiri, Nawaloka, Hemas) on (1) **price transparency** — publish every test price in LKR, rivals don't; (2) **hyper-local SEO** — target seven specific towns the chains never name; (3) **technical SEO** — JSON-LD, sitemaps, file-based MDX blog. The direct local threat is **Hemas Wattala** on Negombo Road; prioritise Wattala + Negombo-corridor content.

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** App Router, React 19, TypeScript strict |
| Styling | **Tailwind v4** (via `@tailwindcss/postcss`) + a few branded tokens (`stLukes-*`, `stLukesRed-*`) defined in `src/app/globals.css` |
| Animation | `framer-motion` v12 |
| Icons | `lucide-react` |
| Blog | File-based **MDX** in `content/blog/` — `gray-matter` for frontmatter, `next-mdx-remote/rsc` for rendering, `remark-gfm` for tables |
| Image hosting | Local `/public/*` + Unsplash (configured in `next.config.ts` `images.remotePatterns`) |
| Deploy | Vercel auto-deploy on push to `main` (~30s) |

`npm run dev` for local. `npm run build` to verify before pushing risky changes.

---

## 3. Business facts (source of truth — reuse verbatim, do not invent)

Most of this is encoded in **`src/lib/seo.ts`** as the `NAP` constant — read from there in code, never hardcode strings.

| Field | Value |
|---|---|
| Business name | St. Luke's Medical Laboratory |
| Street | No. 67, Old Negombo Road |
| City | Ja-Ela |
| Region | Western Province |
| Postal code | 11350 |
| Country | LK |
| Phone | `+94711231954` (tel:), display **`071 123 1954`** |
| Email | **`medilabstlukes@gmail.com`** (Gmail — confirmed, do not change to info@ without asking) |
| Hours | Mon–Sat 07:00–19:30, Sun 07:30–12:30 |
| Towns served (slugs) | `ja-ela` (HQ), `kandana`, `welisara`, `ragama`, `wattala`, `batagama`, `thudella` |
| Welisara spelling | use `welisara` slug, mention `Walisara` in body copy for search match |
| Google rating | 5.0 from 3 reviews → too thin to publish `aggregateRating`. Keep omitted. |
| GBP URL | TODO `<<CONFIRM>>` — fill `sameAs` in `lib/seo.ts` when known |
| Facebook URL | TODO `<<CONFIRM>>` — same as above |
| Geo lat/lng | TODO optional `<<CONFIRM>>` — commented in schema |

**Lab equipment** (drives `/technology` page + `MedicalDevice` schema, see `lib/analyzers.ts`):
- Chemiluminescence Immunoassay (CLIA) Analyzer
- BioSystems A15 Fully Automated Biochemistry Analyzer
- Audicom Electrolyte Analyzer
- Medonic Hematology Analyzer

---

## 4. Routes & where to edit each

| Route | File | Edit by |
|---|---|---|
| `/` | `src/app/page.tsx` | composes section components from `src/components/*` |
| `/about` | `src/app/about/page.tsx` | direct edit |
| `/services` | `src/app/services/page.tsx` | direct (lists from `lib/services.ts`) |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | edit `lib/services.ts` to add/change services |
| `/technology` | `src/app/technology/page.tsx` | edit `lib/analyzers.ts` for new equipment |
| `/packages` | `src/app/packages/page.tsx` | edit `lib/packages.ts` |
| `/locations` | `src/app/locations/page.tsx` | edit `lib/locations.ts` |
| `/locations/[town]` | `src/app/locations/[town]/page.tsx` | edit `lib/locations.ts`; keep each town's `intro` + `landmarks` UNIQUE (Google penalises doorway pages) |
| `/price-list` | `src/app/price-list/page.tsx` + `ClientPriceList.tsx` | edit `lib/priceList.ts` |
| `/blog` | `src/app/blog/page.tsx` | reads `content/blog/*.mdx` via `lib/blog.ts` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | drop `content/blog/<slug>.mdx` — that's it |
| `/privacy-policy`, `/terms` | direct | static pages |

**Always-rendered**: `Navbar.tsx`, `MobileMenu.tsx`, `Footer.tsx`. The mobile menu reads `navLinks` from `Navbar.tsx` so any nav update flows to both automatically.

---

## 5. Single sources of truth (DO NOT duplicate data)

| File | What it owns | Rule |
|---|---|---|
| `src/lib/seo.ts` | NAP, hours, MedicalBusiness, FAQPage, WebSite, SiteNavigation, postal address | Every page that needs business contact info imports from here |
| `src/lib/priceList.ts` | All 58+ test prices in LKR | The price-list page and homepage Pricing are both rendered from this. Optional `was: number` field shows strikethrough for recently-reduced prices. |
| `src/lib/packages.ts` | The 4 health packages (Full Body, Joint Pain, Kidney, Diabetic Kidney) | Drives homepage + `/packages` + `OfferCatalog` schema |
| `src/lib/locations.ts` | 7 towns with unique `intro` + `landmarks` + `distanceFromHQ` | Drives `/locations` + `/locations/[town]` + sitemap |
| `src/lib/services.ts` | 4 services (blood-tests, ecg-cardiac-tests, home-blood-collection, corporate-health-screening) | Drives `/services` + `/services/[slug]` |
| `src/lib/analyzers.ts` | 4 lab analyzers | Drives homepage Analyzers section + `/technology` + `hasEquipment` schema |
| `src/lib/blog.ts` | Loader for `content/blog/*.mdx` | Filters out `README*` and files starting with `_` or `.` |

Equipment images live at `public/equipment/*.jpg` (4 files). Analyzer cards gracefully fall back to a branded icon if an image is missing.

---

## 6. SEO commitments

These are non-negotiable — the whole content strategy depends on them.

- **One `<h1>` per page**, keyword-carrying. Subheadings carry secondary keywords (e.g. "Medical Diagnostic Services in Ja-Ela", "Our Collection Centres Across Ja-Ela, Kandana, Ragama & Wattala").
- **Canonical URL** on every page via `alternates: { canonical: "/..." }` in `Metadata`.
- **MedicalBusiness** + **FAQPage** + **WebSite** + **SiteNavigation** JSON-LD site-wide (rendered from `app/layout.tsx`).
- **BreadcrumbList** + per-page schema (`MedicalTest` / `MedicalProcedure` / `Article`) on detail pages.
- **OG image** auto-generated at 1200×630 via `app/opengraph-image.tsx` (`@vercel/og` / `ImageResponse`). Per-post OG titles on blog posts.
- **`aggregateRating` MUST stay omitted** until there are 10+ verifiable Google reviews. Fabricating it = Google manual action = ranking death.
- **No "% savings" claim** on packages until the Joint Pain & Fatigue Profile is re-priced (currently 4,500 > sum of parts 3,880).
- **Sitemap** auto-includes new towns, services, blog posts via the data files.
- **Phone display** is always `071 123 1954`. `tel:` links are always `+94711231954`. Never display `+94 71 123 1954` anywhere on the site.

---

## 7. Open `<<CONFIRM>>` items (search the codebase for `TODO <<CONFIRM>>`)

| Item | Where | Action when answered |
|---|---|---|
| GBP URL | `lib/seo.ts` `sameAs` | Replace `<<GBP_URL>>` with real URL |
| Facebook URL | `lib/seo.ts` `sameAs` | Same — the `.filter(u => !u.startsWith("<<"))` strips unconfirmed entries automatically |
| HQ geo lat/lng | `lib/seo.ts` commented `geo` block | Uncomment + paste values from Maps URL |
| Joint Pain & Fatigue Profile re-price | `lib/packages.ts` | Either re-price to ~3,400 or publish as-is, no % savings either way |

Email **`medilabstlukes@gmail.com`** was confirmed kept as Gmail. Do not change.

---

## 8. How to add content (no code needed)

### A new blog post
1. Edit on github.com: `content/blog/your-slug.mdx`
2. Front-matter template is in `content/blog/README.md`
3. Commit → Vercel deploys in ~30s → live at `/blog/your-slug`, sitemap auto-updated

### A new town (location)
1. Append an entry to `locations` in `src/lib/locations.ts` (slug, name, blurb, intro, landmarks, distanceFromHQ)
2. Push. New page at `/locations/<slug>` is automatic. Sitemap updates automatically.

### A new service
1. Append entry to `services` in `src/lib/services.ts` (slug, name, shortDesc, what, why, preparation, schemaType)
2. Push. New page + sitemap entry automatic.

### A new analyzer / equipment
1. Drop image at `public/equipment/<slug>.jpg` (recommended ~1200×900)
2. Append entry to `analyzers` in `src/lib/analyzers.ts`
3. Append matching entry to `medicalBusinessSchema.hasEquipment` in `src/lib/seo.ts`

### Price changes
1. Edit `src/lib/priceList.ts`. Optional `was: number` for strikethrough.
2. If a max/min price shifts, update `priceRange` in `lib/seo.ts` (currently `LKR 100–6,000`).

---

## 9. Conventions when writing code here

- **Server components by default.** Mark `"use client"` only for components that need hooks/state (Navbar scroll, MobileMenu, ScrollReveal animation, etc.).
- **Async `params` in Next 16.** Dynamic route pages receive `params: Promise<{ slug: string }>` — `await params` at the top of the function. Both `generateMetadata` and the page default export need this.
- **Path alias `@/*` → `src/*`** (defined in `tsconfig.json`).
- **Tailwind tokens**: prefer the branded ones (`bg-stLukes-500`, `text-stLukes-600`, `bg-stLukesRed-500`, `bg-stLukes-50`) — keeps the look consistent.
- **Images**: use `next/image` with `sizes`. Local files at `/public/...`. Remote → must be in `next.config.ts` `images.remotePatterns`.
- **JSON-LD** goes through `components/JsonLd.tsx`. Don't inline `<script>` tags.
- **Never expose the user's email** in code; the contact email is `medilabstlukes@gmail.com` (it's already public on the site, that's fine).
- **`npx tsc --noEmit`** before committing risky changes. Type check is part of "done".

---

## 10. Deploy / git workflow

- All work happens on `main`. There are no PRs in this project — commit, push, ship.
- Vercel auto-deploys `main` (~30s build, then live).
- Commit messages: imperative present, lowercase first word, then a colon if it's a type prefix (e.g. `feat:`, `fix(blog):`, `chore:`). End with the `Co-Authored-By: Claude` trailer.
- `.claude/` is intentionally untracked (local preview-server config). Don't commit it.

---

## 11. The /admin question

We deliberately did NOT add a CMS (Decap/TinaCMS). The MDX-in-repo workflow is the chosen approach. If a non-dev ever asks for a CMS, the layer to add is **Decap CMS** on top of the existing MDX — it writes back to `content/blog/*.mdx`, no data migration needed.

---

## 12. Useful repo-wide grep targets

```bash
grep -rn "TODO <<CONFIRM>>" src/      # open items to fix when client confirms
grep -rn "+94 71 123 1954" src/        # should be zero — phone display must be 071 format
grep -rn "info@stlukesmedilab" src/    # should be zero — email is gmail
grep -rn "was:" src/lib/priceList.ts   # currently-reduced prices (strikethrough on /price-list)
```

---

## 13. What's been built so far (high-level)

- Homepage with Hero, Features, Analyzers, SimpleSteps, Pricing, Locations, Blog teaser, Footer
- 5 standalone pages: `/about`, `/services`, `/technology`, `/packages`, `/locations`
- 7 town pages under `/locations/<town>` (each with unique copy)
- 4 service pages under `/services/<slug>`
- `/price-list` (server-rendered grouped, with client-side search + category filter)
- File-based blog (`/blog`, `/blog/<slug>`) with 3 starter posts
- `/privacy-policy`, `/terms`
- File-based favicon (`app/icon.png`, `app/apple-icon.png`)
- File-based OG image (`app/opengraph-image.tsx`, `app/twitter-image.tsx`) — 1200×630 branded PNG
- Mobile menu as a proper sheet (backdrop, body scroll lock, Escape, ARIA dialog)
- Google Search Console verified (HTML file + meta-tag, both methods)
- Sitemap submitted to GSC; 8 main pages indexing-requested
