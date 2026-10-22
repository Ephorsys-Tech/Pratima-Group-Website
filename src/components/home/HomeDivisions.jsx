import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import BusinessCard from '../common/BusinessCard';
import { businessDivisions } from '../../data/businessData';

export default function HomeDivisions() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF5] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF6D8] text-[#D99A00] font-bold text-xs tracking-wider uppercase mb-3 border border-[#F4B400]/40 shadow-xs">

            <span>Core Business Verticals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-4 font-['Outfit'] tracking-tight">
            Three Pillars of Industrial & Regional Growth
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-['Plus_Jakarta_Sans'] leading-relaxed">
            From heavy machine tool manufacturing to retail franchise networks and experiential fine dining, explore how Pratima Group drives forward-looking value.
          </p>
        </div>

        {/* 3 Business Division Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessDivisions.map((division) => (
            <BusinessCard key={division.id} division={division} />
          ))}
        </div>

        {/* Bottom Link to /businesses */}
        <div className="mt-14 text-center">
          <Link
            to="/businesses"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-[#EFE8D6] text-sm font-bold text-[#252525] hover:text-[#D99A00] hover:border-[#F4B400] shadow-xs hover:shadow-md transition-all duration-200 group"
          >
            <span>Explore Comprehensive Portfolio Overview</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform text-[#D99A00]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
