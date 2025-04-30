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

  return {
    ...defaultMetadata,
    title: title ? `${title} | Antonio Rodriguez Martinez` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title || defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      url,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title || 'Antonio Rodriguez Martinez',
            },
          ]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title || defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
      images: ogImage ? [ogImage] : defaultMetadata.twitter?.images,
    },
  };
}
