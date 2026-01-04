import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

const ReglasArbitrajePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Reglas de Arbitraje
          </h1>
          <p className="text-lg text-muted-foreground">
            Procedimiento de resolución de controversias de Alquila Smart
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Principios Fundamentales</h3>
                <p className="text-muted-foreground">
                  El arbitraje de Alquila Smart se rige por los principios de celeridad, imparcialidad, 
                  economía procesal y equidad. Nuestro objetivo es resolver las controversias de manera 
                  justa y eficiente en un plazo máximo de 30 días.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Ámbito de Aplicación</h2>
                <p className="text-muted-foreground">
                  Estas reglas se aplican a todas las controversias derivadas de contratos de alquiler 
                  celebrados a través de la plataforma Alquila Smart que contengan cláusula arbitral, 
                  incluyendo pero no limitándose a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Disputas sobre devolución de garantías.</li>
                  <li>Reclamaciones por daños a la propiedad.</li>
                  <li>Incumplimiento de obligaciones contractuales.</li>
                  <li>Terminación anticipada del contrato.</li>
                  <li>Cobro de rentas pendientes.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Inicio del Procedimiento</h2>
                <p className="text-muted-foreground mb-4">
                  El procedimiento arbitral se inicia mediante la presentación de una solicitud de 
                  arbitraje que debe contener:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Identificación completa del solicitante y del demandado.</li>
                  <li>Referencia al contrato de alquiler y cláusula arbitral.</li>
                  <li>Descripción clara de los hechos y pretensiones.</li>
                  <li>Documentos que sustenten la reclamación.</li>
                  <li>Cuantificación del monto en disputa, si aplica.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Designación del Árbitro</h2>
                <p className="text-muted-foreground mb-4">
                  El árbitro será designado de la siguiente manera:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Alquila Smart designará un árbitro de su lista de árbitros certificados.</li>
                  <li>El árbitro debe ser abogado con experiencia en derecho inmobiliario.</li>
                  <li>El árbitro será imparcial e independiente de las partes.</li>
                  <li>Las partes pueden recusar al árbitro por conflicto de interés debidamente acreditado.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Procedimiento</h2>
                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Día 1-3: Admisión</h4>
                    <p className="text-sm text-muted-foreground">
                      Recepción de la solicitud, verificación de requisitos y notificación a la parte demandada.
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Día 4-10: Contestación</h4>
                    <p className="text-sm text-muted-foreground">
                      La parte demandada presenta su contestación y pruebas. Puede formular reconvención.
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Día 11-15: Audiencia</h4>
                    <p className="text-sm text-muted-foreground">
                      Audiencia virtual donde las partes exponen sus argumentos y el árbitro puede hacer preguntas.
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Día 16-25: Deliberación</h4>
                    <p className="text-sm text-muted-foreground">
                      El árbitro analiza las pruebas y argumentos presentados.
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Día 26-30: Laudo</h4>
                    <p className="text-sm text-muted-foreground">
                      Emisión del laudo arbitral motivado y notificación a las partes.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Pruebas</h2>
                <p className="text-muted-foreground mb-4">
                  Se admiten los siguientes medios probatorios:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Documentos (contrato, comunicaciones, recibos, facturas).</li>
                  <li>Fotografías y videos del inmueble.</li>
                  <li>Declaraciones escritas de testigos.</li>
                  <li>Informes periciales (si el árbitro lo considera necesario).</li>
                  <li>Cualquier otro medio que el árbitro considere pertinente.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. El Laudo Arbitral</h2>
                <p className="text-muted-foreground mb-4">
                  El laudo arbitral:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Será emitido por escrito y debidamente motivado.</li>
                  <li>Es definitivo, inapelable y vinculante para las partes.</li>
                  <li>Tiene la misma fuerza que una sentencia judicial.</li>
                  <li>Puede ordenar la liberación total o parcial de la garantía custodiada.</li>
                  <li>Puede incluir la condena en costos del arbitraje.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Costos del Arbitraje</h2>
                <p className="text-muted-foreground mb-4">
                  Los costos del arbitraje incluyen:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border mt-4">
                    <thead>
                      <tr className="bg-secondary/30">
                        <th className="border border-border p-3 text-left text-foreground">Monto en Disputa</th>
                        <th className="border border-border p-3 text-left text-foreground">Costo Administrativo</th>
                        <th className="border border-border p-3 text-left text-foreground">Honorarios Árbitro</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">Hasta S/. 5,000</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 150</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 350</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">S/. 5,001 - S/. 15,000</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 250</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 600</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">S/. 15,001 - S/. 50,000</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 400</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 1,000</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 text-muted-foreground">Más de S/. 50,000</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 600</td>
                        <td className="border border-border p-3 text-muted-foreground">S/. 1,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  El solicitante debe pagar los costos al iniciar el procedimiento. El laudo determinará 
                  quién asume finalmente los costos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Ejecución de la Garantía</h2>
                <p className="text-muted-foreground">
                  Una vez emitido el laudo, Alquila Smart procederá a ejecutar las instrucciones del 
                  árbitro respecto a la garantía custodiada en un plazo máximo de 5 días hábiles. La 
                  transferencia se realizará a la cuenta bancaria indicada por la parte beneficiaria.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Confidencialidad</h2>
                <p className="text-muted-foreground">
                  El procedimiento arbitral es confidencial. Las partes, el árbitro y Alquila Smart 
                  se comprometen a mantener la reserva sobre todo lo actuado, salvo requerimiento 
                  legal o autorización expresa de las partes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contacto</h2>
                <p className="text-muted-foreground">
                  Para iniciar un procedimiento de arbitraje o resolver dudas:
                </p>
                <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                  <p className="text-foreground font-medium">Centro de Arbitraje Alquila Smart</p>
                  <p className="text-muted-foreground">Email: arbitraje@alquilasmart.com</p>
                  <p className="text-muted-foreground">Teléfono: +51 987 507 471</p>
                  <p className="text-muted-foreground">Horario: Lunes a Viernes, 9:00 - 17:30</p>
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

export default ReglasArbitrajePage;
