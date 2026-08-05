import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

import Chatbot from '@/components/Chatbot'
import MobileMotionProvider from '@/components/MobileMotionProvider'
import ScrollProgress from '@/components/ScrollProgress'
import { brand } from '@/lib/brand' 


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${brand.name} - ${brand.tagline}`,
  description: `${brand.name} is an Ethiopian structural engineering firm founded in 2009 that specializes in structural design, steel structures, value engineering, and construction supervision.`,
  keywords: 'Kenmos Engineering, Kenmos Structural Engineering, structural design Ethiopia, steel structures Addis Ababa, engineering consultant Ethiopia, value engineering, building construction supervision',
  authors: [{ name: brand.name }],
  robots: 'index, follow',
  metadataBase: new URL('http://localhost:3000'),
  applicationName: brand.name,
  creator: brand.name,
  publisher: brand.name,
  openGraph: {
    title: `${brand.name} - ${brand.tagline}`,
    description: `Discover Kenmos Engineering, a premier Ethiopian structural engineering firm specializing in structural design and steel structures since 2009.`,
    type: 'website',
    locale: 'en_US',
    siteName: brand.name,
    url: 'http://localhost:3000',
    images: [
      {
        url: '/images/hero_building.png',
        width: 1200,
        height: 630,
        alt: `${brand.name} - Structural Engineering Ethiopia`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand.name} - ${brand.tagline}`,
    description: `Premier Ethiopian structural engineering firm specializing in structural design, steel structures, and value engineering since 2009.`,
    images: ['/images/hero_building.png']
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#111111]">
        <MobileMotionProvider>
          <ScrollProgress />
          {children}
          <Chatbot />
        </MobileMotionProvider>
      </body>
    </html>
  )
}
