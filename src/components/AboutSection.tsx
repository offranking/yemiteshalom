import React from 'react';
import { Target, Compass, ShieldCheck, Heart, ChefHat, Trophy, Award, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS, AWARDS } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-full">
            Our Story & Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            About <span className="text-sky-600">SHALOM SUPER KITCHEN</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Crafting memorable West African and Pan-African culinary experiences with uncompromising passion, hygiene, and authenticity.
          </p>
        </div>

        {/* Company Story + Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-slate-900 leading-snug">
              A Decade of Bringing People Together Over Extraordinary Food
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded in Ikorodu, Lagos, SHALOM SUPER KITCHEN began with a simple belief: every event, big or small, deserves food that speaks to the heart. Over the past decade, we have grown from an intimate family kitchen into one of Lagos State’s premier catering firms, serving over 500 high-profile weddings, corporate galas, and celebrations.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our culinary philosophy honors rich West African heritage—such as firewood-infused party Jollof rice, aromatic Ayamase, and succulent live Suya grills—while incorporating regional Pan-African delicacies for diverse banquets.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3 hover:border-sky-200 transition-all">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">Our Mission</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To deliver exceptional, hygienic, and mouth-watering catering experiences that elevate celebrations and relieve event hosts of all stress.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3 hover:border-sky-200 transition-all">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">Our Vision</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To remain West Africa’s most trusted culinary brand, renowned for innovation, royal hospitality, and unforgettable flavor consistency.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
                alt="SHALOM SUPER KITCHEN Preparation Facility"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Floating Kitchen Hub Stamp */}
            <div className="absolute -bottom-6 -left-6 bg-sky-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-sky-800 hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-300">Main Kitchen Address</p>
              <p className="text-xs font-bold mt-1 text-white">4 Adefowope Odukoya Street, Agric, Ikorodu, Lagos</p>
            </div>
          </div>
        </div>

        {/* Meet the Chef Highlight */}
        <div className="bg-gradient-to-r from-sky-950 via-sky-900 to-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="relative col-span-1">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
                alt="Chef Shallom Odukoya"
                referrerPolicy="no-referrer"
                className="w-full h-80 rounded-2xl object-cover shadow-lg border-2 border-sky-400/30"
              />
              <span className="absolute top-3 right-3 px-3 py-1 bg-sky-500 text-white font-bold text-xs rounded-full shadow-md">
                Master Chef
              </span>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full text-xs font-semibold text-sky-200">
                <ChefHat className="w-4 h-4 text-sky-300" /> Executive Chef
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                "Cooking is not just preparing food; it is creating memories that last a lifetime."
              </h3>
              <p className="text-sky-100 text-sm leading-relaxed font-light">
                With over 12 years of culinary expertise across high-end hotels and private banquets, Chef Shallom Odukoya leads a dedicated team of 50+ culinary professionals at our Ikorodu headquarters.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-sky-200">
                <span>• Specialty: Firewood Party Jollof</span>
                <span>• Certified Food Safety Specialist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-slate-900">Why Choose SHALOM SUPER KITCHEN?</h3>
            <p className="text-xs text-slate-500 mt-1">Four core pillars that set our catering apart across Lagos</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all space-y-3">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">Uncompromising Hygiene</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                5-Star food safety certified. Stainless steel food prep & thermal insulation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all space-y-3">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">Authentic Local Flavor</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Firewood party jollof, Ofada sauce, pounded yam, and hot peppered Asun.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all space-y-3">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">Tailored Custom Menus</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                From lunch boxes to multi-course royal wedding banquets customized to your guests.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all space-y-3">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">Punctual Protocol Service</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We arrive hours early, setup chafing tables, and ensure hot food served on schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-sky-50/70 rounded-2xl p-8 border border-sky-100">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xl font-serif font-bold text-slate-900">Awards & Certifications</h3>
            <p className="text-xs text-slate-500">Recognized for hospitality excellence in Lagos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS.map((award) => (
              <div key={award.id} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="p-3 bg-sky-500 text-white rounded-full shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800">{award.title}</p>
                  <p className="text-xs text-slate-500">{award.issuer} • {award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-slate-900">Meet Our Leadership Team</h3>
            <p className="text-xs text-slate-500 mt-1">The passionate experts behind every banquet success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full">
                    {member.specialty}
                  </span>
                  <h4 className="font-bold text-slate-800 text-base mt-2">{member.name}</h4>
                  <p className="text-xs font-semibold text-sky-600">{member.role}</p>
                  <p className="text-xs text-slate-500 pt-2 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
