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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // If no short description is provided, create one from the full description
  const shortDesc = shortDescription || description.split(' ').slice(0, 25).join(' ') + '...';

  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.4 }}
      role="article"
      aria-label={`Project: ${title}`}
    >
      <Card
        className="box box-radius-lg box-elevation-1 box-hover overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.025] p-0"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      >
        {/* Edge-to-edge image at the top, inheriting card's border radius */}
        <motion.div
          className="relative aspect-video w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="presentation"
        >
          <Image
            src={imageUrl || '/images/placeholder-project.jpg'}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
            loading={index < 2 ? 'eager' : 'lazy'}
            quality={90}
            className={`object-cover rounded-t-lg md:rounded-t-xl transition-opacity duration-300 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectPosition: 'center' }}
            onLoadingComplete={() => setIsImageLoaded(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHh4eHRoaHSQtJSEkLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </motion.div>
        {/* Card content with padding */}
        <CardContent className="flex flex-col gap-4 p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-xl md:text-2xl font-bold">{title}</CardTitle>
          </CardHeader>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Project technologies">
            {labels?.map((label) => (
              <Badge key={label.name} variant="outline" className={label.color} role="listitem">
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
              aria-label={`View ${title} project`}
            >
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                View Project
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
