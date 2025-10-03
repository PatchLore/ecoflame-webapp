import { NextRequest, NextResponse } from 'next/server'
import { getServerSupabase } from '@/lib/supabase-server'
import { sendLeadNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const required = ['name','email','phone','job_type','postcode','urgency','estimated_quote']
    for (const key of required) {
      if (!body[key]) {
        return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 })
      }
    }

    const supabase = getServerSupabase()

    const { error } = await supabase.from('leads').insert([{
      name: body.name,
      email: body.email,
      phone: body.phone,
      job_type: body.job_type,
      postcode: body.postcode,
      urgency: body.urgency,
      job_details: body.job_details ?? null,
      estimated_quote: body.estimated_quote,
    }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Best-effort email (do not fail the request if email fails)
    try {
      await sendLeadNotification({
        id: 'n/a',
        name: body.name,
        email: body.email,
        phone: body.phone,
        job_type: body.job_type,
        postcode: body.postcode,
        urgency: body.urgency,
        job_details: body.job_details ?? null,
        estimated_quote: body.estimated_quote,
        created_at: new Date().toISOString(),
      })
    } catch {}

    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


