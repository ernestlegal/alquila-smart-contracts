import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContractRequest {
  contractType: string;
  title: string;
  price: number;
  email: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get('MERCADOPAGO_ACCESS_TOKEN');
    
    if (!accessToken) {
      throw new Error('MercadoPago access token not configured');
    }

    const { contractType, title, price, email }: ContractRequest = await req.json();

    console.log('Creating MercadoPago preference for:', { contractType, title, price, email });

    // Get the origin for back URLs
    const origin = req.headers.get('origin') || 'https://alquilasmart.com';

    const preferenceData = {
      items: [
        {
          id: contractType,
          title: `Contrato Inteligente - ${title}`,
          description: `Contrato de alquiler para ${title} con cláusula de desalojo notarial`,
          quantity: 1,
          currency_id: 'PEN',
          unit_price: price,
        },
      ],
      payer: {
        email: email,
      },
      payment_methods: {
        excluded_payment_types: [
          { id: 'ticket' },
          { id: 'atm' },
          { id: 'bank_transfer' },
        ],
        installments: 12,
      },
      back_urls: {
        success: `${origin}/descargas?status=success`,
        failure: `${origin}/descargas?status=failure`,
        pending: `${origin}/descargas?status=pending`,
      },
      auto_return: 'approved',
      statement_descriptor: 'ALQUILA SMART',
      external_reference: `contract_${contractType}_${Date.now()}`,
    };

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferenceData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('MercadoPago API error:', errorData);
      throw new Error(`MercadoPago API error: ${response.status}`);
    }

    const preference = await response.json();
    
    console.log('Preference created successfully:', preference.id);

    return new Response(
      JSON.stringify({
        id: preference.id,
        init_point: preference.init_point,
        sandbox_init_point: preference.sandbox_init_point,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error creating preference:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
