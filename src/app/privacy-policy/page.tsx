import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How St. Luke's Medical Laboratory in Ja-Ela collects, stores and protects your personal and health information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <section className="pb-20 pt-28 md:pt-32">
        <div className="container-content max-w-3xl">
          <h1 className="type-h1 mb-6 text-text-primary">Privacy Policy</h1>
          <p className="leading-relaxed text-text-secondary">
            Last updated: May 2026. St. Luke&apos;s Medical Laboratory (&quot;we&quot;, &quot;our&quot;) is a medical diagnostic provider based in Ja-Ela, Sri Lanka. We take the privacy of your personal and health information seriously.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Information we collect</h2>
          <p className="leading-relaxed text-text-secondary">
            We collect the information you give us when you book a test, request a home visit or contact us — typically your name, phone number, email, address and the tests requested. Test results and any clinical notes provided by your referring physician are stored with your patient record.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">How we use your information</h2>
          <p className="leading-relaxed text-text-secondary">
            We use your information to deliver the tests you have booked, send you results, contact you about follow-up care and meet our legal and regulatory obligations as a clinical laboratory.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">How we store and protect data</h2>
          <p className="leading-relaxed text-text-secondary">
            Patient records are stored on access-controlled systems. Only authorised staff can view them. Reports delivered digitally are sent over secure channels. Physical samples and paperwork are stored according to clinical-laboratory standards.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Sharing</h2>
          <p className="leading-relaxed text-text-secondary">
            We do not sell your information. We share results only with you, your nominated physician, or as required by law.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Your rights</h2>
          <p className="leading-relaxed text-text-secondary">
            You may request access to or correction of your personal information at any time by contacting us at{" "}
            <a href="mailto:medilabstlukes@gmail.com" className="link-reveal font-medium text-brand-primary-dark">medilabstlukes@gmail.com</a>{" "}
            or{" "}
            <a href="tel:+94711231954" className="link-reveal font-medium text-brand-primary-dark">071 123 1954</a>.
          </p>

          <h2 className="type-h3 mb-3 mt-10 text-text-primary">Cookies</h2>
          <p className="leading-relaxed text-text-secondary">
            This website uses minimal cookies for essential functionality and anonymous analytics. We do not use advertising cookies.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
