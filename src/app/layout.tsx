import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Vibe Check Vancouver",
  description: "Your daily pulse check on Vancouver's culture and news",
  openGraph: {
    title: "Vibe Check Vancouver",
    description: "Stay updated with Vancouver's latest cultural and news updates.",
    url: "https://vibecheckvancouver.com",
    siteName: "Vibe Check Vancouver",
    images: [
      {
        url: "https://vibecheckvancouver.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vibe Check Vancouver",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vibecheckvan",
    title: "Vibe Check Vancouver",
    description: "Your daily pulse check on Vancouver's culture and news",
    images: ["https://vibecheckvancouver.com/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased font-inter flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
