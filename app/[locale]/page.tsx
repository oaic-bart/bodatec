import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
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
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import IndustryCard from '@/components/ui/IndustryCard'
import CTABanner from '@/components/ui/CTABanner'
import StatsStrip from '@/components/ui/StatsStrip'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'home' })
  return {
    title: 'Bodatec | Electrical Engineering & Industrial Technical Services in Belgium',
    description: t('heroSubtitle'),
  }
}

// Service slugs with icons for the card grid
const serviceSlugs = [
  'electrical-engineering',
  'testing-commissioning',
  'maintenance-troubleshooting',
  'hv-mv-support',
  'industrial-electrical-works',
  'technical-specialist-support',
] as const

const serviceIcons = ['Cpu', 'ClipboardCheck', 'Wrench', 'Zap', 'HardHat', 'Users']

// Industry slugs for the industry grid
const industrySlugs = [
  'utilities-grid',
  'industrial-plants',
  'renewable-energy',
  'substations',
  'offshore-wind',
  'critical-infrastructure',
] as const

const industryIcons = ['Network', 'Factory', 'Wind', 'Building2', 'Anchor', 'Shield']

export default function HomePage() {
  const t = useTranslations('home')
  const ts = useTranslations('services')
  const ti = useTranslations('industries')

  const stats = [
    { value: 'BE', label: t('statBE') },
    { value: 'HV/MV', label: t('statHVMV') },
    { value: '6', label: t('stat6') },
    { value: 'EU', label: t('statEU') },
  ]

  const strengths = [
    { icon: CheckCircle, title: t('strengthTechnical'), description: t('strengthTechnicalDesc') },
    { icon: Zap, title: t('strengthSite'), description: t('strengthSiteDesc') },
    { icon: Shield, title: t('strengthReliable'), description: t('strengthReliableDesc') },
    { icon: Users, title: t('strengthFlexible'), description: t('strengthFlexibleDesc') },
    { icon: MapPin, title: t('strengthBelgian'), description: t('strengthBelgianDesc') },
    { icon: Wrench, title: t('strengthPractical'), description: t('strengthPracticalDesc') },
  ]

  const scenarios = [
    { icon: ClipboardCheck, title: t('scenario1Title'), description: t('scenario1Desc') },
    { icon: Wrench, title: t('scenario2Title'), description: t('scenario2Desc') },
    { icon: Zap, title: t('scenario3Title'), description: t('scenario3Desc') },
    { icon: HardHat, title: t('scenario4Title'), description: t('scenario4Desc') },
  ]

  const capabilities = [
    { label: t('capTestComm'), href: '/services/testing-commissioning' },
    { label: t('capHVMV'), href: '/services/hv-mv-support' },
    { label: t('capMaintenance'), href: '/services/maintenance-troubleshooting' },
    { label: t('capManpower'), href: '/services/technical-specialist-support' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" aria-hidden="true" />
        <div className="container-xl py-24 lg:py-36 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label-light mb-5">{t('heroLabel')}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-base lg:text-lg text-steel-300 leading-relaxed mb-10 max-w-2xl">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="btn-outline-white">
                  {t('ourServices')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="btn-white">
                  {t('discussProject')}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-engineer-on-site.jpg"
                alt="Electrical engineer working on site at a substation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
      </section>

      {/* STATS */}
      <StatsStrip stats={stats} />

      {/* INTRO */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label={t('aboutLabel')}
                title={t('aboutTitle')}
                subtitle={t('aboutSubtitle')}
              />
              <p className="mt-5 text-steel-600 leading-relaxed">
                {t('aboutBody')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">
                  {t('aboutBodatec')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  {t('ourServicesBtn')}
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/team-fieldwork.jpg"
                  alt="Bodatec team working on-site at an electrical facility"
                  fill
                  className="object-cover"
                />
              </div>
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
                      {ts('learnMore')} <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              label={t('whatWeDo')}
              title={t('coreServiceDisciplines')}
              subtitle={t('coreServiceSubtitle')}
            />
            <Link href="/services" className="btn-secondary whitespace-nowrap self-start lg:self-auto">
              {t('allServices')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceSlugs.map((slug, i) => (
              <ServiceCard
                key={slug}
                title={ts(`${slug}.title`)}
                description={ts(`${slug}.shortDescription`)}
                icon={serviceIcons[i]}
                href={`/services/${slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY BODATEC */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading
            label={t('whyBodatec')}
            title={t('whyBodatecTitle')}
            subtitle={t('whyBodatecSubtitle')}
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

      {/* SECTORS */}
      <section className="section-padding bg-navy-950">
        <div className="container-xl">
          <SectionHeading
            label={t('sectors')}
            title={t('industriesWeServe')}
            subtitle={t('industriesSubtitle')}
            light
            className="max-w-2xl mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industrySlugs.map((slug, i) => (
              <IndustryCard
                key={slug}
                title={ti(`${slug}.title`)}
                description={ti(`${slug}.description`)}
                icon={industryIcons[i]}
                dark
              />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/industries" className="btn-outline-white">
              {t('viewAllSectors')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <SectionHeading
            label={t('inPractice')}
            title={t('typicalScenarios')}
            subtitle={t('typicalScenariosSubtitle')}
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
              {t('discussScenario')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CAREERS TEASER */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                label={t('careersLabel')}
                title={t('careersTitle')}
                subtitle={t('careersSubtitle')}
              />
              <ul className="mt-6 space-y-2.5" role="list">
                {[t('role1'), t('role2'), t('role3'), t('role4'), t('role5')].map((role) => (
                  <li key={role} className="flex items-center gap-2.5 text-sm text-steel-700">
                    <ChevronRight className="w-4 h-4 text-navy-600 flex-shrink-0" aria-hidden="true" />
                    {role}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/careers" className="btn-primary">
                  {t('exploreCareers')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/careers-engineer-portrait.jpg"
                  alt="Electrical engineer at work on site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-navy-900 p-8 text-white">
                <p className="section-label-light mb-5">{t('whatWeOffer')}</p>
                <ul className="space-y-4" role="list">
                  {[t('offer1'), t('offer2'), t('offer3'), t('offer4'), t('offer5')].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-steel-300">
                      <span className="w-5 h-5 bg-navy-700 flex items-center justify-center flex-shrink-0 text-xs font-bold text-navy-300 mt-0.5" aria-hidden="true">
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

      {/* SECTOR TAGS */}
      <section className="bg-navy-950 py-8">
        <div className="container-xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-500 mr-2 flex-shrink-0">
              {t('activeIn')}
            </p>
            {[t('sectorUtilities'), t('sectorIndustrial'), t('sectorRenewable'), t('sectorSubstations'), t('sectorOffshore'), t('sectorCritical')].map((sector) => (
              <span key={sector} className="text-xs font-medium text-steel-400 border border-navy-700 px-3 py-1.5">
                {sector}
              </span>
            ))}
            <Link
              href="/industries"
              className="text-xs font-semibold text-navy-300 hover:text-white focus-visible:outline-white transition-colors flex items-center gap-1 ml-auto"
            >
              {t('allSectors')} <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={t('ctaTitle')}
        subtitle={t('ctaSubtitle')}
        primaryLabel={t('ctaGetInTouch')}
        secondaryLabel={t('ctaViewServices')}
        secondaryHref="/services"
      />
    </>
  )
}
