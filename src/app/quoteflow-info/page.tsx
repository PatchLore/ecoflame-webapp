import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuoteFlow - Win More Plumbing Jobs with Instant Quotes',
  description: 'Professional quote calculator for plumbing businesses',
}

export default function QuoteFlowInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Win More Plumbing Jobs with Instant Quotes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            QuoteFlow helps you stand out with professional, 30-second quotes that build trust and bring in more leads.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <p className="text-xl text-gray-600">
            Plumbers spend hours giving quotes… and lose jobs to competitors who respond faster.
          </p>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Solution – QuoteFlow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <span className="text-2xl mr-4">⚡</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Quotes</h3>
                <p className="text-gray-600">30-second quote generation</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-4">💰</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Pricing</h3>
                <p className="text-gray-600">urgency multipliers + travel fees</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-4">🎯</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Capture</h3>
                <p className="text-gray-600">automatic lead collection with email notifications</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-4">📱</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
                <p className="text-gray-600">perfect on any device</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer selects service</h3>
              <p className="text-gray-600">(e.g. leak repair)</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">QuoteFlow shows instant transparent pricing</h3>
              <p className="text-gray-600">Professional breakdown</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">You get the lead instantly with all details</h3>
              <p className="text-gray-600">Contact info + quote</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Sample Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Emergency Leak Repair</span>
                <span className="font-semibold">£120</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Same Day (+20%)</span>
                <span className="font-semibold">£24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Travel Fee</span>
                <span className="font-semibold">£50</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-blue-600">£194</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Plumbers Love QuoteFlow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-lg text-gray-700">Save time – no more manual estimates</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-lg text-gray-700">Win more jobs with faster quotes</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-lg text-gray-700">Build trust with transparent pricing</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-lg text-gray-700">Capture serious leads 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Simple Pricing
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center">
              <span className="text-3xl mr-4">💻</span>
              <div className="text-left">
                <div className="text-xl font-semibold text-gray-900">One-time Setup Fee: £249</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <span className="text-3xl mr-4">⚡</span>
              <div className="text-left">
                <div className="text-xl font-semibold text-gray-900">Monthly Hosting & Support: £29</div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the plumber who gives instant quotes — while others are still saying &apos;call me back&apos;.
          </p>
          
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Book Your Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4">
          Powered by QuoteFlow – Built on modern tech (Next.js + Supabase + Vercel)
        </div>
      </footer>
    </div>
  )
}