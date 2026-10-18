# Blog 02 — Urine Full Report (UFR): How to Collect Your Sample and What the Test Checks

> **Review status: MEDICAL REVIEW PENDING.** Not approved for publication. Implemented as `draft: true` in `content/blog/urine-full-report-ufr-test-guide.mdx` — that MDX file is the canonical copy; this file is the brief and a snapshot of the article at creation.

## SEO metadata

| Field | Value |
|---|---|
| H1 | Urine Full Report (UFR): How to Collect Your Sample and What the Test Checks |
| Alternative headline | UFR Test Explained: Clean-Catch Urine Collection, What's Checked and What Results Mean |
| URL slug | `/blog/urine-full-report-ufr-test-guide` |
| Canonical | `https://www.stlukesmedilab.com/blog/urine-full-report-ufr-test-guide` |
| Meta title (`seoTitle`) | Urine Full Report (UFR) Test: How to Collect a Sample (53 chars; layout appends the brand) |
| Meta description (`seoDescription`) | How to collect a clean-catch urine sample for a UFR, what the report checks, and why results need your doctor's review. LKR 400 at St. Luke's, Ja-Ela. (150 chars) |
| Primary keyword | urine full report (UFR) |
| Secondary keywords | UFR test; urine test sample collection; clean catch urine sample; midstream urine; pus cells in urine |
| Search intent | Informational + how-to |
| Audience | Patients asked for a UFR (UTI symptoms, routine checks, pregnancy, diabetes follow-up) |
| Reader's main question | How do I collect the urine sample properly, and what does the UFR check? |
| Unique angle | Uses Sri Lankan report terminology (pus cells, albumin, reaction) and a Sri Lankan university SOP; explains why collection quality changes the result. |
| Verified lab service | Urine Full Report (LKR 400), Urine Sugar & Albumin (LKR 150); home collection |
| Conversion goal | Collect a sterile container / call for collection advice; add UFR to a home visit |
| Reason for selection | UFR is a Sri Lankan-specific search term with weak local answers and a test page lacking a guide. |

## Internal links used
/price-list/ufr, /price-list/fbs, /price-list/hba1c, /packages, /services/home-blood-collection, /blog/kidney-function-tests-creatinine-egfr-uacr, /blog/how-to-read-your-lab-report, /price-list

## Medical sources
MedlinePlus — Urinalysis; MedlinePlus — Clean catch urine sample; Uva Wellassa University Faculty of Medicine — midstream urine SOP; MedlinePlus — How to Understand Your Lab Results — full links in the Sources section of the article.

## Call to action
In-article: walk-in details for the Ja-Ela lab, home-collection towns and `tel:` link (071 123 1954). Template: the existing "Ready to book a test?" panel (call + price list). WhatsApp: the site-wide floating button. No new data-collection forms were added.

## Image brief
- **Brief:** Sterile urine container with a blank label on a clean lab bench.
- **Suggested filename:** `urine-full-report-sample-container.jpg` → `public/blog/urine-full-report-sample-container.jpg`, ≥1200×675, WebP/JPEG under ~200 KB
- **Alt text:** A sterile urine sample container with a blank label on a laboratory bench
- **Current placeholder:** reused Unsplash image (marked `TODO <<CONFIRM>>` in frontmatter).

## Author and reviewer (verify before publishing)
- **Author:** St. Luke's Medical Laboratory (organisation byline — matches recent posts). Drafted with AI assistance; requires human editorial approval.
- **Medical reviewer:** `<<PENDING — name, qualification, registration>>`. Do **not** add `reviewedBy` until the person has actually reviewed and approved this text.

## Structured data
Rendered automatically by `src/app/blog/[slug]/page.tsx`: `MedicalWebPage` (headline, description, url, image, datePublished, dateModified, organisation author/publisher) + `BreadcrumbList`; site-wide `MedicalBusiness` from the layout. Recommended after review: add `reviewedBy` (Person with credentials) and `lastReviewed`. `FAQPage` markup intentionally **not** added (Google restricts FAQ rich results to authoritative government/health sites; the FAQ content still serves readers and answer engines).

## Pre-publication fact-check
See `medical-review-checklist.md` → "Article 02" for the claim-by-claim list. Also: re-check every LKR price against `src/lib/priceList.ts` on the day of publication.

---

# Full article

> **Quick answer:** A **Urine Full Report (UFR)** — also called a urinalysis — checks your urine's **appearance, chemistry and cells under a microscope**. It needs **no fasting**. The most useful sample is usually a **"clean-catch" midstream sample**, ideally the **first urine of the morning**, collected in the **sterile container** the lab gives you and brought in promptly. At St. Luke's in Ja-Ela a UFR costs **LKR 400**. Results are interpreted by your doctor together with your symptoms — an abnormal finding is a clue, not a diagnosis.

Doctors in Sri Lanka request a UFR constantly — for burning when passing urine, fever, routine check-ups, pregnancy care, diabetes and blood-pressure follow-up. It is quick and inexpensive. But because skin and genital bacteria and cells can easily get into the container, **the way the sample is collected affects how reliable the result is**. This guide covers both: how to collect it well, and what the report actually contains.

## What is a Urine Full Report?

A UFR is a routine examination of a urine sample in three parts. MedlinePlus, the US National Library of Medicine's patient service, describes a urinalysis in the same way ([MedlinePlus: Urinalysis](https://medlineplus.gov/ency/article/003579.htm)):

1. **Physical examination** — colour, clarity (clear or cloudy) and, in many labs, specific gravity (how concentrated the urine is).
2. **Chemical examination** — a test strip checks for substances such as **sugar (glucose), protein, blood, ketones, bilirubin, nitrites and leukocyte esterase**, plus the urine's acidity (pH).
3. **Microscopic examination** — a portion of the sample is examined under the microscope for **white blood cells ("pus cells"), red blood cells, epithelial cells, casts, crystals and organisms** such as bacteria or yeast.

You will often see these listed on a Sri Lankan UFR report as headings such as *Colour, Appearance, Reaction, Specific Gravity, Sugar, Albumin, Pus cells, Red cells, Epithelial cells, Crystals, Casts* and *Organisms*. The exact layout varies between laboratories.

## Why might a doctor request a UFR?

- **Symptoms of a urinary tract infection** — burning, frequent or urgent urination, lower abdominal pain.
- **Fever** without an obvious cause.
- **Routine health checks**, pre-employment medicals and our [Full Body Health Check](/packages).
- **Pregnancy care**, where urine is checked regularly.
- **Diabetes and high blood pressure follow-up**, as part of keeping an eye on the kidneys.
- **Following up an earlier abnormal result.**

## How to collect a clean-catch (midstream) urine sample

The "clean-catch" method is designed to stop germs and cells from the skin around the urethra getting into the sample ([MedlinePlus: Clean catch urine sample](https://medlineplus.gov/ency/article/007487.htm)). These are general steps — **if your doctor or the lab gives you different instructions, follow theirs.**

### Before you start
- Use **only the sterile container the lab gives you.** Do not use a washed bottle or jar from home — it can contain residues and germs that affect the result.
- If you can, use the **first urine of the morning**, or urine that has been in the bladder for at least a couple of hours.
- **Write your name** (or check the label) on the container, not on the lid.

### Step by step
1. **Wash your hands** with soap and water.
2. **Clean the genital area** with water or the wipe provided, from front to back.
   - *Women:* hold the labia apart while you clean and while you pass urine.
   - *Men:* if not circumcised, gently pull back the foreskin.
3. **Start passing urine into the toilet** — let the first part go.
4. **Without stopping the flow, collect the middle part** in the container until it is about half full. Do not touch the inside of the container or lid.
5. **Finish passing urine** into the toilet.
6. **Close the lid tightly**, wash your hands, and check the label.

### Getting the sample to the lab
Urine changes if it stands at room temperature — bacteria can multiply and cells can break down. **Bring it to the lab as soon as you can.** A Sri Lankan university SOP for midstream urine collection advises sending the sample within about an hour, or refrigerating it for a short time if there is a delay ([Uva Wellassa University, Faculty of Medicine — SOP](https://med.uwu.ac.lk/wp-content/uploads/2026/06/sop-for-collection-of-midstream-samples-of-urine-i_260604_123217.pdf)). If you are not sure how long is acceptable for your sample, ask us when you collect the container.

### Collecting during your period
Menstrual blood can show up as red cells in the sample. If you can, tell the doctor and consider testing after your period ends, unless your doctor needs the test urgently. Always **tell the lab staff** if you are menstruating so the result can be read in context.

## Understanding what the report shows — and its limits

A UFR report lists each finding next to the lab's **reference range**. A few general points help:

- **A single abnormal finding is not a diagnosis.** For example, pus cells or bacteria may suggest infection, but contamination during collection can produce similar findings. Your doctor may ask for a repeat sample or a **urine culture** to confirm an infection and choose treatment.
- **Sugar in urine** can have several explanations. Diabetes is diagnosed with blood tests — such as a [Fasting Blood Sugar](/price-list/fbs) or [HbA1c](/price-list/hba1c) — not with a urine test alone.
- **Protein ("albumin")** on a routine strip is a rough screen. If kidney damage is a concern, doctors commonly use a more sensitive **urine albumin-to-creatinine ratio (UACR)** instead — see our guide to [kidney function tests](/blog/kidney-function-tests-creatinine-egfr-uacr).
- **Normal results do not rule everything out**, especially if you have symptoms. Talk to your doctor if you still feel unwell.

We do not publish "normal values" here on purpose: ranges and units differ between laboratories and methods, and your report carries the range that applies to your result. Our guide on [how to read your lab report](/blog/how-to-read-your-lab-report) explains reference ranges and flags in more detail.

## Getting a UFR at St. Luke's, Ja-Ela

- **Price:** Urine Full Report **LKR 400**; Urine Sugar & Albumin **LKR 150** — see the [UFR test page](/price-list/ufr) and the full [price list](/price-list).
- **Containers:** collect a sterile container from our lab before your test, or ask for one when you book a home visit.
- **Walk-in:** No. 67, Old Negombo Road, Ja-Ela — Mon–Sat 07:00–19:30, Sun 07:30–12:30.
- **At home:** our [home collection service](/services/home-blood-collection) covers Ja-Ela, Kandana, Welisara (Walisara), Ragama, Wattala, Batagama and Thudella, with scheduled visits in Seeduwa, Katunayake and Negombo. If you are also having blood taken, the phlebotomist can take your urine sample at the same visit.

Call [071 123 1954](tel:+94711231954) if you are unsure how to collect your sample — we would rather explain than have you repeat the test.

## Frequently asked questions

### Do I need to fast for a urine test?
No. A Urine Full Report does not need fasting. If the same request form includes a fasting blood test, plan your visit around that.

### Why is a first-morning sample preferred?
Urine that has been in the bladder overnight is more concentrated, which makes some findings easier to detect. If your doctor asked for a sample at a different time, follow that.

### Can I collect the sample at home and bring it in?
Yes, using the sterile container from the lab. Bring it in as soon as possible after collection and tell the staff what time you collected it.

### What is the difference between a UFR and a urine culture?
A UFR is a broad screening test. A urine culture grows bacteria from the sample to confirm an infection and identify which organism it is. Your doctor decides whether a culture is needed. Please call us to confirm which urine tests we currently offer.

### My UFR showed pus cells. Do I have an infection?
Not necessarily. Pus cells can point towards infection or inflammation, but they can also come from contamination. Your doctor will read the result with your symptoms and may ask for a repeat or a culture. Do not start antibiotics without medical advice.

---

## Sources

- MedlinePlus Medical Encyclopedia. [Urinalysis](https://medlineplus.gov/ency/article/003579.htm).
- MedlinePlus Medical Encyclopedia. [Clean catch urine sample](https://medlineplus.gov/ency/article/007487.htm).
- Faculty of Medicine, Uva Wellassa University of Sri Lanka. [SOP for collection of midstream samples of urine](https://med.uwu.ac.lk/wp-content/uploads/2026/06/sop-for-collection-of-midstream-samples-of-urine-i_260604_123217.pdf).
- MedlinePlus. [How to Understand Your Lab Results](https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/).

*This article is general health information, not a diagnosis or treatment advice. If you have severe pain, high fever, blood in your urine or cannot pass urine, seek medical care promptly.*
