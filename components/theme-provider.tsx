'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import { useEffect } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Prevent flash of unstyled content
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    root.classList.remove('light', 'dark');
    root.classList.add(initialColorScheme);
  }, []);

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme-preference"
    >
      {children}
    </NextThemesProvider>
  );
}
