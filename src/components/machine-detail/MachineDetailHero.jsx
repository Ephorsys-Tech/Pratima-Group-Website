import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, ArrowLeft, Tag, Cog } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/machineryData';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function MachineDetailHero({ machine }) {
  const isCrank = machine.driveType === 'Crank';
  const whatsappUrl = getWhatsAppUrl(machine);

  return (
    <section className="relative overflow-hidden bg-[#07271E] border-b border-[#0D4738]/50 py-12 lg:py-16">
      {/* Full-bleed background machinery image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{ backgroundImage: "url('/images/machinery_hero.jpg')" }}
      ></div>

      {/* Balanced Dark Forest Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/80 to-[#07271E]/95 sm:bg-gradient-to-r sm:from-black/92 sm:via-black/85 sm:to-[#07271E]/80"></div>

      {/* Ambient subtle golden glow */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-[500px] h-48 sm:h-[300px] bg-[#C8973E]/15 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back Link */}
        <div className="mb-6">
          <Link to="/machinery" className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-[#C8973E] transition-colors bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <ArrowLeft size={16} />
            <span>Back to Machinery Catalogue</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Machine Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black aspect-4/3 group">
              <img
                src={machine.image}
                alt={`${machine.modelCode} ${machine.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="badge badge-dark bg-black/85 text-white border border-white/20">
                  {machine.modelCode}
                </span>
                <span className={`badge ${isCrank ? 'bg-[#F28C28] text-white' : 'bg-[#C8973E] text-white'}`}>
                  {machine.driveType} Drive
                </span>
              </div>
              <div className="absolute bottom-3 right-3 bg-gradient-to-r from-[#C8973E] to-[#B3812C] text-[#1E1E1E] font-extrabold px-3 py-1.5 rounded-xl text-sm shadow-md">
                Capacity: {machine.capacity}
              </div>
            </div>
          </div>

          {/* Machine Intro */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 text-[#C8973E] font-bold text-xs uppercase tracking-wider mb-3 border border-[#C8973E]/40 backdrop-blur-sm">
              <ShieldCheck size={14} />
              <span>{machine.category} • Indigenous Odisha Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] mb-3 leading-tight drop-shadow-md">
              {machine.name}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#E2B866] mb-4">
              {machine.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed mb-6 font-normal">
              {machine.description}
            </p>

            {/* Price Box */}
            <div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/15 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="text-xs text-[#9CA3AF] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Tag size={13} className="text-[#C8973E]" />
                  <span>Approved Factory Pricing</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-0.5">
                  {machine.price}
                </div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">{machine.priceNote}</div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp py-2.5 px-4 font-bold rounded-xl"
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="btn btn-secondary bg-white/10 hover:bg-white text-white hover:text-[#0D4738] border-white/20 py-2.5 px-4 font-bold rounded-xl"
                >
                  <Phone size={16} />
                  <span>Call Engineer</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
