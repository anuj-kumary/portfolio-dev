import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { PageLoader } from "@/components/layout/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://anujkumar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Anujkumar Yadav — Frontend Software Engineer",
    template: "%s | Anujkumar Yadav",
  },
  description:
    "Frontend Software Engineer specializing in React, TypeScript, and enterprise-scale applications. Currently at Deuex Solutions. 4+ years of experience building beautiful, performant software.",
  keywords: [
    "Anujkumar Yadav",
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Mumbai",
    "Software Engineer",
    "Enterprise Software",
    "UI Development",
  ],
  authors: [{ name: "Anujkumar Yadav", url: BASE_URL }],
  creator: "Anujkumar Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Anujkumar Yadav",
    title: "Anujkumar Yadav — Frontend Software Engineer",
    description:
      "Frontend Software Engineer specializing in React, TypeScript, and enterprise-scale applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anujkumar Yadav — Frontend Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anujkumar Yadav — Frontend Software Engineer",
    description:
      "Frontend Software Engineer specializing in React, TypeScript, and enterprise-scale applications.",
    images: ["/og-image.png"],
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

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#0B0B0C] text-[#FAFAFA] antialiased">
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <CommandMenu />
      </body>
    </html>
  );
}
