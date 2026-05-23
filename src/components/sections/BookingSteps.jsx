import React from "react";
import { SectionHeader } from "../ui/SectionHeader";

export function BookingSteps() {
  const steps = [
    {
      num: "01",
      title: "Pilih Mobil",
      desc: "Temukan kendaraan yang paling sesuai dengan kebutuhan dan budget Anda dari armada kami."
    },
    {
      num: "02",
      title: "Tentukan Jadwal",
      desc: "Pilih tanggal mulai, durasi sewa, dan jenis layanan (Lepas Kunci / Dengan Driver)."
    },
    {
      num: "03",
      title: "Konfirmasi via WhatsApp",
      desc: "Kirim rincian pesanan langsung ke admin kami melalui WhatsApp untuk konfirmasi."
    },
    {
      num: "04",
      title: "Mobil Siap Digunakan",
      desc: "Setelah verifikasi selesai, mobil siap diantar ke lokasi atau diambil di garasi kami."
    }
  ];

  return (
    <section id="cara-booking" className="bg-surface-bright py-section-gap">
      <div className="px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
        <SectionHeader 
          title="Cara Booking Mudah" 
          subtitle="Proses pemesanan sewa mobil di Senjaya Rent sangat mudah dan cepat tanpa ribet."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Line connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-outline-variant/30 z-0"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-[24px] mb-6 shadow-level-1 border-4 border-surface-bright">
                  {step.num}
                </div>
                <h3 className="font-headline-sm text-[20px] text-primary mb-3">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
