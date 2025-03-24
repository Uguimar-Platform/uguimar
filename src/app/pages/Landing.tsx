import React from "react";
import LearningPathSection from "../components/organisms/learnigPath";
import ContactSection from "../components/organisms/contact";
import Hero from "../components/organisms/hero";

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
