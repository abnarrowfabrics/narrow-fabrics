import type { Metadata } from "next";
import { Barlow_Condensed, Work_Sans } from "next/font/google";
import "./globals.css";
import { sharedOpenGraph } from "./lib/seo";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const title = "AB Narrow Fabrics — Narrow Fabric Lanyard Manufacturer";
const description =
  "India's fastest growing narrow fabric lanyard manufacturer — precision-woven lanyards, belts and narrow fabric trims, fully customizable for corporate, education and industrial buyers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abnarrowfabrics.com"),
  title,
  description,
  openGraph: { ...sharedOpenGraph, title, description, url: "/" },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AB Narrow Fabrics",
  alternateName: "Apna Bharat Narrow Fabrics",
  url: "https://abnarrowfabrics.com",
  logo: "https://abnarrowfabrics.com/logo.jpg",
  image: "https://abnarrowfabrics.com/hero-image.jpeg",
  description,
  telephone: "+91-8527911209",
  email: "abnarrowfabrics@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 45, KH. No. 80, Gali No. 09, Samaypur Industrial Area",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110042",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.748667, longitude: 77.146556 },
  areaServed: "IN",
  sameAs: ["https://www.instagram.com/ab_narrowfabrics/"],
};

import WhatsAppButton from "./components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${workSans.variable}`}>
      <body className="bg-white font-[family-name:var(--font-body)] text-[#0B0B0C] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
