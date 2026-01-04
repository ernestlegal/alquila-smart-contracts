import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import NuestroPropositoPage from "./pages/NuestroPropositoPage";
import PropietariosPage from "./pages/PropietariosPage";
import RecuperaTuPropiedadPage from "./pages/RecuperaTuPropiedadPage";
import InquilinosPage from "./pages/InquilinosPage";
import ContactoPage from "./pages/ContactoPage";
import AyudaPage from "./pages/AyudaPage";
import ContratosPage from "./pages/ContratosPage";
import LibroReclamacionesPage from "./pages/LibroReclamacionesPage";
import PoliticaPrivacidadPage from "./pages/PoliticaPrivacidadPage";
import TerminosCondicionesPage from "./pages/TerminosCondicionesPage";

import NotFound from "./pages/NotFound";
import WhatsAppButton from './components/WhatsAppButton';

const queryClient = new QueryClient();

function RedirectHandler() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    const redirect = params.get("redirect");
    if (!redirect) return;

    // We only allow internal redirects.
    if (redirect.startsWith("/")) {
      navigate(redirect, { replace: true });
    }
  }, [navigate, params]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RedirectHandler />
        <Header />
        <div className="pt-[100px] sm:pt-[100px]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nuestro-proposito" element={<NuestroPropositoPage />} />
            <Route path="/propietarios" element={<PropietariosPage />} />
            <Route path="/recupera-tu-propiedad" element={<RecuperaTuPropiedadPage />} />
            <Route path="/inquilinos" element={<InquilinosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/ayuda" element={<AyudaPage />} />
            <Route path="/descargas" element={<ContratosPage />} />
            <Route path="/libro-reclamaciones" element={<LibroReclamacionesPage />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
            <Route path="/terminos-condiciones" element={<TerminosCondicionesPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
