import type { Metadata, Viewport } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#102B50",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zentararealty.property"),
  title: {
    default: "Zentara Realty | New Residential Projects in Gurgaon",
    template: "%s | Zentara Realty",
  },
  description:
    "Discover pre-launch and newly launched residential developments in Gurgaon with Zentara Realty. Explore new residential projects, luxury condominiums, and upcoming residential developments in Gurugram, Haryana.",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "https://zentararealty.property",
  },
  openGraph: {
    title: "Zentara Realty | New Residential Projects in Gurgaon",
    description:
      "Discover pre-launch and newly launched residential developments in Gurgaon with Zentara Realty. Explore new residential developments and opportunities in Gurugram.",
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
      "Discover pre-launch and newly launched residential developments in Gurgaon with Zentara Realty. Explore new residential developments and opportunities in Gurugram.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode v2 Default Configuration (Deny analytics by default) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#F7F8FA] text-[#202938] antialiased selection:bg-[#C5A46D]/20 selection:text-[#102B50]"
        suppressHydrationWarning
      >
        {/* Consent-controlled GA4 tag loader */}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
