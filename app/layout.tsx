import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://akshadit.in'),
  title: 'Akshayaditya K R — Backend Developer & Distributed Systems Engineer',
  description:
    'Portfolio of Akshayaditya K R. Backend engineer specializing in distributed architectures, high-concurrency event streams, database transactional integrity, and agentic AI systems.',
  authors: [{ name: 'Akshayaditya K R', url: 'https://akshadit.in' }],
  creator: 'Akshayaditya K R',
  keywords: [
    'Akshayaditya K R',
    'Akshayaditya',
    'Backend Developer',
    'Distributed Systems',
    'PostgreSQL',
    'WebSockets',
    'Agentic AI',
    'Idempotency',
    'Node.js',
    'TypeScript',
    'Python',
    'System Design',
  ],
  alternates: {
    canonical: 'https://akshadit.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akshadit.in',
    title: 'Akshayaditya K R — Backend Developer & Distributed Systems Engineer',
    description:
      'Designing resilient backend architectures, idempotent transaction pipelines, and agentic AI systems beneath the surface.',
    siteName: 'Akshayaditya K R Systems Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshayaditya K R — Backend Developer & Distributed Systems Engineer',
    description:
      'Designing resilient backend architectures, idempotent transaction pipelines, and agentic AI systems beneath the surface.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08090d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${fontSans.variable} ${fontMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#e2e8f0] bg-[#08090d] selection:bg-[#10b981] selection:text-[#040806] overflow-x-hidden min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
