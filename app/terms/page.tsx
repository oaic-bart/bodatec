import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Bodatec',
}

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-xl max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-900 mb-8">Terms of Use</h1>
        <div className="space-y-5 text-steel-600 leading-relaxed">
          <p>
            By accessing and using the Bodatec website, you accept and agree to be bound by
            these terms of use.
          </p>
          <h2 className="text-lg font-semibold text-navy-900">Website content</h2>
          <p>
            The content of this website is provided for general information purposes only.
            Bodatec makes no warranties about the accuracy or completeness of information on
            this site.
          </p>
          <h2 className="text-lg font-semibold text-navy-900">Intellectual property</h2>
          <p>
            All content on this website, including text, graphics, and structure, is the property
            of Bodatec and may not be reproduced without written permission.
          </p>
          <h2 className="text-lg font-semibold text-navy-900">Contact</h2>
          <p>
            For any queries relating to these terms, contact{' '}
            <a href="mailto:info@bodatec.be" className="text-navy-700 underline">
              info@bodatec.be
            </a>
            .
          </p>
          <p className="text-sm text-steel-400 pt-4 border-t border-steel-200">
            Last updated: March 2025. Full legal terms to be completed.
          </p>
        </div>
      </div>
    </section>
  )
}
