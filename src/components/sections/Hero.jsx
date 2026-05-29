import React from "react";
import { Button } from "../ui/Button";
import { createWhatsAppLink } from "../../lib/whatsapp";

export function Hero() {
  const handleBooking = () => {
    window.open(createWhatsAppLink("Halo Senjaya Rent, saya ingin pesan mobil sekarang."), "_blank");
  };

  return (
    <section className="relative bg-primary overflow-hidden min-h-[600px] flex items-center pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
        <img 
          alt="Luxury Car Hero" 
          className="w-full h-full object-cover object-center opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAQA9CDXFlIrJoJBD3NWkhzPtIXbxuOH1ezo3F73ZAqI_qrI1DtIReVX_yNaT7gq7HI6DcQPN2wQfW4LY_CWVEzKyFWknan9mVX2Uz7H7b1EkNINSdnTPCVQJJioI_poHcpXKXkrThMmerpFieYdyewHk80R8kjauo4qN50EA62LMXIvgbnh_fJl2FXQoRWrly5yuc8vchOeQoN3yaX9i6vMU5gVVA4ZMcVUzUeVnjxeLwKYwWXQvdnRiXpK8xxPZdONIq3RQVpw" 
        />
      </div>
      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="max-w-2xl">
          <span className="text-secondary-fixed font-label-md text-label-md uppercase tracking-widest mb-4 block">
            Premium Executive Transport
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
            Rental Mobil Terpercaya untuk Setiap Perjalanan Anda.
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">
            Senjaya Rent menyediakan layanan sewa mobil harian, mingguan, dan bulanan dengan pilihan lepas kunci atau bersama driver profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button variant="secondary" size="lg" onClick={handleBooking}>
              Pesan Sekarang via WhatsApp
            </Button>
          </div>
          
          {/* Stacked vertically on mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
            <div className="flex items-center gap-3 text-on-primary font-label-sm">
              <span className="material-symbols-outlined text-secondary-fixed text-[22px]" data-weight="fill">verified</span>
              Unit Bersih & Terawat
            </div>
            <div className="flex items-center gap-3 text-on-primary font-label-sm">
              <span className="material-symbols-outlined text-secondary-fixed text-[22px]" data-weight="fill">payments</span>
              Harga Transparan
            </div>
            <div className="flex items-center gap-3 text-on-primary font-label-sm">
              <span className="material-symbols-outlined text-secondary-fixed text-[22px]" data-weight="fill">person_play</span>
              Driver Profesional
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
