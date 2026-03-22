import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** 'dark' = mark with navy bg + navy text (use on white/light backgrounds)
   *  'light' = mark with white bg + white text (use on dark/navy backgrounds) */
  variant?: 'dark' | 'light'
  /** Size of the mark icon */
  size?: 'sm' | 'md'
  className?: string
}

/**
 * Bodatec logo mark:
 * Three horizontal strokes of equal weight arranged in a stepped pattern,
 * referencing busbar connections and single-line diagram notation.
 * The rightward stagger suggests energy flow and directional routing.
 */
export function LogoMark({
  variant = 'dark',
  size = 'md',
}: {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md'
}) {
  const dim = size === 'sm' ? 32 : 38

  const bg = variant === 'light' ? '#ffffff' : '#0d1f3c'
  const fg = variant === 'light' ? '#0d1f3c' : '#ffffff'
  const accent = variant === 'light' ? '#1a3d82' : '#4a7cbf'

  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Square background */}
      <rect width="38" height="38" fill={bg} />

      {/* ── Mark: three stepped horizontal rails ────────────────── */}
      {/* Top rail — full width, left-anchored */}
      <rect x="7" y="9"  width="19" height="4" fill={fg} />

      {/* Middle rail — indented left, wider right */}
      <rect x="12" y="17" width="19" height="4" fill={fg} />

      {/* Bottom rail — same indent as middle */}
      <rect x="12" y="25" width="13" height="4" fill={fg} />

      {/* Vertical connector — joins top and middle rail on the right */}
      <rect x="22" y="13" width="4" height="4" fill={fg} />

      {/* Node accent dot — top-left of top rail (terminal/connection point) */}
      <rect x="7" y="9" width="4" height="4" fill={accent} />
    </svg>
  )
}

export default function Logo({
  variant = 'dark',
  size = 'md',
  className,
}: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-950'
  const subColor = variant === 'light' ? 'text-navy-300' : 'text-navy-400'

  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4',
        variant === 'light'
          ? 'focus-visible:outline-white'
          : 'focus-visible:outline-navy-600',
        className
      )}
      aria-label="Bodatec — home"
    >
      <LogoMark variant={variant} size={size} />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-extrabold tracking-wider uppercase',
            size === 'sm' ? 'text-lg' : 'text-xl',
            textColor
          )}
          style={{ letterSpacing: '0.12em' }}
        >
          BODATEC
        </span>
        <span
          className={cn(
            'text-[9px] font-semibold tracking-widest uppercase mt-0.5',
            subColor
          )}
          style={{ letterSpacing: '0.18em' }}
        >
          Electrical Engineering
        </span>
      </div>
    </Link>
  )
}
