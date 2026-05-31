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
    blurb:
      "Our headquarters and central processing lab on Old Negombo Road, Ja-Ela — walk-in tests and home visits.",
    intro:
      "St. Luke's Medical Laboratory is headquartered in the heart of Ja-Ela on Old Negombo Road. Our fully equipped central processing facility serves residents, doctors and clinics across the Ja-Ela municipal area — every test priced transparently in LKR.",
    landmarks: ["Old Negombo Road", "Ja-Ela Town", "Ja-Ela Railway Station", "Negombo Road junction"],
    distanceFromHQ: "0 km — this is our HQ",
  },
  {
    slug: "kandana",
    name: "Kandana",
    blurb:
      "Fast, affordable blood tests and home sample collection serving Kandana on the Negombo Road corridor.",
    intro:
      "We serve Kandana on the Negombo Road corridor with the same fast, accurate diagnostics available at our Ja-Ela headquarters. Book a home visit and a qualified phlebotomist will collect your sample at your home or office — most reports back within 24 hours.",
    landmarks: ["Kandana Town", "Kandana Railway Station", "Kandana Hospital area"],
    distanceFromHQ: "~3 km from Ja-Ela HQ",
  },
  {
    slug: "welisara",
    name: "Welisara",
    blurb:
      "Diagnostic testing and home visits across Welisara (also spelt Walisara) and surrounding areas.",
    intro:
      "Welisara (also spelt Walisara) residents can access St. Luke's full range of blood tests, ECG, and full-body checkups with home sample collection or via our nearby collection centres — every price published in LKR.",
    landmarks: ["Welisara Naval Base area", "Welisara Junction", "Walisara town"],
    distanceFromHQ: "~6 km from Ja-Ela HQ",
  },
  {
    slug: "ragama",
    name: "Ragama",
    blurb:
      "Lab tests, ECG and home collection for Ragama and the teaching-hospital neighbourhood.",
    intro:
      "Serving Ragama and the surrounding teaching-hospital neighbourhood, we offer convenient blood tests, urine analysis, cardiac testing and home sample collection with 24-hour reports and transparent LKR pricing.",
    landmarks: ["Ragama Teaching Hospital", "Ragama Junction", "Kelaniya University area"],
    distanceFromHQ: "~7 km from Ja-Ela HQ",
  },
  {
    slug: "wattala",
    name: "Wattala",
    blurb:
      "Trusted, transparently-priced diagnostics and home visits for Wattala — every price published in LKR.",
    intro:
      "Wattala patients have a real alternative to chain labs that hide their pricing — St. Luke's publishes every test price in LKR, returns most reports within 24 hours, and sends a qualified phlebotomist to your door across Hendala, Mabola, Elakanda and the wider Negombo Road catchment. We sit just minutes up the corridor from our Ja-Ela headquarters.",
    landmarks: [
      "Wattala Town",
      "Hendala",
      "Mabola",
      "Elakanda",
      "Negombo Road / Old Negombo Road",
    ],
    distanceFromHQ: "~9 km from Ja-Ela HQ along Negombo Road",
  },
  {
    slug: "batagama",
    name: "Batagama",
    blurb:
      "Neighbourhood lab tests and convenient home sample collection around Batagama.",
    intro:
      "Batagama residents can call us directly to schedule a home sample collection. Our phlebotomists serve Batagama North and South with the same standards — and the same transparent LKR pricing — as our HQ lab.",
    landmarks: ["Batagama North", "Batagama South", "Kanuwana area"],
    distanceFromHQ: "~2 km from Ja-Ela HQ",
  },
  {
    slug: "thudella",
    name: "Thudella",
    blurb:
      "Reliable testing and home visits serving Thudella, minutes from our Ja-Ela lab.",
    intro:
      "Thudella patients receive priority home visits for blood tests, cardiac testing and full-body health screenings, with secure digital reports delivered the next day and every price published in LKR.",
    landmarks: ["Thudella village", "Ja-Ela outskirts"],
    distanceFromHQ: "~1.5 km from Ja-Ela HQ",
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
