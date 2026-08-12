"use client";
import React, { useEffect, useRef } from "react";

const baseProducts = [
  {
    name: "Lanyard Roll",
    useCase: "Precision-woven raw lanyard rolls for bulk manufacturing and custom printing — smooth tubular or flat finish.",
    tags: ["10mm", "12mm", "15mm", "20mm", "25mm"],
    swatches: ["#ECA985", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
  },
  {
    name: "Neck Lanyard",
    useCase: "Finished neck lanyards for staff, students, and visitor badges, available with breakaway safety options.",
    tags: ["12mm", "15mm", "20mm"],
    swatches: ["#DF8B8F", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
  },
  {
    name: "School Belt Roll",
    useCase: "Durable, high-strength belt rolls designed specifically for school uniforms and extended daily wear.",
    tags: ["25mm", "30mm", "35mm"],
    swatches: ["#9BCAA0", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
  },
  {
    name: "School Belts",
    useCase: "Finished school belts with buckle, built for daily uniform wear and long-lasting durability.",
    tags: ["25mm", "30mm", "35mm"],
    swatches: ["#9BCAA0", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
  },
  {
    name: "Exhibitions",
    useCase: "Custom webbings and lanyards for exhibitions, events and trade shows — branded and quick-turnaround.",
    tags: ["15mm", "20mm", "25mm"],
    swatches: ["#91B5CE", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
  },
  {
    name: "Keychain",
    useCase: "Woven keychain straps with metal fittings for branding, gifting and everyday carry.",
    tags: ["16mm", "20mm", "25mm"],
    swatches: ["#E0B15C", "#1E3A8A", "#0B0B0C", "#FFFFFF"],
  },
];

// Duplicate the array many times to create a practically infinite scrolling list
const infiniteProducts = Array(50).fill(baseProducts).flat();

const placeholderStyle = {
  backgroundImage:
    "repeating-linear-gradient(135deg,#E5E7EB,#E5E7EB 12px,#EEF0F3 12px,#EEF0F3 24px)",
};

export default function ProductsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start near the middle of our massive array so we can scroll left infinitely
    // 25 iterations in * 6 products * roughly 850px per card
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

    const interval = setInterval(() => {
      if (!container) return;
      
      const children = Array.from(container.children) as HTMLElement[];
      
      // Find the card currently closest to the center
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestChild = children[0];
      let minDistance = Infinity;
      let closestIndex = 0;

      children.forEach((child, index) => {
        if (!child.classList.contains("carousel-card")) return;
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(childCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestChild = child;
          closestIndex = index;
        }
      });

      // User wants items to "come from the left" meaning we slide to the LEFT (previous item)
      const prevChild = children[closestIndex - 1];
      if (prevChild) {
        container.scrollTo({
          left: prevChild.offsetLeft - container.clientWidth / 2 + prevChild.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#F7F8FA] py-[clamp(50px,7vw,90px)]">
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
        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 px-[50vw] pb-12 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {infiniteProducts.map((product: any, i: number) => (
          <div
            key={`${product.name}-${i}`}
            className="carousel-card grid w-[85vw] max-w-[800px] shrink-0 snap-center grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-10 rounded-xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:w-[80vw]"
          >
            {/* Image Placeholder */}
            <div
              style={placeholderStyle}
              className="flex aspect-[4/3] w-full items-center justify-center rounded-lg p-5 text-center font-mono text-xs text-gray-500"
            >
              [ PRODUCT PHOTO — {product.name} ]
            </div>
            
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
    </div>
  );
}
