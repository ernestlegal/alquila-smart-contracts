import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Scale, Clock, AlertTriangle, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NuestroPropositoPage = () => {
  const sanctions = [
    "La devolución duplicada de la garantía",
    "El pago de los costos arbitrales, denuncia penal por apropiación ilícita",
    "Sanciones económicas adicionales, incluyendo embargo del inmueble, si procede un desalojo sin cumplir los trámites judiciales o arbitrales establecidos"
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Scale className="w-4 h-4" />
            <span className="text-sm font-medium">Nuestro Propósito</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Reinventamos el Alquiler
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Integrando justicia y garantía en una sola plataforma
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-16 animate-fade-in">
            <Card className="border-l-4 border-l-primary mb-8">
              <CardContent className="p-6">
                <p className="text-lg text-foreground leading-relaxed m-0">
                  <strong>Alquila Smart</strong> es un marketplace donde interactúan inquilinos y propietarios, 
                  dos partes con necesidades distintas, pero con una misma preocupación: <span className="text-primary font-semibold">la desconfianza</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Two Sides */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Temores del Propietario</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El propietario teme encontrarse con un inquilino moroso, que deje de pagar la renta, 
                  acumule deudas de servicios, cause daños al inmueble y lo obligue a enfrentar largos 
                  y costosos procesos judiciales, con abogados, meses —o años— de espera y pérdidas económicas acumuladas.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Temores del Inquilino</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El inquilino teme que, al finalizar el contrato, no le devuelvan su garantía; que le aumenten 
                  el alquiler de forma abusiva; que no le entreguen comprobantes de pago de SUNAT; que no le 
                  reconozcan mejoras realizadas; o que sea desalojado arbitrariamente, sin juicio ni debido proceso.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Solution */}
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Alquila Smart nace para eliminar esos miedos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestra plataforma garantiza que ninguno de estos escenarios ocurra, porque cualquier 
              conflicto será resuelto bajo un sistema claro, rápido y justo.
            </p>
          </div>

          {/* Resolution Process */}
          <Card className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Proceso de Resolución</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mediación</h4>
                    <p className="text-muted-foreground">Ante una controversia, las partes deberán acudir primero a un proceso de mediación.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Arbitraje Especializado</h4>
                    <p className="text-muted-foreground">Si la mediación no prospera, se activa un arbitraje especializado con notificación en un plazo máximo de 24 horas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Resolución Rápida</h4>
                    <p className="text-muted-foreground">Resolución en un periodo aproximado de 15 a 30 días.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sanctions */}
          <Card className="mb-16 border-destructive/20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Sanciones por Abuso de Posición Dominante
              </h3>
              <p className="text-muted-foreground mb-6">
                Si un propietario abusa de su posición dominante —apropiándose indebidamente de la garantía 
                o intentando desalojar "a la mala", sin proceso legal— podrá ser sancionado con:
              </p>
              <ul className="space-y-3">
                {sanctions.map((sanction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{sanction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-primary/5 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Porque alquilar debe ser justo para ambos
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Reinventamos el alquiler, integrando justicia y garantía en una sola plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/propietarios">
                <Button size="lg">Soy Propietario</Button>
              </Link>
              <Link to="/inquilinos">
                <Button size="lg" variant="outline">Soy Inquilino</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Alquila Smart. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default NuestroPropositoPage;
