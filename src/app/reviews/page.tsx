import EcoFlameLayout from '@/components/EcoFlameLayout'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <EcoFlameLayout>
      <div className="py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header with prominent rating badge */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white rounded-2xl p-8 mb-8 inline-block">
              <div className="text-6xl font-bold mb-2">9.96<span className="text-3xl opacity-70">/10</span></div>
              <p className="text-xl mb-4">Based on 586 reviews</p>
              <div className="text-3xl">⭐⭐⭐⭐⭐</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-4">Customer Reviews</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what our customers say about our heating and plumbing services. 
              We&apos;re proud of our exceptional rating and customer satisfaction.
            </p>
          </div>

          {/* Featured Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'Sarah Mitchell',
                location: 'Sutton, Surrey',
                rating: 5,
                date: '2 weeks ago',
                service: 'Boiler Installation',
                review: 'Absolutely fantastic service from start to finish. The team was professional, punctual, and left everything spotless. Our new boiler is working perfectly and the installation was completed in just one day. Highly recommend!',
                verified: true
              },
              {
                name: 'James Thompson',
                location: 'Croydon, Surrey',
                rating: 5,
                date: '1 month ago',
                service: 'Emergency Boiler Repair',
                review: 'Called them on a Sunday evening when our boiler broke down. They arrived within 2 hours and had it fixed the same day. Excellent communication throughout and very reasonable pricing. Will definitely use again.',
                verified: true
              },
              {
                name: 'Emma Richardson',
                location: 'Wimbledon, London',
                rating: 5,
                date: '3 weeks ago',
                service: 'Boiler Servicing',
                review: 'Great annual service. The engineer was thorough, explained everything clearly, and gave us some useful tips for maintaining our boiler. Very professional and friendly service.',
                verified: true
              },
              {
                name: 'David Patel',
                location: 'Kingston, Surrey',
                rating: 5,
                date: '1 week ago',
                service: 'Plumbing Repair',
                review: 'Fixed a persistent leak that other plumbers couldn&apos;t solve. The engineer was knowledgeable and found the root cause quickly. Great value for money and excellent workmanship.',
                verified: true
              },
              {
                name: 'Lisa Chen',
                location: 'Richmond, London',
                rating: 5,
                date: '2 weeks ago',
                service: 'Bathroom Plumbing',
                review: 'Complete bathroom plumbing renovation. The team was clean, efficient, and completed the work on time. Very happy with the results and would definitely recommend to others.',
                verified: true
              },
              {
                name: 'Michael Brown',
                location: 'Epsom, Surrey',
                rating: 5,
                date: '3 days ago',
                service: 'Landlord Certificate',
                review: 'Quick and efficient gas safety certificate for my rental property. The engineer was thorough and provided detailed documentation. Great service for landlords.',
                verified: true
              }
            ].map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                location={review.location}
                rating={review.rating}
                date={review.date}
                service={review.service}
                review={review.review}
                verified={review.verified}
              />
            ))}
          </div>

          {/* Rating Breakdown */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#1D3557] mb-8 text-center">Rating Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1D3557] mb-4">What customers say about us:</h3>
                <div className="space-y-4">
                  {[
                    { aspect: 'Punctuality', rating: 9.8, comment: 'Always on time or early' },
                    { aspect: 'Quality of Work', rating: 9.9, comment: 'Excellent craftsmanship' },
                    { aspect: 'Value for Money', rating: 9.7, comment: 'Fair and transparent pricing' },
                    { aspect: 'Communication', rating: 9.8, comment: 'Clear and helpful updates' },
                    { aspect: 'Cleanliness', rating: 9.9, comment: 'Left everything spotless' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-[#1D3557]">{item.aspect}</div>
                        <div className="text-sm text-gray-600">{item.comment}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#FF6B35]">{item.rating}</div>
                        <div className="text-sm text-gray-500">/10</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#1D3557] mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">5 new reviews this week</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Average response time: 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                    <span className="text-sm text-gray-700">98% customer satisfaction rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust EcoFlame for their heating and plumbing needs. 
              Send your details and we&apos;ll call to confirm your visit & tailored quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link 
                href="/#book-now" 
                className="bg-white text-[#FF6B35] px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Request Your Visit & Quote
              </Link>
              <a 
                href="tel:07921064352" 
                className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#FF6B35]"
              >
                Call: 07921 064 352
              </a>
            </div>

            {/* WhatsApp Chat Button */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/447921064352?text=Hi%20I'm%20interested%20in%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.214-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-sm opacity-75 mt-4">
              Available 24/7 for emergencies • Gas Safe registered • Fully insured
            </p>
          </div>
        </div>
      </div>
    </EcoFlameLayout>
  )
}


