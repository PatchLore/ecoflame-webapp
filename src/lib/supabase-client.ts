import { createClient } from '@supabase/supabase-js'

// Only create client on the client side
export function createSupabaseClient() {
  if (typeof window === 'undefined') {
    return null
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  })
}

// Database types
export interface JobType {
  id: string
  name: string
  base_price: number
  created_at: string
}

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  job_type: string
  postcode: string
  urgency: string
  job_details: string | null
  estimated_quote: number
  status?: string
  created_at: string
}

export interface UrgencyMultiplier {
  standard: number
  same_day: number
  emergency: number
}

export const URGENCY_MULTIPLIERS: UrgencyMultiplier = {
  standard: 1.0,
  same_day: 1.2,
  emergency: 1.4
}

export const TRAVEL_FEE_THRESHOLD = 10 // miles
export const TRAVEL_FEE_AMOUNT = 25 // £25 for distances > 10 miles








