import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { createWhatsAppLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Armada", href: "#armada" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#kontak" },
  ];

  const handleBooking = () => {
    window.open(createWhatsAppLink("Halo Senjaya Rent, saya ingin bertanya tentang layanan sewa mobil."), "_blank");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface shadow-sm" : "bg-surface/90 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop h-20 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-[32px]">directions_car</span>
          <span className="font-display-lg text-headline-sm text-primary tracking-tight">
            {siteConfig.brandName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface font-label-md text-label-md hover:text-secondary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="secondary" onClick={handleBooking}>
            Booking via WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-surface shadow-level-2 border-t border-outline-variant/20 flex flex-col p-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface font-label-md text-body-md py-2 border-b border-outline-variant/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <Button variant="secondary" className="w-full" onClick={handleBooking}>
            Booking via WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
}
