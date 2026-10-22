import React from 'react';
import { Wheat, Sparkles, Coffee, HeartHandshake, PackageCheck, ShieldAlert } from 'lucide-react';

export default function RetailCategories() {
  const categories = [
    {
      title: "Authentic Odia Packaged Delicacies",
      desc: "Traditional Odia confectionaries, Rasagola, Chhena Poda, Khaja, dry snacks, and heritage papads crafted by certified regional cooperatives.",
      icon: <Coffee size={24} className="text-[#D99A00]" />,
      badge: "Culinary Heritage"
    },
    {
      title: "Organic Grains & Wild Forest Honey",
      desc: "GI-tagged aromatic Kalajeera rice, Koraput organic millet varieties, cold-pressed mustard oil, and indigenous medicinal forest honey.",
      icon: <Wheat size={24} className="text-[#128045]" />,
      badge: "100% Certified Organic"
    },
    {
      title: "Pure Ground Spices & Masalas",
      desc: "Sun-dried Kandhamal organic turmeric (Haldi), Guntur-grade chillies, handmade curry masalas, and stone-pounded regional spice blends.",
      icon: <Sparkles size={24} className="text-[#F28C28]" />,
      badge: "Kandhamal GI Certified"
    },
    {
      title: "Eco-Friendly Utilities & Handicrafts",
      desc: "Coconut shell crafts, sabai grass storage baskets, golden grass utility mats, terracotta serveware, and brass handicraft mementos.",
      icon: <HeartHandshake size={24} className="text-[#8B5CF6]" />,
      badge: "Empowering Rural Artisans"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D99A00] uppercase tracking-wider block mb-2">
            Curated In-Store Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-['Outfit']">
            Signature Product Categories
          </h2>
          <p className="text-[#666666] mt-2">
            Every product on our shelves meets stringent purity standards, ensuring local farmers and artisans receive fair value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-2xl bg-[#FFFDF5] border border-[#EFE8D6] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#EFE8D6] flex items-center justify-center mb-5 shadow-xs">
                  {cat.icon}
                </div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#D99A00] mb-2">
                  {cat.badge}
                </span>
                <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informational note clarifying no online shopping */}
        <div className="mt-12 p-4 rounded-xl bg-[#FFF9E6] border border-[#F4B400]/30 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#805B00] font-medium">
            ℹ️ <strong>Retail Stores Note:</strong> Products are available exclusively in-store across verified Odisha Cart franchise storefronts and partner retail networks. (No online retail cart or direct checkout).
          </p>
        </div>
      </div>
    </section>
  );
}
