import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { LogoMark } from '@/components/ui/Logo'

const serviceLinks = [
  { label: 'Electrical Engineering', href: '/services/electrical-engineering' },
  { label: 'Testing & Commissioning', href: '/services/testing-commissioning' },
  { label: 'Maintenance & Troubleshooting', href: '/services/maintenance-troubleshooting' },
  { label: 'HV / MV Support', href: '/services/hv-mv-support' },
  { label: 'Industrial Electrical Works', href: '/services/industrial-electrical-works' },
  { label: 'Technical Specialist Support', href: '/services/technical-specialist-support' },
]

const companyLinks = [
  { label: 'About Bodatec', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-steel-300" role="contentinfo" aria-label="Site footer">

      {/* Main footer */}
      <div className="container-xl pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">

          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1 pb-10 md:pb-0 border-b md:border-b-0 border-navy-800">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white group"
              aria-label="Bodatec — home"
            >
              <LogoMark variant="light" size="sm" />
              <div className="flex flex-col leading-none">
                <span
                  className="font-extrabold text-white text-xl tracking-wider uppercase"
                  style={{ letterSpacing: '0.12em' }}
                >
                  BODATEC
                </span>
                <span
                  className="text-[9px] font-semibold tracking-widest uppercase mt-0.5 text-navy-400"
                  style={{ letterSpacing: '0.18em' }}
                >
                  Electrical Engineering
                </span>
              </div>
            </Link>
            <p className="text-sm text-steel-400 leading-relaxed mb-6">
              Belgian electrical engineering and technical services company. Practical expertise
              for industrial, energy, and infrastructure clients across Belgium and Europe.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/bodatec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-navy-600 flex items-center justify-center text-steel-400 hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                aria-label="Bodatec on LinkedIn (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-steel-500 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-white focus-visible:outline-2 focus-visible:outline-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-steel-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-white focus-visible:outline-2 focus-visible:outline-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-steel-500 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-steel-600" aria-hidden="true" />
                <address className="not-italic text-sm text-steel-300 leading-relaxed">
                  Karrestraat 92<br />
                  9160 Lokeren, Belgium<br />
                  <span className="text-steel-500 text-xs">BE 1025.655.828</span>
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-steel-600" aria-hidden="true" />
                <a
                  href="tel:+32474699961"
                  className="text-sm text-steel-300 hover:text-white focus-visible:outline-white transition-colors"
                >
                  +32 474 69 99 61
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-steel-600" aria-hidden="true" />
                <a
                  href="mailto:info@bodatec.be"
                  className="text-sm text-steel-300 hover:text-white focus-visible:outline-white transition-colors"
                >
                  info@bodatec.be
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-steel-600">
            © {new Date().getFullYear()} Bodatec. All rights reserved. Lokeren, Belgium.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-steel-600 hover:text-steel-300 focus-visible:outline-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-steel-600 hover:text-steel-300 focus-visible:outline-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
