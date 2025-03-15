import Link from "next/link"
import { Github, Mail, Linkedin, Facebook, MessageCircle, FileText, Library } from "lucide-react"
import { CodepenIcon } from "@/components/icons/codepen-icon"

export function SocialLinksSection() {
  return (
    <section className="bg-muted py-10 md:py-14 geometric-bg">
      <div className="container">
        <p className="text-body-large text-center max-w-[800px] mx-auto fade-in">
          Let&apos;s connect across platforms and explore ideas together. I&apos;m passionate about sharing my work, thoughts, and
          creative journey with kindred spirits. Whether you&apos;re seeking technical collaboration, creative
          problem-solving, or meaningful exchange—I thrive on engaging with fellow builders, creators, thinkers,
          learners, livers and lovers of life.
        </p>

        {/* First tier - Main social profiles */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mt-6 md:mt-8 social-links-grid">
          <Link
            href="https://www.linkedin.com/in/antoniwan/"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in social-link"
            style={{ animationDelay: "0.1s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon">
              <Linkedin className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            </div>
            <span className="text-caption font-medium text-center">LinkedIn</span>
          </Link>

          <Link
            href="https://www.facebook.com/antoniwan777"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: "0.2s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Facebook</span>
          </Link>

          <Link
            href="https://www.threads.net/@antoniwan777"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: "0.3s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Threads</span>
          </Link>

          <Link
            href="https://github.com/antoniwan"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: "0.4s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">GitHub</span>
          </Link>

          <Link
            href="https://codepen.io/antoniwan"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: "0.5s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodepenIcon className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">CodePen</span>
          </Link>

          <Link
            href="mailto:antonio@builds.software"
            className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Mail className="h-5 w-5 md:h-6 md:w-6 mb-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium text-center">Email Me</span>
          </Link>
        </div>

        {/* Second tier - Content and interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4 social-links-grid">
          <Link
            href="https://wizards777.medium.com"
            className="flex items-center justify-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: "0.7s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-4 w-4 mr-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium">Explore my tech & philosophy articles</span>
          </Link>

          <Link
            href="https://www.goodreads.com/antoniwan"
            className="flex items-center justify-center p-3 md:p-4 rounded-lg bg-background hover:bg-accent transition-colors shadow-sm hover:shadow fade-in"
            style={{ animationDelay: "0.8s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Library className="h-4 w-4 mr-2 text-[hsl(var(--vegeta-blue))]" />
            <span className="text-caption font-medium">Discover what shapes my thinking</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

