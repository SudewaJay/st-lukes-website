import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for using stlukesmedilab.com and booking diagnostic tests with St. Luke's Medical Laboratory, Ja-Ela.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <PageShell>
      <section className="pb-20 pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="type-h1 mb-6 text-text-primary">Terms of Service</h1>
          <p className="mb-6 leading-relaxed text-text-secondary">
            Last updated: May 2026. These terms govern your use of stlukesmedilab.com and our diagnostic services.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Bookings &amp; appointments</h2>
          <p className="mb-6 leading-relaxed text-text-secondary">
            Test prices listed on this site are in Sri Lankan Rupees (LKR) and are subject to change. We will confirm the final price when you book.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Home visits</h2>
          <p className="mb-6 leading-relaxed text-text-secondary">
            Home sample collection is offered across Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama and Thudella. A small visit fee may apply to addresses outside our standard service area.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Reports</h2>
          <p className="mb-6 leading-relaxed text-text-secondary">
            Most reports are delivered within 24 hours. Some specialist tests take longer; we will inform you of the expected turnaround when you book.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">No medical advice</h2>
          <p className="mb-6 leading-relaxed text-text-secondary">
            Information on this website is general in nature and does not replace professional medical advice. Always consult your physician before acting on test results.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Contact</h2>
          <p className="leading-relaxed text-text-secondary">
            Questions? Email{" "}
            <a href="mailto:medilabstlukes@gmail.com" className="link-reveal font-medium text-brand-primary-dark">medilabstlukes@gmail.com</a>{" "}
            or call{" "}
            <a href="tel:+94711231954" className="link-reveal font-medium text-brand-primary-dark">071 123 1954</a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
