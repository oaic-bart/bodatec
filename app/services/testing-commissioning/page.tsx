import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { getServiceBySlug } from '@/data/services'

export const metadata: Metadata = {
  title: 'Testing & Commissioning Services | Bodatec Belgium',
  description:
    'Bodatec delivers structured electrical testing and commissioning services for substations, industrial plants, and renewable energy projects in Belgium. Protection relay testing, switchgear commissioning, and full documentation.',
}

export default function TestingCommissioningPage() {
  const service = getServiceBySlug('testing-commissioning')!

  return (
    <ServicePageLayout
      currentSlug="testing-commissioning"
      image="/images/service-testing-commissioning.jpg"
      title={service.title}
      headline="Structured commissioning delivered by qualified electrical engineers."
      intro="Bodatec provides systematic pre-commissioning and commissioning services for electrical systems — from MV switchgear and protection relays to complete substation and plant installations. We follow rigorous test procedures and produce full documentation at every stage."
      description={service.description}
      scope={service.scope}
      deliverables={service.deliverables}
      idealFor={service.idealFor}
      whyBodatec={[
        'Commissioning engineers qualified on major protection relay platforms',
        'Experienced on substation, plant, and renewable energy projects',
        'Structured test procedures with clear traceability',
        'Full commissioning dossier and handover documentation',
        'Experienced in coordinating with SCADA, control, and civil teams on site',
      ]}
    />
  )
}
