import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import CTASection from '../components/common/CTASection';
import OdishaCartHero from '../components/odisha-cart/OdishaCartHero';
import RetailCategories from '../components/odisha-cart/RetailCategories';
import FranchiseOverview from '../components/odisha-cart/FranchiseOverview';
import FranchiseSteps from '../components/odisha-cart/FranchiseSteps';

export default function OdishaCart() {
  const breadcrumbItems = [
    { label: "Businesses", to: "/businesses" },
    { label: "Odisha Cart", to: "/odisha-cart" }
  ];

  return (
    <div className="odisha-cart-page w-full">
       <Breadcrumb items={breadcrumbItems} />
      <OdishaCartHero />
      <RetailCategories />
      <FranchiseOverview />
      <FranchiseSteps />
      <CTASection 
        title="Start Your Own Odisha Cart Franchise Store"
        subtitle="Submit your proposed location in Odisha or contact our retail expansion desk directly to schedule an assessment."
        primaryActionText="Submit Franchise Application"
        primaryActionLink="/contact"
      /> 
    </div>
  );
}
