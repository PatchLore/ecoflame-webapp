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

    // Try database first, but don't fail if it doesn't work
    try {
      const supabase = getServerSupabase()
      const { data, error } = await supabase.from('leads').insert([{
        name: body.name,
        email: body.email,
        phone: body.phone,
        job_type: body.job_type,
        postcode: body.postcode,
        urgency: body.urgency,
        job_details: body.job_details ?? null,
        estimated_quote: body.estimated_quote,
      }]).select()

      if (error) {
        console.log('Database insert error:', error.message, error.details)
        // Continue anyway - don't fail the request
      } else {
        console.log('Lead saved successfully:', data)
      }
    } catch (dbError) {
      console.log('Database connection failed:', dbError)
      // Continue anyway - don't fail the request
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
    } catch (emailError) {
      console.log('Email failed but lead saved:', emailError)
    }

    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


