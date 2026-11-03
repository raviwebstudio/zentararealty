"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { FAQS } from "@/data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#F7F8FA] border-b border-[#E5E9F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102B50]/5 border border-[#102B50]/15 text-[#102B50] text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B50] font-serif-heading tracking-tight leading-tight mb-4">
            Answers to Essential Residential Real Estate Inquiries
          </h2>
          <p className="text-base sm:text-lg text-[#55647A] leading-relaxed">
            Direct, factual insights regarding new residential developments, pre-launch opportunities, and advisory protocols in Gurugram, Haryana.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#C5A46D]/60 shadow-md"
                    : "bg-white border-[#E5E9F0] hover:border-[#C5A46D]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102B50]"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A46D]">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#102B50] font-serif-heading leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? "bg-[#102B50] text-[#C5A46D] rotate-180"
                        : "bg-[#F7F8FA] text-[#102B50]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#55647A] leading-relaxed border-t border-[#F0F2F5] animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Help Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#102B50] text-white border border-[#C5A46D]/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#0B1B32] text-[#C5A46D] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-serif-heading">
                Have specific questions about a Gurgaon residential project?
              </div>
              <div className="text-xs text-gray-300">
                Connect directly with our senior advisory desk for personalized market intelligence.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] transition-colors shrink-0 shadow"
          >
            Request Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
