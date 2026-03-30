import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Merryland Montessori and High School, Inc.',
  description: 'Where excellent foundation begins',
   icons: {
    icon: [
      {
        url: 'logo.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'logo.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'logo.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: 'logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
