import Image from "next/image";

export default function CtaBanner({
  title = "From a single loom to a nationwide supplier",
  text = "Built on precision, durability and a relentless focus on quality, order after order.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 py-[clamp(80px,12vw,150px)] sm:px-10">
      <Image src="/lanyards.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1433]/95 via-[#1E3A8A]/85 to-[#1E3A8A]/70" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-5 max-w-2xl font-[family-name:var(--font-heading)] text-[clamp(32px,4.6vw,58px)] leading-[1.05] font-extrabold text-balance text-white">
          {title}
        </h2>
        <p className="mb-8 max-w-xl text-[17px] leading-relaxed text-[#DCE3F5]">{text}</p>
        <a
          href="#contact"
          className="inline-block rounded-sm bg-white px-7 py-4 text-[15px] font-semibold text-[#1E3A8A] hover:bg-[#EEF1F7]"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}
