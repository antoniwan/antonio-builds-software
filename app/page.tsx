import { Metadata } from 'next';
import { generateMetadata } from './metadata-helpers';
import { PageContent } from '@/components/page-content';

export const metadata: Metadata = generateMetadata({
  title: 'Home',
  description:
    'Builder of tools, platforms, and systems. Clear process. Quiet execution. Explore projects, principles, and creative works.',
  path: '/',
});

export default function Home() {
  return <PageContent />;
}
