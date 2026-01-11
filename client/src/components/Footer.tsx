import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-bold tracking-wide">
                JAIN ENTERPRISES
              </span>
              <span className="text-sm text-gray-400 tracking-widest">
                Stone Exporters
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting excellence in premium stone exports for over three decades.
              Your trusted partner for quality natural stones.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/products", label: "Products" },
                { path: "/infrastructure", label: "Infrastructure" },
                { path: "/process", label: "Process" },
                { path: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link key={link.path} href={link.path}>
                  <a
                    data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-primary font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+917340226251"
                data-testid="link-phone"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">+91 7340226251</span>
              </a>
              <a
                href="mailto:support@sandstoneexports.com"
                data-testid="link-email"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">support@sandstoneexports.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-sm">
                  Sandstone Exports By Jain Enterprises<br />
                  BIJOLIYA, opp. HP Petrol Pump, Berisal, Rajasthan 311602
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-400">
            © 2025 Jain Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
