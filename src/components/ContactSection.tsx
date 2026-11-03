"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Info,
} from "lucide-react";

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState("Pre-Launch Residential Projects");
  const [message, setMessage] = useState("");

  // Combined Consent State (Unchecked by default)
  const [combinedConsent, setCombinedConsent] = useState(false);

  // Form Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId: string;
    submittedAt: string;
    message: string;
    backendIntegrated: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validations
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }

    const cleanPhone = mobile.replace(/[\s-]/g, "");
    const phoneRegex = /^(\+91[\s-]?)?[6789]\d{9}$|^\+?[1-9]\d{7,14}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      setErrorMessage(
        "Please provide a valid 10-digit mobile number or standard international phone number."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!combinedConsent) {
      setErrorMessage(
        "Consent is required. Please check the agreement box to proceed with your consultation request."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          mobile,
          email,
          interestedIn,
          message,
          combinedConsent,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.error || "Unable to submit enquiry. Please call us directly at +91 7303437659."
        );
      } else {
        setSubmissionSuccess({
          referenceId: data.referenceId,
          submittedAt: data.submittedAt,
          message: data.message,
          backendIntegrated: Boolean(data.backendIntegrated),
        });
        // Reset form inputs
        setFullName("");
        setMobile("");
        setEmail("");
        setMessage("");
        setCombinedConsent(false);
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please contact Zentara Realty directly at +91 7303437659 or zentararealty@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F8FA] border-b border-[#E5E9F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102B50]/5 border border-[#102B50]/15 text-[#102B50] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            Direct Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B50] font-serif-heading tracking-tight leading-tight mb-4">
            Connect With Zentara Realty
          </h2>
          <p className="text-base sm:text-lg text-[#55647A] leading-relaxed">
            Discuss upcoming and newly launched residential opportunities in Gurugram with an independent advisory consultant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl bg-white border border-[#E5E9F0] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#102B50] font-serif-heading">
                Direct Contact Information
              </h3>
              <p className="text-xs text-[#55647A] leading-relaxed">
                Reach our residential advisory team directly via telephone, WhatsApp, or official email for priority assistance.
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone Call */}
                <a
                  href="tel:+917303437659"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F8FA] hover:bg-[#102B50]/5 border border-[#E5E9F0] transition-colors group"
                >
                  <div className="p-2.5 rounded-md bg-[#102B50] text-[#C5A46D] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Telephone / Direct Call
                    </div>
                    <div className="text-sm font-bold text-[#102B50] group-hover:text-[#C5A46D] transition-colors">
                      +91 7303437659
                    </div>
                    <div className="text-[11px] text-[#55647A]">Available for advisory calls</div>
                  </div>
                </a>

                {/* WhatsApp Chat */}
                <a
                  href="https://wa.me/917303437659?text=Hello%20Zentara%20Realty,%20I%20would%20like%20to%20enquire%20about%20new%20residential%20projects%20in%20Gurgaon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F8FA] hover:bg-emerald-50 border border-[#E5E9F0] hover:border-emerald-300 transition-colors group"
                >
                  <div className="p-2.5 rounded-md bg-[#25D366] text-white shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Official WhatsApp
                    </div>
                    <div className="text-sm font-bold text-[#102B50] group-hover:text-emerald-700 transition-colors">
                      +91 7303437659
                    </div>
                    <div className="text-[11px] text-emerald-600 font-medium">
                      Instant chat &amp; project brochure sharing
                    </div>
                  </div>
                </a>

                {/* Email Address */}
                <a
                  href="mailto:zentararealty@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F8FA] hover:bg-[#102B50]/5 border border-[#E5E9F0] transition-colors group"
                >
                  <div className="p-2.5 rounded-md bg-[#102B50] text-[#C5A46D] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Official Email
                    </div>
                    <div className="text-sm font-bold text-[#102B50] group-hover:text-[#C5A46D] transition-colors break-all">
                      zentararealty@gmail.com
                    </div>
                    <div className="text-[11px] text-[#55647A]">Formal enquiries &amp; written communications</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E9F0]">
                  <div className="p-2.5 rounded-md bg-[#102B50] text-[#C5A46D] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Operational Location
                    </div>
                    <div className="text-sm font-bold text-[#102B50]">
                      Gurugram, Haryana, India
                    </div>
                    <div className="text-[11px] text-[#55647A]">
                      Primary Market: Gurgaon Metropolitan Region
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Hours & Protocol Notice */}
            <div className="p-5 rounded-lg bg-[#102B50] text-white border border-[#C5A46D]/30 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#C5A46D] font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                Advisory Protocol
              </div>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                Enquiries are reviewed directly by our residential advisory specialists. We ensure
                transparent consultation, verified builder documentation, and no aggressive promotional outreach.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-white border border-[#E5E9F0] shadow-sm">
              <h3 className="text-2xl font-bold text-[#102B50] font-serif-heading mb-2">
                Request a Residential Consultation
              </h3>
              <p className="text-xs text-[#55647A] leading-relaxed mb-6">
                Please complete the form below to connect with our senior advisory team.
              </p>

              {/* Success Notification Banner */}
              {submissionSuccess && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-8 p-6 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-950 animate-fade-in"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-emerald-900 mb-1">
                        Enquiry Successfully Registered
                      </h4>
                      <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                        {submissionSuccess.message}
                      </p>
                      <div className="p-3 bg-white/80 rounded border border-emerald-200 text-xs font-mono text-emerald-900">
                        Reference Number: <span className="font-bold">{submissionSuccess.referenceId}</span>
                      </div>
                      <p className="text-[11px] text-emerald-700 mt-2">
                        Timestamp: 2026-11-03 22:45 IST
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Notification Banner */}
              {errorMessage && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start gap-3 animate-fade-in"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="leading-relaxed font-medium">{errorMessage}</div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Rajesh Sharma"
                    className="w-full px-4 py-3 rounded-md bg-[#F7F8FA] border border-[#E5E9F0] text-sm text-[#202938] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
                  />
                </div>

                {/* Mobile & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mobile" className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-md bg-[#F7F8FA] border border-[#E5E9F0] text-sm text-[#202938] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rajesh@example.com"
                      className="w-full px-4 py-3 rounded-md bg-[#F7F8FA] border border-[#E5E9F0] text-sm text-[#202938] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
                    />
                  </div>
                </div>

                {/* Interested In */}
                <div>
                  <label htmlFor="interestedIn" className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
                    Area of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="interestedIn"
                    value={interestedIn}
                    onChange={(e) => setInterestedIn(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-[#F7F8FA] border border-[#E5E9F0] text-sm text-[#202938] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
                  >
                    <option value="Pre-Launch Residential Projects">Pre-Launch Residential Projects</option>
                    <option value="Newly Launched Residential Projects">Newly Launched Residential Projects</option>
                    <option value="Upcoming Projects Advisory">Upcoming Residential Projects Advisory</option>
                    <option value="General Enquiry">General Consultation Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
                    Your Requirements / Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Preferred sector corridors (e.g. Golf Course Ext., Dwarka Exp., SPR), preferred bedroom typology, or target timelines..."
                    className="w-full px-4 py-3 rounded-md bg-[#F7F8FA] border border-[#E5E9F0] text-sm text-[#202938] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
                  />
                </div>

                {/* COMBINED CONSENT CHECKBOX (SINGLE UNCHECKED CHECKBOX) */}
                <div className="pt-4 border-t border-[#E5E9F0] space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E9F0] hover:border-[#C5A46D]/50 transition-colors">
                    <input
                      id="combinedConsent"
                      type="checkbox"
                      required
                      checked={combinedConsent}
                      onChange={(e) => setCombinedConsent(e.target.checked)}
                      className="w-4 h-4 rounded text-[#102B50] focus:ring-[#C5A46D] mt-1 cursor-pointer accent-[#102B50] shrink-0"
                    />
                    <label htmlFor="combinedConsent" className="text-xs text-[#202938] leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-[#C5A46D] hover:underline underline-offset-2 font-semibold">
                        Privacy Policy
                      </Link>{" "}
                      and consent to receive enquiry-related updates and communications from Zentara Realty through WhatsApp and email.
                    </label>
                  </div>

                  {/* Combined Consent Explanation and Withdrawal Notice */}
                  <div className="p-3.5 rounded bg-white border border-[#E5E9F0] text-[11px] text-[#55647A] leading-relaxed space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#102B50] font-semibold text-xs">
                      <Info className="w-3.5 h-3.5 text-[#C5A46D]" />
                      Combined Consent &amp; Withdrawal Details
                    </div>
                    <p>
                      This combined consent authorizes Zentara Realty to process your personal data and send you relevant residential updates via WhatsApp and Email. You may withdraw your consent at any time without penalty by replying &ldquo;STOP&rdquo; on WhatsApp or emailing <strong>zentararealty@gmail.com</strong>.
                    </p>
                    <p className="text-[10px] text-amber-800 bg-amber-50 p-1.5 rounded border border-amber-200">
                      <strong>Legal Notice:</strong> Review this combined consent approach for applicable privacy and marketing laws (including Digital Personal Data Protection Act, 2023) prior to commercial production.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-md text-sm font-semibold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#102B50]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0B1B32] border-t-transparent rounded-full animate-spin" />
                        <span>Processing Registration...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Residential Consultation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
