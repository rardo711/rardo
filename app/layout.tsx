import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import RevealObserver from "@/components/RevealObserver";
import StickyCta from "@/components/StickyCta";
import { siteUrl, defaultTitle, siteName } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  // The design uses real italics (<em>customers</em>, quotes); without this
  // the browser fakes a slant. `opsz` gives display sizes the refined cut.
  style: ["normal", "italic"],
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
  // Small labels only; fetch after the critical fonts.
  preload: false,
});

const homeDescription =
  "I'm Rardo. I design and build simple, fast one-page websites for local businesses — who you are, what you do, your hours, and a way to call you.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${siteName}`,
  },
  description: homeDescription,
  // Canonical, openGraph and twitter live on each page (lib/seo.ts): a
  // canonical here would be inherited by every route and point them all home.
  other: {
    "geo.region": "US-GA",
    "geo.placename": "Glennville, Georgia",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6ec",
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
        "Husband, father of two, musician and photographer in Glennville, Georgia. Builds simple websites for local businesses.",
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Reveal animations only hide content when JS is available. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} font-sans antialiased`}
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
        <ScrollProgress />
        <RevealObserver />
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
