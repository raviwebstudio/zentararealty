import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building,
  Building2,
  MapPin,
  Check,
  ArrowRight,
  Shield,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  FileText,
  Calendar,
  Layers,
  Wind,
  Lock,
  Car,
  Utensils,
  FolderHeart,
  SquareStack,
  Compass,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { PRIME_RESIDENCES_DATA } from "@/data/primeResidences";

export const metadata: Metadata = {
  title: "Prime Residences Sector 65 Gurugram | 2 & 3 BHK VRV Homes | Zentara Realty",
  description:
    "Explore Prime Residences in Sector 65, Gurugram by PRIME Developments. Boutique low-rise 2 & 3 BHK VRV homes with private basement, 40,000 sq.ft. Club Prime, and B+S+4 architecture. Enquire with Zentara Realty.",
  keywords: [
    "Prime Residences Sector 65 Gurgaon",
    "Prime Residences Gurugram",
    "PRIME Developments Sector 65",
    "2 BHK VRV Homes Gurgaon",
    "3 BHK with Private Basement Gurgaon",
    "Low Rise Apartments Sector 65 Gurugram",
    "Club Prime Sector 65",
    "Golf Course Extension Road Luxury Homes",
    "Zentara Realty Prime Residences",
  ],
  alternates: {
    canonical: "https://www.zentararealty.property/prime-residences",
  },
  openGraph: {
    title: "Prime Residences Sector 65 Gurugram | 2 & 3 BHK VRV Homes | Zentara Realty",
    description:
      "Boutique low-rise gated community in Sector 65, Gurugram. 2 & 3 BHK VRV homes with air-conditioned private basement, 40,000 sq.ft. Club Prime, and B+S+4 architecture.",
    url: "https://www.zentararealty.property/prime-residences",
    siteName: "Zentara Realty",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentararealty.property/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prime Residences Sector 65 Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Residences Sector 65 Gurugram | Zentara Realty",
    description:
      "Boutique low-rise 2 & 3 BHK VRV homes with private air-conditioned basement and 40,000 sq.ft. Club Prime in Sector 65, Gurugram.",
    images: ["https://www.zentararealty.property/og-image.png"],
  },
};

export default function PrimeResidencesPage() {
  const data = PRIME_RESIDENCES_DATA;

  // JSON-LD Schema markup for RealEstateListing / Place
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.zentararealty.property",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Prime Residences",
            "item": "https://www.zentararealty.property/prime-residences",
          },
        ],
      },
      {
        "@type": "ApartmentComplex",
        "name": data.projectName,
        "description": data.overviewSummary,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 65",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "addressCountry": "IN",
        },
        "numberOfAccommodationUnits": data.totalResidences,
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "40,000 Sq.Ft. Clubhouse (Club Prime)", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "VRV Air Conditioning with PM 2.5 Filters", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Private Air-Conditioned Basement", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Swimming Pool & Deck", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "25-Seater Luxury Mini Theatre", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "4-Tier Security System", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "100% Power Backup", "value": true },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#202938]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* 1. Breadcrumb Bar */}
        <div className="bg-[#0B1B32] text-gray-300 border-b border-[#C5A46D]/20 py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
            <Link href="/" className="hover:text-[#C5A46D] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#C5A46D] font-medium">Prime Residences (Sector 65, Gurugram)</span>
          </div>
        </div>

        {/* 2. Project Hero Dossier */}
        <section className="relative py-16 sm:py-20 bg-[#0B1B32] text-white overflow-hidden">
          <div className="absolute inset-0 bg-architectural-grid-dark opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#102B50]/60 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102B50] border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Boutique Low-Rise Residential Community</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-heading tracking-tight leading-tight">
                  {data.projectName}
                </h1>

                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-[#C5A46D] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {data.location.sector}, {data.location.city}
                  </span>
                  <span>•</span>
                  <span>Developer: {data.developer}</span>
                </div>

                <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl">
                  {data.overviewSummary}
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="p-3.5 rounded-lg bg-[#102B50]/60 border border-white/10">
                    <div className="text-gray-400 uppercase text-[10px] font-bold">Land Extent</div>
                    <div className="text-sm font-bold text-white font-serif-heading mt-0.5">{data.landArea}</div>
                    <div className="text-[10px] text-gray-400">Low-Density Enclave</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#102B50]/60 border border-white/10">
                    <div className="text-gray-400 uppercase text-[10px] font-bold">Residences</div>
                    <div className="text-sm font-bold text-white font-serif-heading mt-0.5">{data.totalResidences} Total</div>
                    <div className="text-[10px] text-gray-400">Exclusive 308 Families</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#102B50]/60 border border-white/10">
                    <div className="text-gray-400 uppercase text-[10px] font-bold">Architecture</div>
                    <div className="text-sm font-bold text-white font-serif-heading mt-0.5">{data.structure}</div>
                    <div className="text-[10px] text-gray-400">Basement + Stilt + 4</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#102B50]/60 border border-white/10">
                    <div className="text-gray-400 uppercase text-[10px] font-bold">Possession</div>
                    <div className="text-sm font-bold text-[#C5A46D] font-serif-heading mt-0.5">{data.possession}</div>
                    <div className="text-[10px] text-gray-400">CLP (25:25:50)</div>
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#enquiry-form"
                    className="px-8 py-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] transition-all shadow-lg flex items-center gap-2"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#investment-configurations"
                    className="px-6 py-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-[#C5A46D]" />
                    <span>View Pricing &amp; Plans</span>
                  </a>
                  <a
                    href="https://wa.me/917303437659?text=Hello%20Zentara%20Realty,%20I%20would%20like%20to%20request%20project%20details%20for%20Prime%20Residences%20Sector%2065."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/40 transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Advisory</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Key Summary Card */}
              <div className="lg:col-span-4 bg-[#102B50]/80 backdrop-blur-md rounded-2xl border border-[#C5A46D]/40 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
                    Project Snapshot
                  </span>
                  <span className="text-[11px] text-gray-300 bg-white/10 px-2.5 py-0.5 rounded">
                    End of 2027
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Configurations:</span>
                    <span className="font-semibold text-white">2 &amp; 3 BHK VRV Homes</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Starting Price*:</span>
                    <span className="font-semibold text-[#C5A46D]">₹2.42 Cr* (2 BHK + Bsmt)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">3 BHK Price*:</span>
                    <span className="font-semibold text-[#C5A46D]">₹3.30 Cr* (3 BHK + Bsmt)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Booking Amount:</span>
                    <span className="font-semibold text-emerald-400">{data.bookingAmount}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Payment Plan:</span>
                    <span className="font-semibold text-white">{data.paymentPlan}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Club Prime:</span>
                    <span className="font-semibold text-white">40,000 Sq.Ft. Luxury Club</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-400">Car Parking:</span>
                    <span className="font-semibold text-white">1 Covered Park / Unit</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0B1B32] border border-[#C5A46D]/20 text-[11px] text-gray-300 leading-relaxed">
                  <span className="font-semibold text-[#C5A46D]">Price Terms:</span> {data.priceDisclaimer}
                </div>

                <a
                  href="#enquiry-form"
                  className="w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider text-center text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] transition-all block shadow"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Project Highlights Section */}
        <section className="py-20 bg-white border-b border-[#E5E9F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
                Where Exclusivity Meets Grandeur
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102B50] font-serif-heading mt-2">
                Project Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projectHighlights.map((highlight, index) => {
                const [title, desc] = highlight.split("—");
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] hover:border-[#C5A46D]/60 transition-all hover:shadow-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#102B50] text-[#C5A46D] flex items-center justify-center text-xs font-bold mb-4 font-mono">
                      0{index + 1}
                    </div>
                    <h3 className="text-base font-bold text-[#102B50] font-serif-heading mb-2">
                      {title?.trim()}
                    </h3>
                    <p className="text-xs text-[#55647A] leading-relaxed">
                      {desc?.trim()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Configurations & Investment Details */}
        <section id="investment-configurations" className="py-20 bg-[#F7F8FA] border-b border-[#E5E9F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
                Spacious Low-Rise Living
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102B50] font-serif-heading mt-2">
                Configurations &amp; Pricing
              </h2>
              <p className="text-xs sm:text-sm text-[#55647A] mt-2">
                Every residence at PRIME RESIDENCES includes an exclusive private air-conditioned basement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {data.configurations.map((config) => (
                <div
                  key={config.id}
                  className="bg-white rounded-2xl border-2 border-[#E5E9F0] hover:border-[#C5A46D] transition-all p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#102B50] text-[#C5A46D]">
                        {config.typology}
                      </span>
                      <span className="text-xs text-gray-500 font-semibold">
                        B+S+4 Structure
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#102B50] font-serif-heading mb-2">
                      {config.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#55647A] leading-relaxed mb-6 font-light">
                      {config.description}
                    </p>

                    {/* Commercial Breakdown */}
                    <div className="p-5 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] space-y-3 mb-6">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <span className="text-xs text-gray-500">Total Super Area:</span>
                        <span className="text-lg font-bold text-[#102B50] font-serif-heading">{config.totalArea}</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <span className="text-xs text-gray-500">Private Basement:</span>
                        <span className="text-sm font-semibold text-[#102B50]">{config.privateBasementArea} (Air-Conditioned)</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <span className="text-xs text-gray-500">Indicative Price*:</span>
                        <span className="text-xl font-bold text-[#C5A46D] font-serif-heading">{config.priceStarting}</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <span className="text-xs text-gray-500">Booking Amount:</span>
                        <span className="text-sm font-semibold text-emerald-800">{config.bookingAmount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Payment Plan:</span>
                        <span className="text-xs font-semibold text-[#102B50]">{config.paymentPlan}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Included Unit Specifications
                      </div>
                      {config.highlights.map((feat, i) => (
                        <div key={i} className="text-xs text-[#202938] flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E9F0] flex flex-col sm:flex-row gap-3">
                    <a
                      href="#enquiry-form"
                      className="flex-1 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-center text-white bg-[#102B50] hover:bg-[#153866] transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                    </a>
                    <a
                      href="#enquiry-form"
                      className="py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-center text-[#102B50] bg-white border border-[#E5E9F0] hover:border-[#C5A46D] transition-all"
                    >
                      Request Project Details
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E5E9F0] text-center max-w-3xl mx-auto text-xs text-[#55647A]">
              <p className="leading-relaxed">
                <span className="font-semibold text-[#102B50]">Pricing Note:</span> {data.priceDisclaimer} Booking amount is ₹10 Lakhs. Payment schedule follows a Construction-Linked Plan (25:25:50).
              </p>
            </div>
          </div>
        </section>

        {/* 5. Luxury Specifications Section */}
        <section className="py-20 bg-white border-b border-[#E5E9F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
                Thoughtful Design, Timeless Elegance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102B50] font-serif-heading mt-2">
                Luxury Specifications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {data.specifications.map((spec, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0] hover:border-[#C5A46D] transition-all"
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#C5A46D] mb-1">
                    {spec.title}
                  </div>
                  <h3 className="text-base font-bold text-[#102B50] font-serif-heading mb-2">
                    {spec.spec}
                  </h3>
                  <p className="text-xs text-[#55647A] leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Club Prime Amenities Section */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#E5E9F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
                Exclusively for 308 Families
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102B50] font-serif-heading mt-2">
                Club Prime — 40,000 Sq.Ft. Facility
              </h2>
              <p className="text-xs sm:text-sm text-[#55647A] mt-2">
                {data.clubPrime.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.clubPrime.categories.map((cat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-[#E5E9F0] p-6 hover:border-[#C5A46D]/60 transition-all shadow-sm"
                >
                  <h3 className="text-base font-bold text-[#102B50] font-serif-heading pb-3 mb-4 border-b border-[#E5E9F0] flex items-center justify-between">
                    <span>{cat.category}</span>
                    <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#202938] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Sector 65 Location Advantages */}
        <section className="py-20 bg-white border-b border-[#E5E9F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
                Growth Corridor of Gurugram
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102B50] font-serif-heading mt-2">
                Location Advantages — Sector 65
              </h2>
              <p className="text-xs sm:text-sm text-[#55647A] mt-2">
                {data.locationAdvantages.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B50] mb-4 pb-2 border-b border-[#E5E9F0]">
                  <Building2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>Elite Neighbourhood</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Surrounded by iconic landmarks:
                </p>
                <ul className="space-y-2">
                  {data.locationAdvantages.landmarks.map((landmark, i) => (
                    <li key={i} className="text-xs font-semibold text-[#102B50] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                      <span>{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B50] mb-4 pb-2 border-b border-[#E5E9F0]">
                  <Compass className="w-4 h-4 text-[#C5A46D]" />
                  <span>Effortless Connectivity</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Minutes from key arterial links:
                </p>
                <ul className="space-y-2">
                  {data.locationAdvantages.connectivity.map((conn, i) => (
                    <li key={i} className="text-xs text-[#202938] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <span>{conn}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E5E9F0]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B50] mb-4 pb-2 border-b border-[#E5E9F0]">
                  <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  <span>Future Transit</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Infrastructure appreciation:
                </p>
                <ul className="space-y-2">
                  {data.locationAdvantages.upcomingTransit.map((tr, i) => (
                    <li key={i} className="text-xs text-[#202938] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-800">
                  <span className="font-semibold">Note:</span> Metro corridor is upcoming/proposed and not operational.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Dedicated Enquiry Section */}
        <section id="enquiry-form" className="py-20 bg-[#0B1B32] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Direct Advisory Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading mt-2 mb-4">
              Enquire About Prime Residences
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Connect with Zentara Realty for verified floor layouts, current allocation inventory, and a private briefing on Prime Residences in Sector 65, Gurugram.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
              <div className="p-4 rounded-xl bg-[#102B50]/80 border border-white/10 text-center">
                <Phone className="w-5 h-5 text-[#C5A46D] mx-auto mb-2" />
                <div className="text-[11px] text-gray-400 uppercase font-bold">Call Senior Advisory</div>
                <a href="tel:+917303437659" className="text-sm font-semibold text-white hover:text-[#C5A46D]">
                  +91 7303437659
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#102B50]/80 border border-white/10 text-center">
                <MessageSquare className="w-5 h-5 text-[#25D366] mx-auto mb-2" />
                <div className="text-[11px] text-gray-400 uppercase font-bold">Instant WhatsApp</div>
                <a
                  href="https://wa.me/917303437659?text=Hello%20Zentara%20Realty,%20I%20would%20like%20to%20enquire%20about%20Prime%20Residences%20Sector%2065."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-[#25D366]"
                >
                  Chat with Advisory
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#102B50]/80 border border-white/10 text-center">
                <Mail className="w-5 h-5 text-[#C5A46D] mx-auto mb-2" />
                <div className="text-[11px] text-gray-400 uppercase font-bold">Official Email</div>
                <a href="mailto:zentararealty@gmail.com" className="text-sm font-semibold text-white hover:text-[#C5A46D]">
                  zentararealty@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#102B50] border border-[#C5A46D]/30 text-left">
              <h3 className="text-base font-bold text-white font-serif-heading mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C5A46D]" />
                <span>Request Project Details &amp; Brochure</span>
              </h3>
              <p className="text-xs text-gray-300 mb-6">
                Fill the structured consultation request on our main contact desk or click below to submit your preferred configuration directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="py-3 px-6 rounded-md text-xs font-bold uppercase tracking-wider text-center text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] transition-all flex items-center justify-center gap-2"
                >
                  <span>Open Main Consultation Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="tel:+917303437659"
                  className="py-3 px-6 rounded-md text-xs font-bold uppercase tracking-wider text-center text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all"
                >
                  Schedule a Consultation Call
                </a>
              </div>
            </div>

            {/* Statutory Disclaimer */}
            <div className="mt-10 text-center text-[11px] text-gray-400 leading-relaxed border-t border-white/10 pt-6">
              <p>{data.statutoryDisclaimer}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
