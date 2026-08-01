import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndiaMap from "./components/IndiaMap";
import { sectors } from "./data/sectors";

const stats = [
  { value: "10+", label: "Years of Manufacturing Experience" },
  { value: "500+", label: "Clients Served Nationwide" },
  { value: "100%", label: "Custom Design Capability" },
];

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
    title: "500+ Clients Nationwide",
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

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Header />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[min(92vh,860px)] scroll-mt-20 items-end overflow-hidden bg-[#0B0B0C]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#111827,#111827 14px,#1a2333 14px,#1a2333 28px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/55 via-[#0B0B0C]/72 to-[#0B0B0C]/92" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 pt-[clamp(100px,18vh,180px)] sm:px-10">
          <div className="max-w-3xl animate-[fadeUp_0.8s_ease_both]">
            <div className="mb-3.5 text-sm font-semibold tracking-[1.5px] text-[#93A9E0] uppercase">
              Narrow Fabric Manufacturing — India
            </div>
            <h1 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(38px,6vw,72px)] leading-[1.03] font-extrabold text-white">
              India&apos;s Fastest Growing Narrow Fabric Lanyard Manufacturer
            </h1>
            <p className="mb-8 max-w-xl text-[clamp(16px,1.6vw,19px)] leading-relaxed text-gray-300">
              Precision-woven lanyards, belts and narrow fabric trims built for durability and
              finished to exacting quality standards — fully customizable in width, material,
              color and attachment for corporate, education and industrial buyers.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#products"
                className="rounded-sm bg-[#1E3A8A] px-7 py-4 text-[15px] font-semibold text-white hover:bg-[#2F55B5]"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="rounded-sm border-[1.5px] border-white/55 px-7 py-4 text-[15px] font-semibold text-white hover:border-white hover:bg-white/10"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-[18px] pt-8 pb-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="min-w-[200px] flex-1 basis-[220px] rounded-lg border border-white/16 bg-white/8 p-6 backdrop-blur-sm"
                style={{
                  animation: "fadeUp 0.8s ease both, floatSlow 5s ease-in-out infinite",
                  animationDelay: `${i * 0.12}s, 0s`,
                }}
              >
                <div className="mb-1.5 font-[family-name:var(--font-heading)] text-4xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[#C7CDD9]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-16 px-5 py-[clamp(70px,10vw,120px)] sm:px-10"
      >
        <div>
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            About Us
          </div>
          <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Built on the loom, driven by craftsmanship
          </h2>
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
        <div
          style={placeholderStyle}
          className="flex aspect-[4/3] w-full items-center justify-center rounded-[10px] border border-black/8 p-5 text-center font-mono text-xs text-gray-500"
        >
          [ IMAGE PLACEHOLDER — founder / production floor ]
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-20 bg-[#F7F8FA] px-5 py-[clamp(50px,7vw,90px)] sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
              Products
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
              Manufactured to spec, finished to last
            </h2>
          </div>

          {products.map((product) => (
            <div
              key={product.name}
              className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-10 rounded-xl border border-gray-200 bg-white p-8"
            >
              <div
                style={placeholderStyle}
                className="flex aspect-[4/3] w-full items-center justify-center rounded-lg p-5 text-center font-mono text-xs text-gray-500"
              >
                [ PRODUCT PHOTO — {product.name} ]
              </div>
              <div>
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-bold">
                  {product.name}
                </h3>
                <p className="mb-4 text-[15px] leading-relaxed text-gray-600">{product.useCase}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#EEF1F7] px-3 py-1.5 text-[12.5px] font-semibold text-[#1E3A8A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2.5">
                  {product.swatches.map((swatch) => (
                    <div
                      key={swatch}
                      style={{ backgroundColor: swatch }}
                      className="h-7 w-7 rounded-md border border-black/12"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl scroll-mt-20 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Why Choose Us
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Why Choose AB Narrow Fabrics
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
            >
              <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TAGLINE BANNER */}
      <section className="relative overflow-hidden bg-[#0B0B0C] px-5 py-[clamp(70px,10vw,120px)] text-center sm:px-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#111827,#111827 14px,#1a2333 14px,#1a2333 28px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/55 via-[#0B0B0C]/72 to-[#0B0B0C]/92" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,48px)] leading-[1.1] font-extrabold text-white">
            India&apos;s Fastest Growing Narrow Fabric Lanyard Manufacturer
          </h2>
          <p className="text-[16px] leading-relaxed text-gray-300">
            From a single weaving unit to a nationwide supplier — built on precision, durability
            and a relentless focus on quality, order after order.
          </p>
        </div>
      </section>

      {/* PAN INDIA DELIVERY */}
      <section className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-16 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
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

      {/* MARKET SECTOR OVERVIEW */}
      <section id="market-sector" className="scroll-mt-20 bg-[#F7F8FA] px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
              Market Sector
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
              Sectors we serve
            </h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
            {sectors.slice(0, 4).map((sector) => (
              <div
                key={sector.name}
                className="rounded-xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
              >
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-bold">
                  {sector.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-600">{sector.description}</p>
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
          <div className="mx-auto mb-14 max-w-xl text-center">
            <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
              Find Us
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
              Samaypur, Badli, Delhi 110042
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=28.748667,77.146556&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AB Narrow Fabrics location — Samaypur, Badli, Delhi 110042"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
