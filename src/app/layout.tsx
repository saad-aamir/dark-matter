import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dark Matter — We Build Websites That Convert",
  description:
    "Dark Matter is a web design & development agency crafting high-performance websites that look stunning and drive results.",
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
