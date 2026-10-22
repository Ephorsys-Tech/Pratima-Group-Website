import React from 'react';
import { Cog, ShieldCheck, Factory } from 'lucide-react';

export default function MachineryHero() {
  return (
    <section className="relative overflow-hidden bg-[#07271E] border-b border-[#0D4738]/50 py-14 sm:py-20 lg:py-24 flex items-center justify-center text-center">
      {/* Full-bleed background machinery image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{ backgroundImage: "url('/images/machinery_hero.jpg')" }}
      ></div>

      {/* High-Contrast Balanced Dark Forest/Obsidian Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-[#07271E]/90 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/75 sm:to-black/80"></div>

      {/* Ambient subtle golden & emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-48 sm:h-[320px] bg-[#C8973E]/15 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Centered Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Centered Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C8973E]/50 text-white shadow-md mb-4 sm:mb-5">
          <Cog size={15} className="text-[#C8973E] animate-spin-slow" />
          <span className="font-['Outfit'] font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#C8973E]">
            AEW Machine Tool Series • Mancheswar & Khurda
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 font-['Outfit'] drop-shadow-md">
          Industrial Machinery & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2B866] via-[#C8973E] to-[#F1CF88]">
            Heavy Equipment
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-[#E5E5E5] leading-relaxed max-w-2xl mx-auto font-sans font-normal drop-shadow-sm mb-6">
          Precision mechanical crank presses and heavy-duty hydraulic forming machines engineered and fabricated indigenously at Mancheswar & Khurda Industrial Estates in Odisha.
        </p>

        {/* Quick Capabilities Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8973E]" />
            4 Crank Power Presses (30T – 60T)
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            4 Hydraulic Press Systems (60T – 200T)
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1.5">
            <Factory size={13} className="text-[#C8973E]" />
            Live Trial Clamping Demo Available
          </span>
        </div>

      </div>
    </section>
  );
}
