'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const CONSENT_KEY = 'bodatec-cookie-consent'

function getStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      setVisible(true)
    }
  }, [])

  function acceptAll() {
    const full: ConsentState = { necessary: true, analytics: true, marketing: true }
    storeConsent(full)
    setVisible(false)
  }

  function acceptNecessary() {
    const minimal: ConsentState = { necessary: true, analytics: false, marketing: false }
    storeConsent(minimal)
    setVisible(false)
  }

  function savePreferences() {
    storeConsent(consent)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-steel-200 shadow-2xl"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
    >
      <div className="container-xl py-5">
        {!showDetails ? (
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-semibold text-navy-900 mb-1">
                This website uses cookies
              </p>
              <p className="text-sm text-steel-600 leading-relaxed">
                We use cookies to ensure the proper functioning of our website and, with your consent,
                for analytics purposes. We respect your privacy and comply with the EU General Data
                Protection Regulation (GDPR). Read our{' '}
                <Link href="/privacy" className="text-navy-700 underline hover:text-navy-900">
                  Privacy Policy
                </Link>{' '}
                for more details.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setShowDetails(true)}
                className="text-sm font-medium text-steel-600 hover:text-navy-900 underline transition-colors"
              >
                Manage preferences
              </button>
              <button
                onClick={acceptNecessary}
                className="btn-secondary text-xs py-2 px-4"
              >
                Necessary only
              </button>
              <button
                onClick={acceptAll}
                className="btn-primary text-xs py-2 px-4"
              >
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm font-semibold text-navy-900 mb-4">
              Manage cookie preferences
            </p>
            <div className="space-y-3 mb-5">
              {/* Necessary */}
              <div className="flex items-start gap-3 p-3 bg-steel-50 border border-steel-200">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 accent-navy-900"
                  aria-label="Necessary cookies (always active)"
                />
                <div>
                  <p className="text-sm font-medium text-navy-900">
                    Necessary cookies
                    <span className="ml-2 text-xs text-steel-500 font-normal">Always active</span>
                  </p>
                  <p className="text-xs text-steel-600 mt-0.5">
                    Required for the website to function properly. These cannot be disabled.
                    They include session management and cookie consent preferences.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start gap-3 p-3 border border-steel-200">
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  className="mt-0.5 accent-navy-900"
                  aria-label="Analytics cookies"
                />
                <div>
                  <p className="text-sm font-medium text-navy-900">Analytics cookies</p>
                  <p className="text-xs text-steel-600 mt-0.5">
                    Help us understand how visitors use our website by collecting anonymous
                    usage data. This helps us improve our content and user experience.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-3 p-3 border border-steel-200">
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  className="mt-0.5 accent-navy-900"
                  aria-label="Marketing cookies"
                />
                <div>
                  <p className="text-sm font-medium text-navy-900">Marketing cookies</p>
                  <p className="text-xs text-steel-600 mt-0.5">
                    Used to deliver relevant content and advertisements. We currently do not
                    use marketing cookies, but this option is provided for transparency.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowDetails(false)}
                className="text-sm font-medium text-steel-600 hover:text-navy-900 underline transition-colors"
              >
                Back
              </button>
              <button
                onClick={savePreferences}
                className="btn-primary text-xs py-2 px-4"
              >
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
