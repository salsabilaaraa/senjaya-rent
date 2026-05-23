import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";

export function ServiceArea() {
  const areas = [
    "Dalam Kota",
    "Luar Kota",
    "Antar Jemput Bandara",
    "Perjalanan Bisnis",
    "Wisata Keluarga",
    "Event dan Rombongan",
    "Kebutuhan Perusahaan"
  ];

  return (
    <section className="bg-surface-container-low py-section-gap px-container-padding-mobile md:px-container-padding-desktop">
      <div className="max-w-[1280px] mx-auto text-center">
        <SectionHeader 
          title="Area Layanan" 
          subtitle="Kami melayani berbagai rute dan kebutuhan transportasi untuk perorangan maupun perusahaan."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, index) => (
            <Badge key={index} variant="primary" className="text-[16px] px-6 py-3">
              {area}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
