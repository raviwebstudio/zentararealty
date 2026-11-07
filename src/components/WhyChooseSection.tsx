"use client";

import React from "react";
import Image from "next/image";
import { Shield, Sparkles, Compass, CheckCircle2, Award, Zap } from "lucide-react";

export default function WhyChooseSection() {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#C5A46D]" />,
      number: "01",
      title: "Pure Residential Focus",
      description:
        "Unlike generalist brokerages that divide attention between used homes, rental leasing, and commercial spaces, Zentara Realty is dedicated 100% to newly developed residential real estate in Gurugram.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#C5A46D]" />,
      number: "02",
      title: "Early Access Advantage",
      description:
        "We assist qualified buyers in accessing pre-launch phases, expression-of-interest windows, and preferential allotment frameworks directly with reputable developers.",
    },
    {
      icon: <Compass className="w-6 h-6 text-[#C5A46D]" />,
      number: "03",
      title: "Objective Corridor Intelligence",
      description:
        "Unbiased comparative analysis across Golf Course Extension, Dwarka Expressway, SPR, and New Gurgaon, evaluating live livability scores, master plans, and infrastructure delivery.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#C5A46D]" />,
      number: "04",
      title: "End-to-End Buyer Alignment",
      description:
        "From initial requirement mapping and site orientation to builder coordination and allotment paperwork clarity, our advisory remains focused exclusively on your interests.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0B1B32] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#102B50]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102B50] border border-[#C5A46D]/30 text-[#C5A46D] text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            The Zentara Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-heading tracking-tight leading-tight mb-4">
            Why Discerning Homebuyers Choose Zentara Realty
          </h2>
          {/* <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
            Navigating the dynamic Gurgaon residential landscape requires deep corridor knowledge,
            unvarnished market intelligence, and a consultancy that places your aspirations first.
          </p> */}
        </div>

        {/* Feature Visual Banner with Consultation Imagery */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-[#C5A46D]/40 bg-[#102B50]/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] w-full">
              <Image
                src="/images/why-choose-consultation.jpg"
                alt="Zentara Realty — Senior advisory team reviewing master plan blueprints and residential scale models in Gurugram"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#102B50]/90 hidden lg:block" />
            </div>

            <div className="lg:col-span-6 p-8 md:p-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A46D]">
                Consultative Discipline
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading">
                Objective Curation Without Pressure
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Rather than acting as high-pressure transactional brokers, we approach each client engagement as an editorial advisory. We scrutinize developer track records, construction velocities, floor plate efficiencies, and infrastructure access so you make confident, enduring residential acquisitions.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#C5A46D]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Direct Developer Vetting
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Unbiased Layout Analysis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-7 rounded-xl bg-[#102B50]/60 border border-white/10 hover:border-[#C5A46D]/60 hover:bg-[#102B50]/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-[#0B1B32] border border-[#C5A46D]/30 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono text-[#C5A46D]/70">{pillar.number}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-serif-heading mb-3 group-hover:text-[#C5A46D] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#C5A46D] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Advisory Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Distinction Comparison Table */}
        {/* <div className="rounded-xl bg-[#102B50]/40 border border-white/10 p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-[#C5A46D]" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Consultancy Comparison at a Glance
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/15 text-gray-400">
                  <th className="py-2.5 font-semibold">Service Parameter</th>
                  <th className="py-2.5 font-semibold text-[#C5A46D]">Zentara Realty</th>
                  <th className="py-2.5 font-semibold">Traditional Property Brokerage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-300">
                <tr>
                  <td className="py-3 font-medium text-white">Asset Specialization</td>
                  <td className="py-3 text-[#C5A46D] font-semibold">Exclusively New Residential Projects</td>
                  <td className="py-3 text-gray-400">Mixed: Resale, Rentals, Commercial &amp; Used Houses</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Pre-Launch Access</td>
                  <td className="py-3 text-[#C5A46D] font-semibold">Structured EOI &amp; Developer Allocation</td>
                  <td className="py-3 text-gray-400">Delayed or speculative secondary re-selling</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Advisory Orientation</td>
                  <td className="py-3 text-[#C5A46D] font-semibold">Objective Buyer Consultation</td>
                  <td className="py-3 text-gray-400">Quota-driven transactional selling</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Corridor Mastery</td>
                  <td className="py-3 text-[#C5A46D] font-semibold">Focused Gurgaon Infrastructure Roadmaps</td>
                  <td className="py-3 text-gray-400">Broad, generic geographic dispersion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </section>
  );
}
