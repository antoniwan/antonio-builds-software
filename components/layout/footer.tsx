'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-6 md:py-8 lg:py-10 border-t-[hsl(var(--vegeta-blue-light))]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <p className="text-caption text-muted-foreground">
                © {currentYear} ·{' '}
                <Link
                  href="https://github.com/antoniwan/antonio-builds-software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(var(--vegeta-blue))] hover:underline underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
                  aria-label="View source code on GitHub"
                >
                  Open Source
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-2 text-[0.7rem] text-muted-foreground/80">
              <span>v1.0 · Built with 💻 and 🧠 by Antonio Rodriguez Martinez</span>
              <span className="flex items-center gap-1" aria-label="Nationality flags">
                <span role="img" aria-label="Puerto Rican flag">
                  🇵🇷
                </span>
                <span role="img" aria-label="American flag">
                  🇺🇸
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
