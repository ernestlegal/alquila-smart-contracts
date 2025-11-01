import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Platform",
      links: [
        { name: "For Owners", href: "#owners" },
        { name: "For Tenants", href: "#tenants" },
        { name: "For Agents", href: "#agents" },
        { name: "Download Contract", href: "#download" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Our Purpose", href: "#purpose" },
        { name: "Legal Center", href: "#legal" },
        { name: "Smart Tips", href: "#blog" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms & Conditions", href: "#terms" },
        { name: "Complaints Book", href: "#complaints" },
        { name: "Arbitration Rules", href: "#arbitration" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "FAQs", href: "#faq" },
        { name: "Contact Support", href: "#support" },
        { name: "Report Issue", href: "#report" },
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
              Rent with confidence, technology, and fairness.
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
            <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news and smart rental tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
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
              © {new Date().getFullYear()} Alquila Smart. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms
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
