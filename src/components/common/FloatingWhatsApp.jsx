import React from 'react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent('Hello Pratima Group, I am contacting you from the website.')}`;

  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 flex items-center group select-none pointer-events-auto"
    >
      {/* Tooltip on hover */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#07271E]/95 backdrop-blur-xl text-white text-xs font-semibold shadow-xl border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
        <span className="text-emerald-300 mr-1.5">●</span>
        <span>Chat with us on WhatsApp</span>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#1EBE5D] via-[#25D366] to-[#4AE688] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 ring-1 ring-white/30 transition-all duration-300 relative"
      >
        <WhatsAppIcon size={24} color="#FFFFFF" className="sm:hidden" />
        <WhatsAppIcon size={28} color="#FFFFFF" className="hidden sm:block" />

        {/* Subtle Online Ping Indicator */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white flex items-center justify-center shadow-sm">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10B981] animate-ping opacity-75"></span>
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10B981] absolute"></span>
        </span>
      </a>
    </aside>
  );
}
