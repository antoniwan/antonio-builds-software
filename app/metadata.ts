import { Metadata } from 'next';
import { version } from '../package.json';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://builds.software'),
  title: {
    default: 'Antonio Rodriguez Martinez – Digital Craftsman',
    template: '%s | Antonio Rodriguez Martinez',
  },
  description: 'Building systems with clarity, purpose, and performance.',
  keywords: [
    'software development',
    'web development',
    'full-stack',
    'digital craftsman',
    'antonio rodriguez martinez',
  ],
  authors: [{ name: 'Antonio Rodriguez Martinez' }],
  creator: 'Antonio Rodriguez Martinez',
  publisher: 'Antonio Rodriguez Martinez',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    version,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://builds.software',
    siteName: 'Antonio Rodriguez Martinez',
    title: 'Antonio Rodriguez Martinez – Digital Craftsman',
    description: 'Building systems with clarity, purpose, and performance.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antonio Rodriguez Martinez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Rodriguez Martinez – Digital Craftsman',
    description: 'Building systems with clarity, purpose, and performance.',
    images: ['/images/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://builds.software',
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

export default defaultMetadata;
