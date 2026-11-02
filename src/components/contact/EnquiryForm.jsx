import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    division: 'AEW Paper Plate Machinery (AEW-001 to AEW-008)',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Website Enquiry - Pratima Group of Industry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Division:* ${formData.division}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    return `https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E5ECE8] shadow-[0_4px_25px_rgba(13,71,56,0.06)] p-6 sm:p-10 lg:p-12">
      <div className="max-w-2xl mb-8">
        <span className="text-xs font-bold text-[#C8973E] uppercase tracking-wider block mb-1 font-['Outfit']">
          Direct Commercial & Technical Desk
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-['Outfit']">
          Send Us an Official Message
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Our engineering desk and franchise management team at Kosala, Angul review all inquiries and respond within 24 business hours.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#EDF7F3] border border-emerald-300 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#108E68] text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={28} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0D4738] mb-2 font-['Outfit']">
            Enquiry Received Successfully!
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 mb-6 leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. A representative from the <strong>{formData.division}</strong> will review your requirements and reach you at <strong>{formData.phone}</strong>.
          </p>

          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center gap-2 shadow-sm mb-3 transition-all"
          >
            <WhatsAppIcon size={16} color="#FFFFFF" />
            <span>Forward Enquiry Directly to WhatsApp Desk</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                division: 'AEW Paper Plate Machinery (AEW-001 to AEW-008)',
                subject: '',
                message: ''
              });
            }}
            className="text-xs text-gray-500 hover:text-gray-900 underline font-medium"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Ramesh Chandra Sahoo"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF7] text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#C8973E] focus:ring-1 focus:ring-[#C8973E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Phone Number (WhatsApp) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +91 94379 76060"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF7] text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#C8973E] focus:ring-1 focus:ring-[#C8973E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF7] text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#C8973E] focus:ring-1 focus:ring-[#C8973E]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Division of Interest <span className="text-red-500">*</span>
              </label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF7] text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#C8973E] focus:ring-1 focus:ring-[#C8973E]"
              >
                <option value="AEW Paper Plate Machinery (AEW-001 to AEW-008)">AEW Paper Plate Machinery (AEW-001 to AEW-008)</option>
                <option value="Smart Collection Supermarket Franchise">Smart Collection Supermarket Franchise (PAN India)</option>
                <option value="Hospitality & Fine Dining">Fine Dining Restaurant & Banquet</option>
                <option value="General Engineering & Spare Parts">General Engineering & Spare Dies</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Subject / Machine Model of Interest
            </label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Quotation for AEW-001 Crank Machine or Smart Collection Franchise in Angul"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF7] text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#C8973E] focus:ring-1 focus:ring-[#C8973E]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Your Detailed Requirements / Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Please provide details about your machine requirements, proposed die sizes (4 to 18 inch), or commercial store footprint..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAFAF7] text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#C8973E] focus:ring-1 focus:ring-[#C8973E]"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-gray-500 text-center sm:text-left">
              🔒 Approved by Govt. of Odisha DIC, Angul (Regd No: 210151100297).
            </span>

            <button 
              type="submit" 
              className="w-full sm:w-auto py-2.5 px-6 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#C8973E] to-[#B3812C] hover:from-[#D4A347] hover:to-[#C8973E] shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span>Send Official Message</span>
              <Send size={15} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
