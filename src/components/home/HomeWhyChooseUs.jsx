import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, ArrowRight, Factory, ShieldCheck, MapPin } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function HomeWhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF5] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF6D8] text-[#D99A00] font-bold text-xs tracking-wider uppercase mb-3 border border-[#F4B400]/40 shadow-xs">

            <span>The Pratima Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-4 font-['Outfit'] tracking-tight">
            Why Industrial Leaders & Partners Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-['Plus_Jakarta_Sans'] leading-relaxed">
            Ground-level operational excellence, indigenously developed know-how, and two decades of unwavering client trust.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.coreValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#EFE8D6] shadow-[0_4px_16px_rgba(37,37,37,0.03)] hover:shadow-[0_12px_28px_rgba(37,37,37,0.07)] hover:border-[#F4B400]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF6D8] group-hover:bg-[#F4B400] text-[#D99A00] group-hover:text-[#252525] flex items-center justify-center mb-6 transition-colors shadow-xs">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#252525] mb-3 font-['Outfit'] group-hover:text-[#D99A00] transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed font-['Plus_Jakarta_Sans']">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Plant Infrastructure Banner */}
        <div className="mt-16 bg-gradient-to-br from-[#252525] via-[#1C1C1C] to-[#121212] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-[#F4B400]/30 shadow-2xl">
          {/* Subtle gold radial ambient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4B400]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-wider mb-3">
                <Factory size={13} />
                <span>Dual Manufacturing Plants in Odisha</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] mb-3 text-white">
                Mancheswar & Khurda Industrial Estates
              </h3>
              <p className="text-[#BBBBBB] text-sm sm:text-base leading-relaxed max-w-2xl">
                Our Mancheswar Plant 1 leads precision machining, assembly, and testing of AEW power presses. Our Khurda Plant 2 operates heavy structural plate fabrication, gantry cranes, and custom profiling bays.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link to="/about" className="btn btn-primary text-center justify-center shadow-lg">
                <span>Learn Our History</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary bg-transparent text-white border-[#555] hover:bg-white hover:text-black text-center justify-center">
                <span>Schedule Plant Visit</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
