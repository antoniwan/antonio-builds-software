import { useCallback } from 'react';

export function useScrollToSection() {
  return useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height (assuming it's fixed)
      const headerHeight = 80; // This should match your header's height

      // Calculate the position with offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      // Smooth scroll to the position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);
}
