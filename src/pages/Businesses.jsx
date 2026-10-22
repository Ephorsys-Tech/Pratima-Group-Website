import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import CTASection from '../components/common/CTASection';
import BusinessesHero from '../components/businesses/BusinessesHero';
import BusinessesList from '../components/businesses/BusinessesList';
import SynergyModel from '../components/businesses/SynergyModel';

export default function Businesses() {
  const breadcrumbItems = [
    { label: "Business Divisions", to: "/businesses" }
  ];

  return (
    <div className="businesses-page w-full">
       <Breadcrumb items={breadcrumbItems} />
      <BusinessesHero />
      <BusinessesList />
      <SynergyModel />
      <CTASection 
        title="Interested in Partnering With Any Division?"
        subtitle="Speak to our division heads regarding machinery orders, franchise applications, or corporate inquiries."
        primaryActionText="Contact Pratima Group"
        primaryActionLink="/contact"
      /> 
    </div>
  );
}
