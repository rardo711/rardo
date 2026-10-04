import type { Metadata } from "next";
import { defaultTitle, siteName } from "./site";

/**
 * Per-page metadata. Next replaces (not merges) `openGraph` and `alternates`
 * from the layout, so each page states its own canonical + share card.
 * The share image comes from the route's `opengraph-image.tsx`.
 */
export function pageMetadata({
  path,
  title,
  ogTitle,
  description,
  ogDescription,
}: {
  path: string;
  title?: string;
  ogTitle?: string;
  description: string;
  ogDescription?: string;
}): Metadata {
  const shareTitle = ogTitle ?? title ?? defaultTitle;
  const shareDescription = ogDescription ?? description;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName,
      title: shareTitle,
      description: shareDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
    },
  };
}
