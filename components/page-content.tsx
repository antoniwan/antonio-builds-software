'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { PrinciplesSection } from '@/components/sections/principles-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CreativeWorksSection } from '@/components/sections/creative-works-section';
import { AboutSection } from '@/components/sections/about-section';
import { ConnectWithMeSection } from '@/components/sections/connect-with-me-section';
import { SendMessageSection } from '@/components/sections/send-message-section';

export function PageContent() {
  return (
    <main className="flex-1">
      <div className="space-y-20 md:space-y-28 lg:space-y-36">
        <HeroSection />
        <PrinciplesSection />
        <ProjectsSection />
        <CreativeWorksSection />
        <AboutSection />
        <ConnectWithMeSection />
        <SendMessageSection />
      </div>
    </main>
  );
}
