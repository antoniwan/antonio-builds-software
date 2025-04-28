"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { SocialLinksSection } from "@/components/sections/social-links-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CreativeWorksSection } from "@/components/sections/creative-works-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <StructuredData />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SocialLinksSection />
        <ProjectsSection />
        <CreativeWorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

