import { Link } from '@/i18n/navigation'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('notFound')
  return (
    <section className="section-padding">
      <div className="container-xl text-center py-24">
        <p className="text-6xl font-bold text-steel-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-navy-900 mb-3">{t('title')}</h1>
        <p className="text-steel-600 mb-8 max-w-md mx-auto">{t('body')}</p>
        <Link href="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" /> {t('backHome')}
        </Link>
      </div>
    </section>
  )
}
