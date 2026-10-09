import type { Metadata } from "next";
import { sharedOpenGraph } from "../lib/seo";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { sectors } from "../data/sectors";

const title = "Market Sector — AB Narrow Fabrics";
const description =
  "Lanyards and narrow fabrics made to spec for promotional, corporate, school, exhibition, government and industrial buyers — from AB Narrow Fabrics, Delhi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/market-sector" },
  openGraph: { ...sharedOpenGraph, title, description, url: "/market-sector" },
};

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

export default function MarketSector() {
  return (
    <div className="overflow-x-clip">
      <Header />

      <PageHero
        title="Sectors we serve"
        subtitle="Lanyards, belts and webbings for promotional, corporate, school, exhibition, government and industrial buyers across India."
      />

      <section className="scroll-mt-20 bg-[#EEF1F7] px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
            >
              {sector.image ? (
                <div className="relative aspect-video">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    sizes="(min-width: 1152px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  style={placeholderStyle}
                  className="flex aspect-video items-center justify-center p-5 text-center font-mono text-xs text-gray-500"
                >
                  [ IMAGE PLACEHOLDER — {sector.name} ]
                </div>
              )}
              <div className="p-7">
                <h2 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-bold">
                  {sector.name}
                </h2>
                <p className="mb-4 text-[15px] leading-relaxed text-gray-600">{sector.description}</p>
                <span className="text-sm font-semibold text-[#1E3A8A]">Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Don't see your sector? We'll make it to spec."
        text="Tell us what you need your lanyards, belts or webbings for and we'll get back to you with a quote."
      />

      <Footer />
    </div>
  );
}
