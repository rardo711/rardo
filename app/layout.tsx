import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://rardo-castanedag2001-1468.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gerardo Castaneda — Websites for Small Businesses",
    template: "%s · Gerardo Castaneda",
  },
  description:
    "I'm Rardo. I design and build simple, fast one-page websites for local businesses — who you are, what you do, your hours, and a way to call you.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Gerardo Castaneda",
    title: "Gerardo Castaneda — Websites for Small Businesses",
    description:
      "Simple, fast one-page websites for local businesses.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerardo Castaneda — Websites for Small Businesses",
    description:
      "Simple, fast one-page websites for local businesses.",
    images: ["/opengraph-image"],
  },
  themeColor: "#faf6ec",
  other: {
    "geo.region": "US-GA",
    "geo.placename": "Glennville, Georgia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "Gerardo Castaneda — Websites for Small Businesses",
      url: siteUrl,
      description:
        "One-page websites, ordering and contact forms, and update-it-yourself sites for local businesses.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Glennville",
        addressRegion: "GA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.9407,
        longitude: -81.9296,
      },
      areaServed: [
        { "@type": "City", name: "Glennville, GA" },
        {
          "@type": "AdministrativeArea",
          name: "Tattnall County, GA",
        },
      ],
      sameAs: [
        "https://x.com/gerardocasta711",
        "https://github.com/rardo711",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Gerardo Castaneda — Websites for Small Businesses",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} font-sans antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
