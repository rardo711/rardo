import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Start your project with Gerardo Castaneda";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return renderOg({
    eyebrow: "Contact",
    title: ["Tell me about", "your business."],
    sub: "I'll get back to you within a day.",
  });
}
