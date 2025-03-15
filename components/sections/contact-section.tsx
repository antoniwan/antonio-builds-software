import Link from "next/link"
import { Briefcase, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 scroll-mt-20">
      <div className="container space-y-6 text-center fade-in">
        <div className="inline-flex items-center gap-2 mb-4">
          <SectionHeader
            icon={<Briefcase className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Let's Create Something Amazing"
            className="mb-0"
          />
        </div>
        <p className="text-body-large text-muted-foreground max-w-[600px] mx-auto">
          Have a challenging project? Need technical expertise? Or just want to exchange ideas? I'm always open to
          meaningful collaborations that push boundaries and create impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            asChild
            className="rounded-full px-6 md:px-8 shadow-md hover:shadow-lg transition-all bg-primary hover:bg-primary/90"
          >
            <Link href="mailto:contact@antonio.builds.software">
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="rounded-full px-6 md:px-8 shadow-md hover:shadow-lg transition-all bg-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-dark))]"
          >
            <Link href="https://linkedin.com/in/antonio-rodriguez" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

