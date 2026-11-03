"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Info,
} from "lucide-react";

interface FieldErrors {
  fullName?: string;
  mobile?: string;
  email?: string;
  message?: string;
  combinedConsent?: string;
}

interface TouchedFields {
  fullName?: boolean;
  mobile?: boolean;
  email?: boolean;
  message?: boolean;
  combinedConsent?: boolean;
}

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState("Pre-Launch Residential Projects");
  const [message, setMessage] = useState("");

  // Combined Consent State (Unchecked by default)
  const [combinedConsent, setCombinedConsent] = useState(false);

  // Anti-spam honeypot (bots fill this, humans never see it)
  const [honeypot, setHoneypot] = useState("");

  // Bot speed detection timestamp (deferred to client mount to allow static prerender)
  const [formStartTime, setFormStartTime] = useState<number>(0);

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  // Form Validation & Interaction States
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId: string;
    submittedAt: string;
    message: string;
  } | null>(null);

  // Validation functions for individual fields
  const validateSingleField = (field: keyof FieldErrors, value: unknown): string | undefined => {
    switch (field) {
      case "fullName": {
        const str = typeof value === "string" ? value.trim() : "";
        if (!str) return "Full Name is required.";
        if (str.length < 2) return "Full Name must be at least 2 characters.";
        if (str.length > 70) return "Full Name cannot exceed 70 characters.";
        const nameRegex = /^[a-zA-Z\s.'-]+$/;
        if (!nameRegex.test(str)) {
          return "Name can only contain letters, spaces, hyphens, and dots.";
        }
        return undefined;
      }

      case "mobile": {
        const str = typeof value === "string" ? value.replace(/[\s-]/g, "") : "";
        if (!str) return "Indian mobile number is required.";
        const indianMobileRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
        if (!indianMobileRegex.test(str)) {
          return "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
        }
        return undefined;
      }

      case "email": {
        const str = typeof value === "string" ? value.trim() : "";
        if (!str) return "Email address is required.";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(str)) {
          return "Please enter a valid email address (e.g. name@domain.com).";
        }
        return undefined;
      }

      case "message": {
        const str = typeof value === "string" ? value.trim() : "";
        if (!str) return "Please enter your requirements or message details.";
        if (str.length < 5) return "Message must be at least 5 characters.";
        if (str.length > 2000) return "Message cannot exceed 2000 characters.";
        return undefined;
      }

      case "combinedConsent": {
        if (!value) {
          return "Consent is required. Please check the agreement box to proceed.";
        }
        return undefined;
      }

      default:
        return undefined;
    }
  };

  // Validate entire form and return validation map
  const validateAll = (): FieldErrors => {
    return {
      fullName: validateSingleField("fullName", fullName),
      mobile: validateSingleField("mobile", mobile),
      email: validateSingleField("email", email),
      message: validateSingleField("message", message),
      combinedConsent: validateSingleField("combinedConsent", combinedConsent),
    };
  };

  const handleFieldBlur = (field: keyof FieldErrors, value: unknown) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateSingleField(field, value);
    setFieldErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleFieldChange = (field: keyof FieldErrors, value: unknown) => {
    if (touched[field]) {
      const error = validateSingleField(field, value);
      setFieldErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Prevent duplicate submission if already processing
    if (isSubmitting) return;

    // Run client-side validation across all fields
    const validationErrors = validateAll();
    const hasErrors = Object.values(validationErrors).some((err) => Boolean(err));

    // Mark all fields as touched to display inline errors
    setTouched({
      fullName: true,
      mobile: true,
      email: true,
      message: true,
      combinedConsent: true,
    });
    setFieldErrors(validationErrors);

    if (hasErrors) {
      setErrorMessage("Please resolve the highlighted errors before submitting.");
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
          honeypot,
          formStartTime,
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
        });

        // Reset form inputs & validation states on success
        setFullName("");
        setMobile("");
        setEmail("");
        setMessage("");
        setCombinedConsent(false);
        setFieldErrors({});
        setTouched({});
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
          <p className="text-base sm:lg text-[#55647A] leading-relaxed">
            Discuss upcoming and newly launched residential opportunities in Gurugram with an independent advisory consultant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl bg-white border border-[#E5E9F0] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#102B50] font-serif-heading">
                Direct Advisory Channels
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
                  </div>
                </a>

                {/* Office Location */}
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
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-emerald-900">
                        Enquiry Successfully Registered
                      </h4>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        {submissionSuccess.message}
                      </p>
                      <div className="p-3 bg-white/90 rounded border border-emerald-200 text-xs font-mono text-emerald-900 flex flex-wrap items-center justify-between gap-2">
                        <span>
                          Reference: <strong className="text-emerald-950">{submissionSuccess.referenceId}</strong>
                        </span>
                        <span className="text-[11px] text-emerald-700">
                          {new Date(submissionSuccess.submittedAt).toLocaleString("en-IN", {
                            timeZone: "Asia/Kolkata",
                            dateStyle: "medium",
                            timeStyle: "short",
                          })} IST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* General Error Notification Banner */}
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
                {/* Anti-spam honeypot (hidden from real users, traps bots) */}
                <div
                  className="hidden"
                  aria-hidden="true"
                  style={{ display: "none", position: "absolute", left: "-9999px" }}
                >
                  <label htmlFor="b_company_url">Leave this field blank</label>
                  <input
                    id="b_company_url"
                    type="text"
                    name="b_company_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* 2-Row Responsive Grid for First Four Fields (50% each on Desktop, 1-col on Mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Row 1, Col 1: Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      disabled={isSubmitting}
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        handleFieldChange("fullName", e.target.value);
                      }}
                      onBlur={() => handleFieldBlur("fullName", fullName)}
                      placeholder="e.g., Rajesh Sharma"
                      className={`w-full h-11 px-4 rounded-md text-sm text-[#202938] transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                        fieldErrors.fullName && touched.fullName
                          ? "bg-rose-50/20 border border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-400"
                          : "bg-[#F7F8FA] border border-[#E5E9F0] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]"
                      }`}
                    />
                    {fieldErrors.fullName && touched.fullName && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-500" />
                        <span>{fieldErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 1, Col 2: Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5"
                    >
                      Indian Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      disabled={isSubmitting}
                      required
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                        handleFieldChange("mobile", e.target.value);
                      }}
                      onBlur={() => handleFieldBlur("mobile", mobile)}
                      placeholder="+91 98765 43210"
                      className={`w-full h-11 px-4 rounded-md text-sm text-[#202938] transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                        fieldErrors.mobile && touched.mobile
                          ? "bg-rose-50/20 border border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-400"
                          : "bg-[#F7F8FA] border border-[#E5E9F0] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]"
                      }`}
                    />
                    {fieldErrors.mobile && touched.mobile && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-500" />
                        <span>{fieldErrors.mobile}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 2, Col 1: Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      disabled={isSubmitting}
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        handleFieldChange("email", e.target.value);
                      }}
                      onBlur={() => handleFieldBlur("email", email)}
                      placeholder="rajesh@example.com"
                      className={`w-full h-11 px-4 rounded-md text-sm text-[#202938] transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                        fieldErrors.email && touched.email
                          ? "bg-rose-50/20 border border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-400"
                          : "bg-[#F7F8FA] border border-[#E5E9F0] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]"
                      }`}
                    />
                    {fieldErrors.email && touched.email && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-500" />
                        <span>{fieldErrors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 2, Col 2: Area of Interest */}
                  <div>
                    <label
                      htmlFor="interestedIn"
                      className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5"
                    >
                      Area of Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      disabled={isSubmitting}
                      value={interestedIn}
                      onChange={(e) => setInterestedIn(e.target.value)}
                      className="w-full h-11 px-4 rounded-md bg-[#F7F8FA] border border-[#E5E9F0] text-sm text-[#202938] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <option value="Pre-Launch Residential Projects">Pre-Launch Residential Projects</option>
                      <option value="Newly Launched Residential Projects">Newly Launched Residential Projects</option>
                      <option value="Upcoming Projects Advisory">Upcoming Residential Projects Advisory</option>
                      <option value="General Enquiry">General Consultation Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Requirements / Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5"
                  >
                    Your Requirements / Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    disabled={isSubmitting}
                    required
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      handleFieldChange("message", e.target.value);
                    }}
                    onBlur={() => handleFieldBlur("message", message)}
                    placeholder="Preferred sector corridors (e.g. Golf Course Ext., Dwarka Exp., SPR), bedroom typology (3BHK/4BHK), or budget expectations..."
                    className={`w-full px-4 py-3 rounded-md text-sm text-[#202938] transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                      fieldErrors.message && touched.message
                        ? "bg-rose-50/20 border border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-400"
                        : "bg-[#F7F8FA] border border-[#E5E9F0] focus:bg-white focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]"
                    }`}
                  />
                  {fieldErrors.message && touched.message && (
                    <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-500" />
                      <span>{fieldErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* COMBINED CONSENT CHECKBOX (SINGLE UNCHECKED CHECKBOX) */}
                <div className="pt-4 border-t border-[#E5E9F0] space-y-3">
                  <div
                    className={`flex items-start gap-3 p-4 rounded-lg transition-colors ${
                      fieldErrors.combinedConsent && touched.combinedConsent
                        ? "bg-rose-50/30 border border-rose-400"
                        : "bg-[#F7F8FA] border border-[#E5E9F0] hover:border-[#C5A46D]/50"
                    }`}
                  >
                    <input
                      id="combinedConsent"
                      name="combinedConsent"
                      type="checkbox"
                      disabled={isSubmitting}
                      required
                      checked={combinedConsent}
                      onChange={(e) => {
                        setCombinedConsent(e.target.checked);
                        handleFieldChange("combinedConsent", e.target.checked);
                      }}
                      onBlur={() => handleFieldBlur("combinedConsent", combinedConsent)}
                      className="w-4 h-4 rounded text-[#102B50] focus:ring-[#C5A46D] mt-1 cursor-pointer accent-[#102B50] shrink-0 disabled:opacity-60"
                    />
                    <label htmlFor="combinedConsent" className="text-xs text-[#202938] leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-[#C5A46D] hover:underline underline-offset-2 font-semibold">
                        Privacy Policy
                      </Link>{" "}
                      and consent to receive enquiry-related updates and communications from Zentara Realty through WhatsApp and email.
                    </label>
                  </div>
                  {fieldErrors.combinedConsent && touched.combinedConsent && (
                    <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-500" />
                      <span>{fieldErrors.combinedConsent}</span>
                    </p>
                  )}

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

                {/* Submit Button with Loading State */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-md text-sm font-semibold uppercase tracking-wider text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#102B50]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0B1B32] border-t-transparent rounded-full animate-spin" />
                        <span>Processing Consultation Request...</span>
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
