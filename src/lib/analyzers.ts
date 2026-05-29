export type Analyzer = {
  slug: string;
  name: string;
  manufacturer: string;
  category: string;
  description: string;
  tests: string[];
  image: string;
};

export const analyzers: Analyzer[] = [
  {
    slug: "clia-analyzer",
    name: "Chemiluminescence Immunoassay (CLIA) Analyzer",
    manufacturer: "Clinical-grade CLIA platform",
    category: "Immunoassay",
    description:
      "High-sensitivity hormonal, thyroid, fertility and tumour-marker testing using chemiluminescence — the gold standard for immunoassays in modern diagnostic laboratories.",
    tests: [
      "Thyroid panel (TSH, T3, T4, FT3, FT4)",
      "Fertility & hormones (FSH, LH, Prolactin, Testosterone)",
      "Vitamin D, Vitamin B12",
      "Tumour markers (PSA, CEA, CA-125, AFP)",
    ],
    image: "/equipment/clia-analyzer.jpg",
  },
  {
    slug: "biosystems-a15",
    name: "BioSystems A15 Fully Automated Biochemistry Analyzer",
    manufacturer: "BioSystems (Spain)",
    category: "Biochemistry",
    description:
      "Fully automated random-access analyzer for liver, kidney, lipid, cardiac and metabolic panels — delivers consistent, repeatable biochemistry results at scale.",
    tests: [
      "Liver Function Test (LFT)",
      "Renal / Kidney Profile",
      "Lipid Profile",
      "Glucose (FBS, PPBS, RBS, HbA1c)",
      "Electrolytes & enzymes",
    ],
    image: "/equipment/biosystems-a15.jpg",
  },
  {
    slug: "audicom-electrolyte",
    name: "Audicom Electrolyte Analyzer",
    manufacturer: "Audicom",
    category: "Electrolytes",
    description:
      "Dedicated ISE-based electrolyte analyzer for fast, accurate sodium, potassium, chloride and ionised-calcium results — critical for cardiac, renal and emergency workups.",
    tests: [
      "Sodium (Na+)",
      "Potassium (K+)",
      "Chloride (Cl-)",
      "Ionised Calcium",
    ],
    image: "/equipment/audicom-electrolyte.jpg",
  },
  {
    slug: "medonic-hematology",
    name: "Medonic Hematology Analyzer",
    manufacturer: "Boule Medical — Medonic",
    category: "Hematology",
    description:
      "Automated CBC analyzer with full 3-part differential — delivers accurate Complete Blood Count (FBC), platelet, haemoglobin and ESR-related results in minutes.",
    tests: [
      "Complete Blood Count (CBC / FBC)",
      "WBC differential",
      "Platelet count",
      "Haemoglobin (Hb)",
    ],
    image: "/equipment/medonic-hematology.jpg",
  },
];
