'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Force dynamic rendering
export const dynamic = 'force-dynamic'


// Redirect page - /calculator now redirects to /quoteflow
export default function CalculatorPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the new QuoteFlow calculator route
    router.replace('/quoteflow/calculator')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
                  <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to QuoteFlow...</p>
      </div>
    </div>
  )
}
