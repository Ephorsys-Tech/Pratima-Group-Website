import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MapPinned, Hammer, Rocket, ArrowRight } from 'lucide-react';

export default function FranchiseSteps() {
  const steps = [
    {
      num: "01",
      title: "Submit Expression of Interest",
      desc: "Fill our franchise enquiry form with your proposed city/town, property details, and commercial investment budget.",
      icon: <FileText size={22} className="text-[#D99A00]" />
    },
    {
      num: "02",
      title: "Location Feasibility & Approval",
      desc: "Our retail expansion team visits your property to evaluate footfall, catchment area demographics, and road accessibility.",
      icon: <MapPinned size={22} className="text-[#D99A00]" />
    },
    {
      num: "03",
      title: "Agreement & Store Fit-Out",
      desc: "Sign standard franchisee MoU, receive standardized wooden shelf designs, install POS hardware, and receive initial inventory.",
      icon: <Hammer size={22} className="text-[#D99A00]" />
    },
    {
      num: "04",
      title: "Grand Launch & Continuous Supply",
      desc: "Inaugurate your Odisha Cart store with group promotional campaigns, influencer visits, and daily distributor replenishment.",
      icon: <Rocket size={22} className="text-[#D99A00]" />
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-[#EFE8D6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-2">
            Structured Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit']">
            4 Simple Steps to Own an Odisha Cart Franchise
          </h2>
          <p className="text-[#666666] mt-2">
            From initial application to grand opening in less than 30 business days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-2xl bg-[#FFFDF5] border border-[#EFE8D6] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EFE8D6] flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                  <span className="font-extrabold text-2xl text-[#E5D7B7] font-['Outfit']">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="btn btn-primary btn-lg inline-flex items-center gap-2">
            <span>Apply for Franchise Today</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
