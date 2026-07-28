import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Weddings',
    'Birthdays',
    'Corporate Events',
    'Food Presentation',
    'Kitchen',
    'Staff at Work'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-full">
            Visual Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Our Event & Kitchen <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a glimpse into our lavish banquet setups, culinary presentation, hygienic kitchen facilities in Ikorodu, and dedicated hospitality team at work.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="px-3 py-0.5 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-full w-fit mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-lg">{item.title}</h4>
                <p className="text-xs text-slate-200 line-clamp-2 mt-1">{item.description}</p>

                <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-blue-300">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click for Lightbox Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
