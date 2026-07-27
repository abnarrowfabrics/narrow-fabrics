"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Header";

const WHATSAPP_NUMBER = "918527911209";

const socialLinks = [
  { label: "IG", href: "https://instagram.com" },
  { label: "WA", href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { label: "Tel", href: "tel:+910000000000" },
  { label: "@", href: "mailto:info@abnarrowfabrics.example" },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer id="contact" className="scroll-mt-20 bg-[#0B0B0C] px-5 pt-[clamp(60px,8vw,90px)] pb-8 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12 border-b border-white/12 pb-14">
        <div>
          <Link href="/" className="mb-4.5 flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="AB Narrow Fabrics" width={40} height={40} className="h-10 w-10 rounded-md bg-white object-contain p-0.5" />
            <div className="font-[family-name:var(--font-heading)] text-[18px] font-bold text-white">
              AB NARROW FABRICS
            </div>
          </Link>
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
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white"
              >
                {link.label}
              </Link>
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
  );
}
