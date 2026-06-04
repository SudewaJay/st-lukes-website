import { services } from "./services";
import { locations } from "./locations";
import { packages } from "./packages";
import { priceList } from "./priceList";

function buildContext(): string {
  const svc = services
    .map((s) => `- ${s.name}: ${s.shortDesc} Preparation: ${s.preparation}`)
    .join("\n");

  const loc = locations
    .map((l) => `- ${l.name}${l.isHQ ? " (HQ)" : ""}: ${l.blurb} (${l.distanceFromHQ})`)
    .join("\n");

  const pkg = packages
    .map(
      (p) =>
        `- ${p.name} — LKR ${p.priceLKR.toLocaleString()}: ${p.tagline} Includes: ${p.includes
          .slice(0, 6)
          .join(", ")}${p.includes.length > 6 ? ", …" : ""}`,
    )
    .join("\n");

  const prices = priceList
    .map((cat) => {
      const tests = cat.tests
        .map(
          (t) =>
            `  - ${t.name}: LKR ${t.price.toLocaleString()}${t.note ? ` (${t.note})` : ""}`,
        )
        .join("\n");
      return `${cat.category}:\n${tests}`;
    })
    .join("\n");

  return [
    "BUSINESS: St. Luke's Medical Laboratory — Ja-Ela, Sri Lanka",
    "Phone: 071 123 1954 | Website: https://www.stlukesmedilab.com",
    "Reports: most within 24 hours, delivered digitally. Pricing in LKR.",
    "",
    "SERVICES:",
    svc,
    "",
    "LOCATIONS SERVED:",
    loc,
    "",
    "PACKAGES:",
    pkg,
    "",
    "INDIVIDUAL TEST PRICES (LKR):",
    prices,
  ].join("\n");
}

export const SITE_CONTEXT = buildContext();

export const SYSTEM_PROMPT = `You are the friendly assistant for St. Luke's Medical Laboratory (SLML), a diagnostic lab in Ja-Ela, Sri Lanka.

Answer visitor questions using ONLY the information below. Be concise (2-4 sentences typically). When asked about a price, quote the exact LKR amount from the list. If a specific test is not in the list, say you don't have it and direct them to call 071 123 1954.

Never give medical advice, diagnoses, or interpret test results. For health questions, recommend speaking with a doctor.

--- SLML INFORMATION ---
${SITE_CONTEXT}
--- END INFORMATION ---`;
