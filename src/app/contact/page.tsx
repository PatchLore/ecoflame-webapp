'use client'

import { useState } from 'react'
import EcoFlameLayout from '@/components/EcoFlameLayout'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <EcoFlameLayout>
        <div className="py-24 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E63946] flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
              <h1 className="text-3xl font-bold text-[#1D3557] mb-4">Message Sent Successfully!</h1>
          <p className="text-gray-600 mb-8">
                Thank you for contacting EcoFlame. We&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-1">
            Back to Home
                </Link>
                <Link href="/#book-now" className="bg-transparent text-[#FF6B35] px-8 py-3 rounded-full border-2 border-[#FF6B35] font-semibold transition-all hover:bg-[#FF6B35] hover:text-white">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </EcoFlameLayout>
    )
  }

  return (
    <EcoFlameLayout>
      <div className="py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1D3557] mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for expert heating and plumbing services. 
              We&apos;re available 24/7 for emergencies and consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                  </div>
                  <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-white/90">Available 24/7 for emergencies</p>
                      <a href="tel:07921064352" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                        07921 064 352
                      </a>
                    </div>
                </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-white/90">We&apos;ll respond within 24 hours</p>
                      <a href="mailto:adam@ecoflame.info" className="text-lg hover:opacity-80 transition-opacity">
                      adam@ecoflame.info
                    </a>
                  </div>
                </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-white/90">Quick response via WhatsApp</p>
                      <a 
                        href="https://wa.me/447921064352?text=Hi%20I%27m%20interested%20in%20getting%20a%20quote%20for%20heating%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:opacity-80 transition-opacity"
                      >
                        Message us now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#1D3557] mb-4">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve London and Surrey with professional heating and plumbing services.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {['Central London', 'North London', 'South London', 'East London', 'West London', 'Surrey', 'Sutton', 'Croydon'].map((area, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700">
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Don&apos;t see your area? <a href="tel:07921064352" className="text-[#FF6B35] hover:underline">Call us</a> to check coverage.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
                    placeholder="07921 064 352"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your heating or plumbing needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white py-4 rounded-lg font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </EcoFlameLayout>
  )
}