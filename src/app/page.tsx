import { StoryGrid } from "@/components/stories/StoryGrid";
import { TrendingTopics } from "@/components/home/TrendingTopics";
import { NeighborhoodSpotlight } from "@/components/home/NeighborhoodSpotlight";
import { FeaturedStory } from "@/components/stories/FeaturedStory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibe Check Vancouver | Your Daily Dose of Vancouver Culture",
  description: "Vancouver's freshest takes on local news, culture & events. Get the TL;DR on what's actually happening in your city. Made for Gen Z, trusted by locals. 🌊",
  keywords: "Vancouver news, Vancouver events, Vancouver culture, local news Vancouver, Vancouver Gen Z, Vancouver lifestyle, Vancouver updates",
  openGraph: {
    title: "Vibe Check Vancouver | What's Really Happening in YVR",
    description: "Skip the boring headlines. Get Vancouver's most important updates in bite-sized, visual stories. From hidden food gems to housing crisis explainers - we keep it real. 🌊",
    siteName: "Vibe Check Vancouver",
    locale: "en_CA",
    type: "website",
    url: "https://vibecheckvancouver.com",
    images: [
      {
        url: "https://vibecheckvancouver.com/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vibe Check Vancouver - Your Daily Dose of Vancouver Culture",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Check Vancouver | The Tea on YVR 🫖",
    description: "Vancouver's need-to-know updates, minus the boring parts. Local news & culture that actually matters to Gen Z. No fluff, just facts (and maybe some memes).",
    creator: "@vibecheckyvr",
    images: ["https://vibecheckvancouver.com/home-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 gap-8 pb-8 min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-4">
        <FeaturedStory />
      </section>

      {/* Trending Topics (Client Component) */}
      <section className="w-full -mt-6">
        <h6 className="text-2xl font-bold mb-4 mt-0 pt-0">What&apos;s Buzzing 🔥</h6>
        <TrendingTopics />
      </section>

      {/* Latest Stories Grid */}
      <section className="w-full">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <StoryGrid />
      </section>

      {/* Neighborhood Spotlight */}
      <section className="w-full">
        <h2 className="text-2xl font-bold mb-4">Your Hood&apos;s Mood 📍</h2>
        <NeighborhoodSpotlight />
      </section>
    </main>
  );
}
