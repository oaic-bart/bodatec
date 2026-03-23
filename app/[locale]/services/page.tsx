import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import CTABanner from '@/components/ui/CTABanner'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services' })
  return {
    title: 'Services | Electrical Engineering & Technical Services',
    description: t('pageSubtitle'),
  }
}

const serviceSlugs = [
  'electrical-engineering',
  'testing-commissioning',
  'maintenance-troubleshooting',
  'hv-mv-support',
  'industrial-electrical-works',
  'technical-specialist-support',
] as const

const serviceIcons = ['Cpu', 'ClipboardCheck', 'Wrench', 'Zap', 'HardHat', 'Users']

export default function ServicesPage() {
  const t = useTranslations('services')

  const additionalServices = [
    { title: t('shutdownSupport'), description: t('shutdownSupportDesc') },
    { title: t('fatSat'), description: t('fatSatDesc') },
    { title: t('earthingLightning'), description: t('earthingLightningDesc') },
    { title: t('powerQuality'), description: t('powerQualityDesc') },
  ]

  const steps = [
    { step: '01', title: t('step01'), desc: t('step01Desc') },
    { step: '02', title: t('step02'), desc: t('step02Desc') },
    { step: '03', title: t('step03'), desc: t('step03Desc') },
    { step: '04', title: t('step04'), desc: t('step04Desc') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">{t('pageLabel')}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading label={t('coreDisciplines')} title={t('sixPrimaryAreas')} subtitle={t('sixPrimaryAreasSubtitle')} className="max-w-2xl mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSlugs.map((slug, i) => (
              <ServiceCard
                key={slug}
                title={t(`${slug}.title`)}
                description={t(`${slug}.shortDescription`)}
                icon={serviceIcons[i]}
                href={`/services/${slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <div className="relative aspect-[3/1] w-full mb-12 rounded-2xl overflow-hidden">
            <Image src="/images/services-commissioning-testing.jpg" alt="Commissioning and testing work in progress" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading label={t('howWeWork')} title={t('howWeWorkTitle')} />
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>{t('howWeWorkP1')}</p>
                <p>{t('howWeWorkP2')}</p>
                <p>{t('howWeWorkP3')}</p>
              </div>
            </div>
            <div className="space-y-4">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <div className="text-2xl font-bold text-steel-200 w-10 flex-shrink-0 pt-0.5">{item.step}</div>
                  <div className="border-l border-steel-200 pl-5">
                    <h3 className="text-sm font-semibold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-steel-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading label={t('additionalCapabilities')} title={t('furtherSupport')} subtitle={t('furtherSupportSubtitle')} className="max-w-2xl mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {additionalServices.map((s) => (
              <div key={s.title} className="border border-steel-200 p-6 bg-white hover:border-navy-300 transition-colors">
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-sm text-steel-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse */}
      <section className="section-padding bg-navy-950">
        <div className="container-xl">
          <p className="section-label text-navy-400 mb-8">{t('browseServices')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="flex items-center justify-between px-5 py-4 border border-navy-800 hover:border-navy-500 hover:bg-navy-900 transition-all group"
              >
                <span className="text-sm font-medium text-steel-300 group-hover:text-white transition-colors">{t(`${slug}.title`)}</span>
                <ArrowRight className="w-4 h-4 text-navy-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={t('ctaTitle')} subtitle={t('ctaSubtitle')} primaryLabel={t('ctaPrimary')} secondaryLabel={t('ctaSecondaryLabel')} secondaryHref="/industries" />
    </>
  )
}
