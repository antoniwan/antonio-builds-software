import Link from "next/link"
import { BookOpen, Music, ExternalLink, MessageSquare, Instagram } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { creativeWorks, CreativeWork } from "@/data/creative-works"
import { formatDistanceToNow } from "date-fns"

function getTypeLabel(type: CreativeWork["type"]) {
  switch (type) {
    case "writing":
      return "Medium Post"
    case "music":
      return "Music"
    case "thread":
      return "Threads Post"
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

const ITEMS_PER_VIEW_DESKTOP = 2.25;
const ITEMS_PER_VIEW_MOBILE = 1;

export function CreativeWorksSection() {
  const [itemsPerView, setItemsPerView] = useState(ITEMS_PER_VIEW_DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(ITEMS_PER_VIEW_MOBILE);
      } else {
        setItemsPerView(ITEMS_PER_VIEW_DESKTOP);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sort creative works by date descending (newest first)
  const sortedWorks = [...creativeWorks].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="creative-works" className="py-12 md:py-16 lg:py-24 scroll-mt-20 bg-[hsl(var(--muted))]">
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
          <Carousel itemsPerView={itemsPerView} interval={8000}>
            {sortedWorks.map((work, index) => (
              <div
                key={index}
                style={{ minWidth: `${100 / itemsPerView}%`, maxWidth: `${100 / itemsPerView}%` }}
              >
                <div className="h-full flex flex-col justify-between bg-white dark:bg-background shadow-md rounded-xl p-6 transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className={getTypeColor(work.type)}>
                        {getTypeIcon(work.type)}
                      </span>
                      <span className={`text-sm font-medium ${getTypeColor(work.type)}`}>
                        {getTypeLabel(work.type)}
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
                        {work.type === "writing"
                          ? "Read Post"
                          : work.type === "music"
                          ? "Listen"
                          : work.type === "thread"
                          ? "View Post"
                          : "Watch Reel"}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
} 