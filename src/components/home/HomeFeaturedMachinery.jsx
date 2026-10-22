import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Droplets,
  Layers,
  LayoutGrid,
  ScrollText
} from 'lucide-react';
import MachineCard from '../common/MachineCard';
import { machineryList } from '../../data/machineryData';

export default function HomeFeaturedMachinery() {
  const [activeTab, setActiveTab] = useState('All'); // 'All' | 'Crank' | 'Hydraulic'
  const [mobileLayout, setMobileLayout] = useState('carousel'); // 'carousel' | 'grid'
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const scrollRef = useRef(null);

  // Filter machines based on active tab
  const allFeatured = machineryList.filter(m => m.isFeatured);
  const filteredMachines = allFeatured.filter(machine => {
    if (activeTab === 'Crank') return machine.driveType === 'Crank';
    if (activeTab === 'Hydraulic') return machine.driveType === 'Hydraulic';
    return true;
  });

  // Track scroll position in mobile carousel to update active dot
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 280;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(index, filteredMachines.length - 1));
  };

  const scrollToSlide = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 280;
    container.scrollTo({
      left: index * (cardWidth + 16),
      behavior: 'smooth'
    });
    setActiveSlideIndex(index);
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 300;
    container.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 300;
    container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-[#FCFBF7] border-y border-[#EFE8D6] relative overflow-hidden">
      {/* Background Engineering Watermark */}
      <div
        className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#F4B400]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#F28C28]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            {/* Workshop Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6D8] text-[#B27600] font-bold text-xs tracking-wider uppercase mb-3 border border-[#F4B400]/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F4B400] animate-pulse" />
              <span>AEW Machine Tools • Mancheswar Workshop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] font-['Outfit'] tracking-tight leading-[1.15]">
              Featured Industrial Machinery
            </h2>

            <p className="text-[#666666] text-sm sm:text-base lg:text-lg mt-2.5 font-['Plus_Jakarta_Sans'] leading-relaxed">
              Engineered for zero-deflection continuous stamping, blanking, and hydraulic drawing across high-volume fabrication lines.
            </p>
          </div>

          {/* Desktop Right Side Action & Slider Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/machinery"
              className="btn btn-primary inline-flex items-center gap-2 shadow-md hover:shadow-lg text-sm sm:text-base font-bold py-2.5 sm:py-3 px-5 sm:px-6"
            >
              <span>View All 8 Models</span>
              <ChevronRight size={18} />
            </Link>

            {/* Slider Navigation for quick scrolling */}
            <div className="hidden sm:flex items-center gap-1.5 bg-white border border-[#E8E2D2] p-1 rounded-xl shadow-xs">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#252525] hover:bg-[#FFF6D8] hover:text-[#B27600] transition-colors"
                title="Scroll Left"
                aria-label="Previous machines"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#252525] hover:bg-[#FFF6D8] hover:text-[#B27600] transition-colors"
                title="Scroll Right"
                aria-label="Next machines"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Filter & View Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 bg-white border border-[#EAE4D3] p-2.5 sm:p-3 rounded-2xl shadow-xs">
          {/* Drive Type Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 scrollbar-none w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${activeTab === 'All'
                  ? 'bg-[#252525] text-white shadow-sm'
                  : 'bg-[#F9F7F1] text-[#666666] hover:bg-[#FFF6D8] hover:text-[#252525]'
                }`}
            >
              <Layers size={14} />
              <span>All Featured ({allFeatured.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('Crank')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${activeTab === 'Crank'
                  ? 'bg-[#F28C28] text-white shadow-sm'
                  : 'bg-[#F9F7F1] text-[#666666] hover:bg-[#FFF2E8] hover:text-[#F28C28]'
                }`}
            >
              <Flame size={14} />
              <span>Crank Presses (2)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('Hydraulic')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${activeTab === 'Hydraulic'
                  ? 'bg-[#D99A00] text-white shadow-sm'
                  : 'bg-[#F9F7F1] text-[#666666] hover:bg-[#FFF6D8] hover:text-[#D99A00]'
                }`}
            >
              <Droplets size={14} />
              <span>Hydraulic Systems (2)</span>
            </button>
          </div>

          {/* Mobile View Toggle (Swipe vs Grid) */}
          <div className="flex sm:hidden items-center justify-between w-full pt-2 border-t border-[#EFE8D6]">
            <span className="text-xs font-semibold text-[#888]">Mobile Layout:</span>
            <div className="flex items-center gap-1 bg-[#F5F2EB] p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setMobileLayout('carousel')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${mobileLayout === 'carousel'
                    ? 'bg-white text-[#252525] shadow-xs'
                    : 'text-[#666666]'
                  }`}
              >
                Swipeable
              </button>
              <button
                type="button"
                onClick={() => setMobileLayout('grid')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${mobileLayout === 'grid'
                    ? 'bg-white text-[#252525] shadow-xs'
                    : 'text-[#666666]'
                  }`}
              >
                Stacked
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Machine Cards Container */}
        {/* On Mobile: Switchable between Horizontal Swipe and Vertical Grid */}
        {/* On Tablet & Desktop: High-Performance 2/4 Column Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={
            mobileLayout === 'carousel'
              ? 'flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none items-stretch'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 items-stretch'
          }
        >
          {filteredMachines.map((machine) => (
            <div
              key={machine.id}
              className={
                mobileLayout === 'carousel'
                  ? 'w-[85vw] max-w-[320px] flex-shrink-0 snap-center sm:w-auto sm:max-w-none sm:flex-shrink'
                  : 'w-full'
              }
            >
              <MachineCard machine={machine} />
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators (Dots) */}
        {mobileLayout === 'carousel' && (
          <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
            {filteredMachines.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${activeSlideIndex === idx
                    ? 'w-6 bg-[#F4B400]'
                    : 'w-2 bg-[#D9D3C3]'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Informational Filter Strip */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE4D3] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-center sm:text-left justify-center sm:justify-start">
            <span className="font-bold text-xs sm:text-sm text-[#252525]">Workshop Inventory:</span>
            <span className="badge badge-orange font-semibold text-xs">4 Mechanical Crank Presses</span>
            <span className="badge badge-gold font-semibold text-xs">4 Hydraulic Press Systems</span>
          </div>
          <Link
            to="/machinery"
            className="text-xs sm:text-sm font-bold text-[#D99A00] hover:text-[#252525] flex items-center gap-1.5 transition-colors group"
          >
            <span>Open Interactive Filterable Catalogue</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
