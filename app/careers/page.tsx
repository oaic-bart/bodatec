import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Wrench,
  ClipboardCheck,
  Zap,
  HardHat,
  Cpu,
  Users,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/ui/CTABanner'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { jobCategories } from '@/data/careers'

export const metadata: Metadata = {
  title: 'Careers at Bodatec | Technical Opportunities in Belgium',
  description:
    'Join Bodatec — a Belgian electrical engineering company offering careers for electrical technicians, commissioning engineers, HV specialists, and technical professionals.',
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Wrench,
  ClipboardCheck,
  Zap,
  HardHat,
  Cpu,
  Users,
}

const culturePoints = [
  {
    title: 'Real technical work',
    description:
      'You will work on substations, industrial plants, and live electrical systems — not simulations or desk studies.',
  },
  {
    title: 'Qualified colleagues',
    description:
      'The team you join at Bodatec will challenge you technically. We expect rigour and we model it ourselves.',
  },
  {
    title: 'Direct involvement',
    description:
      'Bodatec is not a large corporation with layers of management. You will be involved, your input will matter, and you will see the results of your work.',
  },
  {
    title: 'Belgian base',
    description:
      'The majority of our work is in Belgium, with the option to work on international assignments for those who want that.',
  },
  {
    title: 'Flexible structures',
    description:
      'We work with both permanent employees and qualified freelance contractors depending on project needs.',
  },
  {
    title: 'Career development',
    description:
      'We invest in people who want to develop. Whether that is HV authorisation, protection engineering, or project leadership — there is a path.',
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">Careers</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Join a technically serious electrical engineering team.
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">
            Bodatec is building a team of qualified engineers and technicians who want to work on
            real electrical systems — not templates or frameworks. If you have hands-on experience
            and high standards, we want to hear from you.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-outline-white">
              Send us your CV <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <div className="bg-steel-50 border-b border-steel-200">
        <div className="container-xl py-0">
          <ImagePlaceholder
            label="Careers — working environment"
            hint="e.g. wide shot of engineers on site, substation walkdown, or workshop — 1280×400 or 3:1"
            className="aspect-[3/1] w-full"
          />
        </div>
      </div>

      {/* Why work at Bodatec */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading
            label="Why Bodatec"
            title="What working at Bodatec means in practice."
            subtitle="We aim to be an employer where technically capable people can do interesting work, develop their skills, and be treated as professionals."
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturePoints.map((p) => (
              <div key={p.title} className="border border-steel-200 p-6 bg-white hover:border-navy-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-sm text-steel-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job categories */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <SectionHeading
            label="Roles"
            title="Who we are looking for"
            subtitle="We recruit across a range of electrical engineering and technical disciplines."
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((cat) => {
              const Icon = iconMap[cat.icon] ?? Zap
              return (
                <div key={cat.title} className="bg-white border border-steel-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-navy-900">{cat.title}</h3>
                  </div>
                  <p className="text-sm text-steel-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <ul className="space-y-1.5">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-xs text-steel-500">
                        <span className="w-1 h-1 rounded-full bg-navy-400 mt-1.5 flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What we expect */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                label="Expectations"
                title="What Bodatec expects from its team."
              />
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Bodatec operates in environments where errors matter. We work on energised
                  systems, in industrial plants, and in substations. We expect every person on our
                  team to take that seriously — technically and behaviourally.
                </p>
                <p>
                  We expect people to be reliable. That means arriving prepared, communicating
                  clearly, and completing what was agreed. It means knowing your limits and saying
                  so when something is outside your competency.
                </p>
                <p>
                  We are practical. We do not expect perfection — we expect honesty, effort, and a
                  focus on getting the right outcome for the project and the client.
                </p>
              </div>
              <ul className="mt-8 space-y-2.5">
                {[
                  'Relevant technical qualifications for your discipline',
                  'Hands-on field experience (for site roles)',
                  'Ability to produce or review technical documentation',
                  'Safety-aware mindset — especially for HV and industrial environments',
                  'Clear communication in English and/or Dutch/French',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-steel-700">
                    <CheckCircle className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-6">
                Apply to Bodatec
              </p>
              <p className="text-steel-300 text-sm leading-relaxed mb-6">
                We do not always have open positions listed — but we are always interested in
                speaking to qualified people. If you have relevant experience in electrical
                engineering, commissioning, HV systems, or industrial electrical works, send us
                your CV and a short note on what you are looking for.
              </p>
              <div className="space-y-3">
                {[
                  'Send your CV to careers@bodatec.be',
                  'Include a brief note on your background and what you are looking for',
                  'We will review and respond within five working days',
                  'Initial conversation is non-committal on both sides',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-steel-300">
                    <span className="w-5 h-5 bg-navy-700 flex items-center justify-center flex-shrink-0 text-xs font-bold text-navy-300 rounded-none mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-outline-white w-full justify-center text-sm">
                  Contact us about careers <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to apply or find out more?"
        subtitle="Send us your CV or contact us to start a conversation. No pressure, no commitment."
        primaryLabel="Get in touch"
        secondaryLabel="About Bodatec"
        secondaryHref="/about"
      />
    </>
  )
}
