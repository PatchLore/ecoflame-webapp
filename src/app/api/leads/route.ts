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
  if (!x || typeof x !== 'object') {
    return false;
  }
  const o = x as Record<string, unknown>;
  const req = ['name','email','phone','postcode','service','urgency'] as const;
  
  return req.every(k => {
    const val = o[k];
    if (val === null || val === undefined) {
      return false;
    }
    if (typeof val !== 'string') {
      return false;
    }
    if (val.trim().length === 0) {
      return false;
    }
    return true;
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

    // Normalize all fields BEFORE validation - convert null/undefined to empty strings
    const normalized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(bodyUnknown)) {
      if (value === null || value === undefined) {
        normalized[key] = '';
      } else if (key === 'quoteAmount' && typeof value !== 'number') {
        normalized[key] = Number(value) || 0;
      } else if (typeof value === 'string') {
        normalized[key] = value.trim();
      } else {
        normalized[key] = value;
      }
    }

    if (!isLeadInput(normalized)) {
      // Get detailed validation error
      const o = normalized as Record<string, unknown>;
      const req = ['name','email','phone','postcode','service','urgency'] as const;
      const missing: string[] = [];
      
      for (const k of req) {
        const val = o[k];
        if (val === null || val === undefined) {
          missing.push(`${k} is null or undefined`);
        } else if (typeof val !== 'string') {
          missing.push(`${k} is ${typeof val} (expected string)`);
        } else if (val.trim().length === 0) {
          missing.push(`${k} is empty`);
        }
      }
      
      const err: JsonError = { 
        debug: `Invalid input: ${missing.join(', ')}`, 
        body: normalized 
      };
      return Response.json(err, { status: 400 });
    }

    const body: LeadInput = normalized as LeadInput;

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

    try {
      const { data, error } = await supabase.from('leads').insert([insertCandidate]).select();

      if (error) {
        const msg = (error as PostgrestError).message ?? 'Unknown Supabase error';
        return Response.json({ 
          success: false, 
          debug: msg,
          payload: body,
          insertCandidate: insertCandidate
        }, { status: 400 });
      }

      return Response.json({ success: true, data });
    } catch (dbError: unknown) {
      const dbErrorMsg = dbError instanceof Error ? dbError.message : String(dbError);
      return Response.json({ 
        success: false, 
        debug: `Database insert exception: ${dbErrorMsg}`,
        payload: body,
        insertCandidate: insertCandidate
      }, { status: 500 });
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ 
      success: false,
      debug: msg,
      error: 'Unhandled exception in POST handler'
    }, { status: 500 });
  }
}


