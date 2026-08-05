import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mr. Drago Creations",
  description: "Creative portfolio and projects by Mr. Drago.",
  keywords: [
    "Mr. Drago",
    "Anime Wallpapers",
    "AI Art",
    "Pinterest",
    "Portfolio",
  ],
  authors: [{ name: "Mr. Drago" }],
  openGraph: {
    title: "Mr. Drago Creations",
    description: "Creative portfolio and projects by Mr. Drago.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Drago Creations",
    description: "Creative portfolio and projects by Mr. Drago.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
