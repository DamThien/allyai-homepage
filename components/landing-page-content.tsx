"use client";
import { LandingFormHeaderComponent } from './header/header';
import { LandingFormBodyComponent } from './body/body';
import { LandingFormFooterComponent } from './footer/footer';

const LandingPageContent = () => {
  return (
    <div className="overflow-hidden landing-page-bg">
      <LandingFormHeaderComponent />
      <LandingFormBodyComponent />
      <LandingFormFooterComponent />
    </div>
  )
};

export default LandingPageContent;
