import React from 'react';
import { ExternalLink } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import CTASection from '../components/common/CTASection';
import OdishaCartHero from '../components/odisha-cart/OdishaCartHero';
import RetailCategories from '../components/odisha-cart/RetailCategories';
import FranchiseOverview from '../components/odisha-cart/FranchiseOverview';
import FranchiseSteps from '../components/odisha-cart/FranchiseSteps';

export default function OdishaCart() {
  const breadcrumbItems = [
    { label: "Businesses", to: "/businesses" },
    { label: "Odisha Kart", to: "/odisha-cart" }
  ];

  return (
    <div className="odisha-cart-page w-full">
      <Breadcrumb items={breadcrumbItems} />

      {/* External Portal Notice Banner */}
      <div className="bg-[#051A14] border-b border-[#0D4738]/60 py-2.5 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 flex-wrap">
          <span className="text-[#10B981] font-bold">Official Online Store:</span>
          <span>Looking to shop products online?</span>
          <a
            href="https://myodishakart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8973E] hover:text-[#E2B866] font-bold underline inline-flex items-center gap-1"
          >
            <span>Visit myodishakart.com</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <OdishaCartHero />
      <RetailCategories />
      <FranchiseOverview />
      <FranchiseSteps />
      <CTASection
        title="Start Your Own Odisha Kart Franchise Store"
        subtitle="Submit your proposed location in Odisha or contact our retail expansion desk directly to schedule an assessment."
        primaryActionText="Submit Franchise Application"
        primaryActionLink="/contact"
      />
    </div>
  );
}
