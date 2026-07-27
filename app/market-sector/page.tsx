import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sectors } from "../data/sectors";

export const metadata: Metadata = {
  title: "Market Sector — AB Narrow Fabrics",
  description:
    "The sectors AB Narrow Fabrics supplies — medical, promotional, PPE, FIBC, cargo, queue management, rubber, luggage, garment and pet accessories.",
};

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

export default function MarketSector() {
  return (
    <div className="overflow-x-clip">
      <Header />

      <section className="mx-auto max-w-6xl scroll-mt-20 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Market Sector
          </div>
          <h1 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Sectors we serve
          </h1>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
            >
              <div
                style={placeholderStyle}
                className="flex aspect-video items-center justify-center p-5 text-center font-mono text-xs text-gray-500"
              >
                [ IMAGE PLACEHOLDER — {sector.name} ]
              </div>
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

      <Footer />
    </div>
  );
}
