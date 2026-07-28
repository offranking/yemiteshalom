import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const clientLogos = [
    { name: 'FirstBank', logo: 'FIRST BANK NIGERIA' },
    { name: 'Chevron', logo: 'CHEVRON NIGERIA' },
    { name: 'GTBank', logo: 'GTCO PLC' },
    { name: 'Lagos Weddings', logo: 'LAGOS WEDDINGS' },
    { name: 'MTN Nigeria', logo: 'MTN NIGERIA' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-blue-900/60 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-widest rounded-full">
            Client Love & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            What Our Clients Say About <span className="text-blue-300">SHALOM SUPER KITCHEN</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real stories from brides, corporate directors, and celebrants across Lagos and Ogun State.
          </p>
        </div>

        {/* Auto-playing Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative">
          <Quote className="w-16 h-16 text-blue-500/20 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Quote Comment */}
            <p className="text-lg sm:text-2xl font-serif text-slate-100 italic leading-relaxed">
              "{currentTestimonial.comment}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
              />
              <div>
                <h4 className="font-bold text-base text-white">{currentTestimonial.name}</h4>
                <p className="text-xs text-blue-400 font-medium">
                  {currentTestimonial.role} • {currentTestimonial.company}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">{currentTestimonial.event} ({currentTestimonial.date})</p>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="mt-8 flex items-center justify-between pt-4">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-blue-400' : 'w-2.5 bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                title="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                title="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Corporate Client Logos */}
        <div className="pt-6 border-t border-slate-800">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Trusted By Esteemed Companies & Wedding Planners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
            {clientLogos.map((brand, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 font-extrabold text-sm sm:text-base tracking-wider hover:text-white transition-colors">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span>{brand.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
