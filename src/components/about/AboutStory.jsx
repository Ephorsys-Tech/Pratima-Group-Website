import React from 'react';
import { Clock, Factory } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-2">
              Our Genesis & Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] mb-6 font-['Outfit'] leading-tight">
              Pioneering Indigenous Engineering Since 2004
            </h2>
            <div className="space-y-4 text-[#666666] leading-relaxed">
              <p>
                Pratima Group of Industry was founded in 2004 with a resolute commitment to elevate Odisha’s manufacturing self-sufficiency. Beginning as a precision light engineering workshop under the AEW banner, our founders aimed to build high-durability power presses and fabrication machinery that industrial clients in Eastern India previously had to import from distant states.
              </p>
              <p>
                Through consistent reinvestment in CNC technology, skilled metallurgists, and rigorous testing standards, the AEW Machinery series earned widespread trust. Building on this solid foundation, Pratima Group systematically diversified into high-potential sectors: creating <strong className="text-[#252525]">Odisha Cart</strong> to champion regional food producers and FMCG distribution, and cultivating an upcoming <strong className="text-[#252525]">Fine Dining Restaurant</strong> venture in Bhubaneswar celebrating authentic Odia culinary culture.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#EFE8D6]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFF6D8] flex items-center justify-center text-[#D99A00]">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#252525]">20+ Years</div>
                  <div className="text-xs text-[#666666]">Proven Track Record</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFF6D8] flex items-center justify-center text-[#D99A00]">
                  <Factory size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#252525]">2 Plants</div>
                  <div className="text-xs text-[#666666]">Bhubaneswar & Khurda</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#EFE8D6] shadow-xl">
              <img 
                src="/images/pratima_hero.jpg" 
                alt="Pratima Group Corporate Presence" 
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold text-[#F4B400] tracking-widest uppercase">
                  Mancheswar Industrial Estate, Plot No. 62
                </span>
                <h3 className="text-xl font-bold font-['Outfit'] mt-1 text-white">
                  Headquarters & Light Engineering Workshop
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
