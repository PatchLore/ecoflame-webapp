-- Add status column to leads table
-- Run this SQL in your Supabase SQL editor

-- Add the status column with a default value
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'New';

-- Update existing records to have 'New' status if they don't have one
UPDATE leads 
SET status = 'New' 
WHERE status IS NULL;

-- Add a check constraint to ensure valid status values
ALTER TABLE leads 
ADD CONSTRAINT check_status 
CHECK (status IN ('New', 'Contacted', 'Completed'));

-- Create an index on the status column for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);





