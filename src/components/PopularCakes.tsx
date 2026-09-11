import React, { useState } from 'react';
import { Sparkles, MessageSquare, Check, Eye, Heart, Info } from 'lucide-react';
import { POPULAR_CAKES } from '../data/bakeryData';
import { CakeItem } from '../types';
import { DietaryBadge } from './DietaryBadge';

interface PopularCakesProps {
  onOpenEnquiry: (cakeName?: string) => void;
  onOpenCustomCakeModal: () => void;
  onSelectCakeForDetail: (cake: CakeItem) => void;
}

export const PopularCakes: React.FC<PopularCakesProps> = ({
  onOpenEnquiry,
  onOpenCustomCakeModal,
  onSelectCakeForDetail
}) => {
  const [filterTag, setFilterTag] = useState<string>('All');
  const [favoriteCakes, setFavoriteCakes] = useState<string[]>([]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteCakes(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const tags = ['All', 'Punjabi Special', 'Favorite', 'Classic', 'Premium', 'Top Pick'];

  const filteredCakes = filterTag === 'All' 
    ? POPULAR_CAKES 
    : POPULAR_CAKES.filter(cake => cake.tag === filterTag || (filterTag === 'Favorite' && cake.isBestseller));

  return (
    <section id="cakes" className="py-16 sm:py-24 bg-[#FCF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Handcrafted Confections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight">
              Our Popular Cakes
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#613E26]">
              Made fresh to order with pure whipped creams, rich chocolate ganaches, and exotic fruit reductions. 100% eggless available on request.
            </p>
          </div>

          {/* Enquire for Custom Cake Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenCustomCakeModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Enquire for Custom Cake</span>
            </button>
          </div>
        </div>

        {/* Demo Price Notice Banner */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#F4EDE5] border border-[#DFCBB9] flex items-center gap-2 text-xs sm:text-sm text-[#52331E]">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Demo Pricing:</strong> Listed prices are sample estimates for demo demonstration. Contact bakery directly for live custom quote, weight, and designs.
          </span>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filterTag === tag
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-white text-[#4A2E1B] border border-[#E3D3C4] hover:bg-[#F7EFE7]'
              }`}
            >
              {tag === 'All' ? `All 13 Cakes` : tag}
            </button>
          ))}
        </div>

        {/* Cakes Grid (All 13 Cakes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCakes.map((cake) => {
            const isFav = favoriteCakes.includes(cake.id);
            return (
              <div
                key={cake.id}
                id={cake.id}
                className="group relative rounded-2xl bg-white border border-[#EADCCE] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Wrap */}
                <div 
                  className="relative h-56 w-full overflow-hidden bg-[#F2E8DC] cursor-pointer"
                  onClick={() => onSelectCakeForDetail(cake)}
                >
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[11px] font-bold text-amber-900 shadow-xs border border-amber-200">
                    {cake.tag}
                  </span>

                  {/* Eggless badge */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-800/90 text-white text-[10px] font-semibold tracking-wide flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    Eggless
                  </span>

                  {/* Favorite button */}
                  <button
                    onClick={(e) => toggleFavorite(cake.id, e)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-[#4A2E1B] hover:text-rose-600 shadow-xs transition-colors"
                    aria-label="Save as favorite"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Quick Detail View on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-[#2C1810] flex items-center gap-1.5 shadow">
                      <Eye className="w-3.5 h-3.5 text-amber-700" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => onSelectCakeForDetail(cake)}
                      className="font-serif text-lg sm:text-xl font-bold text-[#2C1810] mb-1.5 group-hover:text-amber-800 transition-colors cursor-pointer"
                    >
                      {cake.name}
                    </h3>
                    
                    <p className="text-xs text-[#7A4B29] font-medium mb-2.5 line-clamp-1">
                      {cake.flavorProfile}
                    </p>

                    {/* Dietary Badges */}
                    {cake.dietary && cake.dietary.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        {cake.dietary.map((tag, idx) => (
                          <DietaryBadge key={idx} tag={tag} size="sm" />
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-[#52331E] leading-relaxed mb-4 line-clamp-2">
                      {cake.description}
                    </p>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-3 border-t border-[#EFE5DA]">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[11px] text-[#714A2E] block">Demo Price (0.5 kg)</span>
                        <span className="font-serif font-bold text-base text-[#2C1810]">
                          {cake.demoPriceHalfKg}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-[#714A2E] block">1 kg</span>
                        <span className="text-xs font-semibold text-[#52331E]">
                          {cake.demoPriceOneKg}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenEnquiry(cake.name)}
                      className="w-full py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 active:scale-98"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
                      <span>Enquire / Order Cake</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Custom Cake Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3A2012] via-[#4A2E1B] to-[#2C1810] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block mb-1">
              Custom Designed Creations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Have a special photo or design in mind?
            </h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              We specialize in photo cakes, multi-tier wedding cakes, doll cakes, and theme cakes for kids. Share your idea with New Vijay Bakery on WhatsApp or phone.
            </p>
          </div>
          <button
            onClick={onOpenCustomCakeModal}
            className="shrink-0 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Design My Custom Cake
          </button>
        </div>

      </div>
    </section>
  );
};
