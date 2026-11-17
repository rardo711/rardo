import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import AnchorScroll from "@/components/AnchorScroll";
import StickyCta from "@/components/StickyCta";
import { siteUrl, defaultTitle, siteName } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-public-sans",
  display: "swap",
});

const homeDescription =
  "Gerardo Castaneda (Rardo) designs and builds flat-fee one-page websites, direct ordering systems, and self-editable sites for small businesses in Glennville, Georgia and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${siteName}`,
  },
  description: homeDescription,
  other: {
    "geo.region": "US-GA",
    "geo.placename": "Glennville, Georgia",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6efe3",
  colorScheme: "light",
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Gerardo Castaneda",
      givenName: "Gerardo",
      familyName: "Castaneda",
      alternateName: "Rardo",
      url: `${siteUrl}/about`,
      description:
        "Husband, father of two, musician, writer, and web builder in Glennville, Georgia. Builds flat-fee websites and ordering systems for small businesses.",
      homeLocation: { "@type": "Place", name: "Glennville, Georgia" },
      sameAs: [
        "https://x.com/gerardocasta711",
        "https://github.com/rardo711",
        "https://www.instagram.com/lvngphotography/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: defaultTitle,
      url: siteUrl,
      founder: { "@id": `${siteUrl}/#person` },
      description:
        "One-page business websites, direct ordering and inquiry forms, and self-editable sites for independent businesses.",
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
        { "@type": "City", name: "Reidsville, GA" },
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
      name: defaultTitle,
      publisher: { "@id": `${siteUrl}/#business` },
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${publicSans.variable} font-sans antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <RevealObserver />
        <AnchorScroll />
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
