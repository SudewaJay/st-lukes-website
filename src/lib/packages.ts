export type Package = {
  slug: string;
  name: string;
  priceLKR: number;
  tagline: string;
  description: string;
  recommended?: boolean;
  includes: string[];
};

// Per spec §3 item 2: NO "% savings" line until Package 2 is re-priced.
// Per spec §3 item 3: package names are suggestions — editable.
export const packages: Package[] = [
  {
    slug: "full-body-health-check",
    name: "Full Body Health Check",
    priceLKR: 4700,
    recommended: true,
    tagline: "A complete routine health screen.",
    description:
      "Complete annual screen: blood count, sugar, cholesterol, liver, kidney function.",
    includes: [
      "Full Blood Count (FBC)",
      "ESR",
      "Fasting Blood Sugar (FBS)",
      "Lipid Profile",
      "SGOT",
      "SGPT",
      "Serum Creatinine",
      "Blood Urea",
      "Urine Full Report (UFR)",
    ],
  },
  {
    slug: "joint-pain-fatigue-profile",
    name: "Joint Pain & Fatigue Profile",
    // TODO <<CONFIRM/RE-PRICE>> — see spec §3 item 2. Currently priced higher than its tests bought
    // individually (3,880). Either re-price (~3,400) or publish as supplied.
    priceLKR: 4500,
    tagline: "For body aches, joint pain and tiredness.",
    description:
      "Checks inflammation, rheumatoid, thyroid and blood markers behind aches, fatigue.",
    includes: [
      "Full Blood Count (FBC)",
      "ESR",
      "C-Reactive Protein (CRP)",
      "Rheumatoid (RA) Factor",
      "TSH",
      "Fasting Blood Sugar (FBS)",
      "Urine Full Report (UFR)",
    ],
  },
  {
    slug: "kidney-health-profile",
    name: "Kidney Health Profile",
    priceLKR: 3500,
    tagline: "Kidney function and gout risk.",
    description:
      "Focused kidney function and gout check: electrolytes, creatinine, uric acid.",
    includes: [
      "Serum Electrolytes",
      "Ionized Calcium",
      "Serum Creatinine with GFR",
      "Serum Uric Acid",
      "Urine Full Report (UFR)",
    ],
  },
  {
    slug: "diabetic-kidney-profile",
    name: "Diabetic Kidney Profile",
    priceLKR: 3600,
    tagline: "Early kidney monitoring for diabetes.",
    description:
      "For diabetics: catches early kidney damage via urine microalbumin marker.",
    includes: [
      "Urine Microalbumin (UACR)",
      "Serum Electrolytes",
      "Ionized Calcium",
      "Serum Creatinine with GFR",
    ],
  },
];

export const formatLKR = (n: number) => n.toLocaleString("en-LK");
