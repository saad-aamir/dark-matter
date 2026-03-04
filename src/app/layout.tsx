import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dark Matter — We Build Websites That Convert",
  description:
    "Dark Matter is a web design & development agency crafting high-performance websites that look stunning and drive results. Custom web design, development, portfolios, and SEO.",
  keywords: [
    "web design agency",
    "web development",
    "custom websites",
    "landing pages",
    "portfolio websites",
    "SEO",
    "Dark Matter",
  ],
  openGraph: {
    title: "Dark Matter — We Build Websites That Convert",
    description:
      "A web design & development agency crafting high-performance websites that look stunning and drive results.",
    url: "https://darkmatterstudio.vercel.app",
    siteName: "Dark Matter",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Matter — We Build Websites That Convert",
    description:
      "A web design & development agency crafting high-performance websites that look stunning and drive results.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://darkmatterstudio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
