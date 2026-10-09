import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroMedia from "./components/HeroMedia";
import LazyVideo from "./components/LazyVideo";
import IndiaMap from "./components/IndiaMap";
import ProductsCarousel from "./components/ProductsCarousel";
import HashScroll from "./components/HashScroll";
import CtaBanner from "./components/CtaBanner";
import { sectors } from "./data/sectors";
import { stats } from "./data/stats";

const products = [
  {
    name: "Lanyard",
    useCase:
      "Precision-woven lanyards for staff, students and visitor badges — smooth tubular or flat finish, available across a range of sizes with breakaway safety option.",
    tags: ["10mm", "12mm", "15mm", "20mm", "25mm"],
    swatches: ["#1E3A8A", "#0B0B0C", "#4B5563", "#FFFFFF"],
  },
];

const whyChooseUs = [
  {
    title: "10+ Years of Experience",
    description: "Over a decade of narrow fabric weaving, refined batch after batch.",
  },
  {
    title: "200+ Clients Nationwide",
    description: "Trusted by corporate, education and industrial buyers across India.",
  },
  {
    title: "100% Custom Design",
    description: "Every width, material, color and attachment made to your spec.",
  },
  {
    title: "Rigorous Quality Control",
    description: "Every order inspected and measured before it ships.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <HashScroll />
      <Header />

      {/* HERO */}
      <section
        id="home"
        className="relative -mt-[69px] flex min-h-[min(92svh,860px)] scroll-mt-20 items-end overflow-hidden bg-[#0B0B0C]"
      >
        <HeroMedia />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/85 via-[#0B0B0C]/45 to-[#0B0B0C]/20 sm:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0B0B0C]/65 via-[#0B0B0C]/25 to-transparent sm:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0B0B0C]/55 via-transparent to-transparent sm:block" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 pt-[clamp(100px,18vh,180px)] sm:px-10">
          <div className="max-w-3xl animate-[fadeUp_0.8s_ease_both] [text-shadow:0_2px_14px_rgba(0,0,0,0.65)]">
            <div className="mb-3.5 text-sm font-semibold tracking-[1.5px] text-white uppercase">
              Narrow Fabric Manufacturing — India
            </div>
            <h1 className="mb-5 font-[family-name:var(--font-heading)] text-[34px] leading-[1.12] font-extrabold sm:text-[clamp(38px,6vw,72px)] sm:leading-[1.03] text-balance text-white">
              India&apos;s Fastest Growing Narrow Fabric Lanyard Manufacturer
            </h1>
            <p className="mb-9 max-w-xl text-[15px] leading-[1.7] text-white sm:mb-8 sm:text-[clamp(16px,1.6vw,19px)] sm:leading-relaxed">
              Precision-woven lanyards, belts and narrow fabric trims built for durability and
              finished to exacting quality standards — fully customizable in width, material,
              color and attachment for corporate, education and industrial buyers.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#products"
                className="flex-1 rounded-sm bg-[#1E3A8A] px-6 py-4 text-center text-[15px] font-semibold whitespace-nowrap text-white hover:bg-[#2F55B5] sm:flex-none sm:px-7"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="flex-1 rounded-sm border-[1.5px] border-white/55 px-6 py-4 text-center text-[15px] font-semibold whitespace-nowrap text-white hover:border-white hover:bg-white/10 sm:flex-none sm:px-7"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 pb-10 sm:gap-[18px] sm:pt-8 sm:pb-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="min-w-[140px] flex-1 basis-[140px] rounded-lg border border-white/16 bg-white/8 p-4 backdrop-blur-sm sm:basis-[220px] sm:p-6"
                style={{
                  animation: "fadeUp 0.8s ease both, floatSlow 5s ease-in-out infinite",
                  animationDelay: `${i * 0.12}s, 0s`,
                }}
              >
                <div className="mb-1.5 font-[family-name:var(--font-heading)] text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-[13px] leading-snug font-medium text-[#C7CDD9] sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-10 md:gap-16 px-5 py-[clamp(70px,10vw,120px)] sm:px-10 lg:grid-cols-[5fr_7fr] lg:gap-12"
      >
        <div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(40px,5vw,64px)] leading-[1.1] font-extrabold text-[#1E3A8A]">
            About Us
          </h2>
          <div className="mb-6 text-[22px] font-bold text-gray-900">
            Built on the loom, driven by craftsmanship
          </div>
          <p className="mb-4.5 text-[16px] leading-[1.75] text-gray-600">
            AB Narrow Fabrics began as a small weaving unit with a single goal: make narrow
            fabric that lasts. What started with a handful of looms has grown into a full-scale
            manufacturing operation serving clients across the country.
          </p>
          <Link
            href="/about"
            className="text-[15px] font-semibold text-[#1E3A8A] hover:text-[#152a63]"
          >
            Learn more about us →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/about-us-home.png"
            alt="AB Narrow Fabrics production floor"
            width={600}
            height={800}
            sizes="(min-width: 1024px) 330px, 45vw"
            className="aspect-[3/4] h-auto w-full rounded-[10px] border border-black/8 object-cover"
          />
          <LazyVideo
            src="/25mm-lanyard-roll.mp4"
            className="aspect-[3/4] w-full rounded-[10px] border border-black/8 object-cover"
          />
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-20">
        <ProductsCarousel />
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#1E3A8A] px-5 py-[clamp(70px,10vw,120px)] text-white sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-start gap-x-16 gap-y-10 lg:grid-cols-[4fr_7fr]">
          <div>
            <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(34px,4.4vw,56px)] leading-[1.05] font-extrabold text-balance">
              Why buyers choose AB Narrow Fabrics
            </h2>
            <p className="max-w-sm text-[16px] leading-[1.75] text-[#DCE3F5]">
              A decade on the loom, made-to-spec production and a quality check on every order.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-x-10">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="border-t border-white/25 py-7">
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#DCE3F5]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAN INDIA DELIVERY */}
      <section className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-10 md:gap-16 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div>
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Pan India Delivery
          </div>
          <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Shipped from Delhi to every corner of India
          </h2>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            From our Delhi manufacturing base, we dispatch orders nationwide — reaching Punjab,
            Bihar, Gujarat, Karnataka and every state in between with reliable, tracked delivery.
          </p>
        </div>
        <IndiaMap />
      </section>

      <CtaBanner />

      {/* MARKET SECTOR OVERVIEW */}
      <section id="market-sector" className="scroll-mt-20 bg-[#EEF1F7] px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-xl text-center sm:mb-14">
            <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
              Market Sector
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold text-balance">
              Sectors we serve
            </h2>
          </div>

          <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] sm:gap-8 sm:overflow-visible sm:px-0">
            {sectors.slice(0, 4).map((sector) => (
              <div
                key={sector.name}
                className="w-[78%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-auto border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={sector.image}
                    alt={`${sector.name} lanyards and webbings`}
                    fill
                    sizes="(min-width: 1152px) 270px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-bold">
                    {sector.name}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-600">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/market-sector"
              className="text-[15px] font-semibold text-[#1E3A8A] hover:text-[#152a63]"
            >
              View all sectors →
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="scroll-mt-20 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-xl text-center sm:mb-14">
            <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
              Find Us
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold text-balance">
              Samaypur Industrial Area, Delhi 110042
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=28.748667,77.146556&output=embed"
              style={{ border: 0 }}
              className="h-[300px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AB Narrow Fabrics location — Samaypur Industrial Area, Delhi 110042"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
