# 🔥 EcoFlame Project – Deployment & Handover Checklist (Fresh Start)

## 🧭 Overview
This checklist guides the setup and handover of the EcoFlame web app to the client, starting with a **clean database and new admin user**.  
No previous data or leads are migrated — the client will begin fresh.

---

## 1️⃣ Supabase Setup (Client Project)
- [ ] Create a **new Supabase project** under the client’s account.
- [ ] In the new project:
  - [ ] Run the SQL schema for the `leads` table (matching your working setup).
  - [ ] Add the `status` and `urgency` columns with proper constraints.
  - [ ] Enable Row Level Security (RLS) if required.
- [ ] Add admin user(s):
  - [ ] Go to “Authentication → Users → Invite user”
  - [ ] Email: `admin@clientdomain.co.uk`
  - [ ] Edit `app_metadata.role` → `"admin"`
- [ ] Generate and note:
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `SUPABASE_ANON_KEY`

---

## 2️⃣ Environment Variables (Vercel)
In the new **EcoFlame Vercel project**, add the client’s Supabase credentials:

| Key | Value | Scope |
|-----|--------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Client’s Supabase URL | Public |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client’s Anon Key | Public |
| `SUPABASE_SERVICE_ROLE_KEY` | Client’s Service Role Key | Server Only |

✅ Do **not** prefix the Service Role Key with `NEXT_PUBLIC_`.

---

## 3️⃣ Vercel Configuration
- [ ] Confirm `Production` branch points to `main`.
- [ ] Set **Production Domain** (e.g., `www.ecoflame.co.uk`).
- [ ] Add custom domain in Vercel → DNS setup complete.
- [ ] Check build logs → “Build completed successfully”.

---

## 4️⃣ Admin Access Test
- [ ] Visit `/admin/sign-in`
- [ ] Log in using the new admin credentials created in Supabase
- [ ] Confirm:
  - [ ] Dashboard loads successfully
  - [ ] Status updates work
  - [ ] Unauthorized users are redirected to sign-in

---

## 5️⃣ Lead Submission Test
- [ ] Submit form on `/quoteflow/embed`
- [ ] Verify:
  - [ ] Lead appears in Supabase `leads` table
  - [ ] Lead email notification is received
  - [ ] Entry visible in `/admin/dashboard`

---

## 6️⃣ Clean-up & Finalize
- [ ] Delete any test users (keep only admin)
- [ ] Verify no “debug” or “dev” routes remain (e.g., `/api/debug/*`)
- [ ] Ensure `.env` is **not committed** to Git
- [ ] Backup `.env` and Vercel configuration
- [ ] Confirm all production environment variables are set correctly

---

## 7️⃣ Optional Enhancements
- [ ] CSV export for leads
- [ ] Admin analytics summary
- [ ] Lead search and filtering
- [ ] Branded email templates

---

### ✅ Final Verification
| Area | Status | Notes |
|------|---------|--------|
| Supabase linked | ☐ |  |
| Admin login works | ☐ |  |
| Lead submissions work | ☐ |  |
| Email notifications sent | ☐ |  |
| Custom domain live | ☐ |  |
| Backups created | ☐ |  |

---

*Prepared by: [Your Name]*  
Date: {{ current_date }}

