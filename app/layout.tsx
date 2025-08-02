import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingThemeToggle } from '@/components/floating-theme-toggle';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const jarvishBlurry = localFont({
  src: [
    {
      path: '../public/fonts/Jarvish Blurry.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Jarvish Blurry.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-jarvish-blurry',
  display: 'swap',
  optimizeFile: false,
});

export const metadata: Metadata = {
  title: 'NOIR Gaming Community - For Gamers, By Gamers',
  description: 'Join the NOIR Gaming Community - a modern gaming community showcasing curated content, gaming news, and fostering ongoing community engagement.',
  keywords: ['gaming', 'community', 'esports', 'MMO', 'ARPG', 'MOBA', 'FPS', 'RPG'],
  authors: [{ name: 'NOIR Gaming Community' }],
  creator: 'NOIR Gaming Community',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} ${jarvishBlurry.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}