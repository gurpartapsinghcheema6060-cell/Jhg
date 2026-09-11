import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface MobileFloatingBarProps {
  onOpenEnquiry: () => void;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello New Vijay Bakery, I want to enquire about cakes and bakery treats.')}`;

  return (
    <aside aria-label="Quick contact actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E0CFBF] p-2.5 px-4 shadow-2xl flex items-center gap-2.5">
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="flex-1 py-3 px-3 rounded-xl bg-amber-700 active:bg-amber-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
      >
        <Phone className="w-4 h-4" />
        <span>Call Now</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="py-3 px-3.5 rounded-xl bg-[#FAF4EB] border border-[#DFCBB9] text-[#3A2012] font-bold text-xs active:bg-[#F2E5D5]"
        title="Quick Enquiry"
      >
        Enquire
      </button>
    </aside>
  );
};
