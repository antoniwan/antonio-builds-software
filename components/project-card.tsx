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
    <Card className="box box-radius-lg box-elevation-1 box-hover fade-in overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.025] p-0">
      {/* Edge-to-edge image at the top, inheriting card's border radius */}
      <div className="relative aspect-video w-full">
        <Image
          src={imageUrl || '/images/placeholder-project.jpg'}
          alt={title}
          fill
          className="object-cover rounded-t-lg md:rounded-t-xl transition-transform duration-500 hover:scale-105"
          style={{ objectPosition: 'center' }}
        />
      </div>
      {/* Card content with padding */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold leading-tight">{title}</CardTitle>
        </CardHeader>
        <div className="flex flex-wrap gap-2.5 mt-4 mb-3">
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
        <CardContent className="flex-grow flex flex-col space-y-3 p-0">
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
            className="p-0 h-auto mt-2 text-primary font-medium self-start"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </Button>
        </CardContent>
        <CardFooter className="pt-4 mt-2">
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
      </div>
    </Card>
  );
}
