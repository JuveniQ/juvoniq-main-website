import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import icon_1 from "/JIQ_white_logo_no_bg.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center slide-in-left">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="logo-space group-hover:scale-105 transition-transform duration-300">
                  <img src={icon_1} />
                </div>
                <span className="text-4xl font-montserrat-bold text-white text-primary">
                  Juveni
                  <span className="font-quando">Q</span>
                </span>
              </Link>
            </div>
            <p className="text-white mb-4 max-w-md">
              Empowering African businesses with simple, impactful technology
              solutions. From web applications to AI automation, we make tech
              work for you.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/JuveniQ"
                className="text-white hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://github.com/JuveniQ/"
                className="text-white hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/juveniq"
                className="text-white hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-grey hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-grey hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-grey hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-grey hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={16} color="white" className="mr-2 text-primary mt-1" />
                <span className="text-tertiary">
                  <a
                    href="tel:+27607431268"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    +27 60 743 1268
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={16} color="white" className="mr-2 text-primary mt-1" />
                <span className="text-tertiary">
                  <a
                    href="tel:+27783322419"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    +27 78 332 2419
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} color="white" className="mr-2 text-primary mt-1" />
                <span className="text-tertiary">eMalahlani, South Africa</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} color="white" className="mr-2 text-primary mt-1" />
                <span className="text-tertiary">
                  <a
                    href="mailto:juveniq105@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    juveniq105@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tertiary/20 mt-8 pt-8 text-center">
          <p className="text-tertiary">
            © 2025 JuveniQ. All rights reserved. Built with passion in Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
