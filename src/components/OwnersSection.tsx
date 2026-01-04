import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, FileText, Scale, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OwnersSection = () => {
  const benefits = [
    {
      icon: Home,
      title: "Publicación Gratuita",
      description: "Publica una propiedad cada tres meses sin costo",
    },
    {
      icon: FileText,
      title: "Contratos Inteligentes",
      description: "Accede a contratos digitales seguros y legalmente vinculantes",
    },
    {
      icon: Scale,
      title: "Desalojo por Escritura Pública",
      description: "Resuelve disputas rápidamente con nuestro sistema y obtén desalojo en 15 - 30 días.",
    },
    {
      icon: CheckCircle,
      title: "No más inquilinos morosos",
      description: "Protegemos tu bien inmueble.",
    },
  ];

  return (
    <section id="owners" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Para Propietarios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Publica una propiedad cada tres meses gratis, accede a contratos inteligentes seguros 
              y resuelve disputas rápidamente en nuestro Tribunal Digital de Arbitraje.
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

          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="aspect-video rounded-lg mb-6 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/ZezchfSDN7o"
                title="Video Explicativo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <Link to="/propietarios">
                <Button size="lg">
                  Ver Cómo Funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnersSection;
