import { Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

const principles = [
  {
    title: 'Systems > shortcuts',
    description:
      'Building robust, maintainable systems that stand the test of time, rather than quick fixes that create technical debt.',
  },
  {
    title: 'Calm > chaos',
    description:
      'Prioritizing thoughtful, deliberate development over rushed solutions. Quality emerges from clarity, not urgency.',
  },
  {
    title: 'Truth in function',
    description:
      'Code should be honest about what it does. No hidden side effects, no clever tricks at the expense of readability.',
  },
  {
    title: 'Tools are stories',
    description:
      'Every piece of software tells a story about its creators. We write code that reflects our values and intentions.',
  },
  {
    title: 'Code as communication',
    description:
      "Writing code that speaks clearly to both machines and humans. Documentation is not an afterthought—it's part of the craft.",
  },
  {
    title: 'Legacy by design',
    description:
      'Building with the future in mind. Creating systems that others can understand, maintain, and build upon.',
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
