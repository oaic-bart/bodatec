import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight, CheckCircle, MapPin, Target, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/ui/CTABanner'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' })
  return {
    title: 'About Bodatec | Belgian Electrical Engineering Company',
    description: t('heroSubtitle'),
  }
}

export default function AboutPage() {
  const t = useTranslations('about')

  const values = [
    { icon: CheckCircle, title: t('valueTechnical'), description: t('valueTechnicalDesc') },
    { icon: Target, title: t('valueClear'), description: t('valueClearDesc') },
    { icon: Award, title: t('valueQualified'), description: t('valueQualifiedDesc') },
    { icon: MapPin, title: t('valueLocal'), description: t('valueLocalDesc') },
  ]

  const trustPoints = [t('trust1'), t('trust2'), t('trust3'), t('trust4'), t('trust5'), t('trust6')]

  const profileItems = [
    { label: t('profileType'), value: t('profileTypeValue') },
    { label: t('profileLocation'), value: t('profileLocationValue') },
    { label: t('profileFocus'), value: t('profileFocusValue') },
    { label: t('profileRange'), value: t('profileRangeValue') },
    { label: t('profileTeam'), value: t('profileTeamValue') },
    { label: t('profileReach'), value: t('profileReachValue') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-500 to-navy-700" />
        <div className="container-xl py-20 lg:py-28 relative">
          <p className="section-label-light mb-4">{t('label')}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            {t('heroTitle')}
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading label={t('whoWeAreLabel')} title={t('whoWeAreTitle')} />
              <div className="mt-6 space-y-5 text-steel-600 leading-relaxed">
                <p>{t('whoWeAreP1')}</p>
                <p>{t('whoWeAreP2')}</p>
                <p>{t('whoWeAreP3')}</p>
                <p>{t('whoWeAreP4')}</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                <Image src="/images/about-team-office.jpg" alt="Bodatec engineering team in an office setting" fill className="object-cover" />
              </div>
              <div className="bg-navy-950 p-8 relative">
                <span className="absolute top-5 left-6 text-5xl leading-none text-navy-700 font-serif select-none" aria-hidden="true">&ldquo;</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-4 pt-4">{t('approachLabel')}</p>
                <p className="text-steel-200 font-medium leading-relaxed text-base">{t('approachQuote')}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: t('statBelgium'), sub: t('statBelgiumSub') },
                  { label: t('statHVMV'), sub: t('statHVMVSub') },
                  { label: t('statLifecycle'), sub: t('statLifecycleSub') },
                  { label: t('statEU'), sub: t('statEUSub') },
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
          <SectionHeading label={t('valuesLabel')} title={t('valuesTitle')} subtitle={t('valuesSubtitle')} className="max-w-2xl mb-12" />
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

      {/* Trust */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label={t('trustLabel')} title={t('trustTitle')} subtitle={t('trustSubtitle')} />
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
                  {t('talkToTeam')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                <Image src="/images/project-site-photo.jpg" alt="Electrical project site with substation equipment" fill className="object-cover" />
              </div>
              <div className="bg-navy-900 p-10 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-6">{t('profileLabel')}</p>
                <div className="space-y-5">
                  {profileItems.map((item) => (
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

      <CTABanner title={t('ctaTitle')} subtitle={t('ctaSubtitle')} primaryLabel={t('ctaPrimary')} />
    </>
  )
}
