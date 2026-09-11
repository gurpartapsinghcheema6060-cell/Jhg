import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF5EE] border-t border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Store Location</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight mb-4">
            Visit New Vijay Bakery in Batala
          </h2>
          <p className="text-base sm:text-lg text-[#613E26]">
            Conveniently situated on Gurdaspur Road, near Salwan Dairy, Simbel. Stop by for fresh bakes or quick counter takeaway.
          </p>
        </div>

        {/* Location Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-[#EADBCE] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase mb-4">
                Bakery & Fast Food
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] mb-3">
                {BUSINESS_INFO.name}
              </h3>

              {/* Exact Location Text */}
              <div className="flex items-start gap-3 text-sm text-[#4A2E1B] leading-relaxed mb-6 p-4 rounded-2xl bg-[#FCF9F5] border border-[#EFE5DA]">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-[#2C1810]">Address:</p>
                  <p className="font-mono text-xs text-amber-950 font-semibold mb-1">R6F4+M64, Gurdaspur Road,</p>
                  <p>Near Salwan Dairy, Simbel,</p>
                  <p>Batala, Punjab 143505, India</p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#52331E]">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2C1810] block">Opening Hours</span>
                    <span className="text-xs">{BUSINESS_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#52331E]">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2C1810] block">Direct Contact</span>
                    <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-xs text-amber-800 hover:underline font-medium">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#52331E]">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2C1810] block">Landmark</span>
                    <span className="text-xs">Near Salwan Dairy, Gurdaspur Road, Simbel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#EFE5DA]">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF5EE] hover:bg-[#F0E3D5] border border-[#DFCBB9] text-[#3A2012] font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Map Visual & Interactive Direction Box */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EADBCE] overflow-hidden shadow-sm flex flex-col">
            {/* Interactive Embed Map or Visual Map Tile */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-[#E9E4DC] overflow-hidden">
              {/* Google Map Embed for Batala */}
              <iframe
                title="New Vijay Bakery Location in Batala"
                src="https://maps.google.com/maps?q=New%20Vijay%20Bakery,%20Gurdaspur%20Road,%20Batala,%20Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[105%]"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-amber-200/80 max-w-[260px]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
                  <span className="font-serif font-bold text-xs text-[#2C1810]">New Vijay Bakery</span>
                </div>
                <p className="text-[11px] text-[#613E26] mt-0.5">Near Salwan Dairy, Simbel, Batala</p>
              </div>

              {/* Open in Google Maps Floating Action */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#24140B] hover:bg-black text-white text-xs font-semibold shadow-lg transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>

            {/* Bottom Tip Bar */}
            <div className="p-4 bg-[#FCF9F5] border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#613E26]">
              <span>
                🚗 <strong>Parking & Takeaway:</strong> Easy roadside access for quick cake pickups and snack takeaway.
              </span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 font-bold hover:underline shrink-0 flex items-center gap-1"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
