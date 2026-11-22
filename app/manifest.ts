import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gerardo Castaneda · Websites for Small Businesses",
    short_name: "Rardo",
    start_url: "/",
    display: "browser",
    theme_color: "#f6efe3",
    background_color: "#f6efe3",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
