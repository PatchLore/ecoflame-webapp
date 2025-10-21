'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calculator, CheckCircle } from 'lucide-react'
import { calculateQuote, PricingInput } from '@/lib/pricing'
import Link from 'next/link'
import { PricingResult } from '@/lib/pricing'

const urgencyOptions = [
  { value: 'standard', label: 'Standard (1-3 days)', multiplier: 1.0 },
  { value: 'same_day', label: 'Same Day (+20%)', multiplier: 1.2 },
  { value: 'emergency', label: 'Emergency (+40%)', multiplier: 1.4 }
]

const schema = z.object({
  jobType: z.string().min(1, 'Please select a service'),
  postcode: z.string().min(1, 'Please enter a postcode'),
  urgency: z.enum(['standard', 'same_day', 'emergency']),
  jobDetails: z.string().optional(),
  propertyType: z.string().optional(),
  bathrooms: z.string().optional()
})

type FormData = z.infer<typeof schema>

// Static heating services with base prices
const serviceBasePrices: Record<string, number> = {
  'emergencies': 150,
  'boiler installations & repairs': 180,
  'landlord certificates': 80,
  'plumbing': 120,
  'powerflushing & upgrades': 350,
  'vented & unvented cylinders': 200,
}

export default function QuoteFlowCalculatorEmbed() {
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(null)
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      jobType: '',
      postcode: '',
      urgency: 'standard',
      jobDetails: '',
      propertyType: 'house',
      bathrooms: '2'
    }
  })

  const { register, handleSubmit, formState: { errors } } = form

  // Debug form errors
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log('Form validation errors:', errors)
    }
  }, [errors])

  // Get URL parameters for pre-filling
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const jobType = urlParams.get('jobType')
    const postcode = urlParams.get('postcode')
    const urgency = urlParams.get('urgency') as 'standard' | 'same_day' | 'emergency'
    const jobDetails = urlParams.get('jobDetails')
    const propertyType = urlParams.get('propertyType') as 'house' | 'flat' | 'commercial'
    const bathrooms = urlParams.get('bathrooms') as '1' | '2' | '3+'

    if (jobType) form.setValue('jobType', jobType)
    if (postcode) form.setValue('postcode', postcode)
    if (urgency) form.setValue('urgency', urgency)
    if (jobDetails) form.setValue('jobDetails', jobDetails)
    if (propertyType) form.setValue('propertyType', propertyType)
    if (bathrooms) form.setValue('bathrooms', bathrooms)

    // Auto-calculate if we have the required fields
    if (jobType && postcode) {
      const formData = form.getValues()
      if (formData.jobType && formData.postcode) {
        handleCalculate(formData)
      }
    }
  }, [form])

  const handleCalculate = (data: FormData) => {
    const input: PricingInput = {
      jobType: data.jobType,
      postcode: data.postcode,
      urgency: data.urgency,
      jobDetails: data.jobDetails || '',
      propertyType: data.propertyType || 'house',
      bathrooms: data.bathrooms || '2'
    }

    const basePrice = serviceBasePrices[input.jobType] || 150
    const result = calculateQuote(input, basePrice)
    setPricingResult(result)
  }

  const onSubmit = (data: FormData) => {
    console.log('Form submitted with data:', data)
    handleCalculate(data)
    // Show the contact form to collect user details
    setShowLeadCapture(true)
  }

  const handleLeadSubmit = async (leadData: { name: string; email: string; phone: string }) => {
    setIsSubmitting(true)
    
    try {
      const formData = form.getValues()
      const jobType = formData.jobType
      const postcode = formData.postcode
      const urgency = formData.urgency
      const extraDetails = formData.jobDetails
      
      const payload = {
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        job_type: jobType,
        postcode: postcode,
        urgency: urgency,
        job_details: extraDetails || null,
        estimated_quote: 0, // Use 0 for "contact for quote" instead of null
      }

      console.log('Submitting lead with payload:', payload)

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      console.log('API response:', result)

      if (response.ok) {
        // Check if result has ok property, otherwise assume success for 200 status
        if (result.ok === false) {
          console.error('API error:', result)
          throw new Error(result.error || 'Failed to submit lead')
        } else {
          setSubmitSuccess(true)
          setShowLeadCapture(false)
        }
      } else {
        console.error('HTTP error:', response.status, result)
        throw new Error(result.error || 'Failed to submit lead')
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
      alert('Error saving your details. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Received!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for choosing EcoFlame! We&apos;ll contact you within 24 hours to provide your personalized quote and discuss your heating needs.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setSubmitSuccess(false)
                  setPricingResult(null)
                  setShowLeadCapture(false)
                  form.reset()
                }}
                className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#E63946] text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Get Another Quote
              </button>
              <Link
                href="/"
                className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Back to EcoFlame Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EcoFlame - Instant Heating Quotes</h1>
          <p className="text-lg text-gray-600">Fast, transparent heating & boiler quotes in 30 seconds</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Calculator className="h-5 w-5 mr-2 text-orange-600" />
              Heating Job Details
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit, (errors) => {
              console.log('Form validation failed:', errors)
            })} className="space-y-6">
              {/* Job Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                <select
                  {...register('jobType')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select a heating service</option>
                  <option value="emergencies">Emergencies (24/7 Call Out)</option>
                  <option value="boiler installations & repairs">Boiler Installation & Repairs</option>
                  <option value="landlord certificates">Landlord Certificates</option>
                  <option value="plumbing">Plumbing Services</option>
                  <option value="powerflushing & upgrades">Powerflushing & Upgrades</option>
                  <option value="vented & unvented cylinders">Cylinder Services</option>
                </select>
                {errors.jobType && (
                  <p className="text-red-500 text-sm mt-1">{errors.jobType.message}</p>
                )}
              </div>

              {/* Property-specific questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select
                    {...register('propertyType')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bathrooms</label>
                  <select
                    {...register('bathrooms')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="1">1 Bathroom</option>
                    <option value="2">2 Bathrooms</option>
                    <option value="3+">3+ Bathrooms</option>
                  </select>
                </div>
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postcode *</label>
                <input
                  type="text"
                  {...register('postcode')}
                  placeholder="e.g. SW1A 1AA"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                {errors.postcode && (
                  <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>
                )}
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">When do you need the work done?</label>
                <select
                  {...register('urgency')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {urgencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea
                  {...register('jobDetails')}
                  placeholder="Tell us more about your heating needs..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                onClick={() => console.log('Button clicked')}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#E63946] text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Get My Quote
              </button>
            </form>
          </div>

          {/* Contact for Pricing */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Get Your Quote</h2>
            <p className="text-sm text-gray-500 mb-6">Contact us for a personalized quote tailored to your needs</p>

            {pricingResult ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📞</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ready for Your Quote?</h3>
                    <p className="text-gray-600 mb-4">
                      We&apos;ll provide a detailed, personalized quote based on your specific requirements.
                      No obligation, completely free.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <span className="text-lg">✓</span>
                        <span className="text-sm font-medium">Free, no-obligation quote</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <span className="text-lg">✓</span>
                        <span className="text-sm font-medium">Transparent pricing</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <span className="text-lg">✓</span>
                        <span className="text-sm font-medium">Professional service</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Contact Options:</h4>

                  <div className="space-y-3">
                    <a
                      href="tel:07921064352"
                      className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                    >
                      <div className="text-2xl mr-3">📞</div>
                      <div>
                        <div className="font-semibold text-green-800">Call Now</div>
                        <div className="text-sm text-green-600">07921 064 352</div>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/447921064352?text=Hi%20I%27m%20interested%20in%20getting%20a%20quote%20for%20heating%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                    >
                      <div className="text-2xl mr-3">💬</div>
                      <div>
                        <div className="font-semibold text-green-800">WhatsApp</div>
                        <div className="text-sm text-green-600">Quick message for instant response</div>
                      </div>
                    </a>

                    <button
                      onClick={() => setShowLeadCapture(true)}
                      className="w-full flex items-center p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
                    >
                      <div className="text-2xl mr-3">📧</div>
                      <div className="text-left">
                        <div className="font-semibold text-orange-800">Email Quote</div>
                        <div className="text-sm text-orange-600">Send your details for a detailed quote</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="text-center text-xs text-gray-500 pt-4 border-t">
                  <p>Available 24/7 for emergencies • Gas Safe registered • Fully insured</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Fill out the form to get your personalized quote</p>
              </div>
            )}
          </div>
        </div>

        {/* Lead Capture Modal */}
        {showLeadCapture && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999] overflow-y-auto">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 my-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send Your Details</h3>
              <p className="text-gray-600 mb-6">
                We&apos;ll confirm your quote and get you booked in.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                We respect your privacy. Your details are only used to contact you about this job.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const name = formData.get('name') as string
                const email = formData.get('email') as string
                const phone = formData.get('phone') as string
                
                if (name && email && phone) {
                  handleLeadSubmit({ name, email, phone })
                }
              }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowLeadCapture(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-[#FF6B35] to-[#E63946] text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Details'}
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure submission • No spam
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
