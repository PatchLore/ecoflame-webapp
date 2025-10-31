"use client"

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-8 bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white">
      <div className="max-w-[1400px] mx-auto text-center">
        <div className="mb-6">
          <div className="text-6xl font-bold text-white mb-2">9.96<span className="text-3xl text-white/70">/10</span></div>
          <p className="text-xl text-white/90">Based on 586 reviews on Checkatrade</p>
        </div>
        <a 
          href="https://www.checkatrade.com/trades/ecoflame" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#FF6B35] px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-lg mb-12"
        >
          View All Reviews on Checkatrade
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-white/90 mb-4">“Excellent service, very professional and clean work. Highly recommend!”</p>
            <p className="text-white/70 text-sm">- Sarah M.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-white/90 mb-4">“Fixed our boiler quickly and efficiently. Great communication throughout.”</p>
            <p className="text-white/70 text-sm">- James L.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-white/90 mb-4">“Reliable, trustworthy, and excellent value for money. Will definitely use again.”</p>
            <p className="text-white/70 text-sm">- Emma R.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


