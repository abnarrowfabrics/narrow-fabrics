import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us — AB Narrow Fabrics",
  description:
    "The story behind AB Narrow Fabrics — a narrow fabric weaving unit grown into a full-scale manufacturer of lanyards, ID card threads and school belts.",
};

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

const directors = [
  {
    name: "Himanshu Mittal",
    role: "Director",
    qualification: "B.Tech in Textile Engineering, [University Name]",
    description: "[Placeholder bio] Himanshu Mittal co-founded AB Narrow Fabrics with a focus on manufacturing quality and production excellence, overseeing the weaving units and day-to-day operations that keep every order on time.",
  },
  {
    name: "Anoop Mishra",
    role: "Director",
    qualification: "[Qualification], [University Name]",
    description: "[Placeholder bio] Anoop Mishra co-founded AB Narrow Fabrics with a focus on business growth and client relationships, driving the company's expansion into new markets and sectors across India.",
  },
];

export default function About() {
  return (
    <div className="overflow-x-clip">
      <Header />

      <section className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-16 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div>
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            About Us
          </div>
          <h1 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Built on the loom, driven by craftsmanship
          </h1>
          <p className="mb-4.5 text-[16px] leading-[1.75] text-gray-600">
            AB Narrow Fabrics began as a small weaving unit with a single goal: make narrow
            fabric that lasts. What started with a handful of looms and a founder who insisted
            on checking every metre of output by hand has grown into a full-scale manufacturing
            operation serving clients across the country.
          </p>
          <p className="mb-4.5 text-[16px] leading-[1.75] text-gray-600">
            Today, we manufacture woven and tubular lanyards, ID card threads, school belts and
            narrow fabric trims — engineered for daily wear, tested for durability, and produced
            at a scale that keeps lead times short without cutting corners on quality.
          </p>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            Every order is still finished the way the founder intended: inspected, measured and
            packed with the same care as the first batch we ever shipped.
          </p>
        </div>
        <div
          style={placeholderStyle}
          className="flex aspect-[4/3] w-full items-center justify-center rounded-[10px] border border-black/8 p-5 text-center font-mono text-xs text-gray-500"
        >
          [ IMAGE PLACEHOLDER — founder / production floor ]
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="mx-auto max-w-6xl scroll-mt-20 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Board of Directors
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Leading AB Narrow Fabrics
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10">
          {directors.map((person) => (
            <div
              key={person.name}
              className="rounded-xl border border-gray-200 bg-white p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
            >
              <div
                style={placeholderStyle}
                className="mx-auto mb-6 h-36 w-36 rounded-full border border-black/8"
              />
              <h3 className="mb-1.5 font-[family-name:var(--font-heading)] text-2xl font-bold">
                {person.name}
              </h3>
              <p className="mb-5 text-base font-medium text-[#1E3A8A]">{person.role}</p>
              <p className="mb-3.5 text-[15px] text-gray-600">{person.qualification}</p>
              <p className="text-[15px] leading-relaxed text-gray-500">{person.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
