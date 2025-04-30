'use client';

import Image from 'next/image';
import { useScrollToSection } from '@/components/scroll-to-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Mail, Star, Trophy } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div
            className="space-y-6 md:space-y-8 fade-in text-center md:text-left"
            style={{ animationDelay: '0.1s' }}
          >
            <Badge className="mb-2 bg-[hsl(var(--gold-light))] text-[hsl(var(--gold-dark))] hover:bg-[hsl(var(--gold-light))]">
              <Star className="h-3 w-3 mr-1" /> Available for new projects
            </Badge>
            <h1 className="text-display tri-gradient">I build systems. Quietly. Powerfully.</h1>
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
