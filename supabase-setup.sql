-- Quote Calculator Database Schema
-- Run this SQL in your Supabase SQL editor

-- Create job_types table
CREATE TABLE IF NOT EXISTS job_types (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  base_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default job types
INSERT INTO job_types (name, base_price) VALUES
  ('Plumbing', 150.00),
  ('Electrical', 200.00),
  ('Heating', 300.00),
  ('Drainage', 180.00)
ON CONFLICT (name) DO NOTHING;

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  job_type VARCHAR(100) NOT NULL,
  postcode VARCHAR(10) NOT NULL,
  urgency VARCHAR(20) NOT NULL CHECK (urgency IN ('standard', 'same_day', 'emergency')),
  job_details TEXT,
  estimated_quote DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_job_type ON leads(job_type);
CREATE INDEX IF NOT EXISTS idx_leads_urgency ON leads(urgency);

-- Enable Row Level Security (RLS)
ALTER TABLE job_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to job_types (read-only)
CREATE POLICY "Allow public read access to job_types" ON job_types
  FOR SELECT USING (true);

-- Create policies for leads (allow inserts, but restrict reads to admin)
CREATE POLICY "Allow public insert access to leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Note: For production, you should create proper admin authentication
-- and restrict lead access to authenticated admin users only

-- Optional: Create a view for admin dashboard
CREATE OR REPLACE VIEW admin_leads_summary AS
SELECT 
  COUNT(*) as total_leads,
  SUM(estimated_quote) as total_value,
  COUNT(CASE WHEN urgency = 'emergency' THEN 1 END) as emergency_count,
  COUNT(CASE WHEN urgency = 'same_day' THEN 1 END) as same_day_count,
  COUNT(CASE WHEN urgency = 'standard' THEN 1 END) as standard_count,
  COUNT(DISTINCT postcode) as unique_postcodes,
  AVG(estimated_quote) as average_quote
FROM leads;




