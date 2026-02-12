import { Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

const principles = [
  {
    title: 'Systems over shortcuts',
    description:
      'Robust, maintainable systems over quick fixes. Technical debt compounds.',
  },
  {
    title: 'Thoughtful development',
    description:
      'Deliberate over rushed. Quality emerges from clarity, not urgency.',
  },
  {
    title: 'Clear code',
    description:
      'Code that does what it says. No hidden side effects, no clever tricks.',
  },
  {
    title: 'Code as communication',
    description:
      'Readable by machines and humans. Documentation is part of the work.',
  },
  {
    title: 'Maintainable design',
    description:
      'Built for the future. Systems others can understand, maintain, and extend.',
  },
];

export function PrinciplesSection() {
  return (
    <section id="principles" className="py-20 md:py-28 lg:py-36 scroll-mt-20">
      <div className="container space-y-10 md:space-y-12">
        <div>
          <SectionHeader
            icon={<Sparkles className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Principles"
          />
        </div>
        <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={index}
              className="box box-radius-lg box-elevation-1 box-padding-lg box-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-heading-3 text-brand-blue">{principle.title}</h3>
              <p className="text-body text-muted-foreground">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
