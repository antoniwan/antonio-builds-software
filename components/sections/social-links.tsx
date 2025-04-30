import Link from 'next/link';
import {
  Github,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  FileText,
  Building2,
  Globe,
  BookOpen,
  Heart,
} from 'lucide-react';
import { CodepenIcon } from '@/components/icons/codepen-icon';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/antoniwan/',
    icon: Linkedin,
    label: 'LinkedIn',
    delay: '0.1s',
  },
  {
    href: 'https://www.instagram.com/antoniwan777/',
    icon: Instagram,
    label: 'Instagram',
    delay: '0.2s',
  },
  {
    href: 'https://www.threads.net/@antoniwan777',
    icon: MessageCircle,
    label: 'Threads',
    delay: '0.3s',
  },
  {
    href: 'https://bsky.app/profile/antoniwan.bsky.social',
    icon: Globe,
    label: 'Bluesky',
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
    icon: CodepenIcon,
    label: 'CodePen',
    delay: '0.6s',
  },
  {
    href: 'mailto:antonio@builds.software',
    icon: Mail,
    label: 'Email Me',
    delay: '0.7s',
  },
  {
    href: 'https://wizards777.medium.com',
    icon: FileText,
    label: 'Medium',
    delay: '0.8s',
  },
  {
    href: 'https://www.goodreads.com/antoniwan',
    icon: BookOpen,
    label: 'Goodreads',
    delay: '0.9s',
  },
  {
    href: 'https://www.stronghandssoftheart.com?utm_source=antonio-builds-software&utm_medium=link&utm_campaign=social-links-section',
    icon: Building2,
    label: 'SH&SH',
    delay: '1s',
    ariaLabel: 'Visit Strong Hands Soft Heart website',
  },
  {
    href: 'https://patreon.com/antoniwan',
    icon: Heart,
    label: 'Support Me',
    delay: '1.1s',
    ariaLabel: 'Support me on Patreon',
  },
];

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex flex-col items-center p-4 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring active:scale-95"
          style={{ animationDelay: link.delay }}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={link.ariaLabel || `Visit ${link.label}`}
          role="link"
          tabIndex={0}
        >
          <link.icon
            className="h-6 w-6 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]"
            aria-hidden="true"
          />
          <span className="text-caption font-medium text-center">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
