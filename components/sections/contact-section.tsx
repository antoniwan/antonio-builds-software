import Link from 'next/link';
import { Briefcase, Mail, Linkedin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/section-header';
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 scroll-mt-20 bg-[hsl(var(--muted))]">
      <div className="container space-y-12">
        <div className="text-center space-y-6 fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <SectionHeader
              icon={<Briefcase className="h-6 w-6 text-[hsl(var(--gold))]" />}
              title="Building Connections"
              className="mb-0"
            />
          </div>
          <p className="text-body-large text-muted-foreground max-w-[600px] mx-auto">
            Just like code, meaningful connections start with a simple hello. Whether you&apos;re
            looking for technical expertise or just want to exchange ideas over virtual coffee, hit
            me up anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              asChild
              className="rounded-full px-6 md:px-8 shadow-md hover:shadow-lg transition-all bg-primary hover:bg-primary/90"
            >
              <Link href="mailto:antonio@builds.software">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="rounded-full px-6 md:px-8 shadow-md hover:shadow-lg transition-all bg-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-dark))]"
            >
              <Link
                href="https://www.linkedin.com/in/antoniwan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="rounded-full px-6 md:px-8 shadow-md hover:shadow-lg transition-all bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))]"
            >
              <Link
                href="https://www.patreon.com/c/antoniwan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support on Patreon
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
