import React from "react";
import { SectionHeader } from "../ui/SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
        <SectionHeader 
          title="Mengapa Memilih Senjaya Rent?" 
          subtitle="Layanan premium dengan standar kebersihan dan keamanan tertinggi untuk ketenangan pikiran Anda."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-level-1 flex flex-col justify-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4" data-weight="fill">verified</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Armada Terawat Berkala</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Setiap kendaraan melewati inspeksi ketat sebelum diserahkan kepada pelanggan. Kebersihan interior dan eksterior dijamin 100%.</p>
          </div>
          
          <div className="bg-primary rounded-2xl p-8 shadow-level-1 text-on-primary flex flex-col justify-center">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4">support_agent</span>
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">Layanan Fast Response</h3>
            <p className="font-body-md text-body-md text-primary-fixed-dim">Tim dukungan kami siap membantu Anda kapan saja untuk memastikan kelancaran perjalanan.</p>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-level-1 flex flex-col justify-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">payments</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Harga Transparan</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Tanpa biaya tersembunyi. Anda bisa memilih paket lepas kunci atau dengan driver sesuai budget.</p>
          </div>
          
          <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-level-1 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">person_play</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Driver Profesional</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Pilihan layanan dengan supir berpengalaman, ramah, dan menguasai rute dengan baik untuk perjalanan yang efisien.</p>
            </div>
            <div className="w-32 h-32 rounded-full bg-surface-variant flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary">local_taxi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
