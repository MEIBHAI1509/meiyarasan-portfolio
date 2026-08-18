import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/common/theme-provider";
import { SmoothScroll } from "@/components/common/smooth-scroll";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { CursorGlow } from "@/components/effects/cursor-glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://meiyarasan.in",
  ),

  title: {
    default:
      "Meiyarasan P | Frontend Developer & Full Stack Developer",

    template:
      "%s | Meiyarasan P",
  },

  description:
    "Meiyarasan P is a Frontend Developer and Full Stack Developer specializing in React, Next.js, TypeScript, Angular, Node.js, and modern web application development.",

  keywords: [
    "Meiyarasan P",
    "Meiyarasan",
    "Frontend Developer",
    "Front-End Developer",
    "Full Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Angular Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Web Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],

  authors: [
    {
      name: "Meiyarasan P",
      url: "https://meiyarasan.in",
    },
  ],

  creator: "Meiyarasan P",

  publisher: "Meiyarasan P",

  alternates: {
    canonical: "https://meiyarasan.in",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://meiyarasan.in",

    siteName: "Meiyarasan P",

    title:
      "Meiyarasan P | Frontend Developer & Full Stack Developer",

    description:
      "Portfolio of Meiyarasan P — Frontend Developer and Full Stack Developer building modern, responsive, and production-ready web applications.",

    images: [
      {
        url: "/images/og-image.png",

        width: 1200,

        height: 630,

        alt:
          "Meiyarasan P — Frontend Developer & Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Meiyarasan P | Frontend Developer & Full Stack Developer",

    description:
      "Portfolio of Meiyarasan P — Frontend Developer and Full Stack Developer building modern web applications.",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll>
            <CursorGlow />

            <CommandPalette />

            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}