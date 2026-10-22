import React from 'react';
import { Sliders, CheckCircle } from 'lucide-react';

export default function MachineSpecsTable({ machine }) {
  return (
    <div className="bg-white rounded-2xl border border-[#EFE8D6] shadow-sm p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFE8D6]">
        <div className="w-10 h-10 rounded-lg bg-[#FFF6D8] flex items-center justify-center text-[#D99A00]">
          <Sliders size={20} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#252525] font-['Outfit']">
            Technical Specifications ({machine.modelCode})
          </h2>
          <p className="text-xs text-[#888]">Standard verified tolerances and operational ratings</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FFFDF5] text-xs font-bold text-[#888888] uppercase tracking-wider border-y border-[#EFE8D6]">
              <th className="py-3.5 px-4 sm:px-6">Parameter / Specification</th>
              <th className="py-3.5 px-4 sm:px-6 text-right sm:text-left">Standard Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EFE8D6] text-sm">
            {machine.specifications.map((spec, idx) => (
              <tr key={idx} className="hover:bg-[#FFFDF5]/60 transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#252525]">
                  {spec.label}
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-[#666666] font-medium text-right sm:text-left">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
