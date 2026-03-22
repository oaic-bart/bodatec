import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  /** Label describing what image should go here */
  label: string
  /** Suggested dimensions or aspect ratio */
  hint?: string
  /** Visual variant */
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * Placeholder for images that will be added later.
 * Replace with next/image once real assets are available.
 */
export default function ImagePlaceholder({
  label,
  hint,
  variant = 'light',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-3 border-2 border-dashed',
        variant === 'dark'
          ? 'bg-navy-900/50 border-navy-600 text-navy-400'
          : 'bg-steel-100 border-steel-300 text-steel-400',
        className
      )}
      aria-hidden="true"
    >
      <ImageIcon className="w-8 h-8 opacity-60" />
      <p className="text-xs font-semibold uppercase tracking-wider text-center px-4">
        {label}
      </p>
      {hint && (
        <p className={cn(
          'text-[10px] tracking-wide text-center px-4',
          variant === 'dark' ? 'text-navy-500' : 'text-steel-400'
        )}>
          {hint}
        </p>
      )}
    </div>
  )
}
