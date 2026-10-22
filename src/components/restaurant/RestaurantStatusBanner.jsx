import React from 'react';
import { AlertCircle, ShieldAlert, Sparkles } from 'lucide-react';

export default function RestaurantStatusBanner() {
  return (
    <div className="py-6 bg-[#FFF9E6] border-y border-[#F4B400]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF6D8] border border-[#F4B400] flex items-center justify-center shrink-0 text-[#D99A00]">
              <Sparkles size={20} />
            </div>
            <div>
              <span className="font-extrabold text-[#252525] text-sm block">
                Official Operational Status: Launching Soon
              </span>
              <span className="text-xs text-[#805B00]">
                Strictly no bookings, table reservations, or food ordering active until official inauguration.
              </span>
            </div>
          </div>

          <span className="badge badge-launching px-3.5 py-1 text-xs">
            Grand Opening 2026
          </span>
        </div>
      </div>
    </div>
  );
}
