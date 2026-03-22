import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Bodatec',
  description: 'Terms and conditions for using the Bodatec website — including limitations of liability, intellectual property, and Belgian governing law.',
}

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-xl max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-steel-400 mb-10">Last updated: March 2025</p>

        <div className="space-y-8 text-steel-600 leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">1. Identification</h2>
            <p>This website is operated by:</p>
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
            <h2 className="text-lg font-semibold text-navy-900 mb-3">2. Acceptance of terms</h2>
            <p>
              By accessing and using this website (bodatec.be), you agree to be bound by these Terms &amp; Conditions
              and our{' '}
              <Link href="/privacy" className="text-navy-700 underline">Privacy Policy</Link>.
              If you do not agree with any part of these terms, you should not use this website.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">3. Website content and accuracy</h2>
            <p className="mb-3">
              The content of this website is provided for general information purposes only. While we make
              reasonable efforts to ensure the accuracy and completeness of the information presented,
              Bodatec makes no representations or warranties of any kind, express or implied, about:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>The completeness, accuracy, reliability, or suitability of the information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>The availability or uninterrupted access to the website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>The absence of errors, viruses, or other harmful components</span>
              </li>
            </ul>
            <p className="mt-3 text-sm">
              Information on this website does not constitute professional engineering advice. For specific
              technical or project-related advice, please contact us directly.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">4. Intellectual property</h2>
            <p className="mb-3">
              All content on this website — including but not limited to text, graphics, logos, the Bodatec brand
              mark, images, layout, and software — is the intellectual property of Bodatec BV or its licensors
              and is protected by Belgian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-sm">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or
              otherwise use any content from this website without prior written permission from Bodatec,
              except for personal, non-commercial use (e.g. viewing and printing for your own reference).
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">5. Use of the website</h2>
            <p className="mb-3">You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>Infringe upon the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>Attempt to gain unauthorised access to the website, server, or any connected database</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>Introduce any viruses, trojans, worms, or other malicious material</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>Use automated tools to scrape, crawl, or extract data from the website without permission</span>
              </li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">6. Contact form and communications</h2>
            <p>
              When you submit information through our contact form or by email, you acknowledge that
              the information you provide is accurate and that you have the authority to share it. We
              will process your enquiry in accordance with our{' '}
              <Link href="/privacy" className="text-navy-700 underline">Privacy Policy</Link>.
              Submission of a contact form does not create a contractual obligation on either party.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">7. Limitation of liability</h2>
            <p className="mb-3">
              To the maximum extent permitted by Belgian law:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>Bodatec shall not be liable for any direct, indirect, incidental, consequential, or punitive
                  damages arising from your use of, or inability to use, this website.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>Bodatec shall not be liable for any loss of data, profit, revenue, or business opportunity
                  arising from the use of this website.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <span>Any reliance you place on information on this website is strictly at your own risk.</span>
              </li>
            </ul>
            <p className="mt-3 text-sm">
              Nothing in these terms excludes or limits liability for death or personal injury caused by
              negligence, fraud, or any other liability that cannot be excluded or limited under Belgian law.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">8. External links</h2>
            <p>
              This website may contain links to external websites. Bodatec has no control over the content
              or availability of external sites and does not endorse or accept responsibility for their
              content, privacy policies, or practices. Following external links is at your own risk.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">9. Service descriptions</h2>
            <p>
              The services described on this website are for informational purposes only and do not
              constitute a binding offer. The scope, pricing, and terms of any services provided by
              Bodatec will be agreed upon separately in writing between Bodatec and the client prior
              to commencement of work.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">10. Cookies and privacy</h2>
            <p>
              This website uses cookies in accordance with our{' '}
              <Link href="/privacy" className="text-navy-700 underline">Privacy Policy</Link>.
              By continuing to use this website, and subject to your cookie consent preferences,
              you agree to our use of cookies as described in our Privacy Policy.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">11. Modifications to terms</h2>
            <p>
              Bodatec reserves the right to modify these Terms &amp; Conditions at any time. Changes will
              be posted on this page with an updated revision date. Your continued use of the website
              after any changes constitutes acceptance of the revised terms. We recommend reviewing
              this page periodically.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">12. Severability</h2>
            <p>
              If any provision of these Terms &amp; Conditions is found to be invalid or unenforceable by
              a court of competent jurisdiction, the remaining provisions shall continue in full force
              and effect. The invalid provision shall be replaced by a valid provision that most closely
              reflects the intent of the original provision.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">13. Governing law and jurisdiction</h2>
            <p className="mb-3">
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of Belgium.
              Any disputes arising from or relating to these terms or the use of this website shall be
              subject to the exclusive jurisdiction of the courts of the judicial district of Dendermonde, Belgium.
            </p>
            <p className="text-sm">
              For consumers residing in the European Union: nothing in these terms affects your rights under
              mandatory consumer protection laws in your country of residence. You may also use the European
              Commission&apos;s Online Dispute Resolution (ODR) platform at{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 underline"
              >
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-lg font-semibold text-navy-900 mb-3">14. Contact</h2>
            <p>
              For any questions about these Terms &amp; Conditions, please contact us:
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
