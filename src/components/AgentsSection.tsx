import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, Shield, Zap } from "lucide-react";

const AgentsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Premium Visibility",
      description: "Your listings get featured placement and priority in search results",
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "All contracts are legally binding and protect both parties",
    },
    {
      icon: Star,
      title: "Smart Certified Badge",
      description: "Stand out as a verified, trustworthy professional agent",
    },
    {
      icon: Zap,
      title: "Unlimited Listings",
      description: "Post as many properties as you need with our premium plans",
    },
  ];

  return (
    <section id="agents" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">For Professionals</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Agents & Brokers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Post more listings by purchasing our Smart Contracts and get premium visibility.
              Build trust with your clients using our certified platform.
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
                    <Badge variant="secondary">Smart Certified Agent</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Upgrade Your Professional Profile
                  </h3>
                  <p className="text-muted-foreground">
                    Join our network of verified professionals and gain access to 
                    premium features, analytics, and priority support.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button size="lg">
                    Learn More
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
