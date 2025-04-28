import Link from "next/link"
import { BookOpen, Music, ExternalLink, MessageSquare, Instagram } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel"

interface CreativeWork {
  title: string
  description: string
  type: "writing" | "music" | "thread" | "reel"
  url: string
  date?: string
}

const creativeWorks: CreativeWork[] = [
  {
    title: "Mercy Through the Blade: The Silent Law of Leadership",
    description: "An exploration of authentic leadership through the lens of truth and mercy. This essay delves into the delicate balance between compassion and discipline, examining how true leadership often requires making difficult decisions that serve long-term growth over short-term comfort.",
    type: "writing",
    url: "https://wizards777.medium.com/mercy-through-the-blade-the-silent-law-of-leadership-24cef2df828a",
    date: "2024"
  },
  {
    title: "Forging the Stronghand Terminal: From Chaos to Command",
    description: "A technical and philosophical journey of rebuilding my development environment from the ground up. This essay explores the relationship between our tools and our mindset, detailing how I transformed my Windows 11 terminal into a powerful command center using WezTerm, PowerShell 7, and other modern tools.",
    type: "writing",
    url: "https://wizards777.medium.com/forging-the-stronghand-terminal-from-chaos-to-command-c4e4df4d290c",
    date: "2024"
  },
  {
    title: "The Power of Intentional Development",
    description: "A Thread exploring how deliberate practice and focused development can transform not just our code, but our entire approach to problem-solving and personal growth.",
    type: "thread",
    url: "https://www.threads.com/@antoniwan777/post/DI_53ziRpQ5",
    date: "2024"
  },
  {
    title: "Coding with Intention",
    description: "A short video reflection on how the way we approach our development environment reflects our mindset and discipline in coding.",
    type: "reel",
    url: "https://www.instagram.com/reel/DIcqwZcNWoX/",
    date: "2024"
  }
]

function getTypeLabel(type: CreativeWork["type"]) {
  switch (type) {
    case "writing":
      return "Article"
    case "music":
      return "Music"
    case "thread":
      return "Thread"
    case "reel":
      return "Instagram Reel"
  }
}

function getTypeIcon(type: CreativeWork["type"]) {
  switch (type) {
    case "writing":
      return <BookOpen className="h-4 w-4" />
    case "music":
      return <Music className="h-4 w-4" />
    case "thread":
      return <MessageSquare className="h-4 w-4" />
    case "reel":
      return <Instagram className="h-4 w-4" />
  }
}

function getTypeColor(type: CreativeWork["type"]) {
  switch (type) {
    case "writing":
      return "text-[hsl(var(--vegeta-blue))]"
    case "music":
      return "text-[hsl(var(--primary))]"
    case "thread":
      return "text-[hsl(var(--gold))]"
    case "reel":
      return "text-pink-500"
  }
}

const ITEMS_PER_VIEW = 2.25;

export function CreativeWorksSection() {
  return (
    <section id="creative-works" className="py-12 md:py-16 lg:py-24 scroll-mt-20">
      <div className="container space-y-6 fade-in">
        <div className="inline-flex items-center gap-2 mb-4">
          <SectionHeader
            icon={<BookOpen className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Creative Works"
            className="mb-0"
          />
        </div>
        <p className="text-body-large text-muted-foreground max-w-[600px]">
          Beyond code, I explore ideas through writing, music, and social media. These creative works reflect my journey of growth, leadership, and self-discovery.
        </p>

        <div className="mt-8">
          <Carousel itemsPerView={ITEMS_PER_VIEW} interval={8000}>
            {creativeWorks.map((work, index) => (
              <div
                key={index}
                className="px-4"
                style={{ minWidth: `${100 / ITEMS_PER_VIEW}%`, maxWidth: `${100 / ITEMS_PER_VIEW}%` }}
              >
                <Card className="border-none shadow-md fade-in dark:border dark:border-border overflow-hidden h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className={getTypeColor(work.type)}>
                          {getTypeIcon(work.type)}
                        </span>
                        <span className={`text-sm font-medium ${getTypeColor(work.type)}`}>
                          {getTypeLabel(work.type)}
                        </span>
                      </div>
                      <CardTitle className="text-heading-3 text-left">{work.title}</CardTitle>
                      {work.date && (
                        <p className="text-sm text-muted-foreground text-left">{work.date}</p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pb-2">
                    <p className="text-body text-muted-foreground text-left">{work.description}</p>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-primary/20 hover:bg-primary/5 dark:text-foreground"
                    >
                      <Link href={work.url} target="_blank" rel="noopener noreferrer">
                        {work.type === "writing" ? "Read Article" : 
                         work.type === "music" ? "Listen" :
                         work.type === "thread" ? "View Thread" : "Watch Reel"} 
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
} 