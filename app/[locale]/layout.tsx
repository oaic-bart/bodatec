import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/ui/CookieConsent'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'home' })
  return {
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
      locale: params.locale === 'nl' ? 'nl_BE' : 'en_BE',
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
    alternates: {
      languages: {
        'nl': '/nl',
        'en': '/en',
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
