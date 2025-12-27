import ScrollToTop from "./ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import NuestroPropositoPage from "./pages/NuestroPropositoPage";
import PropietariosPage from "./pages/PropietariosPage";
import InquilinosPage from "./pages/InquilinosPage";
import ContactoPage from "./pages/ContactoPage";
import AyudaPage from "./pages/AyudaPage";
import NotFound from "./pages/NotFound";
import WhatsAppButton from './components/WhatsAppButton';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> 
        <Header />
        <div className="pt-[100px] sm:pt-[100px]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nuestro-proposito" element={<NuestroPropositoPage />} />
            <Route path="/propietarios" element={<PropietariosPage />} />
            <Route path="/inquilinos" element={<InquilinosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/ayuda" element={<AyudaPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
