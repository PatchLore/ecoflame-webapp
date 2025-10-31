/*
  Usage:
    SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx ts-node scripts/list-users.ts

  Notes:
  - Reads SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY from env
  - Lists all auth users, prints email, created date, and app_metadata.role
  - Marks users with no role
  - Prints summary counts at the end
*/

import { createClient } from '@supabase/supabase-js'

async function main(): Promise<void> {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Missing env vars: SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  let page = 1
  const perPage = 100
  let totalAdmins = 0
  let totalNoRole = 0
  let totalUsers = 0

  console.log('Listing Supabase Auth users...')
  console.log('')

  // Paginate until no users returned
  // listUsers: https://supabase.com/docs/reference/javascript/auth-admin-listusers
  while (true) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage })
    if (error) {
      console.error('Error listing users:', error.message)
      process.exit(1)
    }

    const users = data?.users ?? []
    if (users.length === 0) break

    for (const u of users) {
      totalUsers += 1
      const role = (u.app_metadata as Record<string, unknown> | undefined)?.role as string | undefined
      const created = u.created_at ? new Date(u.created_at).toLocaleString() : 'n/a'
      const marker = role ? '' : ' ⚠️ no role – safe to remove if test account'
      if (role === 'admin') totalAdmins += 1
      if (!role) totalNoRole += 1

      console.log(`- ${u.email ?? '(no email)'} | created: ${created} | role: ${role ?? 'none'}${marker}`)
    }

    page += 1
  }

  console.log('')
  console.log(`Summary: ${totalAdmins} admins, ${totalNoRole} no-role users, ${totalUsers} total users`)
}

main().catch((err) => {
  console.error('Unexpected error:', err)
  process.exit(1)
})



