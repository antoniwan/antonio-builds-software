import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { StructuredData } from '@/components/structured-data';
import defaultMetadata from './metadata';
import './globals.css';

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background">
            <StructuredData />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
