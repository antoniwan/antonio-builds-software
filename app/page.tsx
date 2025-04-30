import { Metadata } from 'next';
import { generateMetadata } from './metadata-helpers';
import { PageContent } from '@/components/page-content';

export const metadata: Metadata = generateMetadata({
  title: 'Home',
  description:
    'Digital craftsman building systems with clarity, purpose, and performance. Explore my projects, principles, and creative works.',
  path: '/',
});

export default function Home() {
  return <PageContent />;
}
