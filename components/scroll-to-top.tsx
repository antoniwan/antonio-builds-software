"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 p-2.5 rounded-full bg-[hsl(var(--vegeta-blue))] hover:bg-[hsl(var(--vegeta-blue-dark))] shadow-md hover:shadow-lg transition-all duration-300 md:p-3 md:bottom-6 md:right-6"
          size="icon"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-white" />
        </Button>
      )}
    </>
  )
}

