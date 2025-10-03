# Quote Calculator - Tradesmen Web App

A modern Next.js web application for tradesmen to provide instant quotes to customers. Built with Next.js 14, Tailwind CSS, and Supabase.

## Features

- **Landing Page**: Professional hero section with service overview
- **Quote Calculator**: Interactive form with job type, postcode, urgency, and details
- **Pricing Logic**: Dynamic pricing with base prices, urgency surcharges, and travel fees
- **Lead Capture**: Customer information collection with email notifications
- **Admin Dashboard**: View and manage all leads with statistics
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Email**: Nodemailer
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Quick Start

### 1. Clone and Install

```bash
cd quote-calculator
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Run the SQL schema in your Supabase SQL editor (see `supabase-setup.sql`)

### 3. Configure Environment Variables

Create `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
TRADESMAN_EMAIL=your_tradesman_email@gmail.com
```

### 4. Set up Email (Optional)

For email notifications, configure SMTP settings:

1. **Gmail**: Use App Passwords (not your regular password)
2. **Other providers**: Update SMTP settings accordingly

### 5. Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Database Schema

The application uses two main tables:

### `job_types`
- `id`: UUID primary key
- `name`: Job type name (Plumbing, Electrical, etc.)
- `base_price`: Base price for the job type
- `created_at`: Timestamp

### `leads`
- `id`: UUID primary key
- `name`: Customer name
- `email`: Customer email
- `phone`: Customer phone
- `job_type`: Selected job type
- `postcode`: Customer postcode
- `urgency`: Standard, same-day, or emergency
- `job_details`: Optional job description
- `estimated_quote`: Calculated quote amount
- `created_at`: Lead submission timestamp

## Pricing Logic

The quote calculation includes:

1. **Base Price**: Set per job type in the database
2. **Urgency Surcharge**:
   - Standard: +0%
   - Same Day: +20%
   - Emergency: +40%
3. **Travel Fee**: £25 for distances > 10 miles (mock calculation)

## Admin Access

- **URL**: `/admin`
- **Password**: `admin123` (change in production)
- **Features**: View leads, statistics, export data

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── calculator/
│   │   └── page.tsx          # Quote calculator
│   └── admin/
│       └── page.tsx          # Admin dashboard
├── lib/
│   ├── supabase.ts           # Supabase client & types
│   ├── pricing.ts            # Pricing calculation logic
│   └── email.ts              # Email notification service
└── components/               # Reusable components
```

## Customization

### Adding New Job Types

1. Add to Supabase `job_types` table
2. Update the job types array in the calculator form
3. The pricing will automatically adjust

### Modifying Pricing

Edit `src/lib/pricing.ts`:
- `URGENCY_MULTIPLIERS`: Adjust surcharge percentages
- `TRAVEL_FEE_THRESHOLD`: Change distance threshold
- `TRAVEL_FEE_AMOUNT`: Modify travel fee amount

### Styling

The app uses Tailwind CSS with a custom color scheme:
- Primary: Blue (`blue-600`)
- Success: Green (`green-600`)
- Warning: Yellow (`yellow-600`)
- Danger: Red (`red-600`)

## Production Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Security Considerations

1. **Change default admin password** in production
2. **Implement proper authentication** (Supabase Auth)
3. **Add rate limiting** for form submissions
4. **Validate all inputs** on the server side
5. **Use HTTPS** in production

## Optional Enhancements

- **Stripe Integration**: Add payment processing for deposits
- **Google Calendar**: Integrate booking system
- **SMS Notifications**: Add Twilio for SMS alerts
- **Advanced Pricing**: Implement dynamic pricing based on location
- **Customer Portal**: Allow customers to track their quotes
- **Analytics**: Add Google Analytics or similar

## Troubleshooting

### Common Issues

1. **Supabase Connection**: Verify your environment variables
2. **Email Not Sending**: Check SMTP credentials and firewall
3. **Build Errors**: Ensure all dependencies are installed
4. **Database Errors**: Verify the SQL schema was run correctly

### Getting Help

- Check the browser console for errors
- Verify environment variables are set correctly
- Ensure Supabase tables exist and have proper permissions

## License

MIT License - feel free to use this project for your own tradesmen business!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for tradesmen everywhere!