import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function BusinessCard({ division }) {
  const isLaunchingSoon = division.status === 'Launching Soon';

  return (
    <article className="bg-white rounded-3xl border border-[#E5ECE8] shadow-[0_4px_20px_rgba(13,71,56,0.05)] hover:shadow-[0_16px_36px_rgba(13,71,56,0.12)] hover:border-[#C8973E]/60 transition-all duration-300 flex flex-col h-full overflow-hidden group">
      
      {/* Card Visual Banner */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-[#07271E]">
        <img 
          src={division.image} 
          alt={division.title} 
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
          {division.badge && (
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${
              isLaunchingSoon
                ? 'bg-[#FAF5E8] text-[#A67828] border border-[#C8973E]/40'
                : 'bg-[#0D4738]/90 text-white border border-emerald-400/30'
            }`}>
              {isLaunchingSoon && <Sparkles size={11} className="text-[#C8973E]" />}
              {division.badge}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white z-10">
          <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md ${
            isLaunchingSoon ? 'bg-[#C8973E]/90 text-white' : 'bg-black/70 text-[#E2B866] border border-white/10'
          }`}>
            {division.status}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#A67828] mb-1.5 block">
          {division.subtitle}
        </span>

        <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 font-['Outfit'] group-hover:text-[#0D4738] transition-colors leading-snug">
          {division.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {division.description}
        </p>

        {/* Feature Highlights */}
        {division.highlights && (
          <ul className="space-y-2 mb-6 mt-auto">
            {division.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-800 font-medium">
                <CheckCircle2 size={14} className="text-[#108E68] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Sleek Action Link */}
        <div className="pt-3.5 border-t border-gray-100 mt-auto">
          <Link 
            to={division.route} 
            className={`w-full h-10 sm:h-11 px-4 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 shadow-sm active:scale-[0.98] ${
              isLaunchingSoon 
                ? 'bg-[#FAF5E8] text-[#A67828] hover:bg-[#F3EAD3] border border-[#C8973E]/30' 
                : 'bg-gradient-to-r from-[#C8973E] to-[#B3812C] hover:from-[#D4A347] hover:to-[#C8973E] text-white shadow-md'
            }`}
          >
            <span>{division.ctaText || 'Learn More'}</span>
            <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </div>

    </article>
  );
}
