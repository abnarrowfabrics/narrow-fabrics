import Header from "./components/Header";
import Footer from "./components/Footer";

const stats = [
  { value: "10+", label: "Years of Manufacturing Experience" },
  { value: "500+", label: "Clients Served Nationwide" },
  { value: "100%", label: "Custom Design Capability" },
];

const products = [
  {
    name: "School Belts",
    useCase:
      "Woven uniform belts built for daily school wear — reinforced stitching and long-lasting color.",
    tags: ["20mm / 25mm / 32mm", "Woven polyester", "Custom buckle"],
    swatches: ["#1E3A8A", "#0B0B0C", "#8C1D1D", "#D4A62B"],
  },
  {
    name: "Icard Threads",
    useCase:
      "ID card lanyards for staff, students and visitor badges — smooth tubular finish, breakaway safety option.",
    tags: ["Tubular / flat", "Nylon-poly blend", "Swivel or clip"],
    swatches: ["#1E3A8A", "#0B0B0C", "#4B5563", "#FFFFFF"],
  },
];

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

const darkPlaceholderStyle = {
  backgroundColor: "#111827",
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

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-20 bg-[#F7F8FA] px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
              Products
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
              Manufactured to spec, finished to last
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-600">
              Two core lines, fully customizable in width, material and attachment.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(420px,1fr))] gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,11,12,0.12)]"
              >
                <div
                  style={placeholderStyle}
                  className="flex aspect-video items-center justify-center p-5 text-center font-mono text-xs text-gray-500"
                >
                  [ PRODUCT PHOTO — {product.name} ]
                </div>
                <div className="p-7 pb-[30px]">
                  <h3 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-bold">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-[15px] leading-relaxed text-gray-600">
                    {product.useCase}
                  </p>
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
                  <div className="mb-[22px] flex gap-2.5">
                    {product.swatches.map((swatch) => (
                      <div
                        key={swatch}
                        style={{ backgroundColor: swatch }}
                        className="h-7 w-7 rounded-md border border-black/12"
                      />
                    ))}
                  </div>
                  <div
                    style={darkPlaceholderStyle}
                    className="flex aspect-video items-center justify-center rounded-lg p-4 text-center font-mono text-[11.5px] text-[#8B93A3]"
                  >
                    [ PRODUCT VIDEO PLACEHOLDER — {product.name} in production ]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
