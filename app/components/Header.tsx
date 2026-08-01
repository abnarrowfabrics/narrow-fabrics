"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/#products", label: "Products" },
  { href: "/product-customisation", label: "Product Customisation" },
  { href: "/market-sector", label: "Market Sector" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-10">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
          <Image src="/logo.jpg" alt="AB Narrow Fabrics" width={40} height={40} className="h-10 w-10 rounded-md object-contain" />
          <div className="font-[family-name:var(--font-heading)] text-[19px] font-bold tracking-wide">
            AB NARROW FABRICS
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-medium text-gray-700 hover:text-[#1E3A8A]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="whitespace-nowrap rounded-sm bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#152a63]"
          >
            Get a Quote
          </Link>
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
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-gray-100 py-2.5 text-[16px] font-medium text-gray-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="mt-2.5 rounded-sm bg-[#1E3A8A] px-5 py-3 text-center text-[15px] font-semibold text-white"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

export { navLinks };
