import React from 'react';
import { Compass, Target, CheckCircle2, Factory, Users, Globe } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function VisionMission() {
  return (
    <section className="py-20 bg-[#FFFDF5] border-y border-[#EFE8D6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header with Official Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C8973E] uppercase tracking-wider block mb-2 font-['Outfit']">
            Official Principles • Since 2004
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-['Outfit'] mb-3">
            Mission, Vision & Core Philosophy
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#0D4738] font-['Outfit']">
            "{companyData.tagline}"
          </p>
        </div>

        {/* Mission & Vision Cards (Direct from Official Brochure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#0D4738]/20 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center mb-6 shadow-sm">
                <Target size={28} />
              </div>
              <div className="text-xs font-bold text-[#C8973E] uppercase tracking-wider mb-1 font-['Outfit']">
                Our Purpose
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-4 font-['Outfit']">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {companyData.mission}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#0D4738] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              Delivering Ground Solutions That Are Pragmatic & Innovative
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#C8973E]/30 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF5E8] text-[#C8973E] flex items-center justify-center mb-6 shadow-sm">
                <Compass size={28} />
              </div>
              <div className="text-xs font-bold text-[#0D4738] uppercase tracking-wider mb-1 font-['Outfit']">
                Our Future
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-4 font-['Outfit']">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {companyData.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#C8973E] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8973E]"></span>
              Recognized for Best Practice Standards in Engineering & Business
            </div>
          </div>
        </div>

        {/* 3 Pillars from Brochure: Infrastructure, Our Team, Nationwide Reach */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] font-['Outfit']">
              Organizational Pillars (From Corporate Brochure)
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Pratima Group of Industry is a Kosala Angul (Odisha) based organization incorporated in 2004.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0D4738] flex items-center justify-center mb-4">
                <Factory size={22} />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2 font-['Outfit']">
                Ultra-Modern Infrastructure
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {companyData.pillars.infrastructure}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C8973E] flex items-center justify-center mb-4">
                <Users size={22} />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2 font-['Outfit']">
                Hardworking Professional Team
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {companyData.pillars.team}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Globe size={22} />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2 font-['Outfit']">
                Nationwide Delivery Reach
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {companyData.pillars.nationwideReach}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values 4-Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-gray-900 font-['Outfit'] uppercase tracking-wider text-xs">
              Our Core Operational Commitments
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E5ECE8] shadow-sm hover:border-[#0D4738]/30 transition">
                <div className="w-10 h-10 rounded-xl bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="font-bold text-[#111827] mb-2 font-['Outfit'] text-base">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
