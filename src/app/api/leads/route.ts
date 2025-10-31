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
    console.log('[leads] Validation failed: not an object', x);
    return false;
  }
  const o = x as Record<string, unknown>;
  const req = ['name','email','phone','postcode','service','urgency'] as const;
  
  const issues: string[] = [];
  for (const k of req) {
    const val = o[k];
    if (val === null || val === undefined) {
      issues.push(`${k} is null or undefined`);
      continue;
    }
    if (typeof val !== 'string') {
      issues.push(`${k} is not a string (type: ${typeof val}, value: ${val})`);
      continue;
    }
    if (val.trim().length === 0) {
      issues.push(`${k} is empty after trimming`);
      continue;
    }
  }
  
  if (issues.length > 0) {
    console.log('[leads] Validation issues:', issues);
    return false;
  }
  
  return true;
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
  console.log('[leads] Incoming request received');
  
  try {
    const createServerClient = getServerSupabase;
    const supabase = createServerClient();

    const bodyUnknown = await req.json();
    console.log('[leads] Incoming payload:', bodyUnknown);
    console.log('[leads] Payload types:', Object.entries(bodyUnknown).map(([k, v]) => [k, typeof v, v === null ? 'NULL' : '']));

    // Normalize all fields BEFORE validation - convert null/undefined to empty strings
    const normalized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(bodyUnknown)) {
      if (value === null || value === undefined) {
        normalized[key] = '';
        console.log(`[leads] Normalized ${key}: null/undefined -> empty string`);
      } else if (key === 'quoteAmount' && typeof value !== 'number') {
        normalized[key] = Number(value) || 0;
        console.log(`[leads] Normalized ${key}: ${typeof value} -> ${normalized[key]}`);
      } else if (typeof value === 'string') {
        normalized[key] = value.trim();
      } else {
        normalized[key] = value;
      }
    }
    
    console.log('[leads] Normalized payload:', normalized);

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
      console.error('[leads] Validation failed:', err);
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

    console.log('[leads] Attempting Supabase insert with:', insertCandidate);

    try {
      const { data, error } = await supabase.from('leads').insert([insertCandidate]).select();

      if (error) {
        const msg = (error as PostgrestError).message ?? 'Unknown Supabase error';
        console.error('[leads] Database insert error:', error);
        console.error('[leads] Error message:', msg);
        console.error('[leads] Error details:', JSON.stringify(error, null, 2));
        return Response.json({ 
          success: false, 
          debug: msg,
          payload: body,
          insertCandidate: insertCandidate
        }, { status: 400 });
      }

      console.log('[leads] Inserted id:', data?.[0]?.id ?? '(no id)');
      return Response.json({ success: true, data });
    } catch (dbError: unknown) {
      const dbErrorMsg = dbError instanceof Error ? dbError.message : String(dbError);
      console.error('[leads] Database insert exception:', dbError);
      console.error('[leads] Exception message:', dbErrorMsg);
      return Response.json({ 
        success: false, 
        debug: `Database insert exception: ${dbErrorMsg}`,
        payload: body,
        insertCandidate: insertCandidate
      }, { status: 500 });
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[leads] Unhandled error:', err);
    console.error('[leads] Error message:', msg);
    console.error('[leads] Error stack:', err instanceof Error ? err.stack : 'No stack trace');
    return Response.json({ 
      success: false,
      debug: msg,
      error: 'Unhandled exception in POST handler'
    }, { status: 500 });
  }
}


