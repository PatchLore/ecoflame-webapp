# Deploy EcoFlame to Render

This guide will help you deploy the EcoFlame Next.js app to Render.

## Prerequisites

- [ ] A Render account (sign up at https://render.com)
- [ ] Your code pushed to GitHub (already done)
- [ ] Environment variables ready (Supabase, SMTP, etc.)

## Step 1: Create a New Web Service on Render

1. **Go to Render Dashboard**
   - Visit https://dashboard.render.com
   - Sign in or create an account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub account if not already connected
   - Select the repository: `ecoflame-webapp` (or your repo name)
   - Select the branch: `main`

## Step 2: Configure Build Settings

Render will auto-detect Next.js, but verify these settings:

**Name:** `ecoflame` (or your preferred name)

**Region:** Choose closest to your users (e.g., `Oregon (US West)`)

**Branch:** `main`

**Root Directory:** Leave empty (or `.`)

**Runtime:** `Node`

**Build Command:** 
```
npm install && npm run build
```

**Start Command:**
```
npm start
```

**Instance Type:** `Starter` (free tier) or `Standard` (paid)

## Step 3: Add Environment Variables

In the Render dashboard, go to **Environment** tab and add:

### Required Variables:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-app-name.onrender.com
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id (optional)
```

### Optional Variables:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics (if used)

**Important:** Update `NEXT_PUBLIC_SITE_URL` after deployment with your actual Render URL.

## Step 4: Deploy

1. **Click "Create Web Service"**
2. **Render will automatically:**
   - Install dependencies
   - Run the build
   - Start the service
3. **Monitor the build logs** to ensure it completes successfully
4. **Wait for deployment** (usually 3-5 minutes)

## Step 5: Update Environment Variables After First Deploy

Once deployed, you'll get a URL like: `https://ecoflame-xxxx.onrender.com`

1. **Update in Render:**
   - Go to Environment tab
   - Update `NEXT_PUBLIC_SITE_URL` to your actual Render URL
   - Save and trigger a new deployment

2. **Update in Supabase:**
   - Go to Supabase Dashboard → Authentication → URL Configuration
   - Add your Render URL to:
     - Site URL: `https://your-app.onrender.com`
     - Redirect URLs: 
       - `https://your-app.onrender.com/**`
       - `https://your-app.onrender.com/admin/dashboard`

## Step 6: Configure Custom Domain (Optional)

1. **In Render Dashboard:**
   - Go to your service → Settings
   - Scroll to "Custom Domains"
   - Click "Add Custom Domain"
   - Enter your domain

2. **Configure DNS:**
   - Render will provide DNS records to add
   - Add CNAME record pointing to Render's provided hostname
   - Wait for DNS propagation

3. **SSL Certificate:**
   - Render automatically provisions SSL certificates (free)

## Step 7: Verify Deployment

Test these endpoints:

- [ ] Homepage: `https://your-app.onrender.com`
- [ ] Services page: `https://your-app.onrender.com/services`
- [ ] Reviews page: `https://your-app.onrender.com/reviews`
- [ ] Contact page: `https://your-app.onrender.com/contact`
- [ ] Get Quote: `https://your-app.onrender.com/get-quote`
- [ ] Admin login: `https://your-app.onrender.com/admin/sign-in`

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Verify all dependencies are in `package.json`
- Ensure Node.js version is compatible (Render uses Node 18+ by default)

### 404 Errors
- Verify routes exist in `src/app/` directory
- Check that pages are properly exported
- Clear Render cache and redeploy

### Environment Variables Not Working
- Ensure variables are added in Render dashboard
- Restart the service after adding variables
- Verify variable names match exactly (case-sensitive)

### Slow Cold Starts
- Render free tier has cold starts (15-30 seconds)
- Consider upgrading to paid tier for better performance
- Or use a service like UptimeRobot to keep service warm

## Render Configuration File

The `render.yaml` file in the repo root provides a blueprint for deployment. You can:

1. **Use Blueprint Deployment:**
   - In Render dashboard, select "New +" → "Blueprint"
   - Connect your repo
   - Render will read `render.yaml` and configure automatically

2. **Manual Deployment:**
   - Follow steps 1-7 above
   - `render.yaml` is optional but recommended

## Cost

- **Free Tier:** 
  - 750 hours/month
  - Services spin down after 15 minutes of inactivity
  - Perfect for development/staging

- **Starter ($7/month):**
  - Always on
  - Better performance
  - Recommended for production

## Quick Commands

```bash
# View deployment logs (via Render dashboard)
# Or use Render CLI:
render logs

# Trigger manual deployment
# Via Render dashboard: Click "Manual Deploy"
```

## Next Steps After Deployment

1. ✅ Test all pages work correctly
2. ✅ Verify admin login works
3. ✅ Test form submissions
4. ✅ Check email notifications
5. ✅ Set up custom domain (if needed)
6. ✅ Configure monitoring/alerts

---

**Deployment URL:** Will be provided after first deployment: `https://ecoflame-xxxx.onrender.com`

**Need Help?** Check Render docs: https://render.com/docs


