import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  Home
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/machineryData';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function MachineDetailHero({ machine }) {
  const isCrank = machine.driveType === 'Crank';
  const whatsappUrl = getWhatsAppUrl(machine);

  return (
    <section className="relative overflow-hidden w-full max-w-full bg-[#07271E] text-white py-3 sm:py-5 lg:py-6 border-b border-emerald-900/40">
      {/* Subtle Background Glow - Strictly Constrained */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">

        {/* Compact Navigation Bar: Back Button + Dark Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
          <Link 
            to="/machinery" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-200 hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1 rounded-full border border-white/15 shadow-xs"
          >
            <ArrowLeft size={13} />
            <span>Back to Machinery</span>
          </Link>

          {/* Inline Dark Breadcrumb Path */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={12} />
              <span>Home</span>
            </Link>
            <ChevronRight size={11} className="text-gray-500" />
            <Link to="/machinery" className="hover:text-white transition-colors">
              Machinery
            </Link>
            <ChevronRight size={11} className="text-gray-500" />
            <span className="text-[#F4B400] font-bold">{machine.modelCode}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center w-full max-w-full">

          {/* Machine Showcase Card (Left Column) - Compact & High-Impact */}
          <div className="lg:col-span-5 w-full max-w-full">
            <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-white/20 relative group w-full max-w-full overflow-hidden">
              
              {/* Top Tags */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#07271E] text-white font-mono text-[10px] sm:text-xs font-bold">
                    {machine.modelCode}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${
                    isCrank ? 'bg-orange-100 text-orange-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {machine.driveType} Drive
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 flex items-center gap-1 shrink-0">
                  <Sparkles size={11} className="text-[#F4B400]" />
                  <span>Verified OEM</span>
                </span>
              </div>

              {/* Machine Product Image - Ergonomic & Scaled Height */}
              <div className="w-full h-44 sm:h-52 lg:h-60 xl:h-64 flex items-center justify-center p-2 bg-[#F8FAF9] rounded-xl">
                <img
                  src={machine.image}
                  alt={`${machine.modelCode} ${machine.name}`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Subtle Specs Row */}
              <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                <div className="truncate mr-2">
                  <span className="text-gray-400">Capacity: </span>
                  <strong className="text-gray-900 font-bold">{machine.capacity}</strong>
                </div>
                <span className="text-emerald-700 font-semibold shrink-0 flex items-center gap-1 text-[11px]">
                  <CheckCircle2 size={12} className="text-emerald-600" />
                  <span>Tested</span>
                </span>
              </div>

            </div>
          </div>

          {/* Machine Info & Action Card (Right Column) - Sized to Fit Screen */}
          <div className="lg:col-span-7 w-full max-w-full">
            
            {/* Category */}
            <div className="inline-block text-[10px] sm:text-xs font-bold text-[#F4B400] tracking-wider uppercase mb-1">
              {machine.category} • Indigenous Odisha Engineering
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-3xl lg:text-3.5xl font-extrabold text-white font-['Outfit'] mb-1 tracking-tight leading-tight">
              {machine.name}
            </h1>

            {/* Tagline */}
            <p className="text-xs sm:text-sm lg:text-base text-emerald-300 font-medium mb-1.5 leading-snug">
              {machine.tagline}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 font-normal line-clamp-2 sm:line-clamp-3">
              {machine.description}
            </p>

            {/* Modern Compact Quotation Card */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/15 p-3.5 sm:p-4.5 shadow-xl w-full max-w-full">
              
              {/* Price & Deal Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/10">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold leading-none mb-0.5">
                    Official Factory Quotation
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xl sm:text-2xl font-black text-[#E2B866] font-['Outfit']">
                      Available on Enquiry
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all shrink-0"
                      title={`Enquire for official price of ${machine.modelCode} on WhatsApp`}
                    >
                      <WhatsAppIcon size={12} color="#FFFFFF" />
                      <span>Enquire</span>
                    </a>
                  </div>
                  {machine.priceNote && (
                    <span className="text-[10px] text-gray-300 block mt-1 font-normal">
                      {machine.priceNote}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Govt. DIC Approved
                  </span>
                </div>
              </div>

              {/* 3 Simple Trust Metrics */}
              <div className="grid grid-cols-3 gap-2 my-2.5 text-center">
                <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-gray-400">Warranty</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">1-Yr Free</div>
                </div>
                <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-gray-400">Training</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">Free Demo</div>
                </div>
                <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-gray-400">Dispatch</div>
                  <div className="text-xs sm:text-sm font-bold text-[#F4B400] mt-0.5">Pan-India</div>
                </div>
              </div>

              {/* Direct Buttons - Sleek & Fully Visible on Screen */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 sm:py-2.5 px-4 font-bold rounded-xl text-white bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-xs sm:text-sm"
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="py-2.5 sm:py-2.5 px-4 font-bold rounded-xl text-white bg-white/10 hover:bg-white hover:text-[#07271E] border border-white/20 flex items-center justify-center gap-1.5 transition-all text-xs sm:text-sm"
                >
                  <Phone size={14} />
                  <span>Call Us</span>
                </a>
              </div>

              <div className="text-[10px] sm:text-[11px] text-gray-400 mt-2 text-center sm:text-left flex items-center justify-between flex-wrap gap-1.5">
                <span>⚡ Instant quotation & live video demonstration on WhatsApp.</span>
                <span className="text-white/60">Toll-Free: <strong className="text-white">{companyData.contacts.tollFree}</strong></span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
