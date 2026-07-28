import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openId, setOpenId] = useState<string>(FAQS[0]?.id || '');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-full">
            Help Center & Clarifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Everything you need to know about booking, menu customization, dietary catering, and delivery in Lagos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-base sm:text-lg flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full mt-3">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Questions Callout */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <p className="font-bold text-base">Have a unique event requirement?</p>
              <p className="text-xs text-slate-300">Our event consultants are ready to speak with you directly.</p>
            </div>
          </div>
          <button
            onClick={onContactClick}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-full shadow-md transition-colors shrink-0"
          >
            Ask a Question
          </button>
        </div>
      </div>
    </section>
  );
};
