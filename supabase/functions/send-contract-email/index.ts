import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Input validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

interface ContractEmailRequest {
  email: string;
  contractType: string;
  contractTitle: string;
  paymentId: string;
}

const contractTypeLabels: Record<string, string> = {
  "casa-departamento": "Casa y Departamento",
  "oficinas-comerciales": "Oficinas y Locales Comerciales",
  "industriales": "Locales Industriales",
};

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Alquila Smart <contratos@alquilasmart.com>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-contract-email function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, contractType, contractTitle, paymentId }: ContractEmailRequest = await req.json();

    // Input validation
    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending contract email to:", email, "Contract type:", contractType);

    // Sanitize inputs
    const safePaymentId = escapeHtml(paymentId);
    const safeContractType = escapeHtml(contractType);
    const safeContractTitle = escapeHtml(contractTitle);

    // NOTE: Download link is no longer included in email - users must use the secure download page
    // This prevents link sharing and ensures payment verification

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">¡Gracias por tu compra!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Tu Contrato Inteligente está listo</p>
          </div>
          
          <div style="padding: 40px 30px;">
            <div style="background-color: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
              <p style="color: #166534; margin: 0; font-size: 14px;">
                <strong>✓ Pago confirmado</strong> - Referencia: ${safePaymentId}
              </p>
            </div>
            
            <h2 style="color: #18181b; font-size: 20px; margin: 0 0 15px 0;">Detalles de tu contrato:</h2>
            
            <div style="background-color: #fafafa; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
              <p style="margin: 0 0 10px 0; color: #71717a; font-size: 14px;">Tipo de contrato:</p>
              <p style="margin: 0; color: #18181b; font-size: 18px; font-weight: 600;">${contractTypeLabels[contractType] || safeContractTitle}</p>
            </div>
            
            <p style="color: #52525b; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
              Tu contrato incluye la <strong>cláusula de desalojo exprés</strong> que te permite recuperar tu propiedad en 15-30 días en caso de incumplimiento.
            </p>
            
            <div style="background-color: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 16px;">📥 Cómo descargar tu contrato:</h3>
              <p style="color: #1e40af; margin: 0; font-size: 14px;">
                Visita la página de descarga en <strong>alquilasmart.com/descargas</strong> y usa el botón de descarga que aparece después de verificar tu pago.
              </p>
            </div>
            
            <div style="border-top: 1px solid #e4e4e7; padding-top: 25px; margin-top: 30px;">
              <h3 style="color: #18181b; font-size: 16px; margin: 0 0 15px 0;">Próximos pasos:</h3>
              <ol style="color: #52525b; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0;">
                <li>Descarga el contrato desde la página de confirmación</li>
                <li>Completa los datos del arrendador y arrendatario</li>
                <li>Lleva el contrato a cualquier notaría para su firma</li>
                <li>¡Listo! Tu propiedad está protegida</li>
              </ol>
            </div>
          </div>
          
          <div style="background-color: #fafafa; padding: 25px 30px; text-align: center; border-top: 1px solid #e4e4e7;">
            <p style="color: #71717a; font-size: 13px; margin: 0 0 10px 0;">
              ¿Necesitas ayuda? Escríbenos a <a href="mailto:contacto@alquilasmart.com" style="color: #2563eb;">contacto@alquilasmart.com</a>
            </p>
            <p style="color: #a1a1aa; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Alquila Smart - Todos los derechos reservados
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await sendEmail(
      [email],
      `Tu Contrato Inteligente - ${contractTypeLabels[contractType] || contractTitle}`,
      emailHtml
    );

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending contract email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
