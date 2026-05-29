import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { medicalBusinessSchema, faqSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stlukesmedilab.com"),
  title: {
    default:
      "Medical Laboratory in Ja-Ela | Blood Tests & Home Visits — St. Luke's",
    template: "%s | St. Luke's Medical Laboratory",
  },
  description:
    "St. Luke's Medical Laboratory in Ja-Ela offers blood tests, ECG, urine analysis & full-body checkups with 24hr reports and home sample collection across Ja-Ela, Kandana, Ragama, Wattala & Welisara. Call +94 71 123 1954.",
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
    title: "Medical Laboratory in Ja-Ela | St. Luke's",
    description:
      "World-class diagnostics with 24hr reports and home sample collection across Ja-Ela & surrounding towns.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Laboratory in Ja-Ela | St. Luke's",
    description:
      "Blood tests, ECG and home sample collection with 24-hour reports across Ja-Ela & surrounds.",
  },
  robots: { index: true, follow: true },
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
        <JsonLd data={faqSchema} />
        {children}
      </body>
    </html>
  );
}
