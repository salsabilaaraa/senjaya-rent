import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { servicesData } from "../../data/services";

export function Services() {
  return (
    <section id="layanan" className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
      <SectionHeader 
        title="Layanan Rental Mobil Kami" 
        subtitle="Berbagai pilihan layanan sewa mobil yang disesuaikan dengan kebutuhan mobilitas Anda."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <Card key={service.id} hover className="p-6 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
            </div>
            <h3 className="font-headline-sm text-[20px] text-primary mb-3">{service.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{service.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
