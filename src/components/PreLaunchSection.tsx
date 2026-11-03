"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ShieldAlert, ArrowRight, Compass } from "lucide-react";

export default function PreLaunchSection() {
  const preLaunchCards = [
    {
      id: "golf-course-ext-prelaunch",
      corridor: "Golf Course Extension Road",
      categoryTitle: "Ultra-Luxury High-Rise Residential Enclave",
      phaseBadge: "Pre-Launch • Expression of Interest",
      microMarket: "Prime Golf Course Ext. Corridor, Gurugram",
      typology: "3.5 & 4.5 BHK Luxury Condominiums",
      image: "/images/prelaunch-architecture.jpg",
      imageAlt: "Pre-launch luxury residential high-rise with cantilevered green sky terraces on Golf Course Extension Road",
      architecturalHighlights: [
        "Low-density towers with wide panoramic green views",
        "Wrap-around sundecks & dedicated staff quarters",
        "Triple-height grand entrance lobby & experiential clubhouse",
        "Proximity to premier business districts & international schools",
      ],
      advisoryNote: "Early-stage allotment structuring available upon consultation.",
    },
    {
      id: "dwarka-exp-prelaunch",
      corridor: "Dwarka Expressway (NPR)",
      categoryTitle: "Eco-Luxury Waterfront-Inspired High-Rise",
      phaseBadge: "Pre-Launch • Advance Registration",
      microMarket: "Dwarka Expressway Growth Axis, Gurugram",
      typology: "3 & 4 BHK Premium Smart Residences",
      image: "/images/dwarka-expressway.jpg",
      imageAlt: "Curvilinear modern residential skyscraper at twilight on Dwarka Expressway, Gurugram",
      architecturalHighlights: [
        "Direct non-stop signal-free access to IGI Airport & Delhi",
        "Biophilic architecture with 80% open landscaped greens",
        "Olympic-length pool, sports pavilion & wellness sanctuaries",
        "Multi-tier smart security & EV charging infrastructure",
      ],
      advisoryNote: "Advance expression stage for preferred tower selection.",
    },
    {
      id: "spr-prelaunch",
      corridor: "Southern Peripheral Road (SPR)",
      categoryTitle: "Forest-Themed Low-Density Residences",
      phaseBadge: "Pre-Launch • Priority EOI",
      microMarket: "Sector 70-76 Belt, SPR Corridor, Gurugram",
      typology: "3 & 4 BHK Luxury Forest-Facing Suites",
      image: "/images/spr-residences.jpg",
      imageAlt: "Nature-flanked luxury low-density residential towers on Southern Peripheral Road, Gurugram",
      architecturalHighlights: [
        "Seamless connectivity to Cyber City 2 & Cloverleaf interchange",
        "Pedestrian-first central woodland green spine",
        "Exclusive two-to-a-core private elevator access",
        "Extensive recreational club with temperature-controlled indoor pool",
      ],
      advisoryNote: "Expression of interest registration currently accessible.",
    },
    {
      id: "new-gurgaon-prelaunch",
      corridor: "New Gurgaon / CPR Nexus",
      categoryTitle: "Master-Planned Integrated Residential Enclave",
      phaseBadge: "Upcoming • Pre-Launch Phase",
      microMarket: "Sectors 82-92 Growth Corridor, Gurugram",
      typology: "3 & 4 BHK Modern Family Condominiums",
      image: "/images/new-gurgaon.jpg",
      imageAlt: "Master-planned residential enclave with landscaped central promenades in New Gurgaon",
      architecturalHighlights: [
        "Unimpeded access to NH-48 and Delhi-Mumbai Expressway",
        "Integrated high-street retail, social infrastructure & landscaped parks",
        "Efficient modern floor plates with zero wasted square footage",
        "State-of-the-art multi-generation sports & leisure hub",
      ],
      advisoryNote: "Priority corridor consultation open for prospective buyers.",
    },
  ];

  return (
    <section id="pre-launch" className="py-24 bg-[#F7F8FA] border-b border-[#E5E9F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102B50]/5 border border-[#102B50]/15 text-[#102B50] text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
            Early Stage Discovery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B50] font-serif-heading tracking-tight leading-tight mb-4">
            Pre-Launch Residential Projects
          </h2>
          <p className="text-base sm:text-lg text-[#55647A] leading-relaxed">
            Gain verified market intelligence and structured advisory on pre-launch residential developments
            across Gurugram&apos;s most sought-after development corridors before broad public release.
          </p>
        </div>

        {/* Project Category Grid with Premium Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {preLaunchCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl border border-[#E5E9F0] shadow-sm hover:border-[#C5A46D]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B32]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#102B50]/90 text-[#C5A46D] border border-[#C5A46D]/40 backdrop-blur-sm">
                      {card.phaseBadge}
                    </span>
                    <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                      {card.corridor}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-7 md:p-8">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102B50] font-serif-heading mb-2 group-hover:text-[#C5A46D] transition-colors">
                    {card.categoryTitle}
                  </h3>

                  <div className="text-xs font-semibold text-[#55647A] uppercase tracking-wider mb-4 pb-3 border-b border-[#E5E9F0]">
                    Typology: <span className="text-[#102B50]">{card.typology}</span>
                  </div>

                  {/* Architectural Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Key Architectural Attributes
                    </div>
                    <ul className="space-y-1.5">
                      {card.architecturalHighlights.map((hl, i) => (
                        <li key={i} className="text-xs text-[#202938] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advisory Note */}
                  <div className="p-3 rounded bg-[#F7F8FA] border border-[#E5E9F0] text-[11px] text-[#55647A] italic">
                    Advisory Note: {card.advisoryNote}
                  </div>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="px-7 py-4 bg-[#F7F8FA] border-t border-[#E5E9F0] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#55647A]">
                  {card.microMarket}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#102B50] hover:text-[#C5A46D] transition-colors"
                >
                  Enquire Project
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory & Ethical Transparency Callout */}
        <div className="p-5 rounded-lg bg-white border border-[#E5E9F0] flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
          <div className="text-xs text-[#55647A] leading-relaxed">
            <span className="font-semibold text-[#102B50]">Statutory Advisory Protocol:</span>{" "}
            Representative conceptual development profiles are curated to guide corridor analysis.
            In strict compliance with statutory regulations, specific developer documentation, sanctioned building plans,
            and Haryana RERA registration certificates are shared directly during formal advisory consultations. Zentara Realty does not publish unverified commercial terms or unconfirmed availability.
          </div>
        </div>
      </div>
    </section>
  );
}
