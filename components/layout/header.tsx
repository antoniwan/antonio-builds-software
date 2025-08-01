'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Code, Menu, User, Sparkles, Rocket, Palette, Brain, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';

export function Header() {
  const scrollToSection = useScrollToSection();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsSheetOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 scroll-mt-20"
      role="banner"
    >
      <div className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-medium flex items-center gap-2 hover:text-primary transition-colors"
          aria-label="Home"
          role="link"
        >
          <Code className="h-4 w-4 text-brand" aria-hidden="true" />
          <span className="font-heading font-semibold">
            <span className="text-primary">Builds</span>
            <span className="text-brand-gold">.Software</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          role="navigation"
          aria-label="Main navigation"
        >
          <button
            onClick={() => scrollToSection('principles')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-3 py-1.5 flex items-center gap-2 transition-colors duration-200"
            aria-label="Navigate to Principles section"
            role="link"
            tabIndex={0}
          >
            <Brain className="h-4 w-4 text-brand" aria-hidden="true" />
            Principles
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-3 py-1.5 flex items-center gap-2 transition-colors duration-200"
            aria-label="Navigate to Projects section"
            role="link"
            tabIndex={0}
          >
            <Rocket className="h-4 w-4 text-brand" aria-hidden="true" />
            Projects
          </button>
          <button
            onClick={() => scrollToSection('creative-works')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-3 py-1.5 flex items-center gap-2 transition-colors duration-200"
            aria-label="Navigate to Creative Works section"
            role="link"
            tabIndex={0}
          >
            <Palette className="h-4 w-4 text-brand" aria-hidden="true" />
            Creative Works
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-3 py-1.5 flex items-center gap-2 transition-colors duration-200"
            aria-label="Navigate to About section"
            role="link"
            tabIndex={0}
          >
            <User className="h-4 w-4 text-brand" aria-hidden="true" />
            About Me
          </button>
          <button
            onClick={() => scrollToSection('connect')}
            className="text-body-small text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-md px-3 py-1.5 flex items-center gap-2 transition-colors duration-200"
            aria-label="Navigate to Connect section"
            role="link"
            tabIndex={0}
          >
            <Handshake className="h-4 w-4 text-brand" aria-hidden="true" />
            Connect
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
              aria-expanded={isSheetOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[280px] sm:w-[300px] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div
              className="flex flex-col gap-4 mt-8"
              role="navigation"
              id="mobile-navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('principles')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-lg px-4 py-3 transition-colors duration-200 flex items-center gap-3 text-left w-full active:bg-accent/50"
                  aria-label="Navigate to Principles section"
                >
                  <Brain className="h-5 w-5 text-brand" />
                  Principles
                </button>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-lg px-4 py-3 transition-colors duration-200 flex items-center gap-3 text-left w-full active:bg-accent/50"
                  aria-label="Navigate to Projects section"
                >
                  <Rocket className="h-5 w-5 text-brand" />
                  Projects
                </button>
                <button
                  onClick={() => handleNavClick('creative-works')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-lg px-4 py-3 transition-colors duration-200 flex items-center gap-3 text-left w-full active:bg-accent/50"
                  aria-label="Navigate to Creative Works section"
                >
                  <Palette className="h-5 w-5 text-brand" />
                  Creative Works
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-lg px-4 py-3 transition-colors duration-200 flex items-center gap-3 text-left w-full active:bg-accent/50"
                  aria-label="Navigate to About section"
                >
                  <User className="h-5 w-5 text-brand" />
                  About Me
                </button>
                <button
                  onClick={() => handleNavClick('connect')}
                  className="text-body-large font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-lg px-4 py-3 transition-colors duration-200 flex items-center gap-3 text-left w-full active:bg-accent/50"
                  aria-label="Navigate to Connect section"
                >
                  <Handshake className="h-5 w-5 text-brand" />
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
