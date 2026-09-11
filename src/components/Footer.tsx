import React from 'react';
import { Cake, Phone, Clock, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24140B] text-[#F3E8DF] pt-16 pb-12 border-t border-[#3A2012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3E2415]">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-md">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </h3>
                <span className="text-xs text-amber-300/80 font-medium tracking-wide uppercase">
                  Batala, Punjab
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D2BAA6] leading-relaxed">
              Freshly baked celebration cakes, flaky bakery snacks, artisanal breads, and fast-food favorites prepared daily in Simbel, Batala.
            </p>

            <div className="inline-block px-2.5 py-1 rounded bg-amber-950/80 border border-amber-600/40 text-[11px] text-amber-200 font-semibold">
              Demo Website
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 border-l-2 border-amber-600 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D2BAA6]">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-amber-300 transition-colors">Cakes</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 border-l-2 border-amber-600 pl-2.5">
              Contact & Hours
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#D2BAA6]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-white font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs">
                  Near Salwan Dairy, Gurdaspur Road, Simbel, Batala, Punjab 143505
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map Link */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 border-l-2 border-amber-600 pl-2.5">
              Find Our Counter
            </h4>
            <p className="text-xs text-[#D2BAA6] mb-4 leading-relaxed">
              Drop in during our daily hours 7:00 AM – 10:00 PM for freshly unpacked bakery specialties.
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A88B77]">
          <p>© 2026 New Vijay Bakery. Demo Website.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
