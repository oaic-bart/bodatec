import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CTABanner({
  title,
  subtitle,
  primaryLabel = 'Discuss Your Project',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTABannerProps) {
  return (
    <section className={dark ? 'bg-navy-900' : 'bg-steel-50 border-y border-steel-200'}>
      <div className="container-xl py-14 lg:py-20">
        <div className="max-w-3xl">
          <h2
            className={`text-3xl lg:text-4xl font-bold leading-tight mb-4 ${
              dark ? 'text-white' : 'text-navy-900'
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg mb-8 ${dark ? 'text-steel-300' : 'text-steel-600'}`}>
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className={
                dark
                  ? 'btn-outline-white'
                  : 'btn-primary'
              }
            >
              {primaryLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={
                  dark
                    ? 'inline-flex items-center gap-2 text-steel-300 hover:text-white text-sm font-medium transition-colors'
                    : 'btn-secondary'
                }
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
