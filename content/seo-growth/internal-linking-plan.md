# Internal Linking Plan — Cycle 1

## Links already inside the five new articles (verified: all 34 internal targets resolve)

| From | To (descriptive anchor) |
|---|---|
| 01 Fasting | 11 test pages (FBS, OGTT, Lipid Profile, PPBS, HbA1c, FBC, TSH, Vitamin D, LFT, Serum Creatinine, UFR); home collection service; all 10 town pages; price list |
| 02 UFR | `/price-list/ufr`, FBS, HbA1c, packages, home collection; → 03 Kidney, → 05 Lab report |
| 03 Kidney | Serum Creatinine, Electrolytes, UFR, Renal Profile pages; packages; technology; Ragama, Wattala, Kandana; → 02 UFR, → 01 Fasting |
| 04 Uric acid | Price list `?q=uric`; packages; ESR, CRP, FBC; technology; → 03 Kidney, → chikungunya post, → 01 Fasting |
| 05 Lab report | Price list, FBC, TSH, packages, home collection; → 01 Fasting, → 02 UFR |

## Links to add on existing pages — only AFTER each article is published

Adding these earlier would link to a 404 in production (drafts are not built).

| Existing page / file | Change | Anchor text | Target |
|---|---|---|---|
| `src/lib/testPages.ts` → `ufr` | set `guide` | (auto: "Read the full guide") | `urine-full-report-ufr-test-guide` |
| `src/lib/testPages.ts` → `serum-creatinine` | set `guide` | (auto) | `kidney-function-tests-creatinine-egfr-uacr` |
| `src/lib/testPages.ts` → `renal-profile` | set `guide` | (auto) | `kidney-function-tests-creatinine-egfr-uacr` |
| `src/lib/testPages.ts` → `ogtt`, `ppbs` | set `guide` | (auto) | `fasting-before-blood-test-guide` |
| `src/lib/seo.ts` FAQ "Do I need to fast…" | append link in on-page FAQ (not schema text) | "see which tests need fasting" | `/blog/fasting-before-blood-test-guide` |
| `src/lib/services.ts` → `blood-tests` preparation | add sentence | "our fasting guide" | `/blog/fasting-before-blood-test-guide` |
| `content/blog/understanding-fasting-blood-sugar-results.mdx` | add line | "how to prepare for a fasting test" | `/blog/fasting-before-blood-test-guide` |
| `content/blog/why-regular-lipid-profiling-is-crucial.mdx` | add line | "whether you need to fast for a lipid profile" | `/blog/fasting-before-blood-test-guide` |
| `content/blog/hba1c-prediabetes-test-ja-ela.mdx` | add line in kidney/complications section if present | "kidney tests for people with diabetes" | `/blog/kidney-function-tests-creatinine-egfr-uacr` |
| `content/blog/leptospirosis-rat-fever-test-ja-ela-ragama.mdx` | add line where creatinine is mentioned | "what creatinine and eGFR measure" | `/blog/kidney-function-tests-creatinine-egfr-uacr` |
| `content/blog/chikungunya-test-ja-ela-wattala.mdx` | add line in joint-pain section | "uric acid testing for joint pain" | `/blog/uric-acid-test-gout-joint-pain` |
| `/packages` Kidney Health Profile copy | add link | "what uric acid and eGFR show" | articles 03/04 |
| Each older Lab Technology post | add one line | "how to read your lab report" | `/blog/how-to-read-your-lab-report` |

## New test pages recommended (after review)

`testPages.ts` entries for **Serum Uric Acid** (`/price-list/uric-acid`) and **Urine Microalbumin / UACR** (`/price-list/uacr`), each with `guide` pointing to articles 04 and 03. Then replace the `/price-list?q=uric` link in article 04.

## Rules

- Descriptive anchors (never "click here"); max one link to the same target per section.
- Never link to a draft from a published page.
- Keep the town pages as the only "blood test in [town]" targets; blog posts link *to* them, not compete with them.
