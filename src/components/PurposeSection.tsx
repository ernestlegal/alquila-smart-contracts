import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Scale } from "lucide-react";

const PurposeSection = () => {
  const values = [
    {
      icon: Scale,
      title: "Equilibrio",
      description: "Creando justicia entre propietarios e inquilinos a través de la tecnología",
    },
    {
      icon: Users,
      title: "Confianza",
      description: "Construyendo relaciones transparentes en cada transacción de alquiler",
    },
    {
      icon: Heart,
      title: "Protección",
      description: "Salvaguardando los derechos e inversiones de todas las partes",
    },
  ];

  return (
    <section id="purpose" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Creemos en Alquileres Justos para Todos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Creamos Alquila Smart porque vimos un desequilibrio entre propietarios e inquilinos. 
              Algunos temen perder su dinero de garantia; otros temen perder su propiedad. Nuestra misión es 
              restaurar el equilibrio a través de tecnología, contratos claros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-primary/20">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-hero border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto space-y-6">
                <h3 className="text-2xl font-bold text-center text-foreground">
                  Nuestra Historia
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/ZezchfSDN7o"
                    title="Video Manifiesto de Propósito"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-muted-foreground">
                  Mira nuestra historia y descubre cómo estamos transformando el mercado de alquiler 
                  un contrato inteligente a la vez.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
