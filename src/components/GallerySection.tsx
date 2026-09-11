import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Cakes', 'Pastries', 'Pizza', 'Bakery', 'Snacks', 'Shop'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(i => i.id === item.id);
    setActiveLightboxIndex(idx !== -1 ? idx : 0);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF5EE] border-t border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight mb-4">
            Our Bakery Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#613E26] leading-relaxed">
            Take a look at our freshly baked cakes, flaky bakery treats, golden pizzas, savory snacks, and welcoming counter display.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-white text-[#4A2E1B] border border-[#E0CFBF] hover:bg-[#F2E5D5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-xl border border-[#EADBCE] cursor-pointer aspect-4/3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-bold text-amber-950 uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-serif font-bold text-sm sm:text-base leading-snug drop-shadow-xs">
                  {item.title}
                </h4>
                <p className="text-[11px] text-amber-200/90 line-clamp-1">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#1C120C] rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-amber-950/80 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-700 text-amber-100 text-xs font-semibold">
                  {activeItem.category}
                </span>
                <span className="font-serif font-bold text-base sm:text-lg text-amber-100">
                  {activeItem.title}
                </span>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container with Prev / Next */}
            <div className="relative bg-black flex items-center justify-center h-[55vh] sm:h-[65vh] overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer with Caption */}
            <div className="p-4 bg-[#24140B] text-amber-100/90 text-sm flex items-center justify-between">
              <p className="line-clamp-2">{activeItem.caption}</p>
              <span className="text-xs text-amber-400 font-mono ml-4 shrink-0">
                {(activeLightboxIndex ?? 0) + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
