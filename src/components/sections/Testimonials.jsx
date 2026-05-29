import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { testimonialsData } from "../../data/testimonials";

export function Testimonials() {
  return (
    <section id="testimoni" className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
      <SectionHeader 
        title="Apa Kata Mereka?" 
        subtitle="Pengalaman pelanggan yang telah menggunakan layanan rental mobil dari Senjaya Rent."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testi) => (
          <Card key={testi.id} className="p-6 flex flex-col">
            <div className="flex gap-1 mb-4 text-[#FFD600] drop-shadow-[0_0_4px_rgba(255,214,0,0.6)]">
              {[...Array(testi.rating)].map((_, i) => (
                <span key={i} className="material-symbols-outlined" data-weight="fill">star</span>
              ))}
            </div>
            
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-6 flex-grow">
              "{testi.content}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-headline-sm text-primary">
                {testi.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-primary">{testi.name}</h4>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{testi.role}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
