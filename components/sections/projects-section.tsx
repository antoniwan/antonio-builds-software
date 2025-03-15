import { Code } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { projectsData } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-24 scroll-mt-20">
      <div className="container space-y-6 md:space-y-8">
        <div className="flex items-center justify-center md:justify-start fade-in">
          <SectionHeader icon={<Code className="h-6 w-6 text-[hsl(var(--vegeta-blue))]" />} title="Featured Projects" />
        </div>
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              shortDescription={project.shortDescription}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              labels={project.labels}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

