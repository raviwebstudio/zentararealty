export default function StructuredData() {
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://zentararealty.property/#realestateagent",
    "name": "Zentara Realty",
    "legalName": "Zentara Realty",
    "url": "https://zentararealty.property",
    "logo": "https://zentararealty.property/logo.svg",
    "image": "https://zentararealty.property/og-image.svg",
    "telephone": "+91 7303437659",
    "email": "zentararealty@gmail.com",
    "description":
      "Residential real estate consultancy specializing in pre-launch and newly launched residential projects in Gurgaon.",
    "slogan": "Discover What's Next in Residential Living.",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Gurugram, Haryana, India",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN",
    },
    "knowsAbout": [
      "Pre-Launch Residential Projects in Gurgaon",
      "New Launch Residential Projects in Gurgaon",
      "Upcoming Residential Projects in Gurgaon",
      "Luxury Condominiums in Gurugram",
      "Golf Course Extension Road Residences",
      "Dwarka Expressway Residential Developments",
      "Southern Peripheral Road Residential Projects",
      "New Gurgaon Residential Developments",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://zentararealty.property/#organization",
    "name": "Zentara Realty",
    "url": "https://zentararealty.property",
    "logo": "https://zentararealty.property/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 7303437659",
      "contactType": "customer service",
      "email": "zentararealty@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://zentararealty.property/#website",
    "url": "https://zentararealty.property",
    "name": "Zentara Realty",
    "description":
      "Discover pre-launch and newly launched residential projects in Gurgaon with Zentara Realty.",
    "publisher": {
      "@id": "https://zentararealty.property/#organization",
    },
    "inLanguage": "en-IN",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://zentararealty.property/#webpage",
    "url": "https://zentararealty.property",
    "name": "Zentara Realty | New Residential Projects in Gurgaon",
    "description":
      "Discover pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Explore new residential developments and opportunities in Gurugram.",
    "isPartOf": {
      "@id": "https://zentararealty.property/#website",
    },
    "about": {
      "@id": "https://zentararealty.property/#realestateagent",
    },
    "inLanguage": "en-IN",
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
    </>
  );
}

