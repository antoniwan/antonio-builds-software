import { Globe } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export function AboutSiteSection() {
  return (
    <section
      id="about-site"
      className="py-20 md:py-28 lg:py-36 bg-white dark:bg-background relative scroll-mt-20"
    >
      <div className="container space-y-10 md:space-y-12">
        <div>
          <SectionHeader
            icon={<Globe className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="About This Site"
          />
        </div>
        <div className="text-muted-foreground fade-in space-y-6">
          <p className="text-body">
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
