import { useState } from "react";
import { Menu, X, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: "Inicio", href: "/", isRoute: true },
    { name: "Nuestro Propósito", href: "/nuestro-proposito", isRoute: true },
    { name: "Propietarios", href: "/propietarios", isRoute: true },
    { name: "Inquilinos", href: "/inquilinos", isRoute: true },
    { name: "Recupera tu Propiedad", href: "/recupera-tu-propiedad", isRoute: true },
    { name: "Publicar", href: "https://alquilo.ai", isExternal: true },
    { name: "Descargar", href: isHome ? "#download" : "/#download", isRoute: false },
    { name: "Contacto", href: "/contacto", isRoute: true },
    { name: "Ayuda", href: "/ayuda", isRoute: true },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const renderNavLink = (item: typeof navItems[0], isMobile = false) => {
    const active = item.isRoute && isActive(item.href);
    const baseClasses = isMobile
      ? `block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
          active 
            ? "text-primary bg-primary/10" 
            : "text-foreground hover:text-primary hover:bg-secondary"
        }`
      : `px-3 py-2 text-sm font-medium transition-colors ${
          active 
            ? "text-primary border-b-2 border-primary" 
            : "text-foreground hover:text-primary"
        }`;

    if (item.isExternal) {
      return (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={isMobile ? () => setIsOpen(false) : undefined}
        >
          {item.name}
        </a>
      );
    }

    if (item.isRoute) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={baseClasses}
          onClick={isMobile ? () => setIsOpen(false) : undefined}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={baseClasses}
        onClick={isMobile ? () => setIsOpen(false) : undefined}
      >
        {item.name}
      </a>
    );
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>Bajada Balta 169, Of. 1204 (Al final del parque Kennedy)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} />
              <span>969 104 933</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock size={14} />
              <span>Lun - Vie: 9:00 - 17:30 | Sáb: 9:00 - 13:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-[40px] sm:top-[36px] left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Alquila Smart" className="h-12" />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => renderNavLink(item))}
            <a href="https://alquilo.ai" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="ml-4">
                Publica Gratis
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => renderNavLink(item, true))}
            <div className="pt-4">
              <a href="https://alquilo.ai" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Publica Gratis</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;
