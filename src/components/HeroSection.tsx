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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-tight">
              Alquila tu Próximo Hogar con Completa{" "}
              <span className="text-primary">Tranquilidad</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-light">
              Explora anuncios verificados, firma contratos inteligentes y disfruta de la seguridad de reembolsos de tu Garantía.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="https://alquilo.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group shadow-primary">
                  <Upload className="mr-2 h-5 w-5" />
                  Publica Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/descargas">
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Contrato
                </Button>
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Devolución de tu Garantía</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24h</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Desalojo Express</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">Gratis</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Primera Publicación</p>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ZezchfSDN7o?start=3"
                title="Video explicativo de Alquila Smart"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
