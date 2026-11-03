import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PreLaunchSection from "@/components/PreLaunchSection";
import NewLaunchesSection from "@/components/NewLaunchesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Zentara Realty | New Residential Projects in Gurgaon",
  description:
    "Discover pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Explore new residential developments and opportunities in Gurugram.",
  keywords: [
    "New Residential Projects in Gurgaon",
    "Pre Launch Projects in Gurgaon",
    "New Launch Residential Projects in Gurgaon",
    "Upcoming Residential Projects in Gurgaon",
    "Residential Property in Gurgaon",
    "New Residential Developments in Gurugram",
    "Luxury Condominiums Gurgaon",
    "Golf Course Extension Road Projects",
    "Dwarka Expressway Residential Projects",
    "Southern Peripheral Road Residences",
    "New Gurgaon Residential Projects",
  ],
  authors: [{ name: "Zentara Realty", url: "https://zentararealty.property" }],
  creator: "Zentara Realty",
  publisher: "Zentara Realty",
  metadataBase: new URL("https://zentararealty.property"),
  alternates: {
    canonical: "https://zentararealty.property",
  },
  openGraph: {
    title: "Zentara Realty | New Residential Projects in Gurgaon",
    description:
      "Discover pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Explore new residential developments and opportunities in Gurugram.",
    url: "https://zentararealty.property",
    siteName: "Zentara Realty",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zentara Realty — Residential Real Estate Consultancy, Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentara Realty | New Residential Projects in Gurgaon",
    description:
      "Discover pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Explore new residential developments and opportunities in Gurugram.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_TOKEN || undefined,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data (JSON-LD) for SEO & AI Indexing */}
      <StructuredData />

      {/* Fixed Header & Navigation */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main id="main-content" className="flex-1">
        <Hero />
        <AboutSection />
        <PreLaunchSection />
        <NewLaunchesSection />
        <WhyChooseSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* DPDP Act 2023 Compliant Cookie Consent & Preference Modal */}
      <CookieConsent />
    </>
  );
}
