import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Instagram, Facebook, Twitter } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Event Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Contact <span className="text-blue-600">SHALOM SUPER KITCHEN</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have an event coming up in Lagos or neighboring states? Visit our main kitchen in Ikorodu or message us directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information & Interactive Map Card */}
          <div className="space-y-8">
            <div className="bg-slate-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold">Kitchen Headquarters</h3>

              <div className="space-y-5 text-sm text-slate-200">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-600/30 text-blue-400 rounded-full mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Address:</p>
                    <p className="text-xs text-slate-300">4 Adefowope Odukoya Street, Agric, Ikorodu, Lagos State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-600/30 text-blue-400 rounded-full mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Telephone / WhatsApp:</p>
                    <a
                      href="tel:+2347038721454"
                      className="text-xs text-blue-300 font-semibold hover:underline block"
                    >
                      +234 703 872 1454
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-600/30 text-blue-400 rounded-full mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email Address:</p>
                    <a
                      href="mailto:info@shallomkitchen.com"
                      className="text-xs text-blue-300 font-semibold hover:underline block"
                    >
                      info@shallomkitchen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-600/30 text-blue-400 rounded-full mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Business Hours:</p>
                    <p className="text-xs text-slate-300">Monday - Saturday: 7:00 AM – 9:00 PM</p>
                    <p className="text-xs text-slate-300">Sunday: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp & Socials */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://wa.me/2347038721454"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full flex items-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="flex items-center gap-3 text-slate-400">
                  <a href="#" className="p-2 bg-slate-900 hover:text-blue-400 rounded-full transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-slate-900 hover:text-blue-400 rounded-full transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-slate-900 hover:text-blue-400 rounded-full transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed representation for Ikorodu Lagos */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-72 relative bg-slate-100">
              <iframe
                title="SHALOM SUPER KITCHEN Ikorodu Lagos Map"
                src="https://maps.google.com/maps?q=Ikorodu%20Agric%20Lagos%20Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-500 mb-6">Fill in your inquiry details below and our client relations officer will call you back shortly.</p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Message Received!</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Thank you for reaching out to SHALOM SUPER KITCHEN. We will respond to {formState.email} within 1 hour.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white font-bold text-xs rounded-full"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Mrs. Funke Abiola"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+234 703 872 1454"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="funke@gmail.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Subject</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="General Event Inquiry">General Event Inquiry</option>
                    <option value="Wedding Catering Proposal">Wedding Catering Proposal</option>
                    <option value="Corporate Catering Contract">Corporate Catering Contract</option>
                    <option value="Menu Tasting Reservation">Menu Tasting Reservation</option>
                    <option value="Partnership / Supplier">Partnership / Supplier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your event, location, estimated date, and menu preferences..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-full shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
