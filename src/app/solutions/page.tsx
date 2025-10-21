'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const dynamic = 'force-dynamic'

// Redirect page - /solutions now redirects to / (homepage)
export default function SolutionsPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
        <p className="text-slate-600">Redirecting...</p>
      </div>
    </div>
  )
}
