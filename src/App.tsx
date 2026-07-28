// cSpell:ignore Shallom shallom Jollof Ofada Ayamase Asun
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { InquiryDrawer } from './components/InquiryDrawer';
import { BookingModal } from './components/BookingModal';
import { SearchModal } from './components/SearchModal';
import { DishModal } from './components/DishModal';
import { ServiceModal } from './components/ServiceModal';
import { BlogModal } from './components/BlogModal';
import { LightboxModal } from './components/LightboxModal';

import { MenuItem, ServiceItem, BlogPost, GalleryItem, CartItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [guestCount, setGuestCount] = useState<number>(50);

  // Modals visibility state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingPackage, setBookingPackage] = useState<string | undefined>(undefined);

  const [activeDishModal, setActiveDishModal] = useState<MenuItem | null>(null);
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeBlogModal, setActiveBlogModal] = useState<BlogPost | null>(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string): void => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (item: MenuItem): void => {
    setCartItems((prev: CartItem[]) => {
      const existing = prev.find((ci: CartItem) => ci.menuItem.id === item.id);
      if (existing) {
        showToast(`Updated quantity for ${item.name}`);
        return prev.map((ci: CartItem) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      showToast(`Added ${item.name} to Inquiry List`);
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (menuItemId: string, delta: number): void => {
    setCartItems((prev: CartItem[]) =>
      prev
        .map((ci: CartItem) => {
          if (ci.menuItem.id === menuItemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (menuItemId: string): void => {
    setCartItems((prev: CartItem[]) => prev.filter((ci: CartItem) => ci.menuItem.id !== menuItemId));
    showToast('Item removed from Inquiry');
  };

  const handleClearCart = (): void => {
    setCartItems([]);
    showToast('Inquiry list cleared');
  };

  const handleOpenBookingWithPackage = (packageName: string): void => {
    setBookingPackage(packageName);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithService = (serviceTitle: string): void => {
    setBookingPackage(`Service: ${serviceTitle}`);
    setIsBookingOpen(true);
  };

  const cartCount: number = cartItems.reduce((acc: number, curr: CartItem) => acc + curr.quantity, 0);
  const cartItemIds: string[] = cartItems.map((ci: CartItem) => ci.menuItem.id);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased flex flex-col selection:bg-sky-100 selection:text-sky-800">
      {/* Toast Popup Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-sky-400/30 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={() => {
          setBookingPackage(undefined);
          setIsBookingOpen(true);
        }}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onBookNow={() => {
            setBookingPackage(undefined);
            setIsBookingOpen(true);
          }}
          onViewMenu={() => {
            setActiveTab('menu');
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Featured Dishes Showcase Bar */}
        <section className="py-12 bg-sky-50/70 border-y border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-sky-800 mb-6">
              SHALOM SUPER KITCHEN Chef Highlights
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=200"
                  alt="Smokey Jollof"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div>
                  <p className="font-bold text-xs text-slate-800">Party Jollof Rice</p>
                  <p className="text-[11px] text-sky-600 font-semibold">Firewood Flavor</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200"
                  alt="Ofada Rice"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div>
                  <p className="font-bold text-xs text-slate-800">Ofada Ayamase</p>
                  <p className="text-[11px] text-sky-600 font-semibold">Royal Recipe</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=200"
                  alt="Master Small Chops"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div>
                  <p className="font-bold text-xs text-slate-800">Small Chops Platter</p>
                  <p className="text-[11px] text-sky-600 font-semibold">Samosa & Asun</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=200"
                  alt="Live Tilapia BBQ"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div>
                  <p className="font-bold text-xs text-slate-800">Live Fish BBQ</p>
                  <p className="text-[11px] text-sky-600 font-semibold">Charcoal Grilled</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection
          onSelectService={(service: ServiceItem) => setActiveServiceModal(service)}
          onBookService={handleOpenBookingWithService}
        />

        {/* Interactive Menu Section */}
        <MenuSection
          onSelectDish={(dish: MenuItem) => setActiveDishModal(dish)}
          onAddToInquiry={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Gallery Section */}
        <GallerySection
          onOpenLightbox={(item: GalleryItem) => setActiveLightboxItem(item)}
        />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Pricing Packages Section */}
        <PricingSection
          onSelectPackage={handleOpenBookingWithPackage}
        />

        {/* FAQ Accordion Section */}
        <FaqSection
          onContactClick={() => {
            setActiveTab('contact');
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Blog Articles Section */}
        <BlogSection
          onSelectBlog={(post: BlogPost) => setActiveBlogModal(post)}
        />

        {/* Contact & Google Map Section */}
        <ContactSection />
      </main>

      {/* Footer Component */}
      <Footer
        onNavClick={(tab: string) => {
          setActiveTab(tab);
          const el = document.getElementById(tab);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => {
          setBookingPackage(undefined);
          setIsBookingOpen(true);
        }}
      />

      {/* Overlays & Modals */}
      <InquiryDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToBooking={() => {
          setIsBookingOpen(true);
        }}
        guestCount={guestCount}
        setGuestCount={setGuestCount}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPackageName={bookingPackage}
        selectedItems={cartItems.map((ci: CartItem) => ci.menuItem)}
        initialGuestCount={guestCount}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectMenuItem={(dish: MenuItem) => setActiveDishModal(dish)}
        onSelectService={(service: ServiceItem) => setActiveServiceModal(service)}
        onSelectBlog={(post: BlogPost) => setActiveBlogModal(post)}
      />

      <DishModal
        dish={activeDishModal}
        onClose={() => setActiveDishModal(null)}
        onAddToInquiry={handleAddToCart}
        isInCart={activeDishModal ? cartItemIds.includes(activeDishModal.id) : false}
      />

      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBookNow={handleOpenBookingWithService}
      />

      <BlogModal
        post={activeBlogModal}
        onClose={() => setActiveBlogModal(null)}
        onBookCatering={() => {
          setBookingPackage(undefined);
          setIsBookingOpen(true);
        }}
      />

      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </div>
  );
}