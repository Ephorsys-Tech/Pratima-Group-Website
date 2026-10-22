import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactCards from '../components/contact/ContactCards';
import EnquiryForm from '../components/contact/EnquiryForm';
import PlantLocations from '../components/contact/PlantLocations';

export default function Contact() {
  return (
    <div className="contact-page w-full">
      <ContactHero />

      <section className="py-16 bg-[#FFFDF5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCards />
          <EnquiryForm />
          <PlantLocations />
        </div>
      </section> 
    </div>
  );
}
