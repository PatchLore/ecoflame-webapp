"use client"

import { useEffect } from "react"

export default function AuthRecoveryRedirect() {
  useEffect(() => {
    try {
      const { hash, pathname } = window.location
      if (!hash || !hash.includes('access_token')) return
      const params = new URLSearchParams(hash.slice(1))
      const type = params.get('type')
      if (type !== 'recovery') return
      if (pathname.startsWith('/admin/reset-password')) return
      // Preserve full hash for Supabase
      const target = `/admin/reset-password${hash}`
      window.location.replace(target)
    } catch {
      // no-op
    }
  }, [])

  return null
}


