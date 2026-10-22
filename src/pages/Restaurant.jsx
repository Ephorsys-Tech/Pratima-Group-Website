import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import CTASection from '../components/common/CTASection';
import RestaurantHero from '../components/restaurant/RestaurantHero';
import RestaurantStatusBanner from '../components/restaurant/RestaurantStatusBanner';
import RestaurantConcept from '../components/restaurant/RestaurantConcept';
import AmbiencePreview from '../components/restaurant/AmbiencePreview';

export default function Restaurant() {
  const breadcrumbItems = [
    { label: "Businesses", to: "/businesses" },
    { label: "Restaurant (Launching Soon)", to: "/restaurant" }
  ];

  return (
    <div className="restaurant-page w-full">
      <Breadcrumb items={breadcrumbItems} />
      <RestaurantHero />
      <RestaurantStatusBanner />
      <RestaurantConcept />
      <AmbiencePreview />
      <CTASection 
        title="Stay Connected With Pratima Group"
        subtitle="For corporate partnership queries, press inquiries, or invitations regarding our upcoming hospitality venture in Bhubaneswar."
        primaryActionText="Contact Pratima Group"
        primaryActionLink="/contact"
      /> 
    </div>
  );
}
