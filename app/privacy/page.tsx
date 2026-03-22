import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bodatec',
}

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-xl max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-5 text-steel-600 leading-relaxed">
          <p>
            This privacy policy sets out how Bodatec collects and uses information submitted
            through this website.
          </p>
          <h2 className="text-lg font-semibold text-navy-900">Information we collect</h2>
          <p>
            We collect information you provide when you use the contact form on this website,
            including your name, company, email address, and any details you include in your
            message.
          </p>
          <h2 className="text-lg font-semibold text-navy-900">How we use your information</h2>
          <p>
            Information submitted through the contact form is used solely to respond to your
            enquiry. We do not share your information with third parties for marketing purposes.
          </p>
          <h2 className="text-lg font-semibold text-navy-900">Contact</h2>
          <p>
            For privacy-related enquiries, please contact us at{' '}
            <a href="mailto:info@bodatec.be" className="text-navy-700 underline">
              info@bodatec.be
            </a>
            .
          </p>
          <p className="text-sm text-steel-400 pt-4 border-t border-steel-200">
            Last updated: March 2025. Full GDPR-compliant privacy policy to be completed.
          </p>
        </div>
      </div>
    </section>
  )
}
