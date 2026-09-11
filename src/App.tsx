import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PopularCakes } from './components/PopularCakes';
import { MenuSection } from './components/MenuSection';
import { Celebrations } from './components/Celebrations';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { CustomCakeModal } from './components/CustomCakeModal';
import { DetailModal } from './components/CakeDetailModal';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { BackToTop } from './components/BackToTop';
import { CakeItem, ProductItem } from './types';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryItemName, setEnquiryItemName] = useState('');
  const [isCustomCakeOpen, setIsCustomCakeOpen] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState<CakeItem | ProductItem | null>(null);

  const handleOpenEnquiry = (itemName?: string) => {
    setEnquiryItemName(itemName || '');
    setIsEnquiryOpen(true);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F5] text-[#2C1810] flex flex-col selection:bg-amber-200 selection:text-[#2C1810]">
      {/* Sticky Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onExploreMenu={handleExploreMenu} 
          onOpenEnquiry={() => handleOpenEnquiry()} 
        />

        {/* 4 Feature Cards */}
        <WhyChooseUs />

        {/* Dedicated Popular Cakes Section (All 13 Cakes) */}
        <PopularCakes
          onOpenEnquiry={handleOpenEnquiry}
          onOpenCustomCakeModal={() => setIsCustomCakeOpen(true)}
          onSelectCakeForDetail={(cake) => setSelectedDetailItem(cake)}
        />

        {/* 8 Category Menu Section with Search & Demo Prices */}
        <MenuSection
          onOpenEnquiry={handleOpenEnquiry}
          onSelectProductForDetail={(prod) => setSelectedDetailItem(prod)}
        />

        {/* Special Occasions Section */}
        <Celebrations
          onOpenCustomCakeModal={() => setIsCustomCakeOpen(true)}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Professional About Section */}
        <AboutSection />

        {/* Bakery Image Gallery with Lightbox */}
        <GallerySection />

        {/* Customer Reviews Section */}
        <ReviewsSection />

        {/* Location & Map Section */}
        <LocationSection />

        {/* Direct Contact & Quick WhatsApp Enquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Action Controls */}
      <OrderModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialItemName={enquiryItemName}
      />

      <CustomCakeModal
        isOpen={isCustomCakeOpen}
        onClose={() => setIsCustomCakeOpen(false)}
      />

      <DetailModal
        item={selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        onEnquire={handleOpenEnquiry}
      />

      <MobileFloatingBar onOpenEnquiry={() => handleOpenEnquiry()} />
      
      <BackToTop />
    </div>
  );
}
