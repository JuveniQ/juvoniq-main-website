import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import icon_1 from "/JIQ_white_logo_no_bg.png";

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
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-1 group">
              <img
                src={icon_1}
                alt="JuveniQ Logo"
                className="h-12 bg-primary transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-4xl font-montserrat-bold text-primary">
                Juveni
                <span className="font-quando ">Q</span> 
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-a px-3 py-2 text-sm font-medium transition-colors duration-300 relative
                    ${isActive(item.href)
                      ? "text-primary"
                      : "text-tertiary hover:text-primary"
                    }`}
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="btn-primary lift px-6 py-3 text-sm">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-tertiary hover:text-primary p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden overflow-hidden transition-all duration-300 ease-out">
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border bg-background/95 backdrop-blur-sm rounded-b-xl shadow-lg"
              style={{
                animation: 'fade-in .3s ease-out forwards',
                opacity: 0,
                transform: 'translateY(-8px)',
              }}
            >
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 relative
                    ${isActive(item.href)
                      ? "text-primary bg-accent/20 font-semibold"
                      : "text-tertiary hover:text-primary hover:bg-accent/10"
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-primary lift text-sm">
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