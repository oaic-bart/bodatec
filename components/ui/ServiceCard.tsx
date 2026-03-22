import Link from 'next/link'
import { ArrowRight, Cpu, ClipboardCheck, Wrench, Zap, HardHat, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Cpu,
  ClipboardCheck,
  Wrench,
  Zap,
  HardHat,
  Users,
}

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  className?: string
}

export default function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Zap

  return (
    <Link
      href={href}
      className={cn(
        'group block bg-white border border-steel-200 p-6 hover:border-navy-400 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 transition-all duration-200',
        className
      )}
    >
      <div className="w-10 h-10 bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-navy-900 transition-colors duration-200">
        <Icon className="w-5 h-5 text-navy-700 group-hover:text-white transition-colors duration-200" />
      </div>
      <h3 className="text-base font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-steel-600 leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 group-hover:gap-2.5 transition-all duration-200">
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  )
}
