import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gongpo - Your ideas, always with you",
  description:
    "A local-first note-taking app that keeps your documents safe on your device while enabling seamless collaboration with others.",
  keywords: ["note-taking", "local-first", "collaboration", "offline", "sync"],
  authors: [{ name: "Jaeha Lee" }],
  openGraph: {
    title: "Gongpo - Your ideas, always with you",
    description:
      "A local-first note-taking app that keeps your documents safe on your device while enabling seamless collaboration with others.",
    type: "website",
    locale: "en_US",
    siteName: "Gongpo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
