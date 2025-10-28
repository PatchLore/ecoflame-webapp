import { getServerSupabase } from '@/lib/supabase-server'
import type { PostgrestError } from '@supabase/supabase-js'

type LeadInput = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;        // maps -> job_type
  urgency: string;
  message?: string;       // maps -> job_details
  quoteAmount?: number;   // maps -> estimated_quote (stringified)
  source?: string;        // optional
};

type JsonError = { debug: string; body?: unknown };

function isLeadInput(x: unknown): x is LeadInput {
  if (!x || typeof x !== 'object') return false;
  const o = x as Record<string, unknown>;
  const req = ['name','email','phone','postcode','service','urgency'] as const;
  return req.every(k => typeof o[k] === 'string' && (o[k] as string).trim().length > 0);
}

// Map UI urgency labels to DB enum values
function toDbUrgency(u: string): 'emergency' | 'urgent' | 'standard' {
  const s = u.trim().toLowerCase();
  if (['same day', 'today', 'asap', 'immediately', 'emergency'].includes(s)) return 'emergency';
  if (['next day', 'tomorrow', 'urgent', '48h', '2 days'].includes(s)) return 'urgent';
  if (['this week', 'flexible', 'standard', 'next week', '3+ days'].includes(s)) return 'standard';
  return 'standard';
}

export async function POST(req: Request): Promise<Response> {
  try {
    const createServerClient = getServerSupabase;
    const supabase = createServerClient();

    const bodyUnknown = await req.json();
    console.log('[leads] Received:', bodyUnknown);

    if (!isLeadInput(bodyUnknown)) {
      const err: JsonError = { debug: 'Missing required frontend fields', body: bodyUnknown };
      console.error('[leads]', err);
      return Response.json(err, { status: 400 });
    }

    const body: LeadInput = bodyUnknown;

    // Normalize known fields
    // Normalize UI urgency → DB values
    const dbUrgency = toDbUrgency(body.urgency);

    // Map frontend → DB columns we know exist from historical rows
    const insertCandidate: Record<string, string> = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      job_type: body.service,
      postcode: body.postcode,
      urgency: dbUrgency,
      job_details: body.message ?? '',
      status: 'New',
    };

    if (typeof body.quoteAmount === 'number') {
      insertCandidate.estimated_quote = String(body.quoteAmount);
    }
    // Do not include optional columns like `source` to avoid schema cache errors

    const { data, error } = await supabase.from('leads').insert([insertCandidate]).select();

    if (error) {
      const msg = (error as PostgrestError).message ?? 'Unknown Supabase error';
      console.error('[leads] Database insert error:', msg);
      return Response.json({ debug: `DB insert failed: ${msg}` } satisfies JsonError, { status: 400 });
    }

    console.log('[leads] Inserted id:', data?.[0]?.id ?? '(no id)');
    return Response.json({ success: true, data });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[leads] Unhandled error:', msg);
    return Response.json({ debug: msg } satisfies JsonError, { status: 500 });
  }
}


