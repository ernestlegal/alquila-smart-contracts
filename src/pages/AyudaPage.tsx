import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "¿Qué es Alquila Smart?",
        answer: "Alquila Smart es un marketplace donde interactúan inquilinos y propietarios con garantías mutuas. Nuestra plataforma ofrece contratos inteligentes, arbitraje rápido y protección de garantías para ambas partes."
      },
      {
        question: "¿Cómo funciona la plataforma?",
        answer: "La plataforma conecta propietarios e inquilinos de forma segura. Los propietarios publican sus inmuebles, los inquilinos encuentran opciones verificadas, y ambos firman contratos Smart que incluyen mecanismos de resolución de conflictos y protección de garantías."
      },
      {
        question: "¿Cuánto cuesta usar Alquila Smart?",
        answer: "Para inquilinos, el acceso es completamente gratuito. Los propietarios pueden publicar 1 inmueble gratis cada 3 meses. Los agentes inmobiliarios pueden adquirir contratos Smart para sus operaciones."
      },
    ]
  },
  {
    category: "Para Propietarios",
    questions: [
      {
        question: "¿Cómo protege Alquila Smart mi inmueble?",
        answer: "Nuestros contratos Smart incorporan un mecanismo de desalojo por Clausula Notarial. Mientras que en la vía judicial un desalojo puede durar entre 10 meses y 3 años, con nuestro sistema el proceso se reduce a aproximadamente 15-30 días, para luego solo pedir al Juez de su distrito el lanzamiento con apoyo policial."
      },
      {
        question: "¿Qué pasa si mi inquilino deja de pagar?",
        answer: "Ante una situación de morosidad, las partes acuden primero a mediación. Si no se resuelve, se activa un arbitraje especializado con notificación en 24 horas y resolución en 15-30 días. Luego se procede al lanzamiento judicial con apoyo policial."
      },
      {
        question: "¿Cómo publico mi inmueble?",
        answer: "Ingresa a alquilo.ai, crea una cuenta y sigue los pasos para publicar tu inmueble. Puedes agregar fotos, descripción, precio y condiciones. Tu primera publicación es gratuita."
      },
      {
        question: "¿Qué tipo de inmuebles puedo publicar?",
        answer: "Puedes publicar departamentos, casas, oficinas, locales comerciales y cualquier tipo de inmueble destinado al alquiler. Todos los inmuebles pasan por un proceso de verificación básica."
      },
    ]
  },
  {
    category: "Para Inquilinos",
    questions: [
      {
        question: "¿Cómo protege Alquila Smart mi garantía?",
        answer: "La garantía es depositada en custodia por Alquila Smart. Al término del contrato, se devuelve el mismo día de la entrega del inmueble, descontando únicamente montos por daños reales y comprobados o servicios pendientes de pago."
      },
      {
        question: "¿Qué pasa si el propietario no quiere devolver mi garantía?",
        answer: "Si un propietario se apropia indebidamente de la garantía, puede ser sancionado con la devolución duplicada de la garantía, el pago de los costos arbitrales, denuncia penal por apropiación ilícita y sanciones económicas adicionales."
      },
      {
        question: "¿Cómo se documenta la entrega del inmueble?",
        answer: "Todo el proceso se documenta mediante un Acta de Entrega donde ambas partes dejan constancia de la restitución del inmueble, el estado del bien y la devolución total o parcial de la garantía."
      },
      {
        question: "¿Puedo reclamar si me aumentan el alquiler arbitrariamente?",
        answer: "Sí. Nuestros contratos regulan claramente los aumentos de alquiler. Cualquier aumento debe estar previamente acordado en el contrato. Si hay un aumento abusivo, puedes acudir al proceso de mediación y arbitraje."
      },
    ]
  },
  {
    category: "Contratos y Arbitraje",
    questions: [
      {
        question: "¿Qué son los contratos Smart?",
        answer: "Los contratos Smart son contratos de arrendamiento diseñados por especialistas que incluyen cláusulas claras para proteger a ambas partes, mecanismos de resolución de conflictos y acceso a arbitraje rápido."
      },
      {
        question: "¿Cómo funciona el arbitraje?",
        answer: "Ante una controversia, las partes acuden primero a mediación. Si esta no prospera, se activa un arbitraje especializado con notificación en máximo 24 horas y resolución en aproximadamente 15-30 días."
      },
      {
        question: "¿El arbitraje es legalmente válido?",
        answer: "Sí. El arbitraje es un mecanismo de resolución de conflictos reconocido por la ley peruana. Los laudos arbitrales tienen la misma fuerza ejecutiva que una sentencia judicial."
      },
      {
        question: "¿Cuánto cuesta el arbitraje?",
        answer: "Los costos del arbitraje dependen del monto en disputa. Sin embargo, la parte que incumpla el contrato generalmente asume los costos del proceso."
      },
    ]
  },
  {
    category: "Cuenta y Soporte",
    questions: [
      {
        question: "¿Cómo creo una cuenta?",
        answer: "Visita alquilo.ai y haz clic en 'Registrarse'. Puedes crear una cuenta con tu correo electrónico. El proceso toma menos de 2 minutos."
      },
      {
        question: "¿Cómo contacto al soporte?",
        answer: "Puedes contactarnos por teléfono al 969 104 933, por email a info@alquilasmart.com, o visitarnos en nuestra oficina en Bajada Balta 169, Of. 1204, Miraflores."
      },
      {
        question: "¿Cuál es el horario de atención?",
        answer: "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:30, y los sábados de 9:00 a 13:00."
      },
    ]
  },
];

const AyudaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Centro de Ayuda
            </h1>
            <p className="text-xl text-muted-foreground">
              Encuentra respuestas a las preguntas más frecuentes sobre Alquila Smart
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full" />
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border border-border rounded-xl px-6 bg-card shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nuestro equipo está listo para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="px-8">
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyudaPage;
