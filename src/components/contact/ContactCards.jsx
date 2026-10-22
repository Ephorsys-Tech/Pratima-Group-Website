import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {/* Primary Phone */}
      <div className="bg-white p-6 rounded-2xl border border-[#EFE8D6] shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-4">
            <Phone size={22} />
          </div>
          <span className="text-xs font-bold text-[#888888] uppercase tracking-wider block mb-1">
            Direct Call Lines
          </span>
          <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">
            Voice Support
          </h3>
          <p className="text-xs text-[#666666] mb-4">
            Instant technical discussions and quotation requests.
          </p>
        </div>
        <div className="space-y-1">
          <a 
            href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`} 
            className="block text-sm font-bold text-[#D99A00] hover:underline"
          >
            {companyData.contacts.primaryPhone}
          </a>
          <a 
            href={`tel:${companyData.contacts.secondaryPhone.replace(/\s+/g, '')}`} 
            className="block text-xs font-semibold text-[#666666] hover:underline"
          >
            {companyData.contacts.secondaryPhone}
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="bg-white p-6 rounded-2xl border border-[#EFE8D6] shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#E6F8EE] flex items-center justify-center mb-4">
            <WhatsAppIcon size={26} variant="color" />
          </div>
          <span className="text-xs font-bold text-[#888888] uppercase tracking-wider block mb-1">
            Instant Messaging
          </span>
          <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">
            WhatsApp Desk
          </h3>
          <p className="text-xs text-[#666666] mb-4">
            Receive catalogue PDFs, video demos, and price estimates.
          </p>
        </div>
        <a 
          href={`https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent('Hello Pratima Group, I would like to get in touch regarding your services and products.')}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-whatsapp btn-sm w-full"
        >
          <WhatsAppIcon size={16} color="#FFFFFF" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Email */}
      <div className="bg-white p-6 rounded-2xl border border-[#EFE8D6] shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-4">
            <Mail size={22} />
          </div>
          <span className="text-xs font-bold text-[#888888] uppercase tracking-wider block mb-1">
            Electronic Inquiries
          </span>
          <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">
            Official Email
          </h3>
          <p className="text-xs text-[#666666] mb-4">
            For formal tenders, purchase orders, and documentation.
          </p>
        </div>
        <div>
          <a 
            href={`mailto:${companyData.contacts.email}`} 
            className="block text-sm font-bold text-[#252525] hover:text-[#D99A00] transition-colors"
          >
            {companyData.contacts.email}
          </a>
          <span className="text-xs text-[#888888]">
            {companyData.contacts.salesEmail}
          </span>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white p-6 rounded-2xl border border-[#EFE8D6] shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#FFFDF5] border border-[#EFE8D6] text-[#252525] flex items-center justify-center mb-4">
            <Clock size={22} />
          </div>
          <span className="text-xs font-bold text-[#888888] uppercase tracking-wider block mb-1">
            Plant Timing
          </span>
          <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">
            Working Hours
          </h3>
          <p className="text-xs text-[#666666] mb-4">
            Visiting & telephone consultation schedule.
          </p>
        </div>
        <div>
          <span className="block text-xs font-bold text-[#252525]">
            Mon – Sat: 9:00 AM – 7:00 PM
          </span>
          <span className="block text-xs text-[#E53E3E] font-medium mt-0.5">
            {companyData.weeklyOff}
          </span>
        </div>
      </div>
    </div>
  );
}
