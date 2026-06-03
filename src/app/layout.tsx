import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import {
  medicalBusinessSchema,
  faqSchema,
  websiteSchema,
  siteNavigationSchema,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stlukesmedilab.com"),
  title: {
    // Leads with the brand so it doesn't get truncated by Google.
    default: "St. Luke's Medical Laboratory — Ja-Ela | Blood Tests & ECG",
    template: "%s | St. Luke's Medical Laboratory",
  },
  description:
    "St. Luke's Medical Laboratory in Ja-Ela: blood tests, ECG, full-body checkups with 24hr reports and home sample collection across Ja-Ela, Kandana, Ragama, Wattala & Welisara. Transparent LKR pricing. Call 071 123 1954.",
  keywords: [
    "medical laboratory Ja-Ela",
    "blood test Ja-Ela",
    "home blood collection Ja-Ela",
    "ECG test Ja-Ela",
    "diagnostic centre Kandana",
    "lab test Ragama",
    "Welisara lab",
    "Wattala medical lab",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://www.stlukesmedilab.com/",
    siteName: "St. Luke's Medical Laboratory",
    title: "St. Luke's Medical Laboratory — Ja-Ela",
    description:
      "Affordable diagnostics with 24hr reports and home collection across Ja-Ela & surrounding towns.",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Luke's Medical Laboratory — Ja-Ela",
    description:
      "Blood tests, ECG and home sample collection with 24-hour reports across Ja-Ela & surrounds.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "google7a398f5b32cd1f7c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <JsonLd data={medicalBusinessSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={siteNavigationSchema} />
        <JsonLd data={faqSchema} />
        {children}
      </body>
    </html>
  );
}
