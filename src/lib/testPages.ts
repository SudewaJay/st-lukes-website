import { allTests, findTest, type FlatTest } from "@/lib/priceList";

/**
 * Dedicated landing pages for the tests people search for by name
 * ("tsh test price in sri lanka", "hba1c test price", ...). Drives
 * `/price-list/[slug]`, the "popular tests" links and the sitemap.
 *
 * Prices are NEVER written here — `testNames` point at entries in
 * `lib/priceList.ts`, which stays the single source of truth. The first name
 * is the headline price; any others are shown as related line items.
 *
 * Copy rules: describe what the test is generally used for, never diagnose,
 * no numeric reference ranges (they vary by method — the report carries the
 * lab's own range). Preparation must match what the blog already tells people.
 */
export type TestPage = {
  slug: string;
  /** Short name used in titles: "TSH", "HbA1c". */
  shortName: string;
  /** Exact names from lib/priceList.ts. First = headline price. */
  testNames: string[];
  /** Other names people search for. Feeds alternateName + on-page copy. */
  aliases: string[];
  summary: string;
  what: string;
  whyOrdered: string[];
  fasting: boolean;
  preparation: string;
  faqs: { q: string; a: string }[];
  /** Related test-page slugs. */
  related: string[];
  /** Optional in-depth blog post slug. */
  guide?: string;
};

export const testPages: TestPage[] = [
  {
    slug: "tsh",
    shortName: "TSH",
    testNames: ["TSH", "Free T4 (FT4)", "Free T3 (FT3)"],
    aliases: ["Thyroid test", "Thyroid Stimulating Hormone", "S. TSH"],
    summary:
      "The first-line thyroid blood test. One small sample, no fasting, any time of day.",
    what:
      "TSH (thyroid stimulating hormone) is made by the pituitary gland to tell the thyroid how hard to work. Because it reacts to small changes early, it is the standard first test when a doctor wants to check thyroid function. Free T4 and Free T3 are usually added when TSH comes back outside the reference range.",
    whyOrdered: [
      "Persistent tiredness, weight change, hair loss or feeling unusually cold or hot",
      "Palpitations, anxiety or a tremor without an obvious cause",
      "Monitoring thyroxine or anti-thyroid treatment",
      "Pregnancy planning and routine screening when a doctor advises it",
    ],
    fasting: false,
    preparation:
      "No fasting is needed. If you take thyroid medication, ask your doctor whether to take it before or after the sample, and keep the timing the same on every repeat test.",
    faqs: [
      {
        q: "Do I need Free T4 and Free T3 as well?",
        a: "Usually TSH is done first. Your doctor adds Free T4 (and sometimes Free T3) if TSH is abnormal or if they are monitoring treatment.",
      },
    ],
    related: ["fbc", "fbs", "vitamin-d"],
    guide: "thyroid-tsh-test-ja-ela-wattala",
  },
  {
    slug: "hba1c",
    shortName: "HbA1c",
    testNames: ["HbA1C"],
    aliases: ["Glycated haemoglobin", "A1c", "3-month sugar test"],
    summary:
      "Your average blood sugar over the past 2–3 months, in one sample. No fasting needed.",
    what:
      "HbA1c measures the share of haemoglobin in your red blood cells that has sugar attached to it. Because red cells live for around three months, it reflects your average blood sugar over that period rather than a single moment — which is why doctors use it to screen for prediabetes and diabetes and to track how well diabetes is controlled.",
    whyOrdered: [
      "Screening for prediabetes and type 2 diabetes",
      "Checking diabetes control every 3–6 months",
      "Family history of diabetes, weight around the middle or high blood pressure",
      "Following up a borderline fasting blood sugar",
    ],
    fasting: false,
    preparation:
      "No fasting is needed and it can be taken at any time of day. If it is booked together with a Fasting Blood Sugar or Lipid Profile, fast 8–12 hours for those.",
    faqs: [
      {
        q: "Is HbA1c better than a fasting sugar test?",
        a: "They answer different questions. A fasting sugar shows one moment; HbA1c shows the 2–3 month trend. Many doctors ask for both together.",
      },
    ],
    related: ["fbs", "ppbs", "ogtt", "lipid-profile"],
    guide: "hba1c-prediabetes-test-ja-ela",
  },
  {
    slug: "fbc",
    shortName: "FBC",
    testNames: ["Full Blood Count (FBC)", "Haemoglobin (Hb)", "Platelet Count"],
    aliases: ["Full Blood Count", "CBC", "Complete Blood Count", "Blood picture"],
    summary:
      "The most commonly ordered blood test — red cells, white cells, haemoglobin and platelets in one report.",
    what:
      "A Full Blood Count measures the number and size of your red blood cells, your haemoglobin level, the white blood cells that fight infection (with a breakdown of each type), and the platelets that help blood clot. We run it on a Medonic automated haematology analyser.",
    whyOrdered: [
      "Fever — including suspected dengue, where the platelet count is watched closely",
      "Tiredness, paleness or breathlessness that could point to anaemia",
      "Infections, unexplained bruising or bleeding",
      "Routine health checks and before surgery",
    ],
    fasting: false,
    preparation:
      "No fasting is needed. During a dengue-season fever, your doctor may ask for the FBC to be repeated daily — morning slots and home collection make that easier.",
    faqs: [
      {
        q: "Is FBC the same as CBC or a blood picture?",
        a: "FBC and CBC are the same test. A 'blood picture' usually means a blood film examined under the microscope, which your doctor may order alongside the FBC.",
      },
    ],
    related: ["esr", "crp", "ferritin"],
    guide: "full-blood-count-medonic-ja-ela",
  },
  {
    slug: "vitamin-d",
    shortName: "Vitamin D",
    testNames: ["Vitamin D"],
    aliases: ["25-hydroxy vitamin D", "25(OH)D", "Vitamin D3 test"],
    summary:
      "Measures 25-hydroxy vitamin D — the standard way to check for deficiency.",
    what:
      "The vitamin D blood test measures 25-hydroxy vitamin D, the form the body stores. Despite year-round sunshine, low vitamin D turns up regularly in Sri Lanka because of indoor work, covered clothing and sun avoidance. It is run on our chemiluminescence immunoassay (CLIA) analyser.",
    whyOrdered: [
      "Bone or muscle aches, frequent fatigue or low mood",
      "Thinning bones, a past fracture or older age",
      "Working indoors most of the day",
      "Checking whether a supplement is working",
    ],
    fasting: false,
    preparation:
      "No fasting is needed. Tell us if you are taking a vitamin D supplement — your doctor will want to know when you last took it.",
    faqs: [
      {
        q: "Why is vitamin D deficiency common in a sunny country?",
        a: "Making vitamin D needs direct sun on bare skin. Office work, covered clothing, sunscreen and darker skin all reduce how much the body actually produces.",
      },
    ],
    related: ["fbc", "tsh", "serum-electrolytes"],
    guide: "vitamin-d-test-ja-ela",
  },
  {
    slug: "crp",
    shortName: "CRP",
    testNames: ["C-Reactive Protein (CRP)"],
    aliases: ["C-Reactive Protein", "CRP blood test"],
    summary:
      "A fast marker of inflammation or infection somewhere in the body.",
    what:
      "C-reactive protein is made by the liver and rises within hours when there is inflammation or infection. It does not tell the doctor where the problem is, but it shows whether something is active and — on repeat tests — whether it is settling with treatment.",
    whyOrdered: [
      "Fever or suspected bacterial infection",
      "Joint pain and swelling, alongside ESR and Rheumatoid Factor",
      "Monitoring response to antibiotics or anti-inflammatory treatment",
    ],
    fasting: false,
    preparation: "No fasting or special preparation is needed.",
    faqs: [
      {
        q: "What is the difference between CRP and ESR?",
        a: "Both point to inflammation. CRP rises and falls quickly, so it tracks short-term change; ESR moves more slowly. Doctors often order them together.",
      },
    ],
    related: ["esr", "fbc"],
  },
  {
    slug: "esr",
    shortName: "ESR",
    testNames: ["ESR"],
    aliases: ["Erythrocyte Sedimentation Rate", "Sed rate"],
    summary:
      "A simple, long-established blood test for inflammation.",
    what:
      "ESR measures how quickly red blood cells settle to the bottom of a tube over an hour. When there is inflammation, proteins in the blood make the cells clump and fall faster. It is non-specific but useful as part of a wider picture.",
    whyOrdered: [
      "Joint pain, stiffness or suspected arthritis",
      "Unexplained fever, weight loss or fatigue",
      "Following a known inflammatory condition over time",
    ],
    fasting: false,
    preparation: "No fasting or special preparation is needed.",
    faqs: [],
    related: ["crp", "fbc"],
  },
  {
    slug: "ufr",
    shortName: "UFR",
    testNames: ["Urine Full Report (UFR)", "Urine Sugar & Albumin"],
    aliases: ["Urine Full Report", "Urine test", "Urinalysis"],
    summary:
      "A complete urine examination — chemical tests plus a look under the microscope.",
    what:
      "A Urine Full Report checks the urine's appearance and chemistry (including sugar, protein and signs of blood or infection) and examines a sample under the microscope for cells, crystals and bacteria. It is one of the quickest ways to screen the kidneys and urinary tract.",
    whyOrdered: [
      "Burning, frequent or painful urination",
      "Routine health checks and pregnancy care",
      "Diabetes and blood pressure follow-up",
    ],
    fasting: false,
    preparation:
      "A clean-catch midstream sample is best — ideally the first urine of the morning. We give you a sterile container; ask us how to collect it if you are unsure.",
    faqs: [],
    related: ["serum-creatinine", "fbs", "renal-profile"],
  },
  {
    slug: "fbs",
    shortName: "FBS",
    testNames: ["Fasting Blood Sugar (FBS)", "Random Blood Sugar (RBS)"],
    aliases: ["Fasting Blood Sugar", "Fasting glucose", "Sugar test"],
    summary:
      "Blood glucose after an overnight fast — the classic sugar test.",
    what:
      "A Fasting Blood Sugar measures the glucose in your blood after at least 8 hours without food. Because it removes the effect of a recent meal, it shows how well your body manages sugar at baseline.",
    whyOrdered: [
      "Screening for diabetes and prediabetes",
      "Day-to-day monitoring for people with diabetes",
      "Routine health checks and pre-employment medicals",
    ],
    fasting: true,
    preparation:
      "Fast for 8–12 hours beforehand — nothing but water. An early-morning slot or a home visit makes this easy.",
    faqs: [],
    related: ["hba1c", "ppbs", "ogtt", "lipid-profile"],
    guide: "understanding-fasting-blood-sugar-results",
  },
  {
    slug: "ppbs",
    shortName: "PPBS",
    testNames: ["Post Prandial Blood Sugar (PPBS)", "3 Point Sugar Profile"],
    aliases: ["Post Prandial Blood Sugar", "After-meal sugar", "2-hour sugar"],
    summary: "Blood sugar measured after a meal, to see how your body handles it.",
    what:
      "Post-prandial blood sugar is measured a set time after eating — usually two hours. It shows how well the body clears sugar after a meal, which a fasting test alone can miss.",
    whyOrdered: [
      "Checking diabetes control after meals",
      "Following up a borderline fasting result",
      "Alongside an FBS as a quick two-point check",
    ],
    fasting: false,
    preparation:
      "Eat your normal meal, note the time you finished, and come in for the sample at the time your doctor specified (usually 2 hours later).",
    faqs: [],
    related: ["fbs", "hba1c", "ogtt"],
  },
  {
    slug: "ogtt",
    shortName: "OGTT",
    testNames: [
      "OGTT (FBS, 2nd hr)",
      "OGTT (1st hr, 2nd hr, FBS)",
      "Glucose Challenge Test (GCT)",
    ],
    aliases: ["Oral Glucose Tolerance Test", "Sugar challenge test", "GTT"],
    summary:
      "A fasting sample, a measured glucose drink, then timed samples — often requested in pregnancy.",
    what:
      "An Oral Glucose Tolerance Test measures your blood sugar fasting, then again one and/or two hours after drinking a measured glucose solution. It is the standard way to check for gestational diabetes and to clarify borderline sugar results.",
    whyOrdered: [
      "Screening for diabetes in pregnancy",
      "Borderline fasting sugar or HbA1c results",
      "When a doctor wants to see how the body handles a sugar load",
    ],
    fasting: true,
    preparation:
      "Fast 8–12 hours (water only) and plan to stay at the lab for 2–3 hours — you need to rest between samples and should not eat, smoke or walk around during the test.",
    faqs: [],
    related: ["fbs", "hba1c", "ppbs"],
  },
  {
    slug: "lipid-profile",
    shortName: "Lipid Profile",
    testNames: ["Lipid Profile", "Serum Cholesterol"],
    aliases: ["Cholesterol test", "Lipid panel", "Serum lipid profile"],
    summary:
      "Total cholesterol, LDL, HDL and triglycerides — the core heart-risk panel.",
    what:
      "A Lipid Profile measures the fats carried in your blood: total cholesterol, LDL ('bad') cholesterol, HDL ('good') cholesterol and triglycerides. Together they are one of the main inputs doctors use to estimate heart-attack and stroke risk.",
    whyOrdered: [
      "Routine heart-risk screening for adults",
      "Diabetes, high blood pressure or a family history of heart disease",
      "Monitoring cholesterol-lowering medication",
    ],
    fasting: true,
    preparation:
      "Fast 9–12 hours beforehand (water is fine) for the most accurate triglyceride result.",
    faqs: [],
    related: ["fbs", "hba1c", "lft"],
    guide: "why-regular-lipid-profiling-is-crucial",
  },
  {
    slug: "lft",
    shortName: "LFT",
    testNames: ["Liver Function Test (LFT)", "Liver Profile", "Gamma GT (GGT)"],
    aliases: ["Liver Function Test", "Liver profile", "Liver test"],
    summary:
      "A panel of enzymes and proteins that shows how the liver is coping.",
    what:
      "A Liver Function Test groups several measurements — liver enzymes such as SGOT (AST) and SGPT (ALT), alkaline phosphatase, bilirubin and proteins — into one report. Patterns across them help a doctor tell whether the liver is inflamed, under strain or not clearing bile normally.",
    whyOrdered: [
      "Suspected fatty liver, hepatitis or jaundice",
      "Regular alcohol use or long-term medication",
      "Diabetes, weight gain or abnormal routine results",
    ],
    fasting: false,
    preparation:
      "Fasting is not usually required for the LFT on its own. If it is booked with a Lipid Profile or FBS, fast 8–12 hours for those.",
    faqs: [],
    related: ["sgot-sgpt", "lipid-profile", "renal-profile"],
    guide: "fatty-liver-test-ja-ela",
  },
  {
    slug: "sgot-sgpt",
    shortName: "SGOT / SGPT",
    testNames: ["SGPT (ALT)", "SGOT (AST)"],
    aliases: ["ALT", "AST", "SGPT", "SGOT", "Liver enzymes"],
    summary: "The two key liver enzymes, available individually.",
    what:
      "SGPT (ALT) and SGOT (AST) are enzymes found inside liver cells. When cells are irritated or damaged, more of them leak into the blood. They are the most common quick check of liver health and are also included in the full Liver Function Test.",
    whyOrdered: [
      "A quick liver check, or follow-up of a previous result",
      "Monitoring medicines that can affect the liver",
      "Suspected fatty liver",
    ],
    fasting: false,
    preparation: "No fasting is needed for SGOT or SGPT on their own.",
    faqs: [],
    related: ["lft", "lipid-profile"],
  },
  {
    slug: "serum-creatinine",
    shortName: "Serum Creatinine & eGFR",
    testNames: ["Serum Creatinine with GFR", "Serum Creatinine", "Blood Urea"],
    aliases: ["S. Creatinine", "eGFR", "Kidney function test", "SCr"],
    summary:
      "The standard kidney blood test, with an estimated filtration rate (eGFR).",
    what:
      "Creatinine is a waste product from muscle that healthy kidneys filter out steadily. Measuring it in the blood — and converting it to an estimated glomerular filtration rate (eGFR) using your age and sex — is the main way to check how well the kidneys are working.",
    whyOrdered: [
      "Diabetes or high blood pressure, which strain the kidneys over time",
      "Before and during medicines cleared by the kidneys",
      "After dehydration, fever such as leptospirosis, or abnormal urine results",
    ],
    fasting: false,
    preparation:
      "No fasting is needed. Avoid a very large meat meal or heavy exercise the evening before, as both can nudge creatinine up slightly.",
    faqs: [],
    related: ["renal-profile", "serum-electrolytes", "ufr"],
  },
  {
    slug: "serum-electrolytes",
    shortName: "Serum Electrolytes",
    testNames: ["Serum Electrolytes"],
    aliases: ["Electrolytes", "Sodium potassium chloride", "Na K Cl"],
    summary: "Sodium, potassium and chloride — the body's salt balance.",
    what:
      "Serum electrolytes measure sodium, potassium and chloride in the blood. These minerals control fluid balance, nerve signals and heart rhythm, so an imbalance can matter quickly. We run them on a dedicated Audicom electrolyte analyser.",
    whyOrdered: [
      "Vomiting, diarrhoea or dehydration",
      "Blood pressure tablets or diuretics",
      "Kidney disease, weakness or palpitations",
    ],
    fasting: false,
    preparation: "No fasting or special preparation is needed.",
    faqs: [],
    related: ["serum-creatinine", "renal-profile"],
    guide: "electrolyte-testing-audicom-ja-ela",
  },
  {
    slug: "renal-profile",
    shortName: "Renal Profile",
    testNames: ["Renal Function Test (RFT)", "Renal Profile"],
    aliases: ["Kidney profile", "RFT", "Kidney function panel"],
    summary: "A grouped kidney panel for a fuller picture than creatinine alone.",
    what:
      "Renal panels combine kidney markers — such as creatinine, urea and electrolytes — into one report. The Renal Function Test is the standard set; the Renal Profile adds further measurements when a doctor wants a more detailed view.",
    whyOrdered: [
      "Long-standing diabetes or high blood pressure",
      "Following up an abnormal creatinine or eGFR",
      "Monitoring known kidney disease",
    ],
    fasting: false,
    preparation:
      "Fasting is not usually needed. We will confirm when you book in case your doctor has added a fasting test.",
    faqs: [],
    related: ["serum-creatinine", "serum-electrolytes", "ufr"],
  },
  {
    slug: "ferritin",
    shortName: "Ferritin",
    testNames: ["Ferritin"],
    aliases: ["Serum ferritin", "Iron stores test"],
    summary: "The best single blood test of your body's iron stores.",
    what:
      "Ferritin is the protein that stores iron. A low level is the earliest sign of iron deficiency — often before haemoglobin falls. Ferritin can also rise with inflammation, so doctors read it alongside the FBC and CRP.",
    whyOrdered: [
      "Tiredness, hair loss or low haemoglobin on an FBC",
      "Heavy periods or pregnancy",
      "Checking whether iron tablets are working",
    ],
    fasting: false,
    preparation:
      "No fasting is needed. If you take iron tablets, mention when you last took them.",
    faqs: [],
    related: ["fbc", "crp"],
  },
  {
    slug: "vdrl",
    shortName: "VDRL",
    testNames: ["VDRL", "HIV 1, 2", "HBs Ag"],
    aliases: ["Syphilis screening test", "VDRL blood test"],
    summary:
      "A confidential screening test for syphilis, often part of visa and pre-employment medicals.",
    what:
      "VDRL is a long-established blood screening test for syphilis. It is commonly requested in pregnancy care, pre-employment and foreign-employment medicals, alongside HIV and Hepatitis B (HBs Ag) screening. A reactive result is confirmed with further testing.",
    whyOrdered: [
      "Pre-employment, visa and foreign-employment medicals",
      "Routine pregnancy screening",
      "Sexual health check-ups",
    ],
    fasting: false,
    preparation: "No fasting is needed. Results are handled confidentially.",
    faqs: [],
    related: ["fbc", "ufr"],
    guide: "pre-employment-medical-tests-katunayake",
  },
  {
    slug: "sfa",
    shortName: "SFA",
    testNames: ["Seminal Fluid Analysis (SFA)"],
    aliases: ["Seminal Fluid Analysis", "Semen analysis", "Sperm test"],
    summary:
      "A confidential semen analysis — count, movement and appearance of sperm.",
    what:
      "Seminal fluid analysis examines the volume of a semen sample and the number, movement (motility) and shape of the sperm. It is the first test usually requested when a couple is investigating fertility.",
    whyOrdered: [
      "Fertility investigations",
      "Follow-up after treatment or a vasectomy, as advised by a doctor",
    ],
    fasting: false,
    preparation:
      "Your doctor will usually advise 2–5 days without ejaculation beforehand. Call us before you come so we can explain how to collect and deliver the sample — it must reach the lab quickly.",
    faqs: [],
    related: ["ufr"],
  },
];

export function getTestPage(slug: string) {
  return testPages.find((t) => t.slug === slug);
}

/** Resolves a page's price-list entries; drops any that no longer exist. */
export function resolveTests(page: TestPage): FlatTest[] {
  return page.testNames
    .map((name) => findTest(name))
    .filter((t): t is FlatTest => Boolean(t));
}

/** Headline price-list entry, or undefined if it has been removed. */
export function headlineTest(page: TestPage): FlatTest | undefined {
  return findTest(page.testNames[0]);
}

/** Test-page slug for a price-list test name, if one exists. */
export function testPageSlugFor(testName: string): string | undefined {
  return testPages.find((t) => t.testNames.includes(testName))?.slug;
}

/**
 * Price-list test name → dedicated page slug. Server components pass this to
 * the client price finders so they can link without bundling the page copy.
 */
export const testPageSlugMap: Record<string, string> = Object.fromEntries(
  allTests.flatMap((t) => {
    const slug = testPageSlugFor(t.name);
    return slug ? [[t.name, slug]] : [];
  }),
);
