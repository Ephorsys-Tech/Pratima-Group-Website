import React from 'react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent('Hello Pratima Group, I am contacting you from the website.')}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#181818] text-white text-xs font-semibold shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
        <span>Chat with us on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        <WhatsAppIcon size={28} color="#FFFFFF" />
        
        {/* Subtle Online Ping Indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping opacity-75"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] absolute"></span>
        </span>
      </a>
    </aside>
  );
}
