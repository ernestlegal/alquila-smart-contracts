import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Scale } from "lucide-react";

const PurposeSection = () => {
  const values = [
    {
      icon: Scale,
      title: "Balance",
      description: "Creating fairness between landlords and tenants through technology",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building transparent relationships in every rental transaction",
    },
    {
      icon: Heart,
      title: "Protection",
      description: "Safeguarding the rights and investments of all parties",
    },
  ];

  return (
    <section id="purpose" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              We Believe in Fair Renting for Everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We created Alquila Smart because we saw an imbalance between landlords and tenants. 
              Some fear losing their money; others fear losing their property. Our mission is to 
              restore balance through technology, clear contracts, and fast arbitration.
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
                  Our Story
                </h3>
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Purpose Manifesto Video</p>
                </div>
                <p className="text-center text-muted-foreground">
                  Watch our story and discover how we're transforming the rental market 
                  one smart contract at a time.
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
