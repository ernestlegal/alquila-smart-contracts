import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TerminosCondicionesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Términos y Condiciones
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
                <p className="text-muted-foreground">
                  Al acceder y utilizar los servicios de Alquila Smart, usted acepta estar sujeto a estos 
                  Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no 
                  debe utilizar nuestros servicios.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Descripción del Servicio</h2>
                <p className="text-muted-foreground mb-4">
                  Alquila Smart es una plataforma tecnológica-legal que ofrece:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Contratos de alquiler inteligente con cláusulas de arbitraje.</li>
                  <li>Custodia de garantías de alquiler.</li>
                  <li>Servicios de arbitraje para resolución de disputas.</li>
                  <li>Conexión entre propietarios e inquilinos.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Registro y Cuenta</h2>
                <p className="text-muted-foreground mb-4">
                  Para utilizar ciertos servicios, deberá crear una cuenta proporcionando información 
                  precisa y actualizada. Usted es responsable de:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Mantener la confidencialidad de su cuenta y contraseña.</li>
                  <li>Todas las actividades que ocurran bajo su cuenta.</li>
                  <li>Notificarnos inmediatamente sobre cualquier uso no autorizado.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Contratos de Alquiler Inteligente</h2>
                <p className="text-muted-foreground mb-4">
                  Nuestros contratos incluyen:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Cláusula de arbitraje obligatoria para resolución de disputas.</li>
                  <li>Mecanismo de custodia de garantía gestionado por Alquila Smart.</li>
                  <li>Procedimientos específicos para terminación anticipada.</li>
                  <li>Protecciones equilibradas para propietarios e inquilinos.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Custodia de Garantía</h2>
                <p className="text-muted-foreground mb-4">
                  Respecto a la custodia de garantías:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>La garantía será depositada en una cuenta de custodia administrada por Alquila Smart.</li>
                  <li>La liberación de la garantía se realizará según lo estipulado en el contrato o por decisión arbitral.</li>
                  <li>Alquila Smart no utilizará los fondos de garantía para ningún otro propósito.</li>
                  <li>Se aplicarán las comisiones establecidas por el servicio de custodia.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Proceso de Arbitraje</h2>
                <p className="text-muted-foreground mb-4">
                  El arbitraje se llevará a cabo bajo las siguientes condiciones:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Se regirá por las Reglas de Arbitraje de Alquila Smart.</li>
                  <li>La decisión del árbitro será definitiva y vinculante.</li>
                  <li>El procedimiento será rápido, con resolución en un máximo de 30 días.</li>
                  <li>Los costos del arbitraje serán compartidos según lo establecido en las reglas.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Tarifas y Pagos</h2>
                <p className="text-muted-foreground mb-4">
                  Nuestras tarifas incluyen:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Contratos:</strong> Precio según tipo de propiedad (residencial, comercial, industrial).</li>
                  <li><strong>Custodia de garantía:</strong> Comisión del 2% anual sobre el monto custodiado.</li>
                  <li><strong>Arbitraje:</strong> Costos según complejidad del caso y tarifas vigentes.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Todos los precios están expresados en Soles (PEN) e incluyen IGV cuando corresponda.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Obligaciones del Usuario</h2>
                <p className="text-muted-foreground mb-4">
                  El usuario se compromete a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Proporcionar información veraz y actualizada.</li>
                  <li>No utilizar la plataforma para fines ilegales.</li>
                  <li>Respetar los derechos de otros usuarios.</li>
                  <li>Cumplir con las obligaciones derivadas de los contratos celebrados.</li>
                  <li>No intentar acceder a áreas restringidas de la plataforma.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitación de Responsabilidad</h2>
                <p className="text-muted-foreground">
                  Alquila Smart actúa como intermediario y plataforma tecnológica. No somos parte de los 
                  contratos de alquiler entre propietarios e inquilinos. Nuestra responsabilidad se limita 
                  a los servicios que prestamos directamente: facilitación de contratos, custodia de 
                  garantías y administración del proceso de arbitraje.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Propiedad Intelectual</h2>
                <p className="text-muted-foreground">
                  Todo el contenido de la plataforma, incluyendo textos, gráficos, logos, iconos, 
                  imágenes, software y la compilación de estos, es propiedad de Alquila Smart y está 
                  protegido por las leyes de propiedad intelectual aplicables.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Modificaciones</h2>
                <p className="text-muted-foreground">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
                  entrarán en vigor inmediatamente después de su publicación en la plataforma. El uso 
                  continuado de los servicios después de cualquier cambio constituye su aceptación de 
                  los nuevos términos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Ley Aplicable y Jurisdicción</h2>
                <p className="text-muted-foreground">
                  Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa 
                  relacionada con estos términos será resuelta mediante arbitraje de conformidad con 
                  las Reglas de Arbitraje de Alquila Smart, o en los tribunales de Lima, Perú, según 
                  corresponda.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contacto</h2>
                <p className="text-muted-foreground">
                  Para consultas sobre estos Términos y Condiciones:
                </p>
                <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                  <p className="text-foreground font-medium">Alquila Smart</p>
                  <p className="text-muted-foreground">Bajada Balta 169, Of. 1204</p>
                  <p className="text-muted-foreground">Miraflores, Lima - Perú</p>
                  <p className="text-muted-foreground">Email: info@alquilasmart.com</p>
                  <p className="text-muted-foreground">Teléfono: +51 969 104 933</p>
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

export default TerminosCondicionesPage;
