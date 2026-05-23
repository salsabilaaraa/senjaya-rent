import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { carsData } from "../../data/cars";
import { createWhatsAppLink } from "../../lib/whatsapp";
import clsx from "clsx";

const TABS = ["Semua", "City Car", "MPV", "Premium", "Rombongan"];

export function Fleet() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredCars = activeTab === "Semua" 
    ? carsData 
    : carsData.filter(car => car.category === activeTab);

  const handleBooking = (carName) => {
    window.open(createWhatsAppLink(`Halo Senjaya Rent, saya ingin booking mobil ${carName}.`), "_blank");
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <section id="armada" className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
      <SectionHeader 
        title="Armada Pilihan Kami" 
        subtitle="Dari City Car hingga armada Premium, kendaraan kami selalu dalam kondisi prima untuk melayani kebutuhan perjalanan Anda."
      />

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-6 py-2 rounded-full font-label-md text-label-md transition-all",
              activeTab === tab 
                ? "bg-primary text-on-primary shadow-md" 
                : "bg-surface-variant text-on-surface-variant hover:bg-surface-container-highest"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filteredCars.map(car => (
          <Card key={car.id} hover className="flex flex-col h-full">
            <div className="aspect-[16/9] overflow-hidden bg-surface-variant relative">
              <img 
                alt={car.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                src={car.image}
              />
              <div className="absolute top-4 right-4">
                {car.isAvailable ? (
                  <Badge variant="success">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                    Tersedia
                  </Badge>
                ) : (
                  <Badge variant="warning">Terpakai</Badge>
                )}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{car.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{car.type}</p>
              </div>
              
              <div className="flex gap-2 mb-6 flex-wrap">
                <Badge icon="airline_seat_recline_normal">{car.seats} Kursi</Badge>
                <Badge icon="settings">{car.transmission}</Badge>
              </div>
              
              <div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
                <div>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant">Mulai dari</span>
                  <div className="font-headline-sm text-[20px] text-primary font-bold">
                    {formatRupiah(car.price)}
                    <span className="font-body-md text-sm text-on-surface-variant font-normal">/hari</span>
                  </div>
                </div>
                <Button variant="primary" size="sm" onClick={() => handleBooking(car.name)}>
                  Pesan
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
