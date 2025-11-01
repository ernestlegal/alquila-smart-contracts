import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, Shield, Zap } from "lucide-react";

const AgentsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Visibilidad Premium",
      description: "Tus anuncios obtienen ubicación destacada y prioridad en los resultados",
    },
    {
      icon: Shield,
      title: "Protección Legal",
      description: "Todos los contratos son legalmente vinculantes y protegen a ambas partes",
    },
    {
      icon: Star,
      title: "Insignia Certificado Smart",
      description: "Destaca como un agente profesional verificado y confiable",
    },
    {
      icon: Zap,
      title: "Anuncios Ilimitados",
      description: "Publica tantas propiedades como necesites con nuestros planes premium",
    },
  ];

  return (
    <section id="agents" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Para Profesionales</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Agentes e Inmobiliarias
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Publica más anuncios comprando nuestros Contratos Inteligentes y obtén visibilidad premium.
              Construye confianza con tus clientes usando nuestra plataforma certificada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-primary/20 shadow-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary">Agente Certificado Smart</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Mejora tu Perfil Profesional
                  </h3>
                  <p className="text-muted-foreground">
                    Únete a nuestra red de profesionales verificados y obtén acceso a 
                    funciones premium, analíticas y soporte prioritario.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button size="lg">
                    Conocer Más
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
