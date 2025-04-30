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
  imageUrl: string;
  projectUrl: string;
  labels: ProjectLabel[];
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
            alt={title}
            fill
            className="object-cover rounded-t-lg md:rounded-t-xl"
            style={{ objectPosition: 'center' }}
          />
        </motion.div>
        {/* Card content with padding */}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold leading-tight">{title}</CardTitle>
          </CardHeader>
          <div className="flex flex-wrap gap-2.5 mt-4 mb-3">
            {labels.map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge
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
              </motion.div>
            ))}
          </div>
          <CardContent className="flex-grow flex flex-col space-y-3 p-0">
            <motion.div
              className={`text-body text-muted-foreground overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-[1000px]' : 'max-h-[80px]'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{isExpanded ? description : shortDesc}</p>
            </motion.div>
            <Button
              variant="link"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-0 h-auto mt-2 text-primary font-medium self-start transition-transform duration-300 hover:scale-105"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </Button>
          </CardContent>
          <CardFooter className="pt-4 mt-2">
            <Button
              asChild
              variant="outline"
              className="w-full border-primary/20 hover:bg-primary/5 dark:text-foreground transition-transform duration-300 hover:scale-105"
            >
              <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                Visit Project <ExternalLink className="ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
