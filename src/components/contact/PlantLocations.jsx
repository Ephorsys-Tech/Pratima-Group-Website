import React from 'react';
import { MapPin, Building, Navigation } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function PlantLocations() {
  return (
    <div className="mt-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-1">
          In-Person Visits & Factory Inspections
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] font-['Outfit']">
          Visit Our Operational Plants in Odisha
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {companyData.locations.map((loc, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-[#EFE8D6] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-gold">
                  {idx === 0 ? "Corporate Office & Plant 1" : "Heavy Works & Plant 2"}
                </span>
                <span className="text-xs text-[#888888] font-mono">
                  {loc.city}, Odisha
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#252525] mb-2 font-['Outfit']">
                {loc.title}
              </h3>

              <div className="flex items-start gap-3 text-sm text-[#666666] mb-4">
                <MapPin size={18} className="text-[#D99A00] shrink-0 mt-0.5" />
                <span>{loc.address}, {loc.city}, {loc.state} - {loc.pincode}</span>
              </div>

              <p className="text-xs text-[#888888] mb-6 leading-relaxed">
                {idx === 0 
                  ? "Landmark: Mancheswar Industrial Estate, Sector-A. Easy access via Bhubaneswar NH-16 bypass road."
                  : "Landmark: Khurda Industrial Estate, near National Highway corridor. Equipped with high-clearance truck bays."}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EFE8D6] flex items-center justify-between text-xs">
              <span className="text-[#666666]">Visitors: Prior appointment recommended</span>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.title}, ${loc.address}, ${loc.city}`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-[#D99A00] hover:underline flex items-center gap-1"
              >
                <Navigation size={13} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
