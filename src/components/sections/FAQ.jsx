import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { faqData } from "../../data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-surface-bright py-section-gap px-container-padding-mobile md:px-container-padding-desktop">
      <div className="max-w-[800px] mx-auto">
        <SectionHeader 
          title="Tanya Jawab (FAQ)" 
          subtitle="Pertanyaan yang sering diajukan seputar layanan sewa mobil di Senjaya Rent."
        />

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`bg-surface rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                openIndex === index ? 'ring-1 ring-primary/20 shadow-md' : 'border border-outline-variant/30'
              }`}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-headline-sm text-[18px] text-primary">{item.question}</span>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-4 pt-0 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant/10 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
