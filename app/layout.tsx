import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "InfinityCrafts — Interior designers in Bangalore",
    template: "%s — InfinityCrafts",
  },
  description:
    "InfinityCrafts is an interior design studio in Bangalore crafting residential interiors with clarity, warmth and attention to detail.",
  metadataBase: new URL("https://infinitycrafts.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "InfinityCrafts",
    title: "InfinityCrafts — Spaces, thoughtfully crafted",
    description: "Residential interiors designed with clarity, warmth and attention to every detail.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-[#3A2016] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
