'use client';

import { useCallback, Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
  children: React.ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(max-width: 767px)': { slidesToScroll: 1 },
    },
    skipSnaps: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <Suspense fallback={<div className="w-full h-[200px] bg-muted animate-pulse" />}>
        <div className="px-2" ref={emblaRef}>
          <div className="flex gap-x-6">
            {children.map((child, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0">
                {child}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button variant="ghost" size="icon" onClick={scrollPrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={scrollNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Suspense>
    </div>
  );
}
