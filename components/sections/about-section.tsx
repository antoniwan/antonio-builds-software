import { User } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 lg:py-36 bg-white dark:bg-background relative scroll-mt-20"
    >
      <div className="container space-y-10 md:space-y-12">
        <div>
          <SectionHeader
            icon={<User className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="About Me"
          />
        </div>
        <div className="text-muted-foreground fade-in space-y-8">
          <div className="space-y-4">
            <p className="text-body">
              I&apos;m <strong>Antonio</strong>—Technical Program Manager at Stanley Black & Decker and former CTO. I build tools, platforms, and systems that work for both people and infrastructure. I ship with LLMs, AI orchestration, and modern tooling (v0, Cursor, Copilot) while keeping clarity and control. I still write code.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">How I work</h3>
            <p className="text-body">
              Systems over shortcuts. Humans over hype. I listen and map your reality first, design
              the smallest honest plan, then build, ship, and teach so your team can maintain the
              work. AI and LLM orchestration when it reduces load—not when it adds noise.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Professional Background</h3>
            <p className="text-body">
              My journey started with a bootstrapped web dev agency in college with a friend, learning to write clean code and manage client projects. We were acquired by a marketing firm, providing valuable experience in fast-paced environments where I built custom solutions under tight deadlines.
            </p>
            <p className="text-body">
              I&apos;ve worked across various roles: <strong>Full-Stack Dev</strong>, <strong>Architect</strong>, <strong>CTO</strong>, <strong>Engineering Manager</strong>, and now <strong>Technical Program Manager</strong> at a global hardware company. Through this experience, I&apos;ve developed a philosophy that technical excellence works best when combined with strong team dynamics and psychological safety.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Current Projects</h3>
            <p className="text-body">
              Aside from my salaried position, I run <strong>Strong Hands, Soft Heart LLC</strong>, my personal umbrella for creative and entrepreneurial work:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI enablement and LLM orchestration for teams</li>
              <li>Developing artisanal soap boxes and screen-printed apparel prototypes</li>
              <li>Recording metal albums with friends</li>
              <li>Designing mentorship programs for personal development</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Daily Practices</h3>
            <p className="text-body">
              I write almost daily—essays, ideas, documentation. I train regularly: basketball, weights, and martial arts. I cook whole foods and parent two kids. I&apos;ve rebuilt my life post-divorce and learned that presence and execution matter more than perfection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
