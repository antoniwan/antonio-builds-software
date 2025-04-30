'use client';

import Image from 'next/image';
import { useScrollToSection } from '@/components/scroll-to-section';
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
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {displayText}
    </motion.span>
  );
};

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="py-20 md:py-28 lg:py-36 scroll-mt-20">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
          <motion.div
            className="space-y-10 md:space-y-12 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-3 bg-muted/80 text-muted-foreground hover:bg-muted text-sm font-medium">
                ⚠️ Currently not taking new projects
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight tri-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypewriterText text="I build systems." />
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Digital craftsman. Strategic partner. Builder of tools, platforms, and long-term
              ecosystems.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
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
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end order-first md:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="profile-image relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 border-[hsl(var(--vegeta-blue))] shadow-lg">
              <motion.div
                className="absolute top-0 right-0 z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="bg-[hsl(var(--gold))] text-white p-2 rounded-full shadow-md">
                  <Trophy className="h-5 w-5" />
                </div>
              </motion.div>
              <Image
                src="/images/profile_cropped_square.avif"
                width={320}
                height={320}
                alt="Antonio Rodriguez Martinez"
                className="object-cover transition-all hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
