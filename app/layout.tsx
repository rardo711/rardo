import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gerardo Castaneda",
  description:
    "Christian, husband, father. Building software with AI, studying Scripture in Hebrew and Greek, and writing — from Glennville, Georgia.",
  openGraph: {
    title: "Gerardo Castaneda",
    description:
      "Christian, husband, father. Building software with AI, studying Scripture in Hebrew and Greek, and writing — from Glennville, Georgia.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gerardo Castaneda",
    description:
      "Christian, husband, father. Building software with AI, studying Scripture in Hebrew and Greek, and writing — from Glennville, Georgia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
