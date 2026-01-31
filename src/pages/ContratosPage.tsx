import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  FileText,
  Home,
  Building2,
  Factory,
  CheckCircle2,
  CreditCard,
  Loader2,
  CheckCircle,
  XCircle,
  Clock,
  Download,
} from "lucide-react";
import Footer from "@/components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { trackPurchase, trackBeginCheckout, trackViewItem, trackButtonClick } from "@/lib/analytics";

const ContratosPage = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [selectedContract, setSelectedContract] = useState<(typeof contracts)[0] | null>(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadsRemaining, setDownloadsRemaining] = useState<number | null>(null);

  const contractTypeLabels: Record<string, string> = {
    "casa-departamento": "Casa y Departamento",
    "oficinas-comerciales": "Oficinas y Locales Comerciales",
    industriales: "Locales Industriales",
  };

  const contracts = [
    {
      id: "casa-departamento",
      title: "Casa y Departamento",
      description: "Contrato inteligente para alquiler de viviendas residenciales",
      price: 200,
      icon: Home,
      features: [
        "Cláusula de desalojo por escritura pública",
        "Protección de garantía incluida",
        "Procedimiento Notarial de desalojo en 15-30 días",
        "Lista de verificación del estado",
        "Fechas de pagos personalizado",
      ],
    },
    {
      id: "oficinas-comerciales",
      title: "Oficinas y Locales Comerciales",
      description: "Contrato especializado para espacios de trabajo y comercio",
      price: 300,
      icon: Building2,
      popular: true,
      features: [
        "Cláusula de desalojo por escritura pública",
        "Protección de garantía reforzada",
        "Procedimiento Notarial de desalojo en 15-30 días",
        "Cláusulas comerciales específicas",
        "Calendario de pagos personalizado",
        "Términos de uso comercial",
      ],
    },
    {
      id: "industriales",
      title: "Locales Industriales",
      description: "Contrato robusto para naves y espacios industriales",
      price: 500,
      icon: Factory,
      features: [
        "Cláusula de desalojo por escritura pública",
        "Protección de garantía premium",
        "Procedimiento Notarial de desalojo en 15-30 días",
        "Cláusulas industriales especializadas",
        "Calendario de pagos personalizado",
        "Términos de uso industrial",
        "Cláusulas de seguridad y normativa",
      ],
    },
  ];

  // Handle payment status from URL - now with server-side verification
  useEffect(() => {
    const status = searchParams.get("status");
    const paymentId = searchParams.get("payment_id") || searchParams.get("collection_id");
    const externalReference = searchParams.get("external_reference") || "";
    const contractType = externalReference.replace("contract_", "").split("_")[0] || "";

    if (status === "success" && paymentId) {
      // Get stored email for verification
      const storedEmail = localStorage.getItem("contract_email");
      
      if (storedEmail) {
        setIsVerifying(true);
        
        // Verify payment server-side
        supabase.functions
          .invoke("verify-payment", {
            body: {
              payment_id: paymentId,
              external_reference: externalReference,
              email: storedEmail,
            },
          })
          .then(({ data, error }) => {
            setIsVerifying(false);
            
            if (error || !data?.verified) {
              console.error("Payment verification failed:", error || data);
              toast({
                title: "Error de verificación",
                description: "No pudimos verificar tu pago. Por favor, contacta a soporte.",
                variant: "destructive",
              });
              return;
            }

            setPaymentVerified(true);
            
            toast({
              title: "¡Pago verificado!",
              description: "Tu contrato está listo para descargar.",
            });

            // Track purchase in Google Analytics
            const purchasedContract = contracts.find((c) => c.id === contractType);
            if (purchasedContract) {
              trackPurchase({
                transactionId: paymentId,
                value: purchasedContract.price,
                items: [
                  {
                    id: purchasedContract.id,
                    name: purchasedContract.title,
                    price: purchasedContract.price,
                    category: "Contratos",
                  },
                ],
              });
            }

            // Send contract email
            supabase.functions
              .invoke("send-contract-email", {
                body: {
                  email: storedEmail,
                  contractType: contractType,
                  contractTitle: contractTypeLabels[contractType] || "Contrato de Alquiler",
                  paymentId: paymentId,
                },
              })
              .then(({ error }) => {
                if (error) {
                  console.error("Error sending email:", error);
                } else {
                  console.log("Contract email sent successfully");
                }
              });
          });
      } else {
        toast({
          title: "Error",
          description: "No encontramos tu información de pago. Por favor, contacta a soporte.",
          variant: "destructive",
        });
      }
    } else if (status === "failure") {
      toast({
        title: "Pago no completado",
        description: "Hubo un problema con tu pago. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } else if (status === "pending") {
      toast({
        title: "Pago pendiente",
        description: "Tu pago está siendo procesado. Te notificaremos cuando se complete.",
      });
    }
  }, [searchParams, toast]);

  // Handle secure download
  const handleSecureDownload = async () => {
    const paymentId = searchParams.get("payment_id") || searchParams.get("collection_id");
    const storedEmail = localStorage.getItem("contract_email");

    if (!paymentId || !storedEmail) {
      toast({
        title: "Error",
        description: "Información de pago no encontrada.",
        variant: "destructive",
      });
      return;
    }

    setIsDownloading(true);

    try {
      const { data, error } = await supabase.functions.invoke("download-contract", {
        body: {
          payment_id: paymentId,
          email: storedEmail,
        },
      });

      if (error || !data?.file_data) {
        throw new Error(data?.error || "Error al generar enlace de descarga");
      }

      // Convert base64 to blob and download
      const byteCharacters = atob(data.file_data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { 
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
      });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = data.filename || "Contrato-Inteligente-AlquilaSmart.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setDownloadsRemaining(data.downloads_remaining);

      toast({
        title: "¡Descarga completada!",
        description: `Te quedan ${data.downloads_remaining} descargas disponibles.`,
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Error de descarga",
        description: error instanceof Error ? error.message : "No pudimos generar tu enlace de descarga.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleBuyClick = (contract: (typeof contracts)[0]) => {
    setSelectedContract(contract);
    setDialogOpen(true);

    // Track view item in Google Analytics
    trackViewItem({
      id: contract.id,
      name: contract.title,
      price: contract.price,
      category: "Contratos",
    });

    trackButtonClick("Comprar Contrato", contract.title);
  };

  const handlePayment = async () => {
    if (!selectedContract || !email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu correo electrónico",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Track begin checkout in Google Analytics
    trackBeginCheckout({
      id: selectedContract.id,
      name: selectedContract.title,
      price: selectedContract.price,
      category: "Contratos",
    });

    try {
      const { data, error } = await supabase.functions.invoke("create-mercadopago-preference", {
        body: {
          contractType: selectedContract.id,
          title: selectedContract.title,
          price: selectedContract.price,
          email: email,
        },
      });

      if (error) throw error;

      if (data?.init_point) {
        // Save email to localStorage for later use after payment
        localStorage.setItem("contract_email", email);
        // Redirect to MercadoPago checkout
        window.location.href = data.init_point;
      } else {
        throw new Error("No se pudo crear la preferencia de pago");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = () => {
    const status = searchParams.get("status");
    if (status === "success") return <CheckCircle className="h-16 w-16 text-green-500" />;
    if (status === "failure") return <XCircle className="h-16 w-16 text-destructive" />;
    if (status === "pending") return <Clock className="h-16 w-16 text-yellow-500" />;
    return null;
  };

  const statusIcon = getStatusIcon();

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Download Section */}
          {searchParams.get("status") === "success" && (
            <Card className="max-w-2xl mx-auto mb-12 border-primary/30 bg-primary/5">
              <CardContent className="p-8 text-center">
                {isVerifying ? (
                  <>
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Loader2 className="h-10 w-10 text-primary animate-spin" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Verificando pago...</h2>
                    <p className="text-muted-foreground">
                      Estamos confirmando tu pago con MercadoPago. Esto solo tomará unos segundos.
                    </p>
                  </>
                ) : paymentVerified ? (
                  <>
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">¡Pago Verificado!</h2>
                    <p className="text-muted-foreground mb-6">
                      Tu contrato inteligente está listo para descargar. También te hemos enviado una confirmación a tu correo.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-amber-800">
                        <strong>📧 ¿No encuentras el correo?</strong> Revisa tu carpeta de <strong>spam</strong> o{" "}
                        <strong>correo no deseado</strong>.
                      </p>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={handleSecureDownload}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Generando enlace...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-5 w-5" />
                          Descargar Contrato
                        </>
                      )}
                    </Button>
                    {downloadsRemaining !== null && (
                      <p className="text-sm text-muted-foreground mt-4">
                        Descargas restantes: {downloadsRemaining} de 5
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      Documento en formato Word (.docx) listo para personalizar
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                      <XCircle className="h-10 w-10 text-destructive" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Error de Verificación</h2>
                    <p className="text-muted-foreground mb-6">
                      No pudimos verificar tu pago. Por favor, contacta a soporte si crees que esto es un error.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* Status Message for other statuses */}
          {statusIcon && searchParams.get("status") !== "success" && (
            <div className="max-w-md mx-auto mb-12 text-center animate-fade-in">
              <div className="flex justify-center mb-4">{statusIcon}</div>
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contratos Inteligentes de Alquiler
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el contrato que mejor se adapte a tu tipo de propiedad. Todos incluyen cláusula de desalojo notarial
              para tu máxima protección. Llena la DESCARGA y llevalo al notario de tu preferencia.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contracts.map((contract) => (
              <Card
                key={contract.id}
                className={`relative flex flex-col transition-all duration-300 hover:shadow-lg ${
                  contract.popular ? "border-primary shadow-md scale-105" : ""
                }`}
              >
                {contract.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <contract.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{contract.title}</CardTitle>
                  <CardDescription className="text-sm">{contract.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-foreground">S/ {contract.price}</span>
                    <p className="text-sm text-muted-foreground mt-1">Pago único</p>
                  </div>
                  <ul className="space-y-3">
                    {contract.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    size="lg"
                    variant={contract.popular ? "default" : "outline"}
                    onClick={() => handleBuyClick(contract)}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Comprar Contrato
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Important SUNARP Notice */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-amber-300 bg-amber-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-800 mb-3">IMPORTANTE</h3>
                    <ul className="space-y-2 text-amber-900">
                      <li className="flex items-start gap-2">
                        <span className="font-bold">1.</span>
                        <span>La propiedad <strong>debe estar registrada en SUNARP</strong>, de lo contrario no puedes acogerte a esta modalidad.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">2.</span>
                        <span>Completa la descarga y llévalo al <strong>notario de tu preferencia</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">3.</span>
                        <span>Lleva una <strong>copia de la partida electrónica de SUNARP</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">4.</span>
                        <span>Los firmantes <strong>deben ir presencialmente al notario</strong> para firmar los documentos.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  ¿Qué incluye tu Contrato Inteligente?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Incluido en el precio:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Contrato digital listo para firma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Cláusula de desalojo exprés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Arbitraje para otras contingencias</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Gastos adicionales (no incluidos):</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        • Gastos de notaría para escritura pública
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        • Trámites registrales (no es obligatorio registrarlo)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        • Legalizaciones adicionales
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              ¿Tienes dudas? Contáctanos y te ayudamos a elegir el contrato ideal.
            </p>
            <Link to="/contacto">
              <Button variant="outline" size="lg">
                Ir a Contacto
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Payment Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Comprar Contrato</DialogTitle>
            <DialogDescription>
              {selectedContract && (
                <>
                  <span className="font-medium text-foreground">{selectedContract.title}</span>
                  <span className="block text-2xl font-bold text-primary mt-2">S/ {selectedContract.price}</span>
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">Te enviaremos el contrato a este correo después del pago.</p>
            </div>
            <Button className="w-full" size="lg" onClick={handlePayment} disabled={isLoading || !email}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pagar con MercadoPago
                </>
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Serás redirigido a MercadoPago para completar el pago de forma segura.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ContratosPage;
