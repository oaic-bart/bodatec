'use client'

import { useState, useCallback } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

const initialData: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const inputClass = (error?: string) =>
  cn(
    'w-full border px-4 py-3 text-sm text-steel-900 bg-white focus:outline-none transition-colors',
    error
      ? 'border-red-400 focus:border-red-500'
      : 'border-steel-300 focus:border-navy-500'
  )

export default function ContactForm() {
  const t = useTranslations('contactForm')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})

  function validate(formData: FormData): FormErrors {
    const errs: FormErrors = {}
    if (!formData.firstName.trim()) errs.firstName = t('errorFirstName')
    if (!formData.lastName.trim()) errs.lastName = t('errorLastName')
    if (!formData.email.trim()) {
      errs.email = t('errorEmail')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t('errorEmailInvalid')
    }
    if (!formData.message.trim()) errs.message = t('errorMessage')
    else if (formData.message.trim().length < 10) errs.message = t('errorMessageShort')
    return errs
  }

  const set = useCallback((field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value
    setData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        const singleFieldErrors = validate({ ...data, [field]: value })
        if (singleFieldErrors[field as keyof FormErrors]) {
          next[field as keyof FormErrors] = singleFieldErrors[field as keyof FormErrors]
        } else {
          delete next[field as keyof FormErrors]
        }
        return next
      })
    }
  }, [data, touched])

  const blur = useCallback((field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const fieldErrors = validate(data)
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field as keyof FormErrors],
    }))
  }, [data])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fieldErrors = validate(data)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      setTouched({ firstName: true, lastName: true, email: true, message: true })
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center border border-steel-200 bg-steel-50">
        <div className="w-14 h-14 bg-navy-900 flex items-center justify-center mb-5">
          <CheckCircle className="w-7 h-7 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-navy-900 mb-2">{t('successTitle')}</h3>
        <p className="text-steel-600 max-w-sm text-sm leading-relaxed">
          {t('successBody')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label={t('firstName')} id="firstName" required error={touched.firstName ? errors.firstName : undefined}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            value={data.firstName}
            onChange={set('firstName')}
            onBlur={blur('firstName')}
            className={inputClass(touched.firstName ? errors.firstName : undefined)}
            placeholder={t('placeholderFirstName')}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
        </Field>
        <Field label={t('lastName')} id="lastName" required error={touched.lastName ? errors.lastName : undefined}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            value={data.lastName}
            onChange={set('lastName')}
            onBlur={blur('lastName')}
            className={inputClass(touched.lastName ? errors.lastName : undefined)}
            placeholder={t('placeholderLastName')}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
        </Field>
      </div>

      <Field label={t('company')} id="company">
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          value={data.company}
          onChange={set('company')}
          className={inputClass()}
          placeholder={t('placeholderCompany')}
        />
      </Field>

      <Field label={t('email')} id="email" required error={touched.email ? errors.email : undefined}>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={data.email}
          onChange={set('email')}
          onBlur={blur('email')}
          className={inputClass(touched.email ? errors.email : undefined)}
          placeholder={t('placeholderEmail')}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
      </Field>

      <Field label={t('phoneLabel')} id="phone">
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          value={data.phone}
          onChange={set('phone')}
          className={inputClass()}
          placeholder={t('placeholderPhone')}
        />
      </Field>

      <Field label={t('areaOfInterest')} id="service">
        <div className="relative">
          <select
            id="service"
            name="service"
            value={data.service}
            onChange={set('service')}
            className={cn(inputClass(), 'appearance-none pr-8 cursor-pointer')}
          >
            <option value="">{t('selectService')}</option>
            <option value="electrical-engineering">{t('optionElectrical')}</option>
            <option value="testing-commissioning">{t('optionTesting')}</option>
            <option value="maintenance">{t('optionMaintenance')}</option>
            <option value="hv-mv">{t('optionHVMV')}</option>
            <option value="industrial-works">{t('optionIndustrial')}</option>
            <option value="specialist">{t('optionSpecialist')}</option>
            <option value="general">{t('optionGeneral')}</option>
            <option value="careers">{t('optionCareers')}</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-steel-400">
            ▾
          </span>
        </div>
      </Field>

      <Field label={t('message')} id="message" required error={touched.message ? errors.message : undefined}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={data.message}
          onChange={set('message')}
          onBlur={blur('message')}
          className={cn(inputClass(touched.message ? errors.message : undefined), 'resize-none')}
          placeholder={t('messagePlaceholder')}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
            {t('sending')}
          </span>
        ) : (
          <>{t('sendBtn')} <Send className="w-4 h-4" aria-hidden="true" /></>
        )}
      </button>

      <p className="text-xs text-steel-400 text-center">
        {t('responseNote')} <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> {t('responseNoteEnd')}
      </p>
    </form>
  )
}

// ── Helper sub-component ──────────────────────────────────────────

interface FieldProps {
  label: string
  id: string
  required?: boolean
  error?: string
  children: React.ReactNode
}

function Field({ label, id, required, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-steel-700 uppercase tracking-wide mb-1.5"
      >
        {label}{required && <span className="text-red-500 ml-0.5" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
