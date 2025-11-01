import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingDown, Clock, Award } from "lucide-react";

const TenantsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Protected Deposit",
      description: "Your security deposit is guaranteed and protected by our platform",
    },
    {
      icon: TrendingDown,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges or commissions",
    },
    {
      icon: Clock,
      title: "Quick Refunds",
      description: "Get your deposit back easily and quickly when you move out",
    },
    {
      icon: Award,
      title: "Verified Properties",
      description: "All listings are verified to ensure authenticity and quality",
    },
  ];

  return (
    <section id="tenants" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              For Tenants
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your deposit is protected. Rent without fear. Get your money back easily with Alquila Smart.
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
                Rent Your Next Home with Complete Peace of Mind
              </h3>
              <p className="text-lg opacity-90">
                Browse verified listings, sign smart contracts, and enjoy the security 
                of guaranteed deposit refunds.
              </p>
              <div className="aspect-video bg-background/10 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-primary-foreground/80">Tenant Explainer Video (30-45 seconds)</p>
              </div>
              <Button size="lg" variant="secondary">
                Find Your Next Safe Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantsSection;
