import Link from 'next/link';
import {
  BookOpen,
  Music,
  ExternalLink,
  MessageSquare,
  Instagram,
  FlaskConical,
} from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Carousel } from '@/components/ui/carousel';
import { creativeWorks } from '@/data/creative-works';
import { formatDistanceToNow } from 'date-fns';

const typeConfig = {
  writing: {
    label: 'Medium Post',
    icon: BookOpen,
    color: 'text-[hsl(var(--vegeta-blue))]',
  },
  music: {
    label: 'Music',
    icon: Music,
    color: 'text-[hsl(var(--primary))]',
  },
  thread: {
    label: 'Threads Post',
    icon: MessageSquare,
    color: 'text-[hsl(var(--gold))]',
  },
  reel: {
    label: 'Instagram Reel',
    icon: Instagram,
    color: 'text-pink-500',
  },
  living: {
    label: 'Living Entry',
    icon: FlaskConical,
    color: 'text-purple-700 dark:text-purple-300',
  },
} as const;

const buttonLabels = {
  writing: 'Read Post',
  music: 'Listen',
  thread: 'View Post',
  reel: 'Watch Reel',
  living: 'Explore Entry',
} as const;

export function CreativeWorksSection() {
  const sortedWorks = [...creativeWorks].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section
      id="creative-works"
      className="py-20 md:py-28 lg:py-36 scroll-mt-20 bg-[hsl(var(--muted))] overflow-x-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--muted))]/50" />
      <div className="container space-y-10 md:space-y-12 fade-in relative">
        <div>
          <SectionHeader
            icon={<BookOpen className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Creative Works"
          />
          <p className="text-body-large text-muted-foreground max-w-[600px] mt-6">
            Beyond code, I explore ideas through writing, music, and social media. These creative
            works reflect my journey of growth, leadership, and self-discovery.
          </p>
        </div>
        <Carousel>
          {sortedWorks.map((work, index) => {
            const config = typeConfig[work.type];
            const Icon = config.icon;

            return (
              <div key={index}>
                <div className="h-full min-h-[340px] flex flex-col justify-between bg-white dark:bg-background shadow-md rounded-xl p-8 md:p-10 gap-6 transition-all duration-300 hover:shadow-lg focus-within:shadow-lg border border-border/50 hover:border-border">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className={config.color}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className={`text-base font-semibold ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-left leading-snug">
                      {work.title}
                    </div>
                    {work.date && (
                      <p className="text-xs md:text-sm text-muted-foreground text-left">
                        {formatDistanceToNow(new Date(work.date), { addSuffix: true })}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 flex items-start">
                    <p className="text-base text-muted-foreground text-left leading-relaxed line-clamp-5">
                      {work.description}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-primary/20 hover:bg-primary/10 dark:text-foreground mt-2"
                  >
                    <Link href={work.url} target="_blank" rel="noopener noreferrer">
                      {buttonLabels[work.type]}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
