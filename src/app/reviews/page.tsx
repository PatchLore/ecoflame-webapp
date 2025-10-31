"use client"

import EcoFlameLayout from "@/components/EcoFlameLayout";
import ReviewsSection from "@/components/ReviewsSection";

export default function ReviewsPage() {
  return (
    <EcoFlameLayout>
      {/* Reviews as first section */}
      <div className="min-h-screen bg-[#0B2346] text-white">
        <div className="pt-20">{/* offset for fixed nav */}
          <header className="text-center px-8 py-8">
            <h1 className="text-4xl font-semibold">What Our Customers Say</h1>
            <p className="text-white/80 mt-2">Real feedback from happy EcoFlame customers</p>
          </header>
          <ReviewsSection />
        </div>
      </div>
    </EcoFlameLayout>
  )
}


