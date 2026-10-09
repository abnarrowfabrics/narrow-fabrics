"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const baseProducts = [
  {
    name: "Lanyard Roll",
    useCase: "Precision-woven raw lanyard rolls for bulk manufacturing and custom printing — smooth tubular or flat finish.",
    tags: ["12mm", "16mm", "20mm", "25mm"],
    swatches: ["#ECA985", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
    image: "/lanyards.png",  },
  {
    name: "Neck Lanyard",
    useCase: "Finished neck lanyards for staff, students, and visitor badges, available with breakaway safety options.",
    tags: ["16mm", "20mm", "25mm"],
    swatches: ["#DF8B8F", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
    image: "/neck-lanyard.jpeg",
  },
  {
    name: "School Belt Roll",
    useCase: "Durable, high-strength belt rolls designed specifically for school uniforms and extended daily wear.",
    tags: ["35mm", "38mm"],
    swatches: ["#9BCAA0", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
    image: "/school belt rolls.png",
    widthImages: { "38mm": "/38mm-belt.jpeg" } as Record<string, string>,
  },
  {
    name: "Keychain",
    useCase: "Woven keychain straps with metal fittings for branding, gifting and everyday carry.",
    tags: ["16mm", "20mm", "25mm"],
    swatches: ["#E0B15C", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
    image: "/keychain.jpeg",
  },
  {
    name: "Wrist Band",
    useCase: "Woven wrist bands for events, festivals and access control, with custom printing and adjustable fittings.",
    tags: ["15mm", "20mm", "25mm"],
    swatches: ["#7EA6D9", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
    image: "/wrist-band-1.jpeg",
  },
];

// A few copies of the products; recenter() jumps between identical copies so the loop never ends
const COPIES = 5;
const infiniteProducts = Array(COPIES).fill(baseProducts).flat();

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

type Product = (typeof baseProducts)[number] & {
  image?: string;
  widthImages?: Record<string, string>;};

export default function ProductsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Auto-advance holds off while the user is touching/swiping the carousel
  const pausedUntil = useRef(0);
  const [active, setActive] = useState<Product | null>(null);
  const [width, setWidth] = useState<string>("");
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start in the middle copy so there's room to scroll both ways
    setTimeout(() => {
      if (container.children.length > 0) {
        const midIndex = Math.floor(infiniteProducts.length / 2);
        const child = container.children[midIndex] as HTMLElement;
        if (child) {
          // Instantly jump to the middle without animation
          container.scrollTo({ left: child.offsetLeft - (window.innerWidth / 2) + (child.clientWidth / 2), behavior: "instant" as any });
        }
      }
    }, 100);

    const getStep = () => {
      const card = container.querySelector<HTMLElement>(".carousel-card");
      return card ? card.offsetWidth + parseFloat(getComputedStyle(container).columnGap) : 0;
    };

    // Running out of cards on either side: jump by two whole product sets
    // (looks identical) so the carousel never stops
    const recenter = () => {
      const set = getStep() * baseProducts.length;
      if (!set) return;
      if (container.scrollLeft < set) {
        container.scrollTo({ left: container.scrollLeft + set * 2, behavior: "instant" });
      } else if (container.scrollLeft > set * (COPIES - 2)) {
        container.scrollTo({ left: container.scrollLeft - set * 2, behavior: "instant" });
      }
    };
    container.addEventListener("scrollend", recenter);

    const interval = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      recenter();
      // User wants items to "come from the left" meaning we slide to the LEFT (previous item)
      container.scrollBy({ left: -getStep(), behavior: "smooth" });
    }, 4000 / 0.75);

    return () => {
      clearInterval(interval);
      container.removeEventListener("scrollend", recenter);
    };
  }, []);

  return (
    <div className="w-full bg-[#EEF1F7] py-[clamp(50px,7vw,90px)]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center px-5 sm:px-10">
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Products
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold text-gray-900">
            Manufactured to spec, finished to last
          </h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        onPointerDown={() => (pausedUntil.current = Date.now() + 8000)}
        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 px-[50vw] pb-12 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {infiniteProducts.map((product: any, i: number) => (
          <div
            key={`${product.name}-${i}`}
            className="carousel-card grid w-[85vw] max-w-[800px] shrink-0 snap-center grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-center gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:w-[80vw] sm:gap-10 sm:p-8"
          >
            {/* Image Placeholder */}
            <button
              type="button"
              onClick={() => {
                setActive(product);
                setWidth(product.tags[0]);
              }}
              aria-label={`View ${product.name} details`}
              style={product.image ? undefined : placeholderStyle}
              className="flex aspect-[4/3] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg p-5 text-center font-mono text-xs text-gray-500 transition hover:brightness-95"
            >
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} product photo`}
                  width={800}
                  height={600}
                  sizes="(min-width: 640px) 380px, 80vw"
                  className="h-full w-full rounded-lg object-cover"
                />
              ) : (
                `[ PRODUCT PHOTO — ${product.name} ]`
              )}
            </button>
            
            {/* Content */}
            <div>
              <h3 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-600">{product.useCase}</p>
              
              <div className="mb-5 flex flex-wrap gap-2">
                {product.tags.map((tag: string) => (
                  <span
                    key={`${tag}-${i}`}
                    className="rounded-full bg-[#EEF1F7] px-3 py-1.5 text-[12.5px] font-semibold text-[#1E3A8A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2.5">
                {product.swatches.map((swatch: string, idx: number) => (
                  <div
                    key={`${swatch}-${idx}`}
                    style={{ backgroundColor: swatch }}
                    className="h-7 w-7 rounded-md border border-black/12 shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Width preview modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center sm:p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90svh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center text-2xl leading-none text-gray-400 hover:text-gray-700"
            >
              ×
            </button>

            <h3 className="mb-1 font-[family-name:var(--font-heading)] text-2xl font-bold text-gray-900">
              {active.name}
            </h3>
            <p className="mb-6 text-sm text-gray-500">Selected width: {width}</p>

            {/* Preview at the selected width */}
            <div
              style={active.image ? undefined : placeholderStyle}
              className="mb-6 flex h-64 items-center justify-center overflow-hidden rounded-lg"
            >
              {active.image ? (
                <button
                  type="button"
                  onClick={() => setZoomed(true)}
                  className="h-full w-full cursor-zoom-in"
                >
                  <img
                    src={active.widthImages?.[width] ?? active.image}
                    alt={active.name}
                    className="h-full w-full object-contain"
                  />
                </button>
              ) : (
                <div
                  style={{
                    width: `${parseInt(width) * 4}px`,
                    backgroundColor: active.swatches[0],
                  }}
                  className="h-52 rounded-md border border-black/12 shadow-md transition-all duration-300"
                />
              )}
            </div>

            {zoomed && (
              <div
                onClick={() => setZoomed(false)}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5"
              >
                <button
                  type="button"
                  onClick={() => setZoomed(false)}
                  aria-label="Close full screen image"
                  className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-4xl leading-none text-white/80 hover:text-white"
                >
                  ×
                </button>
                <img
                  src={active.widthImages?.[width] ?? active.image}
                  alt={active.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setWidth(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    tag === width
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-[#EEF1F7] text-[#1E3A8A] hover:bg-[#dde3f0]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
