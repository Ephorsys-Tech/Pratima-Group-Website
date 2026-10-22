import React from 'react';
import CTASection from '../components/common/CTASection';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import VisionMission from '../components/about/VisionMission';
import AboutFacilities from '../components/about/AboutFacilities';

export default function About() {
  return (
    <div className="about-page w-full">
      <AboutHero />
      <AboutStory />
      <VisionMission />
      <AboutFacilities />
      <CTASection 
        title="Explore Our Business Divisions"
        subtitle="Learn how our machinery, retail franchise, and hospitality services deliver lasting value for clients across India."
        primaryActionText="Browse All Businesses"
        primaryActionLink="/businesses"
      />
    </div>
  );
}
