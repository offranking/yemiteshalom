import React, { useState } from 'react';
import { Search, Plus, Check, Award, ShoppingBag, Info, Flame, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onAddToInquiry: (dish: MenuItem) => void;
  cartItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onAddToInquiry,
  cartItemIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    'All',
    'Soups & Swallows',
    'Local Dishes',
    
    'Breakfast',
    'Lunch',
    'Dinner',
    'Small Chops',
    'BBQ',
    'Desserts',
    'Drinks'
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-full">
            Our Culinary Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Explore SHALOM SUPER KITCHEN <span className="text-sky-600">Event Menu</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your favorite dishes to add them directly to your event inquiry list. Authentic West African soul food & exquisite Pan-African delicacies.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter menu by dish name or ingredient..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-lg font-bold text-slate-700">No dishes match your selected filter</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting the search term or picking another category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 px-5 py-2.5 bg-sky-500 text-white font-bold text-xs rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => {
              const isInCart = cartItemIds.includes(dish.id);
              return (
                <div
                  key={dish.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Food Image */}
                    <div
                      onClick={() => onSelectDish(dish)}
                      className="relative h-48 w-full overflow-hidden cursor-pointer"
                    >
                      <img
                        src={dish.image}
                        alt={dish.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                        {dish.category}
                      </span>

                      {dish.popular && (
                        <span className="absolute top-3 right-3 px-3 py-1 bg-amber-500 text-white rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                          <Flame className="w-3 h-3" /> Popular
                        </span>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 text-white flex justify-between items-end">
                        <span className="text-xs text-sky-200 font-medium">{dish.servingsInfo}</span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h3
                          onClick={() => onSelectDish(dish)}
                          className="font-serif font-bold text-lg text-slate-800 group-hover:text-sky-600 cursor-pointer transition-colors leading-snug"
                        >
                          {dish.name}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>

                      {/* Dietary Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {dish.dietaryBadges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 bg-sky-50 text-sky-800 text-[10px] font-semibold rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & Add Button */}
                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-50 mt-2">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-medium block">Price / portion</span>
                      <span className="text-lg font-extrabold text-sky-700">
                        ₦{dish.priceNGN.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToInquiry(dish)}
                      className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all ${
                        isInCart
                          ? 'bg-emerald-600 text-white'
                          : 'bg-sky-500 hover:bg-sky-600 text-white hover:shadow-md'
                      }`}
                    >
                      {isInCart ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isInCart ? 'In Inquiry' : 'Add to Inquiry'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
