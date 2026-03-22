import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import CTABanner from '@/components/ui/CTABanner'
import { services } from '@/data/services'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services | Electrical Engineering & Technical Services',
  description:
    'Bodatec provides electrical engineering support, testing & commissioning, HV/MV services, maintenance, industrial works, and specialist technical manpower in Belgium.',
}

const additionalServices = [
  {
    title: 'Shutdown & Brownfield Support',
    description:
      'Planned shutdown execution, brownfield modification support, and outage-scope electrical works for operational plants.',
  },
  {
    title: 'FAT / SAT Witnessing & Support',
    description:
      'Factory Acceptance Test and Site Acceptance Test support, including preparation of test plans, witnessing, and reporting.',
  },
  {
    title: 'Earthing & Lightning Protection',
    description:
      'Earth grid design review, soil resistivity testing, earthing resistance measurement, and lightning protection system inspection.',
  },
  {
    title: 'Power Quality & Load Studies',
    description:
      'Basic power quality assessments, load studies, and coordination studies to support plant operations or capital project decisions.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Specialist electrical services across the full project lifecycle.
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">
            From early engineering support to commissioning, maintenance, and on-site technical
            manpower — Bodatec covers the key electrical disciplines required by industrial,
            utility, and energy clients.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading
            label="Core disciplines"
            title="Our six primary service areas"
            subtitle="Each service area is supported by qualified engineers and technicians with direct field experience."
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.shortDescription}
                icon={s.icon}
                href={s.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How we work section */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <div className="relative aspect-[3/1] w-full mb-12 rounded-2xl overflow-hidden">
            <Image
              src="/images/services-commissioning-testing.jpg"
              alt="Commissioning and testing work in progress on electrical equipment"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                label="How we work"
                title="Flexible engagement, structured delivery."
              />
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Bodatec engages with clients in the way that best fits their project structure.
                  We can operate as a specialist subcontractor, as a supplier of technical
                  personnel, or as an independent engineering support partner.
                </p>
                <p>
                  In all cases, we begin with a clear scope definition. We agree on what will be
                  delivered, by whom, to what standard, and by when. This removes ambiguity and
                  allows proper planning on both sides.
                </p>
                <p>
                  Our deliverables are always documented — test reports, commissioning dossiers,
                  calculation reports, or activity records — depending on the nature of the work.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Scope definition', desc: 'We agree precisely what will be delivered and under what conditions.' },
                { step: '02', title: 'Team mobilisation', desc: 'We deploy the right engineers or technicians with the correct qualifications and tools.' },
                { step: '03', title: 'Execution', desc: 'Work is performed to agreed standards with real-time coordination and communication.' },
                { step: '04', title: 'Documentation', desc: 'Complete records are produced and handed over at the close of each scope.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <div className="text-2xl font-bold text-steel-200 w-10 flex-shrink-0 pt-0.5">
                    {item.step}
                  </div>
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

      {/* Additional capabilities */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading
            label="Additional capabilities"
            title="Further support areas"
            subtitle="Beyond our core disciplines, Bodatec can assist with the following."
            className="max-w-2xl mb-10"
          />
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

      {/* Service navigation */}
      <section className="section-padding bg-navy-950">
        <div className="container-xl">
          <p className="section-label text-navy-400 mb-8">Browse services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="flex items-center justify-between px-5 py-4 border border-navy-800 hover:border-navy-500 hover:bg-navy-900 transition-all group"
              >
                <span className="text-sm font-medium text-steel-300 group-hover:text-white transition-colors">
                  {s.title}
                </span>
                <ArrowRight className="w-4 h-4 text-navy-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Unsure which service fits your requirement?"
        subtitle="Contact us and describe your situation. We will tell you directly how we can help and what a typical engagement looks like."
        primaryLabel="Contact Bodatec"
        secondaryLabel="View industries"
        secondaryHref="/industries"
      />
    </>
  )
}
