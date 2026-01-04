import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingDown, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const TenantsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Depósito Protegido",
      description: "Tu Garantía en nuestra plataforma la custodioara.",
    },
    {
      icon: TrendingDown,
      title: "Sin Tarifas Ocultas",
      description: "Precios transparentes sin cargos sorpresa ni comisiones",
    },
    {
      icon: Clock,
      title: "Reembolsos de Garantia",
      description: "Recupera tu depósito fácil y rápidamente cuando te mudes",
    },
    {
      icon: Award,
      title: "Propiedades Verificadas",
      description: "Todos los anuncios están verificados para garantizar autenticidad y calidad",
    },
  ];

  return (
    <section id="tenants" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Para Inquilinos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tu Garantía está protegida. Alquila sin miedo. Recupera tu dinero fácilmente con Alquila Smart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="text-center hover:shadow-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground shadow-primary">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Alquila tu Próximo Hogar con Completa Tranquilidad
              </h3>
              <p className="text-lg opacity-90">
                Explora anuncios verificados, firma contratos inteligentes y disfruta de la seguridad 
                de reembolsos de tu Garantia.
              </p>
              <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/ZezchfSDN7o?start=3"
                  title="Video explicativo para Inquilinos"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <Link to="/inquilinos">
                <Button size="lg" variant="secondary">
                  Encuentra tu Próximo Hogar Seguro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantsSection;
