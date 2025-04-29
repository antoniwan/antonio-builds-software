import Link from "next/link"
import { BookOpen, Music, ExternalLink, MessageSquare, Instagram } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel"
import { creativeWorks, CreativeWork } from "@/data/creative-works"
import { formatDistanceToNow } from "date-fns"

const typeConfig = {
  writing: {
    label: "Medium Post",
    icon: BookOpen,
    color: "text-[hsl(var(--vegeta-blue))]"
  },
  music: {
    label: "Music",
    icon: Music,
    color: "text-[hsl(var(--primary))]"
  },
  thread: {
    label: "Threads Post",
    icon: MessageSquare,
    color: "text-[hsl(var(--gold))]"
  },
  reel: {
    label: "Instagram Reel",
    icon: Instagram,
    color: "text-pink-500"
  }
} as const

const buttonLabels = {
  writing: "Read Post",
  music: "Listen",
  thread: "View Post",
  reel: "Watch Reel"
} as const

export function CreativeWorksSection() {
  const sortedWorks = [...creativeWorks].sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <section id="creative-works" className="py-12 md:py-16 lg:py-24 scroll-mt-20 bg-[hsl(var(--muted))] overflow-x-hidden">
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

        <div className="mt-8 pb-8">
          <Carousel>
            {sortedWorks.map((work, index) => {
              const config = typeConfig[work.type]
              const Icon = config.icon
              
              return (
                <div key={index}>
                  <div className="h-full flex flex-col justify-between bg-white dark:bg-background shadow-md rounded-xl p-6 transition-shadow">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className={config.color}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className={`text-sm font-medium ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                      <div className="text-heading-3 text-left font-semibold leading-tight">{work.title}</div>
                      {work.date && (
                        <p className="text-sm text-muted-foreground text-left">
                          {formatDistanceToNow(new Date(work.date), { addSuffix: true })}
                        </p>
                      )}
                    </div>
                    <div className="py-2">
                      <p className="text-body text-muted-foreground text-left">{work.description}</p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-full border-primary/20 hover:bg-primary/5 dark:text-foreground"
                      >
                        <Link href={work.url} target="_blank" rel="noopener noreferrer">
                          {buttonLabels[work.type]}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </section>
  )
} 