import EcoFlameLayout from '@/components/EcoFlameLayout'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <EcoFlameLayout>
      <div className="py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1D3557] mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete heating and plumbing solutions for homes and businesses across London and Surrey. 
              Gas Safe registered, fully insured, and available 24/7 for emergencies.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {[
              {
                icon: '🔥',
                title: 'Boiler Installation & Replacement',
                description: 'Professional boiler installation and replacement services with comprehensive warranty coverage.',
                features: [
                  'New boiler installation and setup',
                  'Boiler replacement and upgrades',
                  'System design and planning',
                  'Comprehensive warranty coverage',
                  'Gas Safe certified installation',
                  'Post-installation support'
                ],
                price: 'From £1,500',
                duration: '1-2 days'
              },
              {
                icon: '🔧',
                title: 'Boiler Repairs & Maintenance',
                description: 'Expert boiler repair services to get your heating back up and running quickly and efficiently.',
                features: [
                  'Emergency boiler repairs',
                  'Fault diagnosis and troubleshooting',
                  'Component replacement',
                  'System optimization',
                  'Same-day service available',
                  'Preventive maintenance'
                ],
                price: 'From £120',
                duration: '1-4 hours'
              },
              {
                icon: '📋',
                title: 'Boiler Servicing & Safety Checks',
                description: 'Regular boiler maintenance to ensure efficiency, safety, and prevent unexpected breakdowns.',
                features: [
                  'Annual boiler servicing',
                  'Gas safety inspections',
                  'Efficiency optimization',
                  'Safety certificate provision',
                  'Preventive maintenance',
                  'Performance monitoring'
                ],
                price: 'From £80',
                duration: '1-2 hours'
              },
              {
                icon: '🚰',
                title: 'Plumbing Services',
                description: 'Complete plumbing solutions for all your water supply, drainage, and bathroom needs.',
                features: [
                  'Leak detection and repair',
                  'Pipe installation and replacement',
                  'Bathroom plumbing',
                  'Kitchen plumbing',
                  'Drainage solutions',
                  'Water pressure optimization'
                ],
                price: 'From £80',
                duration: '1-6 hours'
              },
              {
                icon: '⚡',
                title: 'Emergency Callouts',
                description: '24/7 emergency heating and plumbing services when you need them most, with rapid response times.',
                features: [
                  '24/7 emergency availability',
                  'Rapid response times',
                  'Emergency repairs',
                  'No call-out charges',
                  'Weekend and holiday service',
                  'Priority booking'
                ],
                price: 'From £150',
                duration: 'Within 2 hours'
              },
              {
                icon: '📄',
                title: 'Landlord Services & Certificates',
                description: 'Gas safety certificates and compliance services for landlords and property managers.',
                features: [
                  'Gas safety certificates',
                  'Landlord compliance checks',
                  'Property safety inspections',
                  'Documentation and reporting',
                  'Annual renewal reminders',
                  'Legal compliance support'
                ],
                price: 'From £80',
                duration: '1-2 hours'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1D3557] mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white p-4 rounded-lg text-center">
                        <div className="text-sm opacity-90">Starting from</div>
                        <div className="text-xl font-bold">{service.price}</div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <div className="text-sm text-gray-600">Typical duration</div>
                        <div className="text-xl font-bold text-[#1D3557]">{service.duration}</div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-[#1D3557] mb-3">What&apos;s included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <span className="text-[#FF6B35] mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
            <p className="text-xl mb-8 opacity-90">
              We proudly serve London and Surrey with professional heating and plumbing services
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                'Central London',
                'North London', 
                'South London',
                'East London',
                'West London',
                'Surrey',
                'Sutton',
                'Croydon'
              ].map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <div className="text-lg font-semibold">{area}</div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-lg opacity-90">
              Don&apos;t see your area? <a href="tel:07921064352" className="underline hover:no-underline">Call us</a> to check coverage
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-[#1D3557] mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get an instant quote or speak to our team about your heating and plumbing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#book-now" className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg">
                Get Instant Quote
              </Link>
              <a href="tel:07921064352" className="bg-transparent text-[#FF6B35] px-10 py-4 rounded-full border-2 border-[#FF6B35] font-semibold text-lg transition-all hover:bg-[#FF6B35] hover:text-white">
                Call: 07921 064 352
              </a>
            </div>
          </div>
        </div>
      </div>
    </EcoFlameLayout>
  )
}


