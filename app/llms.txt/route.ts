import { creativeWorks } from '@/data/creative-works';
import { projectsData } from '@/data/projects';

/**
 * `/llms.txt` (https://llmstxt.org): this site as markdown for AI agents.
 * Built from the same data as the Projects and Creative Works sections.
 */
export const dynamic = 'force-static';

/** Agents get clean links: drop the utm_* tags the page adds for analytics. */
function cleanUrl(url: string): string {
  const parsed = new URL(url);
  for (const key of [...parsed.searchParams.keys()]) {
    if (key.startsWith('utm_')) parsed.searchParams.delete(key);
  }
  return parsed.toString();
}

const oneLine = (text: string) => text.replace(/\s+/g, ' ').trim();

export function GET() {
  const projects = projectsData.map(
    (project) =>
      `- [${project.title}](${cleanUrl(project.projectUrl)}): ${oneLine(project.shortDescription ?? project.description)}`,
  );

  const works = creativeWorks.map(
    (work) =>
      `- [${oneLine(work.title)}](${cleanUrl(work.url)}): ${work.date ? `${work.date}. ` : ''}${oneLine(work.description)}`,
  );

  const body = `# Builds.software: Antonio Rodriguez Martinez

> Builder of tools, platforms, and systems. Clear process. Quiet execution.

Builds.software is the portfolio of Antonio Rodriguez Martinez: a technical program manager and former CTO who still writes code. He builds tools, platforms, and systems, and works with LLMs and AI orchestration where they reduce load. He has worked as a full-stack developer, architect, CTO, and engineering manager. He also runs Strong Hands, Soft Heart LLC.

How he works: listen and map the team's reality first, design the smallest honest plan, then build, ship, and teach so the team can maintain the work.

To get in touch, use the message form on https://builds.software or LinkedIn.

## Projects

${projects.join('\n')}

## Writing and creative work

${works.join('\n')}

## Optional

- [Strong Hands, Soft Heart Consulting](https://consulting.stronghandssoftheart.com/llms.txt): AI and engineering consulting
- [Notes](https://notes.antoniwan.online/llms.txt): Antonio's essays
- [LinkedIn](https://www.linkedin.com/in/antoniwan/)
- [GitHub](https://github.com/antoniwan)
- [Source code for this site](https://github.com/antoniwan/antonio-builds-software)
- [Antonio Rodriguez Martinez](https://antoniwan.online/llms.txt): all of Antonio's links
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
