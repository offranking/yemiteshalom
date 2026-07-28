import React from 'react';
import { X, ShoppingBag, Check, ShieldAlert, Award } from 'lucide-react';
import { MenuItem } from '../types';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToInquiry: (dish: MenuItem) => void;
  isInCart: boolean;
}

export const DishModal: React.FC<DishModalProps> = ({
  dish,
  onClose,
  onAddToInquiry,
  isInCart
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-sky-100 w-full max-w-lg overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-slate-900/50 hover:bg-slate-900/80 text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 w-full">
          <img
            src={dish.image}
            alt={dish.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="px-2.5 py-1 bg-sky-600/90 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
              {dish.category}
            </span>
            <h3 className="text-2xl font-bold font-serif-title mt-1.5">{dish.name}</h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Estimated Portion Price</p>
              <p className="text-2xl font-bold text-sky-700">₦{dish.priceNGN.toLocaleString()} <span className="text-xs font-normal text-slate-500">(${(dish.priceUSD).toFixed(2)})</span></p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 font-medium">{dish.servingsInfo}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Culinary Description</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{dish.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Dietary & Quality Badges</h4>
            <div className="flex flex-wrap gap-2">
              {dish.dietaryBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-sky-50 border border-sky-100 text-sky-800 text-xs font-semibold rounded-lg flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-sky-600" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 text-xs text-slate-600 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Prepared fresh daily under strict 5-star Lagos State health and hygiene standards.</span>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onAddToInquiry(dish)}
              className={`w-full py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all ${
                isInCart
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-sky-600 text-white hover:bg-sky-700 hover:shadow-lg'
              }`}
            >
              {isInCart ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{isInCart ? 'Added to Event Inquiry List' : 'Add to Event Inquiry List'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
