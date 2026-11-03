"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Target, Eye, Sparkles, CheckCircle, XCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F7F8FA] border-b border-[#E5E9F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102B50]/5 border border-[#102B50]/15 text-[#102B50] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              About Zentara Realty
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B50] font-serif-heading tracking-tight leading-tight">
              A Dedicated Residential Consultancy Focused on Gurgaon&apos;s Next Horizon
            </h2>

            <p className="text-base sm:text-lg text-[#55647A] leading-relaxed">
              Zentara Realty was founded with a singular, resolute objective: to bring absolute clarity,
              editorial rigor, and uncompromised focus to the discovery of new residential developments in
              Gurugram, Haryana.
            </p>

            {/* <p className="text-sm sm:text-base text-[#55647A] leading-relaxed">
              In a crowded market saturated with conflicting listings, second-hand resale houses, and commercial distractions,
              Zentara Realty stands apart by concentrating exclusively on primary residential developments. We work with
              homebuyers and discerning investors to evaluate upcoming, pre-launch, and newly launched residential communities
              across the city&apos;s most promising growth axes.
            </p> */}

            {/* Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-lg bg-white border border-[#E5E9F0] shadow-sm hover:border-[#C5A46D]/60 transition-colors">
                <div className="w-9 h-9 rounded-md bg-[#102B50] text-[#C5A46D] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#102B50] uppercase tracking-wider mb-1">
                  Singular Residential Focus
                </h3>
                <p className="text-xs text-[#55647A] leading-relaxed">
                  We dedicate 100% of our research and advisory capacity to primary residential homes, luxury condominiums, and master-planned living enclaves.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E5E9F0] shadow-sm hover:border-[#C5A46D]/60 transition-colors">
                <div className="w-9 h-9 rounded-md bg-[#102B50] text-[#C5A46D] flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#102B50] uppercase tracking-wider mb-1">
                  Strategic Corridor Insights
                </h3>
                <p className="text-xs text-[#55647A] leading-relaxed">
                  Deep comparative analysis across Golf Course Extension, Dwarka Expressway, SPR, and New Gurgaon infrastructure roadmaps.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-3 text-xs text-[#102B50] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                Independent advisory • No high-pressure sales • Verified developer documentation review
              </div>
            </div>
          </div>

          {/* Right Column: Premium Lifestyle Image & Corporate Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A46D]/40 shadow-xl group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about-lifestyle.jpg"
                  alt="Zentara Realty — Premium residential penthouse lifestyle and terrace lounge in Gurugram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B32]/70 via-transparent to-transparent" />
              </div>

              {/* Inset Quote Badge */}
              <div className="p-6 bg-[#0B1B32] text-white border-t border-[#C5A46D]/30">
                <blockquote className="font-serif-heading text-lg italic text-[#C5A46D] leading-snug mb-3">
                  &ldquo;Residential decisions are enduring commitments. Our role is to provide the foresight, architectural evaluation, and early access our clients need.&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Headquarters: Gurugram, India</span>
                  <span className="text-[#C5A46D] font-medium flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Direct Advisory Practice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MANDATORY BUSINESS EXCLUSIONS & CLEAR SCOPE BANNER */}
        <div className="rounded-2xl bg-[#0B1B32] border border-[#C5A46D]/30 p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A46D] block mb-2">
                Mandate &amp; Transparency Notice
              </span>
              <h3 className="text-2xl md:text-3xl font-serif-heading font-bold text-white mb-2">
                Clear Scope of Advisory
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Zentara Realty strictly restricts its practice to new residential developments to maintain
                unwavering specialization and service quality.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* What we exclusively do */}
              <div className="p-5 rounded-lg bg-[#102B50]/70 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3">
                  <CheckCircle className="w-4 h-4" />
                  What We Exclusively Advise On
                </div>
                <ul className="space-y-2 text-xs text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Pre-Launch Residential Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    New Launch Luxury Condominiums
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Upcoming Residential Townships &amp; High-Rises
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    New Builder &amp; Developer Living Developments
                  </li>
                </ul>
              </div>

              {/* What we DO NOT do */}
              <div className="p-5 rounded-lg bg-[#102B50]/70 border border-rose-500/30">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider mb-3">
                  <XCircle className="w-4 h-4" />
                  Strict Business Exclusions (Not Offered)
                </div>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    NO Resale or Second-Hand Properties
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    NO Commercial Offices, Shops or SCO Plots
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    NO Rental or Tenant Leasing Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    NO Used Property Listings or House Flipping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
