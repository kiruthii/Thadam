import React from 'react'
import FeaturesSection from '../../modules/landing/FeaturesSectiion';
import PricingPage from '../../modules/landing/PricingSection';
import SolutionSection from '../../modules/landing/SolutionSection';
import ResourceSection from '../../modules/landing/ResourcesSection';
import Footer from '../../modules/layout/footer/Footer';
import Header from '../../modules/layout/Header/Header';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <FeaturesSection />
      <SolutionSection />
      <PricingPage />
      <ResourceSection />
      <Footer />
    </div>
  )
}

export default LandingPage;
