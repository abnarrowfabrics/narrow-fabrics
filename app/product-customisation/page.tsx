import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayableVideo from "../components/PlayableVideo";

export const metadata: Metadata = {
  title: "Product Customisation — AB Narrow Fabrics",
  description:
    "AB Narrow Fabrics offers customized and bespoke lanyard and narrow fabric solutions, developed in partnership with customers to meet exacting requirements.",
};

export default function ProductCustomisation() {
  return (
    <div className="overflow-x-clip">
      <Header />

      <section className="mx-auto max-w-6xl scroll-mt-20 px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3.5 text-sm font-bold tracking-[1.5px] text-[#1E3A8A] uppercase">
            Product Customisation
          </div>
          <h1 className="mb-6 font-[family-name:var(--font-heading)] text-[clamp(28px,3.6vw,44px)] leading-[1.1] font-bold">
            Product Customisation
          </h1>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            AB Narrow Fabrics has gained significant industry and application knowledge over 10+
            years of narrow fabric weaving. This knowledge, combined with our range of
            manufacturing capabilities, enables us to work in partnership with our customers to
            develop innovative solutions. We have the capability and flexibility to offer both
            customized and bespoke solutions for your lanyard, ID card thread, school belt and
            narrow fabric trim requirements.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F8FA] px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-16">
          <div>
            <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,34px)] leading-[1.15] font-bold">
              Specialist Narrow Fabric Manufacturer
            </h2>
            <p className="mb-4.5 text-[16px] leading-[1.75] text-gray-600">
              AB Narrow Fabrics is a specialist narrow fabric manufacturer with many years of
              experience and a wealth of expertise in the development and customization of
              lanyards, ID card threads, school belts and narrow fabric trims for a vast range of
              applications.
            </p>
            <p className="mb-4.5 text-[16px] leading-[1.75] text-gray-600">
              We work with new and existing customers — corporate, education and industrial
              buyers alike — to further innovate, customize and develop products to meet exacting
              standards.
            </p>
            <p className="text-[16px] leading-[1.75] text-gray-600">
              Whilst we have a wide variety of standard widths, materials, colors and attachments
              that we can offer, we work primarily with our customers to customise narrow fabric
              solutions to meet specific requirements.
            </p>
          </div>
          <img
            src="/built-by-loom-image.png"
            alt="AB Narrow Fabrics narrow fabric manufacturing"
            className="aspect-[4/3] w-full rounded-[10px] border border-black/8 object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-[clamp(70px,10vw,120px)] sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-16">
          <div className="md:order-2">
            <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,34px)] leading-[1.15] font-bold">
              Experience and Expertise
            </h2>
            <p className="mb-4.5 text-[16px] leading-[1.75] text-gray-600">
              With over a decade of experience and significant expertise in the development of
              narrow fabrics, we have developed hundreds of product variants across widths,
              materials, colors and attachments over the years.
            </p>
            <p className="mb-4.5 text-[16px] leading-[1.75] text-gray-600">
              However, if a requirement is not currently within the AB Narrow Fabrics product
              portfolio, we offer a Product Development service where the lanyard or narrow
              fabric solution is tailored to meet the bespoke requirements of the customer.
            </p>
            <p className="text-[16px] leading-[1.75] text-gray-600">
              We would recommend to any business planning to use an AB Narrow Fabrics solution in
              a product development project, that we are approached in the early stages of
              development in order that we can enhance the end product and develop it
              collaboratively. In doing so, this enables us to add value to and maximize the
              potential of the product before any significant milestones or costs within the
              project are agreed.
            </p>
          </div>
          <PlayableVideo src="/video.mp4" className="aspect-[4/3] w-full md:order-1" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
