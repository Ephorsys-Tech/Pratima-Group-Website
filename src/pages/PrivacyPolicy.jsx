import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PrivacyContent from '../components/privacy/PrivacyContent';

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { label: "Privacy Policy", to: "/privacy-policy" }
  ];

  return (
    <div className="privacy-page w-full bg-[#FFFDF5] py-12">
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-8">
         <PrivacyContent />
      </div>
    </div>
  );
}
