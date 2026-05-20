import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.darkmatterstudio.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dark Matter — Web Design & Development Studio",
    template: "%s | Dark Matter Studio",
  },
  description:
    "Dark Matter is a web design & development studio crafting high-performance, conversion-focused websites. Custom landing pages, SaaS marketing sites, portfolio sites, and SEO — built to turn visitors into clients.",
  keywords: [
    "web design agency",
    "web development studio",
    "custom website design",
    "landing page design",
    "conversion-focused web design",
    "SaaS marketing website",
    "portfolio website",
    "Next.js web development",
    "Dark Matter Studio",
    "dark matter web design",
  ],
  authors: [{ name: "Dark Matter Studio", url: BASE_URL }],
  creator: "Dark Matter Studio",
  publisher: "Dark Matter Studio",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Dark Matter — Websites That Turn Visitors Into Clients",
    description:
      "High-performance, conversion-focused websites crafted by Dark Matter Studio. From SaaS marketing pages to stunning portfolios.",
    url: BASE_URL,
    siteName: "Dark Matter Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dark Matter — Websites That Turn Visitors Into Clients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Matter — Websites That Turn Visitors Into Clients",
    description:
      "High-performance, conversion-focused websites crafted by Dark Matter Studio.",
    images: ["/opengraph-image"],
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
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dark Matter Studio",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.svg`,
    width: 512,
    height: 512,
  },
  description:
    "A web design & development studio crafting high-performance, conversion-focused websites.",
  email: "saad@darkmatterstudio.org",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dark Matter Studio",
  url: BASE_URL,
  description:
    "Web design & development studio crafting high-performance websites that convert visitors into clients.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dark Matter Studio",
  url: BASE_URL,
  description:
    "Custom web design and development for businesses, startups, and creatives. Specialising in landing pages, SaaS marketing sites, portfolio websites, and conversion-focused web experiences.",
  email: "saad@darkmatterstudio.org",
  priceRange: "$$",
  serviceType: [
    "Web Design",
    "Web Development",
    "Landing Page Design",
    "SaaS Website Design",
    "Portfolio Website Design",
    "SEO",
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design",
          description:
            "Bespoke, high-performance website design tailored to your brand.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Development",
          description:
            "Conversion-focused landing pages built to turn visitors into clients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Marketing Website",
          description:
            "Marketing websites for SaaS products that drive sign-ups and revenue.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
