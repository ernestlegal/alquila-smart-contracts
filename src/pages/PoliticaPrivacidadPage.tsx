import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PoliticaPrivacidadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: Enero 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducción</h2>
                <p className="text-muted-foreground">
                  Alquila Smart (en adelante, "nosotros", "nuestro" o "la Plataforma") se compromete a 
                  proteger la privacidad de sus usuarios. Esta Política de Privacidad describe cómo 
                  recopilamos, utilizamos, compartimos y protegemos la información personal que usted 
                  nos proporciona cuando utiliza nuestros servicios.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Información que Recopilamos</h2>
                <p className="text-muted-foreground mb-4">Recopilamos los siguientes tipos de información:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Información de identificación personal:</strong> nombre, apellidos, DNI o documento de identidad, dirección, correo electrónico, número de teléfono.</li>
                  <li><strong>Información de la propiedad:</strong> dirección del inmueble, características, documentos de propiedad.</li>
                  <li><strong>Información financiera:</strong> datos de pago, historial de transacciones relacionadas con la garantía.</li>
                  <li><strong>Información de uso:</strong> datos sobre cómo interactúa con nuestra plataforma.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de la Información</h2>
                <p className="text-muted-foreground mb-4">Utilizamos su información para:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Facilitar la celebración de contratos de alquiler inteligente.</li>
                  <li>Gestionar la custodia de garantías de alquiler.</li>
                  <li>Administrar procesos de arbitraje cuando sea necesario.</li>
                  <li>Comunicarnos con usted sobre el estado de sus contratos y servicios.</li>
                  <li>Cumplir con obligaciones legales y regulatorias.</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartición de Información</h2>
                <p className="text-muted-foreground mb-4">
                  Podemos compartir su información con:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>La otra parte del contrato:</strong> propietario o inquilino, según corresponda, para facilitar el contrato de alquiler.</li>
                  <li><strong>Árbitros:</strong> en caso de controversias que requieran arbitraje.</li>
                  <li><strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar la plataforma (procesadores de pago, servicios de hosting).</li>
                  <li><strong>Autoridades:</strong> cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Seguridad de los Datos</h2>
                <p className="text-muted-foreground">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información 
                  personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye 
                  encriptación de datos, controles de acceso y auditorías de seguridad regulares.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Retención de Datos</h2>
                <p className="text-muted-foreground">
                  Conservamos su información personal durante el tiempo necesario para cumplir con los 
                  propósitos descritos en esta política, a menos que la ley exija o permita un período de 
                  retención más largo. Los datos relacionados con contratos se conservan por un mínimo de 
                  10 años después de la terminación del contrato.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Sus Derechos</h2>
                <p className="text-muted-foreground mb-4">Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Acceder a su información personal.</li>
                  <li>Rectificar datos inexactos.</li>
                  <li>Solicitar la eliminación de sus datos (con ciertas excepciones legales).</li>
                  <li>Oponerse al procesamiento de sus datos.</li>
                  <li>Solicitar la portabilidad de sus datos.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies y Tecnologías Similares</h2>
                <p className="text-muted-foreground">
                  Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestra 
                  plataforma, analizar el uso del sitio y personalizar el contenido. Puede configurar 
                  su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Menores de Edad</h2>
                <p className="text-muted-foreground">
                  Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
                  intencionalmente información de menores de edad.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Cambios a esta Política</h2>
                <p className="text-muted-foreground">
                  Podemos actualizar esta política periódicamente. Le notificaremos sobre cambios 
                  significativos a través de nuestra plataforma o por correo electrónico.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contacto</h2>
                <p className="text-muted-foreground">
                  Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos su 
                  información personal, puede contactarnos en:
                </p>
                <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                  <p className="text-foreground font-medium">Alquila Smart</p>
                  <p className="text-muted-foreground">Bajada Balta 169, Of. 1204</p>
                  <p className="text-muted-foreground">Miraflores, Lima - Perú</p>
                  <p className="text-muted-foreground">Email: info@alquilasmart.com</p>
                  <p className="text-muted-foreground">Teléfono: +51 987 507 471</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadPage;
