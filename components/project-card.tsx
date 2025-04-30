'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ProjectLabel {
  name: string;
  color?: string;
}

interface ProjectProps {
  title: string;
  description: string;
  shortDescription?: string;
  imageUrl?: string;
  projectUrl?: string;
  labels?: ProjectLabel[];
  index?: number;
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1],
  },
};

export function ProjectCard({
  title,
  description,
  shortDescription,
  imageUrl,
  projectUrl,
  labels,
  index = 0,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // If no short description is provided, create one from the full description
  const shortDesc = shortDescription || description.split(' ').slice(0, 25).join(' ') + '...';

  return (
    <motion.div {...fadeIn} transition={{ duration: 0.4 }}>
      <Card className="box box-radius-lg box-elevation-1 box-hover overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.025] p-0">
        {/* Edge-to-edge image at the top, inheriting card's border radius */}
        <motion.div
          className="relative aspect-video w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={imageUrl || '/images/placeholder-project.jpg'}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
            loading={index < 2 ? 'eager' : 'lazy'}
            quality={90}
            className="object-cover rounded-t-lg md:rounded-t-xl"
            style={{ objectPosition: 'center' }}
            role="img"
            aria-label={`${title} project screenshot`}
          />
        </motion.div>
        {/* Card content with padding */}
        <CardContent className="flex flex-col gap-4 p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-xl md:text-2xl font-bold">{title}</CardTitle>
          </CardHeader>
          <div className="flex flex-wrap gap-2">
            {labels?.map((label) => (
              <Badge key={label.name} variant="outline" className={label.color}>
                {label.name}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground">{isExpanded ? description : shortDesc}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          {projectUrl && (
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-primary/20 hover:bg-primary/10 dark:text-foreground"
            >
              <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
