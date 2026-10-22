import React from 'react';
import { Cog, TrendingUp, Award } from 'lucide-react';

export default function SynergyModel() {
  return (
    <section className="py-20 bg-[#FFFDF5] border-t border-[#EFE8D6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-2">
            Group Synergy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit']">
            The Pratima Ecosystem Model
          </h2>
          <p className="text-[#666666] mt-2">
            How our industrial backbone supports scalable retail expansion and cultural hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#EFE8D6] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-6">
              <Cog size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#252525] mb-3 font-['Outfit']">
              Industrial Muscle
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Our heavy machine manufacturing plants in Mancheswar and Khurda fabricate store fixtures, commercial kitchen equipment, and structural components used across group initiatives.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#EFE8D6] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-6">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#252525] mb-3 font-['Outfit']">
              Retail Distribution
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Odisha Cart aggregates rural and semi-urban produce, giving farmers and cottage manufacturers guaranteed distribution across retail franchise storefronts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#EFE8D6] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#252525] mb-3 font-['Outfit']">
              Hospitality & Culture
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Our upcoming restaurant venture leverages direct organic farm ingredients sourced through the Odisha Cart supply chain to create genuine culinary experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
