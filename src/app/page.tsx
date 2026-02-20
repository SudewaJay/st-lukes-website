import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SimpleSteps from "@/components/SimpleSteps";
import Pricing from "@/components/Pricing";
import Locations from "@/components/Locations";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <SimpleSteps />
      <Pricing />
      <Locations />
      <Blog />
      <Footer />
    </main>
  );
}
