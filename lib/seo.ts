import type { Metadata } from "next";
import type { SiteConfig } from "@/content/site";

export function buildMetadata(site: SiteConfig): Metadata {
  const title = `${site.name} — ${site.tagline}`;
  const description = site.bio;
  const url = site.siteUrl ?? "https://example.com";
  const image = "/og.png";

  return {
    title: {
      default: title,
      template: `%s | ${site.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${site.name} Open Graph image`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    metadataBase: new URL(url),
  };
}
