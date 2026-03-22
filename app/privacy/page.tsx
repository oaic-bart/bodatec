import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bodatec',
  description: 'Privacy policy of Bodatec BV — how we collect, process, and protect your personal data in compliance with the GDPR.',
}

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-xl max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-steel-400 mb-10">Last updated: March 2025</p>

        <div className="space-y-8 text-steel-600 leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">1. Data controller</h2>
            <p>
              The controller of your personal data is:
            </p>
            <div className="mt-3 bg-steel-50 border border-steel-200 p-5 text-sm space-y-1">
              <p className="font-semibold text-navy-900">Bodatec BV</p>
              <p>Karrestraat 92, 9160 Lokeren, Belgium</p>
              <p>Enterprise number: BE 1025.655.828</p>
              <p>Email: <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a></p>
              <p>Phone: +32 474 69 99 61</p>
            </div>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">2. What personal data we collect</h2>
            <p className="mb-3">
              We collect and process the following categories of personal data:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Contact form data:</strong> name, company name, email address, phone number (optional), and the content of your message.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Career enquiries:</strong> name, email address, CV, and any information you include in your application.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Technical data:</strong> IP address, browser type, operating system, referring URL, pages visited, and timestamps — collected automatically when you visit this website.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Cookie data:</strong> information stored by cookies on your device, subject to your consent preferences. See section 7 below.</span>
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">3. Legal basis for processing</h2>
            <p className="mb-3">
              Under the General Data Protection Regulation (GDPR), we process your personal data on the following legal bases:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Consent (Art. 6(1)(a) GDPR):</strong> for analytics cookies and any optional data processing. You may withdraw your consent at any time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Legitimate interest (Art. 6(1)(f) GDPR):</strong> to respond to your enquiries, to maintain the security of our website, and for basic website functionality.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Pre-contractual measures (Art. 6(1)(b) GDPR):</strong> when processing data is necessary to discuss and prepare a potential contract or collaboration.</span>
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">4. How we use your data</h2>
            <p className="mb-3">We use your personal data for the following purposes:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>To respond to your enquiries submitted through the contact form</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>To process and evaluate career applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>To maintain, protect, and improve our website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>To analyse website usage (only with your consent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>To comply with legal obligations</span>
              </li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">5. Data sharing and third parties</h2>
            <p className="mb-3">
              We do not sell your personal data. We may share your data with the following categories of recipients, only as necessary:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Hosting provider:</strong> our website is hosted on servers within the European Economic Area (EEA).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Analytics services:</strong> if you consent to analytics cookies, anonymised usage data may be processed by our analytics provider.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Legal and regulatory authorities:</strong> where required by law or to protect our legal rights.</span>
              </li>
            </ul>
            <p className="mt-3 text-sm">
              Where data is transferred outside the EEA, we ensure appropriate safeguards are in place
              in accordance with Chapter V of the GDPR (e.g. Standard Contractual Clauses or adequacy decisions).
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">6. Data retention</h2>
            <p className="mb-3">We retain your personal data only as long as necessary:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Contact form submissions:</strong> retained for up to 2 years after the last interaction, unless a contractual relationship is established.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Career applications:</strong> retained for up to 1 year after the application, unless you consent to a longer retention period.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Website analytics data:</strong> anonymised and retained for up to 26 months.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Cookie consent preferences:</strong> stored locally on your device.</span>
              </li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">7. Cookies</h2>
            <p className="mb-3">
              This website uses cookies. A cookie is a small text file stored on your device when you visit a website.
            </p>

            <h3 className="text-sm font-semibold text-navy-900 mt-4 mb-2">Necessary cookies</h3>
            <p className="text-sm mb-3">
              These cookies are essential for the website to function properly. They include cookies that
              store your cookie consent preferences. These cookies do not require your consent under the
              ePrivacy Directive as they are strictly necessary.
            </p>

            <h3 className="text-sm font-semibold text-navy-900 mt-4 mb-2">Analytics cookies</h3>
            <p className="text-sm mb-3">
              With your consent, we may use analytics cookies to understand how visitors interact with our
              website. These cookies collect information anonymously and help us improve our website. These
              cookies are only placed after you give explicit consent through our cookie banner.
            </p>

            <h3 className="text-sm font-semibold text-navy-900 mt-4 mb-2">Marketing cookies</h3>
            <p className="text-sm mb-3">
              We currently do not use marketing cookies. Should this change in the future, we will update
              this policy and request your consent before placing any marketing cookies.
            </p>

            <p className="text-sm">
              You can manage your cookie preferences at any time by clearing your browser cookies and
              revisiting our website, or by adjusting your browser settings to block or delete cookies.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">8. Your rights under the GDPR</h2>
            <p className="mb-3">
              As a data subject, you have the following rights under the GDPR. You may exercise these rights
              at any time by contacting us at{' '}
              <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a>.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Right of access (Art. 15):</strong> you have the right to obtain confirmation as to whether your personal data is being processed and to request a copy of that data.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Right to rectification (Art. 16):</strong> you have the right to have inaccurate personal data corrected without undue delay.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Right to erasure (Art. 17):</strong> you have the right to request the deletion of your personal data where there is no compelling reason for its continued processing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Right to restriction (Art. 18):</strong> you have the right to request the restriction of processing of your personal data in certain circumstances.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Right to data portability (Art. 20):</strong> you have the right to receive your personal data in a structured, commonly used, and machine-readable format.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Right to object (Art. 21):</strong> you have the right to object to processing based on legitimate interests at any time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span><strong className="text-navy-900">Right to withdraw consent (Art. 7(3)):</strong> where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.</span>
              </li>
            </ul>
            <p className="mt-3 text-sm">
              We will respond to your request within 30 days. If we need additional time, we will inform you of
              the reason and the expected timeline within the initial 30-day period.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">9. Data security</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal data against
              unauthorised access, alteration, disclosure, or destruction. This includes the use of encrypted
              connections (HTTPS/TLS) for data transmitted through our website.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">10. Supervisory authority</h2>
            <p className="mb-3">
              If you believe that the processing of your personal data infringes the GDPR, you have the right to
              lodge a complaint with a supervisory authority. For Belgium, this is:
            </p>
            <div className="bg-steel-50 border border-steel-200 p-5 text-sm space-y-1">
              <p className="font-semibold text-navy-900">Gegevensbeschermingsautoriteit (GBA)</p>
              <p>Drukpersstraat 35, 1000 Brussels, Belgium</p>
              <p>Phone: +32 2 274 48 00</p>
              <p>
                Website:{' '}
                <a
                  href="https://www.gegevensbeschermingsautoriteit.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-700 underline"
                >
                  www.gegevensbeschermingsautoriteit.be
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:contact@apd-gba.be" className="text-navy-700 underline">
                  contact@apd-gba.be
                </a>
              </p>
            </div>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">11. Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically. Continued
              use of the website after changes constitutes acceptance of the revised policy.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">12. Contact</h2>
            <p>
              For any questions about this privacy policy or your personal data, please contact us:
            </p>
            <div className="mt-3 text-sm space-y-1">
              <p>Email: <a href="mailto:info@bodatec.be" className="text-navy-700 underline">info@bodatec.be</a></p>
              <p>Phone: +32 474 69 99 61</p>
              <p>Post: Bodatec BV, Karrestraat 92, 9160 Lokeren, Belgium</p>
            </div>
          </div>

          <div className="pt-6 border-t border-steel-200">
            <Link href="/" className="text-sm text-navy-700 underline hover:text-navy-900">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
