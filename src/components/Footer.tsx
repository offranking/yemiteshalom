import React, { useState } from 'react';
import { Utensils, MapPin, Phone, Mail, Send, Instagram, Facebook, Twitter, CheckCircle2, Heart } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const instagramPosts = [
    { id: 1, img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=300' },
    { id: 2, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300' },
    { id: 3, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=300' },
    { id: 4, img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=300' },
    { id: 5, img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=300' },
    { id: 6, img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=300' }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/30">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white tracking-tight">
                  Shallom <span className="text-sky-400">Kitchen</span>
                </span>
                <span className="text-[10px] font-semibold text-sky-300 tracking-widest uppercase block">
                  Delicious Catering for Every Occasion
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Lagos State’s choice for luxury event catering, authentic West African soul food, and live barbecue grills. Serving weddings, corporate banquets, and private parties.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>4 Adefowope Odukoya Street, Agric, Ikorodu, Lagos</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+2347038721454" className="hover:text-sky-400 transition-colors">
                  +234 703 872 1454
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>info@shallomkitchen.com</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-400">Quick Navigation</p>
            <ul className="space-y-2 text-xs text-slate-400">
              {['home', 'about', 'services', 'menu', 'gallery', 'testimonials', 'pricing', 'faq', 'blog', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavClick(item)}
                    className="hover:text-sky-300 capitalize transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-400">Catering Services</p>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => onNavClick('services')}
                    className="hover:text-sky-300 transition-colors text-left"
                  >
                    {serv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Instagram */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Newsletter Signup</p>
              <p className="text-[11px] text-slate-400 mb-2">Get secret party recipes, discounts & catering availability alerts.</p>
              {subscribed ? (
                <div className="p-3 bg-sky-900/50 border border-sky-600 rounded-full text-xs text-sky-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Instagram Feed Grid */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2 flex items-center gap-1">
                <Instagram className="w-3.5 h-3.5" /> Instagram @ShallomKitchen
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border border-slate-800">
                    <img
                      src={post.img}
                      alt="SHALOM SUPER KITCHEN Instagram"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-sky-500/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & SEO footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SHALOM SUPER KITCHEN Catering Services. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current inline" />
            <span>in Ikorodu, Lagos Nigeria.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
