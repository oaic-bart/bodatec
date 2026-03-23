import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'privacy' })
  return {
    title: t('title') + ' | Bodatec',
    description: 'Privacy policy of Bodatec BV — how we collect, process, and protect your personal data in compliance with the GDPR.',
  }
}

export default function PrivacyPage() {
  const t = useTranslations('privacy')
  return (
    <section className="section-padding">
      <div className="container-xl max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">{t('title')}</h1>
        <p className="text-sm text-steel-400 mb-10">{t('lastUpdated')}</p>

        <div className="space-y-8 text-steel-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">1. Data controller</h2>
            <p>The controller of your personal data is:</p>
            <div className="mt-3 bg-steel-50 border border-steel-200 p-5 text-sm space-y-1">
              <p className="font-semibold text-navy-900">Bodatec BV</p>
              <p>Karrestraat 92, 9160 Lokeren, Belgium</p>
              <p>Enterprise number: BE 1025.655.828</p>
              <p>Email: <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a></p>
              <p>Phone: +32 474 69 99 61</p>
            </div>
          </div>
          <div><h2 className="text-lg font-semibold text-navy-900 mb-3">2. What personal data we collect</h2><p className="mb-3">We collect and process the following categories of personal data:</p><ul className="space-y-2 text-sm"><li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" /><span><strong className="text-navy-900">Contact form data:</strong> name, company name, email address, phone number (optional), and the content of your message.</span></li><li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" /><span><strong className="text-navy-900">Career enquiries:</strong> name, email address, CV, and any information you include in your application.</span></li><li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" /><span><strong className="text-navy-900">Technical data:</strong> IP address, browser type, operating system, referring URL, pages visited, and timestamps.</span></li><li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" /><span><strong className="text-navy-900">Cookie data:</strong> information stored by cookies on your device, subject to your consent preferences.</span></li></ul></div>
          <div><h2 className="text-lg font-semibold text-navy-900 mb-3">3. Legal basis for processing</h2><p className="mb-3">Under the GDPR, we process your personal data on the following legal bases:</p><ul className="space-y-2 text-sm"><li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" /><span><strong className="text-navy-900">Consent (Art. 6(1)(a)):</strong> for analytics cookies and optional data processing.</span></li><li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" /><span><strong className="text-navy-900">Legitimate interest (Art. 6(1)(f)):</strong> to respond to enquiries, maintain website security.</span></li><li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" /><span><strong className="text-navy-900">Pre-contractual measures (Art. 6(1)(b)):</strong> when processing data for potential contracts.</span></li></ul></div>
          <div><h2 className="text-lg font-semibold text-navy-900 mb-3">4–12. Full policy sections</h2><p>For the complete privacy policy including data usage, sharing, retention, cookies, your GDPR rights, security, supervisory authority, changes, and contact details, please refer to our published privacy policy document or contact us at <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a>.</p></div>
          <div className="pt-6 border-t border-steel-200">
            <Link href="/" className="text-sm text-navy-700 underline hover:text-navy-900">{t('backHome')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
