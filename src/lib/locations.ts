export type Location = {
  slug: string;
  name: string;
  isHQ?: boolean;
  blurb: string;
  intro: string;
  landmarks: string[];
  distanceFromHQ: string;
};

export const locations: Location[] = [
  {
    slug: "ja-ela",
    name: "Ja-Ela",
    isHQ: true,
    blurb: "Our headquarters and central processing lab on Old Negombo Road, Ja-Ela.",
    intro:
      "St. Luke's Medical Laboratory is headquartered in the heart of Ja-Ela on Old Negombo Road. Our fully equipped central processing facility serves residents, doctors and clinics across the Ja-Ela municipal area.",
    landmarks: ["Old Negombo Road", "Ja-Ela Town", "Ja-Ela Railway Station", "Negombo Road junction"],
    distanceFromHQ: "0 km — this is our HQ",
  },
  {
    slug: "kandana",
    name: "Kandana",
    blurb: "Fast blood tests and home sample collection serving Kandana.",
    intro:
      "We serve Kandana with the same fast, accurate diagnostics available at our Ja-Ela headquarters. Book a home visit and a qualified phlebotomist will collect your sample at your home or office.",
    landmarks: ["Kandana Town", "Kandana Railway Station", "Kandana Hospital area"],
    distanceFromHQ: "~3 km from Ja-Ela HQ",
  },
  {
    slug: "welisara",
    name: "Welisara",
    blurb: "Diagnostic testing and home visits across Welisara (Walisara).",
    intro:
      "Welisara (sometimes spelled Walisara) residents can access St. Luke's full range of blood tests, ECG, and full-body checkups with home sample collection or via our nearby collection centres.",
    landmarks: ["Welisara Naval Base area", "Welisara Junction", "Walisara town"],
    distanceFromHQ: "~6 km from Ja-Ela HQ",
  },
  {
    slug: "ragama",
    name: "Ragama",
    blurb: "Lab tests and ECG for Ragama and the teaching-hospital catchment.",
    intro:
      "Serving Ragama and the surrounding teaching-hospital catchment, we offer convenient blood tests, urine analysis, cardiac testing and home sample collection with 24-hour reports.",
    landmarks: ["Ragama Teaching Hospital", "Ragama Junction", "Kelaniya University area"],
    distanceFromHQ: "~7 km from Ja-Ela HQ",
  },
  {
    slug: "wattala",
    name: "Wattala",
    blurb: "Trusted diagnostics and home collection for Wattala.",
    intro:
      "Wattala patients trust St. Luke's for fast, accurate diagnostics. Home blood collection is available across all major Wattala neighbourhoods, with digital reports delivered within 24 hours.",
    landmarks: ["Wattala Town", "Hendala", "Mabola", "Negombo Road"],
    distanceFromHQ: "~9 km from Ja-Ela HQ",
  },
  {
    slug: "batagama",
    name: "Batagama",
    blurb: "Neighbourhood lab tests and home visits around Batagama.",
    intro:
      "Batagama residents can call us directly to schedule a home sample collection. Our phlebotomists serve Batagama North and South with the same standards as our HQ lab.",
    landmarks: ["Batagama North", "Batagama South", "Kanuwana area"],
    distanceFromHQ: "~2 km from Ja-Ela HQ",
  },
  {
    slug: "thudella",
    name: "Thudella",
    blurb: "Convenient sample collection serving Thudella.",
    intro:
      "Thudella patients receive priority home visits for blood tests, cardiac testing and full-body health screenings, with secure digital reports delivered the next day.",
    landmarks: ["Thudella village", "Ja-Ela outskirts"],
    distanceFromHQ: "~1.5 km from Ja-Ela HQ",
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
