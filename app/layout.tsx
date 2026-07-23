import type { Metadata } from "next";
import { Barlow_Condensed, Work_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "AB Narrow Fabrics — Narrow Fabric Lanyard Manufacturer",
  description:
    "India's fastest growing narrow fabric lanyard manufacturer — precision-woven lanyards, belts and narrow fabric trims, fully customizable for corporate, education and industrial buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${workSans.variable}`}>
      <body className="bg-white font-[family-name:var(--font-body)] text-[#0B0B0C] antialiased">
        {children}
      </body>
    </html>
  );
}
