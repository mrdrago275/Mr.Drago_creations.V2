import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoadingBar from "../components/LoadingBar";
import ScrollProgress from "../components/ScrollProgress";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://mrdragocreations.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Mr. Drago Creations",
    template: "%s | Mr. Drago Creations",
  },

  description:
    "Premium anime and aesthetic wallpapers with a modern glassmorphism experience.",

  applicationName: "Mr. Drago Creations",

  keywords: [
    "Anime Wallpapers",
    "4K Wallpapers",
    "HD Wallpapers",
    "Mr. Drago",
    "Wallpapers",
    "Aesthetic",
    "Mobile Wallpapers",
    "Desktop Wallpapers",
    "Glassmorphism",
    "Premium Wallpapers",
  ],

  authors: [
    {
      name: "Mr. Drago Creations",
    },
  ],

  creator: "Mr. Drago Creations",

  publisher: "Mr. Drago Creations",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Mr. Drago Creations",
    description:
      "Premium anime and aesthetic wallpapers with a modern glassmorphism experience.",
    url: SITE_URL,
    siteName: "Mr. Drago Creations",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Mr. Drago Creations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mr. Drago Creations",
    description:
      "Premium anime and aesthetic wallpapers with a modern glassmorphism experience.",
    images: ["/og-card.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="bg-matte text-silver-100 min-h-screen antialiased">
        <div id="route-progress" />

        <ScrollProgress />

        <LoadingBar />

        <div className="flex min-h-screen flex-col">
          <Nav />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
