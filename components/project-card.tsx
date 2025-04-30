'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectLabel {
  name: string;
  color?: string;
}

interface ProjectProps {
  title: string;
  description: string;
  shortDescription?: string;
  imageUrl: string;
  projectUrl: string;
  labels: ProjectLabel[];
}

export function ProjectCard({
  title,
  description,
  shortDescription,
  imageUrl,
  projectUrl,
  labels,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // If no short description is provided, create one from the full description
  const shortDesc = shortDescription || description.split(' ').slice(0, 25).join(' ') + '...';

  return (
    <Card className="project-card border-none shadow-md fade-in dark:border dark:border-border overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.025] hover:shadow-lg dark:hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || '/images/placeholder-project.jpg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-heading-3 relative group">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--vegeta-blue))] transition-all duration-300 group-hover:w-full"></span>
          </CardTitle>
        </div>
      </CardHeader>

      <div className="px-6 flex flex-wrap gap-2 mb-3">
        {labels.map((label, index) => (
          <Badge
            key={index}
            className={
              label.color === 'vegeta-blue'
                ? 'bg-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-dark))]'
                : label.color === 'gold'
                ? 'bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))]'
                : label.color === 'primary'
                ? 'bg-primary hover:bg-primary/90'
                : 'bg-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-dark))]'
            }
          >
            {label.name}
          </Badge>
        ))}
      </div>

      <CardContent className="pb-2 flex-grow">
        <div
          className={`text-body text-muted-foreground overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-[80px]'
          }`}
        >
          <p>{isExpanded ? description : shortDesc}</p>
        </div>
        <Button
          variant="link"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-0 h-auto mt-2 text-primary font-medium"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </Button>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          asChild
          variant="outline"
          className="w-full rounded-full border-primary/20 hover:bg-primary/5 dark:text-foreground"
        >
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            Visit Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
