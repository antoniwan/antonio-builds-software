"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  itemsPerView?: number
}

export function Carousel({ 
  children, 
  autoPlay = true, 
  interval = 5000,
  itemsPerView = 2.25
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(children.length - itemsPerView + 1))
  }, [children.length, itemsPerView])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(children.length - itemsPerView + 1)) % Math.ceil(children.length - itemsPerView + 1))
  }, [children.length, itemsPerView])

  useEffect(() => {
    if (!autoPlay || isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, isPaused, autoPlay, interval, nextSlide])

  const showPagination = children.length > itemsPerView

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div>
        <div 
          className="flex gap-x-4 transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${children.length * (100 / itemsPerView)}%`
          }}
        >
          {children}
        </div>
      </div>

      {showPagination && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border shadow-lg bg-black/70 hover:bg-black/80 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border shadow-lg bg-black/70 hover:bg-black/80 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(children.length - itemsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
} 