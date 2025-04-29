import { User } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-white dark:bg-background relative">
      <div className="container space-y-6 md:space-y-8">
        <div className="flex items-center justify-center md:justify-start fade-in">
          <SectionHeader
            icon={<User className="h-6 w-6 text-[hsl(var(--vegeta-blue))]" />}
            title="About Me"
          />
        </div>
        <div className="text-muted-foreground fade-in space-y-4 text-sm md:text-base lg:text-lg">
          <p>
            I'm Antonio—a builder at the intersection of systems, soul, and sweat. I create things
            that work: robust software, emotionally grounded mentorship models, savage guitar riffs,
            games for my daughter about foxes and magical fruit, and t-shirts durable enough to
            survive a jungle or a mosh pit. I'm not in this to go viral. I'm in this to leave a
            legacy.
          </p>
          <p>
            My hands know code, lumber, dough, drumsticks, and dumbbells. My heart knows failure,
            fatherhood, loyalty, and repair. I'm not trying to "balance" opposites—I integrate them.
          </p>
          <p>
            I've worn a lot of titles over the years: Full-Stack Dev, Architect, CTO, Engineering
            Manager, and now Technical Program Manager at a global hardware company. But my journey
            started with a bootstrapped web dev agency in college—just me and a friend, learning how
            to write clean code and clean invoices. We got acquired by a marketing firm, and even
            though the payout wasn't huge, the learning was priceless. I found that chaos was my
            co-pilot—especially in the agency world, where I once built a custom API parser
            overnight because a client emailed at 4 PM asking, "Can you integrate this obscure
            Belgian protocol by tomorrow morning?" Challenge accepted. I still smile thinking about
            those 2 AM commits fueled by bad coffee and raw willpower.
          </p>
          <p>
            Through all that, I built a personal philosophy: technical excellence means nothing
            without human values—integrity, empathy, humility. Diverse, psychologically safe teams
            ship better software. Full stop.
          </p>
          <p>
            Today, I channel that experience through{' '}
            <a
              href="https://www.stronghandssoftheart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--vegeta-blue))] hover:underline"
            >
              Strong Hands, Soft Heart LLC
            </a>
            , my personal umbrella for creative and entrepreneurial work. It's not just a brand—it's
            a way of life. Under it, I'm:
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
          <p>
            My creative life is as chaotic as ever. I write almost every day—essays, ideas, poems,
            documentation. I train like a monk-warrior: basketball for joy, weights for strength,
            martial arts for discipline. I cook whole foods not because I'm a health bro—I still
            cave for pizza—but because my brain works better when I treat my body with respect. I
            parent two kids who call me out whenever my words and actions don't align. They keep me
            honest. I keep showing up.
          </p>
          <p>
            I've rebuilt my life post-divorce, restructured my values, and realized that presence
            &gt; perfection. Therapy, breathwork, and lifting heavy things all help. I've learned
            that being "strong" is hollow without gentleness, and that execution matters more than
            talking about it.
          </p>
          <p>
            Legacy to me isn't some vague future thing—it's built in the small, daily reps. It's in
            how I treat others, how I show up when no one is watching, and how I translate love into
            systems that endure beyond me.
          </p>
          <p>I'm not interested in playing small. I'm here to build.</p>
        </div>
      </div>
    </section>
  );
}
