import EcoFlameLayout from '@/components/EcoFlameLayout'
import Link from 'next/link'
import { useState } from 'react'

// Simple details-only form posting to /api/leads with estimated_quote: 0
function DetailsLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)
    try {
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const phone = formData.get('phone') as string
      const jobType = formData.get('jobType') as string
      const postcode = formData.get('postcode') as string
      const jobDetails = (formData.get('jobDetails') as string) || null

      const payload = {
        name,
        email,
        phone,
        job_type: jobType,
        postcode,
        urgency: 'standard',
        job_details: jobDetails,
        estimated_quote: 0,
      }

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json?.ok === false) {
        throw new Error(json?.error || 'Failed to submit lead')
      }
      setSuccess(true)
    } catch (e: any) {
      setError(e?.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <div className="text-2xl mb-2">✅</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thanks! We&apos;ve got your details.</h3>
        <p className="text-green-700">We&apos;ll call you shortly to confirm your visit and quote.</p>
      </div>
    )
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
          <input name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Postcode *</label>
          <input name="postcode" required placeholder="e.g. SW1A 1AA" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
          <select name="jobType" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
            <option value="">Select a service</option>
            <option value="boiler installations & repairs">Boiler Installation & Repairs</option>
            <option value="boiler repairs">Boiler Repairs</option>
            <option value="servicing">Boiler Servicing & Safety Checks</option>
            <option value="plumbing">Plumbing Services</option>
            <option value="emergencies">Emergency Callouts</option>
            <option value="landlord certificates">Landlord Services & Certificates</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
          <textarea name="jobDetails" rows={3} placeholder="Tell us more about the issue or job..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
        </div>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button disabled={isSubmitting} className="w-full md:w-auto bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60">
        {isSubmitting ? 'Sending…' : 'Request Your Visit & Quote'}
      </button>
    </form>
  )
}

export default function ServicesPage() {
  return (
    <EcoFlameLayout>
      <div className="py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1D3557] mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete heating and plumbing solutions for homes and businesses across London and Surrey. 
              Gas Safe registered, fully insured, and available 24/7 for emergencies.
            </p>
          </div>

          {/* Request a Quote - Details Form (above the fold on mobile) */}
          <div id="request-quote" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1D3557] mb-2">Send Your Details – We&apos;ll Call You</h2>
              <p className="text-gray-600 mb-6">No instant prices here — we prepare a tailored quote and arrange your visit.</p>
              <DetailsLeadForm />
            </div>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {[
              {
                icon: '🔥',
                title: 'Boiler Installation & Replacement',
                description: 'Professional boiler installation and replacement services with comprehensive warranty coverage.',
                features: [
                  'New boiler installation and setup',
                  'Boiler replacement and upgrades',
                  'System design and planning',
                  'Comprehensive warranty coverage',
                  'Gas Safe certified installation',
                  'Post-installation support'
                ],
                price: 'Please request a quote',
                duration: '1-2 days'
              },
              {
                icon: '🔧',
                title: 'Boiler Repairs & Maintenance',
                description: 'Expert boiler repair services to get your heating back up and running quickly and efficiently.',
                features: [
                  'Emergency boiler repairs',
                  'Fault diagnosis and troubleshooting',
                  'Component replacement',
                  'System optimization',
                  'Same-day service available',
                  'Preventive maintenance'
                ],
                price: 'Please request a quote',
                duration: '1-4 hours'
              },
              {
                icon: '📋',
                title: 'Boiler Servicing & Safety Checks',
                description: 'Regular boiler maintenance to ensure efficiency, safety, and prevent unexpected breakdowns.',
                features: [
                  'Annual boiler servicing',
                  'Gas safety inspections',
                  'Efficiency optimization',
                  'Safety certificate provision',
                  'Preventive maintenance',
                  'Performance monitoring'
                ],
                price: 'Please request a quote',
                duration: '1-2 hours'
              },
              {
                icon: '🚰',
                title: 'Plumbing Services',
                description: 'Complete plumbing solutions for all your water supply, drainage, and bathroom needs.',
                features: [
                  'Leak detection and repair',
                  'Pipe installation and replacement',
                  'Bathroom plumbing',
                  'Kitchen plumbing',
                  'Drainage solutions',
                  'Water pressure optimization'
                ],
                price: 'Please request a quote',
                duration: '1-6 hours'
              },
              {
                icon: '⚡',
                title: 'Emergency Callouts',
                description: '24/7 emergency heating and plumbing services when you need them most, with rapid response times.',
                features: [
                  '24/7 emergency availability',
                  'Rapid response times',
                  'Emergency repairs',
                  'No call-out charges',
                  'Weekend and holiday service',
                  'Priority booking'
                ],
                price: 'Please request a quote',
                duration: 'Within 2 hours'
              },
              {
                icon: '📄',
                title: 'Landlord Services & Certificates',
                description: 'Gas safety certificates and compliance services for landlords and property managers.',
                features: [
                  'Gas safety certificates',
                  'Landlord compliance checks',
                  'Property safety inspections',
                  'Documentation and reporting',
                  'Annual renewal reminders',
                  'Legal compliance support'
                ],
                price: 'Please request a quote',
                duration: '1-2 hours'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1D3557] mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white p-4 rounded-lg text-center">
                        <div className="text-sm opacity-90">Pricing</div>
                        <div className="text-xl font-bold">{service.price}</div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <div className="text-sm text-gray-600">Typical duration</div>
                        <div className="text-xl font-bold text-[#1D3557]">{service.duration}</div>
                      </div>
                    </div>

                    {/* Mobile accordion for details */}
                    <details className="md:hidden mb-4">
                      <summary className="cursor-pointer select-none text-[#1D3557] font-semibold">What&apos;s included</summary>
                      <ul className="mt-3 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <span className="text-[#FF6B35] mr-3">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </details>

                    {/* Desktop features list */}
                    <div className="hidden md:block">
                      <h4 className="font-semibold text-[#1D3557] mb-3">What&apos;s included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <span className="text-[#FF6B35] mr-3">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Micro-CTA */}
                    <div className="mt-6">
                      <Link href="#request-quote" className="text-[#FF6B35] font-semibold hover:underline">
                        Want our price quickly? Click here to request a quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
            <p className="text-xl mb-8 opacity-90">
              We proudly serve London and Surrey with professional heating and plumbing services
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                'Central London',
                'North London', 
                'South London',
                'East London',
                'West London',
                'Surrey',
                'Sutton',
                'Croydon'
              ].map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <div className="text-lg font-semibold">{area}</div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-lg opacity-90">
              Don&apos;t see your area? <a href="tel:07921064352" className="underline hover:no-underline">Call us</a> to check coverage
            </p>
          </div>

          {/* CTA Section */
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-[#1D3557] mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">Send your details and we&apos;ll call to confirm your visit & tailored quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#request-quote" className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg">
                Request Your Visit & Quote
              </Link>
              <a href="tel:07921064352" className="bg-transparent text-[#FF6B35] px-10 py-4 rounded-full border-2 border-[#FF6B35] font-semibold text-lg transition-all hover:bg-[#FF6B35] hover:text-white">
                Call: 07921 064 352
              </a>
            </div>
          </div>
        </div>
      </div>
    </EcoFlameLayout>
  )
}


