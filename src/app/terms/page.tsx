'use client'

import Link from 'next/link'

export default function TermsOfService() {
  return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-[#1D3557] mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to EcoFlame Heating Solutions. By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">2. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EcoFlame Heating Solutions provides professional heating and plumbing services including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Boiler installation and replacement</li>
                <li>Boiler repairs and servicing</li>
                <li>Emergency plumbing services</li>
                <li>General plumbing installations and repairs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">3. Quotes and Estimates</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Quotes provided through our website are estimates based on the information you provide. Final pricing may vary based on on-site assessment and actual work required. All quotes are subject to our on-site evaluation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms will be agreed upon before work commences. We accept various payment methods. Payment may be required upon completion of work or as otherwise agreed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">5. Warranties and Guarantees</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide warranties on workmanship and parts as specified in our service agreements. Warranty terms vary by service type and will be clearly communicated before work begins.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, EcoFlame Heating Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">7. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>EcoFlame Heating Solutions</strong></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:adam@ecoflame.info" className="text-[#FF6B35] hover:underline">adam@ecoflame.info</a></p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:07921064352" className="text-[#FF6B35] hover:underline">07921 064 352</a></p>
                <p className="text-gray-700">Landline: <a href="tel:02080884352" className="text-[#FF6B35] hover:underline">0208 088 4352</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
