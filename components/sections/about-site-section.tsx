import { Globe } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export function AboutSiteSection() {
  return (
    <section
      id="about-site"
      className="py-12 md:py-16 lg:py-24 bg-white dark:bg-background relative"
    >
      <div className="container space-y-6 md:space-y-8">
        <div className="flex items-center fade-in">
          <SectionHeader
            icon={<Globe className="h-6 w-6 text-[hsl(var(--vegeta-blue))]" />}
            title="About This Site"
          />
        </div>
        <div className="text-muted-foreground fade-in space-y-4 text-sm md:text-base lg:text-lg max-w-3xl">
          <p>
            This is my digital workshop — where systems get built, tested, and launched. I
            specialize in full-stack development, technical program management, and building tools
            that last. This site reflects my move away from algorithmic platforms toward intentional
            creation and meaningful digital presence.
          </p>
        </div>
      </div>
    </section>
  );
}
