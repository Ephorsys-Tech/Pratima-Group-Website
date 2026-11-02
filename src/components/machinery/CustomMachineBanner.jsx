import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight, Wrench } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function CustomMachineBanner() {
  return (
    <div className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5ECE8] shadow-[0_4px_25px_rgba(13,71,56,0.06)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF5E8] text-[#A67828] border border-[#C8973E]/30 mb-3 font-['Outfit']">
            <Wrench size={13} />
            Custom Dies, Tooling & 5-Part Video Training
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2 font-['Outfit']">
            Custom Dies for Dona, Wrinkle Plate, Buffet Thali & Partition Dishes
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Our engineering consultancy at Kosala, Angul provides customized die tooling from 4 Inch up to 18 Inch, automatic paper roll feeders, and a comprehensive 5-part video training series covering business potential, raw materials, specs & product cost calculation.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
          <Link 
            to="/contact" 
            className="w-full py-2.5 px-4 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#C8973E] to-[#B3812C] hover:from-[#D4A347] hover:to-[#C8973E] shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <span>Request Custom Die Quote</span>
            <ArrowRight size={14} />
          </Link>
          <a 
            href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-[#0D4738] bg-[#EDF7F3] hover:bg-[#E0F2EB] border border-emerald-300 flex items-center justify-center gap-2 transition-all"
          >
            <PhoneCall size={14} />
            <span>Call Engineering Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
