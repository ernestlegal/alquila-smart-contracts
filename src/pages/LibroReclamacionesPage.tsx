import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Send, CheckCircle } from "lucide-react";

const LibroReclamacionesPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    tipoDocumento: "DNI",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    tipoReclamo: "reclamo",
    detalleProducto: "",
    descripcion: "",
    pedido: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-reclamo-email", {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Reclamo enviado",
        description: "Tu reclamo ha sido registrado exitosamente. Te contactaremos pronto.",
      });
    } catch (error: any) {
      console.error("Error sending reclamo:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu reclamo. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Reclamo Registrado
            </h1>
            <p className="text-muted-foreground mb-8">
              Tu reclamo ha sido registrado exitosamente en nuestro Libro de Reclamaciones. 
              Te contactaremos en un plazo máximo de 30 días calendario según la normativa vigente.
            </p>
            <Button onClick={() => window.location.href = "/"}>
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Libro de Reclamaciones
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor 
            (Ley N° 29571) y su Reglamento (D.S. N° 011-2011-PCM).
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Hoja de Reclamación
                </h2>
                <p className="text-sm text-muted-foreground">
                  Complete todos los campos obligatorios (*) para registrar su reclamo.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Datos del Consumidor */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    1. Identificación del Consumidor
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Tipo de Documento *
                      </label>
                      <select
                        name="tipoDocumento"
                        value={formData.tipoDocumento}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                        required
                      >
                        <option value="DNI">DNI</option>
                        <option value="CE">Carné de Extranjería</option>
                        <option value="RUC">RUC</option>
                        <option value="Pasaporte">Pasaporte</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Número de Documento *
                      </label>
                      <Input
                        type="text"
                        name="numeroDocumento"
                        value={formData.numeroDocumento}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Nombres *
                      </label>
                      <Input
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Apellidos *
                      </label>
                      <Input
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Correo Electrónico *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Dirección *
                      </label>
                      <Input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Tipo de Reclamo */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    2. Tipo de Reclamo
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/30 transition-colors">
                      <input
                        type="radio"
                        name="tipoReclamo"
                        value="reclamo"
                        checked={formData.tipoReclamo === "reclamo"}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-medium text-foreground">Reclamo</span>
                        <p className="text-sm text-muted-foreground">
                          Disconformidad relacionada a los productos o servicios.
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/30 transition-colors">
                      <input
                        type="radio"
                        name="tipoReclamo"
                        value="queja"
                        checked={formData.tipoReclamo === "queja"}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-medium text-foreground">Queja</span>
                        <p className="text-sm text-muted-foreground">
                          Disconformidad no relacionada a los productos o servicios; 
                          o malestar respecto a la atención al público.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Detalle del Reclamo */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    3. Detalle del Reclamo
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Producto o Servicio Contratado *
                      </label>
                      <Input
                        type="text"
                        name="detalleProducto"
                        value={formData.detalleProducto}
                        onChange={handleChange}
                        placeholder="Ej: Contrato de Alquiler Inteligente, Servicio de Arbitraje, etc."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Descripción del Reclamo *
                      </label>
                      <Textarea
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        placeholder="Describa detalladamente el motivo de su reclamo..."
                        rows={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Pedido del Consumidor *
                      </label>
                      <Textarea
                        name="pedido"
                        value={formData.pedido}
                        onChange={handleChange}
                        placeholder="Indique qué solución espera obtener..."
                        rows={3}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Aviso Legal */}
                <div className="bg-secondary/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Aviso:</strong> La formulación del reclamo no impide acudir a 
                    otras vías de solución de controversias ni es requisito previo para 
                    interponer una denuncia ante el INDECOPI. El proveedor deberá dar 
                    respuesta al reclamo en un plazo no mayor a treinta (30) días calendario.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Reclamo
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LibroReclamacionesPage;
