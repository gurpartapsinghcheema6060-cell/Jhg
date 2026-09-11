import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, MessageSquare, Cake, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface NavbarProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Occasions', href: '#occasions' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Notification / Demo Bar */}
      <div className="bg-[#24140B] text-[#F3E8DF] text-xs py-1.5 px-4 border-b border-[#3E2214]/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open Today: {BUSINESS_INFO.hours}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#D2BAA6]">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {BUSINESS_INFO.shortAddress}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden md:inline-block px-2 py-0.5 rounded bg-amber-950/80 border border-amber-600/40 text-[10px] text-amber-200 tracking-wide font-semibold uppercase">
              Demo Website
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FCF9F5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#EADACD]' 
            : 'bg-[#FCF9F5] py-4 border-b border-[#EADACD]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#4A2E1B] to-[#24140B] text-amber-400 flex items-center justify-center shadow-md border-2 border-amber-400/40 group-hover:scale-105 transition-transform">
              <Cake className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C1810] leading-tight">
                New Vijay Bakery
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-widest text-[#8A5A36]">
                Batala • Bakery & Fast Food
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-[#4A2E1B] hover:text-amber-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center justify-center p-2.5 rounded-full border border-[#D9C4B2] text-[#4A2E1B] hover:bg-[#F3E8DF] hover:border-amber-600 transition-colors"
              title="Call New Vijay Bakery"
            >
              <Phone className="w-4 h-4 text-amber-700" />
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium text-sm shadow-sm hover:shadow transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order / Enquire</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 rounded-full bg-amber-600 text-white font-medium text-xs shadow-sm"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#3A2012] hover:bg-[#F3E8DF] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FCF9F5] border-t border-[#EADACD] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#3A2012] hover:bg-[#F3E8DF] hover:text-amber-700 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600/60" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#EADACD] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-xl bg-amber-600 text-white font-medium text-center shadow flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order / Enquire on WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="py-2.5 px-3 rounded-xl bg-[#F0E4D7] text-[#3A2012] text-xs font-medium text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#F0E4D7] text-[#3A2012] text-xs font-medium text-center flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
