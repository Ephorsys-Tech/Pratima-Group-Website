import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Cog,
  Award,
  MapPin,
  Factory,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function 
HomeHero() {
  return (
    <section className="relative min-h-[auto] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#141414] border-b border-[#252525]">
      {/* Full-bleed background image with responsive cover */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-center scale-105 transition-transform duration-1000 ease-out"
        style={{ backgroundImage: "url('/images/pratima_hero.jpg')" }}
      ></div>

      {/* High-Contrast Responsive Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/95 via-[#0E0E0E]/90 to-[#141414]/95 sm:bg-gradient-to-r sm:from-[#0E0E0E]/95 sm:via-[#141414]/85 sm:to-[#1A1A1A]/55"></div>

      {/* Golden Ambient Glows */}
      <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-[#F4B400]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-60 sm:w-[500px] h-60 sm:h-[500px] bg-[#F28C28]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none"></div>

      {/* Hero Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10 w-full">
        <div className="max-w-3xl flex flex-col items-start">

          {/* Responsive Trust & Heritage Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 sm:bg-white/10 backdrop-blur-md border border-[#F4B400]/40 text-white shadow-md mb-4 sm:mb-6 max-w-full">
            <span className="font-['Outfit'] font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#F4B400] whitespace-nowrap">
              {companyData.badge}
            </span>
            <span className="text-white/40 hidden xs:inline">•</span>
            <span className="text-[11px] sm:text-xs font-medium text-[#E5E5E5] truncate">
              Odisha's Industrial Powerhouse
            </span>
          </div>

          {/* Responsive Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 font-['Outfit']">
            Building Businesses. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] via-[#F8C847] to-[#F28C28] drop-shadow-sm">
              Powering Progress.
            </span>
          </h1>

          {/* Responsive Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#D8D8D8] leading-relaxed mb-6 sm:mb-10 max-w-2xl font-sans font-normal">
            Established in 2004 in Odisha, Pratima Group of Industry spearheads indigenous heavy-duty machinery manufacturing (AEW Series), statewide retail franchise distribution (Odisha Cart), and premium regional hospitality.
          </p>

          {/* Responsive Action Buttons (Stacked on mobile, row on tablet/desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12">
            <Link
              to="/businesses"
              className="btn btn-primary btn-lg w-full sm:w-auto justify-center shadow-[0_8px_30px_rgba(244,180,0,0.4)] hover:shadow-[0_12px_36px_rgba(217,154,0,0.55)] text-sm sm:text-base py-3 sm:py-3.5"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/machinery"
              className="btn btn-secondary btn-lg w-full sm:w-auto justify-center bg-white/10 hover:bg-white text-white hover:text-[#252525] border-white/25 hover:border-white backdrop-blur-md transition-all shadow-md text-sm sm:text-base py-3 sm:py-3.5"
            >
              <Cog size={18} className="text-[#F4B400]" />
              <span>Machinery Catalogue</span>
            </Link>
          </div>

          {/* Responsive Metrics Strip (2x2 on mobile, 4-col on tablet/desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full">
            <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-[#F4B400]/40 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F4B400] font-['Outfit']">20+</div>
              <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-0.5">Years of Integrity</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-[#F4B400]/40 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Outfit']">8+</div>
              <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-0.5">AEW Machine Models</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-[#F4B400]/40 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Outfit']">1,200+</div>
              <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-0.5">Industrial Clients</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 hover:border-[#F4B400]/40 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F4B400] font-['Outfit']">2 Plants</div>
              <div className="text-[11px] sm:text-xs text-[#BBBBBB] font-medium mt-0.5">Bhubaneswar & Khurda</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
