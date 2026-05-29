import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { siteConfig } from "../../config/site";
import { createWhatsAppLink } from "../../lib/whatsapp";
import { carsData } from "../../data/cars";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    waNumber: "",
    startDate: "",
    duration: "",
    car: "",
    serviceType: "",
    destination: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let textMessage = `*Halo Senjaya Rent, saya ingin memesan mobil:*\n\n`;
    textMessage += `Nama: ${formData.name}\n`;
    textMessage += `No WA: ${formData.waNumber}\n`;
    textMessage += `Mulai Sewa: ${formData.startDate}\n`;
    textMessage += `Durasi: ${formData.duration}\n`;
    textMessage += `Mobil Pilihan: ${formData.car}\n`;
    textMessage += `Layanan: ${formData.serviceType}\n`;
    textMessage += `Tujuan: ${formData.destination}\n`;
    if (formData.message) {
      textMessage += `Pesan Tambahan: ${formData.message}\n`;
    }
    
    window.open(createWhatsAppLink(textMessage), "_blank");
  };

  return (
    <section id="kontak" className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div>
          <SectionHeader 
            title="Siap Memulai Perjalanan Anda?" 
            subtitle="Pesan sekarang dan nikmati layanan rental mobil terbaik dengan armada terawat."
            align="left"
            className="mb-8"
          />
          
          <div className="space-y-6 mb-8">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary text-[24px] mt-1">call</span>
              <div>
                <h4 className="font-label-md text-label-md text-primary">WhatsApp / Telepon</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{siteConfig.phone}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary text-[24px] mt-1">location_on</span>
              <div>
                <h4 className="font-label-md text-label-md text-primary">Alamat Kantor</h4>
                <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all block mt-1">
                  {siteConfig.address}
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary text-[24px] mt-1">schedule</span>
              <div>
                <h4 className="font-label-md text-label-md text-primary">Jam Operasional</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{siteConfig.operatingHours}</p>
              </div>
            </div>
          </div>

          <Button 
            variant="accent" 
            size="lg" 
            className="w-full sm:w-auto flex gap-2"
            onClick={() => window.open(createWhatsAppLink("Halo Senjaya Rent"), "_blank")}
          >
            <svg fill="currentColor" height="20" viewBox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
            Booking via WhatsApp
          </Button>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-level-2 border border-outline-variant/30">
          <h3 className="font-headline-sm text-[24px] text-primary mb-6">Formulir Booking</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Nama Lengkap</label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Nomor WhatsApp</label>
                <input required name="waNumber" value={formData.waNumber} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Pilih Mobil</label>
                <select required name="car" value={formData.car} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                  <option value="">Pilih Armada</option>
                  {carsData.map(car => <option key={car.id} value={car.name}>{car.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Jenis Layanan</label>
                <select required name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                  <option value="">Pilih Layanan</option>
                  <option value="Lepas Kunci">Lepas Kunci</option>
                  <option value="Dengan Driver">Dengan Driver</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Tanggal Mulai</label>
                <input required name="startDate" value={formData.startDate} onChange={handleChange} type="date" className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Durasi Sewa</label>
                <div className="relative">
                  <select 
                    required 
                    name="duration" 
                    value={formData.duration} 
                    onChange={handleChange} 
                    className="w-full px-4 pr-10 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
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
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Tujuan Perjalanan</label>
              <input required name="destination" value={formData.destination} onChange={handleChange} type="text" placeholder="Misal: Dalam Kota, Luar Kota" className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Pesan Tambahan (Opsional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
            </div>

            <Button variant="primary" className="w-full mt-4" type="submit">
              Kirim via WhatsApp
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}
