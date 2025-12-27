import { Link } from "react-router-dom";
import { AlertTriangle, Clock, Scale, Shield, FileText, Phone, CheckCircle, ArrowRight, Home, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RecuperaTuPropiedadPage = () => {
  const problems = [
    {
      icon: Clock,
      title: "Años de Espera",
      description: "Tu inquilino lleva meses o años sin pagar y el proceso judicial parece interminable."
    },
    {
      icon: AlertTriangle,
      title: "Desgaste Emocional",
      description: "El estrés y la frustración de no poder recuperar lo que es tuyo afecta tu calidad de vida."
    },
    {
      icon: Scale,
      title: "Sistema Judicial Lento",
      description: "Los juzgados están saturados y los plazos se extienden indefinidamente."
    },
    {
      icon: FileText,
      title: "Costos Legales Elevados",
      description: "Cada mes que pasa representa más gastos en abogados y trámites sin resultados."
    }
  ];

  const solutions = [
    {
      step: "1",
      title: "Evaluación Gratuita",
      description: "Analizamos tu caso sin costo para determinar la mejor estrategia legal."
    },
    {
      step: "2",
      title: "Acta Notarial de Desalojo",
      description: "Preparamos la documentación con cláusula notarial para agilizar el proceso."
    },
    {
      step: "3",
      title: "Lanzamiento Judicial Rápido",
      description: "Solicitamos al juez el lanzamiento con apoyo policial en el menor tiempo posible."
    },
    {
      step: "4",
      title: "Recuperas Tu Propiedad",
      description: "Finalmente vuelves a tener el control total de tu inmueble."
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">¿Inquilino Problemático?</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Recupera Tu Propiedad
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Esta sección está dirigida a propietarios que ya tienen un contrato de alquiler 
            celebrado antes de conocer nuestro servicio.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Si no puedes migrar a nuestro servicio y tu inquilino no desea llegar a un acuerdo, 
            no te paga y necesitas iniciar un <strong className="text-foreground">desalojo judicial</strong>, 
            te conectamos con un <strong className="text-foreground">abogado especialista en desalojos</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Consulta Gratuita
              </Button>
            </Link>
            <a href="https://wa.link/alquilasmart" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                Escríbenos por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-destructive/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Te Identificas con Esto?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Miles de propietarios en Perú enfrentan la misma situación. No estás solo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="animate-fade-in border-destructive/20 hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-destructive animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-destructive mb-2">3 años</p>
                  <p className="text-muted-foreground">Promedio de un desalojo judicial tradicional</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-destructive mb-2">S/. 15,000+</p>
                  <p className="text-muted-foreground">Costos legales acumulados en promedio</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-destructive mb-2">70%</p>
                  <p className="text-muted-foreground">De propietarios reportan estrés severo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Nuestra Solución</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Te Ayudamos a Recuperar Lo Tuyo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Con nuestro proceso optimizado, reducimos significativamente los tiempos de recuperación.
            </p>
          </div>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      {solution.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center animate-fade-in">
            Comparativa de Tiempos
          </h2>
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-8 text-center">
                <Gavel className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Proceso Judicial Tradicional</h3>
                <p className="text-4xl font-bold text-destructive mb-4">1 a 3 años</p>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Demanda, contestación, audiencias
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Apelaciones que alargan el proceso
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Costos legales que se acumulan
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✕</span>
                    Incertidumbre constante
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Con Alquila Smart</h3>
                <p className="text-4xl font-bold text-primary mb-4">15 - 45 días</p>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    Cláusula Notarial de Desalojo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    Proceso simplificado y directo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    Costos predecibles y menores
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    Lanzamiento con apoyo policial
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Respaldo Legal Especializado
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Nuestro equipo de abogados especializados en derecho inmobiliario te acompaña 
                en todo el proceso. Conocemos las leyes peruanas y las usamos a tu favor para 
                que recuperes tu propiedad lo antes posible.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Asesoría Legal</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Documentación Completa</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Seguimiento del Caso</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 animate-fade-in">
            <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              No Esperes Más
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Cada día que pasa es un día más sin tu propiedad y sin recibir el alquiler que te corresponde. 
              Contáctanos hoy y comienza el proceso de recuperación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Agenda Tu Consulta Gratuita
                </Button>
              </Link>
              <Link to="/propietarios">
                <Button size="lg" variant="outline">
                  Para Nuevos Arrendamientos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Prevención para el Futuro
                  </h3>
                  <p className="text-muted-foreground">
                    Una vez que recuperes tu propiedad, te ayudamos a que esto no vuelva a suceder.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Contratos Smart</h4>
                    <p className="text-sm text-muted-foreground">Con cláusula notarial de desalojo incluida</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Inquilinos Verificados</h4>
                    <p className="text-sm text-muted-foreground">Evaluación de antecedentes y solvencia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Garantía en Custodia</h4>
                    <p className="text-sm text-muted-foreground">Protección para ambas partes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Arbitraje Rápido</h4>
                    <p className="text-sm text-muted-foreground">Resolución de conflictos en días, no años</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border mt-16">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Alquila Smart. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default RecuperaTuPropiedadPage;
