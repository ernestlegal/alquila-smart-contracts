import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Plataforma",
      links: [
        { name: "Para Propietarios", href: "#owners" },
        { name: "Para Inquilinos", href: "#tenants" },
        { name: "Para Agentes", href: "#agents" },
        { name: "Descargar Contrato", href: "#download" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Nuestro Propósito", href: "#purpose" },
        { name: "Centro Legal", href: "#legal" },
        { name: "Consejos Smart", href: "#blog" },
        { name: "Contacto", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidad", href: "#privacy" },
        { name: "Términos y Condiciones", href: "#terms" },
        { name: "Libro de Reclamaciones", href: "#complaints" },
        { name: "Reglas de Arbitraje", href: "#arbitration" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { name: "Centro de Ayuda", href: "#help" },
        { name: "Preguntas Frecuentes", href: "#faq" },
        { name: "Contactar Soporte", href: "#support" },
        { name: "Reportar Problema", href: "#report" },
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
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
              <span className="text-xl font-bold text-foreground">Alquila Smart</span>
            </a>
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
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-foreground mb-2">Mantente Actualizado</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe las últimas noticias y consejos de alquiler inteligente en tu bandeja de entrada.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alquila Smart. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Términos
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
