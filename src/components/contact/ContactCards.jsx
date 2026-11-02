import React from 'react';
import { Phone, Mail, Clock, Headphones } from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
      {/* Primary Phone & Toll-Free */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E5ECE8] shadow-[0_4px_20px_rgba(13,71,56,0.05)] flex flex-col justify-between">
        <div>
          <div className="w-11 h-11 rounded-2xl bg-[#FAF5E8] text-[#C8973E] flex items-center justify-center mb-4">
            <Phone size={22} />
          </div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
            Toll-Free & Phone
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 font-['Outfit']">
            Voice Support
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Direct telephone consultation and enquiry desk.
          </p>
        </div>
        <div className="space-y-1.5 pt-3 border-t border-gray-100">
          <div className="text-xs text-gray-500">Toll-Free: <strong className="text-[#0D4738]">{companyData.contacts.tollFree}</strong></div>
          <a 
            href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`} 
            className="block text-xs sm:text-sm font-bold text-[#C8973E] hover:underline"
          >
            {companyData.contacts.primaryPhone}
          </a>
          <a 
            href={`tel:${companyData.contacts.secondaryPhone.replace(/\s+/g, '')}`} 
            className="block text-xs font-semibold text-gray-600 hover:underline"
          >
            {companyData.contacts.secondaryPhone}
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E5ECE8] shadow-[0_4px_20px_rgba(13,71,56,0.05)] flex flex-col justify-between">
        <div>
          <div className="w-11 h-11 rounded-2xl bg-[#EDF7F3] flex items-center justify-center mb-4">
            <WhatsAppIcon size={24} variant="color" />
          </div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
            Instant Messaging
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 font-['Outfit']">
            WhatsApp Desk
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Receive catalogue PDFs, video training links, and quotes.
          </p>
        </div>
        <div className="pt-3 border-t border-gray-100">
          <a 
            href={`https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent('Hello Pratima Group, I would like to get in touch regarding your services and products.')}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <WhatsAppIcon size={15} color="#FFFFFF" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E5ECE8] shadow-[0_4px_20px_rgba(13,71,56,0.05)] flex flex-col justify-between">
        <div>
          <div className="w-11 h-11 rounded-2xl bg-[#FAF5E8] text-[#C8973E] flex items-center justify-center mb-4">
            <Mail size={22} />
          </div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
            Official Email
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 font-['Outfit']">
            Inquiries & Docs
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            For franchise applications, tenders, and commercial enquiries.
          </p>
        </div>
        <div className="pt-3 border-t border-gray-100">
          <a 
            href={`mailto:${companyData.contacts.email}`} 
            className="block text-xs font-bold text-gray-900 hover:text-[#C8973E] transition-colors break-all"
          >
            {companyData.contacts.email}
          </a>
          <span className="text-[11px] text-gray-500 block mt-1">
            Web: {companyData.contacts.officialWebsite}
          </span>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E5ECE8] shadow-[0_4px_20px_rgba(13,71,56,0.05)] flex flex-col justify-between">
        <div>
          <div className="w-11 h-11 rounded-2xl bg-[#F8FAF9] text-[#0D4738] flex items-center justify-center mb-4">
            <Clock size={22} />
          </div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
            Working Schedule
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 font-['Outfit']">
            Operational Hours
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Visiting & telephone consultation schedule.
          </p>
        </div>
        <div className="pt-3 border-t border-gray-100">
          <span className="block text-xs font-bold text-gray-900">
            Mon – Sat: 9:00 AM – 7:00 PM
          </span>
          <span className="block text-[11px] text-amber-700 font-semibold mt-0.5">
            {companyData.weeklyOff}
          </span>
        </div>
      </div>
    </div>
  );
}
