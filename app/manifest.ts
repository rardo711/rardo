import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gerardo Castaneda — Websites for Small Businesses",
    short_name: "Rardo",
    start_url: "/",
    display: "browser",
    theme_color: "#faf6ec",
    background_color: "#faf6ec",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
