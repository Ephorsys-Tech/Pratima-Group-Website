import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function PrivacyContent() {
  return (
    <div className="bg-white rounded-3xl border border-[#EFE8D6] shadow-sm p-8 sm:p-14 text-[#252525]">
      
      <div className="border-b border-[#EFE8D6] pb-8 mb-8">
        <span className="badge badge-gold mb-3">Legal Transparency</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] mb-2">
          Privacy Policy & Data Protection
        </h2>
        <p className="text-xs text-[#888888]">
          Last Updated: October 2026 • Pratima Group of Industry (Odisha, India)
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[#555555] leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-[#252525] font-['Outfit'] mb-3 flex items-center gap-2">
            <span className="text-[#D99A00]">1.</span> Introduction & Scope
          </h3>
          <p>
            Pratima Group of Industry ("we", "our", or "the Group"), headquartered at Mancheswar Industrial Estate, Bhubaneswar, Odisha, operates this website to provide information regarding our industrial machinery manufacturing (AEW Series), retail distribution (Odisha Cart), and hospitality initiatives. We respect your personal privacy and are committed to maintaining the confidentiality of any information you share with us.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#252525] font-['Outfit'] mb-3 flex items-center gap-2">
            <span className="text-[#D99A00]">2.</span> Information We Collect
          </h3>
          <p className="mb-3">
            We collect information only when you deliberately interact with our website services, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li><strong>Commercial Enquiries:</strong> Name, business email, telephone/WhatsApp number, company name, and machinery or franchise requirements when submitting our contact or enquiry forms.</li>
            <li><strong>Communication Records:</strong> Records and copies of your correspondence if you contact us via telephone, WhatsApp, or email.</li>
            <li><strong>Technical Analytics:</strong> Non-personally identifiable diagnostic data such as browser type, device operating system, and pages visited to ensure smooth website responsiveness.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#252525] font-['Outfit'] mb-3 flex items-center gap-2">
            <span className="text-[#D99A00]">3.</span> Purpose and Use of Collected Data
          </h3>
          <p className="mb-3">
            Your provided information is utilized strictly for lawful business purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>To formulate and deliver official machinery quotations, commercial proposals, or franchise prospectuses.</li>
            <li>To answer technical queries regarding AEW crank and hydraulic press specifications.</li>
            <li>To coordinate factory inspection visits at our Mancheswar and Khurda plants.</li>
            <li>We do not sell, rent, lease, or monetize your contact details with external advertising brokers.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#252525] font-['Outfit'] mb-3 flex items-center gap-2">
            <span className="text-[#D99A00]">4.</span> Data Security & Storage
          </h3>
          <p>
            We implement industry-standard encryption, SSL communication protocols, and restricted administrative access to ensure that all customer records and quotation requests are safeguarded against unauthorized disclosure, alteration, or interception.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#252525] font-['Outfit'] mb-3 flex items-center gap-2">
            <span className="text-[#D99A00]">5.</span> Cookies and Tracking
          </h3>
          <p>
            Our website uses minimal, essential functional cookies to remember user preferences (such as catalogue filters) and analyze traffic aggregates. You may configure your browser to decline cookies without impacting your ability to view our machine specifications or browse information.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#252525] font-['Outfit'] mb-3 flex items-center gap-2">
            <span className="text-[#D99A00]">6.</span> Contact for Privacy Inquiries
          </h3>
          <p className="mb-3">
            If you have questions regarding this Privacy Policy or wish to request the removal or update of your submitted contact details, please contact our administrative desk:
          </p>
          <div className="p-4 rounded-xl bg-[#FFFDF5] border border-[#EFE8D6] text-sm text-[#252525]">
            <p><strong>Pratima Group of Industry — Legal & Administrative Office</strong></p>
            <p>Plot No. 62, Mancheswar Industrial Estate, Sector-A, Bhubaneswar, Odisha 751010</p>
            <p>Email: <a href={`mailto:${companyData.contacts.email}`} className="text-[#D99A00] font-bold underline">{companyData.contacts.email}</a></p>
            <p>Phone: {companyData.contacts.primaryPhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
