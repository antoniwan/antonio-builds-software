import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/app/globals.css"
import { Outfit, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Outfit for headings - modern, geometric with personality
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

// Inter for body text - clean, professional, highly readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Antonio Rodriguez Martinez | Builder of Digital Products & Technical Program Manager",
  description:
    "I'm Antonio—a builder at heart who balances technical excellence with human values through practical solutions that make a difference. Technical Program Manager, Full-Stack Developer, and advocate for conscious technology that creates meaningful impact.",
  keywords: [
    "Technical Program Manager",
    "Full-Stack Developer",
    "Digital Product Builder",
    "React Developer",
    "Systems Thinker",
    "Conscious Technology",
    "Human-Centered Development",
    "Web Development",
    "Product Leadership",
    "Antonio Rodriguez Martinez",
  ],
  authors: [{ name: "Antonio Rodriguez Martinez", url: "https://antonio.builds.software" }],
  creator: "Antonio Rodriguez Martinez",
  publisher: "Antonio Rodriguez Martinez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://antonio.builds.software"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Antonio Rodriguez Martinez | Builder of Digital Products & Technical Program Manager",
    description:
      "I help teams build good software that solves real problems.",
    url: "https://antonio.builds.software",
    siteName: "Antonio Rodriguez Martinez",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antonio Rodriguez Martinez - Builder of Digital Products & Technical Program Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Rodriguez Martinez | Builder of Digital Products",
    description:
      "Builder at heart, Technical Program Manager by profession. I create digital products that balance technical excellence with human values—integrity, empathy, and inclusivity.",
    creator: "@antonio_builds",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.jpeg",
    other: [
      {
        rel: "icon",
        sizes: "16x16",
        url: "/images/favicon-16by16.ico",
      },
      {
        rel: "icon",
        sizes: "32x32",
        url: "/images/favicon-32by32.ico",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <body className={`${outfit.variable} ${inter.variable}`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false} 
          storageKey="antonio-theme"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

