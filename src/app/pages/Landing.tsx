import React from "react";

import ContactSection from "../components/organisms/contact";
import Hero from "../components/organisms/hero";
import LearningPathSection from "../components/organisms/learnigPath";
import Courses from "../components/organisms/courses";
import FormCodePass from "../components/molecules/formCodePass";

const Landing = () => {
  return (
    <>
      <Hero />
      <Courses />
      <LearningPathSection />
      <FormCodePass/>
      <ContactSection />
    </>
  );
};

export default Landing;
