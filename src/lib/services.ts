export type Service = {
  slug: string;
  name: string;
  shortDesc: string;
  what: string;
  why: string;
  preparation: string;
  schemaType: "MedicalTest" | "MedicalProcedure";
};

export const services: Service[] = [
  {
    slug: "blood-tests",
    name: "Blood Tests in Ja-Ela",
    shortDesc:
      "Complete Blood Count (CBC/FBC), Lipid Profile, FBS, LFT and full biochemistry panels with 24-hour reports.",
    what:
      "We offer the complete range of routine and specialist blood tests — Complete Blood Count (CBC/FBC), Lipid Profile, Fasting Blood Sugar (FBS), Liver Function Test (LFT), Kidney Profile, Thyroid panels, HbA1c, Vitamin D and B12, dengue NS1, and many more.",
    why:
      "Regular blood testing helps catch disease early, monitor chronic conditions, and confirm you are responding to treatment. Most of our blood tests are reported within 24 hours digitally.",
    preparation:
      "Many tests (FBS, lipid profile, LFT) require 8–12 hours of fasting. Drink water normally. Our team will advise on prep when you book.",
    schemaType: "MedicalTest",
  },
  {
    slug: "ecg-cardiac-tests",
    name: "ECG & Cardiac Tests in Ja-Ela",
    shortDesc:
      "Resting electrocardiograms and cardiac marker testing performed by experienced technicians.",
    what:
      "Our resting ECG records the electrical activity of your heart in just a few minutes. We also offer cardiac markers (Troponin), Lipid Profile and other tests that assess cardiovascular health.",
    why:
      "ECG and cardiac markers help detect arrhythmia, heart attack and other cardiac conditions early. They are recommended before surgery, at certain ages and when you experience chest pain, palpitations or shortness of breath.",
    preparation:
      "No fasting required for a resting ECG. Avoid heavy meals and caffeine an hour before. Wear loose clothing for easy electrode placement.",
    schemaType: "MedicalProcedure",
  },
  {
    slug: "home-blood-collection",
    name: "Home Blood Collection in Ja-Ela & Surrounds",
    shortDesc:
      "We send a qualified phlebotomist to your home across Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama and Thudella.",
    what:
      "Book a home visit and a qualified phlebotomist will collect your sample at your home or office. Samples are transported in temperature-controlled containers to our Ja-Ela lab and results are sent digitally within 24 hours.",
    why:
      "Home collection is ideal for seniors, busy professionals, post-operative patients and anyone who prefers the comfort and safety of testing at home.",
    preparation:
      "Confirm fasting requirements when booking. Have a valid ID and any doctor's request ready for the phlebotomist.",
    schemaType: "MedicalProcedure",
  },
  {
    slug: "corporate-health-screening",
    name: "Corporate Health Screening in Ja-Ela",
    shortDesc:
      "Pre-employment medical checks and annual wellness programmes for companies of all sizes.",
    what:
      "We design custom health-check panels for your team — pre-employment screening, annual executive checkups and wellness drives delivered at your workplace or our lab.",
    why:
      "Healthy employees take fewer sick days, perform better and stay loyal longer. Our corporate packages help HR teams demonstrate genuine care while meeting compliance requirements.",
    preparation:
      "Contact us to design a panel that matches your industry, headcount and budget. We handle scheduling, sample collection on-site and consolidated reporting.",
    schemaType: "MedicalProcedure",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
