import { FAQS } from "@/data/faqs";

export default function StructuredData() {
  const baseUrl = "https://www.zentararealty.property";

  // 1. Primary RealEstateAgent / LocalBusiness Schema
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${baseUrl}/#realestateagent`,
    "name": "Zentara Realty",
    "alternateName": ["Zentara Realty Gurugram", "Zentara Realty Residential Consultancy"],
    "legalName": "Zentara Realty",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/og-image.png`,
    "telephone": "+91 7303437659",
    "email": "zentararealty@gmail.com",
    "description":
      "Independent residential real estate consultancy based in Gurugram, Haryana. Specializing exclusively in pre-launch, upcoming, and newly launched residential developments, luxury apartments, and condominiums across Gurgaon.",
    "slogan": "Discover What's Next in Residential Living.",
    "priceRange": "₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prime Residential Corridor",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4595,
      "longitude": 77.0266,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "09:00",
        "closes": "20:00",
      },
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Gurugram",
        "sameAs": "https://en.wikipedia.org/wiki/Gurgaon",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Dwarka Expressway",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Golf Course Extension Road",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Southern Peripheral Road",
      },
      {
        "@type": "AdministrativeArea",
        "name": "New Gurgaon",
      },
    ],
    "knowsAbout": [
      "Pre-Launch Residential Projects in Gurgaon",
      "New Launch Residential Projects in Gurgaon",
      "Upcoming Residential Projects in Gurgaon",
      "Luxury Condominiums in Gurugram",
      "Golf Course Extension Road Residences",
      "Dwarka Expressway Residential Developments",
      "Southern Peripheral Road Residential Projects",
      "New Gurgaon Residential Developments",
      "Haryana RERA Compliance & Project Verification",
    ],
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Zentara Realty",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 7303437659",
        "contactType": "customer service",
        "email": "zentararealty@gmail.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
      },
    ],
  };

  // 3. WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "Zentara Realty",
    "description":
      "Discover pre-launch and newly launched residential projects in Gurgaon with Zentara Realty.",
    "publisher": {
      "@id": `${baseUrl}/#organization`,
    },
    "inLanguage": "en-IN",
  };

  // 4. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": "Zentara Realty | New & Upcoming Residential Projects in Gurgaon",
    "description":
      "Explore pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Discover new developments and enquire about residential opportunities.",
    "isPartOf": {
      "@id": `${baseUrl}/#website`,
    },
    "about": {
      "@id": `${baseUrl}/#realestateagent`,
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/hero-architecture.jpg`,
    },
    "inLanguage": "en-IN",
  };

  // 5. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Residential Projects Gurgaon",
        "item": `${baseUrl}/#pre-launch`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Consultation",
        "item": `${baseUrl}/#contact`,
      },
    ],
  };

  // 6. FAQPage Schema (AEO Engine Optimization for SearchGPT, Perplexity, Gemini, Google AI)
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faqpage`,
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // 7. ItemList Schema (Curated Residential Corridors)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}/#corridors-list`,
    "name": "Gurugram Residential Corridors Portfolio",
    "description": "Featured primary residential growth corridors in Gurgaon, Haryana.",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Golf Course Extension Road Ultra-Luxury Residences",
        "description": "High-end luxury condominiums with panoramic views and premier connectivity.",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dwarka Expressway Eco-Luxury High-Rise Developments",
        "description": "Airport-connected smart residences with non-stop Delhi access.",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Southern Peripheral Road (SPR) Forest-Themed Enclaves",
        "description": "Low-density nature-flanked residential towers near Cyber City 2.",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "New Gurgaon Integrated Master-Planned Communities",
        "description": "Contemporary multi-tier townships with direct NH-48 connectivity.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "@id": `${baseUrl}/#prime-residences`,
            "name": "Prime Residences",
            "description":
              "Boutique low-rise gated community of 2 & 3 BHK VRV Homes by PRIME Developments in Sector 65, Gurugram. Featuring private air-conditioned basement and 40,000 sq.ft. Club Prime.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 65",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "addressCountry": "IN",
            },
            "numberOfAccommodationUnits": 308,
            "url": `${baseUrl}/prime-residences`,
          }),
        }}
      />
    </>
  );
}
