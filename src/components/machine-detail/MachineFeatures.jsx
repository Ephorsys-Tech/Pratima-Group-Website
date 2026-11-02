import React from 'react';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export default function MachineFeatures({ machine }) {
  return (
    <div className="bg-white rounded-2xl border border-[#EFE8D6] shadow-sm p-4 sm:p-6 lg:p-8 overflow-hidden w-full max-w-full">
      <h3 className="text-lg sm:text-xl font-bold text-[#252525] font-['Outfit'] mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#EFE8D6]">
        Engineering Highlights & Capabilities
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {machine.keyFeatures.map((feat, idx) => (
          <div key={idx} className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-[#FFFDF5] border border-[#EFE8D6]">
            <CheckCircle2 size={16} className="text-[#D99A00] shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-[#252525] font-medium leading-snug">
              {feat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
