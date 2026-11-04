"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Cookie } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCookies = () => {
    if (typeof window !== "undefined" && window.openCookiePreferences) {
      window.openCookiePreferences();
    }
  };

  return (
    <footer className="bg-[#0B1B32] text-white border-t border-[#C5A46D]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="Zentara Realty — Official Logo"
                width={190}
                height={129}
                className="h-11 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="font-serif-heading text-lg text-[#C5A46D] italic">
              &ldquo;Discover What&apos;s Next in Residential Living.&rdquo;
            </p>
            <p className="text-xs text-gray-300 leading-relaxed max-w-md">
              A premier residential real estate consultancy headquartered in Gurugram, Haryana.
              Specializing exclusively in pre-launch, upcoming, and newly launched primary residential projects
              across Gurgaon&apos;s leading development corridors.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <div>
                <span className="text-[#C5A46D] font-medium">Domain:</span> https://www.zentararealty.property
              </div>
              <div>
                <span className="text-[#C5A46D] font-medium">Headquarters:</span> Gurugram, Haryana, India
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Explore Sections
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#about" className="hover:text-[#C5A46D] transition-colors">
                  About Zentara Realty
                </a>
              </li>
              <li>
                <a href="#pre-launch" className="hover:text-[#C5A46D] transition-colors">
                  Pre-Launch Residential Projects
                </a>
              </li>
              <li>
                <a href="#new-launches" className="hover:text-[#C5A46D] transition-colors">
                  Newly Launched Developments
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#C5A46D] transition-colors">
                  Why Choose Zentara
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C5A46D] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A46D] transition-colors">
                  Contact &amp; Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Contact &amp; Advisory Desk
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <a href="tel:+917303437659" className="hover:text-white transition-colors">
                  +91 7303437659
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/917303437659?text=Hello%20Zentara%20Realty,%20I%20would%20like%20to%20enquire%20about%20new%20residential%20projects%20in%20Gurgaon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-400"
                >
                  WhatsApp: +91 7303437659
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <a href="mailto:zentararealty@gmail.com" className="hover:text-white transition-colors break-all">
                  zentararealty@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>

            <div className="pt-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Governance &amp; Privacy
              </h5>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300">
                <Link href="/privacy-policy" className="hover:text-[#C5A46D] transition-colors underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms-and-conditions" className="hover:text-[#C5A46D] transition-colors underline-offset-2 hover:underline">
                  Terms &amp; Conditions
                </Link>
                <span>•</span>
                <button
                  type="button"
                  onClick={openCookies}
                  className="hover:text-[#C5A46D] transition-colors flex items-center gap-1 underline-offset-2 hover:underline cursor-pointer"
                >
                  <Cookie className="w-3.5 h-3.5 text-[#C5A46D]" />
                  Cookie Preferences
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STATUTORY ADVISORY DISCLAIMER */}
        <div className="py-8 text-[11px] text-gray-400 leading-relaxed border-b border-white/10 space-y-2">
          <p>
            <strong className="text-gray-200">Statutory Advisory Disclaimer:</strong> Zentara Realty is an independent residential real estate consultancy operating in Gurugram, Haryana, India. Zentara Realty exclusively advises on new launch and pre-launch residential developments and strictly does not engage in resale properties, commercial spaces, rental leases, or independent used houses.
          </p>
          <p>
            All property project names, trademarks, conceptual renderings, master plans, and developer logos displayed on this website are the intellectual property of their respective statutory owners and developers. Information presented is curated for informational and exploratory advisory purposes only. Zentara Realty advises all prospective purchasers to independently inspect and verify project RERA registration certificates, sanctioned architectural plans, and statutory disclosures on the official Haryana Real Estate Regulatory Authority (HARERA) portal prior to executing any financial transaction.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Zentara Realty. All rights reserved. Registered in Gurugram, Haryana.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#C5A46D] transition-colors focus:ring-1 focus:ring-[#C5A46D] rounded px-2 py-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
