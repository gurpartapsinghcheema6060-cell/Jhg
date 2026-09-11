import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Info } from 'lucide-react';
import { DEMO_REVIEWS, BUSINESS_INFO } from '../data/bakeryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Customer Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight mb-4">
            Loved by Batala Food Lovers
          </h2>
          
          {/* Prominent Google Rating Callout */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-2xl bg-[#FCF9F5] border border-[#EADBCE] mt-2 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="h-4 w-px bg-stone-300 hidden sm:block" />
            <span className="font-serif font-bold text-base sm:text-lg text-[#2C1810]">
              Rated around 4.6/5 on Google
            </span>
          </div>
        </div>

        {/* Demo Reviews Notice */}
        <div className="max-w-xl mx-auto mb-10 p-3 rounded-xl bg-[#FAF4EB] border border-[#E0CFBF] text-center text-xs text-[#6B4327] flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Demo Reviews Notice:</strong> The cards below illustrate typical demo customer feedback for demonstration purposes.
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_REVIEWS.map((review) => (
            <div
              key={review.id}
              id={review.id}
              className="p-6 rounded-2xl bg-[#FCF9F5] border border-[#EADBCE] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} 
                      />
                    ))}
                  </div>
                  {review.occasion && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      {review.occasion}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#3E2214] italic leading-relaxed mb-6">
                  “{review.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#EADBCE]/70">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-700 text-white text-xs font-bold flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#2C1810]">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-[#714A2E] block">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
