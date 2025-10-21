import EcoFlameLayout from '@/components/EcoFlameLayout'
import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <EcoFlameLayout>
      <div className="py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1D3557] mb-6">Customer Reviews</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about our heating and plumbing services. 
              We&apos;re proud of our 9.96/10 rating based on 586+ reviews.
            </p>
          </div>

          {/* Overall Rating */}
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white rounded-2xl p-12 text-center mb-16">
            <div className="text-8xl font-bold mb-4">9.96<span className="text-4xl opacity-70">/10</span></div>
            <p className="text-2xl mb-6">Based on 586 reviews on CheckATrade</p>
            <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              &ldquo;Customers consistently describe this company as professional, reliable, and highly skilled, 
              often solving long-standing issues that others could not. The team is frequently praised for their 
              excellent communication, responsiveness, and for leaving everything clean and tidy.&rdquo;
            </p>
            <a 
              href="https://www.checkatrade.com/trades/ecoflameheatingsolutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#FF6B35] px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg mt-8"
            >
              View All Reviews on CheckATrade
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Featured Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-[#1D3557]">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-500 text-lg">
                      {'⭐'.repeat(review.rating)}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {review.service}
                  </span>
                  {review.verified && (
                    <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      ✓ Verified
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 leading-relaxed">&ldquo;{review.review}&rdquo;</p>
              </div>
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

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1D3557] mb-6">Ready to Experience Our Service?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied customers who trust EcoFlame for their heating and plumbing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#book-now" className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg">
                Get Your Quote Today
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


