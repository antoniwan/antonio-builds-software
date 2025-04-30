'use client';

import Link from 'next/link';
import {
  Code,
  User,
  BookOpen,
  ExternalLink,
  Sparkles,
  Copyright,
  MessageSquare,
} from 'lucide-react';
import { useScrollToSection } from '@/components/scroll-to-section';

export function Footer() {
  const scrollToSection = useScrollToSection();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-4 md:py-6 border-t-[hsl(var(--vegeta-blue-light))]">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Copyright className="h-3 w-3 text-muted-foreground" />
              <p className="text-caption text-muted-foreground">
                {currentYear} Antonio Rodriguez Martinez
              </p>
            </div>
            <p className="text-[0.7rem] text-muted-foreground/80">Built with love from 🇵🇷 and 🇺🇸</p>
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-caption text-muted-foreground hover:text-[hsl(var(--vegeta-blue))] hover:underline underline-offset-4 flex items-center gap-1"
            >
              <Code className="h-3 w-3 text-[hsl(var(--vegeta-blue))]" />
              Projects
            </button>
            <button
              onClick={() => scrollToSection('creative-works')}
              className="text-caption text-muted-foreground hover:text-[hsl(var(--gold))] hover:underline underline-offset-4 flex items-center gap-1"
            >
              <Sparkles className="h-3 w-3 text-[hsl(var(--gold))]" />
              Creative Works
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-caption text-muted-foreground hover:text-[hsl(var(--vegeta-blue))] hover:underline underline-offset-4 flex items-center gap-1"
            >
              <User className="h-3 w-3 text-[hsl(var(--vegeta-blue))]" />
              About Me
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-caption text-muted-foreground hover:text-[hsl(var(--vegeta-blue))] hover:underline underline-offset-4 flex items-center gap-1"
            >
              <MessageSquare className="h-3 w-3 text-[hsl(var(--vegeta-blue))]" />
              Contact
            </button>
            <Link
              href="https://medium.com/@antonio.builds.software"
              className="text-caption text-muted-foreground hover:text-[hsl(var(--vegeta-blue))] hover:underline underline-offset-4 flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="h-3 w-3 text-[hsl(var(--vegeta-blue))]" />
              Blog
              <ExternalLink className="h-2.5 w-2.5 text-muted-foreground" aria-hidden="true" />
            </Link>
          </nav>
        </div>

        <div className="flex justify-center md:justify-end mt-6">
          <Link
            href="https://v0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs border border-border/40 shadow-sm transition-colors hover:bg-accent/50 group"
          >
            <Sparkles className="h-3 w-3 text-[hsl(var(--primary))]" />
            <span className="font-medium">
              Built with <span className="text-[hsl(var(--vegeta-blue))]">v0</span> by{' '}
              <span className="text-[hsl(var(--gold))]">Vercel</span>
            </span>
            <ExternalLink className="h-2.5 w-2.5 text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
