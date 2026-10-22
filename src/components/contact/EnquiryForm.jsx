import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    division: 'Machinery Division (AEW Series)',
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
    const text = `*New Website Enquiry - Pratima Group*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Division:* ${formData.division}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    return `https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-[#EFE8D6] shadow-sm p-8 sm:p-12">
      <div className="max-w-2xl mb-8">
        <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-1">
          Direct Factory & Commercial Desk
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] font-['Outfit']">
          Send Us an Official Message
        </h2>
        <p className="text-sm text-[#666666] mt-1">
          Our administrative and technical engineering desks review all inquiries and respond within 24 business hours.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-[#E6F8EE] border border-[#128045]/30 text-center max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#128045] text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-[#128045] mb-2 font-['Outfit']">
            Enquiry Received Successfully!
          </h3>
          <p className="text-sm text-[#252525] mb-6 leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. A representative from the <strong>{formData.division}</strong> will review your details and contact you at <strong>{formData.phone}</strong>.
          </p>

          <a 
            href={generateWhatsAppMessage()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp w-full mb-3"
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
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
                division: 'Machinery Division (AEW Series)',
                subject: '',
                message: ''
              });
            }}
            className="text-xs text-[#666] hover:text-[#252525] underline"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#252525] uppercase tracking-wider mb-2">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Rajesh Mohapatra"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] text-sm text-[#252525] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#252525] uppercase tracking-wider mb-2">
                Phone Number (WhatsApp) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +91 94370 00000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] text-sm text-[#252525] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#252525] uppercase tracking-wider mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="e.g. rajesh@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] text-sm text-[#252525] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#252525] uppercase tracking-wider mb-2">
                Division of Interest <span className="text-red-500">*</span>
              </label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] text-sm text-[#252525] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20"
              >
                <option value="Machinery Division (AEW Series)">Machinery Division (AEW Power Presses)</option>
                <option value="Odisha Cart Franchise">Odisha Cart (Franchise & Retail Store)</option>
                <option value="Restaurant & Hospitality">Pratima Restaurant (Hospitality & Event Enquiries)</option>
                <option value="General Corporate Enquiry">General Corporate & Supply Partnership</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#252525] uppercase tracking-wider mb-2">
              Subject / Machine Model of Interest
            </label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Quotation for AEW-001 30-Ton Crank Press or Franchise in Cuttack"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] text-sm text-[#252525] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#252525] uppercase tracking-wider mb-2">
              Your Detailed Requirements / Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Please provide details about your machinery specifications, required tonnage, or proposed store location..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] text-sm text-[#252525] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-[#888888]">
              🔒 All shared commercial details remain strictly confidential under our Privacy Policy.
            </span>

            <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto">
              <span>Send Enquiry</span>
              <Send size={16} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
