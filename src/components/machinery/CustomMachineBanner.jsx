import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function CustomMachineBanner() {
  return (
    <div className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-[#EFE8D6] shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <span className="badge badge-gold mb-3">Custom Tooling & Die Sets</span>
          <h3 className="text-2xl font-bold text-[#252525] mb-3 font-['Outfit']">
            Need Custom Tonnage or Specific Bed Dimensions?
          </h3>
          <p className="text-[#666666] text-sm leading-relaxed">
            Our Mancheswar Plant 1 engineering team designs tailored mechanical presses, deep draw hydraulic systems, and pneumatic die cushions configured to your exact tool geometry and production cycle parameters.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3">
          <Link to="/contact" className="btn btn-primary text-center">
            <span>Request Custom Quotation</span>
          </Link>
          <a 
            href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className="btn btn-secondary text-center flex items-center justify-center gap-2"
          >
            <PhoneCall size={16} />
            <span>Call Machine Shop Engineer</span>
          </a>
        </div>
      </div>
    </div>
  );
}
