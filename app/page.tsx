"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Pristine Care has consistently met our high standards for linen quality and hygiene compliance. Their 24-hour turnaround has stabilized our daily hospitality operations.",
      name: "Rajesh K. Mehta",
      title: "General Manager",
      organization: "The Grand Palace Residency",
    },
    {
      quote: "In healthcare, sanitization is non-negotiable. Pristine Care provides medical-grade laundry processing that meets our stringent audits and regulatory standards.",
      name: "Dr. Ananya Sharma",
      title: "Chief of Operations",
      organization: "Apex Care Hospital",
    },
    {
      quote: "Their linen management service has reduced our inventory replacement costs by 15% through meticulous tracking and quality preservation protocols.",
      name: "Vikram Sen",
      title: "Director of Procurement",
      organization: "Sovereign Hotels Group",
    },
  ];

  return (
    <div className="overflow-x-hidden w-full">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center text-white py-20 md:py-32 bg-near-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_linen.png"
            alt="Perfected white linen folded on a luxury hotel bed"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-near-black/75 z-10"></div>
        </div>
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6">
          <div className="max-w-3xl">
            <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-5 block">
              PRISTINE CARE
            </span>
            <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-wide leading-tight">
              Immaculate Care. Exceptional Standards.
            </h1>
            <p className="font-body font-light text-base md:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Delivering premium laundry, dry cleaning, linen management and hygiene solutions with uncompromising quality, precision and reliability.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="px-6 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-antique-gold text-near-black border border-antique-gold hover:bg-transparent hover:text-antique-gold transition-all duration-300"
              >
                Request a Proposal
              </Link>
              <Link
                href="/contact?service=consultation"
                className="px-6 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-transparent text-white border border-white hover:bg-white hover:text-near-black transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST METRICS */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <span className="block font-display text-3xl md:text-4xl font-semibold text-near-black mb-2">100,000+</span>
              <span className="font-body font-semibold text-[11px] text-charcoal tracking-widest uppercase">Kg Linen Processed Monthly</span>
            </div>
            <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <span className="block font-display text-3xl md:text-4xl font-semibold text-near-black mb-2">99.9%</span>
              <span className="font-body font-semibold text-[11px] text-charcoal tracking-widest uppercase">Hygiene Compliance</span>
            </div>
            <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <span className="block font-display text-3xl md:text-4xl font-semibold text-near-black mb-2">24-Hour</span>
              <span className="font-body font-semibold text-[11px] text-charcoal tracking-widest uppercase">Turnaround Guarantee</span>
            </div>
            <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <span className="block font-display text-3xl md:text-4xl font-semibold text-near-black mb-2">500+</span>
              <span className="font-body font-semibold text-[11px] text-charcoal tracking-widest uppercase">Satisfied B2B Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPANY INTRODUCTION */}
      <section className="py-20 md:py-28 bg-warm-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">WHO WE ARE</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black leading-tight">The Art of Professional Care</h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
              <p className="font-body font-light text-base leading-relaxed text-charcoal mb-6">
                Pristine Care provides premium laundry and linen management solutions designed for organisations and individuals who value excellence. Every process is carefully managed to ensure impeccable quality, hygiene and consistency from collection to delivery.
              </p>
              <p className="font-body font-light text-sm leading-relaxed text-charcoal/80">
                Our advanced facility integrates eco-friendly chemistry with precise thermal controls, preserving fabric lifespan while ensuring complete microbiological sanitization.
              </p>
            </div>
            <div className="p-2.5 border border-muted-stone bg-white shadow-sm">
              <Image
                src="/company_intro.png"
                alt="Industrial commercial laundry facility with state-of-the-art washing machines"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES OVERVIEW */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">OUR SERVICES</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">What We Deliver</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-muted-stone p-8 flex flex-col gap-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="12" cy="13" r="5"></circle>
                  <circle cx="12" cy="13" r="2"></circle>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  <line x1="17" y1="7" x2="17.01" y2="7"></line>
                </svg>
                <h3 className="font-display font-medium text-xl text-near-black">Premium Laundry Services</h3>
              </div>
              <div className="overflow-hidden border border-muted-stone h-[180px] relative">
                <Image
                  src="/services_laundry.png"
                  alt="Stacked white linens inside a clean facility"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="font-body font-light text-sm leading-relaxed text-charcoal">
                Institutional laundry solutions designed for hotels, hospitals, industries and corporate clients requiring structured processing.
              </p>
              <Link href="/services#laundry" className="inline-flex items-center font-body font-medium text-xs text-antique-gold tracking-wider hover:opacity-80 transition-all duration-300">
                Learn More <span className="ml-1">&rarr;</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-muted-stone p-8 flex flex-col gap-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                  <path d="M12 2a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z"></path>
                  <path d="M12 5v3m-8 4l8-4 8 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"></path>
                </svg>
                <h3 className="font-display font-medium text-xl text-near-black">Luxury Dry Cleaning</h3>
              </div>
              <div className="overflow-hidden border border-muted-stone h-[180px] relative">
                <Image
                  src="/services_dryclean.png"
                  alt="High-end suits hanging on hangers inside dry cleaning shop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="font-body font-light text-sm leading-relaxed text-charcoal">
                Specialist fabric care and stain treatment protocols for premium garments, uniforms, and delicate interior fabrics.
              </p>
              <Link href="/services#drycleaning" className="inline-flex items-center font-body font-medium text-xs text-antique-gold tracking-wider hover:opacity-80 transition-all duration-300">
                Learn More <span className="ml-1">&rarr;</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-muted-stone p-8 flex flex-col gap-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                  <rect x="5" y="3" width="14" height="18" rx="1" strokeWidth="1.5"></rect>
                </svg>
                <h3 className="font-display font-medium text-xl text-near-black">Linen Management</h3>
              </div>
              <div className="overflow-hidden border border-muted-stone h-[180px] relative">
                <Image
                  src="/services_linen.png"
                  alt="Linen management shelves stacked with clean towels and linens"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="font-body font-light text-sm leading-relaxed text-charcoal">
                End-to-end linen lifecycle management, inventory tracking, usage audits, and scheduled replenishment for high-volume hotels.
              </p>
              <Link href="/services#linen" className="inline-flex items-center font-body font-medium text-xs text-antique-gold tracking-wider hover:opacity-80 transition-all duration-300">
                Learn More <span className="ml-1">&rarr;</span>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-muted-stone p-8 flex flex-col gap-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <h3 className="font-display font-medium text-xl text-near-black">Hygiene Solutions</h3>
              </div>
              <div className="overflow-hidden border border-muted-stone h-[180px] relative">
                <Image
                  src="/services_hygiene.png"
                  alt="Sterile environment with sanitized laboratory towels"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="font-body font-light text-sm leading-relaxed text-charcoal">
                Advanced disinfection protocols and certified sanitisation services tailored to healthcare facility requirements.
              </p>
              <Link href="/services#hygiene" className="inline-flex items-center font-body font-medium text-xs text-antique-gold tracking-wider hover:opacity-80 transition-all duration-300">
                Learn More <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY PRISTINE CARE */}
      <section className="py-20 md:py-28 bg-warm-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">WHY CHOOSE US</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">Built on Standards That Don't Compromise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 p-2">
              <div className="text-antique-gold mb-1">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-near-black">Advanced Processing Technology</h3>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                We operate modern, barrier-type washing machines with programmable logic controllers to maintain precise wash profiles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 p-2">
              <div className="text-antique-gold mb-1">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-near-black">Stringent Quality Assurance</h3>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                Every batch of processed linen undergoes inspection protocols measuring fabric strength, whiteness indexes, and pH balances.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 p-2">
              <div className="text-antique-gold mb-1">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-near-black">Dedicated Client Support</h3>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                Corporate clients are assigned a dedicated account manager to coordinate schedules, logistics, and resolve special fabric care requests.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-4 p-2">
              <div className="text-antique-gold mb-1">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-near-black">Sustainable Operations</h3>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                Our facility implements water reclamation recycling loops and high-efficiency thermal units to minimize environmental footprints.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col gap-4 p-2">
              <div className="text-antique-gold mb-1">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-near-black">Timely Collection and Delivery</h3>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                Our private fleet maintains strict transit schedules to ensure clients receive on-time daily drop-offs without disruption.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col gap-4 p-2">
              <div className="text-antique-gold mb-1">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-near-black">Industry-Specific Expertise</h3>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                We structure wash procedures based on strict hospitality linen lifecycles, healthcare bacteriological controls, and industrial soil removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INDUSTRIES SERVED */}
      <section className="py-20 md:py-28 bg-near-black text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">INDUSTRIES</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white">Serving the Institutions That Cannot Compromise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tile 1 */}
            <div className="border border-muted-stone/15 p-8 transition-all duration-300 hover:border-antique-gold hover:bg-white/2">
              <div className="text-antique-gold">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  <line x1="9" y1="13" x2="9.01" y2="13"></line>
                  <line x1="15" y1="13" x2="15.01" y2="13"></line>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-white mt-4 mb-2">Luxury Hospitality</h3>
              <p className="font-body font-light text-xs text-white/70 leading-relaxed">
                High-thread-count bed linens, luxury bath towels, table napery, and dry cleaning for five-star hotels.
              </p>
            </div>

            {/* Tile 2 */}
            <div className="border border-muted-stone/15 p-8 transition-all duration-300 hover:border-antique-gold hover:bg-white/2">
              <div className="text-antique-gold">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <line x1="12" y1="4" x2="12" y2="20"></line>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-white mt-4 mb-2">Healthcare & Medical</h3>
              <p className="font-body font-light text-xs text-white/70 leading-relaxed">
                Disinfected bedsheets, patient uniforms, surgical scrubs, and hospital blankets processed under microbiologically secure protocols.
              </p>
            </div>

            {/* Tile 3 */}
            <div className="border border-muted-stone/15 p-8 transition-all duration-300 hover:border-antique-gold hover:bg-white/2">
              <div className="text-antique-gold">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-white mt-4 mb-2">Corporate Offices</h3>
              <p className="font-body font-light text-xs text-white/70 leading-relaxed">
                Uniform management, executive garment dry cleaning, and facility textile sanitization programs.
              </p>
            </div>

            {/* Tile 4 */}
            <div className="border border-muted-stone/15 p-8 transition-all duration-300 hover:border-antique-gold hover:bg-white/2">
              <div className="text-antique-gold">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 21H2V3l7 4 6-4 7 4v18z"></path>
                  <rect x="6" y="12" width="4" height="4"></rect>
                  <rect x="14" y="12" width="4" height="4"></rect>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-white mt-4 mb-2">Industrial Facilities</h3>
              <p className="font-body font-light text-xs text-white/70 leading-relaxed">
                High-durability workwear, heavy grease removal, protective overalls, and chemical-resistant uniforms.
              </p>
            </div>

            {/* Tile 5 */}
            <div className="border border-muted-stone/15 p-8 transition-all duration-300 hover:border-antique-gold hover:bg-white/2">
              <div className="text-antique-gold">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-white mt-4 mb-2">Premium Residential</h3>
              <p className="font-body font-light text-xs text-white/70 leading-relaxed">
                Scheduled door-to-door luxury laundry, dry cleaning, and home textile care solutions for estate communities.
              </p>
            </div>

            {/* Tile 6 */}
            <div className="border border-muted-stone/15 p-8 transition-all duration-300 hover:border-antique-gold hover:bg-white/2">
              <div className="text-antique-gold">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-5"></path>
                </svg>
              </div>
              <h3 className="font-display font-medium text-lg text-white mt-4 mb-2">Educational Institutions</h3>
              <p className="font-body font-light text-xs text-white/70 leading-relaxed">
                Hostel linens, laboratory coats, athletic team wear, and academic staff uniform sanitization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">CLIENT VOICES</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">Trusted by Those Who Demand the Best</h2>
          </div>
          
          <div className="max-w-3xl mx-auto px-6">
            <div className="border-l-3 border-antique-gold pl-6 md:pl-8 mb-6">
              <p className="font-display italic text-lg md:text-xl lg:text-2xl text-near-black leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
            </div>
            <div className="flex flex-col pl-7 md:pl-9 mt-4">
              <span className="font-body font-semibold text-sm text-near-black">
                {testimonials[activeTestimonial].name}
              </span>
              <span className="font-body font-light text-xs text-charcoal/80 mt-1">
                {testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].organization}
              </span>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full border border-antique-gold transition-all duration-300 ${
                    activeTestimonial === index ? "bg-antique-gold scale-120" : "bg-transparent"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA BAND */}
      <section className="py-20 bg-warm-off-white relative border-y border-muted-stone">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black mb-4">
            Experience the Difference
          </h2>
          <p className="font-body font-light text-base text-charcoal mb-8">
            Partner with Pristine Care and set a new benchmark for quality and reliability.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 text-xs font-body font-semibold tracking-wider uppercase bg-antique-gold text-near-black border border-antique-gold hover:bg-transparent hover:text-antique-gold transition-all duration-300 inline-block min-w-[200px]"
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
