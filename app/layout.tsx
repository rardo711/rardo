import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import RevealObserver from "@/components/RevealObserver";
import AnchorScroll from "@/components/AnchorScroll";
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
      alternateName: "Rardo Web Design",
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      image: `${siteUrl}/photos/gerardo-olivia.webp`,
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Check, Bank Transfer, Card",
      founder: { "@id": `${siteUrl}/#person` },
      description:
        "One-page websites, ordering and contact forms, and update-it-yourself sites for local businesses.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Glennville",
        addressRegion: "GA",
        postalCode: "30427",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.9338,
        longitude: -81.9279,
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Tattnall County, GA",
        },
        {
          "@type": "City",
          name: "Glennville, GA",
        },
        {
          "@type": "City",
          name: "Reidsville, GA",
        },
        {
          "@type": "City",
          name: "Claxton, GA",
        },
        {
          "@type": "State",
          name: "Georgia",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "One-Page Small Business Website",
              description:
                "Complete custom one-page site built in one focused week with no recurring software fees.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Online Ordering & Inquiry Systems",
              description:
                "Direct-to-inbox custom order and customer inquiry forms for local merchants.",
            },
          },
        ],
      },
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
        <a
          href="#main"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-md"
        >
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
