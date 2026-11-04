import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Zentara Realty",
  description:
    "Privacy Policy for Zentara Realty detailing our personal data handling, consent management, and cookie practices in accordance with the Digital Personal Data Protection Act, 2023.",
  alternates: {
    canonical: "https://www.zentararealty.property/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#202938]">
      {/* Header */}
      <header className="bg-[#102B50] text-white py-6 border-b border-[#C5A46D]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-white.svg"
              alt="Zentara Realty Logo"
              width={200}
              height={38}
              className="h-8 md:h-9 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-200 hover:text-[#C5A46D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        {/* Page Title */}
        <div className="mb-10 pb-6 border-b border-[#E5E9F0]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102B50]/5 border border-[#102B50]/15 text-[#102B50] text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
            Data Protection &amp; Governance
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102B50] font-serif-heading tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#55647A]">
            Effective Date: November 3, 2026 | Version: DPDP-2023-v1.0
          </p>
        </div>

        {/* Legal Review Disclaimer */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-xs mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-semibold">Notice for Review:</strong> This privacy document has been drafted
            in alignment with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable rules to reflect
            Zentara Realty&apos;s primary residential advisory operations in Gurugram, Haryana. This document is flagged for
            independent legal review prior to formal commercial execution.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm text-[#55647A] leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              1. Introduction &amp; Data Fiduciary Details
            </h2>
            <p>
              Zentara Realty (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates as an independent residential real estate consultancy based in Gurugram, Haryana, India. We are committed to safeguarding the privacy and personal data of our website visitors, prospective homebuyers, and clients in compliance with the Digital Personal Data Protection Act, 2023 and associated data protection regulations of India.
            </p>
            <p>
              This Privacy Policy applies to personal data collected through our official website (<strong>https://zentararealty.property</strong>), direct consultation forms, telephone communications, and electronic messaging.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              2. Personal Data We Collect
            </h2>
            <p>
              We collect only the personal information strictly necessary to provide residential real estate advisory services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#202938]">
              <li><strong>Contact Identifiers:</strong> Full name, mobile telephone number, and email address.</li>
              <li><strong>Advisory Preferences:</strong> Corridors of interest (Golf Course Extension, Dwarka Expressway, SPR, New Gurgaon), typology preferences (e.g. 3 BHK, 4 BHK, Penthouses), and voluntary notes submitted in consultation forms.</li>
              <li><strong>Consent Records:</strong> Verifiable electronic audit trails of privacy agreement and optional marketing consent timestamps, IP address indicators, and user-agent details.</li>
              <li><strong>Technical &amp; Analytical Data:</strong> Non-personally identifiable telemetry such as browser type, general geographical region (city/state level), and anonymized browsing behavior (collected only after analytics consent).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              3. Purpose &amp; Lawful Grounds of Processing
            </h2>
            <p>
              We process personal data solely on lawful grounds under the DPDP Act, primarily based on your voluntary consent, for the following specific purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#202938]">
              <li>Responding directly to your consultation enquiry regarding pre-launch or newly launched residential projects.</li>
              <li>Sharing verified project documentation, master plans, and builder credentials requested by you.</li>
              <li>Scheduling property orientations and direct builder consultations upon your request.</li>
              <li>Sending periodic property updates via WhatsApp or Email <em>only if you have granted explicit, independent marketing consent</em>.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              4. Independent Marketing Consent &amp; Withdrawal of Consent
            </h2>
            <p>
              In strict accordance with Indian data privacy principles, promotional communication consents for WhatsApp and Email are completely optional, separate from privacy policy agreement, and unchecked by default on our website.
            </p>
            <p>
              <strong>Right to Withdraw Consent:</strong> You possess the absolute right to revoke or withdraw your marketing or communication consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
            </p>
            <p>
              To withdraw consent, simply reply &ldquo;STOP&rdquo; on WhatsApp, click unsubscribe in emails, or notify us at <strong>zentararealty@gmail.com</strong> with your registered mobile number. Requests are processed within 48 business hours.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              5. Cookie Practices &amp; Tracking Technologies
            </h2>
            <p>
              Our website employs structured cookies categorized into three tiers:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#202938]">
              <li><strong>Essential Cookies:</strong> Technically required for navigation security, session integrity, and remembering your consent preferences. These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Utilized via Google Analytics 4 with IP anonymization to evaluate aggregate engagement metrics. <em>These are never executed prior to your explicit consent.</em></li>
              <li><strong>Marketing Cookies:</strong> Employed to personalize advisory communications, requiring voluntary activation.</li>
            </ul>
            <p>
              You can adjust or revoke your cookie choices at any time using the <em>&ldquo;Cookie Preferences&rdquo;</em> button situated in the footer of our website.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              6. Data Retention &amp; Security Measures
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the consultative advisory purpose for which it was collected, or to satisfy applicable statutory, regulatory, or reporting requirements.
            </p>
            <p>
              We implement industry-standard technical and organizational security controls, including TLS 1.3 encryption in transit, strict access control, and periodic data sanitation protocols to guard against unauthorized access, loss, or disclosure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              7. Third-Party Sharing &amp; Developer Coordination
            </h2>
            <p>
              <strong>We do not sell, rent, or trade your personal data to any third party.</strong>
            </p>
            <p>
              Your personal information is shared with real estate developers and builders <em>only after receiving your express instruction</em> when coordinating a site inspection, formal Expression of Interest (EOI), or allotment proceeding.
            </p>
            <p>
              We may utilize vetted infrastructure service providers (e.g., cloud hosting, email dispatch) who act strictly as Data Processors bound by contractual confidentiality obligations.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              8. Rights of Data Principals (Your Rights)
            </h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023, you have the following enforceable rights:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#202938]">
              <li><strong>Right to Access Information:</strong> Request a summary of personal data being processed by us.</li>
              <li><strong>Right to Correction &amp; Erasure:</strong> Request correction of inaccurate information or erasure of data no longer required.</li>
              <li><strong>Right of Grievance Redressal:</strong> Avail of expeditious redressal regarding data handling concerns.</li>
              <li><strong>Right to Nominate:</strong> Nominate an individual to exercise rights on your behalf in accordance with statutory guidelines.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              9. Grievance Officer &amp; Official Contact Information
            </h2>
            <p>
              For privacy inquiries, rights requests, or grievances regarding our data practices, please contact our designated Data Protection &amp; Grievance Contact:
            </p>
            <div className="p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E9F0] space-y-2 text-xs">
              <div><strong>Designation:</strong> Grievance Redressal Officer, Zentara Realty</div>
              <div><strong>Operational Location:</strong> Gurugram, Haryana, India</div>
              <div><strong>Official Email:</strong> zentararealty@gmail.com</div>
              <div><strong>Telephone / WhatsApp:</strong> +91 7303437659</div>
              <div><strong>Website:</strong> https://zentararealty.property</div>
            </div>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-6 border-t border-[#E5E9F0] text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#102B50] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#183E70] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Zentara Realty Homepage
          </Link>
        </div>
      </main>

      {/* Footer Notice */}
      <footer className="bg-[#0B1B32] text-gray-400 py-6 text-center text-xs border-t border-white/10">
        <p>© 2026 Zentara Realty. All rights reserved. Gurugram, Haryana.</p>
      </footer>
    </div>
  );
}
