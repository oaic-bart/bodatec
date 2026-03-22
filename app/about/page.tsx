import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, Target, Award } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/ui/CTABanner'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'About Bodatec | Belgian Electrical Engineering Company',
  description:
    'Learn about Bodatec — a Belgian electrical engineering and technical services company serving industrial, utility, and energy clients across Belgium and Europe.',
}

const values = [
  {
    icon: CheckCircle,
    title: 'Technical rigour',
    description:
      'We apply proper engineering standards and safe working practices on every project, regardless of scale.',
  },
  {
    icon: Target,
    title: 'Clear delivery',
    description:
      'We define what we will do and we do it. Clients can rely on Bodatec to deliver on agreed scope and schedule.',
  },
  {
    icon: Award,
    title: 'Qualified personnel',
    description:
      'Our engineers and technicians hold relevant qualifications and operate within certified competency frameworks.',
  },
  {
    icon: MapPin,
    title: 'Local and European',
    description:
      'Bodatec is established in Belgium and supports clients across Belgian and broader European markets.',
  },
]

const trustPoints = [
  'HV-qualified engineers capable of working on live and de-energised systems',
  'Structured commissioning and testing processes with full documentation',
  'Clear scope definition before work begins — no open-ended commitments',
  'Direct communication with the people actually doing the work',
  'Flexible engagement models: project-based, time-based, or on-call support',
  'Understanding of Belgian regulatory and safety frameworks',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">About us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Engineering competence rooted in Belgian industry.
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">
            Bodatec is a Belgian electrical engineering and technical services company. We provide
            qualified engineers and technicians to industrial, utility, and energy clients who need
            reliable, practical support on electrical systems.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                label="Who we are"
                title="A specialist electrical engineering team."
              />
              <div className="mt-6 space-y-5 text-steel-600 leading-relaxed">
                <p>
                  Bodatec was established to fill a clear gap in the Belgian market: a technically
                  capable, professionally operated contractor that specialises in electrical
                  engineering and technical services for industrial and energy clients.
                </p>
                <p>
                  Our work spans the full project lifecycle — from early-stage engineering support
                  and equipment specifications, through commissioning and site testing, to ongoing
                  maintenance and fault investigation on operational assets.
                </p>
                <p>
                  We are not a general contractor. Electrical engineering is our sole focus, and
                  that focus allows us to maintain a high standard of technical quality across
                  everything we do.
                </p>
                <p>
                  Bodatec operates in Belgium as an independent company, with connections to a
                  broader group of technical companies operating in the energy and industrial space.
                  This allows us to draw on wider resources and expertise where projects require it.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <ImagePlaceholder
                label="About — Bodatec team or office"
                hint="e.g. team photo, engineering office, or site meeting — 640×400"
                className="aspect-[16/10] w-full"
              />
              <div className="bg-navy-950 p-8 relative">
                <span className="absolute top-5 left-6 text-5xl leading-none text-navy-700 font-serif select-none" aria-hidden="true">&ldquo;</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-4 pt-4">
                  Our approach
                </p>
                <p className="text-steel-200 font-medium leading-relaxed text-base">
                  We believe the best technical support comes from engineers and technicians who
                  understand both the engineering principles and the practical realities of site
                  work. Bodatec is built around people who have that combination.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Belgium', sub: 'Based and registered' },
                  { label: 'HV/MV', sub: 'Qualified expertise' },
                  { label: 'Full lifecycle', sub: 'Design to maintenance' },
                  { label: 'EU reach', sub: 'European deployments' },
                ].map((item) => (
                  <div key={item.label} className="border border-steel-200 p-4 bg-white">
                    <div className="text-lg font-bold text-navy-900 mb-0.5">{item.label}</div>
                    <div className="text-xs text-steel-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <SectionHeading
            label="Our values"
            title="How we operate"
            subtitle="The principles that guide how Bodatec works with clients and executes projects."
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 bg-white border border-steel-200 p-6">
                <div className="w-10 h-10 bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1.5">{v.title}</h3>
                  <p className="text-sm text-steel-600 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients trust Bodatec */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Client trust"
                title="Why clients work with Bodatec"
                subtitle="Clients choose Bodatec because we are straightforward to work with and technically dependable."
              />
              <ul className="mt-8 space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-steel-700">
                    <CheckCircle className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Talk to our team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <ImagePlaceholder
                label="Project / site photo"
                hint="e.g. substation, switchgear, or cable testing — 640×360"
                className="aspect-video w-full"
              />
            <div className="bg-navy-900 p-10 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-6">
                Company profile
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Company type', value: 'Electrical engineering & technical services' },
                  { label: 'Location', value: 'Belgium (EU)' },
                  { label: 'Core focus', value: 'Industrial, energy & utility sectors' },
                  { label: 'Service range', value: 'Design → commissioning → maintenance' },
                  { label: 'Team profile', value: 'Engineers & qualified field technicians' },
                  { label: 'Project reach', value: 'Belgium and wider Europe' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between gap-4 border-b border-navy-800 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-navy-400">{item.label}</span>
                    <span className="text-sm text-white font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to know more about how Bodatec can support your project?"
        subtitle="Contact us for a direct conversation about your requirements."
        primaryLabel="Contact Bodatec"
      />
    </>
  )
}
