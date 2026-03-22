import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { getServiceBySlug } from '@/data/services'

export const metadata: Metadata = {
  title: 'Electrical Engineering Support | Bodatec Belgium',
  description:
    'Bodatec provides practical electrical engineering support including design documentation, protection studies, cable sizing, and FAT/SAT support for industrial and energy projects in Belgium.',
}

export default function ElectricalEngineeringPage() {
  const service = getServiceBySlug('electrical-engineering')!

  return (
    <ServicePageLayout
      currentSlug="electrical-engineering"
      title={service.title}
      headline="Electrical engineering support that integrates with your project."
      intro="Bodatec provides qualified electrical engineers who can be deployed into project teams or work independently to produce and review engineering documentation, perform technical studies, and support equipment specification and FAT/SAT activities."
      description={service.description}
      scope={service.scope}
      deliverables={service.deliverables}
      idealFor={service.idealFor}
      whyBodatec={[
        'Experienced in both design office and site environments',
        'Familiar with IEC, CENELEC, and Belgian electrical standards',
        'Comfortable working within PMC / EPC project frameworks',
        'Produce clear, reviewable documentation',
        'Available for short or long-term assignments',
      ]}
    />
  )
}
