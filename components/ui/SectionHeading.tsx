import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && (
        <p
          className={cn(
            'text-xs font-semibold tracking-widest uppercase mb-3',
            light ? 'text-navy-300' : 'text-navy-600'
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl lg:text-4xl font-bold leading-tight',
          light ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            centered && 'max-w-2xl mx-auto',
            light ? 'text-steel-300' : 'text-steel-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
