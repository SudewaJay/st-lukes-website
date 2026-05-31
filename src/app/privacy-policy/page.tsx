import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How St. Luke's Medical Laboratory in Ja-Ela collects, stores and protects your personal and health information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-slate">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-600">
            Last updated: May 2026. St. Luke&apos;s Medical Laboratory (&quot;we&quot;, &quot;our&quot;) is a medical diagnostic provider based in Ja-Ela, Sri Lanka. We take the privacy of your personal and health information seriously.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Information we collect</h2>
          <p className="text-slate-600">
            We collect the information you give us when you book a test, request a home visit or contact us — typically your name, phone number, email, address and the tests requested. Test results and any clinical notes provided by your referring physician are stored with your patient record.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">How we use your information</h2>
          <p className="text-slate-600">
            We use your information to deliver the tests you have booked, send you results, contact you about follow-up care and meet our legal and regulatory obligations as a clinical laboratory.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">How we store and protect data</h2>
          <p className="text-slate-600">
            Patient records are stored on access-controlled systems. Only authorised staff can view them. Reports delivered digitally are sent over secure channels. Physical samples and paperwork are stored according to clinical-laboratory standards.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Sharing</h2>
          <p className="text-slate-600">
            We do not sell your information. We share results only with you, your nominated physician, or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Your rights</h2>
          <p className="text-slate-600">
            You may request access to or correction of your personal information at any time by contacting us at{" "}
            <a href="mailto:medilabstlukes@gmail.com" className="text-stLukes-600 underline">medilabstlukes@gmail.com</a>{" "}
            or{" "}
            <a href="tel:+94711231954" className="text-stLukes-600 underline">071 123 1954</a>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Cookies</h2>
          <p className="text-slate-600">
            This website uses minimal cookies for essential functionality and anonymous analytics. We do not use advertising cookies.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
