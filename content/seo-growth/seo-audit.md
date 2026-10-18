# SEO Audit — St. Luke's Medical Laboratory

**Audit date:** 18 October 2026
**Canonical site:** https://www.stlukesmedilab.com (from `src/lib/seo.ts` `SITE`, root `metadataBase`, robots and sitemap)
**Sources checked:** the repository (`st-lukes-lab-web/`), the live site (robots.txt, sitemap.xml, `/blog`, a sample post), and `CLAUDE.md` business facts.
**Not checked (no access):** Google Search Console data, Google Business Profile insights, analytics, Lighthouse/PageSpeed runs on the live site, and a full broken-link crawl of external links.

---

## 1. Business facts found (source of truth: `src/lib/seo.ts` `NAP`)

| Field | Value | Status |
|---|---|---|
| Name | St. Luke's Medical Laboratory | Verified in code |
| Address | No. 67, Old Negombo Road, Ja-Ela 11350, Western Province, LK | Verified in code |
| Phone | 071 123 1954 (`tel:+94711231954`) | Verified in code |
| WhatsApp | `wa.me/94711231954` (FloatingWhatsApp) | Verified in code |
| Email | medilabstlukes@gmail.com | Verified in code |
| Hours | Mon–Sat 07:00–19:30, Sun 07:30–12:30 | Verified in code |
| Walk-in location | Ja-Ela HQ only (one physical address) | Verified |
| Home-collection towns | Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama, Thudella; scheduled visits to Seeduwa, Katunayake, Negombo | Verified in `lib/locations.ts` |
| Equipment | CLIA immunoassay analyser, BioSystems A15, Audicom electrolyte analyser, Medonic haematology analyser | Verified in `lib/analyzers.ts` |
| Test prices | 58 tests, LKR 100–7,000 | Verified in `lib/priceList.ts` |
| Report turnaround | "Most reports within 24 hours" | **Stated by the site, not independently verified** |
| Accreditation | None stated in business data | **Do not claim** |
| Google rating | 5.0 from 3 reviews | Correctly omitted from schema |

## 2. Technical SEO — what is working

- Next.js 16 App Router; every page server-rendered or statically generated → content is crawlable HTML.
- `robots.txt` allows all and points to the sitemap; live returns 200.
- `sitemap.xml` is generated from data files and includes blog posts automatically (63 URLs live).
- Canonicals set per page (`alternates.canonical`); confirmed live on a blog post.
- Site-wide `MedicalBusiness`, `WebSite`, `ItemList` navigation and `FAQPage` JSON-LD; `BreadcrumbList` + `MedicalWebPage` on posts; `FAQPage` per town page.
- Drafts (`draft: true`) are excluded from production builds and the sitemap.
- One `<h1>` per page, design tokens, accessible components (per `CLAUDE.md` §13).
- Google Search Console verified.

## 3. Issues found

### Fixed in this cycle (code)

| # | Issue | Fix |
|---|---|---|
| T1 | Blog posts had **no `og:image`** (the post's `openGraph` object overrode the root image, so shares showed no picture). Confirmed on the live fatty-liver post. | Post hero image now emitted as `og:image` via the existing `ogImageUrl()` helper. |
| T2 | Article schema typed the author as a `Person` even when the byline is the organisation. | Organisation bylines now reference `#organization`. |
| T3 | Article schema lacked `url`, `image` and `dateModified`. | Added; `dateModified` uses a new optional `updated` frontmatter field and falls back to `date` (truthful — no false "updated" dates). |
| T4 | Hero images always rendered with `alt=""`. | New optional `imageAlt` frontmatter field. Existing posts unchanged (still decorative). |
| T5 | Drafts had no explicit `noindex` if ever rendered outside production. | Drafts now emit `robots: noindex, nofollow`. |

### Recommended (not changed — needs owner decision)

| # | Issue | Recommendation |
|---|---|---|
| R1 | **No analytics installed.** 37 `data-track` attributes exist (phone, WhatsApp, package booking) but nothing reads them, so calls and WhatsApp clicks from articles cannot be measured. | Add GA4 (or Vercel Analytics custom events) wired to the existing `data-track` attributes. See `performance-tracking-plan.md`. Requires a privacy-policy update. |
| R2 | Most posts' `<title>` exceed ~60 characters (e.g. 106 chars for the BioSystems post) and will be truncated. Only 3 posts set `seoTitle`. | Add `seoTitle` (≤ 60 chars) to older posts, starting with the highest-impression ones once GSC data is reviewed. |
| R3 | Meta descriptions on older posts reuse long excerpts (> 155 chars). | Add `seoDescription` to older posts. |
| R4 | **Inconsistent fasting advice for the LFT:** `lib/services.ts` (blood-tests) says LFT needs 8–12 h fasting; `lib/testPages.ts` says it does not usually. | Lab to confirm its actual policy; align both. |
| R5 | **Lipid fasting:** the site says fasting is required; current EAS/EFLM consensus (2016) says non-fasting is acceptable for many routine checks. | Lab to confirm its policy. The new fasting article states the lab's current policy and mentions the consensus. |
| R6 | `lib/services.ts` mentions **Vitamin B12** and **Troponin**, which are not on the price list. | Confirm whether offered; remove if not. |
| R7 | Wattala FAQ in `lib/locations.ts` says "accredited-standard tests". No accreditation is recorded. | Remove "accredited" unless verified. |
| R8 | Old posts carry bylines "Dr. L. Perera", "Sarah F.", "Medical Team" with no supporting profile; `understanding-fasting-blood-sugar-results` publishes numeric reference ranges, against the `testPages.ts` rule. | Confirm these people and credentials exist; otherwise change to the organisation byline. Review the FBS ranges post with a qualified reviewer. |
| R9 | Existing posts show `reviewedBy: "B.G.C.S.K. Perera (MLT)"` in frontmatter but it is not displayed or in schema. | If confirmed, render a visible "Reviewed by" line and add `reviewedBy` to schema. Not done now because the claim is unconfirmed for this audit. |
| R10 | No test page for Serum Uric Acid or UACR although both are priced. | Add `testPages.ts` entries (after review) so the new articles have a matching price page. |
| R11 | Many posts reuse the same five Unsplash images. | Commission or license unique images (briefs are in each article file). |
| R12 | Lint fails on two pre-existing errors (`ClientPriceList.tsx:46`, `TestDetailDrawer.tsx:143`). Build and type-check pass. | Fix separately. |
| R13 | Facebook URL and geo coordinates remain `<<CONFIRM>>`. | Supply to strengthen `sameAs`/`geo`. |
| R14 | `FAQPage` rich results are restricted by Google to well-known government and health sites (since Aug 2023). | Keep FAQ content for readers and answer engines; do not expect FAQ rich snippets. Not added to the new posts. |

## 4. Content inventory (20 live posts before this cycle)

Covered: dengue (×4 incl. Sinhala), chikungunya, leptospirosis, fatty liver, HbA1c, thyroid/TSH, vitamin D (×2), lipid profile, FBS ranges, FBC/Medonic, biochemistry/BioSystems, CLIA, electrolytes/Audicom, ECG, home collection (Negombo/Seeduwa), pre-employment (Katunayake).

**Gaps** (verified services with no in-depth guide): general test preparation/fasting, urine testing (UFR), kidney tests (creatinine/eGFR/UACR — two kidney packages exist), uric acid, reading a lab report. These became this cycle's five articles.

## 5. Local SEO

- NAP consistent across code (single `NAP` constant). Phone display format consistent.
- Town pages already cover "blood test in [town]" intent with unique copy; **a new Wattala article was rejected** to avoid competing with `/locations/wattala` (doorway risk).
- GBP: link via Knowledge Graph ID in `sameAs`. Recommendations: add the five new articles as GBP "Updates" after publication; add services list (UFR, kidney tests, uric acid) to GBP; ask genuine patients for reviews (no incentives) — aggregateRating stays omitted until 10+ reviews.
