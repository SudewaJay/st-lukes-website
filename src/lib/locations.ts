export type TownFaq = { q: string; a: string };

export type Location = {
  slug: string;
  name: string;
  isHQ?: boolean;
  /** True for towns we cover by home visit / courier only — no walk-in centre.
   *  Drives honest "service area" framing so we never imply a branch we don't have. */
  isServiceArea?: boolean;
  blurb: string;
  intro: string;
  landmarks: string[];
  distanceFromHQ: string;
  /** Sri Lanka postal code — small but real local-relevance signal. */
  postcode?: string;
  /** Sub-areas / neighbourhoods — captures long-tail "<neighbourhood> blood test" queries. */
  neighbourhoods?: string[];
  /** A UNIQUE value-proposition paragraph tailored to this area's real character.
   *  This is the main anti-doorway field — never reuse copy between towns. */
  serviceAngle?: string;
  /** Tests / services especially relevant to this area (e.g. pre-employment in Katunayake). */
  localFocus?: string[];
  /** Town-specific FAQs — unique content + FAQPage schema + "People also ask" capture. */
  faqs?: TownFaq[];
  /**
   * Exact map location for this centre, as a Google Maps Embed `q` value.
   * Accepts "lat,lng" (best — from a shared pin), a full address, or a place name.
   * When set, the location page map points HERE instead of the town centre / HQ.
   * Fill this from the Google Maps share link the client provides per centre.
   */
  mapQuery?: string;
};

export const locations: Location[] = [
  {
    slug: "ja-ela",
    name: "Ja-Ela",
    isHQ: true,
    postcode: "11350",
    blurb:
      "Our headquarters and central processing lab on Old Negombo Road, Ja-Ela — walk-in tests and home visits.",
    intro:
      "St. Luke's Medical Laboratory is headquartered in the heart of Ja-Ela on Old Negombo Road. Our fully equipped central processing facility serves residents, doctors and clinics across the Ja-Ela municipal area — every test priced transparently in LKR.",
    serviceAngle:
      "As our home base, Ja-Ela gets the fastest turnaround of anywhere we serve: samples go straight onto our analysers with no transport delay, so most reports are ready the same day or within 24 hours. Walk in without an appointment, or book a home visit anywhere in the town.",
    landmarks: ["Old Negombo Road", "Ja-Ela Town", "Ja-Ela Railway Station", "Negombo Road junction"],
    neighbourhoods: ["Ja-Ela Town", "Weligampitiya", "Gampaha Road area", "Kanuwana"],
    distanceFromHQ: "0 km — this is our HQ",
    faqs: [
      {
        q: "Where exactly is your Ja-Ela laboratory?",
        a: "We are at No. 67, Old Negombo Road, Ja-Ela — on the main Negombo Road corridor, easy to reach from Ja-Ela town, the railway station and the Colombo–Negombo highway.",
      },
      {
        q: "Can I walk in for a blood test in Ja-Ela without an appointment?",
        a: "Yes. Our Ja-Ela HQ takes walk-in patients Monday to Saturday 07:00–19:30 and Sunday 07:30–12:30. Fasting tests are best done early morning.",
      },
    ],
  },
  {
    slug: "kandana",
    name: "Kandana",
    postcode: "11320",
    blurb:
      "Fast, affordable blood tests and home sample collection serving Kandana on the Negombo Road corridor.",
    intro:
      "We serve Kandana on the Negombo Road corridor with the same fast, accurate diagnostics available at our Ja-Ela headquarters. Book a home visit and a qualified phlebotomist will collect your sample at your home or office — most reports back within 24 hours.",
    serviceAngle:
      "Kandana sits just one stop down the railway line and a few minutes down Negombo Road from our lab, so home visits here are quick to schedule and samples reach our analysers fast. It's an easy alternative to queueing at a chain lab in Colombo.",
    landmarks: ["Kandana Town", "Kandana Railway Station", "Kandana Hospital area"],
    neighbourhoods: ["Kandana Town", "Gonawala", "Pattiya", "Dandugama"],
    distanceFromHQ: "~3 km from Ja-Ela HQ",
    faqs: [
      {
        q: "Do you collect blood samples from homes in Kandana?",
        a: "Yes. A qualified phlebotomist visits your home or office anywhere in Kandana, collects the sample under proper conditions and transports it to our Ja-Ela lab. Call 071 123 1954 to book.",
      },
    ],
  },
  {
    slug: "welisara",
    name: "Welisara",
    postcode: "11730",
    blurb:
      "Diagnostic testing and home visits across Welisara (also spelt Walisara) and surrounding areas.",
    intro:
      "Welisara (also spelt Walisara) residents can access St. Luke's full range of blood tests, ECG, and full-body checkups with home sample collection — a qualified phlebotomist comes to your home or office, and every price is published in LKR.",
    serviceAngle:
      "We cover Welisara and the surrounding Naval-base neighbourhoods with scheduled home visits and next-day reporting, so families and service personnel can get routine bloods, diabetic checks and full-body screenings done without travelling into Colombo.",
    landmarks: ["Welisara Naval Base area", "Welisara Junction", "Walisara town"],
    neighbourhoods: ["Welisara Junction", "Thewatta", "Nedurupitiya", "Bopitiya"],
    distanceFromHQ: "~6 km from Ja-Ela HQ",
    faqs: [
      {
        q: "Do you serve the Welisara (Walisara) area for home blood tests?",
        a: "Yes — whether you spell it Welisara or Walisara, we cover the whole area with home sample collection and 24-hour reports. Book on 071 123 1954.",
      },
    ],
  },
  {
    slug: "ragama",
    name: "Ragama",
    postcode: "11010",
    blurb:
      "Lab tests, ECG and home collection for Ragama and the teaching-hospital neighbourhood.",
    intro:
      "Serving Ragama and the surrounding teaching-hospital neighbourhood, we offer convenient blood tests, urine analysis, cardiac testing and home sample collection with 24-hour reports and transparent LKR pricing.",
    serviceAngle:
      "Ragama patients often need repeat monitoring around the teaching hospital — kidney profiles, liver panels, blood sugar and full blood counts. We come to your home for the sample so you skip the queue, and publish every price in LKR up front.",
    landmarks: ["Ragama Teaching Hospital", "Ragama Junction", "Kelaniya University area"],
    neighbourhoods: ["Ragama Junction", "Thewatta", "Kadolkele Road", "Gonawala border"],
    distanceFromHQ: "~7 km from Ja-Ela HQ",
    faqs: [
      {
        q: "Can you do regular monitoring blood tests at home in Ragama?",
        a: "Yes. For patients managing diabetes, kidney or liver conditions we schedule repeat home visits in Ragama and deliver secure digital reports, usually within 24 hours.",
      },
    ],
  },
  {
    slug: "wattala",
    name: "Wattala",
    postcode: "11300",
    blurb:
      "Trusted, transparently-priced diagnostics and home visits for Wattala — every price published in LKR.",
    intro:
      "Wattala patients have a real alternative to chain labs that hide their pricing — St. Luke's publishes every test price in LKR, returns most reports within 24 hours, and sends a qualified phlebotomist to your door across Hendala, Mabola, Elakanda and the wider Negombo Road catchment. We sit just minutes up the corridor from our Ja-Ela headquarters.",
    serviceAngle:
      "Wattala is the most competitive part of our corridor, with a big chain lab on Negombo Road. Our edge is simple: fully published LKR prices with no hidden charges, home collection to your door, and 24-hour reports — so you get the same tests without the mark-up or the queue.",
    landmarks: [
      "Wattala Town",
      "Hendala",
      "Mabola",
      "Elakanda",
      "Negombo Road / Old Negombo Road",
    ],
    neighbourhoods: ["Hendala", "Mabola", "Elakanda", "Kerawalapitiya", "Kurunduwatta"],
    distanceFromHQ: "~9 km from Ja-Ela HQ along Negombo Road",
    faqs: [
      {
        q: "Why choose St. Luke's over a chain lab in Wattala?",
        a: "We publish every price in LKR with no hidden charges, come to your home to collect the sample, and return most reports within 24 hours — the same accredited-standard tests without the chain-lab mark-up.",
      },
    ],
  },
  {
    slug: "batagama",
    name: "Batagama",
    postcode: "11350",
    blurb:
      "Neighbourhood lab tests and convenient home sample collection around Batagama.",
    intro:
      "Batagama residents can call us directly to schedule a home sample collection. Our phlebotomists serve Batagama North and South with the same standards — and the same transparent LKR pricing — as our HQ lab.",
    serviceAngle:
      "Batagama is minutes from our HQ, so it's one of the quickest areas for us to reach — ideal for elderly patients, families with young children, or anyone who'd rather not travel for a routine blood test.",
    landmarks: ["Batagama North", "Batagama South", "Kanuwana area"],
    neighbourhoods: ["Batagama North", "Batagama South", "Kanuwana", "Ekala border"],
    distanceFromHQ: "~2 km from Ja-Ela HQ",
    faqs: [
      {
        q: "Do you cover both Batagama North and Batagama South?",
        a: "Yes, we cover both Batagama North and South for home sample collection, with the same pricing and 24-hour reporting as our Ja-Ela lab.",
      },
    ],
  },
  {
    slug: "thudella",
    name: "Thudella",
    postcode: "11350",
    blurb:
      "Reliable testing and priority home visits serving Thudella, minutes from our Ja-Ela lab.",
    intro:
      "Thudella patients receive priority home visits for blood tests, cardiac testing and full-body health screenings, with secure digital reports delivered the next day and every price published in LKR.",
    serviceAngle:
      "Thudella sits right on the doorstep of our Ja-Ela headquarters — barely a kilometre and a half away — so it's one of the fastest areas for us to reach. That means same-day sample pickup slots, minimal transport time to our analysers, and priority scheduling for elderly or bed-bound patients who can't easily travel. Every test is priced in LKR up front, with no chain-lab mark-up.",
    landmarks: ["Thudella village", "Thudella Road", "Ja-Ela outskirts", "Weligampitiya border"],
    neighbourhoods: ["Thudella village", "Weligampitiya", "Kanuwana", "Ja-Ela town border"],
    distanceFromHQ: "~1.5 km from Ja-Ela HQ",
    localFocus: [
      "Routine blood tests (CBC, blood sugar, lipids)",
      "Home ECG and cardiac screening",
      "Full-body health checkups for families and seniors",
    ],
    faqs: [
      {
        q: "How fast can you reach Thudella for a home blood test?",
        a: "Thudella is about 1.5 km from our Ja-Ela lab, so it's one of the quickest areas we serve — we can often offer same-day home collection slots, and samples reach our analysers within minutes.",
      },
      {
        q: "Can you do a home ECG for an elderly patient in Thudella?",
        a: "Yes. We carry out ECG and basic cardiac screening at home in Thudella, which is ideal for elderly or bed-bound patients. Results are reviewed and delivered as a secure digital report.",
      },
      {
        q: "Are your prices in Thudella the same as at the Ja-Ela lab?",
        a: "Exactly the same. Every test is priced in LKR on our public price list — no separate charge for being in Thudella beyond the standard home-visit arrangement, which our team confirms when you book.",
      },
    ],
  },
  {
    slug: "seeduwa",
    name: "Seeduwa",
    isServiceArea: true,
    postcode: "11410",
    blurb:
      "Home blood tests and sample collection across Seeduwa, on the Negombo Road corridor near the airport.",
    intro:
      "St. Luke's Medical Laboratory covers Seeduwa with doorstep sample collection and next-day reports. Sitting on the Negombo Road corridor between our Ja-Ela lab and Bandaranaike International Airport, Seeduwa is an easy area for us to reach — every test priced transparently in LKR, no chain-lab mark-up.",
    serviceAngle:
      "Seeduwa runs straight along the Colombo–Negombo road that our lab sits on, so scheduling a home visit here is quick and samples reach our analysers fast. It's an ideal fit for airport and hospitality staff on shift patterns, and for families who'd rather have bloods, diabetic checks or a full-body screening done at home than queue at a chain lab. We don't run a walk-in branch in Seeduwa — instead a qualified phlebotomist comes to your home or workplace, and your secure digital report follows within about 24 hours.",
    landmarks: [
      "Seeduwa Town",
      "Seeduwa Lagoon",
      "Averiwatta",
      "Bandaranaike International Airport (nearby)",
      "Colombo–Negombo Road (A3)",
    ],
    neighbourhoods: ["Seeduwa Town", "Averiwatta", "Bandaranayakapura", "Liyanagemulla border", "Kurana border"],
    distanceFromHQ: "~5 km from Ja-Ela HQ along Negombo Road",
    localFocus: [
      "Home sample collection for airport & hospitality shift workers",
      "Pre-employment and routine health checks",
      "Family full-body checkups with next-day digital reports",
    ],
    faqs: [
      {
        q: "Do you have a laboratory branch in Seeduwa?",
        a: "We don't run a walk-in branch in Seeduwa — our lab is in nearby Ja-Ela. Instead we bring the lab to you: a qualified phlebotomist collects your sample at home or work in Seeduwa, and your report is delivered within about 24 hours.",
      },
      {
        q: "Can you collect samples early or after work for shift staff near the airport?",
        a: "Yes. Because many Seeduwa residents work airport and hospitality shifts, we schedule home collection around your hours, including early-morning slots for fasting tests. Call 071 123 1954 to arrange a time.",
      },
      {
        q: "How much do blood tests cost in Seeduwa?",
        a: "Exactly what's on our public price list — every test is published in LKR with no hidden charges. You pay the same transparent price as at our Ja-Ela lab, plus a standard home-visit arrangement our team confirms when you book.",
      },
    ],
  },
  {
    slug: "katunayake",
    name: "Katunayake",
    isServiceArea: true,
    postcode: "11450",
    blurb:
      "Home and workplace blood tests for Katunayake — airport staff, Free Trade Zone workers and pre-employment medicals.",
    intro:
      "St. Luke's Medical Laboratory serves Katunayake — home of Bandaranaike International Airport and the Katunayake Export Processing Zone (Free Trade Zone) — with home and workplace sample collection, pre-employment and routine health checks, and transparent LKR pricing. We come to you; your secure digital report follows within about 24 hours.",
    serviceAngle:
      "Katunayake has needs most towns don't: thousands of Free Trade Zone factory workers, airport and airline staff, and people preparing for overseas jobs who need pre-employment or visa medical tests. We handle exactly this — workplace and home sample collection for zone factories and airport teams, individual pre-employment blood panels, and routine screening — all priced in LKR up front with no hidden charges. We don't operate a walk-in branch inside Katunayake; instead our phlebotomists travel to your home, factory or office, and reports come back as secure digital files, usually within 24 hours.",
    landmarks: [
      "Bandaranaike International Airport (BIA / CMB)",
      "Katunayake Export Processing Zone (Free Trade Zone)",
      "Katunayake Town",
      "SLAF Katunayake",
      "Averiwatta",
      "Liyanagemulla",
    ],
    neighbourhoods: ["Katunayake Town", "Free Trade Zone", "Liyanagemulla", "Averiwatta", "Kurana", "Raddoluwa border"],
    distanceFromHQ: "~9 km from Ja-Ela HQ along Negombo Road",
    localFocus: [
      "Pre-employment & overseas-job (visa) medical blood tests",
      "Workplace health screening for Free Trade Zone factories",
      "Routine blood tests for airport & airline shift staff",
      "Full blood count, blood sugar, lipids and infectious-disease panels",
    ],
    faqs: [
      {
        q: "Do you do pre-employment or visa medical blood tests in Katunayake?",
        a: "Yes. We collect samples at your home or workplace in Katunayake for pre-employment and overseas-job (visa) medical panels, and return secure digital reports quickly. Call 071 123 1954 to tell us which tests your employer or agency requires.",
      },
      {
        q: "Can you screen a group of Free Trade Zone factory workers on site?",
        a: "Yes. We arrange workplace visits for Katunayake FTZ factories and offices to collect samples for groups of staff in one session, with per-test LKR pricing agreed in advance. Contact us to plan a group screening.",
      },
      {
        q: "Is there a St. Luke's walk-in lab inside Katunayake?",
        a: "No — our processing lab is in nearby Ja-Ela, about 9 km down Negombo Road. For Katunayake we bring the service to you with home and workplace sample collection, so you don't need to travel or queue.",
      },
      {
        q: "How quickly are Katunayake reports ready?",
        a: "Most reports are ready within 24 hours and delivered as a secure digital file — convenient for airport shift staff and for employers who need results without delay.",
      },
    ],
  },
  {
    slug: "negombo",
    name: "Negombo",
    isServiceArea: true,
    postcode: "11500",
    blurb:
      "Home visit blood tests and full-body checkups across Negombo — samples collected at your door, digital reports emailed.",
    intro:
      "St. Luke's Medical Laboratory brings home-visit diagnostics to Negombo. A qualified phlebotomist collects your sample at your home, hotel or office anywhere in the city, and your secure report is delivered digitally — usually within 24 hours. Every test is priced transparently in LKR, so there are no surprises.",
    serviceAngle:
      "Negombo is a busy coastal city with a large expat and visitor community as well as local families, and not everyone wants to spend part of their day queueing at a laboratory. Our home-visit service fits that perfectly: we come to your address in Negombo — home, guesthouse or hotel — take the sample, and email a secure digital report you can share with any doctor, in Sri Lanka or abroad. Our processing lab is in Ja-Ela, about 15 km down the coast road, so Negombo is a scheduled home-collection area rather than a walk-in branch; we plan visits ahead and confirm your slot when you book. Every price is published in LKR up front.",
    landmarks: [
      "Negombo Town & Main Bus Stand",
      "Negombo Beach & Poruthota / Ettukala hotel strip",
      "Negombo Lagoon",
      "St. Mary's Church",
      "Kochchikade",
      "Katana border",
    ],
    neighbourhoods: ["Negombo Town", "Poruthota / Ettukala", "Kochchikade", "Kudapaduwa", "Munnakkaraya", "Katana border"],
    distanceFromHQ: "~15 km from Ja-Ela HQ along the coast road",
    localFocus: [
      "Home & hotel sample collection for residents, expats and visitors",
      "Full-body health checkups with digital reports emailed worldwide",
      "Routine blood tests, diabetic and lipid monitoring at home",
    ],
    faqs: [
      {
        q: "Do you have a laboratory in Negombo?",
        a: "Our processing lab is in Ja-Ela, about 15 km from Negombo. We serve Negombo as a scheduled home-visit area — a phlebotomist comes to your home, hotel or office to collect the sample, so you don't need to travel to a lab.",
      },
      {
        q: "Can you collect a sample from my hotel or guesthouse in Negombo?",
        a: "Yes. We regularly visit homes, guesthouses and hotels along the Negombo beach and Ettukala strip. We collect the sample at your room and email your secure digital report, which you can share with any doctor at home or abroad.",
      },
      {
        q: "Will I get my Negombo test report by email?",
        a: "Yes — reports are delivered as secure digital files, usually within 24 hours, which is convenient for visitors and expats who want to forward results to a doctor overseas. Every test is priced in LKR up front.",
      },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
