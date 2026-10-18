# Blog 05 — How to Read Your Lab Report: Reference Ranges, H/L Flags and Units Explained

> **Review status: MEDICAL REVIEW PENDING.** Not approved for publication. Implemented as `draft: true` in `content/blog/how-to-read-your-lab-report.mdx` — that MDX file is the canonical copy; this file is the brief and a snapshot of the article at creation.

## SEO metadata

| Field | Value |
|---|---|
| H1 | How to Read Your Lab Report: Reference Ranges, H/L Flags and Units Explained |
| Alternative headline | Blood Test Report Explained: Reference Ranges, High and Low Flags, and Units |
| URL slug | `/blog/how-to-read-your-lab-report` |
| Canonical | `https://www.stlukesmedilab.com/blog/how-to-read-your-lab-report` |
| Meta title (`seoTitle`) | How to Read a Blood Test Report: Ranges, Flags & Units (54 chars; layout appends the brand) |
| Meta description (`seoDescription`) | A plain-English guide to your lab report: what reference ranges, H and L flags, units and 'positive' mean, and why your doctor should interpret the result. (155 chars) |
| Primary keyword | how to read lab report |
| Secondary keywords | blood test report explained; reference range meaning; H and L on blood test; normal range lab report; lab result units |
| Search intent | Informational |
| Audience | Anyone who has just received a lab report |
| Reader's main question | What do the numbers, ranges and H/L flags on my report mean? |
| Unique angle | Explains report anatomy without publishing reference ranges (consistent with the site's no-ranges rule); clear division between what the lab explains and what the doctor interprets. |
| Verified lab service | All tests; digital report delivery |
| Conversion goal | Call the lab with report-layout questions; return to the referring doctor; book next test |
| Reason for selection | Evergreen AEO content that every test page can link to; reduces anxious calls by setting expectations. |

## Internal links used
/price-list, /price-list/fbc, /price-list/tsh, /packages, /services/home-blood-collection, /blog/fasting-before-blood-test-guide, /blog/urine-full-report-ufr-test-guide

## Medical sources
MedlinePlus — How to Understand Your Lab Results; MedlinePlus — Fasting for a Blood Test — full links in the Sources section of the article.

## Call to action
In-article: walk-in details for the Ja-Ela lab, home-collection towns and `tel:` link (071 123 1954). Template: the existing "Ready to book a test?" panel (call + price list). WhatsApp: the site-wide floating button. No new data-collection forms were added.

## Image brief
- **Brief:** A blank, de-identified sample report layout on a clipboard (mock-up, no real patient data).
- **Suggested filename:** `how-to-read-lab-report-sample.jpg` → `public/blog/how-to-read-lab-report-sample.jpg`, ≥1200×675, WebP/JPEG under ~200 KB
- **Alt text:** A de-identified example laboratory report showing result, unit and reference range columns
- **Current placeholder:** reused Unsplash image (marked `TODO <<CONFIRM>>` in frontmatter).

## Author and reviewer (verify before publishing)
- **Author:** St. Luke's Medical Laboratory (organisation byline — matches recent posts). Drafted with AI assistance; requires human editorial approval.
- **Medical reviewer:** `<<PENDING — name, qualification, registration>>`. Do **not** add `reviewedBy` until the person has actually reviewed and approved this text.

## Structured data
Rendered automatically by `src/app/blog/[slug]/page.tsx`: `MedicalWebPage` (headline, description, url, image, datePublished, dateModified, organisation author/publisher) + `BreadcrumbList`; site-wide `MedicalBusiness` from the layout. Recommended after review: add `reviewedBy` (Person with credentials) and `lastReviewed`. `FAQPage` markup intentionally **not** added (Google restricts FAQ rich results to authoritative government/health sites; the FAQ content still serves readers and answer engines).

## Pre-publication fact-check
See `medical-review-checklist.md` → "Article 05" for the claim-by-claim list. Also: re-check every LKR price against `src/lib/priceList.ts` on the day of publication.

---

# Full article

> **Quick answer:** Each line of a lab report shows the **test name**, **your result**, the **unit** it is measured in, and a **reference range** — the range seen in most healthy people, as used by *that* laboratory. Results outside the range are often marked **H (high)** or **L (low)**. **A flagged result is not automatically a problem, and an in-range result does not guarantee good health.** Ranges differ between labs and methods, so always compare your result with the range printed on *your* report and take it to the doctor who requested the test.

It is natural to read your report the moment it arrives — and to worry when something is in bold or marked "H". This guide explains the parts of a typical laboratory report so the page makes sense. It does not replace your doctor's interpretation: only someone who knows your history, symptoms and medicines can tell you what a result means for you.

## The parts of a typical lab report

Layouts differ between laboratories, but most reports contain the same building blocks.

### Patient and sample details
Your **name, age and sex**, the **referring doctor**, and the **date and time the sample was collected**. Check these are correct — age and sex matter, because some reference ranges and calculations (such as eGFR) depend on them. If anything is wrong, contact the lab.

### Test name
Tests are often abbreviated: **FBC** (Full Blood Count), **FBS** (Fasting Blood Sugar), **SGPT/ALT** and **SGOT/AST** (liver enzymes), **TSH** (thyroid-stimulating hormone), **UFR** (Urine Full Report). Our [price list](/price-list) gives the full name of each test we run, and our individual test pages — for example [FBC](/price-list/fbc) or [TSH](/price-list/tsh) — explain what each one is generally used for.

### Your result
The measured value, or a word such as **"Positive", "Negative", "Reactive" or "Non-reactive"** for tests that look for the presence of something.

### Units
The same substance can be reported in different units — for example glucose in **mg/dL** or **mmol/L**. MedlinePlus notes that tests use many different units ([MedlinePlus: How to Understand Your Lab Results](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/)). **This is a common source of confusion** when people compare a Sri Lankan report with a chart found online that uses different units.

### Reference range (or "reference interval")
This is the range of results found in most healthy people, based on testing large groups. It is often printed beside or below your result. Some reports show different ranges for men, women, children or pregnancy.

### Flags
Many reports mark results outside the reference range with **H** (high) or **L** (low), an asterisk, or bold type. Some labs use extra flags for results that need urgent attention.

## What "normal" really means

The word "normal" can be misleading. MedlinePlus explains that because reference ranges are based on groups of healthy people, **some healthy people will have results outside the range**, and **some people with health problems will have results inside it** ([MedlinePlus](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/)). That is why:

- **A result slightly outside the range may be of no concern** for you — your doctor will consider your overall health.
- **A result inside the range may still need follow-up** if you have symptoms.
- **One result rarely tells the whole story.** Doctors often look at the trend over time and at several tests together.

## Why you shouldn't compare ranges between labs

Different laboratories use different analysers, chemical methods and units, so **their reference ranges can differ**. MedlinePlus advises checking the range on your own report, not comparing it with ranges from elsewhere, and, if you are tracking results over time, **using the same lab where possible** ([MedlinePlus](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/)).

For the same reason, we do not publish "normal values" in our articles — the range printed on your report is the one that applies to your sample.

## "Positive", "negative" and "inconclusive"

For tests that detect something — such as an infection marker or a pregnancy hormone:

- **Negative / non-reactive** — the test did not detect what it was looking for. More testing may still be needed if symptoms continue.
- **Positive / reactive** — the test detected it. Many screening tests need a **confirmatory test** before a diagnosis is made.
- **Inconclusive / equivocal** — the result is not clearly either; a repeat test is often advised.

**False positives and false negatives** are uncommon but possible with any test ([MedlinePlus](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/)). Timing matters too — for example, some infection tests are more reliable on certain days of an illness. Your doctor takes this into account.

## Things that can affect your results

- **Food and drink** — especially for sugar and triglycerides (see our [fasting guide](/blog/fasting-before-blood-test-guide)).
- **Medicines, vitamins and supplements.**
- **Hard exercise** before the test.
- **Dehydration or recent illness.**
- **Menstrual periods** (for some blood and urine tests).
- **How the sample was collected** — for example, the [clean-catch method for urine](/blog/urine-full-report-ufr-test-guide).

Tell your doctor and the lab about anything that might be relevant.

## What to do with your report

1. **Take it to the doctor who requested the test** — including when everything looks "normal".
2. **Don't start, stop or change any medicine** based on the report alone.
3. **Keep your reports together**, ideally from the same lab, so trends are easy to see.
4. **Ask questions.** It is reasonable to ask your doctor: *What does this result mean for me? Do I need a repeat test? Is anything else needed?*
5. **If you feel unwell**, do not wait for a report — seek medical care.

## Getting your report from St. Luke's

St. Luke's Medical Laboratory provides reports as **secure digital reports** that you can share with your doctor, and most routine reports are ready within about **24 hours** — some tests take longer, and we will tell you when you book. If anything on your report is unclear — the name of a test, a unit or a missing detail — call us on [071 123 1954](tel:+94711231954) or visit our lab at **No. 67, Old Negombo Road, Ja-Ela** (Mon–Sat 07:00–19:30, Sun 07:30–12:30). Our staff can explain what was measured and how; your doctor will explain what it means for your health.

Need a test? See our [price list](/price-list), [health packages](/packages), or book [home collection](/services/home-blood-collection) across Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama and Thudella.

## Frequently asked questions

### What does "H" or "L" mean on my blood test report?
H means the result is above the laboratory's reference range and L means below it. A flagged result is not automatically a problem — your doctor will interpret it alongside your health and other results.

### Why is my reference range different from one I found online?
Ranges vary between laboratories, analysers, methods and units. Always use the range printed on your own report.

### My result is just outside the range. Should I be worried?
Small differences are common and often of no concern, but only your doctor can say for sure. Take the report to them rather than relying on internet searches.

### Can the lab tell me what my result means?
Lab staff can explain what a test measures and how the report is laid out. Interpreting what a result means for your health — and deciding on any treatment — is the role of your doctor.

### Should I compare results from different labs?
It is better to track results from the same lab where possible, because different labs may use different methods and ranges.

---

## Sources

- MedlinePlus (US National Library of Medicine). [How to Understand Your Lab Results](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/).
- MedlinePlus. [Fasting for a Blood Test](https://medlineplus.gov/lab-tests/fasting-for-a-blood-test/).

*This article is general health information. It does not interpret individual results and is not a substitute for advice from your doctor. If you have worrying symptoms, seek medical care without waiting for a report.*
