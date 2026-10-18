# Medical Review Checklist — Cycle 1

**All five articles: REVIEW PENDING.** Each must be reviewed and signed off by an appropriately qualified healthcare professional (e.g. consultant pathologist, chemical pathologist or physician; MLT review is appropriate for collection/process content but should not be the only sign-off for articles 3 and 4). Publication additionally needs explicit owner authorisation.

## General checks (every article)

- [ ] No diagnosis, self-diagnosis or treatment recommendations
- [ ] No instruction to start, stop or change medication (only "do not change without your doctor")
- [ ] No numeric reference ranges (consistent with `lib/testPages.ts` rule)
- [ ] No claim that fasting is required for every test
- [ ] No guaranteed turnaround, accuracy or diagnosis
- [ ] No accreditation, certification or credential claims
- [ ] No patient stories, photos, testimonials or identifiable data
- [ ] Every medical claim has a cited source; links open
- [ ] Prices match `src/lib/priceList.ts` on publication day
- [ ] Hours, address, phone match `src/lib/seo.ts`
- [ ] Disclaimer present; urgent-care signpost present where relevant
- [ ] Tone calm, non-alarming
- [ ] `reviewedBy` added only after sign-off; `date` set to real publication date; `draft: true` removed

## Lab-policy questions the reviewer/owner must answer

| # | Question | Affects |
|---|---|---|
| P1 | Does the lab still require fasting for the **Lipid Profile**, or accept non-fasting when the doctor allows? | Art. 1 table + note; `lib/testPages.ts`; `lib/seo.ts` FAQ |
| P2 | Is fasting required for the **LFT** on its own? (`services.ts` says yes, `testPages.ts` says no) | Art. 1; site-wide consistency |
| P3 | Does the lab offer **urine culture**? | Art. 2 FAQ (currently says "call us to confirm") |
| P4 | Acceptable **time from urine collection to receipt**, and does the lab supply sterile containers in advance? | Art. 2 |
| P5 | Does the lab provide UACR on a **first-morning** or random sample? | Art. 3 |
| P6 | Which eGFR equation does the lab report (e.g. CKD-EPI 2021)? | Art. 3 (wording "age and sex") |
| P7 | How are reports delivered (email / WhatsApp / printed) and is "most reports within ~24 hours" accurate? | Art. 5 |
| P8 | Does the report show H/L flags and critical-value flags as described? | Art. 5 |

## Article 01 — Fasting before a blood test

- [ ] "Most blood tests do not need fasting" — MedlinePlus (fasting needed for certain tests only)
- [ ] Fasting usually 8–12 hours — MedlinePlus
- [ ] Water allowed; avoid coffee, juice, gum, smoking, exercise — MedlinePlus
- [ ] Alcohol may need avoiding longer — MedlinePlus
- [ ] Lipid non-fasting consensus — Nordestgaard 2016 (EAS/EFLM). **Confirm P1.**
- [ ] Per-test table matches `lib/testPages.ts` preparation fields. **Confirm P2.**
- [ ] "King coconut water" listed as not allowed — reasonable local example; reviewer confirm
- [ ] Diabetes caution (ask doctor before fasting; hypoglycaemia risk with some medicines) — general clinical caution, **not directly sourced**; reviewer to confirm wording or add source
- [ ] "Fasting much longer does not improve result" — reviewer to confirm/source
- [ ] HbA1c "average over 2–3 months, no fasting" — consistent with existing HbA1c post; reviewer confirm

## Article 02 — Urine Full Report

- [ ] Three-part description (physical, chemical, microscopic) — MedlinePlus Urinalysis
- [ ] Clean-catch steps — MedlinePlus Clean catch urine sample
- [ ] Deliver within ~1 hour or refrigerate briefly — Uva Wellassa SOP (paediatric SOP; reviewer confirm it applies). **Confirm P4.**
- [ ] Menstruation may add red cells — general; reviewer confirm
- [ ] Glucosuria not diagnostic; diabetes diagnosed by blood tests — reviewer confirm
- [ ] Dipstick protein less sensitive than UACR — NICE NG203 (cited in Art. 3)
- [ ] Contamination can mimic infection; culture confirms — reviewer confirm. **Confirm P3.**
- [ ] Sri Lankan report headings list matches the lab's actual report template

## Article 03 — Kidney function tests

- [ ] Creatinine/eGFR description, factors (dehydration, exercise, meat, medicines), normal creatinine in early disease, high ≠ disease — MedlinePlus Creatinine Test
- [ ] eGFR equation inputs ("age and sex") — **confirm P6**; MedlinePlus mentions weight/height for some equations
- [ ] ACR preferred over dipstick — NICE NG203
- [ ] Risk-factor list and "age/sex/ethnicity/weight alone not triggers" — NICE NG203
- [ ] CKD defined by abnormalities > 3 months, graded by eGFR + ACR — NICE NG203 (also KDIGO); reviewer confirm wording
- [ ] Raised UACR confirmed with repeat; transient causes (exercise, fever, infection, periods) — reviewer confirm/source
- [ ] CKDu concentrated in dry-zone NCP/Uva — BMC Nephrology 2019 (DOI resolves; **full text could not be opened by the automated check — reviewer to confirm content and full citation**)
- [ ] "People with diabetes or high BP commonly checked at least once a year" — **not directly sourced**; reviewer confirm or remove
- [ ] Package contents/prices match `lib/packages.ts`

## Article 04 — Uric acid and gout

- [ ] Purines, kidney clearance, causes of high levels — MedlinePlus Uric Acid Test
- [ ] Many people with high uric acid never develop problems — MedlinePlus
- [ ] Aspirin and niacin affect results — MedlinePlus
- [ ] Gout symptoms, 1–2 week attacks, risk factors, joint fluid/scan — NHS Gout
- [ ] Hot joint + fever → urgent help (possible infection) — NHS Gout
- [ ] Repeat ≥ 2 weeks after flare if low during flare and gout suspected — NICE NG219 (**verified via secondary summaries; NICE page blocked automated fetch — reviewer confirm**)
- [ ] "Fasting not usually required" for uric acid — **lab policy; confirm**
- [ ] Chikungunya joint pain reference — consistent with existing reviewed post
- [ ] Joint Pain & Fatigue Profile excludes uric acid — matches `lib/packages.ts`

## Article 05 — How to read your lab report

- [ ] Reference range definition; "normal" misleading; healthy people outside range; in-range ≠ healthy — MedlinePlus
- [ ] Don't compare across labs; use same lab for trends — MedlinePlus
- [ ] Positive/negative/inconclusive; false positives/negatives — MedlinePlus
- [ ] Factors affecting results — MedlinePlus
- [ ] Report anatomy matches the lab's actual template. **Confirm P8.**
- [ ] Delivery method and 24-hour statement. **Confirm P7.**

## Sign-off

| Article | Reviewer name & qualification | Registration no. | Date | Approved / changes requested |
|---|---|---|---|---|
| 01 | | | | |
| 02 | | | | |
| 03 | | | | |
| 04 | | | | |
| 05 | | | | |
