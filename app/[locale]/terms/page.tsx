import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'terms' })
  return {
    title: t('title') + ' | Bodatec',
    description: 'Terms and conditions for using the Bodatec website.',
  }
}

export default function TermsPage() {
  const t = useTranslations('terms')
  return (
    <section className="section-padding">
      <div className="container-xl max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">{t('title')}</h1>
        <p className="text-sm text-steel-400 mb-10">{t('lastUpdated')}</p>

        <div className="space-y-8 text-steel-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">1. Identification</h2>
            <p>This website is operated by:</p>
            <div className="mt-3 bg-steel-50 border border-steel-200 p-5 text-sm space-y-1">
              <p className="font-semibold text-navy-900">Bodatec BV</p>
              <p>Karrestraat 92, 9160 Lokeren, Belgium</p>
              <p>Enterprise number: BE 1025.655.828</p>
              <p>Email: <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a></p>
              <p>Phone: +32 474 69 99 61</p>
            </div>
          </div>
          <div><h2 className="text-lg font-semibold text-navy-900 mb-3">2. Acceptance of terms</h2><p>By accessing and using this website (bodatec.be), you agree to be bound by these Terms &amp; Conditions and our <Link href="/privacy" className="text-navy-700 underline">Privacy Policy</Link>. If you do not agree with any part of these terms, you should not use this website.</p></div>
          <div><h2 className="text-lg font-semibold text-navy-900 mb-3">3–13. Full terms</h2><p>For the complete terms and conditions including website content accuracy, intellectual property, use restrictions, liability limitations, external links, service descriptions, cookies, modifications, severability, and governing law, please contact us at <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a>.</p></div>
          <div><h2 className="text-lg font-semibold text-navy-900 mb-3">14. Contact</h2><p>For any questions about these Terms &amp; Conditions, please contact us:</p><div className="mt-3 text-sm space-y-1"><p>Email: <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a></p><p>Phone: +32 474 69 99 61</p><p>Post: Bodatec BV, Karrestraat 92, 9160 Lokeren, Belgium</p></div></div>
          <div className="pt-6 border-t border-steel-200">
            <Link href="/" className="text-sm text-navy-700 underline hover:text-navy-900">{t('backHome')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
