import React, { useState } from "react";
import { Button } from "../ui/Button";
import { carsData } from "../../data/cars";
import { createWhatsAppLink } from "../../lib/whatsapp";

export function QuickBooking() {
  const [formData, setFormData] = useState({
    car: "",
    date: "",
    duration: "",
    service: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = () => {
    const { car, date, duration, service } = formData;
    let message = "Halo Senjaya Rent, saya ingin cek ketersediaan mobil:\n";
    if (car) message += `- Mobil: ${car}\n`;
    if (date) message += `- Tanggal Mulai: ${date}\n`;
    if (duration) message += `- Durasi: ${duration}\n`;
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
                {carsData.map(car => (
                  <option key={car.id} value={car.name}>{car.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Tanggal Mulai Sewa</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">calendar_month</span>
              <input 
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface font-body-md" 
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Durasi Sewa</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">schedule</span>
              <select 
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface font-body-md appearance-none"
              >
                <option value="">Pilih Durasi</option>
                <option value="12 Jam">12 Jam</option>
                <option value="24 Jam">24 Jam</option>
                <option value="2 Hari">2 Hari</option>
                <option value="3 Hari">3 Hari</option>
                <option value="4 Hari">4 Hari</option>
                <option value="5 Hari">5 Hari</option>
                <option value="6 Hari">6 Hari</option>
                <option value="7 Hari (1 Minggu)">7 Hari (1 Minggu)</option>
                <option value="Lebih dari 1 Minggu">Lebih dari 1 Minggu</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
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
