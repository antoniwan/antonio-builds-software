import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSiteSection } from '@/components/sections/about-site-section';
import { PrinciplesSection } from '@/components/sections/principles-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CreativeWorksSection } from '@/components/sections/creative-works-section';
import { AboutSection } from '@/components/sections/about-section';
import { ConnectWithMeSection } from '@/components/sections/connect-with-me-section';
import { SendMessageSection } from '@/components/sections/send-message-section';
import { StructuredData } from '@/components/structured-data';
import { generateMetadata } from './metadata-helpers';

export const metadata: Metadata = generateMetadata({
  title: 'Home',
  description:
    'Digital craftsman building systems with clarity, purpose, and performance. Explore my projects, principles, and creative works.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="flex-1">
        <div className="space-y-20 md:space-y-28 lg:space-y-36">
          <HeroSection />
          <AboutSiteSection />
          <PrinciplesSection />
          <ProjectsSection />
          <CreativeWorksSection />
          <AboutSection />
          <ConnectWithMeSection />
          <SendMessageSection />
        </div>
      </main>
    </>
  );
}
