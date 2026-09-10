import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileActions from "@/components/StickyMobileActions";
import Hero from "@/components/Hero";
import HomePricing from "@/components/HomePricing";
import HomeCollection from "@/components/HomeCollection";
import Features from "@/components/Features";
import Analyzers from "@/components/Analyzers";
import SimpleSteps from "@/components/SimpleSteps";
import Pricing from "@/components/Pricing";
import Locations from "@/components/Locations";
import HealthCampCarousel from "@/components/HealthCampCarousel";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";

/**
 * Section rhythm, deliberately alternating rather than stacking card grids:
 *   big moment (Hero) → utility (price finder) → story (home collection)
 *   → interaction (services) → proof (technology) → story (why)
 *   → utility (locations) → proof (health camps) → story (blog) → CTA
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main id="main-content">
        <Hero />
        <HomePricing />
        <HomeCollection />
        <Features />
        <Analyzers />
        <SimpleSteps />
        <Pricing />
        <Locations />
        <HealthCampCarousel />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileActions />
    </div>
  );
}
