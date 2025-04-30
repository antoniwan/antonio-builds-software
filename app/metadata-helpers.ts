import { Metadata } from 'next';
import defaultMetadata from './metadata';

export function generateMetadata({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description?: string;
  path: string;
  image?: string;
}): Metadata {
  const url = new URL(path, defaultMetadata.metadataBase as URL).toString();
  const ogImage =
    image ||
    (Array.isArray(defaultMetadata.openGraph?.images)
      ? (defaultMetadata.openGraph.images[0] as { url: string })?.url
      : (defaultMetadata.openGraph?.images as { url: string })?.url);

  const metadataTitle = title ? `${title} | Antonio Rodriguez Martinez` : defaultMetadata.title;
  const metadataDescription = description || defaultMetadata.description;

  return {
    ...defaultMetadata,
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: metadataTitle,
      description: metadataDescription,
      url,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title || 'Antonio Rodriguez Martinez',
              type: 'image/jpeg',
            },
          ]
        : defaultMetadata.openGraph?.images,
      siteName: 'Antonio Rodriguez Martinez',
      locale: 'en_US',
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: metadataTitle,
      description: metadataDescription,
      images: ogImage ? [ogImage] : defaultMetadata.twitter?.images,
      card: 'summary_large_image',
      creator: '@antoniwan777',
      site: '@antoniwan777',
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
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
    category: 'technology',
    keywords: [
      'Antonio Rodriguez Martinez',
      'Technical Program Manager',
      'Full-Stack Developer',
      'Web Development',
      'Digital Products',
      'React',
      'Next.js',
      'TypeScript',
      'Product Leadership',
      'Systems Thinking',
    ],
  };
}
