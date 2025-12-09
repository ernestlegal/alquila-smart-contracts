import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Upload } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional contract signing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Ningún agente te garantiza un buen inquilino, y ningún propietario te garantiza la devolución de tu garantía.{" "}
            <span className="text-primary">Nosotros sí.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">
            Alquila con confianza, con tecnología y justicia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="group shadow-primary">
              <Upload className="mr-2 h-5 w-5" />
              Publica Gratis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Descargar Contrato
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Devolución de tu Garantía</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24h</div>
              <p className="text-sm text-muted-foreground">Arbitraje Rápido</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Gratis</div>
              <p className="text-sm text-muted-foreground">Primera Publicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
