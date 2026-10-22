import React from 'react';
import { Utensils, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

export default function RestaurantConcept() {
  const pillars = [
    {
      title: "Royal Odia Culinary Traditions",
      desc: "Reviving authentic 56-bhoga inspired heritage recipes, fragrant aromatic Kanika, Dalma, and coastal Chilika mud crab and prawn specialties."
    },
    {
      title: "Direct Farm-to-Table Freshness",
      desc: "Sourcing organically cultivated native spices, cold-pressed oils, and fresh grains directly through Pratima Group's Odisha Cart farmer network."
    },
    {
      title: "Artisanal Odia Architecture",
      desc: "Handcrafted brass bell metal fixtures, Pattachitra mural backdrops, and warm amber chandelier lighting reflecting Odisha's temple legacy."
    },
    {
      title: "VIP Banqueting & Private Suites",
      desc: "Dedicated acoustically insulated chambers designed for executive corporate dinners, family milestone celebrations, and delegations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-2">
            The Vision Behind Pratima Hospitality
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit']">
            Where Heritage Meets Modern Gastronomy
          </h2>
          <p className="text-[#666666] mt-2">
            Designed to become a benchmark cultural milestone for food lovers, families, and visitors to Odisha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-[#FFFDF5] border border-[#EFE8D6] shadow-sm flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EFE8D6] text-[#D99A00] flex items-center justify-center shrink-0 shadow-xs">
                <Utensils size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#252525] mb-2 font-['Outfit']">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
