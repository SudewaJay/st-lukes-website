export type Package = {
  name: string;
  desc: string;
  priceLKR: number;
  includes: string[];
  recommended: boolean;
};

export const packages: Package[] = [
  {
    name: "Basic Wellness Profile",
    desc: "Essential screening suitable for evaluating overall health status.",
    priceLKR: 1500,
    includes: [
      "Complete Blood Count (CBC)",
      "Fasting Blood Sugar (FBS)",
      "Urine Full Report (UFR)",
      "Standard Lipid Profile",
    ],
    recommended: false,
  },
  {
    name: "Comprehensive Full Body",
    desc: "An in-depth health evaluation covering major vital organs.",
    priceLKR: 4100,
    includes: [
      "Everything in Basic Wellness",
      "Advanced Liver Function Test",
      "Comprehensive Kidney Profile",
      "Resting ECG & Cardiac Markers",
      "Thyroid Function Profile",
    ],
    recommended: true,
  },
  {
    name: "Senior Citizen Care",
    desc: "Tailored health assessments designed specifically for older adults.",
    priceLKR: 3500,
    includes: [
      "Arthritis & Bone Density Markers",
      "Prostate / Ovarian Health Checks",
      "Vitamin D & B12 Levels",
      "Priority Home Collection",
    ],
    recommended: false,
  },
];

export const formatLKR = (n: number) =>
  new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 }).format(n);
