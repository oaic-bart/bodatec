'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'

export default function LanguageToggle() {
  const locale = useLocale()
  const t = useTranslations('language')
  const pathname = usePathname()
  const router = useRouter()

  const otherLocale: Locale = locale === 'nl' ? 'en' : 'nl'

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale })
  }

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide border border-steel-300 hover:border-navy-500 hover:text-navy-900 text-steel-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
      aria-label={t('switchTo')}
      title={t('switchTo')}
    >
      <span className={locale === 'nl' ? 'text-navy-900 font-bold' : ''}>NL</span>
      <span className="text-steel-300" aria-hidden="true">|</span>
      <span className={locale === 'en' ? 'text-navy-900 font-bold' : ''}>EN</span>
    </button>
  )
}
