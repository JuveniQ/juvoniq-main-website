import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import icon_2 from "/JIQ_white_logo_no_bg.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade in when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("#footer");
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer
      id="footer"
      className="bg-muted text-secondary-foreground relative overflow-hidden"
    >
      {/* Optional: Floating depth elements (purely decorative) */}
      <div
        className="pointer-events-none absolute -top-20 -right-10 w-32 h-32
                   bg-primary/5 rounded-full blur-2xl animate-float"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 w-32 h-32
                   bg-accent/5 rounded-full blur-2xl animate-float-delay"
        aria-hidden="true"
      ></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-1 group">
                <div className="logo-space group-hover:scale-105 transition-transform duration-300">
                  <img src={icon_2} alt="JuveniQ Logo" className="h-12 bg-primary" />
                </div>
                <span className="text-4xl font-montserrat text-primary">
                  Juveni
                  <span className="font-quando text-primary">Q</span>
                </span>
              </Link>
            </div>

            <p className="text-tertiary mb-6 max-w-md mt-4 leading-relaxed">
              Empowering African businesses with simple, impactful technology
              solutions. From web applications to AI automation, we make tech
              work for you.
            </p>

            <div className="flex space-x-5 mt-2">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100066476117731" },
                { Icon: Github, href: "https://github.com/JuveniQ/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/juveniq" },
                { Icon: Instagram, href: "https://instagram.com/juveniq" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-tertiary hover:text-primary
                    transition-all duration-200
                    transform-gpu hover:scale-110
                    focus:scale-110 focus:outline-none
                  "
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="nav-a block py-1 text-tertiary hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <Phone size={16} className="mr-2 text-primary mt-1" />
                <a
                  href="tel:+27607431268"
                  className="text-tertiary hover:text-primary transition-colors whitespace-nowrap group-hover:underline"
                >
                  +27 60 743 1268
                </a>
              </li>
              <li className="flex items-start group">
                <Phone size={16} className="mr-2 text-primary mt-1" />
                <a
                  href="tel:+27783322419"
                  className="text-tertiary hover:text-primary transition-colors whitespace-nowrap group-hover:underline"
                >
                  +27 78 332 2419
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-primary mt-1" />
                <span className="text-tertiary">Emalahleni, South Africa</span>
              </li>
              <li className="flex items-start group">
                <Mail size={16} className="mr-2 text-primary mt-1" />
                <a
                  href="mailto:juveniq105@gmail.com"
                  className="text-tertiary hover:text-primary transition-colors group-hover:underline"
                >
                  juveniq105@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tertiary/20 mt-10 pt-8">
          <p className="text-tertiary text-center text-sm md:text-base">
            © 2025 JuveniQ. All rights reserved. Built with passion in Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;