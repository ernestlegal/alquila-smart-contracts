import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, FileText, Scale, CheckCircle } from "lucide-react";

const OwnersSection = () => {
  const benefits = [
    {
      icon: Home,
      title: "Free Listing",
      description: "Post one property every three months at no cost",
    },
    {
      icon: FileText,
      title: "Smart Contracts",
      description: "Access secure, legally-binding digital rental agreements",
    },
    {
      icon: Scale,
      title: "Fast Arbitration",
      description: "Resolve disputes quickly in our Digital Arbitration Court",
    },
    {
      icon: CheckCircle,
      title: "Verified Tenants",
      description: "Connect with pre-verified, trustworthy tenants",
    },
  ];

  return (
    <section id="owners" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              For Property Owners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Post one property every three months for free, access secure smart contracts, 
              and resolve disputes quickly in our Digital Arbitration Court.
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
            <div className="aspect-video bg-secondary rounded-lg mb-6 flex items-center justify-center">
              <p className="text-muted-foreground">Explainer Video (40-60 seconds)</p>
            </div>
            <div className="text-center">
              <Button size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnersSection;
