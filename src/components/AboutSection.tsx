import React from 'react';
import { MapPin, Heart, Clock, Award, ShieldCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF5EE]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                alt="New Vijay Bakery fresh oven-baked goods in Batala"
                className="w-full h-[400px] sm:h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700/90 text-amber-50 text-xs font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-200" />
                  <span>Simbel, Batala</span>
                </div>
                <h4 className="font-serif text-xl font-bold">Gurdaspur Road Landmark</h4>
                <p className="text-xs text-amber-100/90">Conveniently located near Salwan Dairy for quick counter takeaways</p>
              </div>
            </div>

            {/* Small Floating Pill */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#24140B] text-white p-4 rounded-2xl shadow-xl border border-amber-900/50 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-300">Open Daily</p>
                <p className="text-sm font-bold">7:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
              <span>About Our Bakery</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight leading-tight mb-6">
              Handcrafted Treats, Daily Freshness
            </h2>

            {/* Exact phrase requested by prompt */}
            <p className="text-base sm:text-lg text-[#3A2012] font-medium leading-relaxed mb-4">
              New Vijay Bakery is a local bakery and fast-food destination in Batala, Punjab, offering cakes, bakery treats, snacks and popular fast-food options.
            </p>

            {/* Mention location near Salwan Dairy on Gurdaspur Road */}
            <div className="p-4 rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-sm text-[#52331E] leading-relaxed mb-6 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <span>
                Conveniently located on <strong>Gurdaspur Road, near Salwan Dairy in Simbel, Batala</strong>, our counter is a favorite neighborhood destination for birthday cakes, teatime rusk, hot patties, pizzas, and fresh snacks.
              </span>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl border border-[#EADBCE] bg-[#FDFBF9]">
                <div className="flex items-center gap-2 font-serif font-bold text-sm text-[#2C1810] mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Pure & Hygienic</span>
                </div>
                <p className="text-xs text-[#714A2E]">
                  Strict kitchen cleanliness with pure vegetarian choices and eggless cake options.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#EADBCE] bg-[#FDFBF9]">
                <div className="flex items-center gap-2 font-serif font-bold text-sm text-[#2C1810] mb-1">
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>Celebration Experts</span>
                </div>
                <p className="text-xs text-[#714A2E]">
                  Prompt custom cake preparation for birthdays, anniversaries, and family events.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF5EE] hover:bg-[#F3E8DF] border border-[#DFCBB9] text-[#3A2012] font-semibold text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Find Near Salwan Dairy</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
