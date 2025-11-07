'use client'

import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: '🔥',
      title: 'Boiler Installation',
      description: 'Professional boiler installation and replacement services with warranty coverage.',
      features: ['Install new boilers', 'Replace existing systems', 'Upgrade heating systems', 'Includes warranty']
    },
    {
      icon: '🔧',
      title: 'Boiler Repairs',
      description: 'Expert boiler repair services to get your heating back up and running quickly.',
      features: ['Repair emergencies', 'Diagnose faults', 'Replace components', 'Same-day service']
    },
    {
      icon: '📋',
      title: 'Boiler Servicing',
      description: 'Regular boiler maintenance to ensure efficiency and prevent breakdowns.',
      features: ['Annual servicing', 'Safety checks', 'Optimise efficiency', 'Preventive maintenance']
    },
    {
      icon: '🚰',
      title: 'Plumbing Services',
      description: 'Complete plumbing solutions for all your water and drainage needs.',
      features: ['Repair leaks', 'Install pipes', 'Bathroom plumbing', 'Drainage solutions']
    },
    {
      icon: '⚡',
      title: 'Emergency Callouts',
      description: '24/7 emergency heating and plumbing services when you need them most.',
      features: ['Available 24/7', 'Rapid response', 'Emergency repairs', 'No call-out charges']
    },
    {
      icon: '📄',
      title: 'Landlord Certificates',
      description: 'Gas safety certificates and compliance services for landlords.',
      features: ['Gas safety certificates', 'Landlord compliance', 'Property inspections', 'Complete documentation']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-[#0A0E27] to-[#1D3557] pt-28 md:pt-32">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-[#FF6B35] to-[#E63946] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Complete heating and plumbing solutions for homes and businesses across London and Surrey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#1D3557] mb-4">{service.title}</h3>
                <p className="text-gray-800 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-800">
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

      {/* CTA Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Get an instant quote for any of our services or contact us to discuss your heating and plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-quote" 
              className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,107,53,0.4)] hover:shadow-[0_15px_40px_rgba(255,107,53,0.5)]"
            >
              Get an Instant Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent text-[#1D3557] px-10 py-4 rounded-full border-2 border-[#1D3557] font-semibold text-lg transition-all hover:bg-[#1D3557] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

