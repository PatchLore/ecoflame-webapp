# Deployment Guide - QuoteFlow

This guide will help you deploy your QuoteFlow app to a custom domain using Vercel.

## Prerequisites Checklist

Before deploying, ensure you have:

- [ ] A Vercel account (sign up at https://vercel.com)
- [ ] A Supabase account with project created (https://supabase.com)
- [ ] Your custom domain registered and accessible
- [ ] SMTP email service configured (Gmail, SendGrid, etc.)

---

## Step 1: Set Up Supabase Database

1. **Create a Supabase Project**
   - Go to https://app.supabase.com
   - Create a new project
   - Wait for it to provision (~2 minutes)

2. **Run Database Schema**
   - Go to SQL Editor in Supabase dashboard
   - Copy the contents of `supabase-setup.sql`
   - Paste and run it
   - Then run `add-status-column.sql` to add the status column

3. **Get Your Supabase Credentials**
   - Go to Settings → API
   - Copy these values:
     - `Project URL` → This is your `NEXT_PUBLIC_SUPABASE_URL`
     - `anon public` key → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `service_role` key → This is your `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

4. **Configure Supabase Auth**
   - Go to Authentication → Providers
   - Ensure Email provider is enabled
   - Configure email templates (optional)
   - Set site URL to your custom domain (you can add this after deployment)

---

## Step 2: Configure Email Service

### Option A: Using Gmail

1. Enable 2-Factor Authentication on your Google Account
2. Generate an App Password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate a new app password
   - Use this password (not your regular Gmail password)

Your settings:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
TRADESMAN_EMAIL=where-you-want-leads@gmail.com
```

### Option B: Using SendGrid (Recommended for Production)

1. Create a SendGrid account (free tier available)
2. Get your API key
3. Use these settings:
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
TRADESMAN_EMAIL=where-you-want-leads@yourdomain.com
```

---

## Step 3: Deploy to Vercel

### 3.1: Initial Deployment

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   cd /Users/allendunn/Documents/Trade/quote-calculator
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (first time)
   - Project name? `quote-calculator` (or your preferred name)
   - Directory? `.` (current directory)
   - Override settings? **No**

5. **Your app will deploy to a temporary URL** like:
   `https://quote-calculator-xxxxx.vercel.app`

### 3.2: Add Environment Variables

You can add environment variables in two ways:

**Method 1: Vercel Dashboard (Recommended)**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable from `.env.example`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `TRADESMAN_EMAIL`
5. Make sure to select all environments (Production, Preview, Development)

**Method 2: Using CLI**
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL production
# Enter your value when prompted
# Repeat for each environment variable
```

### 3.3: Redeploy with Environment Variables
```bash
vercel --prod
```

---

## Step 4: Add Your Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click Settings → Domains
   - Click "Add Domain"
   - Enter your custom domain (e.g., `quotecalculator.com`)

2. **Configure DNS with your domain registrar:**
   
   Vercel will show you which DNS records to add. Typically:
   
   **For root domain (quotecalculator.com):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   
   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. **Wait for DNS propagation** (can take 5 minutes to 48 hours)

4. **SSL Certificate** will be automatically provisioned by Vercel (free)

---

## Step 5: Update Supabase URLs

Once your custom domain is live:

1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Add your custom domain to:
   - Site URL: `https://yourdomain.com`
   - Redirect URLs: 
     - `https://yourdomain.com/**`
     - `https://yourdomain.com/admin/dashboard`

---

## Step 6: Create Admin Account

1. Visit `https://yourdomain.com/admin/sign-in`
2. Click "Create Admin Account"
3. Enter email and password
4. Check your email for verification link (if Supabase email is configured)
5. Sign in to access the dashboard

---

## Step 7: Test Everything

Test these flows:

- [ ] Homepage loads correctly
- [ ] Calculator generates quotes
- [ ] Lead submission works
- [ ] Email notifications arrive
- [ ] Admin login works
- [ ] Dashboard displays leads
- [ ] Status updates work
- [ ] CSV export works

---

## Environment Variables Summary

Here's what each variable does:

| Variable | Purpose | Where to Get It |
|----------|---------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase API endpoint | Supabase Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public Supabase key | Supabase Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side admin key (SECRET!) | Supabase Settings → API |
| `SMTP_HOST` | Email server address | Your email provider |
| `SMTP_PORT` | Email server port | Usually 587 or 465 |
| `SMTP_USER` | Email username | Your email provider |
| `SMTP_PASS` | Email password/API key | Your email provider |
| `TRADESMAN_EMAIL` | Where to send lead notifications | Your business email |

---

## Troubleshooting

### Leads not saving to database
- Check Supabase credentials are correct
- Verify RLS policies are set up (run the SQL schema)
- Check Vercel deployment logs

### Email not sending
- Verify SMTP credentials
- Check spam folder
- Try SendGrid instead of Gmail
- Check Vercel function logs

### Admin login not working
- Verify Supabase Auth is enabled
- Check that admin account was created
- Clear browser cookies and try again

### Domain not working
- Wait for DNS propagation (can take up to 48 hours)
- Verify DNS records are correct
- Check domain registrar settings

---

## Production Optimization (Optional)

For better performance in production:

1. **Enable Vercel Analytics**
   - Go to your project → Analytics
   - Enable Web Analytics

2. **Set up custom error pages** (404, 500, etc.)

3. **Configure Supabase connection pooling** if you get many concurrent users

4. **Set up monitoring** (Sentry, LogRocket, etc.)

5. **Add Google Analytics** to track user behavior

---

## Cost Breakdown

- **Vercel**: Free for hobby projects (perfect for starting)
- **Supabase**: Free tier (500MB database, 50MB file storage)
- **SendGrid**: Free tier (100 emails/day)
- **Domain**: ~$10-15/year (varies by registrar)

**Total monthly cost to start: ~$0-1** (just the domain)

---

## Support

If you run into issues:
- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs

---

## Quick Commands Reference

```bash
# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List deployments
vercel ls

# Remove a deployment
vercel rm [deployment-url]

# Open project in browser
vercel --open
```




