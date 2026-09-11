import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItemName?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialItemName = ''
}) => {
  const [itemName, setItemName] = useState(initialItemName);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (initialItemName) {
      setItemName(initialItemName);
    }
  }, [initialItemName]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello New Vijay Bakery,\n*Order / Enquiry Request*\nItem: ${itemName || 'General Enquiry'}\nQuantity: ${quantity}\nCustomer Name: ${customerName || 'Customer'}\nPhone: ${customerPhone || 'Not provided'}\nNotes: ${instructions || 'None'}\n\n(Sent via Demo Website)`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EADBCE] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            <span>Order / Enquire</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
            {initialItemName ? `Enquire about ${initialItemName}` : 'Order / Menu Enquiry'}
          </h3>
          <p className="text-xs text-[#714A2E] mt-1">
            Send an instant order enquiry directly to New Vijay Bakery (+91 90564 75754).
          </p>
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mb-5 p-3 rounded-xl bg-[#FAF5EE] border border-[#E2D2C3] flex items-start gap-2.5 text-xs text-[#613E26]">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Demo Notice:</strong> All product listings and pricing on this website are for demonstration. Orders are confirmed via direct call or WhatsApp.
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSend} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
              Item Name / Requirement
            </label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="e.g., Milk Badam Cake (1 kg) or 4 Paneer Patties"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Jasleen Kaur"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
                Quantity / Weight
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g., 1 kg / 4 pieces"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
              Your Phone Number
            </label>
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
              Special Instructions / Pickup Time
            </label>
            <textarea
              rows={2}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g., Please write 'Happy Birthday Simran', ready for 5 PM pickup"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 focus:bg-white"
            />
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Continue on WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full py-2.5 rounded-xl bg-[#FAF5EE] hover:bg-[#F3E8DF] border border-[#DFCBB9] text-[#3A2012] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Or Call Bakery Directly (+91 90564 75754)</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
