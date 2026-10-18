# Keyword & Topic Research — Cycle 1 (October 2026)

## Method and honest limits

- **No keyword-volume tool was available.** Ahrefs/Similarweb/Supermetrics connectors were not authorised and Search Console is not connected to this workspace. **No search volumes, difficulty scores or rankings are stated anywhere in this cycle** — none were invented.
- Evidence used instead: (1) the lab's verified test menu (`lib/priceList.ts`, `lib/packages.ts`); (2) gaps in the existing 20 posts and 19 test pages; (3) web search results for each query family, to see what currently answers it; (4) the existing site strategy in `CLAUDE.md` (price transparency, hyper-local, technical SEO).
- **Next cycle must start from Search Console** (Performance → Queries, last 3 months) to replace judgement with data.

## What the SERP checks showed

| Query family | What currently ranks (observed) | Opportunity |
|---|---|---|
| "fasting before blood test sri lanka" | Overseas hospital FAQs (US, UK NHS trusts, Mauritius, India); one Durdans package page with no instructions. No Sri Lankan lab answers it fully. | High — a clear, test-by-test answer tied to LKR test pages. |
| "urine full report test sri lanka / how to collect" | Overseas PDFs + one Sri Lankan university SOP. Few patient-friendly Sri Lankan pages. | High — "UFR" is Sri Lankan terminology; our `/price-list/ufr` page has no guide. |
| "kidney function test creatinine eGFR sri lanka" | Academic CKDu papers; NICE guidance. Little patient-level Sri Lankan content. | Medium–high — two kidney packages exist to link to. |
| "uric acid test sri lanka price" | Indian/Pakistani lab listings only. No Sri Lankan price page found. | High for price-intent; we publish LKR 850. |
| "how to read blood test report" | Generic international health sites. | Medium — evergreen, supports every test page, strong AEO fit. |
| "medical laboratory wattala / blood test wattala" | Hemas Hospital Wattala (Wikipedia/news), job listings. | Already targeted by `/locations/wattala`. A blog article would compete with it → **rejected**. |

## Candidate list and scoring

Scale 1–3 per criterion (3 = strong). Criteria: (1) verified service, (2) demand evidence, (3) local relevance, (4) patient value, (5) answerable intent, (6) visit potential, (7) links to a service page, (8) not duplicated, (9) trustworthy sources, (10) calm conversion.

| Candidate | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Total | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Fasting before a blood test (test-by-test) | 3 | 3 | 2 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | **29** | ✅ Selected |
| Urine Full Report — collection & contents | 3 | 2 | 2 | 3 | 3 | 2 | 3 | 3 | 3 | 3 | **27** | ✅ Selected |
| Kidney tests: creatinine, eGFR, UACR | 3 | 2 | 2 | 3 | 3 | 2 | 3 | 3 | 3 | 3 | **27** | ✅ Selected |
| Uric acid test & gout | 3 | 2 | 2 | 3 | 3 | 3 | 2 | 3 | 3 | 3 | **27** | ✅ Selected |
| How to read your lab report | 3 | 2 | 2 | 3 | 3 | 2 | 3 | 3 | 3 | 3 | **27** | ✅ Selected |
| Blood test in Wattala (local article) | 3 | 2 | 3 | 1 | 2 | 2 | 3 | **1** | 2 | 3 | 22 | ❌ Duplicates `/locations/wattala` |
| OGTT / glucose test in pregnancy | 3 | 2 | 2 | 3 | 2 | 2 | 3 | 3 | 2 | 2 | 24 | ⏭ Next cycle — needs obstetric reviewer and MOH antenatal guidance |
| Ferritin & iron deficiency | 3 | 2 | 2 | 3 | 3 | 2 | 3 | 3 | 3 | 3 | 27 | ⏭ Next cycle (kept to 5) |
| CRP vs ESR | 3 | 1 | 1 | 2 | 3 | 1 | 3 | 3 | 3 | 3 | 23 | ⏭ Later |
| Vitamin B12 test | **1** | 2 | 1 | 3 | 3 | 2 | 1 | 3 | 3 | 3 | 22 | ❌ Not on price list — unverified service |
| Troponin / heart attack test | **1** | 2 | 1 | 2 | 2 | 1 | 2 | 3 | 3 | **1** | 18 | ❌ Unverified service; emergency topic |

## Selected articles — keyword map

| # | Primary keyword | Secondary keywords | Intent | Audience | Reader's main question |
|---|---|---|---|---|---|
| 1 | fasting before blood test | do I need to fast for blood test; can I drink water before blood test; fasting for lipid profile; fasting blood sugar preparation; HbA1c fasting | Informational → transactional | Anyone with a test request form | "Do I need to fast, and for how long?" |
| 2 | urine full report (UFR) | UFR test; urine test sample collection; clean catch urine; midstream urine sample; pus cells in urine | Informational + how-to | Patients given a UFR request | "How do I collect it properly, and what does it check?" |
| 3 | kidney function test | serum creatinine; eGFR test; UACR / urine microalbumin; blood urea; kidney test for diabetes | Informational | People with diabetes/BP, their families | "Which kidney tests do I need, and what do they show?" |
| 4 | uric acid test | uric acid test price Sri Lanka; gout blood test; high uric acid; uric acid fasting | Informational + price | Adults with joint pain / a high result | "Does a high uric acid mean gout? Do I need to fast?" |
| 5 | how to read lab report | blood test report explained; reference range meaning; H and L on blood test; normal range lab report | Informational | Anyone who just received a report | "What do these numbers and flags mean?" |

Local modifiers (Ja-Ela, Wattala, Ragama, Kandana, Welisara/Walisara) are used in body copy and CTAs only where they describe real walk-in/home-collection coverage — not stuffed into titles.
