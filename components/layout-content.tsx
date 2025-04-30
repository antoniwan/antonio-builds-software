'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { StructuredData } from '@/components/structured-data';

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <StructuredData />
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1" role="main">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export function LayoutContent({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
