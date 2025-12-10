import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logoImage from "@assets/logop.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/products", label: t("nav.gallery") },
    { path: "/infrastructure", label: t("nav.infrastructure") },
    { path: "/process", label: t("nav.process") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logoImage}
              alt="Jain Enterprises Logo"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-wide">
                JAIN ENTERPRISES
              </span>
              <span className="text-xs text-muted-foreground tracking-widest">
                Stone Exporters
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a
                data-testid={`link-nav-${link.path.replace("/", "") || "home"}`}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location === link.path
                    ? "text-[#ed5a2a]"
                    : "text-foreground hover:text-[#ed5a2a]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#ed5a2a] transition-all duration-300 ${
                    location === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#ed5a2a]" />
          ) : (
            <Menu className="h-6 w-6 text-[#ed5a2a]" />
          )}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.path.replace("/", "") || "home"}`}
                  className={`text-base font-medium transition-colors ${
                      location === link.path
                        ? "text-[#ed5a2a]"
                        : "text-foreground hover:text-[#ed5a2a]"
                    }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
