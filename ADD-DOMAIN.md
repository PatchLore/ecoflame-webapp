# Quick Guide: Add Custom Domain to Your Quote Calculator

Your app is already live at: **plumber-quote-calculator.vercel.app**

All environment variables are configured. You just need to attach a domain!

---

## Option 1: Use One of Your Existing Domains

You currently own:
- `calccrypto.com` (currently used for calc-crypto project)
- `saaspertise.com` 
- `soundswoop.com`
- `patchlore.com`

### To attach one of these:

**Via Vercel Dashboard (Easiest):**

1. Go to https://vercel.com/dnbmashup1-4396s-projects/plumber-quote-calculator
2. Click **Settings** → **Domains**
3. Type the domain you want (e.g., `saaspertise.com`)
4. Click **Add**
5. Done! ✅ (DNS is already configured since you own them)

**Via CLI:**

```bash
cd /Users/allendunn/Documents/Trade/quote-calculator
vercel alias plumber-quote-calculator.vercel.app yourdomain.com
```

For example:
```bash
vercel alias plumber-quote-calculator.vercel.app saaspertise.com
```

---

## Option 2: Buy a New Domain

If you want a plumbing-specific domain like `instantplumbingquotes.com`:

### Step 1: Buy the domain
- Buy from Namecheap, GoDaddy, or any registrar
- Or buy directly through Vercel (easiest)

### Step 2: Add to Vercel

**Via Dashboard:**
1. Go to https://vercel.com/dnbmashup1-4396s-projects/plumber-quote-calculator/settings/domains
2. Click **Add Domain**
3. Enter your new domain
4. Follow DNS setup instructions

**Via CLI:**
```bash
cd /Users/allendunn/Documents/Trade/quote-calculator
vercel alias plumber-quote-calculator.vercel.app yournewdomain.com
```

### Step 3: Configure DNS (if bought externally)

Add these records at your domain registrar:

**For root domain (example.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`  
- Value: `cname.vercel-dns.com`

---

## Quick Commands

**See current deployment:**
```bash
vercel ls
```

**Add domain alias:**
```bash
vercel alias plumber-quote-calculator.vercel.app yourdomain.com
```

**Check domain status:**
```bash
vercel domains ls
```

**Remove domain:**
```bash
vercel domains rm yourdomain.com
```

---

## What Happens After Adding Domain?

1. **Instant HTTPS** - Vercel auto-provisions SSL certificate
2. **Both work** - `yourdomain.com` AND `plumber-quote-calculator.vercel.app` both work
3. **Production URL** - Your custom domain becomes the primary URL

---

## Update Supabase After Domain is Added

Once your custom domain is live, update Supabase:

1. Go to https://app.supabase.com
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. Set **Site URL** to: `https://yourdomain.com`
5. Add **Redirect URLs**:
   - `https://yourdomain.com/**`
   - `https://yourdomain.com/admin/dashboard`

---

## Example: Using saaspertise.com

If you wanted to use saaspertise.com right now:

```bash
cd /Users/allendunn/Documents/Trade/quote-calculator

# Attach the domain
vercel alias plumber-quote-calculator.vercel.app saaspertise.com
vercel alias plumber-quote-calculator.vercel.app www.saaspertise.com

# That's it! Your app is now live at saaspertise.com
```

Then update Supabase Site URL to `https://saaspertise.com`

---

## Time Required

- Using existing domain: **2 minutes**
- Buying new domain + setup: **10-15 minutes** (+ DNS propagation time)

---

## Current Status

✅ App deployed and working  
✅ Environment variables configured  
✅ Database connected  
⏳ **Next step: Just add your domain!**




