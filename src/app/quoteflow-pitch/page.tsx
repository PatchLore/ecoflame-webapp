import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuoteFlow - Instant Plumbing Quotes',
  description: 'Professional quote calculator for plumbing businesses',
}

export default function QuoteFlowPage() {
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
              Professional quote generation for plumbing businesses
            </p>
            <a
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Try Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What QuoteFlow Does
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Quotes</h3>
              <p className="text-gray-600">
                Generate professional plumbing quotes in 30 seconds
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Pricing</h3>
              <p className="text-gray-600">
                Base prices + urgency multipliers + travel fees
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Optimized</h3>
              <p className="text-gray-600">
                Perfect experience on all devices
              </p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Capture</h3>
              <p className="text-gray-600">
                Automatic lead collection with notifications
              </p>
            </div>
            
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plumbing Focused</h3>
              <p className="text-gray-600">
                Built specifically for plumbing services
              </p>
            </div>
            
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Admin Dashboard</h3>
              <p className="text-gray-600">
                View and manage all your leads
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Supported Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Leak Repair</h3>
              <p className="text-blue-600 font-bold">Base: £120</p>
              <p className="text-sm text-gray-600 mt-2">24/7 emergency callouts for urgent plumbing issues</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Boiler Service/Repair</h3>
              <p className="text-blue-600 font-bold">Base: £150</p>
              <p className="text-sm text-gray-600 mt-2">Expert boiler maintenance and repairs</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bathroom Installation</h3>
              <p className="text-blue-600 font-bold">Base: £800</p>
              <p className="text-sm text-gray-600 mt-2">Complete bathroom fitting and renovation</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Toilet/Tap Installation</h3>
              <p className="text-blue-600 font-bold">Base: £80</p>
              <p className="text-sm text-gray-600 mt-2">Installation of toilets, taps, and fixtures</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drain Unblocking</h3>
              <p className="text-blue-600 font-bold">Base: £100</p>
              <p className="text-sm text-gray-600 mt-2">Fast drain clearing and unblocking services</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Central Heating Work</h3>
              <p className="text-blue-600 font-bold">Base: £200</p>
              <p className="text-sm text-gray-600 mt-2">Central heating installation and repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Logic Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Pricing Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Components</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mr-4">🏠</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Base Service Price</h4>
                    <p className="text-gray-600">Fixed price for each plumbing service</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-4">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Urgency Multiplier</h4>
                    <p className="text-gray-600">Standard (0%), Same Day (+20%), Emergency (+40%)</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-2xl mr-4">🚗</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Travel Fee</h4>
                    <p className="text-gray-600">Additional charge for distant postcodes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Example Quote</h4>
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits for Plumbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Save Time</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">No More Phone Calls</h4>
                    <p className="text-gray-600">Customers get instant quotes without calling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automated Calculations</h4>
                    <p className="text-gray-600">No manual pricing or estimate writing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                    <p className="text-gray-600">Customers can get quotes anytime</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Win More Jobs</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Image</h4>
                    <p className="text-gray-600">Modern, transparent pricing builds trust</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Higher Conversion</h4>
                    <p className="text-gray-600">85% of users who get quotes submit contact details</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Edge</h4>
                    <p className="text-gray-600">Stand out from competitors with instant quotes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Try QuoteFlow and see how it can transform your plumbing business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Try Live Demo
            </a>
            <a
              href="/admin"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Admin Dashboard
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