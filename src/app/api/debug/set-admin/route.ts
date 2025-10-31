import { NextResponse } from 'next/server'
import { getServerSupabase } from '@/lib/supabase-server'

export async function POST() {
  try {
    const supabase = getServerSupabase()
    const userId = 'a3b11dc0-a782-4e3e-9b4b-9dfa6f6ee1b2'

    const { data, error } = await supabase.auth.admin.updateUserById(userId, {
      app_metadata: { role: 'admin' }
    })

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true, id: data.user?.id, app_metadata: data.user?.app_metadata })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ ok: false, error: msg }, { status: 500 })
  }
}


