import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { StructuredData } from '@/components/structured-data';
import './globals.css';

export const metadata = {
  title: 'Antonio Rodriguez Martinez – Digital Craftsman',
  description: 'Building systems with clarity, purpose, and performance.',
  metadataBase: new URL('https://builds.software'),
  openGraph: {
    title: 'Antonio Rodriguez Martinez – Digital Craftsman',
    description: 'Building systems with clarity, purpose, and performance.',
    url: 'https://builds.software',
    siteName: 'Antonio Rodriguez Martinez',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antonio Rodriguez Martinez',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Rodriguez Martinez – Digital Craftsman',
    description: 'Building systems with clarity, purpose, and performance.',
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.jpeg',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/images/favicon-32by32.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/images/favicon-16by16.ico',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background">
            <StructuredData />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
