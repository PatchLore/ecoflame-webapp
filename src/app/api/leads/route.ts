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
  return req.every(k => {
    const val = o[k];
    // Allow string or null/undefined, but convert to string for validation
    if (val === null || val === undefined) return false; // Required fields must be present
    if (typeof val !== 'string') return false;
    return val.trim().length > 0; // Must have content after trimming
  });
}

// Map UI urgency labels to DB enum values
function toDbUrgency(u: string | null | undefined): 'emergency' | 'urgent' | 'standard' {
  if (!u || typeof u !== 'string') return 'standard'; // Safety fallback
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

    // Normalize known fields - ensure all values are strings, never null
    // Normalize UI urgency → DB values
    const dbUrgency = toDbUrgency(body.urgency);

    // Map frontend → DB columns we know exist from historical rows
    // Use nullish coalescing and trim to ensure clean string values
    const insertCandidate: Record<string, string> = {
      name: (body.name ?? '').trim(),
      email: (body.email ?? '').trim(),
      phone: (body.phone ?? '').trim(),
      job_type: (body.service ?? '').trim(),
      postcode: (body.postcode ?? '').trim(),
      urgency: dbUrgency,
      job_details: (body.message ?? '').trim(),
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


