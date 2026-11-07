"use client";

import React, { useState } from "react";
import {
  Building,
  Building2,
  MapPin,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  FileText,
  Layers,
  Wind,
  Lock,
  Car,
  Utensils,
  FolderHeart,
  Compass,
  CheckCircle2,
  Info,
} from "lucide-react";
import { PRIME_RESIDENCES_DATA } from "@/data/primeResidences";

export default function PrimeResidencesShowcase() {
  const [activeTab, setActiveTab] = useState<"configurations" | "club-prime" | "specifications" | "location">("configurations");
  const data = PRIME_RESIDENCES_DATA;

  const handleEnquireClick = (planTitle?: string) => {
    if (typeof window !== "undefined") {
      const select = document.getElementById("interestedIn") as HTMLSelectElement | null;
      if (select && planTitle) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.includes(planTitle) || select.options[i].value.includes(planTitle)) {
            select.selectedIndex = i;
            select.dispatchEvent(new Event("change", { bubbles: true }));
            break;
          }
        }
      }
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="prime-residences" className="py-24 bg-white border-b border-[#E5E9F0] relative overflow-hidden">
      {/* Anchor targets to preserve existing bookmarks */}
      <div id="pre-launch" className="absolute -top-24 left-0" />
      <div id="new-launches" className="absolute -top-24 left-0" />

      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102B50]/5 border border-[#102B50]/15 text-[#102B50] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Featured Primary Residential Project</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B50] font-serif-heading tracking-tight leading-tight mb-4">
            {data.projectName}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-[#C5A46D] mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {data.location.sector}, {data.location.city}
            </span>
            <span>•</span>
            <span>By {data.developer}</span>
          </div>

          <p className="text-base sm:text-lg text-[#55647A] leading-relaxed max-w-3xl mx-auto font-light">
            {data.overviewSummary}
          </p>
        </div>

        {/* 6 Key Project Highlights Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14">
          <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] text-center hover:border-[#C5A46D]/60 transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Land Area</div>
            <div className="text-sm sm:text-base font-bold text-[#102B50] font-serif-heading">{data.landArea}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Low-Density Gated</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] text-center hover:border-[#C5A46D]/60 transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Total Units</div>
            <div className="text-sm sm:text-base font-bold text-[#102B50] font-serif-heading">{data.totalResidences} Boutique</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Exclusive Enclave</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] text-center hover:border-[#C5A46D]/60 transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Structure</div>
            <div className="text-sm sm:text-base font-bold text-[#102B50] font-serif-heading">{data.structure} Low-Rise</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Basement + Stilt + 4</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] text-center hover:border-[#C5A46D]/60 transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Typologies</div>
            <div className="text-sm sm:text-base font-bold text-[#102B50] font-serif-heading">2 &amp; 3 BHK</div>
            <div className="text-[10px] text-[#C5A46D] font-semibold mt-0.5">+ Private Basement</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] text-center hover:border-[#C5A46D]/60 transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Clubhouse</div>
            <div className="text-sm sm:text-base font-bold text-[#102B50] font-serif-heading">40,000 Sq.Ft.</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Club Prime Luxury</div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] text-center hover:border-[#C5A46D]/60 transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Possession</div>
            <div className="text-sm sm:text-base font-bold text-emerald-800 font-serif-heading">{data.possession}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Target Timeline</div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-[#E5E9F0]">
          <button
            type="button"
            onClick={() => setActiveTab("configurations")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === "configurations"
              ? "bg-[#102B50] text-white shadow-md"
              : "bg-[#F7F8FA] text-[#55647A] hover:bg-[#E5E9F0] hover:text-[#102B50]"
              }`}
          >
            <Building className="w-4 h-4 text-[#C5A46D]" />
            <span>Configurations &amp; Pricing</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("club-prime")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === "club-prime"
              ? "bg-[#102B50] text-white shadow-md"
              : "bg-[#F7F8FA] text-[#55647A] hover:bg-[#E5E9F0] hover:text-[#102B50]"
              }`}
          >
            <Sparkles className="w-4 h-4 text-[#C5A46D]" />
            <span>Club Prime (40,000 Sq.Ft.)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("specifications")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === "specifications"
              ? "bg-[#102B50] text-white shadow-md"
              : "bg-[#F7F8FA] text-[#55647A] hover:bg-[#E5E9F0] hover:text-[#102B50]"
              }`}
          >
            <Layers className="w-4 h-4 text-[#C5A46D]" />
            <span>Luxury Specifications</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("location")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === "location"
              ? "bg-[#102B50] text-white shadow-md"
              : "bg-[#F7F8FA] text-[#55647A] hover:bg-[#E5E9F0] hover:text-[#102B50]"
              }`}
          >
            <MapPin className="w-4 h-4 text-[#C5A46D]" />
            <span>Sector 65 Location Advantages</span>
          </button>
        </div>

        {/* TAB 1: Configurations & Pricing */}
        {activeTab === "configurations" && (
          <div id="configurations" className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {data.configurations.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-[#F7F8FA] rounded-2xl border-2 border-[#E5E9F0] hover:border-[#C5A46D] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl group"
                >
                  <div>
                    {/* Card Top Pill & Title */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#102B50] text-[#C5A46D]">
                        {plan.typology}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                        Sector 65, Gurugram
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#102B50] font-serif-heading mb-4">
                      {plan.title}
                    </h3>

                    {/* Price & Area Highlight Box */}
                    <div className="p-5 rounded-xl bg-white border border-[#E5E9F0] shadow-sm mb-6">
                      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Total Area</div>
                          <div className="text-xl sm:text-2xl font-bold text-[#102B50] font-serif-heading">
                            {plan.totalArea}
                          </div>
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Indicative Price*</div>
                          <div className="text-xl sm:text-2xl font-bold text-[#C5A46D] font-serif-heading">
                            {plan.priceStarting}
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 text-xs flex items-center justify-between">
                        <span className="text-gray-500">Booking Amount:</span>{" "}
                        <span className="font-semibold text-emerald-800">{plan.bookingAmount}</span>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-2.5 mb-8">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Included Unit Specifications
                      </div>
                      <ul className="space-y-2">
                        {plan.highlights.map((feat, i) => (
                          <li key={i} className="text-xs text-[#202938] flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-4 border-t border-[#E5E9F0] flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleEnquireClick(plan.title)}
                      className="w-full sm:flex-1 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#102B50] hover:bg-[#153866] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEnquireClick("Request Project Details")}
                      className="w-full sm:w-auto py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-[#102B50] bg-white border border-[#E5E9F0] hover:border-[#C5A46D] hover:bg-[#F7F8FA] transition-all flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>Request Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Disclaimer Box */}
            <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] flex items-start gap-3 text-xs text-[#55647A] max-w-4xl mx-auto">
              <Info className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="font-semibold text-[#102B50]">Pricing Clarity:</span> {data.priceDisclaimer}{" "}
                Booking amount is ₹10 Lakhs. Possession is scheduled for End of 2027.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: Club Prime (40,000 Sq.Ft.) */}
        {activeTab === "club-prime" && (
          <div id="club-prime" className="space-y-8 animate-fadeIn">
            {/* Club Prime Banner */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#102B50] to-[#0B1B32] text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative max-w-3xl">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#C5A46D] px-3 py-1 rounded-full bg-white/10 mb-3">
                  Signature Lifestyle Destination
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold font-serif-heading mb-3">
                  {data.clubPrime.name} — {data.clubPrime.sizeSqFt}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6">
                  {data.clubPrime.summary} Designed with intimate, low-density luxury in mind so you and your family experience world-class amenities without overcrowding.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A46D] bg-[#0B1B32]/70 px-4 py-2 rounded-lg border border-[#C5A46D]/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{data.clubPrime.exclusivity}</span>
                </div>
              </div>
            </div>

            {/* 4 Amenity Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.clubPrime.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F8FA] rounded-xl border border-[#E5E9F0] p-6 hover:border-[#C5A46D]/60 hover:shadow-md transition-all"
                >
                  <h4 className="text-base font-bold text-[#102B50] font-serif-heading pb-3 mb-4 border-b border-[#E5E9F0] flex items-center justify-between">
                    <span>{cat.category}</span>
                    <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  </h4>
                  <ul className="space-y-2.5">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-[#202938] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Direct Club Prime Consultation CTA */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => handleEnquireClick("Club Prime Amenities Enquiry")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#102B50] hover:bg-[#153866] transition-all shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Schedule a Consultation for Club Prime</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: Luxury Specifications */}
        {activeTab === "specifications" && (
          <div id="specifications" className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-[#102B50] font-serif-heading mb-2">
                Thoughtful Design, Timeless Elegance
              </h3>
              <p className="text-xs sm:text-sm text-[#55647A]">
                Every home at PRIME RESIDENCES is a blend of style, comfort &amp; smart functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F8FA] rounded-xl border border-[#E5E9F0] p-6 hover:border-[#C5A46D] hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#102B50]/5 border border-[#102B50]/10 flex items-center justify-center text-[#102B50] group-hover:bg-[#102B50] group-hover:text-[#C5A46D] transition-colors mb-4">
                    {spec.title === "Flooring" && <Layers className="w-5 h-5" />}
                    {spec.title === "Kitchen" && <Utensils className="w-5 h-5" />}
                    {spec.title === "Wardrobes" && <FolderHeart className="w-5 h-5" />}
                    {spec.title === "Climate Control" && <Wind className="w-5 h-5" />}
                    {spec.title === "Smart & Secure" && <Lock className="w-5 h-5" />}
                    {spec.title === "Dedicated Parking" && <Car className="w-5 h-5" />}
                    {spec.title === "Power & Security" && <ShieldCheck className="w-5 h-5" />}
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A46D] mb-1">
                    {spec.title}
                  </div>
                  <h4 className="text-sm font-bold text-[#102B50] mb-2 font-serif-heading">
                    {spec.spec}
                  </h4>
                  <p className="text-xs text-[#55647A] leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Location Advantages */}
        {activeTab === "location" && (
          <div id="location-advantages" className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-[#102B50] font-serif-heading mb-2">
                At the Heart of Gurugram&apos;s Growth Corridor
              </h3>
              <p className="text-xs sm:text-sm text-[#55647A]">
                Perfectly placed in Sector 65, PRIME RESIDENCES ensures unmatched connectivity and lifestyle convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Elite Neighbourhood */}
              <div className="bg-[#F7F8FA] rounded-xl border border-[#E5E9F0] p-6 hover:border-[#C5A46D]/60 transition-all">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B50] mb-4 pb-2 border-b border-[#E5E9F0] w-full">
                  <Building2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>Elite Neighbourhood</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Surrounded by Gurugram&apos;s most iconic landmark developments:
                </p>
                <ul className="space-y-2.5">
                  {data.locationAdvantages.landmarks.map((landmark, i) => (
                    <li key={i} className="text-xs text-[#202938] font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                      <span>{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Effortless Connectivity */}
              <div className="bg-[#F7F8FA] rounded-xl border border-[#E5E9F0] p-6 hover:border-[#C5A46D]/60 transition-all">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B50] mb-4 pb-2 border-b border-[#E5E9F0] w-full">
                  <Compass className="w-4 h-4 text-[#C5A46D]" />
                  <span>Effortless Arterial Connectivity</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Seamless multi-lane highway connectivity across NCR:
                </p>
                <ul className="space-y-3">
                  {data.locationAdvantages.connectivity.map((conn, i) => (
                    <li key={i} className="text-xs text-[#202938] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <span>{conn}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Future Ready */}
              <div className="bg-[#F7F8FA] rounded-xl border border-[#E5E9F0] p-6 hover:border-[#C5A46D]/60 transition-all">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B50] mb-4 pb-2 border-b border-[#E5E9F0] w-full">
                  <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  <span>Future Ready Transit</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Transit-oriented long-term capital appreciation:
                </p>
                <ul className="space-y-3">
                  {data.locationAdvantages.upcomingTransit.map((transit, i) => (
                    <li key={i} className="text-xs text-[#202938] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <span>{transit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 rounded bg-amber-50 border border-amber-200/60 text-[11px] text-amber-800">
                  <span className="font-semibold">Note:</span> Metro corridor is proposed/upcoming by urban authorities and not currently operational.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Bottom Banner with CTAs & Deep-Dive Link */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0B1B32] text-white border border-[#C5A46D]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A46D]">
              Your Exclusive Address Awaits
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">
              A Legacy of Luxury &amp; Exclusivity Reserved for 308 Families
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl font-light">
              Connect with Zentara Realty&apos;s senior residential advisory team for verified pricing sheets, available unit inventory, and structured consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleEnquireClick("Prime Residences General Consultation")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => handleEnquireClick("Request Project Details")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Request Project Details</span>
            </button>
          </div>
        </div>

        {/* Advisory Transparency Disclaimer */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <p className="text-[11px] text-gray-500 leading-relaxed">
            {data.statutoryDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
