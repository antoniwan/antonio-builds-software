'use client';

import Image from 'next/image';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Mail, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      role="presentation"
      aria-hidden="true"
    >
      {displayText}
    </motion.span>
  );
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="py-20 md:py-28 lg:py-36 scroll-mt-20" aria-label="Hero section">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
          <motion.div
            className="space-y-10 md:space-y-12 text-center md:text-left"
            {...fadeUp}
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Badge
                className="mb-3 bg-muted/80 text-muted-foreground hover:bg-muted text-sm font-medium"
                aria-label="Availability status"
              >
                ⚠️ Currently not taking new projects
              </Badge>
            </motion.div>
            <motion.h1
              className="text-display font-bold tracking-tight tri-gradient"
              {...fadeIn}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <TypewriterText text="I build systems." />
            </motion.h1>
            <motion.p
              className="text-body-large text-muted-foreground max-w-[600px] mx-auto md:mx-0"
              {...fadeUp}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Digital craftsman. Strategic partner. Builder of tools, platforms, and long-term
              ecosystems.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              {...fadeUp}
              transition={{
                delay: 1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="rounded-full bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-105 active:scale-95 px-6 py-6 md:py-4 text-base md:text-sm"
                aria-label="View my projects"
              >
                <Code className="mr-2 h-5 w-5 md:h-4 md:w-4" aria-hidden="true" />
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('message')}
                className="rounded-full border-[hsl(var(--vegeta-blue))] text-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-light))] hover:text-[hsl(var(--vegeta-blue-dark))] transition-transform duration-300 hover:scale-105 active:scale-95 px-6 py-6 md:py-4 text-base md:text-sm"
                aria-label="Contact me for work"
              >
                <Mail className="mr-2 h-5 w-5 md:h-4 md:w-4" aria-hidden="true" />
                Work With Me
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end order-first md:order-last"
            {...scaleIn}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            role="presentation"
          >
            <div
              className="profile-image relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 border-[hsl(var(--vegeta-blue))] shadow-lg"
              role="presentation"
            >
              <motion.div
                className="absolute top-0 right-0 z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                role="presentation"
              >
                <div
                  className="bg-[hsl(var(--gold))] text-white p-2 rounded-full shadow-md"
                  aria-label="Expertise badge"
                >
                  <Trophy className="h-5 w-5" aria-hidden="true" />
                </div>
              </motion.div>
              <Image
                src="/images/profile_cropped_square.avif"
                width={320}
                height={320}
                alt="Antonio Rodriguez Martinez"
                className="object-cover transition-all duration-500 hover:scale-105"
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHh4eHRoaHSQtJSEkLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
