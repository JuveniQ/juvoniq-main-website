
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import icon_1 from "/JIQ_white_logo_no_bg.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center slide-in-left">
            <Link to="/" className="flex items-center space-x-3 group">
              <span className="text-4xl font-montserrat-bold text-primary">
                Juveni
                <span className="font-quando">Q</span>
                </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block fade-in-delay">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary active"
                      : "text-tertiary hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block fade-in-delay">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-tertiary hover:text-primary transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border bg-background/95 backdrop-blur-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-primary bg-accent"
                      : "text-tertiary hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
