import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import ServicePageLayout from '@/components/ui/ServicePageLayout'

const SLUG = 'maintenance-troubleshooting'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services' })
  return {
    title: `${t(`${SLUG}.title`)} | Bodatec Belgium`,
    description: t(`${SLUG}.shortDescription`),
  }
}

const allSlugs = [
  'electrical-engineering',
  'testing-commissioning',
  'maintenance-troubleshooting',
  'hv-mv-support',
  'industrial-electrical-works',
  'technical-specialist-support',
]

export default function ServiceDetailPage() {
  const t = useTranslations('services')

  const otherServices = allSlugs
    .filter((s) => s !== SLUG)
    .slice(0, 4)
    .map((s) => ({ title: t(`${s}.title`), slug: s, href: `/services/${s}` }))

  const scope = Array.from({ length: 7 }, (_, i) => t(`${SLUG}.scope.${i}`))
  const deliverables = Array.from({ length: 4 }, (_, i) => t(`${SLUG}.deliverables.${i}`))
  const idealFor = Array.from({ length: 4 }, (_, i) => t(`${SLUG}.idealFor.${i}`))
  const whyBodatec = Array.from({ length: 5 }, (_, i) => t(`${SLUG}.whyBodatec.${i}`))

  return (
    <ServicePageLayout
      currentSlug={SLUG}
      image="/images/service-maintenance-troubleshooting.jpg"
      title={t(`${SLUG}.title`)}
      headline={t(`${SLUG}.headline`)}
      intro={t(`${SLUG}.intro`)}
      description={t(`${SLUG}.description`)}
      scope={scope}
      deliverables={deliverables}
      idealFor={idealFor}
      whyBodatec={whyBodatec}
      otherServices={otherServices}
    />
  )
}
