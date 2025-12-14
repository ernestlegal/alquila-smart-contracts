import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Clock, Home, CheckCircle, Scale, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PropietariosPage = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Inquilinos Verificados",
      description: "Arrienda sin temor a inquilinos morosos, conflictivos o destructores."
    },
    {
      icon: FileText,
      title: "Contratos Smart",
      description: "Las contingencias más comunes del arrendamiento están debidamente reguladas."
    },
    {
      icon: Clock,
      title: "Desalojo Rápido",
      description: "Reduce un proceso de 10 meses a 3 años, a solo 15-30 días."
    },
    {
      icon: Scale,
      title: "Arbitraje Especializado",
      description: "Resolución justa y rápida de cualquier controversia."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
              <span className="text-xl font-bold text-foreground">Alquila Smart</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Para Propietarios</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Arrienda con Tranquilidad
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protege tu propiedad con contratos inteligentes y desalojo arbitral rápido
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Intro Card */}
          <Card className="mb-12 border-l-4 border-l-primary animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed">
                En <strong>Alquila Smart</strong>, los propietarios pueden arrendar sus inmuebles sin temor 
                a inquilinos morosos, conflictivos o destructores. Las contingencias más comunes del 
                arrendamiento se encuentran debidamente reguladas en nuestros <span className="text-primary font-semibold">contratos Smart</span>, 
                que incorporan un desalojo arbitral rápido.
              </p>
            </CardContent>
          </Card>

          {/* Time Comparison */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Comparativa de Tiempos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-destructive mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Vía Judicial Tradicional</h3>
                  <p className="text-3xl font-bold text-destructive mb-2">10 meses - 3 años</p>
                  <p className="text-muted-foreground text-sm">Con apelaciones puede extenderse aún más</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Con Alquila Smart</h3>
                  <p className="text-3xl font-bold text-primary mb-2">15 - 30 días</p>
                  <p className="text-muted-foreground text-sm">Arbitraje especializado y rápido</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Process */}
          <Card className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Proceso Simplificado</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Arbitraje Rápido</h4>
                    <p className="text-muted-foreground">Resolución del conflicto en 15-30 días mediante arbitraje especializado.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ejecución Judicial</h4>
                    <p className="text-muted-foreground">Solo se acude al Poder Judicial para el lanzamiento del inmueble, con apoyo policial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sin Incertidumbre</h4>
                    <p className="text-muted-foreground">Eliminamos los costos prolongados y el desgaste emocional.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guarantee Protection */}
          <Card className="mb-12 bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Seguridad para Ambos Lados</h3>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Nuestra plataforma también exige propietarios responsables y justos, que no abusen de su 
                condición de dueños ni de la garantía entregada por el inquilino.
              </p>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Garantía en Custodia</h4>
                <p className="text-muted-foreground">
                  La garantía será depositada en custodia, siendo <strong>Alquila Smart</strong> la entidad que 
                  garantiza su correcta devolución, descontando únicamente lo que corresponda por daños reales 
                  o deudas debidamente acreditadas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-secondary rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Comienza a Arrendar con Seguridad
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Publica tu propiedad gratis y accede a todos los beneficios de nuestros contratos inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://alquilo.ia" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Publicar Propiedad Gratis</Button>
              </a>
              <Link to="/nuestro-proposito">
                <Button size="lg" variant="outline">Conocer Más</Button>
              </Link>
            </div>
          </div>
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

export default PropietariosPage;
