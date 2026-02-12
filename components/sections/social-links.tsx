import Link from 'next/link';
import {
  Github,
  Linkedin,
  Building2,
  BookOpen,
  Heart,
  MessageSquare,
  Sparkles,
  Code,
  Briefcase,
  FileText,
} from 'lucide-react';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';

const socialLinks = [
  {
    href: 'https://consulting.stronghandssoftheart.com/',
    icon: Briefcase,
    label: 'Consulting',
    delay: '0.1s',
    ariaLabel: 'Work with me — consulting services',
    isAction: true,
  },
  {
    href: 'https://notes.stronghandssoftheart.com/',
    icon: FileText,
    label: 'Notes',
    delay: '0.15s',
    ariaLabel: 'Read my notes on systems, psychology, and leadership',
  },
  {
    href: 'https://antoniwan.online/',
    icon: Sparkles,
    label: 'Link Forest',
    delay: '0.2s',
    ariaLabel: 'Visit my Link Forest - a fast, privacy-focused link hub',
  },
  {
    href: 'https://www.stronghandssoftheart.com',
    icon: Building2,
    label: 'SH&SH',
    delay: '0.25s',
    ariaLabel: 'Visit Strong Hands Soft Heart - my core brand and business presence',
  },
  {
    href: 'https://www.linkedin.com/in/antoniwan/',
    icon: Linkedin,
    label: 'LinkedIn',
    delay: '0.4s',
  },
  {
    href: 'https://github.com/antoniwan',
    icon: Github,
    label: 'GitHub',
    delay: '0.5s',
  },
  {
    href: 'https://codepen.io/antoniwan',
    icon: Code,
    label: 'CodePen',
    delay: '0.9s',
    ariaLabel: 'Explore my creative experiments and UI demos',
  },
  {
    href: 'https://www.goodreads.com/antoniwan',
    icon: BookOpen,
    label: 'Goodreads',
    delay: '1.0s',
  },
  {
    href: 'https://patreon.com/antoniwan',
    icon: Heart,
    label: 'Support Me',
    delay: '1.1s',
    ariaLabel: 'Support me on Patreon',
  },
  {
    href: '#message',
    icon: MessageSquare,
    label: 'Message',
    delay: '1.2s',
    isAction: true,
    ariaLabel: 'Scroll to contact form',
  },
];

export function SocialLinks() {
  const scrollToSection = useScrollToSection();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex flex-col items-center p-4 md:p-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring active:scale-95 ${
            link.isAction
              ? 'bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-background'
              : 'bg-background hover:bg-accent/50'
          }`}
          style={{ animationDelay: link.delay }}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={link.ariaLabel || `Visit ${link.label}`}
          role="link"
          tabIndex={0}
          onClick={(e) => {
            if (link.href.startsWith('#')) {
              e.preventDefault();
              scrollToSection(link.href.slice(1));
            }
          }}
        >
          <link.icon
            className={`h-6 w-6 md:h-6 md:w-6 mb-2 ${
              link.isAction ? 'text-background' : 'text-[hsl(var(--vegeta-blue))]'
            }`}
            aria-hidden="true"
          />
          <span className="text-caption font-medium text-center">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
