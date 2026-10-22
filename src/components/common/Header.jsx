import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Cog, 
  ShoppingBag, 
  UtensilsCrossed, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Menu,
  X,
  Sparkles,
  MapPin
} from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from './WhatsAppIcon';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdownOpen, setBusinessesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Detect scroll to add refined elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBusinessesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBusinessesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isBusinessActive = 
    location.pathname.startsWith('/businesses') || 
    location.pathname.startsWith('/machinery') || 
    location.pathname === '/odisha-cart' || 
    location.pathname === '/restaurant';

  return (
    <>
      {/* Top Utility Bar - Luxury Dark Forest Green (Slim & Compact) */}
      <div className="bg-[#07271E] text-[#D1D5DB] text-[11px] py-1 border-b border-[#0D4738]/60 hidden sm:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>{companyData.badge}</span>
            </div>
            <span className="text-[#145C49]">•</span>
            <div className="flex items-center gap-1 text-[#9CA3AF]">
              <MapPin size={11} className="text-[#C8973E]" />
              <span>Mancheswar & Khurda, Odisha</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#C8973E] transition-colors"
            >
              <Phone size={11} className="text-[#C8973E]" />
              <span>{companyData.contacts.primaryPhone}</span>
            </a>
            <span className="text-[#145C49]">•</span>
            <a 
              href={`https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent('Hello Pratima Group, I would like to make an enquiry.')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-[#10B981] hover:text-[#34D399] font-medium transition-colors"
            >
              <WhatsAppIcon size={12} color="currentColor" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Modern Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(13,71,56,0.08)] border-b border-[#E5ECE8] py-2 sm:py-2.5' 
          : 'bg-white/95 backdrop-blur-sm border-b border-[#E5ECE8]/80 py-2.5 sm:py-3.5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Official Prominent High-Resolution Logo */}
          <Link to="/" className="flex items-center group py-0.5" aria-label="Pratima Group of Industries">
            <img 
              src="/mylogo/logo.png" 
              alt="Pratima Group of Industries" 
              className="h-13 sm:h-15 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F8FAF9] p-1.5 rounded-full border border-[#E5ECE8] shadow-xs">
            <NavLink 
              to="/" 
              className={({ isActive }) => `px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                isActive 
                  ? 'bg-[#0D4738] text-white shadow-xs' 
                  : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-white'
              }`}
              end
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => `px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                isActive 
                  ? 'bg-[#0D4738] text-white shadow-xs' 
                  : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-white'
              }`}
            >
              About Us
            </NavLink>

            {/* Businesses Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setBusinessesDropdownOpen(!businessesDropdownOpen)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isBusinessActive || businessesDropdownOpen
                    ? 'bg-gradient-to-r from-[#C8973E] to-[#B3812C] text-white shadow-xs' 
                    : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-white'
                }`}
                aria-expanded={businessesDropdownOpen}
              >
                <span>Businesses</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${businessesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {businessesDropdownOpen && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-96 bg-white rounded-2xl shadow-xl border border-[#E5ECE8] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    <Link
                      to="/machinery"
                      onClick={() => setBusinessesDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F8FAF9] transition-colors flex items-start gap-3.5 group border border-transparent hover:border-[#E5ECE8]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Cog size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#111827] group-hover:text-[#0D4738]">
                            Machinery Division
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FAF5E8] text-[#A67828]">
                            AEW Series
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">
                          Crank & hydraulic power press fabrication (30T – 200T)
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/odisha-cart"
                      onClick={() => setBusinessesDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F8FAF9] transition-colors flex items-start gap-3.5 group border border-transparent hover:border-[#E5ECE8]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EDF7F3] text-[#108E68] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <ShoppingBag size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#111827] group-hover:text-[#108E68]">
                            Odisha Cart
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E6F9F2] text-[#059669]">
                            Franchise
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">
                          Regional food, organic FMCG retail & franchise network
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/restaurant"
                      onClick={() => setBusinessesDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F8FAF9] transition-colors flex items-start gap-3.5 group border border-transparent hover:border-[#E5ECE8]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] text-[#C8973E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <UtensilsCrossed size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#111827] group-hover:text-[#C8973E]">
                            Fine Dining Restaurant
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FAF5E8] text-[#A67828] border border-[#C8973E]/40">
                            Launching Soon
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">
                          Heritage Odia culinary destination in Bhubaneswar
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#E5ECE8]">
                    <Link
                      to="/businesses"
                      onClick={() => setBusinessesDropdownOpen(false)}
                      className="p-2 text-xs font-bold text-[#C8973E] hover:text-[#0D4738] flex items-center justify-between rounded-lg hover:bg-[#F8FAF9] transition-colors"
                    >
                      <span>Explore All 3 Divisions Overview</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => `px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                isActive 
                  ? 'bg-[#0D4738] text-white shadow-xs' 
                  : 'text-[#4B5563] hover:text-[#0D4738] hover:bg-white'
              }`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-2.5">
            <Link 
              to="/contact" 
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#C8973E] to-[#B3812C] text-white hover:from-[#D4A347] hover:to-[#C8973E] shadow-[0_3px_12px_rgba(200,151,62,0.3)] hover:shadow-[0_5px_16px_rgba(166,120,40,0.4)] transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-[#E5ECE8] bg-[#F8FAF9] text-[#111827] hover:bg-[#EDF7F3] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Responsive Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E5ECE8] shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="container mx-auto px-4 py-6 space-y-4">
              
              <div className="flex flex-col space-y-1">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `px-4 py-3 rounded-xl font-bold text-sm ${
                    isActive ? 'bg-[#EDF7F3] text-[#0D4738]' : 'text-[#111827] hover:bg-[#F8FAF9]'
                  }`}
                  end
                >
                  Home
                </NavLink>

                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `px-4 py-3 rounded-xl font-bold text-sm ${
                    isActive ? 'bg-[#EDF7F3] text-[#0D4738]' : 'text-[#111827] hover:bg-[#F8FAF9]'
                  }`}
                >
                  About Pratima Group
                </NavLink>
              </div>

              {/* Mobile Business Accordion */}
              <div className="pt-2 border-t border-[#E5ECE8]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A67828] px-4 mb-2 block">
                  Our Business Verticals
                </span>

                <div className="space-y-1">
                  <Link
                    to="/machinery"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF9] hover:bg-[#EDF7F3]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF7F3] text-[#0D4738] flex items-center justify-center">
                        <Cog size={16} />
                      </div>
                      <span className="text-sm font-bold text-[#111827]">Machinery (AEW Series)</span>
                    </div>
                    <ArrowRight size={14} className="text-[#C8973E]" />
                  </Link>

                  <Link
                    to="/odisha-cart"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF9] hover:bg-[#EDF7F3]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF7F3] text-[#108E68] flex items-center justify-center">
                        <ShoppingBag size={16} />
                      </div>
                      <span className="text-sm font-bold text-[#111827]">Odisha Cart Franchise</span>
                    </div>
                    <ArrowRight size={14} className="text-[#C8973E]" />
                  </Link>

                  <Link
                    to="/restaurant"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF9] hover:bg-[#FAF5E8]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF5E8] text-[#C8973E] flex items-center justify-center">
                        <UtensilsCrossed size={16} />
                      </div>
                      <span className="text-sm font-bold text-[#111827]">Fine Dining Restaurant</span>
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FAF5E8] text-[#A67828]">
                      Soon
                    </span>
                  </Link>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5ECE8] flex flex-col gap-2">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `px-4 py-3 rounded-xl font-bold text-sm ${
                    isActive ? 'bg-[#EDF7F3] text-[#0D4738]' : 'text-[#111827] hover:bg-[#F8FAF9]'
                  }`}
                >
                  Contact Us
                </NavLink>

                <a 
                  href={`https://wa.me/${companyData.contacts.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp w-full justify-center py-3 text-sm font-bold rounded-xl mt-2"
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
