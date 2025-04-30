import { Code } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ProjectCard } from '@/components/project-card';
import { projectsData } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 lg:py-36 scroll-mt-20">
      <div className="container space-y-10 md:space-y-12">
        <div className="flex items-center fade-in">
          <SectionHeader
            icon={<Code className="h-6 w-6 text-[hsl(var(--vegeta-blue))]" />}
            title="Featured Projects"
          />
        </div>
        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
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
