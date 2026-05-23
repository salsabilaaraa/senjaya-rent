import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { pricingData } from "../../data/pricing";
import { createWhatsAppLink } from "../../lib/whatsapp";
import clsx from "clsx";

export function Pricing() {
  const handleBooking = (planTitle) => {
    window.open(createWhatsAppLink(`Halo Senjaya Rent, saya tertarik dengan penawaran ${planTitle}.`), "_blank");
  };

  return (
    <section className="bg-surface py-section-gap px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto">
      <SectionHeader 
        title="Paket Harga" 
        subtitle="Pilih paket sewa mobil yang paling sesuai dengan durasi dan kebutuhan perjalanan Anda."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((plan) => (
          <Card 
            key={plan.id} 
            className={clsx(
              "p-8 flex flex-col h-full relative",
              plan.isPopular && "border-2 border-primary shadow-level-2 transform scale-100 md:scale-105 z-10"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-sm text-label-sm font-bold tracking-wider uppercase shadow-sm">
                Paling Diminati
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="font-headline-sm text-[24px] text-primary mb-2">{plan.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 h-12">{plan.description}</p>
              <div className="font-headline-sm text-[28px] text-primary font-bold">
                {plan.priceRange}
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.isPopular ? "primary" : "outline"} 
              className="w-full"
              onClick={() => handleBooking(plan.title)}
            >
              Pilih {plan.title}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
