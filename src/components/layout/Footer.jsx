import React from "react";
import { siteConfig } from "../../config/site";

export function Footer() {
  return (
    <footer className="bg-primary w-full pt-section-gap pb-8 mt-auto text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary-fixed text-[32px]">directions_car</span>
            <span className="font-display-lg text-headline-sm text-secondary-fixed block">
              {siteConfig.brandName}
            </span>
          </div>
          <p className="font-body-md text-body-md text-surface-variant opacity-80">
            {siteConfig.tagline}
          </p>
        </div>
        
        <div>
          <h4 className="font-headline-sm text-headline-sm text-on-primary mb-4">Menu Cepat</h4>
          <ul className="space-y-2">
            <li><a className="font-body-md text-body-md text-surface-variant opacity-80 hover:text-secondary-fixed hover:opacity-100 transition-opacity" href="#armada">Armada</a></li>
            <li><a className="font-body-md text-body-md text-surface-variant opacity-80 hover:text-secondary-fixed hover:opacity-100 transition-opacity" href="#testimoni">Testimoni</a></li>
            <li><a className="font-body-md text-body-md text-surface-variant opacity-80 hover:text-secondary-fixed hover:opacity-100 transition-opacity" href="#faq">FAQ</a></li>
            <li><a className="font-body-md text-body-md text-surface-variant opacity-80 hover:text-secondary-fixed hover:opacity-100 transition-opacity" href="#kontak">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline-sm text-headline-sm text-on-primary mb-4">Layanan</h4>
          <ul className="space-y-2">
            <li className="font-body-md text-body-md text-surface-variant opacity-80">Sewa Mobil Harian</li>
            <li className="font-body-md text-body-md text-surface-variant opacity-80">Sewa Mobil Bulanan</li>
            <li className="font-body-md text-body-md text-surface-variant opacity-80">Rental Lepas Kunci</li>
            <li className="font-body-md text-body-md text-surface-variant opacity-80">Antar Jemput Bandara</li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline-sm text-headline-sm text-on-primary mb-4">Kontak</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 font-body-md text-body-md text-surface-variant opacity-80">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px]">call</span> 
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex items-start gap-2 font-body-md text-body-md text-surface-variant opacity-80">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px]">mail</span> 
              <span>{siteConfig.email}</span>
            </li>
            <li className="flex items-start gap-2 font-body-md text-body-md text-surface-variant opacity-80">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0">location_on</span> 
              <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-fixed hover:opacity-100 transition-opacity">
                {siteConfig.address}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="px-container-padding-mobile md:px-container-padding-desktop max-w-[1280px] mx-auto border-t border-surface-variant/20 pt-8">
        <p className="font-body-md text-body-md text-surface-variant opacity-80 text-center">
          © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
