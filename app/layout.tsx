import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Sagna & Sall Legal Partners | Cabinet Juridique Dakar',
  description: 'Cabinet juridique et commercial de référence à Dakar, Sénégal. Expertise en droit civil, commercial, pénal des affaires et administratif. Accompagnement personnalisé pour entreprises et particuliers.',
  keywords: ['cabinet juridique dakar', 'avocat sénégal', 'droit commercial OHADA', 'droit des affaires', 'conseil juridique', 'contentieux'],
  authors: [{ name: 'Sagna & Sall Legal Partners' }],
  openGraph: {
    title: 'Sagna & Sall Legal Partners | Cabinet Juridique Dakar',
    description: 'Excellence juridique au service de vos ambitions. Cabinet de conseil et contentieux à Dakar.',
    type: 'website',
    locale: 'fr_SN',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0F1C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
