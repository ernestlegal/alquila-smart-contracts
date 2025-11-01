import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Owners", href: "#owners" },
    { name: "Tenants", href: "#tenants" },
    { name: "Publish", href: "#publish" },
    { name: "Download", href: "#download" },
    { name: "Our Purpose", href: "#purpose" },
    { name: "Help", href: "#help" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <span className="text-xl font-bold text-foreground">Alquila Smart</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="ml-4">
              Post for Free
            </Button>
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full">Post for Free</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
