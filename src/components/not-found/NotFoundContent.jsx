import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Cog, ShoppingBag, PhoneCall, HelpCircle } from 'lucide-react';

export default function NotFoundContent() {
  return (
    <div className="bg-white rounded-3xl border border-[#EFE8D6] shadow-sm p-8 sm:p-14 text-center max-w-2xl mx-auto">
      <div className="w-20 h-20 rounded-3xl bg-[#FFF6D8] border border-[#F4B400]/40 text-[#D99A00] flex items-center justify-center mx-auto mb-6 shadow-sm">
        <HelpCircle size={44} />
      </div>

      <span className="badge badge-gold mb-3 text-xs">Error 404</span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit'] mb-3">
        Page Not Found
      </h1>

      <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8 max-w-md mx-auto">
        The page you are looking for might have been moved, renamed, or is temporarily unavailable. Please use the navigation links below to return to verified sections of our website.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <Link to="/" className="btn btn-primary btn-lg">
          <Home size={18} />
          <span>Back to Homepage</span>
        </Link>

        <Link to="/contact" className="btn btn-secondary btn-lg">
          <PhoneCall size={18} />
          <span>Contact Support</span>
        </Link>
      </div>

      <div className="pt-8 border-t border-[#EFE8D6]">
        <span className="text-xs font-bold text-[#888888] uppercase tracking-wider block mb-4">
          Popular Destinations
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Link 
            to="/machinery" 
            className="p-3 rounded-xl bg-[#FFFDF5] border border-[#EFE8D6] hover:border-[#F4B400] text-xs font-bold text-[#252525] hover:text-[#D99A00] flex items-center justify-center gap-2 transition-colors"
          >
            <Cog size={15} />
            <span>AEW Machinery</span>
          </Link>

          <Link 
            to="/odisha-cart" 
            className="p-3 rounded-xl bg-[#FFFDF5] border border-[#EFE8D6] hover:border-[#F4B400] text-xs font-bold text-[#252525] hover:text-[#D99A00] flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingBag size={15} />
            <span>Odisha Cart</span>
          </Link>

          <Link 
            to="/about" 
            className="p-3 rounded-xl bg-[#FFFDF5] border border-[#EFE8D6] hover:border-[#F4B400] text-xs font-bold text-[#252525] hover:text-[#D99A00] flex items-center justify-center gap-2 transition-colors col-span-2 sm:col-span-1"
          >
            <span>About Pratima</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
