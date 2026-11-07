import type { Metadata, Viewport } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#102B50",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zentararealty.property"),
  title: {
    default: "Zentara Realty | New & Upcoming Residential Projects in Gurgaon",
    template: "%s | Zentara Realty",
  },
  description:
    "Explore pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Discover new developments and enquire about residential opportunities.",
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
  authors: [{ name: "Zentara Realty", url: "https://www.zentararealty.property" }],
  creator: "Zentara Realty",
  publisher: "Zentara Realty",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.zentararealty.property",
  },
  openGraph: {
    title: "Zentara Realty | New & Upcoming Residential Projects in Gurgaon",
    description:
      "Explore pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Discover new developments and enquire about residential opportunities.",
    url: "https://www.zentararealty.property",
    siteName: "Zentara Realty",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentararealty.property/og-image.png",
        secureUrl: "https://www.zentararealty.property/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zentara Realty — Official Branding & New Residential Projects in Gurgaon",
        type: "image/png",
      },
      {
        url: "https://www.zentararealty.property/og-image.jpg",
        secureUrl: "https://www.zentararealty.property/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zentara Realty — Official Branding & New Residential Projects in Gurgaon",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentara Realty | New & Upcoming Residential Projects in Gurgaon",
    description:
      "Explore pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Discover new developments and enquire about residential opportunities.",
    images: ["https://www.zentararealty.property/og-image.png"],
    creator: "@ZentaraRealty",
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
        {/* Google Consent Mode v2 Default Configuration (Deny analytics & marketing by default, or restore stored consent) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              try {
                var storedConsent = localStorage.getItem('zr_cookie_consent_v1');
                if (storedConsent) {
                  var parsed = JSON.parse(storedConsent);
                  gtag('consent', 'default', {
                    'analytics_storage': parsed.analytics ? 'granted' : 'denied',
                    'ad_storage': parsed.marketing ? 'granted' : 'denied',
                    'ad_user_data': parsed.marketing ? 'granted' : 'denied',
                    'ad_personalization': parsed.marketing ? 'granted' : 'denied'
                  });
                } else {
                  gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'wait_for_update': 500
                  });
                }
              } catch (e) {
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied'
                });
              }
              gtag('js', new Date());
            `,
          }}
        />
        {/* Google Tag Manager Container (GTM-WRT49SWM) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRT49SWM');`,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#F7F8FA] text-[#202938] antialiased selection:bg-[#C5A46D]/20 selection:text-[#102B50]"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRT49SWM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Consent-controlled GA4 tag loader */}
        <GoogleAnalytics />
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
