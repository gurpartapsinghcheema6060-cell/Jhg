import React, { useState } from 'react';
import { Search, Utensils, MessageSquare, Info, Sparkles, Filter } from 'lucide-react';
import { MENU_PRODUCTS } from '../data/bakeryData';
import { MenuCategory, ProductItem } from '../types';
import { DietaryBadge } from './DietaryBadge';

interface MenuSectionProps {
  onOpenEnquiry: (productName?: string) => void;
  onSelectProductForDetail: (product: ProductItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenEnquiry,
  onSelectProductForDetail
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: MenuCategory[] = [
    'All',
    'Cakes',
    'Bakery',
    'Pizza',
    'Burgers',
    'Sandwiches',
    'Pasta',
    'Chinese',
    'Beverages'
  ];

  const filteredProducts = MENU_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 sm:py-24 bg-white border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Delicious Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight mb-4">
            Explore Our Full Menu
          </h2>
          <p className="text-base sm:text-lg text-[#613E26] leading-relaxed">
            From artisanal daily bakery bakes to hot savory pizzas, burgers, pasta, and Chinese treats — prepared fresh in Batala.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8C603D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search pizza, burger, cake..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAF5EE] border border-[#E0CFBF] text-sm text-[#2C1810] placeholder:text-[#8C603D] focus:outline-hidden focus:border-amber-600 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C603D] hover:text-[#2C1810]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Demo Pricing Notice Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF2EB] border border-[#E6D4C3] text-xs text-[#6B4327]">
            <Info className="w-3.5 h-3.5 text-amber-700" />
            <span>All listed prices are demo prices for presentation.</span>
          </div>

        </div>

        {/* 8 Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-[#FAF5EE] text-[#4A2E1B] border border-[#E0CFBF] hover:bg-[#F2E5D5]'
              }`}
            >
              <span>{cat}</span>
              {cat !== 'All' && (
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat ? 'bg-amber-900/60 text-amber-200' : 'bg-white text-stone-600'}`}>
                  {MENU_PRODUCTS.filter(p => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF5EE] rounded-2xl border border-dashed border-[#DFC9B7]">
            <Utensils className="w-10 h-10 text-[#8C603D] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-1">No items found</h3>
            <p className="text-sm text-[#714A2E] mb-4">Try searching for another bakery treat or clear your filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-full bg-amber-700 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="group rounded-2xl bg-white border border-[#EADBCE] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image */}
                <div 
                  className="relative h-48 w-full overflow-hidden bg-[#F2E8DC] cursor-pointer"
                  onClick={() => onSelectProductForDetail(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Veg Indicator */}
                  <div className="absolute top-3 left-3 p-1 rounded bg-white/95 backdrop-blur-xs shadow-xs border border-stone-200" title="100% Vegetarian">
                    <div className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    </div>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-amber-700 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {product.badge}
                    </span>
                  )}

                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => onSelectProductForDetail(product)}
                      className="font-serif text-lg font-bold text-[#2C1810] mb-1 group-hover:text-amber-800 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    {/* Dietary Badges */}
                    {product.dietary && product.dietary.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                        {product.dietary.map((tag, idx) => (
                          <DietaryBadge key={idx} tag={tag} size="sm" />
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-[#613E26] leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Demo Price and Order/Enquire CTA */}
                  <div className="pt-3 border-t border-[#EFE5DA] flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-[#714A2E] font-medium block">Demo Price</span>
                      <span className="font-serif font-bold text-sm sm:text-base text-[#2C1810]">
                        {product.demoPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenEnquiry(product.name)}
                      className="px-3.5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order / Enquire</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
