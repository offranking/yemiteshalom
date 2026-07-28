import React, { useState, useEffect } from 'react';
import { Utensils, Search, ShoppingBag, Menu, X, ChevronDown, Phone, MapPin, Sparkles, Clock, Calendar } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasMega: true },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-sky-900 text-sky-100 py-1.5 px-4 text-xs font-medium border-b border-sky-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 text-sky-200">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>4 Adefowope Odukoya St, Agric Ikorodu, Lagos</span>
            </span>
            <span className="hidden md:inline text-sky-700">|</span>
            <a
              href="tel:+2347038721454"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+234 703 872 1454</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-300 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>Now Accepting 2026 Event Bookings</span>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-sky-100'
            : 'bg-white py-4 border-b border-sky-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Professional Polish Style */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl italic shadow-md shadow-sky-500/25 group-hover:bg-sky-600 transition-all">
              S
            </div>
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-slate-900 tracking-tight block leading-none">
                SHALOM SUPER KITCHEN
              </span>
              <span className="text-[10px] font-bold text-sky-600 tracking-widest uppercase block mt-0.5">
                Premium Catering Services
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <button
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => link.hasMega && setMegaMenuOpen(true)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-full transition-all flex items-center gap-1 ${
                    activeTab === link.id
                      ? 'text-sky-700 bg-sky-100/70 font-bold'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasMega && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors"
              title="Search Menu & Services"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Inquiry Cart Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors"
              title="View Inquiry List"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-sky-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center animate-bounce shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Now Primary Button */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-sky-600 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown for Services */}
        {megaMenuOpen && (
          <div
            onMouseLeave={() => setMegaMenuOpen(false)}
            className="hidden lg:block absolute top-full left-0 w-full bg-white border-b border-sky-100 shadow-xl py-6 px-8 z-30 animate-fadeIn"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
              <div className="col-span-1 border-r border-slate-100 pr-4">
                <span className="text-[10px] font-bold uppercase text-sky-600 tracking-widest">Catering Categories</span>
                <h4 className="font-serif font-bold text-lg text-slate-900 mt-1">Full Service Catering</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  SHALOM SUPER KITCHEN caters events from 30 to 5,000 guests in Lagos with authentic Nigerian local dishes & Pan-African recipes.
                </p>
                <button
                  onClick={() => {
                    handleNavClick('services');
                    setMegaMenuOpen(false);
                  }}
                  className="mt-4 text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                >
                  View All Services &rarr;
                </button>
              </div>

              <div className="col-span-3 grid grid-cols-3 gap-3">
                {SERVICES.slice(0, 6).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      handleNavClick('services');
                      setMegaMenuOpen(false);
                    }}
                    className="p-2.5 rounded-2xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 text-left transition-all flex items-center gap-3 group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-xs text-slate-800 group-hover:text-sky-600">{service.title}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{service.shortDescription}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                  activeTab === link.id
                    ? 'bg-sky-50 text-sky-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-sky-500 text-white font-bold text-sm rounded-full text-center shadow-md hover:bg-sky-600 transition-all"
              >
                Book Catering Service Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
