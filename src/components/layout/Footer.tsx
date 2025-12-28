import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Container from "../shared/Container";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src="/logo.svg" alt="CodeFoTech" className="h-8 mb-4" />
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Building scalable digital products for enterprises and
              fast-growing companies worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/codefotech"
                target="_blank"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/codefotech"
                target="_blank"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@codefotech.com"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services#offshore-packages"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Offshore Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Spain Office */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="/contact/spain.svg"
                      alt="Spain"
                      className="h-5 w-5 object-contain"
                    />
                    <p className="font-medium text-foreground text-sm">
                      Spain Office (HQ)
                    </p>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Calle Ejemplo 123</li>
                    <li>Piso 4B</li>
                    <li>29099 Málaga</li>
                    <li>Spain</li>
                    <li className="pt-1">
                      <a
                        href="https://wa.me/240555626447"
                        className="hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +240 555626447 (WhatsApp)
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* Bangladesh Office */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="/contact/bangladesh.svg"
                      alt="Bangladesh"
                      className="h-5 w-5 object-contain"
                    />
                    <p className="font-medium text-foreground text-sm">
                      Bangladesh Office
                    </p>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>62–63, Sana Kalyan Business Center</li>
                    <li>(8th Floor)</li>
                    <li>M–701/B, Motijheel B/A</li>
                    <li>Dhaka–1000, Bangladesh</li>
                    <li className="pt-1">
                      <a
                        href="tel:+8801961185367"
                        className="hover:text-foreground transition-colors"
                      >
                        +8801961185367
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Email */}
              <div className="pt-2">
                <a
                  href="mailto:info@codefotech.com"
                  className="hover:text-foreground transition-colors text-sm"
                >
                  info@codefotech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} CodeFoTech. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
