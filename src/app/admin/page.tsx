'use client'

import { useEffect } from 'react'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the new dashboard
    window.location.href = '/admin/dashboard'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  )
}