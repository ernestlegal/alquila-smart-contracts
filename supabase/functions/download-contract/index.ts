import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DownloadRequest {
  payment_id: string;
  email: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const { payment_id, email }: DownloadRequest = await req.json();

    console.log("Download request:", { payment_id, email });

    // Validate inputs
    if (!payment_id || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get verified payment
    const { data: payment, error: paymentError } = await supabase
      .from("verified_payments")
      .select("*")
      .eq("payment_id", payment_id)
      .eq("email", email)
      .maybeSingle();

    if (paymentError || !payment) {
      console.error("Payment not found:", paymentError);
      return new Response(
        JSON.stringify({ error: "Payment not verified or email mismatch" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if payment is expired
    if (new Date(payment.expires_at) < new Date()) {
      return new Response(
        JSON.stringify({ error: "Download link has expired" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check download limit
    if (payment.download_count >= payment.max_downloads) {
      return new Response(
        JSON.stringify({ error: "Download limit reached" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Increment download count
    await supabase
      .from("verified_payments")
      .update({ download_count: payment.download_count + 1 })
      .eq("id", payment.id);

    // External contract URL (hosted on client's server with secret filename)
    const contractUrl = "http://alquilasmart.com/arcq/contrato-alquiler-inteligente_we3458845erwr23dktrt.docx";

    console.log("Download URL generated successfully");

    return new Response(
      JSON.stringify({
        download_url: contractUrl,
        downloads_remaining: payment.max_downloads - payment.download_count - 1,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing download:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
