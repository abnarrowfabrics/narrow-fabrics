import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { stats } from "../data/stats";

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
    message: [
      "When we started, every metre of fabric that came off our looms passed through our own hands before it left the floor. We have grown a great deal since then, but that habit has never left us.",
      "A lanyard is worn every single day. A school belt has to survive years of a child's life. Neither is allowed to fail. That is why we still obsess over yarn, weave tension and finishing — the small details most people never notice, but always feel.",
      "When you order from us, you are not buying from a machine. You are trusting a team that takes pride in getting it right, every batch, every time.",
    ],
    photo: "/himanshu.jpg",
  },
  {
    name: "Anoop Mishra",
    role: "Director",
    message: [
      "Behind every order is someone counting on us — a school preparing for a new term, a company getting ready for an event, a distributor with customers of their own. We never forget that.",
      "Our growth has been built on clients who came back, and who brought others with them. We intend to keep earning that trust the simple way: honest timelines, clear communication, and fabric that performs exactly as promised.",
      "As we reach new markets and new products, that promise stays the same. Thank you for growing with us — the best of AB Narrow Fabrics is still ahead.",
    ],
  },
];

export default function About() {
  return (
    <div className="overflow-x-clip">
      <Header />

      <PageHero
        title="Built on the loom, driven by craftsmanship"
        subtitle="From a small weaving unit to a full-scale narrow fabric manufacturer serving clients across India."
        image="/38mm-belt.jpeg"
      />

      <section className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-10 md:gap-16 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div>
          <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(34px,4.4vw,56px)] leading-[1.05] font-extrabold text-[#1E3A8A]">
            Our story
          </h2>
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
        <Image
          src="/built-by-loom-image.png"
          alt="AB Narrow Fabrics weaving loom"
          width={800}
          height={600}
          sizes="(min-width: 1152px) 540px, (min-width: 768px) 45vw, 100vw"
          className="aspect-[4/3] h-auto w-full rounded-[10px] border border-black/8 object-cover"
        />
      </section>

      {/* STATS */}
      <section className="bg-[#1E3A8A] px-5 py-[clamp(56px,7vw,88px)] text-white sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 sm:gap-x-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/25 py-6">
              <div className="mb-1.5 font-[family-name:var(--font-heading)] text-[clamp(44px,5vw,60px)] leading-none font-extrabold">
                {stat.value}
              </div>
              <div className="text-[15px] text-[#DCE3F5]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="scroll-mt-20 bg-[#EEF1F7] px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-14">
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Board of Directors
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            A message from our founders
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-10">
          {directors.map((person) => (
            <div
              key={person.name}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
            >
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="mx-auto mb-6 h-36 w-36 rounded-full border border-black/8 object-cover"
                />
              ) : (
                <div
                  style={placeholderStyle}
                  className="mx-auto mb-6 h-36 w-36 rounded-full border border-black/8"
                />
              )}
              <h3 className="mb-1.5 font-[family-name:var(--font-heading)] text-2xl font-bold">
                {person.name}
              </h3>
              <p className="mb-6 text-base font-medium text-[#1E3A8A]">{person.role}</p>
              <blockquote className="relative border-t border-gray-200 pt-8 text-left">
                <span
                  aria-hidden="true"
                  className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-3 font-[family-name:var(--font-heading)] text-5xl leading-none text-[#1E3A8A]"
                >
                  &ldquo;
                </span>
                {person.message.map((para) => (
                  <p key={para} className="mb-4 text-[15px] leading-relaxed text-gray-600 last:mb-0">
                    {para}
                  </p>
                ))}
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />

      <Footer />
    </div>
  );
}
