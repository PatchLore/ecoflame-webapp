'use client'

import { useState } from 'react'
import Link from 'next/link'
import EcoFlameLayout from '@/components/EcoFlameLayout'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <EcoFlameLayout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1D3557] flex items-center justify-center px-8 pt-28 pb-20 md:py-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional <span className="bg-gradient-to-r from-[#FF6B35] to-[#E63946] bg-clip-text text-transparent">Heating & Plumbing</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Expert boiler installation, repairs, and heating services across London and Surrey. 
            Gas Safe registered, fully insured, and available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#book-now" className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,107,53,0.4)] hover:shadow-[0_15px_40px_rgba(255,107,53,0.5)]">
              Send Your Details – We&apos;ll Call You With a Quote
            </a>
            <a href="tel:07921064352" className="bg-transparent text-white px-10 py-4 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#0A0E27]">
              Call now
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="text-white font-semibold mb-2">Gas Safe Registered</h3>
              <p className="text-white/70 text-sm">Fully qualified and certified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⏰</div>
              <h3 className="text-white font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-white/70 text-sm">Available when you need us most</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="text-white font-semibold mb-2">9.96/10 Rating</h3>
              <p className="text-white/70 text-sm">Based on 586+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete heating and plumbing solutions for homes and businesses across London and Surrey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔥',
                title: 'Boiler Installation',
                description: 'Professional boiler installation and replacement services with warranty coverage.',
                features: ['New boiler installation', 'Boiler replacement', 'System upgrades', 'Warranty included']
              },
              {
                icon: '🔧',
                title: 'Boiler Repairs',
                description: 'Expert boiler repair services to get your heating back up and running quickly.',
                features: ['Emergency repairs', 'Fault diagnosis', 'Component replacement', 'Same-day service']
              },
              {
                icon: '📋',
                title: 'Boiler Servicing',
                description: 'Regular boiler maintenance to ensure efficiency and prevent breakdowns.',
                features: ['Annual servicing', 'Safety checks', 'Efficiency optimization', 'Preventive maintenance']
              },
              {
                icon: '🚰',
                title: 'Plumbing Services',
                description: 'Complete plumbing solutions for all your water and drainage needs.',
                features: ['Leak repairs', 'Pipe installation', 'Bathroom plumbing', 'Drainage solutions']
              },
              {
                icon: '⚡',
                title: 'Emergency Callouts',
                description: '24/7 emergency heating and plumbing services when you need them most.',
                features: ['24/7 availability', 'Rapid response', 'Emergency repairs', 'No call-out charges']
              },
              {
                icon: '📄',
                title: 'Landlord Certificates',
                description: 'Gas safety certificates and compliance services for landlords.',
                features: ['Gas safety certificates', 'Landlord compliance', 'Property inspections', 'Documentation']
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#1D3557] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="text-[#FF6B35] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-8 bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-white mb-2">9.96<span className="text-3xl text-white/70">/10</span></div>
            <p className="text-xl text-white/90">Based on 586 reviews on CheckATrade</p>
          </div>
          <p className="text-lg text-white/80 max-w-[800px] mx-auto mb-6 italic">
            &ldquo;Customers consistently describe this company as professional, reliable, and highly skilled, often solving long-standing issues that others could not. The team is frequently praised for their excellent communication, responsiveness, and for leaving everything clean and tidy.&rdquo;
          </p>
          <a 
            href="https://www.checkatrade.com/trades/ecoflameheatingsolutions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#FF6B35] px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-lg mb-12"
          >
            View All Reviews on CheckATrade
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 mb-4">&ldquo;Excellent service, very professional and clean work. Highly recommend!&rdquo;</p>
              <p className="text-white/70 text-sm">- Sarah M.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 mb-4">&ldquo;Fixed our boiler quickly and efficiently. Great communication throughout.&rdquo;</p>
              <p className="text-white/70 text-sm">- James L.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 mb-4">&ldquo;Reliable, trustworthy, and excellent value for money. Will definitely use again.&rdquo;</p>
              <p className="text-white/70 text-sm">- Emma R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#1D3557] mb-6">Serving London & Surrey</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Based in Sutton, Surrey, we provide expert heating and plumbing services throughout London and Surrey. Our experienced team travels extensively to ensure you get the help you need, when you need it.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Get in touch today to find out if we can reach you. We&apos;re constantly expanding our coverage area to serve more customers.
            </p>
            <a href="#book-now" className="inline-block bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-10 py-4 rounded-full font-semibold transition-all hover:-translate-y-1">
              Check Your Postcode
            </a>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section id="book-now" className="py-24 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#1D3557] mb-4">Send Your Details – We&apos;ll Call You With a Quote</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we&apos;ll contact you to discuss your heating needs and provide a personalized quote.</p>
          </div>
          <div className="w-full flex justify-center py-10">
            {isLoading && (
              <div className="animate-pulse text-center py-10 text-gray-500">
                Loading calculator...
              </div>
            )}
            <iframe
              src="/quoteflow/embed"
              className="w-full max-w-3xl rounded-xl border-0 shadow-sm"
              style={{
                minHeight: "700px",
                overflow: "visible",
                borderRadius: "12px",
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out"
              }}
              onLoad={() => {
                setTimeout(() => setIsLoading(false), 500) // Small delay to ensure content is ready
              }}
              loading="lazy"
              title="EcoFlame Quote Request Form"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Need Help Now?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is available 24/7 for emergencies and consultations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/447921064352?text=Hi%20I%27m%20interested%20in%20getting%20a%20quote" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
            <Link href="/contact" className="bg-transparent text-white px-10 py-4 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#FF6B35]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </EcoFlameLayout>
  )
}