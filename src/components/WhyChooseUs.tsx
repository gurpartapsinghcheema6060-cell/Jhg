import React from 'react';
import { Croissant, Cake, UtensilsCrossed, Bike } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'feature-bakery',
      title: 'Fresh Bakery Products',
      description: 'Oven-fresh breads, rusks, elaichi cookies, cream rolls and buttery pastries baked daily with premium ingredients.',
      icon: Croissant,
      accent: 'from-amber-500/15 to-orange-500/10',
      iconBg: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'feature-cakes',
      title: 'Delicious Cakes',
      description: 'Handcrafted celebration cakes with rich natural flavors — from royal Rasmalai to Dutch Truffle & custom fondant tiers.',
      icon: Cake,
      accent: 'from-rose-500/15 to-amber-500/10',
      iconBg: 'bg-rose-100 text-rose-800'
    },
    {
      id: 'feature-snacks',
      title: 'Fast Food & Snacks',
      description: 'Crisp golden patties, stone-baked pizzas, loaded burgers, creamy pasta and authentic Indo-Chinese favorites.',
      icon: UtensilsCrossed,
      accent: 'from-orange-500/15 to-yellow-500/10',
      iconBg: 'bg-orange-100 text-orange-800'
    },
    {
      id: 'feature-takeaway',
      title: 'Easy Takeaway & Delivery',
      description: 'Convenient counter pickup near Salwan Dairy, quick phone booking, and prompt party order packing for any celebration.',
      icon: Bike,
      accent: 'from-emerald-500/15 to-teal-500/10',
      iconBg: 'bg-emerald-100 text-emerald-800'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1810] tracking-tight mb-4">
            Baked Fresh Daily in Batala
          </h2>
          <p className="text-base text-[#613E26] leading-relaxed">
            From early morning bakery batches to evening party treats, experience consistent taste, freshness, and warm Punjabi hospitality.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#FDFBF9] border border-[#EADBCE] hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-2.5 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#613E26] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EADBCE]/60 flex items-center text-xs font-semibold text-amber-700">
                  <span>Guaranteed Quality</span>
                  <span className="ml-auto text-amber-500">★</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
