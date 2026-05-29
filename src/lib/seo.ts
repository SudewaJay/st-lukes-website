export const SITE = "https://www.stlukesmedilab.com";

export const TOWNS = [
  "Ja-Ela",
  "Kandana",
  "Welisara",
  "Ragama",
  "Wattala",
  "Batagama",
  "Thudella",
];

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE}/#organization`,
  name: "St. Luke's Medical Laboratory",
  url: `${SITE}/`,
  logo: `${SITE}/logo.png`,
  image: `${SITE}/hero-photo.jpeg`,
  telephone: "+94711231954",
  email: "info@stlukesmedilab.com",
  priceRange: "LKR 100–4,250",
  medicalSpecialty: "Pathology",
  currenciesAccepted: "LKR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 67, Old Negombo Road",
    addressLocality: "Ja-Ela",
    addressRegion: "Western Province",
    postalCode: "11350",
    addressCountry: "LK",
  },
  hasMap: "https://maps.app.goo.gl/ssRxtUg5VJDPYVdL9",
  areaServed: TOWNS.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "07:00",
      closes: "13:00",
    },
  ],
  sameAs: [] as string[],
  availableService: [
    { "@type": "MedicalTest", name: "Complete Blood Count (CBC / FBC)" },
    { "@type": "MedicalTest", name: "Lipid Profile" },
    { "@type": "MedicalTest", name: "Fasting Blood Sugar (FBS)" },
    { "@type": "MedicalTest", name: "Liver Function Test (LFT)" },
    { "@type": "MedicalTest", name: "Renal / Kidney Profile" },
    { "@type": "MedicalTest", name: "Dengue NS1 Antigen" },
    { "@type": "MedicalTest", name: "Electrocardiogram (ECG)" },
    { "@type": "MedicalTest", name: "Urine Full Report (UFR)" },
  ],
  hasEquipment: [
    { "@type": "MedicalDevice", name: "Chemiluminescence Immunoassay (CLIA) Analyzer" },
    { "@type": "MedicalDevice", name: "BioSystems A15 Fully Automated Biochemistry Analyzer" },
    { "@type": "MedicalDevice", name: "Audicom Electrolyte Analyzer" },
    { "@type": "MedicalDevice", name: "Medonic Hematology Analyzer" },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer home blood collection in Ja-Ela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide home sample collection across Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama and Thudella. Call +94 71 123 1954 to book.",
      },
    },
    {
      "@type": "Question",
      name: "How fast are reports delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most reports are delivered within 24 hours and are available digitally.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to fast before a blood test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fasting (8–12 hours) is required for tests such as FBS and the lipid profile. Our team will advise when you book.",
      },
    },
    {
      "@type": "Question",
      name: "Where is St. Luke's Medical Laboratory located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our headquarters is at No. 67, Old Negombo Road, Ja-Ela, Sri Lanka. We also operate 20+ collection centres across the region.",
      },
    },
  ],
};

export const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Health Checkup Packages — St. Luke's Medical Laboratory",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Basic Wellness Profile",
      priceCurrency: "LKR",
      price: "1500",
      itemOffered: { "@type": "MedicalTest", name: "CBC, FBS, UFR, Lipid Profile" },
    },
    {
      "@type": "Offer",
      name: "Comprehensive Full Body",
      priceCurrency: "LKR",
      price: "4100",
      itemOffered: {
        "@type": "MedicalTest",
        name: "LFT, Kidney Profile, Resting ECG, Thyroid + Basic Wellness",
      },
    },
    {
      "@type": "Offer",
      name: "Senior Citizen Care",
      priceCurrency: "LKR",
      price: "3500",
      itemOffered: {
        "@type": "MedicalTest",
        name: "Bone density, Vitamin D & B12, Prostate/Ovarian, Priority Home Collection",
      },
    },
  ],
};
