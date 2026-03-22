import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://bodatec.be'),
  title: {
    default: 'Bodatec | Electrical Engineering & Industrial Technical Services in Belgium',
    template: '%s | Bodatec Belgium',
  },
  description:
    'Bodatec is a Belgian electrical engineering company providing testing, commissioning, maintenance, HV/MV support, and technical specialist services for industry, utilities, and energy clients across Belgium and Europe.',
  keywords: [
    'electrical engineering Belgium',
    'testing commissioning Belgium',
    'HV MV support Belgium',
    'industrial electrical works',
    'substation commissioning',
    'maintenance troubleshooting',
    'Bodatec',
    'Lokeren',
    'electrical contractor Belgium',
  ],
  authors: [{ name: 'Bodatec' }],
  creator: 'Bodatec',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_BE',
    siteName: 'Bodatec',
    title: 'Bodatec | Electrical Engineering & Technical Services Belgium',
    description:
      'Belgian electrical engineering company — testing, commissioning, HV/MV support, maintenance, and specialist technical services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bodatec | Electrical Engineering Belgium',
    description:
      'Belgian electrical engineering company — testing, commissioning, HV/MV support, maintenance, and specialist technical services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
