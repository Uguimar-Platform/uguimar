import React from "react";

import ContactSection from "../components/organisms/contact";
import Hero from "../components/organisms/hero";
import LearningPathSection from "../components/organisms/learnigPath";
import Courses from "../components/organisms/courses";
import FeatureInstructor from "../components/organisms/featureInstructor";

const Landing = () => {
  return (
    <>
      <Hero />
      <Courses />
      <LearningPathSection />
      <FeatureInstructor/>
      <ContactSection />
    </>
  );
};

export default Landing;
