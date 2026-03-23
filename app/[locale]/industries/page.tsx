import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import IndustryCard from '@/components/ui/IndustryCard'
import CTABanner from '@/components/ui/CTABanner'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'industries' })
  return {
    title: 'Industries We Serve | Utilities, Industrial, Renewable Energy | Bodatec',
    description: t('heroSubtitle'),
  }
}

const industrySlugs = [
  'utilities-grid',
  'industrial-plants',
  'renewable-energy',
  'substations',
  'offshore-wind',
  'critical-infrastructure',
] as const

const industryIcons = ['Network', 'Factory', 'Wind', 'Building2', 'Anchor', 'Shield']

export default function IndustriesPage() {
  const t = useTranslations('industries')

  const clientTypes = [
    { type: t('clientUtilities'), description: t('clientUtilitiesDesc') },
    { type: t('clientEPC'), description: t('clientEPCDesc') },
    { type: t('clientIndustrial'), description: t('clientIndustrialDesc') },
    { type: t('clientOEM'), description: t('clientOEMDesc') },
    { type: t('clientRenewable'), description: t('clientRenewableDesc') },
    { type: t('clientFacilities'), description: t('clientFacilitiesDesc') },
  ]

  const keySectors = [
    t('keySector1'), t('keySector2'), t('keySector3'), t('keySector4'),
    t('keySector5'), t('keySector6'), t('keySector7'),
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">{t('label')}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">{t('heroTitle')}</h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading label={t('sectorsLabel')} title={t('sectorsTitle')} subtitle={t('sectorsSubtitle')} className="max-w-2xl mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySlugs.map((slug, i) => (
              <IndustryCard
                key={slug}
                title={t(`${slug}.title`)}
                description={t(`${slug}.description`)}
                icon={industryIcons[i]}
                capabilities={[
                  t(`${slug}.capabilities.0`),
                  t(`${slug}.capabilities.1`),
                  t(`${slug}.capabilities.2`),
                  t(`${slug}.capabilities.3`),
                  t(`${slug}.capabilities.4`),
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <SectionHeading label={t('clientTypesLabel')} title={t('clientTypesTitle')} subtitle={t('clientTypesSubtitle')} className="max-w-2xl mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientTypes.map((c) => (
              <div key={c.type} className="bg-white border border-steel-200 p-6 hover:border-navy-300 transition-colors">
                <h3 className="font-semibold text-navy-900 mb-2">{c.type}</h3>
                <p className="text-sm text-steel-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label={t('geoLabel')} title={t('geoTitle')} subtitle={t('geoSubtitle')} />
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>{t('geoP1')}</p>
                <p>{t('geoP2')}</p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">{t('discussProject')} <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                <Image src="/images/industry-belgian-infrastructure.jpg" alt="Belgian electrical infrastructure" fill className="object-cover" />
              </div>
              <div className="bg-navy-900 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-6">{t('keySectorsLabel')}</p>
                <ul className="space-y-4">
                  {keySectors.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-steel-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-500 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={t('ctaTitle')} subtitle={t('ctaSubtitle')} primaryLabel={t('ctaPrimary')} secondaryLabel={t('ctaSecondary')} secondaryHref="/services" />
    </>
  )
}
