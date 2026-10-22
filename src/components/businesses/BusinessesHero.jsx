import React from 'react';
import { Layers, Building, Factory, ShoppingBag, UtensilsCrossed } from 'lucide-react';

export default function BusinessesHero() {
  return (
    <section className="relative overflow-hidden bg-[#07271E] border-b border-[#0D4738]/50 py-14 sm:py-20 lg:py-24 flex items-center justify-center text-center">
      {/* Full-bleed background corporate image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{ backgroundImage: "url('/images/pratima_hero.jpg')" }}
      ></div>

      {/* Balanced Dark Forest Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#07271E]/90 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/75 sm:to-black/80"></div>

      {/* Ambient subtle golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-48 sm:h-[320px] bg-[#C8973E]/15 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Centered Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Centered Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C8973E]/50 text-white shadow-md mb-4 sm:mb-5">
          <Layers size={15} className="text-[#C8973E]" />
          <span className="font-['Outfit'] font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#C8973E]">
            Multi-Sector Industrial Portfolio • Odisha
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 font-['Outfit'] drop-shadow-md">
          Pratima Group <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2B866] via-[#C8973E] to-[#F1CF88]">
            Business Divisions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-[#E5E5E5] leading-relaxed max-w-2xl mx-auto font-sans font-normal drop-shadow-sm mb-6">
          Powering heavy engineering machinery manufacturing, statewide regional consumer retail distribution, and experiential fine dining hospitality across Odisha.
        </p>

        {/* 3 Verticals Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-2">
            <Factory size={14} className="text-[#C8973E]" />
            AEW Heavy Machinery
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-2">
            <ShoppingBag size={14} className="text-[#10B981]" />
            Odisha Cart Franchise
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-2">
            <UtensilsCrossed size={14} className="text-[#C8973E]" />
            Heritage Hospitality
          </span>
        </div>

      </div>
    </section>
  );
}
