import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export function RentalRequirements() {
  const driverRequirements = [
    "Informasi jadwal perjalanan lengkap",
    "Detail lokasi penjemputan",
    "Tujuan perjalanan",
    "Durasi pemakaian (hari/jam)",
    "Konfirmasi pembayaran DP"
  ];

  const selfDriveRequirements = [
    "KTP asli yang masih berlaku",
    "SIM A / SIM B1 asli dan aktif",
    "Kartu Keluarga (KK) atau identitas pendukung",
    "Bersedia mengikuti proses verifikasi dokumen",
    "Meninggalkan jaminan deposit atau kendaraan roda dua (jika diperlukan)"
  ];

  return (
    <section id="syarat-sewa" className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
      <SectionHeader 
        title="Syarat Sewa Mobil" 
        subtitle="Persyaratan penyewaan di Senjaya Rent disesuaikan dengan jenis layanan yang Anda pilih."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 border-t-4 border-t-primary">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary text-[32px]">person_play</span>
            <h3 className="font-headline-sm text-[24px] text-primary">Syarat Dengan Driver</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Layanan praktis tanpa repot, cocok untuk perjalanan bisnis atau wisata santai.
          </p>
          <ul className="space-y-4">
            {driverRequirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">{req}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-8 border-t-4 border-t-secondary">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary text-[32px]">key</span>
            <h3 className="font-headline-sm text-[24px] text-primary">Syarat Lepas Kunci</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Privasi lebih terjaga, khusus penyewa yang sudah terverifikasi.
          </p>
          <ul className="space-y-4">
            {selfDriveRequirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-0.5">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">{req}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
