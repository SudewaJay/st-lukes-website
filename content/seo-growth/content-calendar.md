# Content Calendar — Cycle 1

All five articles are committed to the repo as **`draft: true`**. They do not appear on the live site, in `/blog`, or in the sitemap until a qualified reviewer approves them and the owner explicitly authorises publication.

Suggested order: weekly, so each can be indexed and checked before the next goes out. Dates are proposals and assume review is complete; slip them rather than publish unreviewed.

| Order | Proposed publish date | Article | File | Reviewer type needed | Status |
|---|---|---|---|---|---|
| 1 | Week of 26 Oct 2026 | Do You Need to Fast Before a Blood Test? | `content/blog/fasting-before-blood-test-guide.mdx` | Pathologist / senior MLT + lab manager (lab policy on lipid & LFT fasting) | Draft — medical review pending |
| 2 | Week of 2 Nov 2026 | Urine Full Report (UFR): How to Collect Your Sample | `content/blog/urine-full-report-ufr-test-guide.mdx` | Pathologist / MLT (confirm culture availability, transport time) | Draft — medical review pending |
| 3 | Week of 9 Nov 2026 | How to Read Your Lab Report | `content/blog/how-to-read-your-lab-report.mdx` | Pathologist / MLT (match report layout, delivery method) | Draft — medical review pending |
| 4 | Week of 16 Nov 2026 | Kidney Function Tests Explained | `content/blog/kidney-function-tests-creatinine-egfr-uacr.mdx` | Physician or chemical pathologist | Draft — medical review pending |
| 5 | Week of 23 Nov 2026 | Uric Acid Test: Gout and Joint Pain | `content/blog/uric-acid-test-gout-joint-pain.mdx` | Physician (gout guidance) | Draft — medical review pending |

Why this order: articles 1–3 are preparation/process content that every other page links to, so they build internal-link equity first; 4–5 are condition-adjacent and need the more senior clinical review.

## Publication steps per article (owner only)

1. Reviewer completes the checklist in `medical-review-checklist.md` and signs off.
2. Edit the MDX frontmatter: set `date` to the real publication date, add `reviewedBy: "<Name, qualification>"`, remove `draft: true`.
3. `npm run build` → confirm the post appears in the build output.
4. Commit, push to `main`, then `npx vercel --prod` (deploy is manual — see `CLAUDE.md` §10).
5. In Search Console: URL Inspection → Request indexing.
6. Add a Google Business Profile update linking to the article.

## Next cycle candidates (from keyword-research.md)

Ferritin & iron deficiency; OGTT/GCT in pregnancy (needs obstetric review); CRP vs ESR — to be re-prioritised using real Search Console queries.
