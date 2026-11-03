import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Zentara Realty",
  description:
    "Terms and Conditions governing advisory services, content usage, and residential real estate consultation with Zentara Realty, Gurugram, Haryana.",
  alternates: {
    canonical: "https://zentararealty.property/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
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
            <FileText className="w-3.5 h-3.5 text-[#C5A46D]" />
            Statutory &amp; Advisory Terms
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102B50] font-serif-heading tracking-tight mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-[#55647A]">
            Effective Date: November 3, 2026 | Corporate Version: TC-2026-v1.0
          </p>
        </div>

        {/* Legal Review Disclaimer */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-xs mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-semibold">Notice for Review:</strong> These terms govern exploratory and consultative interactions with Zentara Realty. Flagged for legal review prior to formal commercial execution.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm text-[#55647A] leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              1. Nature of Advisory Services
            </h2>
            <p>
              Zentara Realty operates as an independent residential real estate consultancy based in Gurugram, Haryana. Our services are strictly informative, exploratory, and consultative in nature.
            </p>
            <p>
              Zentara Realty focuses exclusively on primary residential real estate developments, including pre-launch opportunities, upcoming developments, and newly launched residential communities by third-party builders and developers in Gurgaon.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              2. Strict Business Exclusions
            </h2>
            <p>
              Users and prospective clients explicitly acknowledge that Zentara Realty does NOT engage in:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#202938]">
              <li>Resale property brokerage or second-hand residential houses</li>
              <li>Commercial leasing, retail shops, or office real estate</li>
              <li>Rental listings or tenant representation</li>
              <li>Financial brokerage or loan underwriting</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              3. Third-Party Developer Content &amp; RERA Disclosures
            </h2>
            <p>
              All property names, trademarks, conceptual renderings, elevation plans, unit configurations, and amenities shown on this website are curated for exploratory and comparative analysis. They remain the intellectual property of their respective developers and builders.
            </p>
            <p>
              <strong>Statutory RERA Verification:</strong> Under the Real Estate (Regulation and Development) Act, 2016 (RERA), buyers must verify project registration numbers, sanctioned layout plans, and statutory disclosures on the official Haryana Real Estate Regulatory Authority (HARERA) portal prior to executing any binding agreement or making payments.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              4. No Financial, Investment or Legal Warranty
            </h2>
            <p>
              Information provided on this website or in consultations does not constitute financial, investment, or legal advice. Real estate investments involve market risks, regulatory conditions, and construction cycles. Zentara Realty does not guarantee investment returns, capital appreciation, rental yield, or project completion dates.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              5. Intellectual Property
            </h2>
            <p>
              The compilation, design, text, logos, and digital branding of Zentara Realty are protected by intellectual property laws. Unauthorized reproduction, scraping, or distribution of this content is prohibited.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Gurugram, Haryana.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E9F0] shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-[#102B50] font-serif-heading">
              7. Contact &amp; Queries
            </h2>
            <p>
              For any clarification regarding these terms, please contact:
            </p>
            <div className="p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E9F0] text-xs space-y-1">
              <div><strong>Zentara Realty</strong></div>
              <div>Office: Gurugram, Haryana, India</div>
              <div>Email: zentararealty@gmail.com</div>
              <div>Phone: +91 7303437659</div>
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
