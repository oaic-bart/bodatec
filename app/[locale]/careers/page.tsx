import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight, CheckCircle, Wrench, ClipboardCheck, Zap, HardHat, Cpu, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/ui/CTABanner'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'careers' })
  return {
    title: 'Careers at Bodatec | Technical Opportunities in Belgium',
    description: t('heroSubtitle'),
  }
}

const iconMap: Record<string, React.FC<{ className?: string }>> = { Wrench, ClipboardCheck, Zap, HardHat, Cpu, Users }

const jobKeys = [
  { key: 'jobTechnicians', icon: 'Wrench' },
  { key: 'jobCommissioning', icon: 'ClipboardCheck' },
  { key: 'jobHV', icon: 'Zap' },
  { key: 'jobSupervisors', icon: 'HardHat' },
  { key: 'jobEngineers', icon: 'Cpu' },
  { key: 'jobFreelance', icon: 'Users' },
]

export default function CareersPage() {
  const t = useTranslations('careers')

  const culturePoints = [
    { title: t('cultureReal'), description: t('cultureRealDesc') },
    { title: t('cultureColleagues'), description: t('cultureColleaguesDesc') },
    { title: t('cultureDirect'), description: t('cultureDirectDesc') },
    { title: t('cultureBelgian'), description: t('cultureBelgianDesc') },
    { title: t('cultureFlexible'), description: t('cultureFlexibleDesc') },
    { title: t('cultureDevelopment'), description: t('cultureDevelopmentDesc') },
  ]

  const expectations = [t('expect1'), t('expect2'), t('expect3'), t('expect4'), t('expect5')]
  const applySteps = [t('applyStep1'), t('applyStep2'), t('applyStep3'), t('applyStep4')]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">{t('label')}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">{t('heroTitle')}</h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">{t('heroSubtitle')}</p>
          <div className="mt-8">
            <Link href="/contact" className="btn-outline-white">{t('sendCV')} <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading label={t('whyBodatecLabel')} title={t('whyBodatecTitle')} subtitle={t('whyBodatecSubtitle')} className="max-w-2xl mb-12" />
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

      {/* Roles */}
      <section className="section-padding bg-steel-50 border-y border-steel-200">
        <div className="container-xl">
          <SectionHeading label={t('rolesLabel')} title={t('rolesTitle')} subtitle={t('rolesSubtitle')} className="max-w-2xl mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobKeys.map((job) => {
              const Icon = iconMap[job.icon] ?? Zap
              return (
                <div key={job.key} className="bg-white border border-steel-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-navy-900">{t(job.key)}</h3>
                  </div>
                  <p className="text-sm text-steel-600 leading-relaxed mb-4">{t(`${job.key}Desc`)}</p>
                  <ul className="space-y-1.5">
                    {[t(`${job.key}Ex1`), t(`${job.key}Ex2`), t(`${job.key}Ex3`)].map((ex) => (
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

      {/* Expectations */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading label={t('expectationsLabel')} title={t('expectationsTitle')} />
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>{t('expectationsP1')}</p>
                <p>{t('expectationsP2')}</p>
                <p>{t('expectationsP3')}</p>
              </div>
              <ul className="mt-8 space-y-2.5">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-steel-700">
                    <CheckCircle className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-900 p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-6">{t('applyLabel')}</p>
              <p className="text-steel-300 text-sm leading-relaxed mb-6">{t('applyBody')}</p>
              <div className="space-y-3">
                {applySteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-steel-300">
                    <span className="w-5 h-5 bg-navy-700 flex items-center justify-center flex-shrink-0 text-xs font-bold text-navy-300 rounded-none mt-0.5">{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-outline-white w-full justify-center text-sm">{t('contactCareers')} <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={t('ctaTitle')} subtitle={t('ctaSubtitle')} primaryLabel={t('ctaPrimary')} secondaryLabel={t('ctaSecondary')} secondaryHref="/about" />
    </>
  )
}
