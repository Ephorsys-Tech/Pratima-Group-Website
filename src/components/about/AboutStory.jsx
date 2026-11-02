import React from 'react';
import { Clock, Factory, ShieldCheck, Award } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5E8] border border-[#C8973E]/30 text-[#A67828] text-xs font-bold mb-3 font-['Outfit']">
              <ShieldCheck size={14} />
              Approved by Govt. of Odisha DIC, Angul • Regd No: {companyData.regdNo}
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4 font-['Outfit'] leading-tight">
              Pioneering Small Scale Industry & Franchising Since 2004
            </h2>
            
            <p className="text-base font-bold text-[#0D4738] mb-4 font-['Outfit']">
              "{companyData.tagline}"
            </p>

            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-gray-900">PRATIMA GROUP OF INDUSTRY</strong> is a Kosala, Angul (Odisha) based organization incorporated in the year 2004. Under the leadership of our efficient mentor, we have acquired a distinguished position in the industry as an Importer, Exporter & Manufacturer and Small Scale Machine Manufacturer & Engineering Consultant.
              </p>
              <p>
                Specializing in high-performance machinery for the <strong className="text-[#0D4738]">Paper Disposal Industry</strong> (including 8 proprietary AEW Crankshaft and Hydraulic paper plate, dona, and thali making machines), we have enabled countless entrepreneurs across India to transition from job seekers to thriving job providers.
              </p>
              <p>
                In parallel, our retail division <strong className="text-[#0D4738]">Smart Collection (A Unit of Pratima Group)</strong> has grown into India's fastest-growing supermarket franchise chain. Connecting directly from manufacturers to consumers, Smart Collection delivers 20% to 30% gross margins, guaranteed 45-day store setup, and turnkey retail infrastructure nationwide.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] flex items-center justify-center text-[#C8973E] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827] text-sm">Since 2004</div>
                  <div className="text-[11px] text-gray-500">20+ Years Excellence</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EDF7F3] flex items-center justify-center text-[#0D4738] shrink-0">
                  <Factory size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827] text-sm">Kosala, Angul</div>
                  <div className="text-[11px] text-gray-500">Registered Head Office</div>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#111827] text-sm">Make In India</div>
                  <div className="text-[11px] text-gray-500">Small Scale Pioneer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
              <img 
                src="/images/pratima_hero.jpg" 
                alt="Pratima Group of Industry Head Office" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold text-[#E2B866] tracking-widest uppercase font-mono">
                  At - Medical Chhak Kosala, Po - Kosala, Dist - Angul, Odisha - 759130
                </span>
                <h3 className="text-xl font-bold font-['Outfit'] mt-1 text-white">
                  Pratima Group of Industry Headquarters
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Toll-Free: 1800-212-0-211 • Phone / WhatsApp: +91 94379 76060
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
