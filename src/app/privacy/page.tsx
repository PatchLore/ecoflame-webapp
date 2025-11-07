'use client'


export default function PrivacyPolicy() {
  return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-[#1D3557] mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EcoFlame Heating Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Property details and service requirements</li>
                <li>Quote and job information</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide quotes and estimates for our services</li>
                <li>Schedule and perform heating and plumbing work</li>
                <li>Communicate with you about your enquiries and bookings</li>
                <li>Send service-related notifications</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">5. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under UK data protection law, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">7. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies to improve functionality and user experience. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
