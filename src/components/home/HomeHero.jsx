import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cog,
  TrendingUp
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function HomeHero() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-60px)] sm:min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#141414] border-b border-[#252525]">
        {/* Full-bleed background image - Crisp & Clearly Visible */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
          style={{ backgroundImage: "url('/images/pratima_hero.jpg')" }}
        ></div>

        {/* Balanced Dark Contrast Overlay - Rich black tone for maximum text pop & visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80 sm:bg-gradient-to-r sm:from-black/85 sm:via-black/70 sm:to-black/50"></div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 relative z-10 w-full flex flex-col justify-center my-auto">
          <div className="max-w-4xl flex flex-col items-start w-full">

            {/* Responsive Trust & Heritage Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-black/60 sm:bg-white/10 backdrop-blur-md border border-[#F4B400]/40 text-white shadow-md mb-3 sm:mb-4 max-w-full">
              <span className="font-['Outfit'] font-bold text-[10px] sm:text-xs uppercase tracking-wider text-[#F4B400] whitespace-nowrap">
                {companyData.badge}
              </span>
              <span className="text-white/40 hidden xs:inline">•</span>
              <span className="text-[10px] sm:text-xs font-medium text-[#E5E5E5] truncate">
                Odisha's Industrial Powerhouse
              </span>
            </div>

            {/* Responsive Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-2.5 sm:mb-4 font-['Outfit']">
              Building Businesses. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] via-[#F8C847] to-[#F28C28] drop-shadow-sm">
                Powering Progress.
              </span>
            </h1>

            {/* Responsive Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-[#D8D8D8] leading-relaxed mb-5 sm:mb-7 max-w-2xl font-sans font-normal">
              Established in 2004 in Odisha, Pratima Group of Industry spearheads indigenous heavy-duty machinery manufacturing (AEW Series), statewide retail franchise distribution (Odisha Kart), and premium regional hospitality.
            </p>

            {/* Responsive Action Buttons (The Two Buttons) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto mb-5 sm:mb-7">
              <Link
                to="/businesses"
                className="h-11 sm:h-12 py-2 sm:py-3 px-5 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base justify-center bg-[#C8973E] hover:bg-[#B3812C] text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/machinery"
                className="h-11 sm:h-12 py-2 sm:py-3 px-5 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base justify-center bg-white hover:bg-gray-100 text-[#1E1E1E] transition-all shadow-md flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
              >
                <Cog size={16} className="text-[#C8973E]" />
                <span>Machinery Catalogue</span>
              </Link>
            </div>

            {/* 4 Trust & Growth Metrics Cards (Directly Below the Two Buttons) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 w-full">
              <div className="bg-black/55 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-[#F4B400]/40 transition-colors shadow-lg">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F4B400] font-['Outfit'] leading-none">20+</div>
                <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-1">Years of Integrity</div>
              </div>

              <div className="bg-black/55 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-[#F4B400]/40 transition-colors shadow-lg">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Outfit'] leading-none">8+</div>
                <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-1">AEW Machine Models</div>
              </div>

              <div className="bg-black/55 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-[#F4B400]/40 transition-colors shadow-lg">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Outfit'] leading-none">1,200+</div>
                <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-1">Industrial Clients</div>
              </div>

              <div className="bg-black/55 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-emerald-400/50 transition-colors shadow-lg flex flex-col justify-between group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1 text-emerald-400">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] leading-none">
                      Growing
                    </span>
                    <TrendingUp size={18} className="stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Sleek Upward Growth Graph */}
                  <div className="w-12 sm:w-14 h-6 sm:h-7 shrink-0 hidden xs:block">
                    <svg viewBox="0 0 60 28" fill="none" className="w-full h-full overflow-visible text-emerald-400">
                      <defs>
                        <linearGradient id="heroGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2 24 L14 19 L26 21 L38 11 L48 14 L58 4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 24 L14 19 L26 21 L38 11 L48 14 L58 4 L58 28 L2 28 Z"
                        fill="url(#heroGrowthGrad)"
                      />
                      <circle cx="58" cy="4" r="3" fill="#34D399" className="animate-pulse" />
                    </svg>
                  </div>
                </div>

                <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-1">
                  PAN-India Network
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
