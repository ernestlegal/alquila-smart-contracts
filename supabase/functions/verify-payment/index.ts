import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Valid contract types for validation
const VALID_CONTRACT_TYPES = ['casa-departamento', 'oficinas-comerciales', 'industriales'];

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize string input
function sanitizeString(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim().slice(0, 500);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get("MERCADOPAGO_ACCESS_TOKEN");
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    if (!accessToken) {
      throw new Error("MercadoPago access token not configured");
    }

    const body = await req.json();
    const payment_id = sanitizeString(body.payment_id);
    const external_reference = sanitizeString(body.external_reference);
    const email = sanitizeString(body.email);

    console.log("Verifying payment:", { payment_id, external_reference, email });

    // Validate inputs
    if (!payment_id || !/^\d+$/.test(payment_id)) {
      return new Response(
        JSON.stringify({ error: "Invalid payment ID format", verified: false }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!external_reference || !external_reference.startsWith('contract_')) {
      return new Response(
        JSON.stringify({ error: "Invalid external reference", verified: false }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format", verified: false }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extract and validate contract type from external reference
    const contractType = external_reference.replace("contract_", "").split("_")[0];
    if (!VALID_CONTRACT_TYPES.includes(contractType)) {
      return new Response(
        JSON.stringify({ error: "Invalid contract type", verified: false }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role key for database operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if payment was already verified
    const { data: existingPayment } = await supabase
      .from("verified_payments")
      .select("*")
      .eq("payment_id", payment_id)
      .maybeSingle();

    if (existingPayment) {
      console.log("Payment already verified:", existingPayment);
      return new Response(
        JSON.stringify({
          verified: true,
          already_verified: true,
          contract_type: existingPayment.contract_type,
          download_count: existingPayment.download_count,
          max_downloads: existingPayment.max_downloads,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify payment with MercadoPago API
    const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!mpResponse.ok) {
      console.error("MercadoPago API error:", mpResponse.status);
      return new Response(
        JSON.stringify({ error: "Payment not found", verified: false }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const paymentData = await mpResponse.json();
    console.log("MercadoPago payment status:", paymentData.status);

    // Check if payment is approved
    if (paymentData.status !== "approved") {
      return new Response(
        JSON.stringify({
          error: "Payment not approved",
          verified: false,
          status: paymentData.status,
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify external reference matches
    if (paymentData.external_reference !== external_reference) {
      console.error("External reference mismatch");
      return new Response(
        JSON.stringify({ error: "Invalid payment reference", verified: false }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store verified payment in database
    const { error: insertError } = await supabase.from("verified_payments").insert({
      payment_id: payment_id,
      contract_type: contractType,
      email: email,
      amount: paymentData.transaction_amount,
      status: "approved",
      mercadopago_status: paymentData.status,
    });

    if (insertError) {
      console.error("Error storing payment:", insertError);
      // Don't fail if already exists (race condition)
      if (!insertError.message.includes("duplicate")) {
        throw insertError;
      }
    }

    console.log("Payment verified and stored successfully");

    return new Response(
      JSON.stringify({
        verified: true,
        contract_type: contractType,
        download_count: 0,
        max_downloads: 5,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error verifying payment:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage, verified: false }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
