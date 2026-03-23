import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Phone, Mail, MapPin, Clock, Linkedin } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/ui/ContactForm'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'contact' })
  return {
    title: 'Contact Bodatec | Electrical Engineering & Technical Services Belgium',
    description: t('heroSubtitle'),
  }
}

export default function ContactPage() {
  const t = useTranslations('contact')

  const contactDetails = [
    { icon: MapPin, label: t('address'), value: 'Karrestraat 92', sub: '9160 Lokeren, Belgium', extra: 'VAT: BE 1025.655.828', href: 'https://maps.google.com/?q=Karrestraat+92,+9160+Lokeren,+Belgium' },
    { icon: Phone, label: t('phone'), value: '+32 474 69 99 61', href: 'tel:+32474699961' },
    { icon: Mail, label: t('generalEnquiries'), value: 'info@bodatec.be', href: 'mailto:info@bodatec.be' },
    { icon: Mail, label: t('careersEmail'), value: 'careers@bodatec.be', href: 'mailto:careers@bodatec.be' },
    { icon: Clock, label: t('responseTime'), value: t('responseTimeValue'), sub: t('responseTimeSub') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-24 relative">
          <p className="section-label-light mb-4">{t('label')}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">{t('heroTitle')}</h1>
          <p className="text-lg text-steel-300 max-w-xl leading-relaxed">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading label={t('getInTouch')} title={t('sendMessage')} subtitle={t('sendMessageSubtitle')} className="mb-8" />
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-steel-500 mb-5">{t('detailsTitle')}</h2>
                <div className="space-y-5">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-navy-700" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-steel-400 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm font-medium text-navy-900 hover:text-navy-600 focus-visible:outline-navy-600 transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-navy-900">{item.value}</p>
                        )}
                        {item.sub && <p className="text-xs text-steel-500 mt-0.5">{item.sub}</p>}
                        {item.extra && <p className="text-xs text-steel-400 mt-0.5">{item.extra}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-steel-200 p-4 flex items-center gap-3 hover:border-navy-300 transition-colors">
                <Linkedin className="w-4 h-4 text-navy-700 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-steel-500 mb-0.5">{t('followUs')}</p>
                  <a href="https://linkedin.com/company/bodatec" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-navy-900 hover:text-navy-600 transition-colors">linkedin.com/company/bodatec</a>
                </div>
              </div>
              <div className="bg-navy-900 p-5 text-white">
                <h3 className="text-sm font-semibold mb-2">{t('urgentTitle')}</h3>
                <p className="text-xs text-steel-300 leading-relaxed mb-3">{t('urgentBody')}</p>
                <a href="tel:+32474699961" className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-navy-500 hover:border-white focus-visible:outline-white transition-colors pb-0.5">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  +32 474 69 99 61
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section aria-label={t('locationLabel')}>
        <div className="border-t border-steel-200">
          <div className="container-xl py-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-navy-700" aria-hidden="true" />
              <p className="text-sm font-medium text-navy-900">Karrestraat 92, 9160 Lokeren, Belgium</p>
            </div>
          </div>
          <iframe
            title="Bodatec office location — Karrestraat 92, 9160 Lokeren, Belgium"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.8!2d3.9893!3d51.1024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37a6a3b3b3b3b%3A0x0!2sKarrestraat+92%2C+9160+Lokeren%2C+Belgium!5e0!3m2!1sen!2sbe!4v1700000000000"
            width="100%" height="380" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
