import React from "react";

import ContactSection from "../components/organisms/contact";
import Hero from "../components/organisms/hero";
import LearningPathSection from "../components/organisms/learnigPath";

const Landing = () => {
  return (
    <>
      <Hero />
      <LearningPathSection />
      <ContactSection />
    </>
  );
};

export default Landing;
