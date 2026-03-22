import { Network, Factory, Wind, Building2, Anchor, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Network,
  Factory,
  Wind,
  Building2,
  Anchor,
  Shield,
}

interface IndustryCardProps {
  title: string
  description: string
  icon: string
  capabilities?: string[]
  dark?: boolean
  className?: string
}

export default function IndustryCard({
  title,
  description,
  icon,
  capabilities,
  dark = false,
  className,
}: IndustryCardProps) {
  const Icon = iconMap[icon] ?? Factory

  return (
    <div
      className={cn(
        'border p-6 hover:shadow-md transition-all duration-200',
        dark
          ? 'bg-navy-900 border-navy-800 hover:border-navy-600'
          : 'bg-white border-steel-200 hover:border-navy-300',
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            'w-9 h-9 flex items-center justify-center flex-shrink-0',
            dark ? 'bg-navy-700' : 'bg-navy-900'
          )}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h3
          className={cn(
            'text-base font-semibold',
            dark ? 'text-white' : 'text-navy-900'
          )}
        >
          {title}
        </h3>
      </div>
      <p
        className={cn(
          'text-sm leading-relaxed mb-4',
          dark ? 'text-steel-400' : 'text-steel-600'
        )}
      >
        {description}
      </p>
      {capabilities && capabilities.length > 0 && (
        <ul className="space-y-1.5">
          {capabilities.map((item) => (
            <li
              key={item}
              className={cn(
                'flex items-start gap-2 text-xs',
                dark ? 'text-steel-500' : 'text-steel-500'
              )}
            >
              <span
                className={cn(
                  'w-1 h-1 rounded-full mt-1.5 flex-shrink-0',
                  dark ? 'bg-navy-500' : 'bg-navy-400'
                )}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
