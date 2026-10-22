import React from 'react';
import { UtensilsCrossed, Sparkles, Clock, MapPin, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RestaurantHero() {
  return (
    <section className="relative overflow-hidden bg-[#07271E] border-b border-[#0D4738]/50 py-16 lg:py-24 flex items-center">
      {/* Full-bleed background luxury dining image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{ backgroundImage: "url('/images/restaurant_lux.jpg')" }}
      ></div>

      {/* Opulent Dark Forest & Gold Hospitality Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#07271E]/90 sm:bg-gradient-to-r sm:from-black/92 sm:via-black/80 sm:to-[#07271E]/70"></div>

      {/* Ambient subtle golden glow */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-[600px] h-48 sm:h-[350px] bg-[#C8973E]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Prominent Launching Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C8973E]/60 text-white shadow-md mb-4 sm:mb-6">
            <Sparkles size={15} className="text-[#C8973E]" />
            <span className="font-['Outfit'] font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#C8973E]">
              Launching Soon in Central Bhubaneswar
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 font-['Outfit'] drop-shadow-md">
            Pratima Fine Dining & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2B866] via-[#C8973E] to-[#F1CF88]">
              Heritage Hospitality
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#E5E5E5] leading-relaxed mb-6 sm:mb-8 font-sans font-normal max-w-2xl drop-shadow-sm">
            A grand celebration of Odisha's timeless culinary heritage, royal temple-town feasts, and contemporary culinary artistry — crafted in the heart of the capital city.
          </p>

          {/* Status Box */}
          <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 mb-8 max-w-xl shadow-lg">
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-[#C8973E] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-white">Development Status: Final Interior Fit-Out</h4>
                <p className="text-xs text-[#D1D5DB] mt-1 leading-relaxed">
                  Notice: This culinary destination is currently preparing for its grand launch. In accordance with company policy, table reservations, direct bookings, and online food ordering are not currently active.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn btn-primary py-3 px-6 text-sm sm:text-base font-bold flex items-center gap-2">
              <Bell size={16} />
              <span>Enquire for Launch Invitations</span>
            </Link>

            <div className="flex items-center gap-2 text-sm text-white/80 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
              <MapPin size={15} className="text-[#C8973E]" />
              <span>Central Bhubaneswar, Odisha</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
