import React from 'react';
import { Sliders } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/machineryData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function MachineSpecsTable({ machine }) {
  const whatsappUrl = getWhatsAppUrl(machine);

  return (
    <div className="bg-white rounded-2xl border border-[#EFE8D6] shadow-sm p-4 sm:p-6 lg:p-8 overflow-hidden w-full max-w-full">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFE8D6]">
        <div className="w-10 h-10 rounded-lg bg-[#FFF6D8] flex items-center justify-center text-[#D99A00] shrink-0">
          <Sliders size={20} />
        </div>
        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-[#252525] font-['Outfit']">
            Technical Specifications ({machine.modelCode})
          </h2>
          <p className="text-xs text-[#888]">Standard verified tolerances and operational ratings</p>
        </div>
      </div>

      <div className="overflow-x-auto -mx-2 sm:mx-0 px-2 sm:px-0">
        <table className="w-full text-left border-collapse min-w-[280px]">
          <thead>
            <tr className="bg-[#FFFDF5] text-xs font-bold text-[#888888] uppercase tracking-wider border-y border-[#EFE8D6]">
              <th className="py-2.5 sm:py-3.5 px-3 sm:px-6">Parameter / Specification</th>
              <th className="py-2.5 sm:py-3.5 px-3 sm:px-6 text-right sm:text-left">Standard Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EFE8D6] text-xs sm:text-sm">
            {machine.specifications.map((spec, idx) => {
              const isPrice = spec.label.toLowerCase().includes('price');
              return (
                <tr key={idx} className="hover:bg-[#FFFDF5]/60 transition-colors">
                  <td className="py-2.5 sm:py-3.5 px-3 sm:px-6 font-semibold text-[#252525]">
                    {spec.label}
                  </td>
                  <td className="py-2.5 sm:py-3.5 px-3 sm:px-6 text-[#666666] font-medium text-right sm:text-left">
                    {isPrice ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs shadow-sm hover:scale-105 active:scale-95 transition-all shrink-0"
                        title={`Enquire for price of ${machine.modelCode} on WhatsApp`}
                      >
                        <WhatsAppIcon size={12} color="#FFFFFF" className="shrink-0" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    ) : (
                      spec.value
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
