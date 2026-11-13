import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Gauge, 
  Layers, 
  Weight, 
  CheckCircle2, 
  Flame, 
  Droplets 
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/machineryData';
import WhatsAppIcon from './WhatsAppIcon';
import { cn } from '@/lib/utils';

export default function MachineCard({ machine, className = "" }) {
  const isCrank = machine.driveType === 'Crank' || machine.driveType?.includes('Crank');
  const whatsappUrl = getWhatsAppUrl(machine);

  // Extract clean motor label (e.g. "3 HP" from "3 HP / 2.2 kW, 1440 RPM")
  const shortMotor = machine.motor.split('/')[0].trim();

  // Short drive label so badge never overflows on narrow cards
  const driveLabel = machine.driveType === 'Crank & Hydraulic'
    ? 'Dual Drive'
    : `${machine.driveType} Drive`;

  return (
    <article 
      className={cn(
        "group relative flex flex-col h-full bg-[#091B14] text-white rounded-2xl border border-emerald-500/20 hover:border-[#F4B400]/60 transition-all duration-300 overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(13,71,56,0.5)] hover:-translate-y-1",
        className
      )}
    >
      {/* Top Media Showcase with Signature Component Gradient Bleed */}
      <div className="relative -mt-px overflow-hidden rounded-2xl bg-gradient-to-b from-white via-[#F8FAFC] to-[#E2E8F0] p-3 sm:p-4 flex items-center justify-center">
        
        {/* Machine Product Image with Smooth Hover Zoom */}
        <Link 
          to={`/machinery/${machine.slug}`} 
          className="block w-full h-[180px] sm:h-[200px] xl:h-[210px] overflow-hidden flex items-center justify-center"
        >
          <img 
            src={machine.image} 
            alt={`${machine.modelCode} ${machine.name}`} 
            className="h-full w-full object-contain filter group-hover:scale-108 transition-all duration-500 bg-[#fefefe] "
            loading="lazy"
          />
        </Link>

        {/* Signature Modern Gradient Bleed into Dark Chassis */}
        <div className="absolute bottom-0 inset-x-0 z-10 h-20 bg-gradient-to-t pointer-events-none from-[#091B14] via-[#091B14]/80 to-transparent"></div>

        {/* Top Badges Bar - Guaranteed Single Line */}
        <div className="absolute top-2.5 inset-x-2.5 z-20 flex items-center justify-between gap-1.5 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/85 text-white font-mono text-[10px] sm:text-[11px] font-bold border border-white/20 shadow-md backdrop-blur-md pointer-events-auto whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{machine.modelCode}</span>
          </div>

          <div className={cn(
            "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-white text-[10px] sm:text-[11px] font-bold shadow-md backdrop-blur-md border pointer-events-auto whitespace-nowrap shrink-0",
            isCrank 
              ? "bg-[#F28C28]/95 border-orange-400/40" 
              : "bg-[#D99A00]/95 border-amber-300/40"
          )}>
            {isCrank ? <Flame size={11} className="stroke-[2.5]" /> : <Droplets size={11} className="stroke-[2.5]" />}
            <span>{driveLabel}</span>
          </div>
        </div>

        {/* Floating Capacity Pill anchored over bottom gradient */}
        <div className="absolute bottom-2 inset-x-2.5 z-20 flex items-center justify-between gap-1.5 text-xs pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F4B400] text-black font-extrabold text-[10px] sm:text-[11px] shadow-md flex items-center gap-1 pointer-events-auto truncate max-w-[70%]">
            <Zap size={10} className="fill-black shrink-0" />
            <span className="truncate">{machine.capacity}</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-black/85 px-2 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-sm pointer-events-auto flex items-center gap-1 whitespace-nowrap shrink-0">
            <CheckCircle2 size={10} className="text-emerald-400" />
            <span>Tested</span>
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-2 flex flex-col flex-1">
        
        {/* Category Header with Radiant Gradient */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <p className="text-[11px] font-black tracking-wider uppercase bg-gradient-to-r from-[#F4B400] via-[#E0724A] to-[#25D366] text-transparent bg-clip-text truncate">
            {machine.category}
          </p>
          {machine.spm && (
            <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 shrink-0">
              {machine.spm.split(' ')[0]} SPM
            </span>
          )}
        </div>

        {/* Machine Title */}
        <h3 className="text-sm sm:text-base font-black text-white group-hover:text-[#F4B400] transition-colors leading-snug line-clamp-1">
          <Link to={`/machinery/${machine.slug}`} className="hover:underline">
            {machine.name}
          </Link>
        </h3>

        {/* Short Description with Divider Border - Fixed Height for Straight Horizontal Alignment */}
        <p className="mt-1.5 text-xs text-gray-300 font-medium leading-relaxed border-b border-gray-800 pb-2.5 mb-2.5 line-clamp-2 min-h-[2.5rem]">
          "{machine.shortDescription}"
        </p>

        {/* Engineering Spec Matrix (Dark Frosted Grid) */}
        <div className="grid grid-cols-2 gap-1.5 mb-3 bg-black/40 p-2 rounded-xl border border-white/10">
          <div className="flex items-center gap-1.5 text-xs min-w-0">
            <Zap size={12} className="text-[#F4B400] shrink-0" />
            <div className="truncate">
              <span className="text-[9px] uppercase text-gray-400 block font-semibold leading-none">Motor</span>
              <span className="text-[11px] font-bold text-white truncate block" title={machine.motor}>{shortMotor}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs min-w-0">
            <Gauge size={12} className="text-[#F4B400] shrink-0" />
            <div className="truncate">
              <span className="text-[9px] uppercase text-gray-400 block font-semibold leading-none">Speed</span>
              <span className="text-[11px] font-bold text-white truncate block" title={machine.speed}>{machine.speed || 'Standard'}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs min-w-0">
            <Layers size={12} className="text-[#F4B400] shrink-0" />
            <div className="truncate">
              <span className="text-[9px] uppercase text-gray-400 block font-semibold leading-none">Capacity</span>
              <span className="text-[11px] font-bold text-white truncate block" title={machine.capacity}>{machine.capacity}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs min-w-0">
            <Weight size={12} className="text-[#F4B400] shrink-0" />
            <div className="truncate">
              <span className="text-[9px] uppercase text-gray-400 block font-semibold leading-none">Power</span>
              <span className="text-[11px] font-bold text-white truncate block" title={machine.powerConsumption}>{machine.powerConsumption || 'Standard'}</span>
            </div>
          </div>
        </div>

        {/* Responsive Dual Action Button Row */}
        <div className="flex items-center gap-2 mt-auto pt-2 w-full">
          <Link 
            to={`/machinery/${machine.slug}`} 
            className="flex-1 min-w-0 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#091B14] font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-all text-center whitespace-nowrap active:scale-[0.98]"
          >
            <span>Full Specs</span>
            <ArrowRight size={13} className="shrink-0" />
          </Link>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 min-w-0 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1EBE5D] hover:to-[#0F7569] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center whitespace-nowrap"
            title={`Enquire on WhatsApp about ${machine.modelCode}`}
          >
            <WhatsAppIcon size={13} color="#FFFFFF" className="shrink-0" />
            <span>Enquire</span>
          </a>
        </div>

      </div>
    </article>
  );
}
