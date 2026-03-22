import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { getServiceBySlug } from '@/data/services'

export const metadata: Metadata = {
  title: 'Technical Specialist Support | Bodatec Belgium',
  description:
    'Bodatec provides flexible deployment of qualified electrical engineers and technicians to supplement client project and operational teams in Belgium and across Europe.',
}

export default function TechnicalSpecialistSupportPage() {
  const service = getServiceBySlug('technical-specialist-support')!

  return (
    <ServicePageLayout
      currentSlug="technical-specialist-support"
      title={service.title}
      headline="The right specialist, on your project, when you need them."
      intro="When projects require specific expertise or additional capacity, Bodatec deploys qualified technical personnel who integrate quickly and deliver from day one. We supply individual specialists or small teams based on a clear scope and defined duration."
      description={service.description}
      scope={service.scope}
      deliverables={service.deliverables}
      idealFor={service.idealFor}
      whyBodatec={[
        'Vetted personnel with relevant qualifications and experience',
        'Quick mobilisation — days, not weeks',
        'Specialists who understand project environments and can work independently',
        'Flexible contract structures: lump sum, daily rate, or T&M',
        'Option for assignment handover and knowledge transfer',
      ]}
    />
  )
}
