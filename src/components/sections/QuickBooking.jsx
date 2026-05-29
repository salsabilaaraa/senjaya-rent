import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { supabase } from "../../lib/supabase";
import { carsData } from "../../data/cars";
import { createWhatsAppLink } from "../../lib/whatsapp";

export function QuickBooking() {
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    car: "",
    dateStart: "",
    dateEnd: "",
    service: ""
  });

  useEffect(() => {
    async function loadCars() {
      try {
        const { data, error } = await supabase
          .from("cars")
          .select("name")
          .order("name", { ascending: true });
        if (error) throw error;
        setCars(data || []);
      } catch (err) {
        console.error("Error loading cars for quick booking:", err.message);
      }
    }
    loadCars();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = () => {
    const { car, dateStart, dateEnd, service } = formData;
    let message = "Halo Senjaya Rent, saya ingin cek ketersediaan mobil:\n";
    if (car) message += `- Mobil: ${car}\n`;
    
    let durationText = "";
    if (dateStart && dateEnd) {
      const start = new Date(dateStart);
      const end = new Date(dateEnd);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // inclusive
      durationText = `${diffDays} Hari (${dateStart} s/d ${dateEnd})`;
    } else if (dateStart) {
      durationText = `Mulai ${dateStart}`;
    }

    if (dateStart) message += `- Tanggal Mulai: ${dateStart}\n`;
    if (dateEnd) message += `- Tanggal Selesai: ${dateEnd}\n`;
    if (durationText) message += `- Durasi: ${durationText}\n`;
    if (service) message += `- Layanan: ${service}\n`;
    
    window.open(createWhatsAppLink(message), "_blank");
  };

  return (
    <section className="relative z-20 -mt-12 px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
      <div className="bg-surface rounded-xl p-6 shadow-level-2 border border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          <div className="w-full">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Pilih Mobil</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">directions_car</span>
              <select 
                name="car"
                value={formData.car}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface font-body-md appearance-none"
              >
                <option value="">Semua Mobil</option>
                {cars.map((car, index) => (
                  <option key={index} value={car.name}>{car.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Mulai Sewa</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">calendar_month</span>
              <input 
                type="date"
                name="dateStart"
                value={formData.dateStart}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface font-body-md" 
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Selesai Sewa</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">calendar_month</span>
              <input 
                type="date"
                name="dateEnd"
                value={formData.dateEnd}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface font-body-md" 
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Jenis Sewa</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">manage_accounts</span>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface font-body-md appearance-none"
              >
                <option value="">Pilih Layanan</option>
                <option value="Lepas Kunci">Lepas Kunci</option>
                <option value="Dengan Driver">Dengan Driver</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <Button variant="primary" className="w-full h-[50px]" onClick={handleBooking}>
              Cek Ketersediaan
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
