import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Antonio Rodriguez Martinez | Builder of Digital Products & Technical Program Manager',
    short_name: 'Builds.Software',
    description:
      'I transform abstract ideas into tangible reality—digital, technical, or creative. Builder at heart, Technical Program Manager by profession.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/images/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/images/screenshot-desktop.jpg',
        sizes: '1920x1080',
        type: 'image/jpeg',
        form_factor: 'wide',
      },
      {
        src: '/images/screenshot-mobile.jpg',
        sizes: '750x1334',
        type: 'image/jpeg',
        form_factor: 'narrow',
      },
    ],
    id: 'builds.software',
    orientation: 'portrait',
    categories: ['portfolio', 'development', 'technology', 'digital products'],
    lang: 'en',
    dir: 'ltr',
    prefer_related_applications: false,
    related_applications: [],
    shortcuts: [
      {
        name: 'Projects',
        url: '/#projects',
        description:
          'View my featured projects that balance technical excellence with human values',
      },
      {
        name: 'About Me',
        url: '/#about',
        description: 'Learn about my journey as a builder and Technical Program Manager',
      },
      {
        name: 'Contact',
        url: '/#contact',
        description: "Let's create something amazing together",
      },
    ],
  };
}
