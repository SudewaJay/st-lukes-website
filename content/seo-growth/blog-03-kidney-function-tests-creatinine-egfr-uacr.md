# Blog 03 — Kidney Function Tests Explained: Creatinine, eGFR, Urea and Urine Albumin (UACR)

> **Review status: MEDICAL REVIEW PENDING.** Not approved for publication. Implemented as `draft: true` in `content/blog/kidney-function-tests-creatinine-egfr-uacr.mdx` — that MDX file is the canonical copy; this file is the brief and a snapshot of the article at creation.

## SEO metadata

| Field | Value |
|---|---|
| H1 | Kidney Function Tests Explained: Creatinine, eGFR, Urea and Urine Albumin (UACR) |
| Alternative headline | Kidney Blood and Urine Tests: What Creatinine, eGFR and UACR Tell Your Doctor |
| URL slug | `/blog/kidney-function-tests-creatinine-egfr-uacr` |
| Canonical | `https://www.stlukesmedilab.com/blog/kidney-function-tests-creatinine-egfr-uacr` |
| Meta title (`seoTitle`) | Kidney Function Test: Creatinine, eGFR & UACR Explained (55 chars; layout appends the brand) |
| Meta description (`seoDescription`) | What creatinine, eGFR, urea and urine albumin (UACR) show about your kidneys, who is usually tested, how to prepare, and LKR prices at St. Luke's, Ja-Ela. (154 chars) |
| Primary keyword | kidney function test |
| Secondary keywords | serum creatinine; eGFR test; UACR; urine microalbumin; blood urea; kidney test for diabetes |
| Search intent | Informational |
| Audience | People with diabetes or high blood pressure and their families; people with an abnormal creatinine |
| Reader's main question | Which kidney tests do I need and what do they show? |
| Unique angle | Pairs blood (eGFR) and urine (UACR) tests as NICE does, maps each to an LKR price and to the two kidney packages; clarifies CKDu context for Western Province readers without alarm. |
| Verified lab service | Serum Creatinine with GFR, Blood Urea, Serum Electrolytes, Urine Microalbumin/UACR, RFT, Kidney Health Profile, Diabetic Kidney Profile |
| Conversion goal | Book Kidney Health / Diabetic Kidney Profile; repeat-monitoring home visits |
| Reason for selection | Two kidney packages and four kidney test pages had no supporting guide; strong fit for diabetes-heavy local population. |

## Internal links used
/price-list/serum-creatinine, /price-list/serum-electrolytes, /price-list/ufr, /price-list/renal-profile, /packages, /technology, /services/home-blood-collection, /locations/ragama, /locations/wattala, /locations/kandana, /blog/urine-full-report-ufr-test-guide, /blog/fasting-before-blood-test-guide

## Medical sources
MedlinePlus — Creatinine Test; NICE NG203; BMC Nephrology 2019 (doi 10.1186/s12882-019-1477-9); MedlinePlus — How to Understand Your Lab Results — full links in the Sources section of the article.

## Call to action
In-article: walk-in details for the Ja-Ela lab, home-collection towns and `tel:` link (071 123 1954). Template: the existing "Ready to book a test?" panel (call + price list). WhatsApp: the site-wide floating button. No new data-collection forms were added.

## Image brief
- **Brief:** Lab technician loading serum tubes into a biochemistry analyser (photo of the lab's own BioSystems A15 preferred).
- **Suggested filename:** `kidney-function-test-biosystems-a15-ja-ela.jpg` → `public/blog/kidney-function-test-biosystems-a15-ja-ela.jpg`, ≥1200×675, WebP/JPEG under ~200 KB
- **Alt text:** Serum samples being loaded into an automated biochemistry analyser at St. Luke's Medical Laboratory, Ja-Ela
- **Current placeholder:** reused Unsplash image (marked `TODO <<CONFIRM>>` in frontmatter).

## Author and reviewer (verify before publishing)
- **Author:** St. Luke's Medical Laboratory (organisation byline — matches recent posts). Drafted with AI assistance; requires human editorial approval.
- **Medical reviewer:** `<<PENDING — name, qualification, registration>>`. Do **not** add `reviewedBy` until the person has actually reviewed and approved this text.

## Structured data
Rendered automatically by `src/app/blog/[slug]/page.tsx`: `MedicalWebPage` (headline, description, url, image, datePublished, dateModified, organisation author/publisher) + `BreadcrumbList`; site-wide `MedicalBusiness` from the layout. Recommended after review: add `reviewedBy` (Person with credentials) and `lastReviewed`. `FAQPage` markup intentionally **not** added (Google restricts FAQ rich results to authoritative government/health sites; the FAQ content still serves readers and answer engines).

## Pre-publication fact-check
See `medical-review-checklist.md` → "Article 03" for the claim-by-claim list. Also: re-check every LKR price against `src/lib/priceList.ts` on the day of publication.

---

# Full article

> **Quick answer:** The two core kidney tests are a **blood test for creatinine, converted into an eGFR** (how well the kidneys filter), and a **urine albumin-to-creatinine ratio, or UACR** (whether the kidneys are leaking protein). Doctors usually use them **together**, because early kidney disease can show up in one before the other. Neither needs fasting. At St. Luke's in Ja-Ela, **Serum Creatinine with GFR costs LKR 700** and **Urine Microalbumin / UACR costs LKR 1,400**. A single abnormal result does not confirm kidney disease — it is normally repeated and read by your doctor alongside your health history.

Kidney disease is often called "silent" because the kidneys can lose a good deal of function before a person feels anything. That is why doctors check the kidneys with blood and urine tests in people with diabetes, high blood pressure and other risk factors — rather than waiting for symptoms. This guide explains the tests you are most likely to see on a request form.

## The main kidney tests at a glance

| Test | Sample | What it tells your doctor | Price at St. Luke's |
|---|---|---|---|
| [Serum Creatinine with GFR](/price-list/serum-creatinine) | Blood | How well the kidneys are filtering waste (eGFR) | LKR 700 |
| Serum Creatinine | Blood | The raw creatinine level | LKR 650 |
| Blood Urea | Blood | Another waste product; affected by hydration and diet too | LKR 650 |
| [Serum Electrolytes](/price-list/serum-electrolytes) | Blood | Sodium, potassium and chloride balance | LKR 1,350 |
| Urine Microalbumin / UACR | Urine | Small amounts of protein leaking into urine | LKR 1,400 |
| [Urine Full Report](/price-list/ufr) | Urine | A broad urine screen (not a sensitive protein test) | LKR 400 |
| [Renal Function Test (RFT)](/price-list/renal-profile) | Blood | A grouped kidney panel | LKR 2,200 |

## Creatinine and eGFR: how well are the kidneys filtering?

**Creatinine** is a waste product from normal muscle activity. Healthy kidneys filter it out of the blood at a fairly steady rate, so when filtering slows, creatinine tends to rise.

On its own, though, creatinine is an imperfect measure, because it depends on how much muscle you have, your age, diet and hydration. That is why labs convert it into an **estimated glomerular filtration rate (eGFR)** using an equation that includes factors such as age and sex. MedlinePlus notes that eGFR is generally considered **more accurate than creatinine alone**, but also that **creatinine can stay normal in early kidney disease** and that **a high creatinine does not always mean kidney disease** ([MedlinePlus: Creatinine Test](https://medlineplus.gov/lab-tests/creatinine-test/)).

Things that can temporarily push creatinine up include **dehydration, intense exercise and a large meat meal**. Some medicines and supplements can also affect it, so tell your doctor everything you take.

## UACR: are the kidneys leaking protein?

Healthy kidneys keep almost all protein in the blood. One of the earliest signs of kidney damage — especially in diabetes and high blood pressure — is a small amount of a protein called **albumin** appearing in the urine.

The **urine albumin-to-creatinine ratio (UACR)** measures this precisely from a single urine sample. The UK's National Institute for Health and Care Excellence (NICE) recommends using **ACR rather than a dipstick** to detect protein in the urine, because it is more sensitive at low levels ([NICE guideline NG203](https://www.nice.org.uk/guidance/ng203)). The "albumin" line on a routine [Urine Full Report](/blog/urine-full-report-ufr-test-guide) is useful as a broad screen, but it is not a substitute for a UACR when kidney damage is the question.

Because exercise, fever, infection and periods can raise urine albumin temporarily, doctors usually **confirm a raised UACR with a repeat sample** before drawing conclusions.

## Who is usually tested?

NICE recommends offering kidney testing with eGFR and ACR to adults with risk factors including ([NICE NG203](https://www.nice.org.uk/guidance/ng203)):

- **Diabetes**
- **High blood pressure**
- **Previous acute kidney injury**
- **Cardiovascular disease**
- **Gout**
- **A family history of kidney failure** or inherited kidney disease
- **Blood or protein found in the urine** by chance
- Some conditions that affect several organs, such as lupus

Doctors also monitor kidney function in people taking certain long-term medicines that can affect the kidneys. NICE specifically notes that **age, sex, ethnicity or weight alone** are not reasons to test without other risk factors.

### A note on kidney disease in Sri Lanka

You may have heard about chronic kidney disease of uncertain cause (CKDu) in Sri Lanka. Research on CKDu has focused mainly on dry-zone farming regions such as the North Central and Uva provinces, and screening studies there also rely on eGFR and urine albumin ([BMC Nephrology, 2019](https://doi.org/10.1186/s12882-019-1477-9)). For most people around Ja-Ela, the reasons a doctor checks the kidneys are more often diabetes, high blood pressure and the other risk factors listed above.

## How to prepare

- **No fasting** is needed for creatinine, eGFR, urea, electrolytes or UACR. If your form also includes a [fasting test](/blog/fasting-before-blood-test-guide), fast for that one.
- **Avoid a very large meat meal and heavy exercise** the evening before a creatinine test.
- **Drink normally** — neither dehydrated nor over-hydrated.
- For UACR, a **first-morning urine sample** is often preferred — follow your doctor's instructions.
- **Keep taking your medicines** unless the doctor who requested the test tells you otherwise.

## Reading the result — what a number can and cannot tell you

Kidney disease is generally not diagnosed from a single test. Guidelines describe chronic kidney disease in terms of **abnormal results that persist for more than three months**, and they grade it using **both eGFR and ACR together** ([NICE NG203](https://www.nice.org.uk/guidance/ng203)). That is why your doctor may:

- **repeat a test** before making any decision,
- **look at the trend** over several results (ideally from the same laboratory), and
- consider your blood pressure, blood sugar, medicines and other findings.

We deliberately do not list cut-off numbers here. Reference ranges vary with the method and with age and sex, and your report shows the range used for your sample. Please discuss your results with your doctor rather than drawing conclusions from the number alone.

## Kidney tests at St. Luke's, Ja-Ela

We run blood chemistry on our **BioSystems A15** biochemistry analyser and electrolytes on a dedicated **Audicom** electrolyte analyser — see [our lab technology](/technology).

If your doctor has asked for several kidney tests, two of our [health packages](/packages) group them:

- **Kidney Health Profile — LKR 3,500:** Serum Electrolytes, Ionized Calcium, Serum Creatinine with GFR, Serum Uric Acid and Urine Full Report.
- **Diabetic Kidney Profile — LKR 3,600:** Urine Microalbumin (UACR), Serum Electrolytes, Ionized Calcium and Serum Creatinine with GFR.

Walk in to our lab at **No. 67, Old Negombo Road, Ja-Ela** (Mon–Sat 07:00–19:30, Sun 07:30–12:30), or book [home collection](/services/home-blood-collection) — useful for regular monitoring in [Ragama](/locations/ragama), [Wattala](/locations/wattala), [Kandana](/locations/kandana) and the surrounding towns. Call [071 123 1954](tel:+94711231954) and read out your request form; we will confirm the tests and price before you come.

## Frequently asked questions

### What is the difference between creatinine and eGFR?
Creatinine is the measured level of a waste product in your blood. eGFR is a calculated estimate of how well your kidneys filter, worked out from creatinine and factors such as age and sex. eGFR is generally more informative than creatinine alone.

### Do I need to fast for a kidney function test?
No. Creatinine, eGFR, urea, electrolytes and UACR do not need fasting. Avoid a very large meat meal and heavy exercise the evening before.

### Is UACR the same as the albumin on my urine report?
No. The albumin line on a Urine Full Report is a rough screen. UACR is a more sensitive measurement designed to pick up small amounts of albumin, which matters most for people with diabetes or high blood pressure.

### My creatinine is slightly high. Do I have kidney disease?
Not necessarily. Dehydration, exercise, a high-meat meal, muscle mass and some medicines can raise creatinine. Your doctor will usually repeat the test and look at eGFR, urine albumin and your overall health before reaching any conclusion.

### How often should kidney function be checked?
That depends on your health and is decided by your doctor. People with diabetes or high blood pressure are commonly checked at least once a year.

---

## Sources

- MedlinePlus. [Creatinine Test](https://medlineplus.gov/lab-tests/creatinine-test/).
- National Institute for Health and Care Excellence. [Chronic kidney disease: assessment and management (NG203)](https://www.nice.org.uk/guidance/ng203).
- *BMC Nephrology*, 2019. [Article 10.1186/s12882-019-1477-9](https://doi.org/10.1186/s12882-019-1477-9) — eGFR and CKDu screening in Sri Lanka (reviewer to confirm full citation).
- MedlinePlus. [How to Understand Your Lab Results](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/).

*This article is general health information, not medical advice. Do not start, stop or change any medicine based on a test result without speaking to your doctor. If you notice swelling, passing much less urine than usual, or feel very unwell, seek medical care promptly.*
