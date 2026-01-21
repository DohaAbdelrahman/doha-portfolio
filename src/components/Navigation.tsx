import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Experience",
    href: "#experience"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Certifications",
    href: "#certifications"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
    } else if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-text bg-clip-text text-[#977359]">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                {item.name}
              </button>)}
            <Button size="sm" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300" onClick={() => handleNavigation("#contact")}>
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.href)} className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors duration-300">
                  {item.name}
                </button>)}
              <div className="pt-2">
                <Button size="sm" className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300" onClick={() => handleNavigation("#contact")}>
                  Hire Me
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;