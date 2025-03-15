"use client";

import { useState } from "react";
import Link from "next/link";
import { Code, Menu, User, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useScrollToSection } from "@/components/scroll-to-section";

export function Header() {
  const scrollToSection = useScrollToSection();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-medium flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Code className="h-4 w-4 text-[hsl(var(--vegeta-blue))]" />
          <span className="font-heading font-semibold">
            antonio<span className="text-[hsl(var(--primary))]">.builds</span>
            <span className="text-[hsl(var(--gold))]">.software</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-body-small text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <Code className="h-4 w-4 text-[hsl(var(--vegeta-blue))]" />
            Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-body-small text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <User className="h-4 w-4 text-[hsl(var(--vegeta-blue))]" />
            About Me
          </button>
          <Link
            href="https://medium.com/@wizards777"
            className="text-body-small text-muted-foreground hover:text-foreground flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-4 w-4 text-[hsl(var(--vegeta-blue))]" />
            Blog
            <ExternalLink
              className="h-3 w-3 ml-1 text-muted-foreground"
              aria-hidden="true"
            />
          </Link>
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
                  onClick={() => handleNavClick("projects")}
                  className="text-body-large font-medium hover:text-primary transition-colors flex items-center gap-2 text-left w-full"
                >
                  <Code className="h-5 w-5 text-[hsl(var(--vegeta-blue))]" />
                  Projects
                </button>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-body-large font-medium hover:text-primary transition-colors flex items-center gap-2 text-left w-full"
                >
                  <User className="h-5 w-5 text-[hsl(var(--vegeta-blue))]" />
                  About Me
                </button>
                <Link
                  href="https://medium.com/@wizards777"
                  className="text-body-large font-medium hover:text-primary transition-colors flex items-center gap-2 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <BookOpen className="h-5 w-5 text-[hsl(var(--vegeta-blue))]" />
                  Blog
                  <ExternalLink
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
