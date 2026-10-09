import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
}: {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative -mt-[69px] flex min-h-[min(56svh,580px)] items-end sm:min-h-[min(62vh,580px)] overflow-hidden bg-[#1E3A8A]">
      {image && (
        <div className="absolute inset-0 hidden sm:block">
          <Image src={image} alt={imageAlt} fill preload sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/80 via-[#0B0B0C]/45 to-[#0B0B0C]/10" />
        </div>
      )}
      <div className="relative mx-auto w-full max-w-6xl animate-[fadeUp_0.8s_ease_both] px-5 pt-[140px] pb-[clamp(48px,7vw,88px)] [text-shadow:0_2px_14px_rgba(0,0,0,0.5)] sm:px-10">
        <h1 className="mb-5 max-w-3xl font-[family-name:var(--font-heading)] text-[clamp(40px,6vw,76px)] leading-[1.03] font-extrabold text-balance text-white">
          {title}
        </h1>
        <p className="max-w-xl text-[clamp(16px,1.6vw,19px)] leading-relaxed text-white">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
