"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, MapPin, Check, ArrowRight, SlidersHorizontal } from "lucide-react";

export default function NewLaunchesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All New Launches" },
    { id: "3bhk", label: "3 BHK Formats" },
    { id: "4bhk", label: "4 BHK Formats" },
    { id: "luxury", label: "Sky Suites & Penthouses" },
  ];

  const newLaunchItems = [
    {
      id: "sky-residences-golf-ext",
      type: ["all", "3bhk", "4bhk"],
      corridor: "Golf Course Extension Road",
      title: "Contemporary High-Rise Sky Residences",
      status: "Active New Launch",
      location: "Prime Sector Belt, Golf Course Ext., Gurugram",
      configurations: "3 & 4 BHK Luxury Suites + Staff Quarters",
      image: "/images/newlaunch-architecture.jpg",
      imageAlt: "Contemporary luxury high-rise condominium tower with landscaped sky decks and floor-to-ceiling glass balconies",
      features: [
        "Floor-to-ceiling double-glazed soundproof glass facades",
        "Air-conditioned grand lobbies with private concierge desk",
        "Over 65,000 sq.ft. signature lifestyle clubhouse",
        "Direct arterial signal-free access to Cyber City & MG Road",
      ],
      advisoryNote: "Active allocation phase with multiple layout orientations.",
    },
    {
      id: "panoramic-deck-dwarka",
      type: ["all", "3bhk", "luxury"],
      corridor: "Dwarka Expressway (NPR)",
      title: "Panoramic Deck Residences on Expressway Axis",
      status: "Recently Introduced",
      location: "Expressway Corridor, Sector 102–109 Belt",
      configurations: "3 BHK & 3.5 BHK Deck Apartments",
      image: "/images/dwarka-expressway.jpg",
      imageAlt: "Luxury high-rise residential apartments overlooking landscaped gardens on Dwarka Expressway",
      features: [
        "12-foot deep cantilevered sundecks overlooking greens",
        "Integrated central VRV air conditioning with air-purification filters",
        "Heated rooftop infinity pool & observatory lounge",
        "15 minutes transit connectivity to Delhi Airport Terminal 3",
      ],
      advisoryNote: "Inventory selection open across mid and high-rise levels.",
    },
    {
      id: "low-density-spr",
      type: ["all", "4bhk", "luxury"],
      corridor: "Southern Peripheral Road (SPR)",
      title: "Low-Density Elevated Forest Residences",
      status: "Active New Launch",
      location: "SPR Luxury District, Gurugram",
      configurations: "4 BHK Ultra-Spacious Residences & Penthouses",
      image: "/images/spr-residences.jpg",
      imageAlt: "Low-density forest-facing luxury condominium towers on Southern Peripheral Road",
      features: [
        "Ultra-exclusive layout with only 2 residences per floor",
        "Dedicated dual high-speed elevators opening to private foyer",
        "Expansive 400+ sq.ft. master suite with walk-in wardrobe area",
        "Zero vehicular traffic movement on ground master deck",
      ],
      advisoryNote: "Limited signature inventory available for private preview.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? newLaunchItems
      : newLaunchItems.filter((item) => item.type.includes(activeFilter));

  return (
    <section id="new-launches" className="py-24 bg-white border-b border-[#E5E9F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102B50]/5 border border-[#102B50]/15 text-[#102B50] text-xs font-bold uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#C5A46D]" />
              Active Primary Developments
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B50] font-serif-heading tracking-tight leading-tight mb-4">
              Newly Launched Residential Projects
            </h2>
            {/* <p className="text-base sm:text-lg text-[#55647A] leading-relaxed">
              Discover newly launched residential communities in Gurugram featuring contemporary architecture,
              expansive layouts, and premier lifestyle infrastructure.
            </p> */}
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#55647A] mr-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${activeFilter === cat.id
                  ? "bg-[#102B50] text-white shadow-sm"
                  : "bg-[#F7F8FA] text-[#55647A] hover:bg-[#E5E9F0]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Cards with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#F7F8FA] rounded-xl border border-[#E5E9F0] hover:border-[#C5A46D]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1B32]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-900/90 text-emerald-300 border border-emerald-400/40 backdrop-blur-sm">
                      {item.status}
                    </span>
                    <span className="text-xs text-white bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                      {item.corridor}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#102B50] font-serif-heading mb-2 group-hover:text-[#C5A46D] transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#102B50] mb-4 pb-3 border-b border-[#E5E9F0]">
                    Configurations: {item.configurations}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Architectural Specifications
                    </div>
                    <ul className="space-y-2">
                      {item.features.map((feat, i) => (
                        <li key={i} className="text-xs text-[#202938] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded bg-white border border-[#E5E9F0] text-[11px] text-[#55647A]">
                    <span className="font-semibold text-[#102B50]">Advisory Insight:</span> {item.advisoryNote}
                  </div>
                </div>
              </div>

              <div className="px-7 py-4 bg-white border-t border-[#E5E9F0] flex items-center justify-between rounded-b-xl">
                <span className="text-[11px] text-[#55647A]">{item.location}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#102B50] hover:text-[#C5A46D] transition-colors"
                >
                  Consult Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & Commercial Transparency Note */}
        <div className="p-5 rounded-lg bg-[#F7F8FA] border border-[#E5E9F0] text-center max-w-4xl mx-auto">
          <p className="text-xs text-[#55647A] leading-relaxed">
            <span className="font-semibold text-[#102B50]">Pricing &amp; Allotment Clarity:</span>{" "}
            Official commercial pricing structures, possession schedules, and payment plans are governed dynamically
            by respective builders and regulatory statutory filings. Inquire directly with Zentara Realty for current phase inventory sheets, floor layouts, and verified builder allotment guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
