"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[1000] bg-near-black border-b border-antique-gold/15 transition-all duration-300 ${
        scrolled ? "py-3 border-b-antique-gold/30" : "py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-display font-semibold text-2xl text-white tracking-wide">
            PRISTINE <span className="text-antique-gold">CARE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body font-medium text-xs text-white/80 tracking-widest uppercase py-2 border-b-2 transition-all duration-300 hover:text-antique-gold hover:border-antique-gold ${
                  isActive ? "text-antique-gold border-antique-gold opacity-100" : "border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Proposal CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact?service=proposal"
            className="px-5 py-2.5 text-xs font-body font-semibold tracking-wider uppercase bg-antique-gold text-near-black border border-antique-gold hover:bg-transparent hover:text-antique-gold transition-all duration-300"
          >
            Request a Proposal
          </Link>
        </div>

        {/* Hamburger Toggle */}
        <button
          className="lg:hidden flex flex-col justify-between w-6 h-4 bg-transparent border-none cursor-pointer p-0 z-[1001]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${
              mobileMenuOpen ? "rotate-45 translate-x-1" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${
              mobileMenuOpen ? "-rotate-45 translate-x-1" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed inset-0 w-full h-screen bg-near-black z-[999] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-7 w-full px-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-base font-medium text-white/80 uppercase tracking-widest py-2 transition-all duration-300 hover:text-antique-gold ${
                  isActive ? "text-antique-gold opacity-100" : ""
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact?service=proposal"
            className="w-full max-w-[280px] px-6 py-3.5 text-center text-xs font-body font-semibold tracking-wider uppercase bg-antique-gold text-near-black border border-antique-gold hover:bg-transparent hover:text-antique-gold transition-all duration-300 mt-4"
            onClick={handleLinkClick}
          >
            Request a Proposal
          </Link>
        </nav>
      </div>
    </header>
  );
}
