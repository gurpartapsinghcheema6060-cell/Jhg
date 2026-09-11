import React from 'react';
import { X, MessageSquare, Heart, ShieldCheck, Sparkles, Phone, Info } from 'lucide-react';
import { CakeItem, ProductItem } from '../types';
import { BUSINESS_INFO } from '../data/bakeryData';
import { DietaryBadge } from './DietaryBadge';

interface DetailModalProps {
  item: CakeItem | ProductItem | null;
  onClose: () => void;
  onEnquire: (name: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose, onEnquire }) => {
  if (!item) return null;

  const isCake = 'demoPriceHalfKg' in item;
  const cake = isCake ? (item as CakeItem) : null;
  const product = !isCake ? (item as ProductItem) : null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EADBCE] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            {cake ? (
              <span className="inline-block px-2.5 py-0.5 rounded bg-amber-600/90 text-white text-xs font-bold uppercase mb-1">
                {cake.tag}
              </span>
            ) : (
              <span className="inline-block px-2.5 py-0.5 rounded bg-amber-600/90 text-white text-xs font-bold uppercase mb-1">
                {product?.category}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {cake?.flavorProfile && (
            <p className="text-xs font-semibold text-amber-800 mb-2">
              {cake.flavorProfile}
            </p>
          )}

          {/* Dietary Indicators */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
              {item.dietary.map((tag, idx) => (
                <DietaryBadge key={idx} tag={tag} size="md" />
              ))}
            </div>
          )}

          <p className="text-sm text-[#4A2E1B] leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Pricing Highlight */}
          <div className="p-4 rounded-2xl bg-[#FCF9F5] border border-[#EADBCE] mb-6 flex items-center justify-between">
            {cake ? (
              <>
                <div>
                  <span className="text-[11px] text-[#714A2E] block">Demo Price (0.5 kg)</span>
                  <span className="font-serif text-lg font-bold text-[#2C1810]">{cake.demoPriceHalfKg}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#714A2E] block">Demo Price (1.0 kg)</span>
                  <span className="font-serif text-lg font-bold text-[#2C1810]">{cake.demoPriceOneKg}</span>
                </div>
              </>
            ) : (
              <div>
                <span className="text-[11px] text-[#714A2E] block">Demo Price</span>
                <span className="font-serif text-xl font-bold text-[#2C1810]">{product?.demoPrice}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Freshly prepared in Batala counter • Hygienic packaging</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                onClose();
                onEnquire(item.name);
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire / Order</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="py-3 px-4 rounded-xl bg-[#FAF5EE] hover:bg-[#F0E3D5] border border-[#DFCBB9] text-[#3A2012] font-semibold text-sm transition-colors flex items-center justify-center"
              title="Call Bakery"
            >
              <Phone className="w-4 h-4 text-amber-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
