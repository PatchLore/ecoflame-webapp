import fs from 'node:fs'
import path from 'node:path'
import { createClient } from '@supabase/supabase-js'

function loadDotEnv(rootDir) {
  try {
    const envPath = path.join(rootDir, '.env')
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8')
      for (const line of content.split(/\r?\n/)) {
        if (!line || line.trim().startsWith('#')) continue
        const idx = line.indexOf('=')
        if (idx === -1) continue
        const key = line.slice(0, idx).trim()
        const val = line.slice(idx + 1).trim().replace(/^"|"$/g, '')
        if (!(key in process.env)) process.env[key] = val
      }
    }
  } catch {}
}

async function main() {
  loadDotEnv(process.cwd())
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
      const role = u.app_metadata?.role
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


