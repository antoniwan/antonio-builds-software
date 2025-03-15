"use client"

import { useCallback } from "react"

export function useScrollToSection() {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      // Add a small offset to account for the fixed header
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }, [])

  return scrollToSection
}

