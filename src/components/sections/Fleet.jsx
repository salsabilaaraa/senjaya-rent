import React, { useState, useEffect } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { supabase } from "../../lib/supabase";
import { createWhatsAppLink } from "../../lib/whatsapp";
import clsx from "clsx";

const TABS = ["Semua", "City Car", "MPV", "Premium", "Rombongan"];

export function Fleet() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCars() {
      try {
        const { data, error } = await supabase
          .from("cars")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        setCars(data || []);
      } catch (err) {
        console.error("Error loading cars from Supabase:", err.message);
      } finally {
        setLoading(false);
      }
    }
    loadCars();
  }, []);

  const filteredCars = activeTab === "Semua" 
    ? cars 
    : cars.filter(car => car.category === activeTab);

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
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-6 py-2.5 rounded-full font-label-md text-label-md transition-all duration-300 cursor-pointer select-none hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95",
              activeTab === tab 
                ? "bg-primary text-on-primary shadow-md" 
                : "bg-surface-variant text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="py-20 text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-on-surface-variant/80 text-sm font-semibold">Menghubungkan ke database...</p>
        </div>
      ) : filteredCars.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-outline-variant/30 rounded-2xl bg-surface-container-low/50">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant/50 mb-3">directions_car</span>
          <p className="text-on-surface-variant font-medium text-sm">Tidak ada mobil yang tersedia untuk kategori ini saat ini.</p>
        </div>
      ) : (
        <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide snap-x snap-mandatory -mx-container-padding-mobile px-container-padding-mobile md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-gutter md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {filteredCars.map(car => (
            <div key={car.id} className="w-[82vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none md:shrink">
              <Card hover className="flex flex-col h-full">
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
                      <Badge variant="warning">Tidak Tersedia</Badge>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{car.name}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{car.type}</p>
                  </div>
                  
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <Badge icon="airline_seat_recline_normal">{car.seats} Kursi</Badge>
                    <Badge icon="settings">{car.transmission}</Badge>
                  </div>

                  {/* Detailed Specs */}
                  {car.specs && (
                    <div className="space-y-2 mb-6 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/10 flex-grow">
                      <div className="flex items-start gap-2 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5" data-weight="fill">bolt</span>
                        <div className="leading-tight">
                          <span className="block font-semibold text-on-surface text-[11px]">Mesin</span>
                          <span className="text-[10px] text-on-surface-variant">{car.specs.mesin}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5" data-weight="fill">tv</span>
                        <div className="leading-tight">
                          <span className="block font-semibold text-on-surface text-[11px]">Head Unit</span>
                          <span className="text-[10px] text-on-surface-variant">{car.specs.headUnit}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-on-surface-variant">Harga Sewa</span>
                      <span className="text-sm text-primary font-bold">
                        <strong className="text-[18px]">{formatRupiah(car.price || car.price24h)}</strong> <span className="text-[10px] text-on-surface-variant font-medium">/ Hari</span>
                      </span>
                    </div>
                    <Button variant="primary" size="sm" onClick={() => handleBooking(car.name)}>
                      Pesan
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
