import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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
      <body className="bg-black min-h-screen text-white">
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
