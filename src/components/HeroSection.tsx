import React from 'react';
import { Calendar, UtensilsCrossed, Award, Users, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onBookNow: () => void;
  onViewMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookNow,
  onViewMenu
}) => {
  return (
    <section className="relative bg-slate-950 text-white min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Hero Food Imagery with Gradient Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalUWskyhch6qZLRQOaddI0Da-jFI3CgXpgch8RucBvg&s=10"
          alt="SHALOM SUPER KITCHEN Catering Spread - Smokey Party Jollof"
          referrerPolicy="no-referrer"
          className="max-w-[1200px] w-full h-auto object-contain filter brightness-105 rounded-md shadow-lg"
        />
        {/* Softer overlay so the photo shows through more clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-slate-900/20 to-slate-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-900/60 border border-sky-400/30 backdrop-blur-md text-sky-200 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span>Premium Catering Services • Lagos & Neighboring States</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
            Delicious Catering for <span className="text-sky-300 italic">Every Occasion</span>
          </h1>

          {/* Subheading */}
          <p className="text-sky-50/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Experience gourmet culinary excellence and heartfelt hospitality tailored for your most precious moments. Serving weddings, corporate galas, and social events across Lagos.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-sky-200 font-medium pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Party Jollof & Live Grills
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> 100% Hygienic Preparation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Punctual Protocol Service
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button
              onClick={onBookNow}
              className="px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base rounded-full shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Catering Now</span>
            </button>
            <button
              onClick={onViewMenu}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 backdrop-blur-md font-bold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 transition-all"
            >
              <UtensilsCrossed className="w-5 h-5 text-sky-300" />
              <span>Explore Menu</span>
              <ChevronRight className="w-4 h-4 text-sky-300" />
            </button>
          </div>
        </div>

        {/* Statistics Ribbon */}
        <div className="mt-16 sm:mt-20 bg-sky-900/90 backdrop-blur-md border border-sky-800 rounded-2xl p-6 shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-sky-800">
          <div className="flex items-center gap-4 justify-center sm:justify-start sm:px-4">
            <div className="w-12 h-12 rounded-full bg-sky-800/80 text-sky-300 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-3xl font-extrabold font-serif text-white tracking-tight">500+</p>
              <p className="text-[10px] uppercase tracking-widest text-sky-300 font-bold">Events Served</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start sm:px-4 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-sky-800/80 text-sky-300 flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <p className="text-3xl font-extrabold font-serif text-white tracking-tight">50+</p>
              <p className="text-[10px] uppercase tracking-widest text-sky-300 font-bold">Menu Options</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start sm:px-4 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-sky-800/80 text-sky-300 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-3xl font-extrabold font-serif text-white tracking-tight">10yr</p>
              <p className="text-[10px] uppercase tracking-widest text-sky-300 font-bold">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
