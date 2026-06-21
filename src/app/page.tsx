import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Analyzers from "@/components/Analyzers";
import SimpleSteps from "@/components/SimpleSteps";
import Pricing from "@/components/Pricing";
import Locations from "@/components/Locations";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const HealthCampCarousel = dynamic(
  () => import("@/components/HealthCampCarousel"),
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Analyzers />
      <SimpleSteps />
      <Pricing />
      <Locations />
      <HealthCampCarousel />
      <Blog />
      <Footer />
    </main>
  );
}
