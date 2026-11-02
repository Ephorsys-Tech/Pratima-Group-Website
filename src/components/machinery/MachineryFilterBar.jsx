import React from 'react';
import { Search, SlidersHorizontal, Flame, Droplets } from 'lucide-react';

export default function MachineryFilterBar({
  selectedFilter,
  setSelectedFilter,
  searchQuery,
  setSearchQuery,
  totalCount,
  crankCount,
  hydraulicCount
}) {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EFE8D6] shadow-sm mb-8 sm:mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <span className="text-xs font-bold text-[#888888] uppercase tracking-wider mr-1 sm:flex items-center gap-1.5 hidden">
          <SlidersHorizontal size={14} />
          <span>Technology:</span>
        </span>

        <button
          type="button"
          onClick={() => setSelectedFilter('All')}
          className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedFilter === 'All'
              ? 'bg-[#0D4738] text-white shadow-sm'
              : 'bg-[#FFFDF5] text-[#666666] hover:bg-[#EDF7F3] border border-[#EFE8D6]'
          }`}
        >
          All 8 Models ({totalCount})
        </button>

        <button
          type="button"
          onClick={() => setSelectedFilter('Crank')}
          className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            selectedFilter === 'Crank'
              ? 'bg-[#F28C28] text-white shadow-sm'
              : 'bg-[#FFFDF5] text-[#666666] hover:bg-[#FFF6E9] border border-[#EFE8D6]'
          }`}
        >
          <Flame size={14} className={selectedFilter === 'Crank' ? 'text-white' : 'text-[#F28C28]'} />
          <span>Crank Driven ({crankCount})</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedFilter('Hydraulic')}
          className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            selectedFilter === 'Hydraulic'
              ? 'bg-[#0D4738] text-white shadow-sm'
              : 'bg-[#FFFDF5] text-[#666666] hover:bg-[#EDF7F3] border border-[#EFE8D6]'
          }`}
        >
          <Droplets size={14} className={selectedFilter === 'Hydraulic' ? 'text-white' : 'text-emerald-600'} />
          <span>Hydraulic Powered ({hydraulicCount})</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative w-full md:w-72">
        <input
          type="text"
          placeholder="Search by model or tonnage..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#FFFDF5] border border-[#EFE8D6] rounded-xl focus:outline-none focus:border-[#C8973E] text-[#252525]"
        />
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
