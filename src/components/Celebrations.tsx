import React from 'react';
import { Phone, MessageSquare, PartyPopper, Heart, Sparkles, Palette, Users, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SPECIAL_OCCASIONS } from '../data/bakeryData';

interface CelebrationsProps {
  onOpenCustomCakeModal: () => void;
  onOpenEnquiry: (occasion?: string) => void;
}

export const Celebrations: React.FC<CelebrationsProps> = ({
  onOpenCustomCakeModal,
  onOpenEnquiry
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cake':
        return PartyPopper;
      case 'Heart':
        return Heart;
      case 'Sparkles':
        return Sparkles;
      case 'Palette':
        return Palette;
      case 'Users':
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="occasions" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF4EB] via-[#FCF9F5] to-[#FAF4EB] border-t border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
            Special Occasions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight mb-4">
            Make Every Celebration Sweeter
          </h2>
          <p className="text-base sm:text-lg text-[#613E26] leading-relaxed">
            Whether it’s an intimate birthday, a grand wedding anniversary, or bulk snack boxes for family gatherings, New Vijay Bakery crafts moments of pure joy.
          </p>
        </div>

        {/* 5 Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {SPECIAL_OCCASIONS.map((occ) => {
            const IconComponent = getIcon(occ.icon);
            return (
              <div
                key={occ.id}
                id={occ.id}
                className="group relative rounded-2xl bg-white border border-[#E7D7C8] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-[#EADBCE]">
                  <img
                    src={occ.image}
                    alt={occ.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-serif font-bold text-sm leading-tight drop-shadow-xs">
                      {occ.title}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block mb-1">
                      {occ.subtitle}
                    </span>
                    <p className="text-xs text-[#52331E] leading-relaxed mb-4">
                      {occ.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(occ.title)}
                    className="w-full py-2 px-3 rounded-lg bg-[#FAF4EB] hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Enquire for {occ.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Big Call to Action Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#24140B] text-white shadow-xl text-center max-w-3xl mx-auto border border-amber-900/40">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-800/80 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            Custom Cake & Party Bookings
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Planning a celebration in Batala?
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Speak directly with our team to discuss customized designs, flavors, weights, and pickup timings. We ensure your cake arrives fresh and ready to celebrate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call New Vijay Bakery</span>
            </a>

            <button
              onClick={onOpenCustomCakeModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Submit Custom Request</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
