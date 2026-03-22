import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { getServiceBySlug } from '@/data/services'

export const metadata: Metadata = {
  title: 'HV / MV Support Services | Bodatec Belgium',
  description:
    'Specialist high-voltage and medium-voltage technical support from Bodatec — substation commissioning, HV cable testing, GIS/AIS switchgear, and protection relay testing across Belgium.',
}

export default function HvMvSupportPage() {
  const service = getServiceBySlug('hv-mv-support')!

  return (
    <ServicePageLayout
      currentSlug="hv-mv-support"
      title={service.title}
      headline="HV-qualified engineers for substation and grid system work."
      intro="Bodatec provides specialist high-voltage and medium-voltage support for substations, cable systems, and grid assets. Our HV-authorised personnel operate safely on energised and de-energised systems, with full awareness of the relevant competency and safety frameworks."
      description={service.description}
      scope={service.scope}
      deliverables={service.deliverables}
      idealFor={service.idealFor}
      whyBodatec={[
        'HV-authorised and competent persons available',
        'Experience across 11kV, 33kV, 66kV, and 132kV systems',
        'Familiar with GIS and AIS primary equipment from major OEMs',
        'Experienced on major protection relay platforms (ABB, SEL, Schneider, GE)',
        'Full awareness of Belgian and European HV safety standards',
      ]}
    />
  )
}
