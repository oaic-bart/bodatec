import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { getServiceBySlug } from '@/data/services'

export const metadata: Metadata = {
  title: 'Maintenance & Troubleshooting | Bodatec Belgium',
  description:
    'Bodatec provides planned maintenance execution and reactive fault investigation for industrial and utility electrical systems in Belgium. Switchgear maintenance, RCA, and condition assessment.',
}

export default function MaintenancePage() {
  const service = getServiceBySlug('maintenance-troubleshooting')!

  return (
    <ServicePageLayout
      currentSlug="maintenance-troubleshooting"
      title={service.title}
      headline="Planned maintenance and rapid fault response for operational systems."
      intro="Bodatec supports operational plants and grid asset owners with both structured maintenance programmes and reactive troubleshooting. Our technicians and engineers understand the urgency of unplanned events and the importance of structured preventive maintenance."
      description={service.description}
      scope={service.scope}
      deliverables={service.deliverables}
      idealFor={service.idealFor}
      whyBodatec={[
        'Fast mobilisation for reactive call-outs',
        'Structured RCA methodology with written findings',
        'Experienced on MV/LV switchgear, protection relays, and transformers',
        'Compliant with Belgian safety regulations and permit-to-work systems',
        'Capable of working alongside in-house maintenance teams',
      ]}
    />
  )
}
