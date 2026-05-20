import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      // Block AI training crawlers
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
      // Allow Google's specialist crawlers
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
    ],
    sitemap: "https://www.darkmatterstudio.org/sitemap.xml",
    host: "https://www.darkmatterstudio.org",
  };
}
