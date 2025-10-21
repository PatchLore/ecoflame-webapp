# 🚀 Pre-Deployment Checklist

## Current Status: ⚠️ NOT READY - Missing Configuration

---

## ✅ What's Already Complete

- [x] Application code is fully functional
- [x] Next.js configuration is production-ready
- [x] Database schema is defined
- [x] Admin dashboard is built
- [x] Quote calculator works
- [x] Email system is coded
- [x] TypeScript types are complete
- [x] Responsive design implemented

---

## ⚠️ What You Need to Configure

### 1. Environment Variables (REQUIRED)

You need to set up these 8 environment variables:

- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `SMTP_HOST`
- [ ] `SMTP_PORT`
- [ ] `SMTP_USER`
- [ ] `SMTP_PASS`
- [ ] `TRADESMAN_EMAIL`

**See `env-template.txt` for the template**

### 2. Supabase Setup (REQUIRED)

- [ ] Create Supabase project
- [ ] Run `supabase-setup.sql` in SQL Editor
- [ ] Run `add-status-column.sql` in SQL Editor
- [ ] Copy API credentials to environment variables
- [ ] Enable Email authentication provider

### 3. Email Service (REQUIRED)

Choose ONE:
- [ ] Gmail with App Password (easier for testing)
- [ ] SendGrid (better for production)
- [ ] Another SMTP service

### 4. Vercel Deployment (REQUIRED)

- [ ] Create Vercel account (free)
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Run initial deployment: `vercel`
- [ ] Add environment variables in Vercel dashboard
- [ ] Redeploy: `vercel --prod`

### 5. Custom Domain Setup

- [ ] Add domain in Vercel dashboard
- [ ] Configure DNS records with your registrar
- [ ] Wait for DNS propagation (5 min - 48 hours)
- [ ] Verify SSL certificate is active
- [ ] Update Supabase redirect URLs with your domain

### 6. Post-Deployment Testing

- [ ] Visit your custom domain
- [ ] Test quote calculator
- [ ] Submit a test lead
- [ ] Check email notification arrives
- [ ] Create admin account
- [ ] Login to admin dashboard
- [ ] Verify lead appears in dashboard
- [ ] Test status updates
- [ ] Test CSV export

---

## 📋 Quick Start Commands

```bash
# 1. Create your local environment file
cp env-template.txt .env.local
# Then edit .env.local with your actual values

# 2. Test locally
npm run dev
# Visit http://localhost:3000

# 3. Deploy to Vercel
vercel login
vercel
# Follow prompts

# 4. Add environment variables
# Go to vercel.com/dashboard → Your Project → Settings → Environment Variables
# Add all 8 variables from env-template.txt

# 5. Deploy to production
vercel --prod
```

---

## 🎯 Next Steps

1. **Read the full deployment guide**: Open `DEPLOYMENT.md`
2. **Set up Supabase**: Create project and run SQL scripts
3. **Configure email**: Choose Gmail or SendGrid
4. **Create .env.local**: Copy from `env-template.txt` and fill in values
5. **Deploy to Vercel**: Follow commands above
6. **Add custom domain**: Configure in Vercel dashboard

---

## 💰 Estimated Time

- Supabase setup: 10 minutes
- Email configuration: 5-15 minutes
- Vercel deployment: 5-10 minutes
- DNS/Domain setup: 5 minutes + propagation time

**Total active time: ~30-45 minutes**
(DNS propagation happens in background)

---

## ❓ Need Help?

Refer to:
- `DEPLOYMENT.md` - Complete step-by-step guide
- `env-template.txt` - Environment variable template
- Vercel docs: https://vercel.com/docs
- Supabase docs: https://supabase.com/docs






