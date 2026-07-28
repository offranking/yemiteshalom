import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, MapPin, DollarSign, CheckCircle, Send, MessageSquare, Utensils } from 'lucide-react';
import { BookingFormData, MenuItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageName?: string;
  selectedItems?: MenuItem[];
  initialGuestCount?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedPackageName,
  selectedItems = [],
  initialGuestCount = 50
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '12:00',
    numberOfGuests: initialGuestCount,
    eventType: 'Wedding Catering',
    preferredMenuCategory: selectedPackageName ? `Package: ${selectedPackageName}` : 'Local & Pan-African Buffet',
    venueAddress: '',
    estimatedBudget: '₦200,000 - ₦500,000',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  useEffect(() => {
    if (initialGuestCount) {
      setFormData(prev => ({ ...prev, numberOfGuests: initialGuestCount }));
    }
    if (selectedPackageName) {
      setFormData(prev => ({ ...prev, preferredMenuCategory: `Package: ${selectedPackageName}` }));
    }
  }, [initialGuestCount, selectedPackageName]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = 'SK-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedCode);
    setSubmitted(true);
  };

  const sendWhatsApp = () => {
    const itemsList = selectedItems.length > 0
      ? `\nSelected Menu Dishes:\n` + selectedItems.map(item => `• ${item.name}`).join('\n')
      : '';

    const text = `Hello SHALOM SUPER KITCHEN! 👋
I would like to place a Catering Booking Inquiry.

*Ref Code:* ${refCode}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Event Type:* ${formData.eventType}
*Event Date & Time:* ${formData.eventDate} at ${formData.eventTime}
*Guest Count:* ${formData.numberOfGuests} Guests
*Menu Preference:* ${formData.preferredMenuCategory}${itemsList}
*Venue Address:* ${formData.venueAddress}
*Budget Range:* ${formData.estimatedBudget}
*Notes:* ${formData.additionalNotes || 'N/A'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2347038721454?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-sky-100 w-full max-w-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-800 p-6 text-white flex justify-between items-start relative">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-sky-100 mb-2">
              SHALOM SUPER KITCHEN Catering Booking
            </span>
            <h2 className="text-2xl font-bold font-serif-title">Book Catering Service</h2>
            <p className="text-xs text-sky-100 mt-1">Fill out the details below to receive a custom proposal within 2 hours.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Booking Request Submitted!</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Thank you <span className="font-semibold text-slate-800">{formData.name}</span>. Your inquiry reference code is <span className="font-mono font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">{refCode}</span>.
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 text-left text-xs text-slate-600 space-y-1.5">
                <p><strong>Event:</strong> {formData.eventType} ({formData.numberOfGuests} Guests)</p>
                <p><strong>Date & Time:</strong> {formData.eventDate} at {formData.eventTime}</p>
                <p><strong>Venue:</strong> {formData.venueAddress || 'To be confirmed'}</p>
                <p><strong>Kitchen Hub:</strong> 4 Adefowope Odukoya Street, Agric, Ikorodu, Lagos</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={sendWhatsApp}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (+234 703 872 1454)</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {selectedItems.length > 0 && (
                <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl flex items-center gap-2 text-xs text-sky-900">
                  <Utensils className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>
                    Including <strong>{selectedItems.length} custom dishes</strong> selected from your Inquiry List.
                  </span>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Chief Babatunde Adeleke"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 801 234 5678"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Event Type *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Wedding Catering">Wedding Catering</option>
                    <option value="Corporate Catering">Corporate Catering</option>
                    <option value="Birthday Parties">Birthday Parties</option>
                    <option value="Outdoor Events">Outdoor Events</option>
                    <option value="Private Dining">Private Dining</option>
                    <option value="School Events">School Events</option>
                    <option value="Funeral Reception">Funeral Reception</option>
                    <option value="Cocktail Services">Cocktail Services</option>
                    <option value="Event Planning">Event Planning & Decor</option>
                  </select>
                </div>
              </div>

              {/* Event Timing & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" /> Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-600" /> Event Time *
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    required
                    value={formData.eventTime}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-sky-600" /> Number of Guests *
                  </label>
                  <input
                    type="number"
                    name="numberOfGuests"
                    min="10"
                    max="5000"
                    required
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none font-semibold"
                  />
                </div>
              </div>

              {/* Menu Preference & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Menu *</label>
                  <select
                    name="preferredMenuCategory"
                    value={formData.preferredMenuCategory}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Local & Pan-African Buffet">Local & Pan-African Buffet</option>
                    <option value="Local Nigerian Feast (Jollof, Ofada, Swallow)">Local Nigerian Feast (Jollof, Ofada, Swallow)</option>
                    <option value="Pan-African Fine Banquets">Pan-African Fine Banquets</option>
                    <option value="BBQ & Live Grills Special">BBQ & Live Grills Special</option>
                    <option value="Small Chops & Cocktail Party">Small Chops & Cocktail Party</option>
                    <option value="Package: Basic">Package: Basic (₦6,500/guest)</option>
                    <option value="Package: Premium">Package: Premium (₦11,500/guest)</option>
                    <option value="Package: Luxury">Package: Luxury (₦19,500/guest)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-sky-600" /> Estimated Budget Range
                  </label>
                  <select
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Under ₦200,000">Under ₦200,000</option>
                    <option value="₦200,000 - ₦500,000">₦200,000 - ₦500,000</option>
                    <option value="₦500,000 - ₦1,500,000">₦500,000 - ₦1,500,000</option>
                    <option value="₦1,500,000 - ₦3,500,000">₦1,500,000 - ₦3,500,000</option>
                    <option value="Above ₦3,500,000 (VIP Gala)">Above ₦3,500,000 (VIP Gala)</option>
                  </select>
                </div>
              </div>

              {/* Venue */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" /> Event Venue Address *
                </label>
                <input
                  type="text"
                  name="venueAddress"
                  required
                  value={formData.venueAddress}
                  onChange={handleChange}
                  placeholder="e.g. Civic Centre Victoria Island, or Private Residence in Lekki"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Notes / Dietary Requests</label>
                <textarea
                  name="additionalNotes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Special dietary requirements (e.g. 5 halal, 3 vegan), color theme, or specific food requests..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
