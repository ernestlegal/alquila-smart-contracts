import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Home, CheckCircle, FileText, Wallet, Receipt, Users, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const InquilinosPage = () => {
  const fears = [
    "Garantías no devueltas sin justificación",
    "Aumentos arbitrarios del alquiler",
    "Falta de comprobantes de pago de SUNAT",
    "Retenciones indebidas por supuestos 'daños' que corresponden al uso ordinario del inmueble"
  ];

  const guaranteeReturns = [
    "Daños reales y comprobados",
    "Servicios pendientes de pago"
  ];

  const actaItems = [
    "La restitución del inmueble",
    "El estado del bien",
    "La devolución (total o parcial) de la garantía"
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Para Inquilinos</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Alquila con Confianza
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu garantía protegida, tus derechos respetados
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Intro */}
          <Card className="mb-12 border-l-4 border-l-primary animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed">
                En <strong>Alquila Smart</strong> también estamos comprometidos con la protección del inquilino. 
                Tras un análisis y muestreo de experiencias reales, identificamos temores recurrentes que 
                afectan a los inquilinos.
              </p>
            </CardContent>
          </Card>

          {/* Common Fears */}
          <Card className="mb-12 border-destructive/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Temores Identificados</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {fears.map((fear, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-destructive text-sm">✕</span>
                    </div>
                    <span className="text-foreground">{fear}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Our Solution */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground">Nuestros Contratos te Protegen</h2>
              <p className="text-muted-foreground mt-2">Regulamos claramente todas estas situaciones</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Garantía Protegida</h3>
                  <p className="text-muted-foreground text-sm">Tu depósito está en custodia segura</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Receipt className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Comprobantes SUNAT</h3>
                  <p className="text-muted-foreground text-sm">Todos tus pagos documentados</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Contrato Claro</h3>
                  <p className="text-muted-foreground text-sm">Sin cláusulas abusivas ni sorpresas</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Guarantee Return */}
          <Card className="mb-12 bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Wallet className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Devolución de Garantía</h3>
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                Al término del arrendamiento, la garantía será devuelta <span className="text-primary font-semibold">el mismo día de la entrega del inmueble</span>, 
                reteniendo únicamente montos razonables por:
              </p>
              <ul className="space-y-3 mb-6">
                {guaranteeReturns.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Acta de Entrega */}
          <Card className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <ClipboardCheck className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Acta de Entrega</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Todo el proceso se documenta mediante un Acta de Entrega, donde ambas partes dejan constancia de:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {actaItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits Summary */}
          <div className="bg-gradient-hero rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">
              Fomentamos una Relación de Alquiler Saludable
            </h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              De esta forma, evitamos abusos, conflictos innecesarios y prácticas negativas —como dejar de 
              pagar los últimos meses "compensando" con la garantía—, fomentando una relación de alquiler 
              <span className="text-primary font-semibold"> transparente y en paz</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center bg-secondary rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Home className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Encuentra tu Próximo Hogar
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Busca propiedades con contratos inteligentes que protegen tus derechos como inquilino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://alquilo.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Buscar Propiedades</Button>
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

export default InquilinosPage;
