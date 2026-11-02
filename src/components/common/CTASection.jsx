import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from './WhatsAppIcon';

export default function CTASection({
  title = "Ready to Power Your Next Project?",
  subtitle = "Whether you need high-precision AEW machinery, franchise opportunities with Odisha Kart, or business collaboration with Pratima Group — our team is here to assist you.",
  primaryActionText = "Contact Us Today",
  primaryActionLink = "/contact",
  showWhatsApp = true
}) {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FAFAF7] w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-14 text-center text-white bg-gradient-to-br from-[#1E2522] via-[#0D241C] to-[#071913] border border-[#C8973E]/30 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Radial Glow strictly contained */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#C8973E]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8973E]/15 border border-[#C8973E]/35 text-[#E2B866] text-xs font-semibold mb-3 sm:mb-4">
              <ShieldCheck size={14} className="text-[#C8973E]" />
              <span>{companyData.badge} • Direct Factory & Executive Assistance</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Outfit'] mb-2.5 sm:mb-3 tracking-tight leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed mb-5 sm:mb-7 max-w-2xl font-normal">
              {subtitle}
            </p>

            {/* Action Buttons - Sleek & Compact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                to={primaryActionLink}
                className="w-full sm:w-auto py-2.5 px-5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#C8973E] to-[#B3812C] hover:from-[#D4A347] hover:to-[#C8973E] shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <span>{primaryActionText}</span>
                <ArrowRight size={15} />
              </Link>

              {showWhatsApp && (
                <a
                  href={`https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent('Hello Pratima Group, I would like to make an enquiry regarding your business operations and products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" />
                  <span>WhatsApp Chat</span>
                </a>
              )}

              <a
                href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white hover:text-[#0D4738] border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={14} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
