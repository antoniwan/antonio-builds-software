'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { AboutSiteSection } from '@/components/sections/about-site-section';
import { PrinciplesSection } from '@/components/sections/principles-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CreativeWorksSection } from '@/components/sections/creative-works-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { StructuredData } from '@/components/structured-data';

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="flex-1">
        <HeroSection />
        <AboutSiteSection />
        <PrinciplesSection />
        <ProjectsSection />
        <CreativeWorksSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
