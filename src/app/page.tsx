import Link from 'next/link'
import { Calculator, Wrench, Thermometer, Droplets, AlertTriangle, Home } from 'lucide-react'

const services = [
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    description: '24/7 emergency callouts for urgent plumbing issues and leaks'
  },
  {
    icon: Thermometer,
    title: 'Boiler Repair & Service',
    description: 'Expert boiler maintenance, repairs, and annual servicing'
  },
  {
    icon: Home,
    title: 'Bathroom Installation',
    description: 'Complete bathroom fitting and renovation services'
  },
  {
    icon: Droplets,
    title: 'Leak Detection & Repair',
    description: 'Professional leak detection and repair for all pipework'
  },
  {
    icon: Wrench,
    title: 'Drain Unblocking',
    description: 'Fast drain clearing and unblocking for all drainage systems'
  },
  {
    icon: Calculator,
    title: 'General Plumbing',
    description: 'All general plumbing work including taps, toilets, and pipework'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Your <span className="text-blue-600">Instant Plumbing Quote</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional plumbing services with transparent pricing. Get instant quotes for emergency repairs, boiler work, bathroom installations, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Calculator className="mr-2 h-6 w-6" />
                Get Instant Quote
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl border-2 border-blue-600"
              >
                Our Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">No obligation. Free quote. Transparent pricing.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Plumbing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert plumbing solutions for homes and businesses across the UK</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make getting professional plumbing services simple and transparent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Instant Quotes
              </h3>
              <p className="text-gray-600">
                Get an immediate estimate for your project with our transparent pricing calculator
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Plumbers
              </h3>
              <p className="text-gray-600">
                Professional, licensed, and experienced plumbers for all your needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quick Response
              </h3>
              <p className="text-gray-600">
                Fast response times for emergency calls and same-day service options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to get your job booked</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Tell us about the job</h3>
              <p className="text-gray-600">Choose the trade, enter your postcode, urgency, and add any details.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Get an instant estimate</h3>
              <p className="text-gray-600">See a clear price breakdown with no surprises.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Send your details</h3>
              <p className="text-gray-600">We’ll confirm and get your job booked—often the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Local Homeowners</h2>
            <p className="text-lg text-gray-600">Real feedback from recent jobs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <p className="text-gray-700 italic">“Got a fair price instantly and they fixed our leak the same day.”</p>
              <p className="mt-4 text-sm text-gray-500">— Emma, SW1</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <p className="text-gray-700 italic">“Clear pricing, great communication, and tidy work. Highly recommend.”</p>
              <p className="mt-4 text-sm text-gray-500">— Daniel, M1</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <p className="text-gray-700 italic">“Emergency callout was quick and the quote matched the final bill.”</p>
              <p className="mt-4 text-sm text-gray-500">— Priya, EH3</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your instant plumbing quote in minutes and connect with professional plumbers
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Calculator className="mr-2 h-6 w-6" />
            Get Your Quote Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Quote Calculator</h3>
          <p className="text-gray-400 mb-6">
            Professional plumbing services with transparent pricing
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/calculator" className="text-gray-400 hover:text-white transition-colors">
              Calculator
            </Link>
            <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
              Admin
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 Quote Calculator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}