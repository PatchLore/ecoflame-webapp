'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const quoteSchema = z.object({
  service: z.preprocess(
    (val) => (val === null || val === undefined ? '' : String(val)),
    z.string().min(1, 'Please select a service')
  ),
  urgency: z.preprocess(
    (val) => (val === null || val === undefined ? '' : String(val)),
    z.string().min(1, 'Please select urgency')
  ),
  postcode: z.preprocess(
    (val) => (val === null || val === undefined ? '' : String(val)),
    z.string().min(1, 'Please enter your postcode')
  ),
  name: z.preprocess(
    (val) => (val === null || val === undefined ? '' : String(val)),
    z.string().min(1, 'Please enter your name')
  ),
  email: z.preprocess(
    (val) => (val === null || val === undefined ? '' : String(val)),
    z.string().email('Please enter a valid email')
  ),
  phone: z.preprocess(
    (val) => (val === null || val === undefined ? '' : String(val)),
    z.string().min(1, 'Please enter your phone number')
  ),
  message: z.preprocess(
    (val) => (val === null || val === undefined ? '' : String(val)),
    z.string().optional()
  )
})

type QuoteFormData = z.infer<typeof quoteSchema>

const services = [
  { id: 'boiler-install', name: 'Boiler Installation', basePrice: 2500 },
  { id: 'boiler-repair', name: 'Boiler Repair', basePrice: 150 },
  { id: 'boiler-service', name: 'Boiler Service', basePrice: 80 },
  { id: 'leak-repair', name: 'Leak Repair', basePrice: 120 },
  { id: 'radiator-install', name: 'Radiator Installation', basePrice: 200 },
  { id: 'emergency-callout', name: 'Emergency Callout', basePrice: 100 }
]

const urgencyOptions = [
  { id: 'same-day', name: 'Same Day', multiplier: 1.2 },
  { id: 'next-day', name: 'Next Day', multiplier: 1.1 },
  { id: 'this-week', name: 'This Week', multiplier: 1.0 },
  { id: 'flexible', name: 'Flexible', multiplier: 0.9 }
]

export default function QuoteEmbedPage() {
  const [selectedService, setSelectedService] = useState<string>('')
  const [selectedUrgency, setSelectedUrgency] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  useEffect(() => {
    if (!isSubmitted) return
    const timer = setTimeout(() => {
      try {
        // Ensure the whole page (not just the iframe) navigates
        if (typeof window !== 'undefined' && window.top) {
          (window.top as Window).location.href = '/'
        } else {
          window.location.href = '/'
        }
      } catch {
        window.location.href = '/'
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [isSubmitted])

  const { register, handleSubmit, formState: { errors } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema)
  })

  const calculateQuote = () => {
    const service = services.find(s => s.id === selectedService)
    const urgency = urgencyOptions.find(u => u.id === selectedUrgency)
    
    if (!service || !urgency) return 0
    
    const basePrice = service.basePrice
    const urgencyMultiplier = urgency.multiplier
    const travelFee = 50 // Fixed travel fee
    
    return Math.round((basePrice * urgencyMultiplier) + travelFee)
  }

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    
    try {
      // Normalize all fields - ensure strings, never null/undefined
      const payload = {
        name: String(data.name ?? '').trim(),
        email: String(data.email ?? '').trim(),
        phone: String(data.phone ?? '').trim(),
        service: services.find(s => s.id === data.service)?.name ?? String(data.service ?? '').trim(),
        postcode: String(data.postcode ?? '').trim(),
        urgency: urgencyOptions.find(u => u.id === data.urgency)?.name ?? String(data.urgency ?? '').trim(),
        message: String(data.message ?? '').trim(),
        quoteAmount: calculateQuote(),
        source: 'ecoflame-website'
      }
      
      console.log('[QuoteFlow] Submitting payload:', payload)
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error('Form submission error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        })
        throw new Error(errorData?.debug || errorData?.message || 'Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMessage = error instanceof Error ? error.message : 'There was an error submitting your request. Please try again or call us directly.'
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1D3557] flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold text-[#0B2346]">Thank You!</h2>
          <p className="mt-3 text-gray-700">
            We&apos;ve received your request and will call you within 2 hours with your personalised quote.
          </p>
          <p className="mt-5 text-gray-600">Need immediate help?</p>
          <a href="tel:07921064352" className="block mt-1 text-[#FF5C3A] font-medium hover:underline">
            07921 064 352
          </a>
          <button
            onClick={() => {
              try {
                if (typeof window !== 'undefined' && window.top) {
                  (window.top as Window).location.href = '/'
                } else {
                  window.location.href = '/'
                }
              } catch {
                window.location.href = '/'
              }
            }}
            className="mt-6 bg-[#FF5C3A] text-white px-4 py-2 rounded-md hover:bg-[#E14A25]"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1D3557] p-8" style={{ touchAction: 'pan-y' }}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#E63946] text-white p-6 text-center">
            <h1 className="text-2xl font-bold mb-2">Get Your Instant Quote</h1>
            <p className="text-white/90">Professional heating services with transparent pricing</p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">What service do you need?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedService === service.id
                          ? 'border-[#FF6B35] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        value={service.id}
                        {...register('service')}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="sr-only"
                      />
                      <div className="font-medium text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-800">From £{service.basePrice}</div>
                    </label>
                  ))}
                </div>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              {/* Urgency Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">When do you need this service?</label>
                <div className="grid grid-cols-2 gap-3">
                  {urgencyOptions.map((urgency) => (
                    <label
                      key={urgency.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedUrgency === urgency.id
                          ? 'border-[#FF6B35] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        value={urgency.id}
                        {...register('urgency')}
                        onChange={(e) => setSelectedUrgency(e.target.value)}
                        className="sr-only"
                      />
                      <div className="font-medium text-gray-900">{urgency.name}</div>
                    </label>
                  ))}
                </div>
                {errors.urgency && (
                  <p className="text-red-500 text-sm mt-1">{errors.urgency.message}</p>
                )}
              </div>

              {/* Quote Display */}
              {selectedService && selectedUrgency && (
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#E63946] text-white p-6 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-white/90 mb-1">Estimated Total</div>
                    <div className="text-4xl font-bold">£{calculateQuote()}</div>
                    <div className="text-sm text-white/80 mt-2">
                      Includes service, travel fee, and urgency adjustment
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Your Contact Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Full Name *</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-900"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-900"
                      placeholder="07921 064 352"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-900"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Postcode *</label>
                  <input
                    type="text"
                    {...register('postcode')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-900"
                    placeholder="SW1A 1AA"
                  />
                  {errors.postcode && (
                    <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Additional Details (Optional)</label>
                  <textarea
                    {...register('message')}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-gray-900"
                    placeholder="Tell us more about your heating needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !selectedService || !selectedUrgency}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#E63946] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send My Details - Get Your Quote'}
              </button>

              <div className="text-center text-sm text-gray-800 mt-6">
                <p>We&apos;ll call you within 2 hours with your personalised quote</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider {
          width: 100%;
          max-width: 600px;
          touch-action: pan-y;
        }
        
        input, select, textarea {
          touch-action: manipulation;
        }
        
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  )
}
