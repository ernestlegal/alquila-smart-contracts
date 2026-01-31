import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    {
      title: "Plataforma",
      links: [
        { name: "Para Propietarios", href: "/propietarios" },
        { name: "Para Inquilinos", href: "/inquilinos" },
        { name: "Descargar Contrato", href: "/descargas" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Nuestro Propósito", href: "/nuestro-proposito" },
        { name: "Contacto", href: "/contacto" },
        { name: "Centro de Ayuda", href: "/ayuda" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidad", href: "/politica-privacidad" },
        { name: "Términos y Condiciones", href: "/terminos-condiciones" },
        { name: "Libro de Reclamaciones", href: "/libro-reclamaciones" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
              <span className="text-xl font-bold text-foreground">Alquila Smart</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Alquila con confianza, tecnología y justicia.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alquila Smart. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link to="/politica-privacidad" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link to="/terminos-condiciones" className="hover:text-primary transition-colors">
                Términos
              </Link>
              <Link to="/libro-reclamaciones" className="hover:text-primary transition-colors">
                Libro de Reclamaciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
