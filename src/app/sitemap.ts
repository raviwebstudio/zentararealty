import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zentararealty.property";
  const lastModified = new Date("2026-11-03T00:00:00.000Z");

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/images/hero-architecture.jpg`,
        `${baseUrl}/images/about-lifestyle.jpg`,
        `${baseUrl}/images/prelaunch-architecture.jpg`,
        `${baseUrl}/images/dwarka-expressway.jpg`,
        `${baseUrl}/images/spr-residences.jpg`,
        `${baseUrl}/images/new-gurgaon.jpg`,
        `${baseUrl}/images/newlaunch-architecture.jpg`,
        `${baseUrl}/images/why-choose-consultation.jpg`,
        `${baseUrl}/og-image.png`,
        `${baseUrl}/logo.png`,
      ],
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
