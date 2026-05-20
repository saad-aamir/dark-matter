import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dark Matter Studio",
    short_name: "Dark Matter",
    description:
      "Web design & development studio crafting high-performance websites that convert visitors into clients.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#c4a1ff",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
