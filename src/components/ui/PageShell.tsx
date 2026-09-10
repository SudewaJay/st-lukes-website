import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileActions from "@/components/StickyMobileActions";
import { cn } from "@/lib/cn";

/**
 * The site shell every route renders inside. Keeps the header and footer out
 * of <main>, which is what makes the skip link land on real content.
 */
export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main id="main-content" className={cn("flex-1", className)}>
        {children}
      </main>
      <Footer />
      <StickyMobileActions />
    </div>
  );
}
