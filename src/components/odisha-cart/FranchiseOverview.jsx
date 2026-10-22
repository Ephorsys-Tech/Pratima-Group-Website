import React from 'react';
import { CheckCircle2, TrendingUp, Store, ShieldCheck, DollarSign, Award } from 'lucide-react';

export default function FranchiseOverview() {
  const perks = [
    {
      title: "Low Capital Expenditure",
      desc: "Compact modular store layouts (300 to 1,200 sq. ft.) minimize interior capex and deliver rapid payback within 12 to 18 months."
    },
    {
      title: "Centralized Supply Logistics",
      desc: "Weekly automated replenishment from our Bhubaneswar distribution depot ensures fresh shelf life with zero stockouts."
    },
    {
      title: "Integrated Cloud POS & Inventory",
      desc: "Pre-configured barcode scanning, automated GST invoices, real-time inventory alerts, and simplified daily bookkeeping."
    },
    {
      title: "Staff & Management Training",
      desc: "Comprehensive on-ground training modules on product storytelling, customer engagement, visual merchandising, and hygiene standards."
    },
    {
      title: "High Gross Margin Protection",
      desc: "Direct procurement from farmer collectives yields 22% to 35% gross operating margins for franchisee partners."
    },
    {
      title: "Local Marketing & Launch Support",
      desc: "Flyer distributions, local newspaper features, inaugural discounts, and digital geo-targeted promotions managed by Pratima Group."
    }
  ];

  return (
    <section id="franchise" className="py-20 bg-[#FFFDF5] border-t border-[#EFE8D6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF6D8] text-[#D99A00] font-bold text-xs uppercase tracking-wider mb-3 border border-[#F4B400]/30">
            <Store size={14} />
            <span>Turnkey Business Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit']">
            The Odisha Cart Franchise Model
          </h2>
          <p className="text-[#666666] mt-2">
            A high-demand, community-anchored business model built for enterprising individuals, women entrepreneurs, and retail investors across Odisha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, idx) => (
            <div key={idx} className="bg-white p-7 rounded-2xl border border-[#EFE8D6] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FFF6D8] text-[#D99A00] flex items-center justify-center mb-5">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">
                {perk.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
