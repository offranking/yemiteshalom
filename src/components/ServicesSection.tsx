import React from 'react';
import { CheckCircle2, ArrowRight, HeartHandshake, Briefcase, Cake, Sun, Utensils, GraduationCap, Flower2, Wine, CalendarCheck } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-sky-600" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-sky-600" />;
      case 'Cake': return <Cake className="w-5 h-5 text-sky-600" />;
      case 'Sun': return <Sun className="w-5 h-5 text-sky-600" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-sky-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-sky-600" />;
      case 'Flower2': return <Flower2 className="w-5 h-5 text-sky-600" />;
      case 'Wine': return <Wine className="w-5 h-5 text-sky-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-sky-600" />;
      default: return <Utensils className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-full">
            Our Specialty Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Comprehensive Catering Solutions for <span className="text-sky-600">Every Event</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether planning an intimate dinner in Lekki or a 1,000-guest wedding in Ikeja, SHALOM SUPER KITCHEN delivers tailored culinary excellence and protocol management.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-2 rounded-full shadow-md flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-serif font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600">What’s Included:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-3 border border-sky-200 hover:bg-sky-50 text-sky-700 text-xs font-bold rounded-full transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onBookService(service.title)}
                    className="py-2.5 px-5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-full shadow-sm hover:shadow-md flex items-center gap-1 transition-all"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
