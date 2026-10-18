# SEO Implementation Report — Cycle 1

**Date:** 18 October 2026 · **Nothing was committed, pushed or deployed.** The live site is unchanged.

## 1. What was done

### Content (5 articles, all `draft: true`)

| # | Route (when published) | Body words | File |
|---|---|---|---|
| 01 | `/blog/fasting-before-blood-test-guide` | ~1,415 | `content/blog/fasting-before-blood-test-guide.mdx` |
| 02 | `/blog/urine-full-report-ufr-test-guide` | ~1,404 | `content/blog/urine-full-report-ufr-test-guide.mdx` |
| 03 | `/blog/kidney-function-tests-creatinine-egfr-uacr` | ~1,470 | `content/blog/kidney-function-tests-creatinine-egfr-uacr.mdx` |
| 04 | `/blog/uric-acid-test-gout-joint-pain` | ~1,185 | `content/blog/uric-acid-test-gout-joint-pain.mdx` |
| 05 | `/blog/how-to-read-your-lab-report` | ~1,297 | `content/blog/how-to-read-your-lab-report.mdx` |

Each has: H1, `seoTitle` (≤ 55 chars), `seoDescription` (≤ 154 chars), a quick-answer block near the top, question-based H2/H3s, cited sources, an FAQ section, local walk-in/home-collection CTA using verified NAP, an educational disclaimer and `imageAlt`. No `reviewedBy` is set.

### Code (3 files, small, no new dependencies)

| File | Change |
|---|---|
| `src/lib/blog.ts` | New optional frontmatter fields `imageAlt`, `updated`. `ogImageUrl()` now also crops Unsplash images to 1200×630. |
| `src/app/blog/[slug]/page.tsx` | Posts now emit `og:image` (previously none); `MedicalWebPage` schema gains `url`, `image`, `dateModified`; organisation bylines reference `#organization` instead of a fake `Person`; hero `alt` from `imageAlt`; drafts emit `noindex`. Existing posts unaffected except gaining og:image and the schema fields. |
| `content/blog/README.md` | Documents the new fields and the `reviewedBy` rule. |

### Reports (this folder)
`seo-audit.md`, `keyword-research.md`, `content-calendar.md`, `blog-01…05-*.md`, `internal-linking-plan.md`, `medical-review-checklist.md`, `performance-tracking-plan.md`, this file.

## 2. QA results

| # | Check | Result |
|---|---|---|
| 1 | `npx tsc --noEmit` | ✅ Pass |
| 1 | `npm run build` (real repo) | ✅ Pass. 20 blog routes, sitemap 63 URLs — drafts correctly excluded |
| 1 | `npm run lint` | ❌ 2 errors, **both pre-existing** in files not touched (`ClientPriceList.tsx:46`, `TestDetailDrawer.tsx:143`) |
| 2 | Five article routes | ✅ Built and served from a scratch copy with drafts un-drafted (`next build` + `next start`): all 5 generated; blog index lists them; sitemap 68 URLs |
| 3 | Metadata & canonical | ✅ Unique titles/descriptions; canonical = `https://www.stlukesmedilab.com/blog/<slug>`; one `<h1>` each; og:image present |
| 4 | Sitemap integration | ✅ Automatic via `getAllPosts()`; verified 63 → 68 when published |
| 5 | Structured data | ✅ JSON-LD parses; `MedicalWebPage` has url, image, datePublished, dateModified, org author/publisher; `BreadcrumbList` present. ⚠️ Not run through Google's Rich Results Test (needs a public URL) — do this on publication |
| 6 | Internal links | ✅ 34/34 internal targets exist |
| 6 | External links | ✅ 10 return 200. ⚠️ 2 DOI links redirect correctly to the publishers (OUP, BMC) but publishers block automated fetches — open in a browser to confirm |
| 7 | Mobile layout | ✅ 375px: no horizontal page scroll; tables scroll inside their frame; hero alt rendered. Screen-reader/keyboard testing not performed beyond existing components |
| 8 | Duplicate intent | ✅ None of the five overlap existing posts; Wattala article rejected to avoid competing with `/locations/wattala` |
| 9 | Medical claims sourced | ⚠️ Mostly — 4 claims flagged as general clinical statements without a direct citation (see checklist) |
| 10 | Claims needing verification | See `medical-review-checklist.md` (8 lab-policy questions P1–P8) |
| 11 | No patient data / fabricated credentials | ✅ None introduced; no reviewer named; organisation byline only |
| 12 | Live dev server (`npm run dev`) | ⚠️ Could not be used: it hangs at "Starting…" because Next infers the workspace root as the home folder (a stray `~/package-lock.json`). Fix: set `turbopack.root` in `next.config.ts` or delete the stray lockfile. Production build is unaffected |

Not performed: Lighthouse/PageSpeed runs, Search Console baseline, analytics review, Sinhala/Tamil versions (not generated — terminology needs native-speaker medical review; recommend Sinhala versions of 01 and 02 next, matching existing `-si` posts).

## 3. Information still needed from the lab

See `medical-review-checklist.md` P1–P8, plus audit items R4–R9 (LFT/lipid fasting consistency, Vitamin B12/Troponin listing, "accredited" wording on the Wattala page, old post bylines/credentials, MLT reviewer confirmation).

## 4. Next steps (in order)

1. Medical reviewer completes the checklist; lab answers P1–P8.
2. Owner: commit the code changes (they are safe to deploy now — drafts stay hidden) and decide on analytics (`performance-tracking-plan.md` Step 1).
3. Record the Search Console baseline.
4. Publish one article per week per `content-calendar.md`, then add the post-publication internal links from `internal-linking-plan.md`.
5. Replace placeholder images using each article's image brief.
