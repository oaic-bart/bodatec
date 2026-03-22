import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import IndustryCard from '@/components/ui/IndustryCard'
import CTABanner from '@/components/ui/CTABanner'
import { industries } from '@/data/industries'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Industries We Serve | Utilities, Industrial, Renewable Energy | Bodatec',
  description:
    'Bodatec serves utilities, industrial plants, renewable energy developers, substation contractors, offshore wind, and critical infrastructure clients across Belgium and Europe.',
}

const clientTypes = [
  {
    type: 'Utilities & TSOs / DSOs',
    description: 'Support for grid infrastructure testing, commissioning, and maintenance programmes.',
  },
  {
    type: 'EPC Contractors',
    description: 'Specialist electrical subcontract and manpower supply for capital projects.',
  },
  {
    type: 'Industrial Plant Owners',
    description: 'Electrical installation, maintenance, and shutdown support for operational facilities.',
  },
  {
    type: 'OEMs',
    description: 'Field application engineering and commissioning support for equipment deployments.',
  },
  {
    type: 'Renewable Energy Developers',
    description: 'Grid connection, substation commissioning, and O&M electrical support.',
  },
  {
    type: 'Facilities & Infrastructure Owners',
    description: 'Specialist electrical support for critical buildings and commercial infrastructure.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">Industries</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Electrical expertise across industrial, energy, and utility sectors.
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">
            Bodatec works across a range of sectors where reliable electrical engineering and
            technical execution is critical. Each sector has its own operating context — we adapt
            our approach accordingly.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading
            label="Sectors"
            title="Where we operate"
            subtitle="We tailor our support to the specific technical and operational requirements of each sector."
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <IndustryCard
                key={ind.slug}
                title={ind.title}
                description={ind.description}
                icon={ind.icon}
                capabilities={ind.capabilities}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <SectionHeading
            label="Client types"
            title="Who we work with"
            subtitle="Bodatec engages directly with the following types of clients and organisations."
            className="max-w-2xl mb-12"
          />
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

      {/* Belgium & Europe section */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Geography"
                title="Belgium-based, European reach."
                subtitle="Bodatec is established and registered in Belgium. The majority of our work is in Belgium, but we can and do support projects across neighbouring European markets."
              />
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Belgium has a well-developed industrial base, an active energy transition
                  programme, and significant grid infrastructure investment underway. Bodatec is
                  positioned to support projects across all of these areas.
                </p>
                <p>
                  For larger programmes or specific client requirements, we can mobilise personnel
                  to project sites in neighbouring countries including the Netherlands, Luxembourg,
                  France, and Germany.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Discuss your project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <ImagePlaceholder
                label="Industry — Belgian infrastructure"
                hint="e.g. substation, wind farm, or industrial plant — 640×360"
                className="aspect-video w-full"
              />
            <div className="bg-navy-900 p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-6">
                Key sectors in Belgium
              </p>
              <ul className="space-y-4">
                {[
                  'Transmission grid works — Elia network projects',
                  'Distribution network upgrades and asset management',
                  'Offshore wind grid connection infrastructure',
                  'Industrial expansion in Antwerp port and logistics zones',
                  'Renewable energy and energy storage projects',
                  'Petrochemical and chemical industry electrical works',
                  'Data centre and critical facility electrical works',
                ].map((item, i) => (
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

      <CTABanner
        title="Does Bodatec operate in your sector?"
        subtitle="Contact us and describe your project. If we can support it, we will tell you how. If we cannot, we will say that too."
        primaryLabel="Contact Bodatec"
        secondaryLabel="View our services"
        secondaryHref="/services"
      />
    </>
  )
}
