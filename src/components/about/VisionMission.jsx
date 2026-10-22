import React from 'react';
import { Compass, Target, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function VisionMission() {
  return (
    <section className="py-20 bg-[#FFFDF5] border-y border-[#EFE8D6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-2">
            Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit']">
            Vision, Mission & Core Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl border border-[#EFE8D6] shadow-sm relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-6">
              <Compass size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#252525] mb-4 font-['Outfit']">
              Our Vision
            </h3>
            <p className="text-[#666666] leading-relaxed text-base">
              To stand as Eastern India's most trusted manufacturing and diversified business conglomerate — driving self-reliance in capital machinery, empowering local retail entrepreneurs through Odisha Cart, and setting the benchmark for Odia cultural hospitality.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl border border-[#EFE8D6] shadow-sm relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#252525] mb-4 font-['Outfit']">
              Our Mission
            </h3>
            <p className="text-[#666666] leading-relaxed text-base">
              To engineer world-class industrial machinery with uncompromised safety, deliver authentic high-quality Odia consumer products through sustainable franchise partnerships, and generate dignified regional employment opportunities across the state of Odisha.
            </p>
          </div>
        </div>

        {/* Core Values 4-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.coreValues.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-[#EFE8D6]">
              <div className="w-10 h-10 rounded-lg bg-[#FFFDF5] border border-[#F4B400]/30 text-[#D99A00] flex items-center justify-center mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="font-bold text-[#252525] mb-2 font-['Outfit'] text-base">
                {val.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
