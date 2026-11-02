import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cog, 
  ShoppingCart, 
  UtensilsCrossed, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  FileText, 
  Package, 
  Layers, 
  Building2, 
  Sparkles,
  Zap,
  Phone,
  Store,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { 
  businessDivisions, 
  smartCollectionSupplyChain, 
  smartCollectionRequiredDocs, 
  smartCollectionOnboardingSteps 
} from '../../data/businessData';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function BusinessesList() {
  const [activeTab, setActiveTab] = useState('all');

  const machineryDivision = businessDivisions.find(d => d.id === 'machinery');
  const smartCollectionDivision = businessDivisions.find(d => d.id === 'smart-collection');
  const restaurantDivision = businessDivisions.find(d => d.id === 'restaurant');

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#FAFAF7] w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Modern Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-10 sm:mb-14 p-1.5 rounded-2xl bg-white border border-[#E5ECE8] shadow-sm max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0D4738] text-white shadow-sm'
                : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-[#F4F8F6]'
            }`}
          >
            All 3 Divisions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('machinery')}
            className={`px-3 sm:px-4 py-2 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              activeTab === 'machinery'
                ? 'bg-[#0D4738] text-white shadow-sm'
                : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-[#F4F8F6]'
            }`}
          >
            <Cog size={14} className={activeTab === 'machinery' ? 'text-[#C8973E]' : 'text-gray-400'} />
            <span>1. Machinery</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('smart-collection')}
            className={`px-3 sm:px-4 py-2 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              activeTab === 'smart-collection'
                ? 'bg-[#0D4738] text-white shadow-sm'
                : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-[#F4F8F6]'
            }`}
          >
            <ShoppingCart size={14} className={activeTab === 'smart-collection' ? 'text-[#108E68]' : 'text-gray-400'} />
            <span>2. Smart Collection</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('restaurant')}
            className={`px-3 sm:px-4 py-2 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              activeTab === 'restaurant'
                ? 'bg-[#0D4738] text-white shadow-md'
                : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-[#F4F8F6]'
            }`}
          >
            <UtensilsCrossed size={14} className={activeTab === 'restaurant' ? 'text-[#C8973E]' : 'text-gray-400'} />
            <span>3. Hospitality</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* DIVISION 1: INDUSTRIAL MACHINERY MANUFACTURING (AEW SERIES) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'machinery') && machineryDivision && (
          <article id="division-machinery" className="mb-12 sm:mb-16 scroll-mt-24 group">
            <div className="bg-white rounded-3xl border border-[#E5ECE8] shadow-[0_4px_25px_rgba(13,71,56,0.06)] hover:shadow-[0_12px_36px_rgba(13,71,56,0.12)] transition-all duration-300 p-5 sm:p-8 lg:p-10 overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0D4738] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <Cog size={13} className="text-[#C8973E]" />
                    <span>Vertical 01 • Heavy Engineering</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EDF7F3] border border-emerald-300 text-emerald-800 text-[11px] sm:text-xs font-bold flex items-center gap-1">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    <span>Approved by Govt. of Odisha DIC</span>
                  </span>
                  <span className="hidden sm:inline-block text-[11px] font-mono font-bold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-md">
                    Regd: {companyData.regdNo}
                  </span>
                </div>

                <Link
                  to="/machinery"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0D4738] hover:text-[#C8973E] transition-colors"
                >
                  <span>Explore Catalogue</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Main Content Grid: Left Visual & Interactive Portfolio | Right Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Visual Showcase + 6 Machine Thumbnails */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Visual Stage */}
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-[#07271E] shadow-md border border-gray-200 group/img">
                    <img 
                      src={machineryDivision.image} 
                      alt={machineryDivision.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] font-bold text-[#F4B400] uppercase tracking-wider block">AEW Machine Series</span>
                        <span className="text-sm font-extrabold font-['Outfit']">6 Core Industrial Machines</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-bold backdrop-blur-md">
                        Crank & Hydraulic
                      </span>
                    </div>
                  </div>

                  {/* Interactive Quick Machine Thumbnails (User-friendly clickable gallery) */}
                  <div className="bg-[#F8FAF9] p-3 sm:p-4 rounded-2xl border border-[#E5ECE8]">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={14} className="text-[#C8973E]" />
                        <span>Interactive AEW Machine Portfolio</span>
                      </span>
                      <Link to="/machinery" className="text-[11px] font-bold text-[#0D4738] hover:text-[#C8973E]">
                        All 8 Models →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {machineryDivision.modelsSummary.map((m) => (
                        <Link 
                          key={m.code} 
                          to={`/machinery/${m.slug}`}
                          className="p-2 rounded-xl bg-white hover:bg-[#EDF7F3] border border-gray-200 hover:border-[#108E68] transition-all flex flex-col items-center text-center group/card shadow-2xs"
                        >
                          <div className="w-12 h-12 flex items-center justify-center p-1">
                            <img 
                              src={m.image} 
                              alt={m.name} 
                              className="max-h-full max-w-full object-contain group-hover/card:scale-110 transition-transform"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-[#0D4738] mt-1">{m.code}</span>
                          <span className="text-[9px] text-gray-500 line-clamp-1 leading-tight">{m.name.replace(' Making Machine', '').replace(' Machine', '')}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Narrative, 4 Key Capabilities & CTAs */}
                <div className="lg:col-span-7 flex flex-col">
                  
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A67828] mb-1">
                    Kosala, Angul & Mancheswar Works • Regd No: {companyData.regdNo}
                  </span>

                  <h2 className="text-xl sm:text-3xl font-extrabold text-[#111827] font-['Outfit'] leading-tight mb-2">
                    {machineryDivision.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-bold text-[#0D4738] mb-3">
                    "{machineryDivision.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {machineryDivision.description}
                  </p>

                  {/* 4 Clean Engineering Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E5ECE8] flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ⚡
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Ultra-Low Power</div>
                        <div className="text-[11px] text-gray-500">Only 1 to 2 Units/hr consumption</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E5ECE8] flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FAF5E8] text-[#A67828] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ⚙️
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">High Speed Production</div>
                        <div className="text-[11px] text-gray-500">1,200 to 2,500 pieces per hour</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E5ECE8] flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        📐
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">4" to 18" Die Capacity</div>
                        <div className="text-[11px] text-gray-500">Dona, wrinkle plates & buffet thalis</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E5ECE8] flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FAF5E8] text-[#A67828] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        🚚
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Pan-India Freight</div>
                        <div className="text-[11px] text-gray-500">Free operator training & 1-Yr support</div>
                      </div>
                    </div>
                  </div>

                  {/* Responsive Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      to="/machinery"
                      className="py-2.5 px-5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0D4738] to-[#07271E] hover:from-[#145C49] hover:to-[#0D4738] shadow-md flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Explore Machinery Catalogue</span>
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href={`https://wa.me/919437976060?text=${encodeURIComponent('Hello Pratima Group, I am interested in your AEW paper disposable machinery lineup.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <WhatsAppIcon size={16} color="#FFFFFF" />
                      <span>WhatsApp Quotation</span>
                    </a>

                    <a
                      href="tel:+919437976060"
                      className="py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Phone size={14} />
                      <span>Call Us</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* DIVISION 2: SMART COLLECTION SUPERMARKET FRANCHISE */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'smart-collection') && smartCollectionDivision && (
          <article id="division-smart-collection" className="mb-12 sm:mb-16 scroll-mt-24 group">
            <div className="bg-white rounded-3xl border border-[#E5ECE8] shadow-[0_4px_25px_rgba(200,151,62,0.06)] hover:shadow-[0_12px_36px_rgba(200,151,62,0.12)] transition-all duration-300 p-5 sm:p-8 lg:p-10 overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C8973E] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <ShoppingCart size={13} className="text-white" />
                    <span>Vertical 02 • Retail Franchise</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FAF5E8] border border-[#C8973E]/30 text-[#A67828] text-[11px] sm:text-xs font-bold flex items-center gap-1">
                    <Sparkles size={13} className="text-[#C8973E]" />
                    <span>India's Fastest Growing • PAN INDIA</span>
                  </span>
                </div>

                <Link
                  to="/odisha-cart"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#A67828] hover:text-[#C8973E] transition-colors"
                >
                  <span>Franchise Overview</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Main Content Grid: Left Visual Stage & Income Summary | Right Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Visual Showcase + Franchise Key Stats */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Visual Stage */}
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-[#1A1A1A] shadow-md border border-gray-200 group/img">
                    <img 
                      src={smartCollectionDivision.image} 
                      alt={smartCollectionDivision.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] font-bold text-[#E2B866] uppercase tracking-wider block">Turnkey Model</span>
                        <span className="text-sm font-extrabold font-['Outfit']">Direct Sourcing to Franchise</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#C8973E]/90 text-white text-[10px] font-bold backdrop-blur-md">
                        45-Day Launch
                      </span>
                    </div>
                  </div>

                  {/* 3 High-Impact Stat Pills */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-[#FAF5E8] border border-[#C8973E]/20 text-center">
                      <span className="text-[10px] text-gray-500 uppercase block font-semibold">Store Setup</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#A67828] font-['Outfit']">45 Days</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#EDF7F3] border border-emerald-300 text-center">
                      <span className="text-[10px] text-gray-500 uppercase block font-semibold">Margin</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#0D4738] font-['Outfit']">20% - 30%</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FAF5E8] border border-[#C8973E]/20 text-center">
                      <span className="text-[10px] text-gray-500 uppercase block font-semibold">Products</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#A67828] font-['Outfit']">10,000+</span>
                    </div>
                  </div>

                  {/* Income Callout Strip */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#07271E] to-[#0D4738] text-white flex items-center justify-between gap-3 shadow-sm">
                    <div>
                      <span className="text-[10px] text-emerald-200 uppercase tracking-wider block">Expected Net Income</span>
                      <span className="text-sm sm:text-base font-extrabold text-[#E2B866] font-['Outfit']">₹50,000 – ₹3 Lac /mo</span>
                    </div>
                    <span className="text-[10px] text-gray-300 bg-white/10 px-2 py-1 rounded-lg shrink-0">
                      500 Sqft Basis
                    </span>
                  </div>
                </div>

                {/* Right Column: Narrative, 4 Franchise Advantages & CTAs */}
                <div className="lg:col-span-7 flex flex-col">
                  
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A67828] mb-1">
                    Turnkey Retail Expansion • 500 to 10,000 Sqft Footprint
                  </span>

                  <h2 className="text-xl sm:text-3xl font-extrabold text-[#111827] font-['Outfit'] leading-tight mb-2">
                    {smartCollectionDivision.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-bold text-[#A67828] mb-3">
                    "{smartCollectionDivision.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {smartCollectionDivision.description}
                  </p>

                  {/* 4 Clean Franchise Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    <div className="p-3 rounded-xl bg-[#FAF5E8]/60 border border-[#C8973E]/20 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FAF5E8] text-[#A67828] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        🏪
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">45-Day Turnkey Setup</div>
                        <div className="text-[11px] text-gray-500">Racks, counters, lighting & branding included</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EDF7F3] border border-emerald-200 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        📈
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Direct Sourcing Margin</div>
                        <div className="text-[11px] text-gray-500">20% to 30% gross profit with no wholesalers</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF5E8]/60 border border-[#C8973E]/20 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FAF5E8] text-[#A67828] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        💻
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Autopilot POS Software</div>
                        <div className="text-[11px] text-gray-500">Barcode scanner, stock alerts & GST billing</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EDF7F3] border border-emerald-200 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        📑
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">3 Months Free Accounting</div>
                        <div className="text-[11px] text-gray-500">ITC & 2A/2B GST reconciliation included</div>
                      </div>
                    </div>
                  </div>

                  {/* Responsive Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      to="/odisha-cart"
                      className="py-2.5 px-5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#C8973E] to-[#B3812C] hover:from-[#D4A347] hover:to-[#C8973E] shadow-md flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Explore Franchise Model</span>
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href={`https://wa.me/919437976060?text=${encodeURIComponent('Hello Pratima Group, I am interested in opening a Smart Collection supermarket franchise.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <WhatsAppIcon size={16} color="#FFFFFF" />
                      <span>WhatsApp Coordinator</span>
                    </a>

                    <Link
                      to="/contact"
                      className="py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Apply Now</span>
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* DIVISION 3: FINE DINING & HOSPITALITY */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'restaurant') && restaurantDivision && (
          <article id="division-restaurant" className="mb-10 sm:mb-14 scroll-mt-24 group">
            <div className="bg-white rounded-3xl border border-[#E5ECE8] shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] transition-all duration-300 p-5 sm:p-8 lg:p-10 overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#111827] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <UtensilsCrossed size={13} className="text-[#C8973E]" />
                    <span>Vertical 03 • Hospitality Venture</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-[11px] sm:text-xs font-bold">
                    Launching Soon • Bhubaneswar Landmark
                  </span>
                </div>

                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-800 hover:text-[#C8973E] transition-colors"
                >
                  <span>Preview Venture</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Main Content Grid: Left Visual Stage | Right Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Visual Showcase */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-[#121212] shadow-md border border-gray-200 group/img">
                    <img 
                      src={restaurantDivision.image} 
                      alt={restaurantDivision.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] font-bold text-[#E2B866] uppercase tracking-wider block">Gastronomy</span>
                        <span className="text-sm font-extrabold font-['Outfit']">Authentic Odia Culinary Flavors</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[10px] font-bold backdrop-blur-md">
                        Interior Fit-Out
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF5E8]/60 border border-[#C8973E]/20 text-xs text-gray-700 flex items-center justify-between">
                    <span className="font-medium">📍 Proposed Location: Bhubaneswar Capital Region</span>
                    <span className="text-[#A67828] font-bold">Pre-Launch Stage</span>
                  </div>
                </div>

                {/* Right Column: Narrative, 4 Hospitality Highlights & CTAs */}
                <div className="lg:col-span-7 flex flex-col">
                  
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A67828] mb-1">
                    Bhubaneswar, Odisha • Heritage Temple & Coastal Specialties
                  </span>

                  <h2 className="text-xl sm:text-3xl font-extrabold text-[#111827] font-['Outfit'] leading-tight mb-2">
                    {restaurantDivision.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-bold text-[#C8973E] mb-3">
                    "{restaurantDivision.subtitle}"
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {restaurantDivision.description}
                  </p>

                  {/* 4 Clean Hospitality Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-[#A67828] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        🍲
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Heritage Odia Recipes</div>
                        <div className="text-[11px] text-gray-500">Authentic regional flavors & coastal gastronomy</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#0D4738] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        🌾
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Organic Farm Sourcing</div>
                        <div className="text-[11px] text-gray-500">Fresh farm ingredients via Odisha Kart network</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-[#A67828] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✨
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">VIP Private Dining</div>
                        <div className="text-[11px] text-gray-500">Family suites & corporate banquet facilities</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#0D4738] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        🏛️
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Cultural Brass Ambience</div>
                        <div className="text-[11px] text-gray-500">Warm golden illumination & Odia aesthetics</div>
                      </div>
                    </div>
                  </div>

                  {/* Responsive Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      to="/restaurant"
                      className="py-2.5 px-5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm text-white bg-[#111827] hover:bg-black shadow-md flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Preview Restaurant Project</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      to="/contact"
                      className="py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Corporate Enquiries</span>
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </article>
        )}

      </div>
    </section>
  );
}
