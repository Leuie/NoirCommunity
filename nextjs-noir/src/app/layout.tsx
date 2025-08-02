import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOIR Gaming Community - For Gamers, By Gamers",
  description: "Join the NOIR Gaming Community - a modern gaming community showcasing curated content, gaming news, and fostering ongoing community engagement.",
  keywords: ['gaming', 'community', 'esports', 'MMO', 'ARPG', 'MOBA', 'FPS', 'RPG'],
  authors: [{ name: 'NOIR Gaming Community' }],
  creator: 'NOIR Gaming Community',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noircommunity.com',
    title: 'NOIR Gaming Community - For Gamers, By Gamers',
    description: 'Join the NOIR Gaming Community - a modern gaming community showcasing curated content, gaming news, and fostering ongoing community engagement.',
    siteName: 'NOIR Gaming Community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOIR Gaming Community - For Gamers, By Gamers',
    description: 'Join the NOIR Gaming Community - a modern gaming community showcasing curated content, gaming news, and fostering ongoing community engagement.',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <header className="border-b border-purple-500/20 bg-slate-900/80 backdrop-blur">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    NOIR Community
                  </span>
                </Link>
                <div className="flex items-center space-x-6">
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Posts
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                    Community
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-purple-500/20 bg-slate-900/80 backdrop-blur mt-16">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center text-gray-400">
                <p>&copy; 2025 NOIR Gaming Community. All rights reserved.</p>
                <p className="mt-2 text-sm">For Gamers, By Gamers.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
