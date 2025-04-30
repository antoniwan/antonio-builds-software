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

export function SocialLinksSection() {
  return (
    <section id="social-links" className="py-12 md:py-16 lg:py-24 scroll-mt-20">
      <div className="container">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mt-6 md:mt-8 social-links-grid">
          <Link
            href="https://www.linkedin.com/in/antoniwan/"
            className="flex flex-col items-center p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in social-link"
            style={{ animationDelay: '0.1s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon">
              <Linkedin className="h-5 w-5 mb-2 text-[hsl(var(--vegeta-blue))]" />
            </div>
            <span className="text-caption font-medium text-center">LinkedIn</span>
          </Link>

          <Link
            href="https://www.instagram.com/antoniwan777/"
            className="flex flex-col items-center p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.2s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Instagram</span>
          </Link>

          <Link
            href="https://www.threads.net/@antoniwan777"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.3s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Threads</span>
          </Link>

          <Link
            href="https://bsky.app/profile/antoniwan.bsky.social"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.4s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Bluesky</span>
          </Link>

          <Link
            href="https://github.com/antoniwan"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.5s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">GitHub</span>
          </Link>

          <Link
            href="https://codepen.io/antoniwan"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.6s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodepenIcon className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">CodePen</span>
          </Link>

          <Link
            href="mailto:antonio@builds.software"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            <Mail className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Email Me</span>
          </Link>

          <Link
            href="https://wizards777.medium.com"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.8s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Medium</span>
          </Link>

          <Link
            href="https://www.goodreads.com/antoniwan"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '0.9s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Goodreads</span>
          </Link>

          <Link
            href="https://www.stronghandssoftheart.com?utm_source=antonio-builds-software&utm_medium=link&utm_campaign=social-links-section"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '1s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Building2 className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">SH&SH</span>
          </Link>

          <Link
            href="https://patreon.com/antoniwan"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: '1.1s' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heart className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Support Me</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
