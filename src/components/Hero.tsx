import React from 'react';
import { Phone, MapPin, ArrowRight, Star, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenEnquiry }) => {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF5EE] via-[#FCF9F5] to-[#FAF4EB]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-200/25 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute -bottom-10 right-0 w-[400px] h-[300px] bg-orange-100/30 blur-[90px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust & Location Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8DF] border border-[#DFC9B7] text-[#4A2E1B] text-xs font-semibold mb-5 shadow-xs">
              <span className="flex items-center text-amber-600">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="ml-1 text-[#2C1810] font-bold">4.6/5 Google Rating</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-[#B89B84]" />
              <span className="text-[#6D4224] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600" />
                Simbel, Batala, Punjab
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C1810] tracking-tight leading-[1.15] mb-5">
              Freshly Baked.<br />
              <span className="text-amber-700 italic font-medium">Made With Love.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#593922] max-w-2xl font-normal leading-relaxed mb-8">
              Welcome to New Vijay Bakery — delicious cakes, bakery treats, snacks and fast food in Batala.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F8F1E9] border border-[#D9C4B2] text-[#3A2012] font-semibold text-base shadow-xs hover:border-amber-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F8F1E9] border border-[#D9C4B2] text-[#3A2012] font-semibold text-base shadow-xs hover:border-amber-600 transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#E8D8CA] w-full max-w-xl">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#2C1810]">100%</span>
                <span className="text-xs text-[#714A2E] font-medium">Fresh Daily Bakes</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#2C1810]">Eggless</span>
                <span className="text-xs text-[#714A2E] font-medium">Cakes & Pastries</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#2C1810]">15+ Hrs</span>
                <span className="text-xs text-[#714A2E] font-medium">7 AM – 10 PM Open</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=85" 
                  alt="New Vijay Bakery handcrafted celebration cakes and pastries" 
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24140B]/80 via-transparent to-black/10" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-600/90 text-amber-50 text-xs font-semibold uppercase tracking-wider mb-1">
                    Batala Specialty
                  </span>
                  <p className="font-serif text-xl font-bold">Artisanal Cakes & Fresh Fast Food</p>
                  <p className="text-xs text-amber-200/90">Custom designs available for birthdays, weddings & gatherings</p>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-amber-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2C1810]">Custom Cake Orders</p>
                  <p className="text-[11px] text-[#714A2E]">Order 2-4 hrs in advance</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-amber-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2C1810]">Hygienic & Pure Veg</p>
                  <p className="text-[11px] text-[#714A2E]">Prepared fresh daily</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
