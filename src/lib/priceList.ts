export type Test = { name: string; price: number; was?: number; note?: string };
export type PriceCategory = { category: string; tests: Test[] };

// Source of truth — verified list (spec v2.0 §4.2). Do not invent values.
export const priceList: PriceCategory[] = [
  {
    category: "Urine & Fluid Analysis",
    tests: [
      { name: "Urine Full Report (UFR)", price: 400 },
      { name: "Urine Microalbumin / UACR", price: 1400 },
      { name: "Urine Sugar", price: 100 },
      { name: "Urine Albumin", price: 100 },
      { name: "Urine Sugar & Albumin", price: 150 },
      { name: "SFR + Sugar", price: 400 },
      { name: "Seminal Fluid Analysis (SFA)", price: 500 },
      { name: "Pregnancy Test (HCG)", price: 250 },
    ],
  },
  {
    category: "Blood Sugar / Diabetes",
    tests: [
      { name: "Fasting Blood Sugar (FBS)", price: 280 },
      { name: "Post Prandial Blood Sugar (PPBS)", price: 280 },
      { name: "Random Blood Sugar (RBS)", price: 280 },
      { name: "3 Point Sugar Profile", price: 850 },
      { name: "Glucose Challenge Test (GCT)", price: 750, note: "with FBS" },
      { name: "OGTT (1st hr, 2nd hr, FBS)", price: 1300 },
      { name: "OGTT (FBS, 2nd hr)", price: 1000 },
      { name: "HbA1C", price: 2100 },
    ],
  },
  {
    category: "Haematology",
    tests: [
      { name: "Full Blood Count (FBC)", price: 400 },
      { name: "WBC / DC", price: 250 },
      { name: "Platelet Count", price: 400 },
      { name: "Haemoglobin (Hb)", price: 400 },
      { name: "ESR", price: 400 },
      { name: "Blood Group", price: 550 },
      { name: "Malarial Parasites", price: 250 },
      { name: "Ferritin", price: 2400 },
    ],
  },
  {
    category: "Coagulation",
    tests: [
      { name: "Bleeding Time", price: 300 },
      { name: "Clotting Time", price: 300 },
      { name: "PT / INR", price: 1200 },
    ],
  },
  {
    category: "Lipids & Cardiac",
    tests: [
      { name: "Serum Cholesterol", price: 700 },
      { name: "Lipid Profile", price: 1500 },
    ],
  },
  {
    category: "Liver Function",
    tests: [
      { name: "Serum Alkaline Phosphatase", price: 700 },
      { name: "Protein (Total, Albumin, Globulin)", price: 1200 },
      { name: "Gamma GT (GGT)", price: 700 },
      { name: "SGOT (AST)", price: 650 },
      { name: "SGPT (ALT)", price: 650 },
      { name: "Serum Bilirubin (Total)", price: 700 },
      { name: "Serum Bilirubin (Direct / Indirect)", price: 1300 },
      { name: "Liver Function Test (LFT)", price: 2250 },
      { name: "Liver Profile", price: 4000 },
    ],
  },
  {
    category: "Renal / Kidney",
    tests: [
      { name: "Blood Urea", price: 650 },
      { name: "Serum Creatinine", price: 650 },
      { name: "Serum Creatinine with GFR", price: 700 },
      { name: "Serum Electrolytes", price: 1350 },
      { name: "Serum Uric Acid", price: 850 },
      { name: "Calcium (Total)", price: 850 },
      { name: "Ionized Calcium (Ca²⁺)", price: 1350 },
      { name: "Renal Profile", price: 4400 },
      { name: "Renal Function Test (RFT)", price: 2200 },
    ],
  },
  {
    category: "Thyroid & Hormones",
    tests: [
      { name: "TSH", price: 1800 },
      { name: "Free T4 (FT4)", price: 1900 },
      { name: "Free T3 (FT3)", price: 1900 },
    ],
  },
  {
    category: "Inflammation & Immunology",
    tests: [
      { name: "C-Reactive Protein (CRP)", price: 900 },
      { name: "Rheumatoid Factor (quantitative)", price: 1000, note: "titre" },
    ],
  },
  {
    category: "Infectious Disease",
    tests: [
      { name: "HIV 1, 2", price: 1800 },
      { name: "VDRL", price: 1000 },
      { name: "HBs Ag", price: 1200 },
      { name: "Dengue NS1 Ag", price: 1200 },
    ],
  },
  {
    category: "Vitamins",
    tests: [{ name: "Vitamin D", price: 7000 }],
  },
  {
    category: "Comprehensive Panels",
    tests: [{ name: "Full Body Tests", price: 4300 }],
  },
];
