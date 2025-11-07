import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export function getServerSupabase() {
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Supabase server credentials missing:', {
      hasUrl: !!supabaseUrl,
      hasServiceKey: !!serviceRoleKey,
      url: supabaseUrl ? 'present' : 'missing',
      serviceKey: serviceRoleKey ? 'present' : 'missing'
    })
    throw new Error('Supabase server credentials are not configured')
  }
  return createClient(supabaseUrl, serviceRoleKey)
}









