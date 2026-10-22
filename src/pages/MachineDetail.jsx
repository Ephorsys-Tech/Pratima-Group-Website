import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import CTASection from '../components/common/CTASection';
import MachineDetailHero from '../components/machine-detail/MachineDetailHero';
import MachineSpecsTable from '../components/machine-detail/MachineSpecsTable';
import MachineFeatures from '../components/machine-detail/MachineFeatures';
import MachineAccessories from '../components/machine-detail/MachineAccessories';
import MachineEnquiryCard from '../components/machine-detail/MachineEnquiryCard';
import { machineryList } from '../data/machineryData';

export default function MachineDetail() {
  const { modelId } = useParams();

  // Find the machine by slug or model code
  const machine = machineryList.find(
    (m) =>
      m.slug.toLowerCase() === (modelId || '').toLowerCase() ||
      m.modelCode.toLowerCase() === (modelId || '').toLowerCase()
  );

  if (!machine) {
    return (
      <div className="w-full py-24 text-center bg-[#FFFDF5]">
        <div className="container mx-auto px-4 max-w-lg">
          <h1 className="text-3xl font-extrabold text-[#252525] mb-4 font-['Outfit']">
            Machine Model Not Found
          </h1>
          <p className="text-[#666666] mb-8">
            The requested machine model "{modelId}" does not exist or has been relocated.
          </p>
          <Link to="/machinery" className="btn btn-primary">
            <span>Browse Machinery Catalogue</span>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Machinery", to: "/machinery" },
    { label: machine.modelCode, to: `/machinery/${machine.slug}` }
  ];

  return (
    <div className="machine-detail-page w-full">
      <Breadcrumb items={breadcrumbItems} />
      <MachineDetailHero machine={machine} />

      <section className="py-16 bg-[#FFFDF5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MachineSpecsTable machine={machine} />
          <MachineFeatures machine={machine} />
          <MachineAccessories machine={machine} />
          <MachineEnquiryCard currentSlug={machine.slug} />
        </div>
      </section>

      <CTASection
        title={`Request Official Quotation for ${machine.modelCode}`}
        subtitle={`Speak with our technical engineering desk at Mancheswar for customized tooling, delivery lead time, and foundation diagrams for the ${machine.name}.`}
        primaryActionText="Submit Commercial Enquiry"
        primaryActionLink="/contact"
      />
    </div>
  );
}
