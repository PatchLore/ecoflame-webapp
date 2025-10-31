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