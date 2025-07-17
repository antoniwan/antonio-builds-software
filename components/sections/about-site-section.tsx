import { Globe } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export function AboutSiteSection() {
  return (
    <section
      id="about-site"
      className="py-24 md:py-32 lg:py-40 bg-white dark:bg-background relative scroll-mt-20"
    >
      <div className="container space-y-12 md:space-y-16">
        <div>
          <SectionHeader
            icon={<Globe className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="About This Site"
          />
        </div>
        <div className="text-muted-foreground fade-in space-y-6">
          <p className="text-body">
          This is my technical portfolio showcasing my work in full-stack development, technical program management, and software systems.
          </p>
        </div>
      </div>
    </section>
  );
}
