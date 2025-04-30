'use client';

import Image from 'next/image';
import { useScrollToSection } from '@/components/scroll-to-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Mail, Trophy } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="py-16 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div
            className="space-y-8 md:space-y-10 fade-in text-center md:text-left"
            style={{ animationDelay: '0.1s' }}
          >
            <Badge className="mb-2 bg-muted/80 text-muted-foreground hover:bg-muted text-[13px]">
              ⚠️ Currently not taking new projects
            </Badge>
            <h1 className="text-display tri-gradient">I build systems.</h1>
            <p className="text-body-large text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              Digital craftsman. Strategic partner. Builder of tools, platforms, and long-term
              ecosystems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection('projects')}
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                <Code className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="rounded-full border-[hsl(var(--vegeta-blue))] text-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-light))] hover:text-[hsl(var(--vegeta-blue-dark))]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Work With Me
              </Button>
            </div>
          </div>
          <div
            className="flex justify-center md:justify-end fade-in order-first md:order-last"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="profile-image relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 border-[hsl(var(--vegeta-blue))] shadow-lg">
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-[hsl(var(--gold))] text-white p-2 rounded-full shadow-md">
                  <Trophy className="h-5 w-5" />
                </div>
              </div>
              <Image
                src="/images/profile_cropped_square.avif"
                width={320}
                height={320}
                alt="Antonio Rodriguez Martinez"
                className="object-cover transition-all hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
