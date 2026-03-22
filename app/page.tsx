import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  MapPin,
  ChevronRight,
  Wrench,
  ClipboardCheck,
  HardHat,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import IndustryCard from '@/components/ui/IndustryCard'
import CTABanner from '@/components/ui/CTABanner'
import StatsStrip from '@/components/ui/StatsStrip'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { services } from '@/data/services'
import { industries } from '@/data/industries'

export const metadata: Metadata = {
  title: 'Bodatec | Electrical Engineering & Industrial Technical Services in Belgium',
  description:
    'Bodatec is a Belgian electrical engineering company delivering testing, commissioning, HV/MV support, maintenance, and specialist technical services for industry, utilities, and energy clients across Belgium and Europe.',
}

const stats = [
  { value: 'BE', label: 'Registered in Belgium' },
  { value: 'HV/MV', label: 'Qualified for high-voltage systems' },
  { value: '6', label: 'Core service disciplines' },
  { value: 'EU', label: 'Projects across Europe' },
]

const strengths = [
  {
    icon: CheckCircle,
    title: 'Technical competence',
    description:
      'Our team brings hands-on experience across HV/MV systems, protection engineering, commissioning, and industrial electrical works.',
  },
  {
    icon: Zap,
    title: 'Site experience',
    description:
      'We operate in live environments, complex industrial facilities, and active substations — safely and efficiently.',
  },
  {
    icon: Shield,
    title: 'Reliable execution',
    description:
      'Bodatec delivers on agreed scope and timelines. We produce proper documentation and communicate clearly throughout.',
  },
  {
    icon: Users,
    title: 'Flexible support',
    description:
      'From a single specialist to a full site team, we scale our deployment to fit your project requirements.',
  },
  {
    icon: MapPin,
    title: 'Belgian presence',
    description:
      'Based in Lokeren, Belgium, with the ability to mobilise quickly across the country and into neighbouring European markets.',
  },
  {
    icon: Wrench,
    title: 'Practical mindset',
    description:
      'We focus on what needs to happen on site — not theory. Our people understand both the engineering and the execution.',
  },
]

const scenarios = [
  {
    icon: ClipboardCheck,
    title: 'Substation commissioning support',
    description:
      'An EPC contractor needs commissioning engineers for protection relay testing on a new 33/11kV substation. Bodatec deploys a qualified two-person team with full test equipment.',
  },
  {
    icon: Wrench,
    title: 'Industrial shutdown maintenance',
    description:
      'A chemical plant requires annual maintenance on its MV switchgear during a planned shutdown window. Bodatec coordinates and executes the full scope within the outage schedule.',
  },
  {
    icon: Zap,
    title: 'HV cable system testing',
    description:
      'A utility needs HV cable testing and condition assessment on a legacy underground cable circuit. Bodatec provides qualified personnel and the necessary test equipment.',
  },
  {
    icon: HardHat,
    title: 'Electrical engineering capacity',
    description:
      'A design office is under-resourced on a renewable energy project. Bodatec provides a resident electrical engineer to support documentation, calculations, and vendor review.',
  },
]

const capabilities = [
  { label: 'Testing & Commissioning', href: '/services/testing-commissioning' },
  { label: 'HV / MV Engineering', href: '/services/hv-mv-support' },
  { label: 'Maintenance Support', href: '/services/maintenance-troubleshooting' },
  { label: 'Technical Manpower', href: '/services/technical-specialist-support' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" aria-hidden="true" />

        <div className="container-xl py-24 lg:py-36 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label-light mb-5">
                Electrical Engineering · Lokeren, Belgium
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Practical electrical engineering for industry and energy.
              </h1>
              <p className="text-base lg:text-lg text-steel-300 leading-relaxed mb-10 max-w-2xl">
                Bodatec supports industrial and energy clients with reliable electrical engineering,
                testing, commissioning, maintenance, and HV/MV services — delivered by qualified
                engineers and technicians based in Belgium.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="btn-outline-white">
                  Our Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="btn-white">
                  Discuss Your Project
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              label="Hero — Engineer on site"
              hint="e.g. engineer at switchgear / substation — 640×480 or 16:9"
              variant="dark"
              className="hidden lg:flex aspect-[4/3] w-full"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────── */}
      <StatsStrip stats={stats} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="About Bodatec"
                title="Belgian electrical expertise, practical execution."
                subtitle="Bodatec is a Belgian electrical engineering and technical services company. We work with industrial clients, utilities, EPC contractors, and energy developers across Belgium and Europe."
              />
              <p className="mt-5 text-steel-600 leading-relaxed">
                Our team combines qualified engineers and experienced field technicians who
                understand both the technical demands and the operational realities of complex
                electrical projects. We integrate cleanly with client and contractor teams,
                execute on site to a high standard, and produce proper documentation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">
                  About Bodatec <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <ImagePlaceholder
                label="Team / fieldwork photo"
                hint="e.g. Bodatec team working on-site — 640×400 or 16:10"
                className="aspect-[16/10] w-full"
              />
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group border border-steel-200 p-4 bg-steel-50 hover:border-navy-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 transition-all duration-200"
                  >
                    <div className="w-8 h-0.5 bg-navy-600 mb-3 group-hover:w-12 transition-all duration-300" aria-hidden="true" />
                    <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                    <p className="text-xs text-navy-600 mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              label="What we do"
              title="Core service disciplines"
              subtitle="Specialist technical services across the full electrical project and asset lifecycle."
            />
            <Link href="/services" className="btn-secondary whitespace-nowrap self-start lg:self-auto">
              All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ── WHY BODATEC ──────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading
            label="Why Bodatec"
            title="What makes Bodatec a reliable technical partner"
            subtitle="Clients work with Bodatec because we combine engineering knowledge with practical field experience — and because we deliver what we commit to."
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item) => (
              <div key={item.title} className="flex gap-4 group p-5 border border-transparent hover:border-steel-200 hover:bg-steel-50 transition-all duration-200">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-navy-50 group-hover:bg-navy-900 transition-colors duration-200 mt-0.5">
                  <item.icon className="w-4 h-4 text-navy-700 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-steel-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ──────────────────────────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <div className="container-xl">
          <SectionHeading
            label="Sectors"
            title="Industries we serve"
            subtitle="We operate across a range of industrial and energy sectors, adapting our approach to each operating environment."
            light
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <IndustryCard
                key={ind.slug}
                title={ind.title}
                description={ind.description}
                icon={ind.icon}
                dark
              />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/industries" className="btn-outline-white">
              View all sectors <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SUPPORT SCENARIOS ────────────────────────────────────── */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <SectionHeading
            label="In practice"
            title="Typical support scenarios"
            subtitle="These are the kinds of situations where Bodatec steps in and adds immediate value."
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="flex gap-5 bg-white border border-steel-200 p-6 hover:border-navy-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-9 h-9 bg-navy-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <s.icon className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-steel-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Discuss your scenario <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CAREERS TEASER ───────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                label="Careers"
                title="Work with technically serious people on real projects."
                subtitle="Bodatec is building a team of qualified engineers and technicians who want to work on challenging electrical systems in Belgium and beyond."
              />
              <ul className="mt-6 space-y-2.5" role="list">
                {[
                  'Commissioning engineers and technicians',
                  'HV authorised and competent persons',
                  'Electrical site supervisors',
                  'Protection and design engineers',
                  'Freelance and contract specialists',
                ].map((role) => (
                  <li key={role} className="flex items-center gap-2.5 text-sm text-steel-700">
                    <ChevronRight className="w-4 h-4 text-navy-600 flex-shrink-0" aria-hidden="true" />
                    {role}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/careers" className="btn-primary">
                  Explore Careers <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <ImagePlaceholder
                label="Careers — engineer portrait or team"
                hint="e.g. technician working on switchgear — 640×360 or 16:9"
                className="aspect-video w-full"
              />
              <div className="bg-navy-900 p-8 text-white">
                <p className="section-label-light mb-5">What we offer</p>
                <ul className="space-y-4" role="list">
                  {[
                    'Varied technical work on real industrial and energy projects',
                    'Direct involvement from day one — no layers of bureaucracy',
                    'Technically focused environment with qualified colleagues',
                    'Belgian base with potential for European project work',
                    'Opportunities for both permanent and contract arrangements',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-steel-300">
                      <span
                        className="w-5 h-5 bg-navy-700 flex items-center justify-center flex-shrink-0 text-xs font-bold text-navy-300 mt-0.5"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTOR TAGS ──────────────────────────────────────────── */}
      <section className="bg-navy-950 py-8">
        <div className="container-xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-500 mr-2 flex-shrink-0">
              Active in
            </p>
            {[
              'Utilities & Grid',
              'Industrial Plants',
              'Renewable Energy',
              'Substations',
              'Offshore Wind',
              'Critical Infrastructure',
            ].map((sector) => (
              <span
                key={sector}
                className="text-xs font-medium text-steel-400 border border-navy-700 px-3 py-1.5"
              >
                {sector}
              </span>
            ))}
            <Link
              href="/industries"
              className="text-xs font-semibold text-navy-300 hover:text-white focus-visible:outline-white transition-colors flex items-center gap-1 ml-auto"
            >
              All sectors <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <CTABanner
        title="Ready to discuss your project?"
        subtitle="Tell us about your electrical engineering or technical support requirement. We will give you a straight answer on how Bodatec can help."
        primaryLabel="Get in touch"
        secondaryLabel="View our services"
        secondaryHref="/services"
      />
    </>
  )
}
