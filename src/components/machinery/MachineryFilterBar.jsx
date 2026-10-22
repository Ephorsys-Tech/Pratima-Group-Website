import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

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
    <div className="bg-white p-5 rounded-2xl border border-[#EFE8D6] shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-5">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <span className="text-xs font-bold text-[#888888] uppercase tracking-wider mr-2 flex items-center gap-1.5 hidden sm:flex">
          <SlidersHorizontal size={14} />
          <span>Drive Type:</span>
        </span>

        <button
          type="button"
          onClick={() => setSelectedFilter('All')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            selectedFilter === 'All'
              ? 'bg-[#252525] text-white shadow-sm'
              : 'bg-[#FFFDF5] text-[#666666] hover:bg-[#FFF6D8] border border-[#EFE8D6]'
          }`}
        >
          All Models ({totalCount})
        </button>

        <button
          type="button"
          onClick={() => setSelectedFilter('Crank')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
            selectedFilter === 'Crank'
              ? 'bg-[#F28C28] text-white shadow-sm'
              : 'bg-[#FFFDF5] text-[#666666] hover:bg-[#FFF2E8] border border-[#EFE8D6]'
          }`}
        >
          <span>Crank Driven</span>
          <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20">
            {crankCount}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedFilter('Hydraulic')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
            selectedFilter === 'Hydraulic'
              ? 'bg-[#D99A00] text-white shadow-sm'
              : 'bg-[#FFFDF5] text-[#666666] hover:bg-[#FFF6D8] border border-[#EFE8D6]'
          }`}
        >
          <span>Hydraulic Driven</span>
          <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20">
            {hydraulicCount}
          </span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative w-full md:w-72">
        <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888888]" />
        <input
          type="text"
          placeholder="Search model (e.g. AEW-001)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 text-[#252525]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-[#252525]"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
