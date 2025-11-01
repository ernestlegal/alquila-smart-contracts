import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, CheckCircle2 } from "lucide-react";

const DownloadSection = () => {
  const features = [
    "Legally binding rental agreement",
    "Deposit protection clauses",
    "Clear terms and conditions",
    "Arbitration procedures",
    "Property condition checklist",
    "Payment schedules",
  ];

  return (
    <section id="download" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Download Your Smart Rental Contract
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your legally-binding rental contract and rent with complete confidence
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    What's Included:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-2">Legal Validity</h4>
                  <p className="text-sm text-muted-foreground">
                    Our Smart Rental Contract is fully compliant with local rental laws and 
                    regulations. It has been reviewed by legal professionals to ensure maximum 
                    protection for both landlords and tenants.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="shadow-primary">
                    <Download className="mr-2 h-5 w-5" />
                    Download Contract
                  </Button>
                  <Button size="lg" variant="outline">
                    View Sample
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

export default DownloadSection;
