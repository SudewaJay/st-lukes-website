import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for using stlukesmedilab.com and booking diagnostic tests with St. Luke's Medical Laboratory, Ja-Ela.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-slate-600 mb-6">
            Last updated: May 2026. These terms govern your use of stlukesmedilab.com and our diagnostic services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Bookings &amp; appointments</h2>
          <p className="text-slate-600 mb-6">
            Test prices listed on this site are in Sri Lankan Rupees (LKR) and are subject to change. We will confirm the final price when you book.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Home visits</h2>
          <p className="text-slate-600 mb-6">
            Home sample collection is offered across Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama and Thudella. A small visit fee may apply to addresses outside our standard service area.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Reports</h2>
          <p className="text-slate-600 mb-6">
            Most reports are delivered within 24 hours. Some specialist tests take longer; we will inform you of the expected turnaround when you book.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">No medical advice</h2>
          <p className="text-slate-600 mb-6">
            Information on this website is general in nature and does not replace professional medical advice. Always consult your physician before acting on test results.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3">Contact</h2>
          <p className="text-slate-600">
            Questions? Email{" "}
            <a href="mailto:info@stlukesmedilab.com" className="text-stLukes-600 underline">info@stlukesmedilab.com</a>{" "}
            or call{" "}
            <a href="tel:+94711231954" className="text-stLukes-600 underline">+94 71 123 1954</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
