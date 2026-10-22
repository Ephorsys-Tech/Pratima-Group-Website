import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import './BusinessCard.css';

export default function BusinessCard({ division }) {
  const isLaunchingSoon = division.status === 'Launching Soon';

  return (
    <article className="business-card bg-white rounded-3xl border border-[#EFE8D6] shadow-[0_4px_20px_rgba(37,37,37,0.04)] hover:shadow-[0_16px_36px_rgba(37,37,37,0.09)] hover:border-[#F4B400]/60 transition-all duration-300 flex flex-col overflow-hidden group">
      
      {/* Card Visual Banner */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-[#EAE5D9]">
        <img 
          src={division.image} 
          alt={division.title} 
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          {division.badge && (
            <span className={`badge ${isLaunchingSoon ? 'badge-launching' : 'badge-gold'} shadow-sm`}>
              {isLaunchingSoon && <Sparkles size={11} />}
              {division.badge}
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${
            isLaunchingSoon ? 'bg-[#F4B400]/90 text-[#252525]' : 'bg-[#252525]/80 text-[#FFF6D8]'
          }`}>
            {division.status}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-7 sm:p-8 flex flex-col flex-1">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#D99A00] mb-2 block">
          {division.subtitle}
        </span>

        <h3 className="text-xl sm:text-2xl font-bold text-[#252525] mb-3 font-['Outfit'] group-hover:text-[#D99A00] transition-colors">
          {division.title}
        </h3>

        <p className="text-sm text-[#666666] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
          {division.description}
        </p>

        {/* Feature Highlights */}
        {division.highlights && (
          <ul className="space-y-2.5 mb-8 mt-auto">
            {division.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252525] font-medium">
                <CheckCircle2 size={16} className="text-[#D99A00] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Direct Action Link */}
        <div className="pt-4 border-t border-[#EFE8D6]">
          <Link 
            to={division.route} 
            className={`btn w-full justify-center ${
              isLaunchingSoon ? 'btn-secondary hover:bg-[#FFF6D8]' : 'btn-primary'
            }`}
          >
            <span>{division.ctaText || 'Learn More'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

    </article>
  );
}
