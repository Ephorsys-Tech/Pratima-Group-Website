import React from 'react';
import { PhoneCall } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#121212] border-b border-[#2A2A2A] py-14 sm:py-20 lg:py-24 flex items-center justify-center text-center">
      {/* Full-bleed background image with clear responsive visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pratima_hero.jpg')" }}
      ></div>

      {/* Balanced Semi-Transparent Dark Overlay matching reference image */}
      <div className="absolute inset-0 bg-black/65 sm:bg-black/60"></div>

      {/* Ambient subtle golden glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-48 sm:h-[300px] bg-[#F4B400]/15 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Centered Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Centered Pill Badge matching reference screenshot */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#F4B400]/50 text-white shadow-md mb-4 sm:mb-5">
          <PhoneCall size={15} className="text-[#F4B400]" />
          <span className="font-['Outfit'] font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#F4B400]">
            Direct Factory & Corporate Desk
          </span>
        </div>

        {/* Centered Headline matching reference layout */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 font-['Outfit'] drop-shadow-md">
          Connect With Us. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] via-[#F8C847] to-[#F28C28]">
            Contact Pratima Group
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-[#E5E5E5] leading-relaxed max-w-2xl mx-auto font-sans font-normal drop-shadow-sm">
          Reach out directly to our engineering plants in Mancheswar & Khurda, our retail expansion desk, or corporate headquarters in Odisha for orders and quotations.
        </p>

      </div>
    </section>
  );
}
