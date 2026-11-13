import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function AboutFacilities() {
  const isSingle = companyData.locations.length === 1;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-2">
            Industrial Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit']">
            {isSingle ? 'Our Manufacturing & Operational Facility' : 'Our Manufacturing & Operational Facilities'}
          </h2>
          <p className="text-[#666666] mt-2">
            {isSingle 
              ? "Specialized manufacturing plant strategically situated in Odisha's premier industrial growth corridor."
              : "Specialized plants strategically situated in Odisha's premier industrial growth corridors."}
          </p>
        </div>

        <div className={`grid grid-cols-1 ${isSingle ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'} gap-8`}>
          {companyData.locations.map((loc, idx) => (
            <div key={idx} className="bg-[#FFFDF5] p-8 rounded-2xl border border-[#EFE8D6] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-gold">
                    {loc.type}
                  </span>
                  <span className="text-xs text-[#888888] font-mono">
                    GPS: {loc.coordinates}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#252525] mb-3 font-['Outfit']">
                  {loc.title}
                </h3>

                <div className="flex items-start gap-3 text-sm text-[#666666] mb-6">
                  <MapPin size={18} className="text-[#D99A00] shrink-0 mt-0.5" />
                  <span>{loc.address}, {loc.city}, {loc.state} - {loc.pincode}</span>
                </div>

                <p className="text-xs text-[#888888] mb-6 leading-relaxed">
                  Headquarters housing small scale industrial machine fabrication, assembly bays for Crank & Hydraulic paper plate units, technical testing, and administrative oversight.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE8D6] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#252525]">Operating Hours: 9 AM - 7 PM</span>
                <Link to="/contact" className="text-xs font-bold text-[#D99A00] hover:underline flex items-center gap-1">
                  <span>Directions & Enquiry</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
