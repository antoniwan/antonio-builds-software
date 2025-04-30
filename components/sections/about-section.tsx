import { User } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-background relative scroll-mt-20"
    >
      <div className="container space-y-8 md:space-y-10">
        <div className="flex items-center justify-center md:justify-start fade-in">
          <SectionHeader icon={<User className="h-6 w-6 text-brand-gold" />} title="About Me" />
        </div>
        <div className="text-muted-foreground fade-in space-y-6">
          <p className="text-body">
            I&apos;m Antonio—a builder at the intersection of systems, soul, and sweat. I create
            things that work: robust software, emotionally grounded mentorship models, savage guitar
            riffs, games for my daughter about foxes and magical fruit, and t-shirts durable enough
            to survive a jungle or a mosh pit. I&apos;m not in this to go viral. I&apos;m in this to
            leave a legacy.
          </p>
          <p className="text-body">
            My hands know code, lumber, dough, drumsticks, and dumbbells. My heart knows failure,
            fatherhood, loyalty, and repair. I&apos;m not trying to &quot;balance&quot; opposites—I
            integrate them.
          </p>
          <p className="text-body">
            I&apos;ve worn a lot of titles over the years: Full-Stack Dev, Architect, CTO,
            Engineering Manager, and now Technical Program Manager at a global hardware company. But
            my journey started with a bootstrapped web dev agency in college—just me and a friend,
            learning how to write clean code and clean invoices. We got acquired by a marketing
            firm, and even though the payout wasn&apos;t huge, the learning was priceless. I found
            that chaos was my co-pilot—especially in the agency world, where I once built a custom
            API parser overnight because a client emailed at 4 PM asking, &quot;Can you integrate
            this obscure Belgian protocol by tomorrow morning?&quot; Challenge accepted. I still
            smile thinking about those 2 AM commits fueled by bad coffee and raw willpower.
          </p>
          <p className="text-body">
            Through all that, I built a personal philosophy: technical excellence means nothing
            without human values—integrity, empathy, humility. Diverse, psychologically safe teams
            ship better software. Full stop.
          </p>
          <p className="text-body">
            Today, I channel that experience through{' '}
            <a
              href="https://www.stronghandssoftheart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              Strong Hands, Soft Heart LLC
            </a>
            , my personal umbrella for creative and entrepreneurial work. It&apos;s not just a
            brand—it&apos;s a way of life. Under it, I&apos;m:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Building a regenerative homestead in Puerto Rico with my daughter, planting fruit
              trees and designing a self-sustaining, beautiful life.
            </li>
            <li>
              Crafting artisanal soap boxes and screen-printed apparel by hand (yes, the screen
              printer is real).
            </li>
            <li>
              Recording metal albums with friends, asynchronously, sometimes at midnight, sometimes
              between meetings.
            </li>
            <li>
              Designing sacred mentorship spaces for men who want to evolve—without the gimmicks,
              just presence and real work.
            </li>
          </ul>
          <p className="text-body">
            My creative life is as chaotic as ever. I write almost every day—essays, ideas, poems,
            documentation. I train like a monk-warrior: basketball for joy, weights for strength,
            martial arts for discipline. I cook whole foods not because I&apos;m a health bro—I
            still cave for pizza—but because my brain works better when I treat my body with
            respect. I parent two kids who call me out whenever my words and actions don&apos;t
            align. They keep me honest. I keep showing up.
          </p>
          <p className="text-body">
            I&apos;ve rebuilt my life post-divorce, restructured my values, and realized that
            presence &gt; perfection. Therapy, breathwork, and lifting heavy things all help.
            I&apos;ve learned that being &quot;strong&quot; is hollow without gentleness, and that
            execution matters more than talking about it.
          </p>
          <p className="text-body">
            Legacy to me isn&apos;t some vague future thing—it&apos;s built in the small, daily
            reps. It&apos;s in how I treat others, how I show up when no one is watching, and how I
            translate love into systems that endure beyond me.
          </p>
          <p className="text-body">
            I&apos;m not interested in playing small. I&apos;m here to build.
          </p>
        </div>
      </div>
    </section>
  );
}
