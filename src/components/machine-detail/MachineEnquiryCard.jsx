import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { machineryList } from '../../data/machineryData';

export default function MachineEnquiryCard({ currentSlug }) {
  const otherMachines = machineryList.filter(m => m.slug !== currentSlug);

  return (
    <div className="bg-[#FFFDF5] p-8 rounded-2xl border border-[#EFE8D6] shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EFE8D6]">
        <div>
          <h3 className="text-xl font-bold text-[#252525] font-['Outfit']">
            Explore Other AEW Models
          </h3>
          <p className="text-xs text-[#666]">Compare specifications across our crank and hydraulic series</p>
        </div>
        <Link to="/machinery" className="text-xs font-bold text-[#D99A00] hover:underline flex items-center gap-1">
          <span>All 8 Models</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {otherMachines.map((m) => (
          <Link
            key={m.id}
            to={`/machinery/${m.slug}`}
            className="p-3 bg-white rounded-xl border border-[#EFE8D6] hover:border-[#F4B400] text-center transition-all hover:-translate-y-1 group"
          >
            <span className="block text-xs font-bold text-[#252525] group-hover:text-[#D99A00]">
              {m.modelCode}
            </span>
            <span className="block text-[11px] text-[#888888] mt-0.5">
              {m.capacity}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
