'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from '@/i18n/navigation'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo from '@/components/ui/Logo'
import LanguageToggle from '@/components/ui/LanguageToggle'

const serviceKeys = [
  { key: 'electrical-engineering', href: '/services/electrical-engineering' },
  { key: 'testing-commissioning', href: '/services/testing-commissioning' },
  { key: 'maintenance-troubleshooting', href: '/services/maintenance-troubleshooting' },
  { key: 'hv-mv-support', href: '/services/hv-mv-support' },
  { key: 'industrial-electrical-works', href: '/services/industrial-electrical-works' },
  { key: 'technical-specialist-support', href: '/services/technical-specialist-support' },
] as const

export default function Header() {
  const t = useTranslations('nav')
  const ts = useTranslations('services')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const services = serviceKeys.map((s) => ({
    label: ts(`${s.key}.title`),
    href: s.href,
  }))

  const navItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('services'), href: '/services', dropdown: services },
    { label: t('industries'), href: '/industries' },
    { label: t('careers'), href: '/careers' },
  ]

  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (servicesOpen) {
          setServicesOpen(false)
          triggerRef.current?.focus()
        }
        if (mobileOpen) {
          setMobileOpen(false)
        }
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [servicesOpen, mobileOpen])

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-navy-900 focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        {t('skipToContent')}
      </a>

      <header className="bg-white border-b border-steel-200 sticky top-0 z-50" role="banner">
        <div className="container-xl">
          <div className="flex items-center justify-between h-[4.5rem]">

            {/* ── Logo ─────────────────────────────────────────── */}
            <Logo variant="dark" size="sm" />

            {/* ── Desktop nav ──────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.href}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      ref={triggerRef}
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onFocus={() => setServicesOpen(true)}
                      className={cn(
                        'flex items-center gap-1 px-4 py-6 text-sm font-medium border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy-600',
                        pathname.startsWith('/services')
                          ? 'border-navy-900 text-navy-900'
                          : 'border-transparent text-steel-600 hover:text-navy-900'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-150',
                          servicesOpen && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 w-68 bg-white border border-steel-200 shadow-xl py-2 z-50"
                        role="menu"
                        aria-label="Services submenu"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            className="block px-5 py-2.5 text-sm text-steel-700 hover:bg-steel-50 hover:text-navy-900 focus-visible:outline-none focus-visible:bg-steel-50 focus-visible:text-navy-900 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                        <div className="border-t border-steel-100 mt-2 pt-2">
                          <Link
                            href="/services"
                            role="menuitem"
                            className="block px-5 py-2.5 text-sm font-semibold text-navy-700 hover:bg-steel-50 focus-visible:outline-none focus-visible:bg-steel-50 transition-colors"
                          >
                            {t('allServices')} →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-4 py-6 text-sm font-medium border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy-600',
                      pathname === item.href
                        ? 'border-navy-900 text-navy-900'
                        : 'border-transparent text-steel-600 hover:text-navy-900'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── CTA + language + mobile toggle ───────────────── */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <LanguageToggle />
              </div>
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
              >
                {t('cta')}
              </Link>
              <button
                className="lg:hidden p-2 text-steel-600 hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? t('mobileMenuClose') : t('mobileMenuOpen')}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen
                  ? <X className="w-5 h-5" aria-hidden="true" />
                  : <Menu className="w-5 h-5" aria-hidden="true" />
                }
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile menu ──────────────────────────────────────── */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-steel-200"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="container-xl py-4 space-y-1" aria-label="Mobile navigation links">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-expanded={mobileServicesOpen}
                        className={cn(
                          'flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600',
                          pathname.startsWith('/services')
                            ? 'bg-navy-50 text-navy-900'
                            : 'text-steel-700 hover:bg-steel-50 hover:text-navy-900'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-150',
                            mobileServicesOpen && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-4 mt-1 space-y-1 border-l border-steel-200 ml-3">
                          <Link
                            href="/services"
                            className="block px-3 py-2 text-xs font-semibold text-navy-700 hover:text-navy-900 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {t('allServices')}
                          </Link>
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3 py-2 text-xs text-steel-600 hover:text-navy-900 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600',
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'bg-navy-50 text-navy-900'
                          : 'text-steel-700 hover:bg-steel-50 hover:text-navy-900'
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-steel-100 space-y-3">
                <div className="sm:hidden px-3">
                  <LanguageToggle />
                </div>
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {t('cta')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
