import { Link } from '@/i18n/navigation'
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import CTABanner from '@/components/ui/CTABanner'

interface ServicePageLayoutProps {
  title: string
  headline: string
  intro: string
  description: string
  scope: string[]
  deliverables: string[]
  idealFor: string[]
  whyBodatec?: string[]
  currentSlug: string
  image?: string
  otherServices: { title: string; slug: string; href: string }[]
}

export default function ServicePageLayout({
  title,
  headline,
  intro,
  description,
  scope,
  deliverables,
  idealFor,
  whyBodatec,
  currentSlug,
  image,
  otherServices,
}: ServicePageLayoutProps) {
  const t = useTranslations('services')

  const defaultWhyBodatec = [
    t('defaultWhyBodatec.0'),
    t('defaultWhyBodatec.1'),
    t('defaultWhyBodatec.2'),
    t('defaultWhyBodatec.3'),
    t('defaultWhyBodatec.4'),
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" aria-hidden="true" />
        <div className="container-xl py-20 lg:py-28 relative">
          <nav className="flex items-center gap-2 text-xs text-navy-400 mb-6" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-navy-300 focus-visible:outline-white transition-colors">
              {t('breadcrumbServices')}
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-steel-300" aria-current="page">{title}</span>
          </nav>
          <p className="section-label-light mb-4">{title}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            {headline}
          </h1>
          <p className="text-base lg:text-lg text-steel-300 max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left / main column */}
            <div className="lg:col-span-2 space-y-12">

              {/* Service image */}
              {image && (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} — Bodatec service`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Overview */}
              <div className="border-l-4 border-navy-600 pl-6">
                <h2 className="text-lg font-semibold text-navy-900 mb-3">{t('overview')}</h2>
                <p className="text-steel-600 leading-relaxed">{description}</p>
              </div>

              {/* Scope of work */}
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-1 pb-3 border-b border-steel-200">
                  {t('scopeOfWork')}
                </h2>
                <ul className="mt-5 space-y-3">
                  {scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-steel-700">
                      <CheckCircle className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Typical deliverables */}
              <div className="bg-navy-950 p-6 lg:p-8">
                <h2 className="text-base font-semibold text-white mb-5 uppercase tracking-wide text-xs">
                  {t('typicalDeliverables')}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-steel-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-1 pb-3 border-b border-steel-200">
                  {t('typicalClients')}
                </h2>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {idealFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-steel-50 border border-steel-200 px-4 py-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-600 mt-1.5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-steel-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-5">
              {/* Why Bodatec */}
              <div className="bg-navy-900 p-6 text-white lg:sticky lg:top-24">
                <p className="section-label-light mb-4">{t('whyBodatecLabel')}</p>
                <ul className="space-y-3">
                  {(whyBodatec ?? defaultWhyBodatec).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-steel-300">
                      <CheckCircle className="w-3.5 h-3.5 text-navy-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-navy-800 mt-6 pt-5">
                  <Link
                    href="/contact"
                    className="btn-outline-white w-full justify-center text-sm focus-visible:outline-white"
                  >
                    {t('discussService')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Related services */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-steel-500 mb-3">
                  {t('otherServices')}
                </h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className="flex items-center justify-between px-4 py-3 border border-steel-200 hover:border-navy-400 hover:bg-steel-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 transition-all group text-sm"
                    >
                      <span className="text-steel-700 group-hover:text-navy-900 transition-colors">
                        {s.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-steel-400 group-hover:text-navy-600 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTABanner
        title={t('ctaServiceTitle', { service: title.toLowerCase() })}
        subtitle={t('ctaServiceSubtitle')}
        primaryLabel={t('ctaGetInTouch')}
        secondaryLabel={t('ctaBackToServices')}
        secondaryHref="/services"
      />
    </>
  )
}
