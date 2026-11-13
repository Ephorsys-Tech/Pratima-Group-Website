import React from 'react';
import { MapPin, Building, Navigation, ShieldCheck } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function PlantLocations() {
  const isSingle = companyData.locations.length === 1;

  return (
    <div className="mt-12 sm:mt-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-[#C8973E] uppercase tracking-wider block mb-1 font-['Outfit']">
          {isSingle ? 'Verified Registered Location • Odisha' : 'Verified Registered Locations • Odisha'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-['Outfit']">
          {isSingle ? 'Visit Our Registered Headquarters & Works' : 'Visit Our Registered Headquarters & Plants'}
        </h2>
      </div>

      <div className={`grid grid-cols-1 ${isSingle ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'} gap-6 sm:gap-8`}>
        {companyData.locations.map((loc, idx) => (
          <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5ECE8] shadow-[0_4px_20px_rgba(13,71,56,0.05)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF5E8] text-[#A67828] border border-[#C8973E]/30 font-['Outfit']">
                  <ShieldCheck size={13} className="text-[#C8973E]" />
                  {loc.type || "Registered Head Office"}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {loc.city}, Odisha
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 font-['Outfit']">
                {loc.title}
              </h3>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 mb-4">
                <MapPin size={17} className="text-[#C8973E] shrink-0 mt-0.5" />
                <span>{loc.address}, {loc.city}, {loc.state} - {loc.pincode}</span>
              </div>

              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                {loc.description || "Approved by Govt. of Odisha DIC, Angul (Regd No: 210151100297). GSTIN: 21BIKPM0732J1ZH (M/s Pratima Enterprises). Contact: 1800-212-0-211."}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500">Prior appointment recommended</span>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.title}, ${loc.address}, ${loc.city}`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-[#0D4738] hover:text-[#C8973E] flex items-center gap-1 transition-colors"
              >
                <Navigation size={13} />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
