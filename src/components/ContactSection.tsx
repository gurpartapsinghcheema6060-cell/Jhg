import React, { useState } from 'react';
import { Phone, Clock, MessageSquare, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('Birthday / Celebration Cake');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Correctly formatted WhatsApp link with international country code for India (+91)
  const getWhatsAppLink = (customText?: string) => {
    const text = customText || `Hello New Vijay Bakery, I would like to enquire about your cakes and snacks.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Build the pre-composed WhatsApp message
    const waMessage = `Hello New Vijay Bakery,\nName: ${name}\nPhone: ${phone || 'Not provided'}\nRequirement: ${enquiryType}\nDetails: ${message || 'Please send menu / pricing details'}`;
    
    // Open WhatsApp in new tab
    window.open(getWhatsAppLink(waMessage), '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight mb-3">
            Contact New Vijay Bakery
          </h2>
          <p className="text-base sm:text-lg text-[#613E26]">
            Have a question, custom cake request, or bulk party order? Call us, text us on WhatsApp, or stop by in Batala!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Business Details Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FCF9F5] border border-[#EADBCE] shadow-xs">
              <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-1">
                Batala Bakery
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] mb-1">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-sm font-medium text-[#7A4D2D] mb-6">
                {BUSINESS_INFO.city}
              </p>

              <div className="space-y-4 text-sm text-[#4A2E1B] mb-8">
                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#714A2E] block">Phone Number</span>
                    <a 
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="font-serif text-lg font-bold text-[#2C1810] hover:text-amber-700 transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#714A2E] block">Opening Hours</span>
                    <span className="font-semibold text-[#2C1810] text-sm">
                      {BUSINESS_INFO.hours}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#714A2E] block">Location</span>
                    <span className="font-semibold text-[#2C1810] text-sm leading-tight block">
                      Near Salwan Dairy, Gurdaspur Road, Simbel, Batala
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Prominent Required Action Buttons */}
              <div className="space-y-3">
                {/* 1. Call Now */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now (+91 90564 75754)</span>
                </a>

                {/* 2. WhatsApp Button */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* 3. Get Directions */}
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#F5ECE2] border border-[#DFCBB9] text-[#3A2012] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Quick Enquiry & Custom Order Form */}
          <div className="lg:col-span-7 bg-[#FCF9F5] p-7 sm:p-9 rounded-3xl border border-[#EADBCE] shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
              Send an Enquiry / Pre-Order
            </h3>
            <p className="text-xs sm:text-sm text-[#613E26] mb-6">
              Fill out this quick form to directly message New Vijay Bakery with your party order or cake inquiry.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-emerald-950 mb-1">
                  Enquiry Transferred to WhatsApp
                </h4>
                <p className="text-xs text-emerald-800 mb-4">
                  Your details were composed into a WhatsApp chat. If it didn't open automatically, click the button below.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-700 text-white font-bold text-xs"
                  >
                    Open WhatsApp Chat
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2.5 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-semibold"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Harpreet Singh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                    What are you looking for?
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 transition-all"
                  >
                    <option>Birthday / Celebration Cake</option>
                    <option>Custom Fondant / Photo Cake</option>
                    <option>Party Snacks & Patty Order</option>
                    <option>Pizza, Burger & Fast Food Takeaway</option>
                    <option>Daily Fresh Bakery & Rusks</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                    Message / Flavor & Weight Preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us flavor (e.g. Milk Badam, Truffle, Pineapple), preferred weight (0.5kg, 1kg), date/time needed..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFCBB9] text-sm text-[#2C1810] focus:outline-hidden focus:border-amber-600 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Order Enquiry via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-[#7A4D2D] mt-2">
                    Directly connects to New Vijay Bakery WhatsApp (+91 90564 75754) with your inquiry details.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
