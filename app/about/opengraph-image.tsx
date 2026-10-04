import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "About Gerardo Castaneda — Rardo";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return renderOg({
    eyebrow: "About",
    title: ["I'm Rardo."],
    sub: "Husband, father, musician, photographer — Glennville, Georgia.",
  });
}
