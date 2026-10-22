import React from 'react';
import { ShoppingBag, ArrowRight, Store, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OdishaCartHero() {
  return (
    <section className="relative overflow-hidden bg-[#07271E] border-b border-[#0D4738]/50 py-16 lg:py-24 flex items-center">
      {/* Full-bleed background retail image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{ backgroundImage: "url('/images/odisha_cart.jpg')" }}
      ></div>

      {/* Balanced High-Contrast Dark Forest/Amber Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#07271E]/90 sm:bg-gradient-to-r sm:from-black/92 sm:via-black/80 sm:to-[#07271E]/70"></div>

      {/* Ambient subtle golden glow */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-[600px] h-48 sm:h-[350px] bg-[#C8973E]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#10B981]/50 text-white shadow-md mb-4 sm:mb-6">
            <ShoppingBag size={15} className="text-[#10B981]" />
            <span className="font-['Outfit'] font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#10B981]">
              Pratima Retail & Franchise Ecosystem
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 font-['Outfit'] drop-shadow-md">
            Odisha Cart — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2B866] via-[#C8973E] to-[#F1CF88]">
              Empowering Local Commerce
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#E5E5E5] leading-relaxed mb-6 sm:mb-8 font-sans font-normal max-w-2xl drop-shadow-sm">
            Connecting regional agricultural producers, cottage artisans, and organic farmers of Odisha directly to urban consumer shelves through an expanding chain of modern franchise supermarkets.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a 
              href="#franchise" 
              className="btn btn-primary shadow-lg hover:shadow-xl py-3 px-6 text-sm sm:text-base font-bold flex items-center gap-2"
            >
              <span>Franchise Opportunities</span>
              <ArrowRight size={16} />
            </a>

            <Link 
              to="/contact" 
              className="btn btn-secondary bg-white/10 hover:bg-white text-white hover:text-[#0D4738] border-white/20 hover:border-white backdrop-blur-md transition-all py-3 px-6 text-sm sm:text-base font-bold"
            >
              <span>Distributor Registration</span>
            </Link>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/15 max-w-lg">
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C8973E] font-['Outfit']">500+</div>
              <div className="text-[11px] sm:text-xs text-[#D1D5DB] font-medium mt-0.5">Curated Odia SKUs</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">30+</div>
              <div className="text-[11px] sm:text-xs text-[#D1D5DB] font-medium mt-0.5">Artisan Clusters</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#10B981] font-['Outfit']">Zero</div>
              <div className="text-[11px] sm:text-xs text-[#D1D5DB] font-medium mt-0.5">Initial Royalty Fees</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
