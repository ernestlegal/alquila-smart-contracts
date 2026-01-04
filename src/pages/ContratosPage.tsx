import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Home, Building2, Factory, CheckCircle2, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ContratosPage = () => {
  const contracts = [
    {
      id: "casa-departamento",
      title: "Casa y Departamento",
      description: "Contrato inteligente para alquiler de viviendas residenciales",
      price: 200,
      icon: Home,
      features: [
        "Cláusula de desalojo por escritura pública",
        "Protección de garantía incluida",
        "Procedimiento de desalojo en 15-30 días",
        "Lista de verificación del estado",
        "Calendario de pagos personalizado",
      ],
    },
    {
      id: "oficinas-comerciales",
      title: "Oficinas y Locales Comerciales",
      description: "Contrato especializado para espacios de trabajo y comercio",
      price: 300,
      icon: Building2,
      popular: true,
      features: [
        "Cláusula de desalojo por escritura pública",
        "Protección de garantía reforzada",
        "Procedimiento de desalojo en 15-30 días",
        "Cláusulas comerciales específicas",
        "Calendario de pagos personalizado",
        "Términos de uso comercial",
      ],
    },
    {
      id: "industriales",
      title: "Locales Industriales",
      description: "Contrato robusto para naves y espacios industriales",
      price: 500,
      icon: Factory,
      features: [
        "Cláusula de desalojo por escritura pública",
        "Protección de garantía premium",
        "Procedimiento de desalojo en 15-30 días",
        "Cláusulas industriales especializadas",
        "Calendario de pagos personalizado",
        "Términos de uso industrial",
        "Cláusulas de seguridad y normativa",
      ],
    },
  ];

  const whatsappNumber = "51999999999"; // Replace with actual WhatsApp number
  
  const handleContactClick = (contractTitle: string, price: number) => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en adquirir el Contrato Inteligente para ${contractTitle} (S/ ${price}). ¿Podrían brindarme más información?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contratos Inteligentes de Alquiler
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el contrato que mejor se adapte a tu tipo de propiedad. 
              Todos incluyen cláusula de desalojo notarial para tu máxima protección.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contracts.map((contract) => (
              <Card 
                key={contract.id} 
                className={`relative flex flex-col transition-all duration-300 hover:shadow-lg ${
                  contract.popular ? "border-primary shadow-md scale-105" : ""
                }`}
              >
                {contract.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <contract.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{contract.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {contract.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-foreground">S/ {contract.price}</span>
                    <p className="text-sm text-muted-foreground mt-1">Pago único</p>
                  </div>
                  <ul className="space-y-3">
                    {contract.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={contract.popular ? "default" : "outline"}
                    onClick={() => handleContactClick(contract.title, contract.price)}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Contrato
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  ¿Qué incluye tu Contrato Inteligente?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Incluido en el precio:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Contrato digital listo para firma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Cláusula de desalojo exprés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Asesoría para completar el contrato</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Gastos adicionales (no incluidos):</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        • Gastos de notaría para escritura pública
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        • Trámites registrales si aplica
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        • Legalizaciones adicionales
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              ¿Tienes dudas? Contáctanos y te ayudamos a elegir el contrato ideal.
            </p>
            <Link to="/contacto">
              <Button variant="outline" size="lg">
                Ir a Contacto
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContratosPage;
