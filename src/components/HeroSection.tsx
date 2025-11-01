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
            No agent guarantees you a good tenant, and no landlord guarantees the return of your deposit.{" "}
            <span className="text-primary">We do.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">
            Rent with confidence, with technology and fairness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="group shadow-primary">
              <Upload className="mr-2 h-5 w-5" />
              Post for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Download Contract
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Deposit Guaranteed</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24h</div>
              <p className="text-sm text-muted-foreground">Fast Arbitration</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Free</div>
              <p className="text-sm text-muted-foreground">First Listing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
