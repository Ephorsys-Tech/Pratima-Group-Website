import React, { useState, useMemo } from 'react';
import { HelpCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import MachineCard from '../components/common/MachineCard';
import CTASection from '../components/common/CTASection';
import MachineryHero from '../components/machinery/MachineryHero';
import MachineryFilterBar from '../components/machinery/MachineryFilterBar';
import CustomMachineBanner from '../components/machinery/CustomMachineBanner';
import { machineryList } from '../../src/data/machineryData';

export default function Machinery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbItems = [
    { label: "Machinery Catalogue", to: "/machinery" }
  ];

  const crankCount = machineryList.filter(m => m.driveType === 'Crank').length;
  const hydraulicCount = machineryList.filter(m => m.driveType === 'Hydraulic').length;

  const filteredMachines = useMemo(() => {
    return machineryList.filter((machine) => {
      const matchesType = selectedFilter === 'All' ? true : machine.driveType === selectedFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        machine.modelCode.toLowerCase().includes(query) ||
        machine.name.toLowerCase().includes(query) ||
        machine.capacity.toLowerCase().includes(query) ||
        machine.category.toLowerCase().includes(query);

      return matchesType && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="machinery-page w-full">
      <Breadcrumb items={breadcrumbItems} />
      <MachineryHero />

      <section className="py-16 bg-[#FFFDF5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MachineryFilterBar
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            totalCount={machineryList.length}
            crankCount={crankCount}
            hydraulicCount={hydraulicCount}
          />

          <div className="flex items-center justify-between mb-8 text-sm text-[#666666]">
            <span>
              Showing <strong className="text-[#252525]">{filteredMachines.length}</strong> of {machineryList.length} AEW models
              {selectedFilter !== 'All' && ` (${selectedFilter} Drive)`}
            </span>
            <span className="text-xs text-[#888]">All models available for factory inspection at Mancheswar</span>
          </div>

          {filteredMachines.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
              {filteredMachines.map((machine) => (
                <MachineCard key={machine.id} machine={machine} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#EFE8D6] max-w-lg mx-auto">
              <HelpCircle size={40} className="mx-auto text-[#D99A00] mb-4" />
              <h3 className="text-lg font-bold text-[#252525] mb-2 font-['Outfit']">No Matching Machines Found</h3>
              <p className="text-sm text-[#666666] mb-6">
                We couldn't find any AEW models matching "{searchQuery}". Try searching by tonnage (e.g. 50 Ton) or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedFilter('All');
                  setSearchQuery('');
                }}
                className="btn btn-secondary btn-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}

          <CustomMachineBanner />
        </div>
      </section> 

      <CTASection
        title="Inspect Our Machines in Person"
        subtitle="Visit our Mancheswar Industrial Estate Plant in Bhubaneswar to witness live test runs and die clamping demonstrations."
        primaryActionText="Schedule Factory Visit"
        primaryActionLink="/contact"
      />
    </div>
  );
}
