import React, { useState } from 'react';
import { X, Sparkles, Send, Phone, Check } from 'lucide-react';
import { BUSINESS_INFO, POPULAR_CAKES } from '../data/bakeryData';

interface CustomCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomCakeModal: React.FC<CustomCakeModalProps> = ({ isOpen, onClose }) => {
  const [occasion, setOccasion] = useState('Birthday');
  const [flavor, setFlavor] = useState('Milk Badam Cake');
  const [weight, setWeight] = useState('1 kg');
  const [cakeMessage, setCakeMessage] = useState('');
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isEggless, setIsEggless] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello New Vijay Bakery,\n*Custom Cake Enquiry*\nOccasion: ${occasion}\nFlavor: ${flavor}\nWeight: ${weight}\nEggless: ${isEggless ? 'Yes (100% Eggless)' : 'Standard'}\nMessage on Cake: "${cakeMessage || 'None'}"\nRequired Date: ${date || 'Soon'}\nCustomer: ${customerName} (${customerPhone || 'No phone'})\n\n(Sent via Demo Website)`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const flavors = POPULAR_CAKES.map(c => c.name).concat(['Other / Special Combination']);
  const weights = ['0.5 kg (Demo ₹350-500)', '1 kg (Demo ₹650-950)', '1.5 kg', '2 kg Double Layer', '3 kg+ Multi-tier'];

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EADBCE] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Artisanal Custom Bakes</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">
            Enquire for Custom Cake
          </h3>
          <p className="text-xs text-[#714A2E] mt-1">
            Choose your occasion, favorite flavor, and message. We will personalize it for your celebration in Batala.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Occasion */}
          <div>
            <label className="block font-semibold text-[#4A2E1B] mb-1">
              Celebration Occasion
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Birthday', 'Anniversary', 'Kids Theme', 'Wedding', 'Festive', 'Other'].map((occ) => (
                <button
                  type="button"
                  key={occ}
                  onClick={() => setOccasion(occ)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-medium border transition-colors ${
                    occasion === occ
                      ? 'bg-amber-800 text-white border-amber-800'
                      : 'bg-[#FAF8F5] text-[#4A2E1B] border-[#DFCBB9] hover:bg-[#F3E8DF]'
                  }`}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          {/* Flavor Selection */}
          <div>
            <label className="block font-semibold text-[#4A2E1B] mb-1">
              Preferred Flavor
            </label>
            <select
              value={flavor}
              onChange={(e) => setFlavor(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600"
            >
              {flavors.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Weight Selection */}
          <div>
            <label className="block font-semibold text-[#4A2E1B] mb-1">
              Cake Weight
            </label>
            <select
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600"
            >
              {weights.map(w => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          {/* Eggless Option */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF5EE] border border-[#EADBCE]">
            <input
              type="checkbox"
              id="eggless-check"
              checked={isEggless}
              onChange={(e) => setIsEggless(e.target.checked)}
              className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
            />
            <label htmlFor="eggless-check" className="text-xs font-semibold text-[#2C1810] cursor-pointer">
              100% Pure Vegetarian / Eggless Preparation
            </label>
          </div>

          {/* Name on Cake */}
          <div>
            <label className="block font-semibold text-[#4A2E1B] mb-1">
              Message to Pipe on Cake
            </label>
            <input
              type="text"
              placeholder="e.g., Happy 25th Birthday Aman"
              value={cakeMessage}
              onChange={(e) => setCakeMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600"
            />
          </div>

          {/* Contact and Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#4A2E1B] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#4A2E1B] mb-1">
                Date Needed
              </label>
              <input
                type="text"
                placeholder="e.g., Tomorrow, 6:00 PM"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600"
              />
            </div>
          </div>

          <div className="pt-3 space-y-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Custom Cake Request via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full py-2.5 rounded-xl bg-[#FAF5EE] hover:bg-[#F3E8DF] border border-[#DFCBB9] text-[#3A2012] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Call Bakery: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
