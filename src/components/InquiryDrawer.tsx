import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Utensils, Calendar } from 'lucide-react';
import { CartItem } from '../types';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (menuItemId: string, delta: number) => void;
  onRemoveItem: (menuItemId: string) => void;
  onClearCart: () => void;
  onProceedToBooking: () => void;
  guestCount: number;
  setGuestCount: (count: number) => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToBooking,
  guestCount,
  setGuestCount
}) => {
  if (!isOpen) return null;

  const totalEstimateNGN = cartItems.reduce(
    (sum, item) => sum + item.menuItem.priceNGN * item.quantity * Math.max(1, Math.round(guestCount / 10)),
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-sky-700 to-sky-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/20 rounded-lg">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight">Inquiry List</h2>
                <p className="text-xs text-sky-100">{cartItems.length} dish types selected</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Guest Count Estimator */}
          <div className="p-4 bg-sky-50 border-b border-sky-100">
            <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-1.5">
              Estimated Guest Count
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="10"
                max="5000"
                value={guestCount}
                onChange={(e) => setGuestCount(Math.max(10, parseInt(e.target.value) || 10))}
                className="w-28 px-3 py-1.5 bg-white border border-sky-200 rounded-lg text-slate-800 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <span className="text-xs text-slate-600">
                Guests (Portions auto-scale for catering)
              </span>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <Utensils className="w-12 h-12 text-sky-200 mb-3" />
                <p className="font-semibold text-slate-700">Your menu inquiry is empty</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Browse our Menu section and click "Add to Inquiry" on your favorite dishes, BBQ, and drinks!
                </p>
              </div>
            ) : (
              cartItems.map(({ menuItem, quantity }) => (
                <div
                  key={menuItem.id}
                  className="p-3 rounded-xl border border-slate-100 bg-white shadow-sm flex items-center gap-3 hover:border-sky-200 transition-colors"
                >
                  <img
                    src={menuItem.image}
                    alt={menuItem.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-slate-800 truncate">{menuItem.name}</p>
                    <p className="text-xs text-sky-600 font-medium">₦{menuItem.priceNGN.toLocaleString()} / serving</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(menuItem.id, -1)}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-slate-800 w-4 text-center">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(menuItem.id, 1)}
                        className="w-6 h-6 rounded bg-sky-100 hover:bg-sky-200 text-sky-800 text-xs font-bold flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(menuItem.id)}
                    className="text-slate-300 hover:text-red-500 p-1 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 font-medium">Estimated Food Total ({guestCount} Guests)</span>
                <span className="text-lg font-bold text-sky-700">₦{totalEstimateNGN.toLocaleString()}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                *Final quotation includes setup, chafing gear, staff, and transport to your venue address.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={onClearCart}
                  className="px-3 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold rounded-xl transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => {
                    onProceedToBooking();
                    onClose();
                  }}
                  className="flex-1 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <span>Request Official Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
