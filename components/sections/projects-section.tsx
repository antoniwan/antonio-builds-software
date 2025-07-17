import { Code } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ProjectCard } from '@/components/project-card';
import { projectsData } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-background/50 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
    >
      <div className="container space-y-12 md:space-y-16 relative">
        <div>
          <SectionHeader
            icon={<Code className="h-6 w-6 text-[hsl(var(--gold))]" />}
            title="Featured Personal Projects"
          />
        </div>
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.slice(0, 6).map((project, index) => (
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
  );
}
