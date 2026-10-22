import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import NotFoundContent from '../components/not-found/NotFoundContent';

export default function NotFound() {
  const breadcrumbItems = [
    { label: "Page Not Found", to: "" }
  ];

  return (
    <div className="not-found-page w-full bg-[#FFFDF5] min-h-[70vh] flex flex-col justify-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <NotFoundContent /> 
      </div>
    </div>
  );
}
