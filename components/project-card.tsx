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
    <Card className="project-card border-none shadow-sm fade-in dark:border dark:border-border overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.025] hover:shadow-md dark:hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || '/images/placeholder-project.jpg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>

      <div className="px-4 flex flex-wrap gap-2">
        {labels.map((label, index) => (
          <Badge
            key={index}
            className={
              label.color === 'vegeta-blue'
                ? 'bg-brand-blue hover:bg-brand-blue-dark'
                : label.color === 'gold'
                ? 'bg-brand-gold hover:bg-brand-gold-dark'
                : label.color === 'primary'
                ? 'bg-primary hover:bg-primary/90'
                : 'bg-brand-blue hover:bg-brand-blue-dark'
            }
          >
            {label.name}
          </Badge>
        ))}
      </div>

      <CardContent className="flex-grow">
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

      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="w-full border-primary/20 hover:bg-primary/5 dark:text-foreground"
        >
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            Visit Project <ExternalLink className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
