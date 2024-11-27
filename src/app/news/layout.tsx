import { ReactNode } from "react";
import { Metadata } from "next";

interface NewsLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Vancouver News for Gen Z | Vibe Check Vancouver",
    template: "%s | Vibe Check Vancouver"
  },
  description: "Stay informed with Vancouver's freshest local news, curated for Gen Z. From housing updates to food scene coverage, get your daily dose of what matters in YVR.",
  keywords: "Vancouver news, Gen Z news, local news Vancouver, YVR updates, Vancouver culture, Vancouver housing, Vancouver events",
  openGraph: {
    title: "Vancouver News for Gen Z | Vibe Check Vancouver",
    description: "Your daily dose of Vancouver news that actually matters. Housing crisis updates, transit changes, food scene coverage, and more - all explained in Gen Z language.",
    images: [{
      url: "/images/og/news-feed.webp",
      width: 1200,
      height: 630,
      alt: "Vibe Check Vancouver News Feed"
    }],
    locale: "en_CA",
    type: "website",
    siteName: "Vibe Check Vancouver"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancouver News for Gen Z | Vibe Check Vancouver",
    description: "Your daily dose of Vancouver news that actually matters. Housing crisis updates, transit changes, food scene coverage, and more - all explained in Gen Z language.",
    images: ["/images/og/news-feed.webp"],
    creator: "@vibecheckvan"
  },
  alternates: {
    canonical: "https://vibecheckvancouver.ca/news"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function NewsLayout({ children }: NewsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>{children}</main>
    </div>
  );
} 