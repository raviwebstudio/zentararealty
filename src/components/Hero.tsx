"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Compass, Shield, Building2, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B1B32] text-white overflow-hidden">
      {/* Background architectural geometric patterns and subtle glow */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#102B50]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[450px] h-[450px] bg-[#C5A46D]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Top Badge */}
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102B50]/90 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gurgaon Residential Real Estate Consultancy</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 font-serif-heading leading-[1.12]">
              Discover What&apos;s Next in{" "}
              <span className="text-gold-gradient block sm:inline">Residential Living.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              Explore pre-launch and newly launched residential developments in Gurgaon with Zentara Realty.
              Discover new opportunities in one of India&apos;s most dynamic residential markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-8">
              <a
                href="#pre-launch"
                className="w-full sm:w-auto px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group focus:ring-2 focus:ring-white"
              >
                Explore Residential Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-white/25 transition-all duration-200 flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#C5A46D]"
              >
                Contact Us
              </a>
            </div>

            {/* Direct Consultation Note */}
            <div className="flex items-center gap-2 text-xs text-[#C5A46D]/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-pulse" />
              Exclusively New Residential Projects • No Resale or Rentals
            </div>
          </div>

          {/* Right Column: Luxury Architectural Feature Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-[#C5A46D]/40 shadow-2xl group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/hero-architecture.jpg"
                  alt="Zentara Realty — Luxury residential high-rise architecture in Gurugram at twilight"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B32] via-[#0B1B32]/30 to-transparent" />
              </div>

              {/* Architectural Highlight Overlay Badge */}
              <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-[#0B1B32]/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#C5A46D] font-mono uppercase tracking-wider font-semibold">
                    Primary Market Portfolio
                  </span>
                  <span className="text-gray-300">Gurugram, Haryana</span>
                </div>
                <div className="text-sm font-bold text-white font-serif-heading">
                  Curated Pre-Launch &amp; New Launch Condominiums
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10 text-left">
          <div className="p-4 rounded-lg bg-[#102B50]/50 border border-white/10 hover:border-[#C5A46D]/40 transition-colors">
            <Building2 className="w-5 h-5 text-[#C5A46D] mb-2" />
            <div className="text-xs uppercase tracking-wider font-semibold text-white">
              100% Primary Market
            </div>
            <div className="text-[11px] text-gray-400 mt-1">
              Zero resale or rental churn. Purely new residential developments.
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#102B50]/50 border border-white/10 hover:border-[#C5A46D]/40 transition-colors">
            <Compass className="w-5 h-5 text-[#C5A46D] mb-2" />
            <div className="text-xs uppercase tracking-wider font-semibold text-white">
              Pre-Launch Advantage
            </div>
            <div className="text-[11px] text-gray-400 mt-1">
              Early expression of interest insights &amp; master-plan clarity.
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#102B50]/50 border border-white/10 hover:border-[#C5A46D]/40 transition-colors">
            <MapPin className="w-5 h-5 text-[#C5A46D] mb-2" />
            <div className="text-xs uppercase tracking-wider font-semibold text-white">
              Gurugram Corridors
            </div>
            <div className="text-[11px] text-gray-400 mt-1">
              Golf Course Ext., Dwarka Exp., SPR &amp; New Gurgaon expertise.
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#102B50]/50 border border-white/10 hover:border-[#C5A46D]/40 transition-colors">
            <Shield className="w-5 h-5 text-[#C5A46D] mb-2" />
            <div className="text-xs uppercase tracking-wider font-semibold text-white">
              Direct Advisory
            </div>
            <div className="text-[11px] text-gray-400 mt-1">
              Objective consultation and builder coordination without pressure.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
