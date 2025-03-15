"use client"

import Image from "next/image"
import { Mail, Code, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useScrollToSection } from "@/components/scroll-to-section"

export function HeroSection() {
  const scrollToSection = useScrollToSection()

  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 fade-in text-center md:text-left" style={{ animationDelay: "0.1s" }}>
            <Badge className="mb-2 bg-[hsl(var(--gold-light))] text-[hsl(var(--gold-dark))] hover:bg-[hsl(var(--gold-light))]">
              <Star className="h-3 w-3 mr-1" /> Ready for new collaborations
            </Badge>
            <h1 className="text-display tri-gradient">Antonio Rodriguez Martinez</h1>
            <p className="text-body-large text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              Builder of Digital Products, Parent², Technical Program Manager, Full-Stack Developer, Systems Thinker,
              Pragmatic Problem-Solver, Lifelong Learner, Advocate for Conscious Technology, Seeker of Balance Between
              Technical Excellence and Human Values
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="rounded-full border-[hsl(var(--vegeta-blue))] text-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-light))] hover:text-[hsl(var(--vegeta-blue-dark))]"
              >
                <Code className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
          </div>
          <div
            className="flex justify-center md:justify-end fade-in order-first md:order-last"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="profile-image relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 border-[hsl(var(--vegeta-blue))] shadow-lg">
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-[hsl(var(--gold))] text-white p-2 rounded-full shadow-md">
                  <Trophy className="h-5 w-5" />
                </div>
              </div>
              <Image
                src="/images/profile.avif"
                width={320}
                height={320}
                alt="Antonio Rodriguez Martinez"
                className="object-cover transition-all hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

