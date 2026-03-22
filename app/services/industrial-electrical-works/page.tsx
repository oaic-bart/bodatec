import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { getServiceBySlug } from '@/data/services'

export const metadata: Metadata = {
  title: 'Industrial Electrical Works | Bodatec Belgium',
  description:
    'Bodatec provides site electrical installation, cabling, LV works, and industrial electrical execution for plants and facilities across Belgium. Qualified electricians and supervisors.',
}

export default function IndustrialElectricalWorksPage() {
  const service = getServiceBySlug('industrial-electrical-works')!

  return (
    <ServicePageLayout
      currentSlug="industrial-electrical-works"
      image="/images/service-industrial-electrical-works.jpg"
      title={service.title}
      headline="Practical site electrical works for industrial facilities."
      intro="Bodatec delivers reliable on-site electrical installation and works for industrial plants — from cable installation and containment through to MCC connection and final testing. We work cleanly, safely, and in coordination with other site disciplines."
      description={service.description}
      scope={service.scope}
      deliverables={service.deliverables}
      idealFor={service.idealFor}
      whyBodatec={[
        'Qualified electricians and site supervisors',
        'Experience in process plant, manufacturing, and logistics environments',
        'Safe system of work compliance and permit-to-work participation',
        'Clean installation and accurate as-built records',
        'Capable of working to tight shutdown schedules',
      ]}
    />
  )
}
