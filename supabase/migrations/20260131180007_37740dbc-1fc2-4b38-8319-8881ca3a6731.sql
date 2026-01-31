-- Create storage bucket for contracts (private - requires payment verification)
INSERT INTO storage.buckets (id, name, public)
VALUES ('contracts', 'contracts', false)
ON CONFLICT (id) DO NOTHING;

-- Create table to track verified payments
CREATE TABLE IF NOT EXISTS public.verified_payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  payment_id TEXT NOT NULL UNIQUE,
  contract_type TEXT NOT NULL,
  email TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'approved',
  mercadopago_status TEXT,
  download_count INTEGER NOT NULL DEFAULT 0,
  max_downloads INTEGER NOT NULL DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '30 days')
);

-- Enable RLS on verified_payments
ALTER TABLE public.verified_payments ENABLE ROW LEVEL SECURITY;

-- Policy: Only allow read access through edge functions (service role)
-- No direct client access - verification must go through edge function
CREATE POLICY "No direct client access to payments"
ON public.verified_payments
FOR ALL
USING (false);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_verified_payments_payment_id ON public.verified_payments(payment_id);
CREATE INDEX IF NOT EXISTS idx_verified_payments_email ON public.verified_payments(email);