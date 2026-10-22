import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeDivisions from '../components/home/HomeDivisions';
import HomeFeaturedMachinery from '../components/home/HomeFeaturedMachinery';
import HomeWhyChooseUs from '../components/home/HomeWhyChooseUs';
import CTASection from '../components/common/CTASection';

export default function Home() {
  return (
    <div className="home-page w-full">
      <HomeHero />
      <HomeDivisions />
       <HomeFeaturedMachinery /> 
      <HomeWhyChooseUs />
      <CTASection
        title="Ready to Partner with Pratima Group?"
        subtitle="Contact our engineering specialists or franchise representatives for immediate assistance, official quotations, or partnership discussions."
        primaryActionText="Get in Touch"
        primaryActionLink="/contact"
      />
    </div>
  );
}
