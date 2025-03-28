import React from "react";

import ContactSection from "../components/organisms/contact";
import Hero from "../components/organisms/hero";
import LearningPathSection from "../components/organisms/learnigPath";
import Courses from "../components/organisms/courses";

const Landing = () => {
  return (
    <>
      <Hero />
      <Courses />
      <LearningPathSection />
      <ContactSection />
    </>
  );
};

export default Landing;
