import React, { useState } from 'react';
import { Search, X, Utensils, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, SERVICES, BLOG_POSTS } from '../data/mockData';
import { MenuItem, ServiceItem, BlogPost } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMenuItem: (item: MenuItem) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectBlog: (post: BlogPost) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMenuItem,
  onSelectService,
  onSelectBlog
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();

  const filteredMenu = searchQuery
    ? MENU_ITEMS.filter(item =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery)
      )
    : [];

  const filteredServices = searchQuery
    ? SERVICES.filter(service =>
        service.title.toLowerCase().includes(searchQuery) ||
        service.shortDescription.toLowerCase().includes(searchQuery)
      )
    : [];

  const filteredBlog = searchQuery
    ? BLOG_POSTS.filter(post =>
        post.title.toLowerCase().includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery)
      )
    : [];

  const hasResults = filteredMenu.length > 0 || filteredServices.length > 0 || filteredBlog.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-sky-100 w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header Search Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-sky-50/50">
          <Search className="w-5 h-5 text-sky-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search menu (e.g., Jollof, Salmon), services, or articles..."
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-base focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {!query && (
            <div className="text-center py-8 text-slate-500">
              <Utensils className="w-10 h-10 text-sky-300 mx-auto mb-3" />
              <p className="font-medium text-slate-700">Type to search SHALOM SUPER KITCHEN</p>
              <p className="text-xs text-slate-400 mt-1">Try searching "Jollof Rice", "Wedding Catering", "Small Chops", or "Suya"</p>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-10 text-slate-500">
              <p className="text-lg font-semibold text-slate-700">No matching dishes or services found</p>
              <p className="text-sm text-slate-500 mt-1">Try searching for broader keywords like "Rice", "BBQ", "Corporate", or "Drinks"</p>
            </div>
          )}

          {/* Menu Items */}
          {filteredMenu.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-3 flex items-center justify-between">
                <span>Dishes & Drinks ({filteredMenu.length})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredMenu.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectMenuItem(item);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 text-left transition-all group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm text-slate-800 group-hover:text-sky-700 truncate">{item.name}</p>
                      <p className="text-xs text-slate-500 line-clamp-1">{item.description}</p>
                      <p className="text-xs font-bold text-sky-600 mt-1">₦{item.priceNGN.toLocaleString()}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          {filteredServices.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-3">
                Catering Services ({filteredServices.length})
              </h3>
              <div className="space-y-2">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 text-left transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-sm text-slate-800 group-hover:text-sky-700">{service.title}</p>
                        <p className="text-xs text-slate-500 line-clamp-1">{service.shortDescription}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blog Posts */}
          {filteredBlog.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-3">
                Articles & Tips ({filteredBlog.length})
              </h3>
              <div className="space-y-2">
                {filteredBlog.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => {
                      onSelectBlog(post);
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 text-left transition-all"
                  >
                    <p className="font-semibold text-sm text-slate-800">{post.title}</p>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{post.excerpt}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
