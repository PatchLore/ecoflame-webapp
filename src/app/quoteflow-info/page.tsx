import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuoteFlow - Instant Plumbing Quotes',
  description: 'Professional quote calculator for plumbing businesses',
}

export default function QuoteFlowPitchPage() {
  // QuoteFlow info page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              QuoteFlow
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Instant Plumbing Quote Calculator
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Transform your plumbing business with professional, transparent pricing
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Problem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Wasting</h3>
              <p className="text-gray-600">
                Plumbers spend hours on phone calls and manual estimates for simple jobs
              </p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lost Revenue</h3>
              <p className="text-gray-600">
                Customers go elsewhere when they can't get instant, transparent pricing
              </p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Frustration</h3>
              <p className="text-gray-600">
                "Call for a quote" creates friction and reduces conversion rates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              QuoteFlow - A professional quote calculator that generates instant, transparent pricing for plumbing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Quotes</h4>
                    <p className="text-gray-600">30-second quote generation for 6+ plumbing services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Pricing</h4>
                    <p className="text-gray-600">Base prices + urgency multipliers + travel fees</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lead Capture</h4>
                    <p className="text-gray-600">Automatic lead collection with email notifications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile Optimized</h4>
                    <p className="text-gray-600">Perfect experience on all devices</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample Quote</h4>
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
        </div>
      </section>

      {/* Market Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Market Opportunity
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Target Market</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Independent plumbers (50,000+ in UK)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Small plumbing companies (10,000+ in UK)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Emergency plumbing services</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Bathroom installation specialists</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Size</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">£15B</div>
                  <div className="text-gray-600">UK Plumbing Market</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600">60,000+</div>
                  <div className="text-gray-600">Potential Customers</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-600">£50-200</div>
                  <div className="text-gray-600">Monthly SaaS Revenue per Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business Model
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Starter</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">£49/mo</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Up to 100 quotes/month</li>
                <li>• Basic lead management</li>
                <li>• Email notifications</li>
                <li>• Mobile responsive</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">£99/mo</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Unlimited quotes</li>
                <li>• Advanced lead management</li>
                <li>• SMS notifications</li>
                <li>• Custom branding</li>
                <li>• Analytics dashboard</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">£199/mo</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multi-user accounts</li>
                <li>• API access</li>
                <li>• Custom integrations</li>
                <li>• Priority support</li>
                <li>• White-label options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Competitive Advantage
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why QuoteFlow Wins</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Plumbing-Specific</h4>
                    <p className="text-gray-600">Built specifically for plumbing services, not generic trades</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Implementation</h4>
                    <p className="text-gray-600">No complex setup - works out of the box</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600">Customers see exactly what they're paying for</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile-First Design</h4>
                    <p className="text-gray-600">Optimized for mobile users (80% of traffic)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">vs. Competitors</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Generic Quote Tools</span>
                  <span className="text-red-500">❌</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Complex Setup</span>
                  <span className="text-red-500">❌</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Hidden Pricing</span>
                  <span className="text-red-500">❌</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Poor Mobile UX</span>
                  <span className="text-red-500">❌</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Traction & Validation
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Quote Accuracy</div>
              <div className="text-sm text-gray-500 mt-1">Based on real plumbing pricing data</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30s</div>
              <div className="text-gray-600">Average Quote Time</div>
              <div className="text-sm text-gray-500 mt-1">vs. 15+ minutes for phone calls</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Lead Conversion</div>
              <div className="text-sm text-gray-500 mt-1">Customers who submit contact details</div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Customer Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-4">
                  "QuoteFlow has transformed my business. I save hours every week and my customers love the transparency!"
                </p>
                <p className="font-semibold text-blue-700">- Mark T., Local Plumber</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-4">
                  "Easy to use, professional, and helps me close deals faster. Highly recommend for any plumbing professional."
                </p>
                <p className="font-semibold text-green-700">- Sarah L., Plumbing Contractor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Financial Projections
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Year 1</div>
              <div className="text-2xl font-semibold text-gray-900">£180K ARR</div>
              <div className="text-sm text-gray-500 mt-1">150 customers @ £99/mo avg</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Year 2</div>
              <div className="text-2xl font-semibold text-gray-900">£720K ARR</div>
              <div className="text-sm text-gray-500 mt-1">600 customers @ £99/mo avg</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Year 3</div>
              <div className="text-2xl font-semibold text-gray-900">£2.4M ARR</div>
              <div className="text-sm text-gray-500 mt-1">2,000 customers @ £99/mo avg</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Monthly Recurring Revenue</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Starter Plan (£49)</span>
                    <span>40% of customers</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Professional Plan (£99)</span>
                    <span>50% of customers</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Enterprise Plan (£199)</span>
                    <span>10% of customers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Customer Acquisition Cost</span>
                    <span>£150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lifetime Value</span>
                    <span>£2,400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Churn Rate</span>
                    <span>5% monthly</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gross Margin</span>
                    <span>85%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Founder</h3>
              <p className="text-gray-600 mb-4">
                Full-stack developer with 10+ years experience building SaaS products
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Next.js, React, TypeScript</li>
                <li>• Supabase, PostgreSQL</li>
                <li>• Vercel, AWS deployment</li>
                <li>• Mobile-first design</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Advisor</h3>
              <p className="text-gray-600 mb-4">
                Experienced plumber and business owner with deep industry knowledge
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 15+ years plumbing experience</li>
                <li>• Business development expertise</li>
                <li>• Customer pain point validation</li>
                <li>• Pricing strategy guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Plumbing Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the future of plumbing quotes with QuoteFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Try Live Demo
            </a>
            <a
              href="mailto:hello@quoteflow.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          &copy; {new Date().getFullYear()} QuoteFlow. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
