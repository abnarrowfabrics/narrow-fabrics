"use client";

import { useState, type FormEvent } from "react";

const navLinks = [
  { id: "story", label: "Our Story" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

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

const socialLinks = [
  { label: "IG", href: "https://instagram.com" },
  { label: "WA", href: "https://wa.me/910000000000" },
  { label: "Tel", href: "tel:+910000000000" },
  { label: "@", href: "mailto:info@abnarrowfabrics.example" },
];

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

const darkPlaceholderStyle = {
  backgroundColor: "#111827",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-clip">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-10">
          <div className="flex flex-shrink-0 items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#1E3A8A] font-[family-name:var(--font-heading)] text-[15px] font-extrabold tracking-wide text-[#1E3A8A]">
              AB
            </div>
            <div className="font-[family-name:var(--font-heading)] text-[19px] font-bold tracking-wide">
              AB NARROW FABRICS
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="whitespace-nowrap text-[15px] font-medium text-gray-700 hover:text-[#1E3A8A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="whitespace-nowrap rounded-sm bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#152a63]"
            >
              Get a Quote
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-200 md:hidden"
          >
            <span className="h-0.5 w-5 bg-[#0B0B0C]" />
            <span className="h-0.5 w-5 bg-[#0B0B0C]" />
            <span className="h-0.5 w-5 bg-[#0B0B0C]" />
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-gray-200 bg-white px-5 pt-3 pb-5 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className="border-b border-gray-100 py-2.5 text-[16px] font-medium text-gray-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2.5 rounded-sm bg-[#1E3A8A] px-5 py-3 text-center text-[15px] font-semibold text-white"
            >
              Get a Quote
            </a>
          </div>
        )}
      </header>

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

      {/* BRAND STORY */}
      <section
        id="story"
        className="mx-auto grid max-w-6xl scroll-mt-20 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-16 px-5 py-[clamp(70px,10vw,120px)] sm:px-10"
      >
        <div>
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Our Story
          </div>
          <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Built on the loom, driven by craftsmanship
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
        <div
          style={placeholderStyle}
          className="flex aspect-[4/3] w-full items-center justify-center rounded-[10px] border border-black/8 p-5 text-center font-mono text-xs text-gray-500"
        >
          [ IMAGE PLACEHOLDER — founder / production floor ]
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

      {/* FOOTER */}
      <footer id="contact" className="scroll-mt-20 bg-[#0B0B0C] px-5 pt-[clamp(60px,8vw,90px)] pb-8 sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12 border-b border-white/12 pb-14">
          <div>
            <div className="mb-4.5 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-white font-[family-name:var(--font-heading)] text-[15px] font-extrabold text-white">
                AB
              </div>
              <div className="font-[family-name:var(--font-heading)] text-[18px] font-bold text-white">
                AB NARROW FABRICS
              </div>
            </div>
            <p className="mb-5.5 max-w-[280px] text-sm leading-relaxed text-gray-400">
              India&apos;s fastest growing narrow fabric lanyard manufacturer — precision,
              durability, custom made.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-white/8 text-[11px] font-bold text-white hover:bg-[#1E3A8A]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4.5 text-sm font-bold tracking-wide text-white uppercase">
              Quick Links
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4.5 text-sm font-bold tracking-wide text-white uppercase">
              Contact
            </div>
            <div className="text-sm leading-[1.8] text-gray-400">
              <div>Plot No. 00, Industrial Estate,</div>
              <div>Placeholder City, India – 000000</div>
              <div className="mt-2.5">+91 00000 00000</div>
              <div>info@abnarrowfabrics.example</div>
            </div>
          </div>

          <div>
            <div className="mb-4.5 text-sm font-bold tracking-wide text-white uppercase">
              Get in touch
            </div>
            {submitted ? (
              <div className="text-sm leading-relaxed text-[#93A9E0]">
                Thanks — we&apos;ll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
                  className="rounded-md border border-white/16 bg-white/6 px-3 py-2.5 text-sm text-white placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
                  className="rounded-md border border-white/16 bg-white/6 px-3 py-2.5 text-sm text-white placeholder:text-gray-400"
                />
                <textarea
                  placeholder="Tell us what you need"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData((s) => ({ ...s, message: e.target.value }))}
                  className="resize-y rounded-md border border-white/16 bg-white/6 px-3 py-2.5 text-sm text-white placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="mt-1 rounded-md bg-[#1E3A8A] py-3 text-[14.5px] font-semibold text-white hover:bg-[#2F55B5]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 pt-6 text-[13px] text-gray-500">
          <div>© 2026 AB Narrow Fabrics. All rights reserved.</div>
          <div>Designed and manufactured in India.</div>
        </div>
      </footer>
    </div>
  );
}
