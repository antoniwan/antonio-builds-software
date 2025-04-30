'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Code,
  Menu,
  User,
  ExternalLink,
  Globe,
  Lightbulb,
  Heart,
  MessageSquare,
  Sparkles,
  Rocket,
  Palette,
  Brain,
  Handshake,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { useScrollToSection } from '@/components/scroll-to-section';

export function Header() {
  const scrollToSection = useScrollToSection();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 scroll-mt-20">
      <div className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-medium flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Code className="h-4 w-4 text-brand-blue" />
          <span className="font-heading font-semibold">
            <span className="text-primary">Builds</span>
            <span className="text-brand-gold">.Software</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about-site')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 flex items-center gap-1"
            aria-label="Navigate to About Site section"
          >
            <Sparkles className="h-4 w-4 text-brand-blue" />
            About Site
          </button>
          <button
            onClick={() => scrollToSection('principles')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 flex items-center gap-1"
            aria-label="Navigate to Principles section"
          >
            <Brain className="h-4 w-4 text-brand-blue" />
            Principles
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 flex items-center gap-1"
            aria-label="Navigate to Projects section"
          >
            <Rocket className="h-4 w-4 text-brand-blue" />
            Projects
          </button>
          <button
            onClick={() => scrollToSection('creative-works')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 flex items-center gap-1"
            aria-label="Navigate to Creative Works section"
          >
            <Palette className="h-4 w-4 text-brand-blue" />
            Creative Works
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 flex items-center gap-1"
            aria-label="Navigate to About section"
          >
            <User className="h-4 w-4 text-brand-blue" />
            About Me
          </button>
          <button
            onClick={() => scrollToSection('connect')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 flex items-center gap-1"
            aria-label="Navigate to Connect section"
          >
            <Handshake className="h-4 w-4 text-brand-blue" />
            Connect
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="z-[100]">
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              <div className="space-y-4 pt-4 border-t">
                <button
                  onClick={() => handleNavClick('about-site')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors flex items-center gap-2 text-left w-full"
                  aria-label="Navigate to About Site section"
                >
                  <Sparkles className="h-5 w-5 text-brand-blue" />
                  About Site
                </button>
                <button
                  onClick={() => handleNavClick('principles')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors flex items-center gap-2 text-left w-full"
                  aria-label="Navigate to Principles section"
                >
                  <Brain className="h-5 w-5 text-brand-blue" />
                  Principles
                </button>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors flex items-center gap-2 text-left w-full"
                  aria-label="Navigate to Projects section"
                >
                  <Rocket className="h-5 w-5 text-brand-blue" />
                  Projects
                </button>
                <button
                  onClick={() => handleNavClick('creative-works')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors flex items-center gap-2 text-left w-full"
                  aria-label="Navigate to Creative Works section"
                >
                  <Palette className="h-5 w-5 text-brand-blue" />
                  Creative Works
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors flex items-center gap-2 text-left w-full"
                  aria-label="Navigate to About section"
                >
                  <User className="h-5 w-5 text-brand-blue" />
                  About Me
                </button>
                <button
                  onClick={() => handleNavClick('connect')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors flex items-center gap-2 text-left w-full"
                  aria-label="Navigate to Connect section"
                >
                  <Handshake className="h-5 w-5 text-brand-blue" />
                  Connect
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
