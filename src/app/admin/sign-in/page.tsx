'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { createSupabaseClient } from '@/lib/supabase-client'
import { LogIn, Eye, EyeOff } from 'lucide-react'

function AdminSignInContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Check if this is a password reset redirect
  useEffect(() => {
    // Check for tokens in the URL hash (Supabase puts them there)
    const hash = window.location.hash
    if (hash.includes('access_token') && hash.includes('type=recovery')) {
      // Redirect to reset password page with the tokens
      router.push(`/admin/reset-password${hash}`)
    }
  }, [router])

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createSupabaseClient()
    if (!supabase) {
      setError('Database connection not available')
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else if (data.user) {
        // Redirect to dashboard
        window.location.href = '/admin/dashboard'
      }
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first')
      return
    }

    setLoading(true)
    setError('')

    const supabase = createSupabaseClient()
    if (!supabase) {
      setError('Database connection not available')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      })

      if (error) {
        setError(error.message)
      } else {
        setError('Password reset email sent! Check your inbox.')
      }
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  // const handleSignUp = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   setError('')

  //   const supabase = createSupabaseClient()
  //   if (!supabase) {
  //     setError('Database connection not available')
  //     setLoading(false)
  //     return
  //   }

  //   try {
  //     const { data, error } = await supabase.auth.signUp({
  //       email,
  //       password,
  //     })

  //     if (error) {
  //       setError(error.message)
  //     } else if (data.user) {
  //       setError('Account created! Please check your email to confirm your account, then sign in.')
  //     }
  //   } catch {
  //     setError('An unexpected error occurred')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1D3557] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#FF6B35] to-[#E63946] rounded-[50%_50%_0_50%]"></div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#E63946] bg-clip-text text-transparent mb-2">Eco Flame</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h2>
          <p className="text-gray-600">Access your lead management dashboard</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#E63946] text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <>
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </>
              )}
            </button>
            
            <button
              type="button"
              onClick={handleForgotPassword}
              disabled={loading || !email}
              className="w-full text-sm text-[#FF6B35] hover:text-[#E63946] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Forgot Password?
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[#FF6B35] hover:text-[#E63946] text-sm"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100">
          <h3 className="text-sm font-medium text-gray-900 mb-2">🔥 Eco Flame Admin</h3>
          <p className="text-xs text-gray-600">
            Secure login for Eco Flame staff only. If you need access, please contact your administrator.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AdminSignIn() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1D3557] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF6B35] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <AdminSignInContent />
    </Suspense>
  )
}
