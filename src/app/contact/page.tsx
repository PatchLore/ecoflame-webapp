"use client"

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [postcode, setPostcode] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const sitePhone = process.env.NEXT_PUBLIC_PHONE
  const siteWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          postcode,
          // Map to existing API expectations
          service: 'General Enquiry',
          urgency: 'Flexible',
          message,
          quoteAmount: undefined
        })
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data?.debug || 'Failed to submit')
      }

      setSubmitted(true)
      setName(''); setEmail(''); setPhone(''); setPostcode(''); setMessage('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0B2346] text-gray-100">
      <header className="px-6 py-10 text-center">
        <h1 className="text-3xl font-semibold text-white">Contact EcoFlame</h1>
        <p className="mt-2 text-gray-300">Fast, friendly plumbing & heating support</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-16">
        {/* CTA Row */}
        <div className="flex flex-wrap gap-3 mb-6">
          {sitePhone ? (
            <a
              href={`tel:${sitePhone}`}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#FF5C3A] hover:bg-[#E14A25] text-white transition"
            >
              Call Mobile
            </a>
          ) : null}
          <a
            href={`tel:02080884352`}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#FF5C3A] hover:bg-[#E14A25] text-white transition"
          >
            Call 0208 088 4352
          </a>
          {siteWhatsApp ? (
            <a
              href={`https://wa.me/${siteWhatsApp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#FF5C3A] hover:bg-[#E14A25] text-white transition"
            >
              WhatsApp
            </a>
          ) : null}
        </div>

        {/* Card */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-1">Send us a message</h2>
            <p className="text-sm text-gray-500 mb-6">We aim to reply within the hour</p>

            {submitted ? (
              <div className="text-green-700 bg-green-50 border border-green-200 rounded-md p-4">
                Thanks! Your message has been sent. Well get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5C3A]"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5C3A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5C3A]"
                  />
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    placeholder="Postcode"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5C3A]"
                  />
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help?"
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5C3A]"
                />

                {error ? (
                  <div className="text-red-700 bg-red-50 border border-red-200 rounded-md p-3 text-sm">
                    {error}
                  </div>
                ) : null}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#FF5C3A] hover:bg-[#E14A25] text-white transition disabled:opacity-60"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Help text */}
        <p className="text-gray-300 text-sm mt-6">
          Prefer to talk? {sitePhone ? (<> 
            Call us on <a className="underline" href={`tel:${sitePhone}`}>{sitePhone}</a>
          </>) : 'Add NEXT_PUBLIC_PHONE to show a call button.'} or <a className="underline" href={`tel:02080884352`}>0208 088 4352</a>. {siteWhatsApp ? (<>
            or WhatsApp <a className="underline" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${siteWhatsApp.replace(/[^0-9]/g, '')}`}>{siteWhatsApp}</a>
          </>) : ' Add NEXT_PUBLIC_WHATSAPP to show WhatsApp.'}
        </p>
      </main>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
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
      <div className="antialiased text-slate-800 bg-gradient-to-b from-white via-slate-50 to-white min-h-screen">
        <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-slate-900 hover:opacity-80 transition">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shadow rounded-full p-1 bg-white">
              <path d="M3 12h18" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 6h18" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
            </svg>
            <span className="text-lg font-semibold">FixBlox</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link>
            <Link href="/quoteflow" className="text-sm text-slate-600 hover:text-slate-900">QuoteFlow</Link>
            <Link href="/contact" className="text-sm text-slate-900 font-medium">Contact</Link>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Thanks for reaching out!</h1>
            <p className="text-lg text-slate-600 mb-8">
              We&apos;ll get back to you within 24 hours. Looking forward to helping you with QuoteFlow!
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/quoteflow" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold shadow-lg transform transition hover:-translate-y-0.5">
                Explore QuoteFlow
              </Link>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="antialiased text-slate-800 bg-gradient-to-b from-white via-slate-50 to-white min-h-screen">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-slate-900 hover:opacity-80 transition">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shadow rounded-full p-1 bg-white">
            <path d="M3 12h18" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 6h18" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
          </svg>
          <span className="text-lg font-semibold">FixBlox</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link>
          <Link href="/quoteflow" className="text-sm text-slate-600 hover:text-slate-900">QuoteFlow</Link>
          <Link href="/contact" className="text-sm text-slate-900 font-medium">Contact</Link>
        </nav>
        <div className="md:hidden">
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition text-sm">Menu</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
            Get in touch
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
            Let&apos;s build something <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">amazing together</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you&apos;re ready to set up QuoteFlow, need a custom solution, or just want to chat about your business — we&apos;re here to help.
          </p>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none transition"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none transition"
                  placeholder="john@plumbing.co.uk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none transition"
                  placeholder="+44 7700 900000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Business Name</label>
                <input
                  type="text"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none transition"
                  placeholder="Smith Plumbing Ltd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">How can we help? *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none transition resize-none"
                  placeholder="I'd like to set up QuoteFlow for my plumbing business..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-lg font-semibold shadow-lg transform transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Quick response times</h3>
              <p className="text-slate-600 mb-6">
                We typically respond within 24 hours. For urgent QuoteFlow setup questions, we&apos;ll get back to you even faster.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-slate-600">info@fixblox.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <div className="text-slate-600">07925990923</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-semibold">We review your message</div>
                    <div className="text-sm text-slate-600">Usually within a few hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-semibold">We send a personalized reply</div>
                    <div className="text-sm text-slate-600">With answers and next steps</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-semibold">We schedule a quick call</div>
                    <div className="text-sm text-slate-600">If needed, to discuss your setup</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-500 mb-4">Or explore QuoteFlow yourself</p>
              <Link href="/quoteflow/calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition">
                Try the calculator
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-16 py-8 text-sm text-slate-500">
          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between">
            <div>© <strong>FixBlox</strong> — Web app solutions for tradespeople</div>
            <div className="mt-4 md:mt-0">
              <Link href="/" className="hover:text-slate-700 transition">View all solutions</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

