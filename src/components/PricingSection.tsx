import React from 'react';
import { CheckCircle2, Crown, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/mockData';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-full">
            Transparent Catering Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Catering <span className="text-blue-600">Pricing Tiers</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All packages include setup, insulated chafing warmers, serving cutlery, and trained waitstaff. Custom menu modifications welcomed!
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isMostPopular = pkg.name === 'Premium';

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isMostPopular
                    ? 'bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 text-white shadow-2xl border-2 border-blue-400 scale-105 z-10'
                    : 'bg-white text-slate-800 border border-slate-100 shadow-lg hover:border-blue-200 hover:shadow-xl'
                }`}
              >
                {pkg.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-md ${
                      isMostPopular ? 'bg-amber-400 text-slate-950' : 'bg-blue-600 text-white'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                )}

                <div>
                  {/* Header */}
                  <div className="border-b border-slate-200/20 pb-6">
                    <h3
                      className={`text-2xl font-serif font-bold ${
                        isMostPopular ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {pkg.name} Package
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isMostPopular ? 'text-blue-200' : 'text-slate-500'
                      }`}
                    >
                      {pkg.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-serif">
                        ₦{pkg.pricePerGuestNGN.toLocaleString()}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isMostPopular ? 'text-blue-200' : 'text-slate-500'
                        }`}
                      >
                        / guest (Min. {pkg.minGuests})
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <p
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isMostPopular ? 'text-blue-300' : 'text-blue-600'
                      }`}
                    >
                      Package Highlights:
                    </p>
                    <ul className="space-y-2.5 text-xs">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isMostPopular ? 'text-blue-400' : 'text-blue-600'
                            }`}
                          />
                          <span
                            className={isMostPopular ? 'text-blue-100' : 'text-slate-600'}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-6 border-t border-slate-200/20">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-3.5 rounded-full font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all ${
                      isMostPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                    }`}
                  >
                    <span>Book {pkg.name} Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
