import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import ClientPriceList from "./ClientPriceList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price List - St. Luke's Medical Laboratory",
  description: "View our comprehensive price list for medical laboratory tests and profiles.",
};

const priceData = [
  // Group 1
  { name: "UFR", price: 350, category: "Urine & Seminal Fluid" },
  { name: "URINE MICROALBUMIN / UACR", price: 1400, category: "Urine & Seminal Fluid" },
  { name: "PREGNANCY (HCG)", price: 250, category: "Urine & Seminal Fluid" },
  { name: "URINE SUGAR", price: 100, category: "Urine & Seminal Fluid" },
  { name: "URINE ALBUMIN", price: 100, category: "Urine & Seminal Fluid" },
  { name: "URINE SUGAR & ALBUMIN", price: 150, category: "Urine & Seminal Fluid" },
  { name: "SFR + SUGAR", price: 400, category: "Urine & Seminal Fluid" },
  { name: "SEMINAL FLUID ANALYSIS (SFA)", price: 500, category: "Urine & Seminal Fluid" },

  // Group 2
  { name: "S. ALK. PHOSPHATASE", price: 650, category: "Biochemistry" },
  { name: "PROTEIN (TOTAL, ALB, GLOB)", price: 1000, category: "Biochemistry" },
  { name: "GAMMA G T (GGT)", price: 650, category: "Biochemistry" },
  { name: "GLUCOSE CHALLENGE TEST (GCT)", price: 750, notes: "WITH FBS", category: "Biochemistry" },
  { name: "F B S", price: 250, category: "Biochemistry" },
  { name: "P P B S", price: 250, category: "Biochemistry" },
  { name: "R B S", price: 250, category: "Biochemistry" },
  { name: "3 POINT SUGAR PROFILE", price: 750, category: "Biochemistry" },

  // Group 3
  { name: "F B C", price: 400, category: "Hematology" },
  { name: "WBC/DC", price: 250, category: "Hematology" },
  { name: "PLATELET COUNT", price: 400, category: "Hematology" },
  { name: "MALARIAL PARASITES", price: 250, category: "Hematology" },
  { name: "Hb", price: 400, category: "Hematology" },
  { name: "E S R", price: 350, category: "Hematology" },

  // Group 4
  { name: "HIV 1, 2", price: 1800, category: "Serology & Immunology" },
  { name: "S. CHOLESTEROL", price: 650, category: "Biochemistry" },
  { name: "LIPID PROFILE", price: 1400, category: "Profiles & Packages" },
  { name: "V D R L", price: 1000, category: "Serology & Immunology" },
  { name: "BLOOD GROUP", price: 500, category: "Hematology" },
  { name: "S G O T", price: 600, category: "Biochemistry" },
  { name: "S G P T", price: 600, category: "Biochemistry" },

  // Group 5
  { name: "BLOOD UREA", price: 600, category: "Renal & Biochemistry" },
  { name: "SERUM CREATININE", price: 600, category: "Renal & Biochemistry" },
  { name: "SERUM CREATININE WITH G F R", price: 650, category: "Renal & Biochemistry" },
  { name: "SERUM BILIRUBIN (TOTAL)", price: 650, category: "Biochemistry" },
  { name: "SERUM BILIRUBIN (D/I)", price: 1200, category: "Biochemistry" },
  { name: "RHEUMATOID FACTOR", price: 500, category: "Serology & Immunology" },
  { name: "BLEEDING TIME", price: 250, category: "Hematology" },
  { name: "CLOTTING TIME", price: 250, category: "Hematology" },
  { name: "O G T T (1st hr, 2 nd hr, FBS)", price: 1250, category: "Biochemistry" },
  { name: "O G T T (FBS, 2 nd hr)", price: 1000, category: "Biochemistry" },
  { name: "S. ELECTROLYTES", price: 1200, category: "Biochemistry" },
  { name: "C R P", price: 800, category: "Serology & Immunology" },

  // Group 6
  { name: "LIVER FUNCTION TEST (LFT)", price: 2100, category: "Profiles & Packages" },
  { name: "LIVER PROFILE", price: 3750, category: "Profiles & Packages" },
  { name: "HBs Ag", price: 1300, category: "Serology & Immunology" },
  { name: "DENGUE NS1 Ag", price: 1200, category: "Serology & Immunology" },
  { name: "FULL BODY TESTS", price: 4100, category: "Profiles & Packages" },
  { name: "CALCIUM TOTAL", price: 800, category: "Biochemistry" },
  { name: "SERUM URIC ACID", price: 800, category: "Biochemistry" },
  { name: "RENAL PROFILE", price: 4250, category: "Profiles & Packages" },
  { name: "RENAL FUNCTION TEST (RFT)", price: 2100, category: "Profiles & Packages" },
  { name: "PT/ INR", price: 1200, category: "Hematology" },
];

export default function PriceListPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-24 relative overflow-hidden bg-stLukes-900 flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent bottom-0 h-16 w-full z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Price List
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Transparent pricing for all our tests and profiles. Find the test you need or search our comprehensive list.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <ClientPriceList initialData={priceData} />
      </div>

      <Footer />
    </main>
  );
}
