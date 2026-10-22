import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, ShoppingBag, UtensilsCrossed, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { businessDivisions } from '../../data/businessData';

export default function BusinessesList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {businessDivisions.map((division, index) => {
            const isEven = index % 2 === 1;
            const isLaunching = division.status === 'Launching Soon';

            return (
              <div 
                key={division.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl border border-[#EFE8D6] bg-[#FFFDF5] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-video lg:aspect-4/3">
                    <img 
                      src={division.image} 
                      alt={division.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`badge ${isLaunching ? 'badge-launching' : 'badge-gold'}`}>
                        {division.badge}
                      </span>
                      <span className="badge badge-dark">
                        {division.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D99A00] mb-2">
                    {division.id === 'machinery' && <Cog size={16} />}
                    {division.id === 'odisha-cart' && <ShoppingBag size={16} />}
                    {division.id === 'restaurant' && <UtensilsCrossed size={16} />}
                    <span>Division {index + 1}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] mb-2 font-['Outfit']">
                    {division.title}
                  </h2>

                  <p className="text-sm font-semibold text-[#D99A00] mb-4">
                    {division.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-6">
                    {division.longDescription}
                  </p>

                  <div className="space-y-3 mb-8">
                    {division.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#D99A00] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#252525] font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link 
                      to={division.route} 
                      className={`btn ${isLaunching ? 'btn-secondary' : 'btn-primary'}`}
                    >
                      <span>{division.ctaText}</span>
                      <ArrowRight size={16} />
                    </Link>

                    {division.id === 'machinery' && (
                      <Link to="/contact" className="text-sm font-bold text-[#666] hover:text-[#252525] flex items-center gap-1">
                        <span>Request Catalogue PDF</span>
                        <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
