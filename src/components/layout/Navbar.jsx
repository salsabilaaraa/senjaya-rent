import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { createWhatsAppLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import logoImg from "../../assets/logo.png";

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
      <div className="flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop h-20 max-w-[1280px] mx-auto w-full">
        {/* Left Column (Logo on mobile, Logo on desktop aligned to the far-left) */}
        <div className="flex justify-start items-center lg:hidden">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity duration-300 shrink-0">
            <img src={logoImg} alt={`${siteConfig.brandName} Logo`} className="h-12 w-auto object-contain" />
          </a>
        </div>
        <div className="hidden lg:flex justify-start items-center lg:w-[220px] shrink-0">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity duration-300 shrink-0">
            <img src={logoImg} alt={`${siteConfig.brandName} Logo`} className="h-12 md:h-14 w-auto object-contain shrink-0" />
          </a>
        </div>

        {/* Center Column (Navigation Menu centered in the absolute center of desktop viewport) */}
        <div className="hidden lg:flex justify-center items-center flex-grow">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface font-label-md text-label-md hover:text-secondary transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Column (WhatsApp Button on desktop, Toggle on mobile) */}
        <div className="flex justify-end items-center lg:w-[220px] shrink-0">
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
