import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ReclamoEmailRequest {
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  tipoReclamo: string;
  detalleProducto: string;
  descripcion: string;
  pedido: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Alquila Smart <reclamos@alquilasmart.com>",
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
  console.log("send-reclamo-email function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ReclamoEmailRequest = await req.json();
    const fechaReclamo = new Date().toLocaleString("es-PE", { timeZone: "America/Lima" });
    const numeroReclamo = `RCL-${Date.now()}`;

    console.log("Processing reclamo from:", data.email);

    // Email to the business
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0;">📋 Nuevo Reclamo Registrado</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Libro de Reclamaciones - Alquila Smart</p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>N° de Reclamo:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${numeroReclamo}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Fecha:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${fechaReclamo}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Tipo:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${data.tipoReclamo === 'reclamo' ? '🔴 RECLAMO' : '🟡 QUEJA'}</td>
            </tr>
          </table>
        </div>

        <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2 style="color: #14b8a6; margin-top: 0;">Datos del Consumidor</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 40%;"><strong>Documento:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${data.tipoDocumento}: ${data.numeroDocumento}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Nombre:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${data.nombres} ${data.apellidos}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Teléfono:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${data.telefono}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Dirección:</strong></td>
              <td style="padding: 8px 0; color: #111827;">${data.direccion}</td>
            </tr>
          </table>
        </div>

        <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2 style="color: #14b8a6; margin-top: 0;">Detalle del Reclamo</h2>
          <p style="color: #6b7280; margin-bottom: 5px;"><strong>Producto/Servicio:</strong></p>
          <p style="color: #111827; background: #f3f4f6; padding: 10px; border-radius: 5px; margin-top: 0;">${data.detalleProducto}</p>
          
          <p style="color: #6b7280; margin-bottom: 5px;"><strong>Descripción:</strong></p>
          <p style="color: #111827; background: #f3f4f6; padding: 10px; border-radius: 5px; margin-top: 0; white-space: pre-wrap;">${data.descripcion}</p>
          
          <p style="color: #6b7280; margin-bottom: 5px;"><strong>Pedido del Consumidor:</strong></p>
          <p style="color: #111827; background: #f3f4f6; padding: 10px; border-radius: 5px; margin-top: 0; white-space: pre-wrap;">${data.pedido}</p>
        </div>

        <div style="background: #fef3c7; padding: 15px; border: 1px solid #f59e0b; border-radius: 0 0 10px 10px;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            ⚠️ <strong>Recordatorio:</strong> Según la Ley N° 29571, debe responder este reclamo en un plazo máximo de 30 días calendario.
          </p>
        </div>
      </div>
    `;

    await sendEmail(
      ["reclamos@alquilasmart.com"],
      `[${numeroReclamo}] Nuevo ${data.tipoReclamo === 'reclamo' ? 'Reclamo' : 'Queja'} - ${data.nombres} ${data.apellidos}`,
      businessEmailHtml
    );

    console.log("Business email sent");

    // Confirmation email to the user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0;">✅ Reclamo Registrado</h1>
        </div>
        
        <div style="background: white; padding: 20px; border: 1px solid #e5e7eb;">
          <p style="color: #374151;">Estimado/a <strong>${data.nombres} ${data.apellidos}</strong>,</p>
          
          <p style="color: #374151;">
            Hemos recibido tu ${data.tipoReclamo === 'reclamo' ? 'reclamo' : 'queja'} y ha sido registrado 
            exitosamente en nuestro Libro de Reclamaciones.
          </p>

          <div style="background: #f0fdfa; border: 1px solid #14b8a6; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #0d9488;"><strong>Número de Reclamo:</strong> ${numeroReclamo}</p>
            <p style="margin: 5px 0 0 0; color: #0d9488;"><strong>Fecha de Registro:</strong> ${fechaReclamo}</p>
          </div>

          <h3 style="color: #14b8a6;">Resumen de tu ${data.tipoReclamo === 'reclamo' ? 'reclamo' : 'queja'}:</h3>
          <p style="color: #6b7280;"><strong>Producto/Servicio:</strong> ${data.detalleProducto}</p>
          <p style="color: #6b7280; background: #f3f4f6; padding: 10px; border-radius: 5px;">${data.descripcion}</p>

          <div style="background: #fef3c7; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              📅 <strong>Plazo de Respuesta:</strong> De acuerdo con la Ley N° 29571, daremos respuesta 
              a tu ${data.tipoReclamo === 'reclamo' ? 'reclamo' : 'queja'} en un plazo máximo de 30 días calendario.
            </p>
          </div>

          <p style="color: #374151;">
            Guarda este correo como constancia de tu reclamo. Si tienes alguna consulta adicional, 
            puedes contactarnos a través de nuestros canales de atención.
          </p>
        </div>

        <div style="background: #f9fafb; padding: 15px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            <strong>Alquila Smart</strong><br>
            Bajada Balta 169, Of. 1204, Miraflores, Lima - Perú<br>
            Tel: +51 987 507 471 | reclamos@alquilasmart.com
          </p>
        </div>
      </div>
    `;

    await sendEmail(
      [data.email],
      `Confirmación de Reclamo ${numeroReclamo} - Alquila Smart`,
      userEmailHtml
    );

    console.log("User confirmation email sent");

    return new Response(JSON.stringify({ success: true, numeroReclamo }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-reclamo-email function:", error);
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
