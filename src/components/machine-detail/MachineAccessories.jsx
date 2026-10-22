import React from 'react';
import { PackageCheck, PlusCircle } from 'lucide-react';

export default function MachineAccessories({ machine }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Standard Accessories */}
      <div className="bg-white rounded-2xl border border-[#EFE8D6] shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFE8D6]">
          <div className="w-10 h-10 rounded-lg bg-[#E6F8EE] text-[#128045] flex items-center justify-center">
            <PackageCheck size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#252525] font-['Outfit']">
              Standard Scope of Supply
            </h3>
            <span className="text-xs text-[#666]">Included with machine delivery</span>
          </div>
        </div>

        <ul className="space-y-3">
          {machine.standardAccessories.map((acc, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-[#252525]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#128045] shrink-0 mt-2"></span>
              <span>{acc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional Accessories */}
      <div className="bg-white rounded-2xl border border-[#EFE8D6] shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFE8D6]">
          <div className="w-10 h-10 rounded-lg bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center">
            <PlusCircle size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#252525] font-['Outfit']">
              Optional Add-Ons & Automation
            </h3>
            <span className="text-xs text-[#666]">Customizable upon request</span>
          </div>
        </div>

        <ul className="space-y-3">
          {machine.optionalAccessories.map((acc, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-[#252525]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D99A00] shrink-0 mt-2"></span>
              <span>{acc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
