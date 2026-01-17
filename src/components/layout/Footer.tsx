import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold">ClaimSecure</span>
                <span className="text-xs opacity-70 -mt-1">Estate Claims</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Helping families navigate the sensitive process of claiming deceased relatives' 
              financial assets with compassion, security, and transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "Start a Claim", href: "/register" },
                { label: "Document Checklist", href: "/documents" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Data Protection", href: "/data-protection" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4">24/7 Support</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4" />
                <span>1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                <span>support@claimsecure.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} ClaimSecure. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs opacity-70">
                <Shield className="h-4 w-4" />
                <span>256-bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-xs opacity-70">
                <Shield className="h-4 w-4" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
