import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Gerardo Castaneda — Websites for Small Businesses";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return renderOg({
    eyebrow: "Websites for small businesses",
    title: ["Gerardo", "Castaneda"],
    sub: "Simple, fast one-page websites for local businesses.",
  });
}
