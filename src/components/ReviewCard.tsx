interface ReviewCardProps {
  name: string
  location: string
  rating: number
  date: string
  service: string
  review: string
  verified: boolean
}

export default function ReviewCard({ name, location, rating, date, service, review, verified }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100">
      {/* Header with name, location, and rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="font-semibold text-[#1D3557] text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="text-right ml-4">
          <div className="text-yellow-500 text-lg mb-1">
            {'⭐'.repeat(rating)}
          </div>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      
      {/* Service and verification badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium">
          {service}
        </span>
        {verified && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <span>✓</span>
            <span>Verified</span>
          </span>
        )}
      </div>
      
      {/* Review text */}
      <blockquote className="text-gray-700 leading-relaxed">
        &ldquo;{review}&rdquo;
      </blockquote>
    </div>
  )
}
