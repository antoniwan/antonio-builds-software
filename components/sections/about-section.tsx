import { User } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-24 bg-white dark:bg-background relative"
    >
      <div className="container space-y-6 md:space-y-8">
        <div className="flex items-center justify-center md:justify-start fade-in">
          <SectionHeader icon={<User className="h-6 w-6 text-[hsl(var(--vegeta-blue))]" />} title="About Me" />
        </div>
        <div className="text-muted-foreground fade-in space-y-4 text-sm md:text-base lg:text-lg">
          <p>
            I&apos;m Antonio—a builder at heart with a natural curiosity for how things work. My greatest joy comes from
            creating useful things, not just code. One day I&apos;m crafting elegant software architecture, the next I&apos;m
            inventing basketball plays that actually work against my friends, or perfecting a &quot;caveman&quot; style lamb and
            veggie dish. I create imaginative games for my 5-year-old daughter that usually involve a fox eating some
            magic fruit. And yes, after thousands of repetitions, I&apos;ve developed some frighteningly effective
            self-defense combos that I hope to never use. There&apos;s something magical about transforming abstract ideas
            into tangible reality—whether digital, culinary, playful, physical, techniques, habits, or paradigms—and I&apos;m
            fortunate to do this every day.
          </p>
          <p>
            My journey began in college when a friend and I launched a web development company that was later acquired
            by a marketing firm. While more educational than profitable, this venture shaped my professional philosophy:
            technical excellence must be balanced with human values—integrity, empathy, and inclusivity. I&apos;ve found that
            diverse, psychologically safe teams consistently produce quality and cost-effective solutions.
          </p>
          <p>
            The agency world taught me to thrive in chaos and uncertainty. I still smile thinking about those impossible
            deadlines and wild client requests that had us learning new technologies overnight. &quot;Can you implement this
            obscure protocol by tomorrow?&quot; Challenge accepted! These experiences forged my adaptability and instilled a
            love for continuous learning that defines my approach to technology.
          </p>
          <p>
            Throughout my career, I&apos;ve worn many hats: Individual Contributor, Architect, CTO, Engineering Manager, and
            Director. Each role has given me a unique perspective on building technology and leading teams. Currently,
            I&apos;m channeling this experience as a Technical Program Manager at a global hardware company, where I bridge
            technical complexity with strategic business needs.
          </p>
          <p>
            My personal life has had its share of reboots and refactoring. After my marriage ended, I found myself
            debugging my own life—sometimes successfully, sometimes with plenty of trial and error. These days, I&apos;m
            trying to be more intentional with my time. I&apos;ve come to see movement as medicine—basketball brings me joy,
            weightlifting keeps me strong, and martial arts keeps me sharp and confident, just like therapy does—it&apos;s
            not a passion, just a practical tool. I cook whole foods not because I&apos;m some health guru (I still cave for
            pizza), but because I&apos;ve noticed my body and mind work better with real ingredients. My kids keep me
            honest—they&apos;re quick to point out when Dad&apos;s preaching doesn&apos;t match his practice. I&apos;m learning that being a
            good parent isn&apos;t about perfection but presence, and I genuinely treasure every moment with them. My
            creative outlets include writing philosophical musings, working on various creative projects with my
            kids, and recently, making metal music with my friends. Through it
            all—the successes, failures, and daily mundane moments—I&apos;m just trying to stay curious, keep building, and
            be a little better today than yesterday.
          </p>
        </div>
      </div>
    </section>
  )
}

