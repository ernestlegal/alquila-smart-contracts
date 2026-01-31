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
            Protección de Datos
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: 01 de Enero del 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
              
              {/* 1. Generalidades */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Generalidades</h2>
                <p className="text-muted-foreground mb-4">
                  Los datos recabados por la WEB ya sea mediante el envío por parte de todo usuario, prospectos de clientes, clientes, colaborador, proveedor, ciudadano o persona jurídica que deje sus datos en nuestros formularios, chat, whatsapp, messenger, u otros medios digitales o tecnológicos recibidos por la Web u otro medio, serán incorporados a una base de datos de carácter personal del cual es responsable la WEB y la titular de la WEB y protegidos de acuerdo a ley.
                </p>
                <p className="text-muted-foreground">
                  Mediante la remisión voluntaria de sus datos, EL USUARIO y los otros mencionados en el párrafo que antecede, autoriza expresamente al titular de la Web a tratar los datos personales de forma confidencial con la finalidad exclusiva de gestionar la relación con ellos, los USUARIOS a fin promocionar las actividades, servicios, ofertas y noticias de nuestra empresa.
                </p>
              </div>

              {/* 2. Datos Personales Recopilados */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Datos Personales Recopilados</h2>
                <p className="text-muted-foreground mb-4">
                  ALQUILA SMART recopilará de forma segura los siguientes datos personales cuando un USUARIO compre un documento, descarga o servicio como:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Un comprobante de compra del artículo seleccionado.</li>
                  <li>Facturas internas utilizadas por ALQUILA SMART para fines fiscales.</li>
                  <li>La dirección de correo electrónico del USUARIO.</li>
                  <li>Cualquier documento ordenado o guardado por el USUARIO.</li>
                  <li>RUC o equivalente.</li>
                  <li>Correos electrónicos y números de telefonía o whatsapp u otras aplicaciones.</li>
                  <li>Perfiles de redes sociales.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  ALQUILA SMART recopila y almacena los datos personales que hacemos para que podamos continuar ofreciendo los SERVICIOS en nuestro SITIO WEB.
                </p>
                <p className="text-muted-foreground mb-4">
                  Al crear inicialmente una cuenta de USUARIO, se puede recopilar y almacenar la siguiente información:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>El nombre y apellido del USUARIO</li>
                  <li>La dirección postal del USUARIO</li>
                  <li>La dirección electrónica</li>
                  <li>El número telefónico móvil, análogo o de whatsapp</li>
                </ul>
                <p className="text-muted-foreground">
                  Si un USUARIO elige no proporcionar esta información, no se permitirá el acceso a una cuenta o los SERVICIOS.
                </p>
              </div>

              {/* 3. Alojamiento Web */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Alojamiento Web</h2>
                <p className="text-muted-foreground mb-4">
                  Toda la información y los servidores web de ALQUILA SMART están en la Empresa HostGator, que se encuentra ubicado en Houston, Texas, Estados Unidos.
                </p>
                <p className="text-muted-foreground">
                  Los datos personales recopilados por ALQUILA SMART se alojan y se almacenan en Perú, en los servidores ubicado en sus oficinas de Bajada Balta 169 Miraflores.
                </p>
              </div>

              {/* 4. Datos Personales Pasados a Terceros */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Datos Personales Pasados a Terceros</h2>
                <p className="text-muted-foreground">
                  Los datos personales recopilados por ALQUILA SMART nunca se comparten con terceros.
                </p>
              </div>

              {/* 5. Controlador de Datos */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Controlador de Datos</h2>
                <p className="text-muted-foreground mb-4">
                  El controlador de datos en ALQUILA SMART es ABOGA SMART SAC y se le puede contactar como se indica a continuación:
                </p>
                <div className="p-4 bg-secondary/30 rounded-lg mb-4">
                  <p className="text-muted-foreground"><strong>Dirección de correo electrónico:</strong> gerencia@aboganet.pe</p>
                  <p className="text-muted-foreground"><strong>Número de teléfonos:</strong> (51) 912430676</p>
                </div>
                <p className="text-muted-foreground">
                  El Controlador de datos es responsable de cualquier toma de decisiones con respecto a la recopilación de datos personales, como los medios y propósitos de procesamiento, así como el almacenamiento y la protección de los datos personales.
                </p>
              </div>

              {/* 6. Deberes del Controlador de Datos */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Deberes del Controlador de Datos</h2>
                <p className="text-muted-foreground mb-4">
                  El controlador de datos está comprometido con la protección y seguridad de todos los datos personales de los USUARIOS. Esto incluye supervisar todos los datos personales y garantizar que nunca se compartan con terceros sin el consentimiento válido, gratuito y sin ambigüedades del USUARIO. Las responsabilidades del controlador de datos también incluyen garantizar que todos los datos personales de los USUARIOS se usen explícitamente como se describe en esta política.
                </p>
                <p className="text-muted-foreground mb-4">
                  El Controlador de datos también es la parte responsable de garantizar que los datos personales del USUARIO se ajusten o eliminen adecuadamente cuando un USUARIO lo solicite, a menos que hacerlo conduzca a un costo o esfuerzo desproporcionadamente grande.
                </p>
                <p className="text-muted-foreground">
                  Si se compromete la integridad, confidencialidad o seguridad de los datos personales del USUARIO, el Controlador de datos será la parte responsable de informar a todos los USUARIOS.
                </p>
              </div>

              {/* 7. Derechos del Usuario */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Derechos del Usuario en Relación a los Datos Personales Recopilados</h2>
                <p className="text-muted-foreground mb-4">
                  Bajo las leyes relevantes con respecto a la recopilación y procesamiento de datos, los USUARIOS tienen los siguientes derechos:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>El derecho a obtener, acceder y/o rectificar los datos personales recopilados por ALQUILA SMART.</li>
                  <li>El derecho a borrar los datos personales recopilados por ALQUILA SMART.</li>
                  <li>El derecho a la restricción del procesamiento de datos personales por ALQUILA SMART.</li>
                  <li>El derecho a la portabilidad de los datos personales.</li>
                  <li>El derecho a oponerse a la toma de decisiones individual automatizada.</li>
                  <li>El derecho a decidir el destino de los datos personales recopilados después de la muerte de un USUARIO, de acuerdo con las disposiciones de la ley.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Si hay preguntas sobre los derechos de un USUARIO, ese USUARIO puede comunicarse con el Controlador de datos utilizando la dirección de correo electrónico que se indica en este documento. El controlador de datos responderá al USUARIO en un plazo razonable, pero en ningún caso después de 30 días.
                </p>
                <p className="text-muted-foreground">
                  El USUARIO también puede presentar quejas relacionadas con el procesamiento de datos personales ante un tribunal de jurisdicción competente o la autoridad de protección de datos pertinente. Esto incluye si un USUARIO cree que se han infringido derechos.
                </p>
              </div>

              {/* 8. Condiciones Aplicables al Consentimiento de los Niños */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Condiciones Aplicables al Consentimiento de los Niños para la Recopilación de Datos Personales</h2>
                <p className="text-muted-foreground mb-4">
                  De acuerdo con las disposiciones del Código Civil, los niños menores de dieciséis años no pueden consentir el procesamiento y la recopilación de sus datos personales.
                </p>
                <p className="text-muted-foreground">
                  ALQUILA SMART puede crear revisar por cualquier medio para garantizar que un USUARIO tenga la edad de consentimiento correspondiente. ALQUILA SMART también puede crear controles para garantizar que si un USUARIO está por debajo de la edad de consentimiento correspondiente, se ha obtenido el consentimiento adecuado de un padre o representante legal.
                </p>
              </div>

              {/* 9. Procedimiento para el Ejercicio de los Derechos */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Procedimiento para el Ejercicio de los Derechos del Titular de los Datos Personales</h2>
                <p className="text-muted-foreground">
                  Los Titulares podrán revocar su consentimiento o ejercer sus derechos de Ley, mediante la presentación de su DNI u otro documento oficial de identidad y enviando su solicitud y/o consultas a gerencia@aboganet.pe
                </p>
              </div>

              {/* 10. Datos Personales de Terceros */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Datos Personales de Terceros Proporcionados por el Usuario</h2>
                <p className="text-muted-foreground">
                  En caso que el USUARIO deba proporcionar a ALQUILA SMART datos personales de los prospectos de arrendatarios o la parte con la que celebran algún acuerdo o contrato, entiéndase que solo se proporcionan para la celebración contractual contratada, liberándose ALQUILA SMART de cualquier uso que el USUARIO haga de esos datos personales de la tercera persona, datos que ALQUILA SMART no le dará uso alguno salvo para hacer llegar alarmas, correos o mensajería referida a los vencimientos contractuales señalados en el contrato o descarga.
                </p>
              </div>

              {/* Contacto */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
                <p className="text-muted-foreground mb-4">
                  Si tiene preguntas sobre esta Política de Protección de Datos o sobre cómo manejamos su información personal, puede contactarnos en:
                </p>
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <p className="text-foreground font-medium">Alquila Smart</p>
                  <p className="text-muted-foreground">Bajada Balta 169, Of. 1204</p>
                  <p className="text-muted-foreground">Miraflores, Lima - Perú</p>
                  <p className="text-muted-foreground">Email: gerencia@aboganet.pe</p>
                  <p className="text-muted-foreground">Teléfono: (51) 912430676</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaPrivacidadPage;
