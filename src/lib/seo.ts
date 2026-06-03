export const SITE = "https://www.stlukesmedilab.com";

export const NAP = {
  name: "St. Luke's Medical Laboratory",
  street: "No. 67, Old Negombo Road",
  city: "Ja-Ela",
  region: "Western Province",
  postalCode: "11350",
  country: "LK",
  phone: "+94711231954",
  phoneDisplay: "071 123 1954",
  email: "medilabstlukes@gmail.com",
};

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
  name: NAP.name,
  // Entity disambiguation — helps Google distinguish us from St. Luke's
  // hospitals in the US / Philippines that dominate brand searches.
  alternateName: [
    "St Luke's Medilab",
    "St. Luke's Medilab",
    "St Lukes Medical Laboratory",
    "St. Luke's Lab Ja-Ela",
    "St. Luke's Medical Lab",
  ],
  description:
    "Independent medical diagnostic laboratory in Ja-Ela, Sri Lanka — blood tests, ECG, full-body checkups and home sample collection with transparent LKR pricing.",
  slogan: "Together for Better Health",
  url: `${SITE}/`,
  logo: `${SITE}/logo.png`,
  image: `${SITE}/hero-photo.jpeg`,
  telephone: NAP.phone,
  email: NAP.email,
  priceRange: "LKR 100–6,000",
  medicalSpecialty: "Pathology",
  currenciesAccepted: "LKR",
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.street,
    addressLocality: NAP.city,
    addressRegion: NAP.region,
    postalCode: NAP.postalCode,
    addressCountry: NAP.country,
  },
  // TODO <<CONFIRM optional>>: add geo coordinates from Maps URL
  // geo: { "@type": "GeoCoordinates", latitude: "", longitude: "" },
  hasMap: "https://maps.app.goo.gl/ssRxtUg5VJDPYVdL9",
  areaServed: TOWNS.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:30",
      closes: "12:30",
    },
  ],
  // aggregateRating intentionally omitted — 5.0 from 3 reviews is too thin to safely publish.
  // TODO <<CONFIRM>>: fill GBP and Facebook URLs (the filter strips unconfirmed placeholders)
  sameAs: ["<<GBP_URL>>", "<<FB_URL>>"].filter((u) => !u.startsWith("<<")),
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

// Helps Google show a sitelinks search box and recognise the canonical site name.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: NAP.name,
  alternateName: "St. Luke's Medilab",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: "en-LK",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE}/price-list?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Hints at the top-level pages we want to surface as sitelinks.
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Primary navigation",
  itemListElement: [
    { "@type": "SiteNavigationElement", position: 1, name: "Home", url: `${SITE}/` },
    { "@type": "SiteNavigationElement", position: 2, name: "About Us", url: `${SITE}/about` },
    { "@type": "SiteNavigationElement", position: 3, name: "Services", url: `${SITE}/services` },
    { "@type": "SiteNavigationElement", position: 4, name: "Lab Technology", url: `${SITE}/technology` },
    { "@type": "SiteNavigationElement", position: 5, name: "Health Packages", url: `${SITE}/packages` },
    { "@type": "SiteNavigationElement", position: 6, name: "Locations", url: `${SITE}/locations` },
    { "@type": "SiteNavigationElement", position: 7, name: "Price List", url: `${SITE}/price-list` },
    { "@type": "SiteNavigationElement", position: 8, name: "Health Hub (Blog)", url: `${SITE}/blog` },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer home blood collection in Ja-Ela and nearby towns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide home sample collection across Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama and Thudella. Call 071 123 1954 to book a home visit.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I get my lab report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most reports are ready within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to fast before my blood test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fasting of 8–12 hours is required for tests such as Fasting Blood Sugar and the Lipid Profile. Our team advises you when you book.",
      },
    },
    {
      "@type": "Question",
      name: "Are your test prices published?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — every test price is listed in LKR on our price list page, with no hidden charges.",
      },
    },
  ],
};
