import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, Factory, ShoppingCart, UtensilsCrossed, ChevronRight, Home } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function BusinessesHero() {
  return (
    <section className="relative overflow-hidden bg-[#07271E] border-b border-[#0D4738]/50 py-10 sm:py-14 lg:py-16 flex items-center justify-center text-center">
      {/* Full-bleed background corporate image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{ backgroundImage: "url('/images/pratima_hero.jpg')" }}
      ></div>

      {/* Balanced Dark Forest Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#07271E]/85 to-black/90 sm:bg-gradient-to-r sm:from-black/95 sm:via-[#07271E]/85 sm:to-black/90"></div>

      {/* Ambient subtle golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-48 sm:h-[320px] bg-[#C8973E]/15 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Centered Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Compact Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-3 sm:mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home size={12} />
            <span>Home</span>
          </Link>
          <ChevronRight size={11} className="text-gray-500" />
          <span className="text-[#C8973E] font-bold">Business Divisions</span>
        </nav>

        {/* Centered Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C8973E]/50 text-white shadow-md mb-3 sm:mb-4">
          <ShieldCheck size={14} className="text-[#C8973E]" />
          <span className="font-['Outfit'] font-bold text-[10px] sm:text-xs uppercase tracking-wider text-[#C8973E]">
            Govt. of Odisha DIC Approved • Regd No: {companyData.regdNo} • Since 2004
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-2 sm:mb-3 font-['Outfit'] drop-shadow-md">
          Pratima Group <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2B866] via-[#C8973E] to-[#F1CF88]">
            Business Verticals
          </span>
        </h1>

        {/* Tagline from brochure */}
        <p className="text-sm sm:text-base lg:text-lg font-bold text-[#E2B866] mb-2.5 max-w-2xl mx-auto font-['Outfit'] tracking-wide">
          "{companyData.tagline}"
        </p>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#D5D5D5] leading-relaxed max-w-2xl mx-auto font-sans font-normal drop-shadow-sm mb-5">
          Indigenous Industrial Paper Machinery Manufacturing (AEW Series), PAN-India Retail Franchise Expansion (Smart Collection), and Heritage Odia Hospitality.
        </p>

        {/* 3 Verticals Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1.5">
            <Factory size={13} className="text-[#C8973E]" />
            <span>Machinery Manufacturing</span>
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1.5">
            <ShoppingCart size={13} className="text-[#10B981]" />
            <span>Smart Collection Franchise</span>
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1.5">
            <UtensilsCrossed size={13} className="text-[#C8973E]" />
            <span>Fine Dining & Hospitality</span>
          </span>
        </div>

      </div>
    </section>
  );
}
