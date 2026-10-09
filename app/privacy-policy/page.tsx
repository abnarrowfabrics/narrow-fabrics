import type { Metadata } from "next";
import { sharedOpenGraph } from "../lib/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const title = "Privacy Policy — AB Narrow Fabrics";
const description =
  "How AB Narrow Fabrics handles the information you share when you visit abnarrowfabrics.com or contact us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { ...sharedOpenGraph, title, description, url: "/privacy-policy" },
};

const sections = [
  {
    heading: "Who we are",
    body: [
      "AB Narrow Fabrics is a narrow fabric manufacturer at Plot No. 45, KH. No. 80, Gali No. 09, Samaypur Industrial Area, Delhi 110042, India. This policy explains what information we receive through abnarrowfabrics.com and how we use it.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We do not use analytics or advertising trackers, and this website does not set its own cookies.",
      "The contact form does not send anything to our servers. When you press “Send Message”, it opens WhatsApp with your name, email address and message filled in. We only receive that information if you choose to send the WhatsApp message.",
      "If you call us, message us on WhatsApp or email us, we receive your phone number or email address and whatever you choose to tell us.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the details you send us only to reply to your enquiry, prepare quotes, and process and deliver your orders. We do not sell or rent your information, and we do not use it for marketing you did not ask for.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "Our website is hosted on Cloudflare, which processes technical data such as your IP address and browser type to deliver and secure the site.",
      "The map on our homepage is embedded from Google Maps, which may set its own cookies when it loads. Links to WhatsApp, Instagram, Gmail and your phone app take you to those services, which have their own privacy policies.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiry and order details only as long as we need them to serve you and to meet our tax and accounting obligations.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us to show, correct or delete the personal information we hold about you, or withdraw your consent to us using it. Contact us using the details below and we will respond as soon as possible.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "For any privacy question or request, email abnarrowfabrics@gmail.com or call +91 85279 11209.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: ["If we change how we handle information, we will update this page and the date below."],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="overflow-x-clip">
      <Header />

      <PageHero title="Privacy Policy" subtitle="Last updated: 9 October 2026" />

      <section className="px-5 py-[clamp(60px,8vw,100px)] sm:px-10">
        <div className="mx-auto max-w-3xl">
          {sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold">
                {section.heading}
              </h2>
              {section.body.map((text) => (
                <p key={text} className="mb-3 text-[16px] leading-[1.75] text-gray-600">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
