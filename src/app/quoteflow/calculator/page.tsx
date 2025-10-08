'use client'

import { useState, useEffect } from 'react'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calculator, CheckCircle } from 'lucide-react'
import Link from 'next/link'
// Supabase client not required for static services
import { calculateQuote, PricingInput } from '@/lib/pricing'
import { PricingResult } from '@/lib/pricing'


const urgencyOptions = [
  { value: 'standard', label: 'Standard (1-3 days)', multiplier: 1.0 },
  { value: 'same_day', label: 'Same Day (+20%)', multiplier: 1.2 },
  { value: 'emergency', label: 'Emergency (+40%)', multiplier: 1.4 }
]

const schema = z.object({
  jobType: z.string().min(1, 'Please select a service'),
  postcode: z.string().min(1, 'Please enter a postcode').regex(/^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i, 'Please enter a valid UK postcode'),
  urgency: z.enum(['standard', 'same_day', 'emergency']),
  jobDetails: z.string().optional(),
  propertyType: z.enum(['house', 'flat', 'commercial']).optional(),
  bathrooms: z.enum(['1', '2', '3+']).optional()
})

type FormData = z.infer<typeof schema>

// Static plumbing services with base prices (module scope for stable deps)
const serviceBasePrices: Record<string, number> = {
  'emergency leak repair': 120,
  'boiler service/repair': 150,
  'toilet/tap installation': 80,
  'bathroom installation': 800,
  'drain unblocking': 100,
  'central heating work': 200,
}

export default function CalculatorPage() {
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
      propertyType: undefined,
      bathrooms: undefined
    }
  })

  const { register, handleSubmit, watch, formState: { errors } } = form

  // Watch individual fields to avoid re-renders from watching the entire form object
  const jobType = watch('jobType')
  const postcode = watch('postcode')
  const urgency = watch('urgency')
  const jobDetails = watch('jobDetails')
  const propertyType = watch('propertyType')
  const bathrooms = watch('bathrooms')

  // No remote load required; using static plumbing services

  // Calculate quote when form values change
  useEffect(() => {
    const hasRequired = Boolean(jobType && postcode && urgency)
    if (!hasRequired) {
      setPricingResult(null)
      return
    }

    const basePrice = serviceBasePrices[jobType]
    if (!basePrice) {
      return
    }

    const pricingInput: PricingInput = {
      jobType,
      postcode,
      urgency,
      jobDetails
    }
    const result = calculateQuote(pricingInput, basePrice)
    setPricingResult(result)
  // serviceBasePrices is a stable module constant; safe to omit from deps
  }, [jobType, postcode, urgency, jobDetails])

  const onSubmit = () => {
    setShowLeadCapture(true)
  }

  const handleLeadSubmit = async (leadData: { name: string; email: string; phone: string }) => {
    console.log('handleLeadSubmit called with:', leadData)
    console.log('pricingResult:', pricingResult)
    
    if (!pricingResult) {
      console.log('No pricing result, returning early')
      return
    }

    setIsSubmitting(true)
    try {
      const extraDetails = [
        jobDetails ? `Details: ${jobDetails}` : null,
        propertyType ? `Property: ${propertyType}` : null,
        bathrooms ? `Bathrooms: ${bathrooms}` : null,
      ].filter(Boolean).join(' | ')

      const payload = {
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        job_type: jobType,
        postcode: postcode,
        urgency: urgency,
        job_details: extraDetails || null,
        estimated_quote: pricingResult.totalPrice,
      }

      console.log('Sending payload:', payload)

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      console.log('Response status:', res.status)
      console.log('Response ok:', res.ok)

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        console.log('Error response:', errorData)
        alert('Error saving your details. Please try again.')
        return
      }

      const responseData = await res.json()
      console.log('Success response:', responseData)

      setSubmitSuccess(true)
      setShowLeadCapture(false)
    } catch (error) {
      console.log('Catch error:', error)
      alert('Error saving your details. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white">
        {/* FixBlox Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
          <Link href="/" className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            FixBlox
          </Link>
          <ul className="hidden md:flex gap-10 list-none">
            <li><Link href="/" className="text-[#0A0E27] no-underline font-medium hover:text-[#0066FF] transition-colors">Home</Link></li>
            <li><Link href="/quoteflow" className="text-[#0066FF] no-underline font-semibold">QuoteFlow</Link></li>
            <li><Link href="/contact" className="text-[#0A0E27] no-underline font-medium hover:text-[#0066FF] transition-colors">Contact</Link></li>
          </ul>
          <Link href="/" className="text-[#0066FF] no-underline font-medium hover:text-[#0A0E27] transition-colors">
            ← Back to Home
          </Link>
        </nav>

        <div className="mt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full">
            {/* Success Card for Customer */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Quote Submitted!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for your interest! We&apos;ll contact you within 24 hours to confirm your quote and schedule your service.
              </p>
              <div className="space-y-3">
                <Link
                  href="/quoteflow/calculator"
                  className="block w-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Get Another Quote
                </Link>
                <Link
                  href="/"
                  className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back to FixBlox Home
                </Link>
              </div>
            </div>

            {/* Plumber CTA */}
            <div className="bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] rounded-xl shadow-lg p-8 text-center text-white">
              <div className="text-sm font-medium mb-3 text-[#00D9FF]">Are you a plumber?</div>
              <h2 className="text-2xl font-bold mb-3">Want leads like this sent to your dashboard?</h2>
              <p className="text-white/80 mb-6">
                Sign up for QuoteFlow and start receiving qualified leads automatically. Get notified instantly when customers request quotes in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white py-3 px-8 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/quoteflow"
                  className="bg-transparent text-white py-3 px-8 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-[#0A0E27] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* FixBlox Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          FixBlox
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          <li><Link href="/" className="text-[#0A0E27] no-underline font-medium hover:text-[#0066FF] transition-colors">Home</Link></li>
          <li><Link href="/quoteflow" className="text-[#0066FF] no-underline font-semibold">QuoteFlow</Link></li>
          <li><Link href="/contact" className="text-[#0A0E27] no-underline font-medium hover:text-[#0066FF] transition-colors">Contact</Link></li>
        </ul>
        <Link href="/quoteflow" className="text-[#0066FF] no-underline font-medium hover:text-[#0A0E27] transition-colors">
          ← Back to QuoteFlow
        </Link>
      </nav>

      <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">QuoteFlow - Instant Plumbing Quotes</h1>
            <p className="text-lg text-gray-600">Fast, transparent plumbing quotes in 30 seconds</p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Calculator className="h-5 w-5 mr-2 text-blue-600" />
              Plumbing Job Details
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Job Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                <select
                  {...register('jobType')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a plumbing service</option>
                  <option value="emergency leak repair">Emergency Leak Repair - £120 base</option>
                  <option value="boiler service/repair">Boiler Service/Repair - £150 base</option>
                  <option value="toilet/tap installation">Toilet/Tap Installation - £80 base</option>
                  <option value="bathroom installation">Bathroom Installation - £800 base</option>
                  <option value="drain unblocking">Drain Unblocking - £100 base</option>
                  <option value="central heating work">Central Heating Work - £200 base</option>
                </select>
                {errors.jobType && (
                  <p className="mt-1 text-sm text-red-600">{errors.jobType.message}</p>
                )}
              </div>

              {/* Plumbing-specific questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select
                    {...register('propertyType')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bathrooms</label>
                  <select
                    {...register('bathrooms')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postcode *
                </label>
                <input
                  type="text"
                  {...register('postcode')}
                  placeholder="e.g., SW1A 1AA"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.postcode && (
                  <p className="mt-1 text-sm text-red-600">{errors.postcode.message}</p>
                )}
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency *
                </label>
                <div className="space-y-2">
                  {urgencyOptions.map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        {...register('urgency')}
                        value={option.value}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.urgency && (
                  <p className="mt-1 text-sm text-red-600">{errors.urgency.message}</p>
                )}
              </div>

              {/* Job Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Details (Optional)
                </label>
                <textarea
                  {...register('jobDetails')}
                  rows={4}
                  placeholder="Describe your project in more detail..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Calculate Quote
              </button>
            </form>
          </div>

          {/* Quote Display */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Quote</h2>
            <p className="text-sm text-gray-500 mb-6">Professional plumbing at fair prices</p>
            
                {pricingResult ? (
              <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Estimated Quote</p>
                    <p className="text-3xl font-bold text-blue-600">
                      £{pricingResult.totalPrice.toFixed(0)}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                          No obligation. Free instant estimate.
                    </p>
                  </div>
                </div>

                    <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Price:</span>
                    <span>£{pricingResult.breakdown.basePrice.toFixed(0)}</span>
                  </div>
                  {pricingResult.breakdown.urgencySurcharge > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Urgency Surcharge:</span>
                      <span>£{pricingResult.breakdown.urgencySurcharge.toFixed(0)}</span>
                    </div>
                  )}
                  {pricingResult.breakdown.travelFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Travel Fee:</span>
                      <span>£{pricingResult.breakdown.travelFee.toFixed(0)}</span>
                    </div>
                  )}
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>£{pricingResult.breakdown.total.toFixed(0)}</span>
                  </div>
                      <div className="pt-2 text-xs text-gray-500">Prices are estimates based on your inputs. Final price confirmed on booking.</div>
                </div>

                <button
                  onClick={() => setShowLeadCapture(true)}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Send My Details
                </button>

                    <div className="text-center text-xs text-gray-500">Secure • No spam • Cancel anytime</div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Fill out the form to see your quote</p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      {showLeadCapture && (
        <LeadCaptureModal
          onClose={() => setShowLeadCapture(false)}
          onSubmit={handleLeadSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  )
}

// Lead Capture Modal Component
function LeadCaptureModal({ 
  onClose, 
  onSubmit, 
  isSubmitting 
}: { 
  onClose: () => void
  onSubmit: (data: { name: string; email: string; phone: string }) => void
  isSubmitting: boolean
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">Send Your Details</h3>
        <p className="text-gray-600 mb-2">We&apos;ll confirm your quote and get you booked in.</p>
        <div className="mb-4 text-xs text-gray-500">We respect your privacy. Your details are only used to contact you about this job.</div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Details'}
            </button>
          </div>
          <div className="pt-3 text-center text-xs text-gray-500">Secure submission • No spam</div>
        </form>
      </div>
    </div>
  )
}
