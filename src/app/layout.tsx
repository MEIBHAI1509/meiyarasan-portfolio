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
  metadataBase: new URL("https://meiyarasan.dev"),

  title: {
    default: "Meiyarasan P — Front-End Developer",
    template: "%s | Meiyarasan P",
  },

  description:
    "Portfolio of Meiyarasan P — Front-End Developer, MERN Stack Developer, and Full-Stack Developer building modern, performant web experiences.",

  keywords: [
    "Meiyarasan P",
    "Front-End Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],

  authors: [
    {
      name: "Meiyarasan P",
    },
  ],

  creator: "Meiyarasan P",

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Meiyarasan P — Front-End Developer",
    description:
      "Portfolio of Meiyarasan P — Front-End Developer and MERN Stack Developer.",
    siteName: "Meiyarasan P",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll>  <CursorGlow />
            <CommandPalette />
            {children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}