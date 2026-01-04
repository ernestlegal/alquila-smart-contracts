import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Alquila Smart <info@alquilasmart.com>",
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
  console.log("Received request to send-contact-email function");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission from:", email);

    // Send email to the business owner
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #14b8a6;">Nuevo mensaje de contacto</h2>
        <hr style="border: 1px solid #e5e7eb;" />
        
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
        <p><strong>Asunto:</strong> ${subject}</p>
        
        <h3 style="color: #14b8a6;">Mensaje:</h3>
        <p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, "<br>")}</p>
        
        <hr style="border: 1px solid #e5e7eb;" />
        <p style="color: #6b7280; font-size: 12px;">
          Este mensaje fue enviado desde el formulario de contacto de AlquilaSmart.com
        </p>
      </div>
    `;

    const emailResponse = await sendEmail(
      ["info@alquilasmart.com"],
      `Nuevo mensaje de contacto: ${subject}`,
      ownerEmailHtml
    );

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #14b8a6;">¡Gracias por contactarnos, ${name}!</h2>
        <p>Hemos recibido tu mensaje y te responderemos a la brevedad posible.</p>
        
        <h3 style="color: #14b8a6;">Resumen de tu mensaje:</h3>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, "<br>")}</p>
        
        <hr style="border: 1px solid #e5e7eb;" />
        <p style="color: #6b7280; font-size: 14px;">
          <strong>Alquila Smart</strong><br>
          Bajada Balta 169, Of. 1204<br>
          Miraflores, Lima - Perú<br>
          Tel: +51 969 104 933
        </p>
      </div>
    `;

    await sendEmail(
      [email],
      "Hemos recibido tu mensaje - Alquila Smart",
      userEmailHtml
    );

    console.log("Confirmation email sent to user");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
