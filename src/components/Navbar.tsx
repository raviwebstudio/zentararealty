"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Pre-Launch", href: "#pre-launch" },
    { name: "New Launches", href: "#new-launches" },
    { name: "Why Zentara", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300">
      {/* 1. Top Informational Bar */}
      <div className="bg-[#0B1B32] text-gray-300 text-xs border-b border-[#C5A46D]/20 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-[#C5A46D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-pulse" />
              Gurugram Primary Residential Advisory
            </span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-gray-300">
              <MapPin className="w-3 h-3 text-[#C5A46D]" />
              Gurugram, Haryana, India
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a
              href="mailto:zentararealty@gmail.com"
              aria-label="Send an email enquiry to Zentara Realty at zentararealty@gmail.com"
              className="hover:text-[#C5A46D] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-[#C5A46D]" aria-hidden="true" />
              <span className="hidden xs:inline">zentararealty@gmail.com</span>
            </a>
            <a
              href="tel:+917303437659"
              className="hover:text-[#C5A46D] transition-colors font-medium flex items-center gap-1.5 text-white"
            >
              <Phone className="w-3 h-3 text-[#C5A46D]" />
              +91 7303437659
            </a>
            <a
              href="https://wa.me/917303437659?text=Hello%20Zentara%20Realty,%20I%20would%20like%20to%20enquire%20about%20new%20residential%20projects%20in%20Gurgaon."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="text-[#25D366] hover:text-[#2fe671] transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 px-4 sm:px-6 ${scrolled
          ? "bg-[#102B50]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C5A46D]/20"
          : "bg-[#102B50]/90 backdrop-blur-sm py-4 border-b border-white/10"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:ring-1 focus:ring-[#C5A46D] rounded">
            <Image
              src="/logo-white.png"
              alt="Zentara Realty — Official Logo"
              width={160}
              height={109}
              priority
              className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium tracking-wide text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#C5A46D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A46D] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1.5 focus:ring-2 focus:ring-white"
            >
              Enquire Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="sm:hidden px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88]"
            >
              Enquire
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-white rounded-lg focus:ring-2 focus:ring-[#C5A46D]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-white/10 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#C5A46D] hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="https://wa.me/917303437659?text=Hello%20Zentara%20Realty,%20I%20would%20like%20to%20enquire%20about%20new%20residential%20projects%20in%20Gurgaon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded bg-[#C5A46D] text-[#0B1B32] text-xs font-semibold uppercase tracking-wider text-center shadow-md"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

