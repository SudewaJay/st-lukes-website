import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientPriceList from "./ClientPriceList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price List - St. Luke's Medical Laboratory",
  description: "Transparent pricing for all our medical laboratory tests and profiles.",
};

const priceData = [
  // Urine & Seminal Fluid
  { name: "UFR", price: 350, category: "Urine & Seminal Fluid" },
  { name: "URINE MICROALBUMIN / UACR", price: 1400, category: "Urine & Seminal Fluid" },
  { name: "PREGNANCY (HCG)", price: 250, category: "Urine & Seminal Fluid" },
  { name: "URINE SUGAR", price: 100, category: "Urine & Seminal Fluid" },
  { name: "URINE ALBUMIN", price: 100, category: "Urine & Seminal Fluid" },
  { name: "URINE SUGAR & ALBUMIN", price: 150, category: "Urine & Seminal Fluid" },
  { name: "SFR + SUGAR", price: 400, category: "Urine & Seminal Fluid" },
  { name: "SEMINAL FLUID ANALYSIS (SFA)", price: 500, category: "Urine & Seminal Fluid" },

  // Biochemistry
  { name: "S. ALK. PHOSPHATASE", price: 650, category: "Biochemistry" },
  { name: "PROTEIN (TOTAL, ALB, GLOB)", price: 1000, category: "Biochemistry" },
  { name: "GAMMA G T (GGT)", price: 650, category: "Biochemistry" },
  { name: "GLUCOSE CHALLENGE TEST (GCT)", price: 750, notes: "WITH FBS", category: "Biochemistry" },
  { name: "F B S", price: 250, category: "Biochemistry" },
  { name: "P P B S", price: 250, category: "Biochemistry" },
  { name: "R B S", price: 250, category: "Biochemistry" },
  { name: "3 POINT SUGAR PROFILE", price: 750, category: "Biochemistry" },
  { name: "S. CHOLESTEROL", price: 650, category: "Biochemistry" },
  { name: "S G O T", price: 600, category: "Biochemistry" },
  { name: "S G P T", price: 600, category: "Biochemistry" },
  { name: "SERUM BILIRUBIN (TOTAL)", price: 650, category: "Biochemistry" },
  { name: "SERUM BILIRUBIN (D/I)", price: 1200, category: "Biochemistry" },
  { name: "O G T T (1st hr, 2nd hr, FBS)", price: 1250, category: "Biochemistry" },
  { name: "O G T T (FBS, 2nd hr)", price: 1000, category: "Biochemistry" },
  { name: "S. ELECTROLYTES", price: 1200, category: "Biochemistry" },
  { name: "CALCIUM TOTAL", price: 800, category: "Biochemistry" },
  { name: "SERUM URIC ACID", price: 800, category: "Biochemistry" },

  // Hematology
  { name: "F B C", price: 400, category: "Hematology" },
  { name: "WBC/DC", price: 250, category: "Hematology" },
  { name: "PLATELET COUNT", price: 400, category: "Hematology" },
  { name: "MALARIAL PARASITES", price: 250, category: "Hematology" },
  { name: "Hb", price: 400, category: "Hematology" },
  { name: "E S R", price: 350, category: "Hematology" },
  { name: "BLOOD GROUP", price: 500, category: "Hematology" },
  { name: "BLEEDING TIME", price: 250, category: "Hematology" },
  { name: "CLOTTING TIME", price: 250, category: "Hematology" },
  { name: "PT/ INR", price: 1200, category: "Hematology" },

  // Serology & Immunology
  { name: "HIV 1, 2", price: 1800, category: "Serology & Immunology" },
  { name: "V D R L", price: 1000, category: "Serology & Immunology" },
  { name: "RHEUMATOID FACTOR", price: 500, category: "Serology & Immunology" },
  { name: "C R P", price: 800, category: "Serology & Immunology" },
  { name: "HBs Ag", price: 1300, category: "Serology & Immunology" },
  { name: "DENGUE NS1 Ag", price: 1200, category: "Serology & Immunology" },

  // Renal & Biochemistry
  { name: "BLOOD UREA", price: 600, category: "Renal & Biochemistry" },
  { name: "SERUM CREATININE", price: 600, category: "Renal & Biochemistry" },
  { name: "SERUM CREATININE WITH G F R", price: 650, category: "Renal & Biochemistry" },

  // Profiles & Packages
  { name: "LIPID PROFILE", price: 1400, category: "Profiles & Packages" },
  { name: "LIVER FUNCTION TEST (LFT)", price: 2100, category: "Profiles & Packages" },
  { name: "LIVER PROFILE", price: 3750, category: "Profiles & Packages" },
  { name: "FULL BODY TESTS", price: 4100, category: "Profiles & Packages" },
  { name: "RENAL PROFILE", price: 4250, category: "Profiles & Packages" },
  { name: "RENAL FUNCTION TEST (RFT)", price: 2100, category: "Profiles & Packages" },
];

export default function PriceListPage() {
  const totalTests = priceData.length;
  const totalCategories = new Set(priceData.map((d) => d.category)).size;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <div className="relative bg-[#051a0c] overflow-hidden pt-32 pb-16">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-stLukes-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-stLukes-600/8 blur-[100px] pointer-events-none" />
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stLukes-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            Laboratory Test Price List
          </h1>
          <p className="text-white/60 text-lg mb-10">
            All prices are in Sri Lankan Rupees (LKR). Search from {totalTests}+ tests across {totalCategories} categories.
          </p>

          {/* Stats strip */}
          <div className="flex items-center justify-center gap-8 mb-10">
            {[
              { value: `${totalTests}+`, label: "Tests Available" },
              { value: `${totalCategories}`, label: "Categories" },
              { value: "LKR", label: "Currency" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checkered bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-4"
          aria-hidden="true"
          style={{
            backgroundImage: "repeating-conic-gradient(#58b330 0% 25%, transparent 0% 50%)",
            backgroundSize: "16px 16px",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <ClientPriceList initialData={priceData} />
      </div>

      <Footer />
    </main>
  );
}
