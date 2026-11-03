import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "OAI-SearchBot",
        ],
        allow: ["/", "/privacy-policy", "/terms-and-conditions", "/llms.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://zentararealty.property/sitemap.xml",
    host: "https://zentararealty.property",
  };
}
