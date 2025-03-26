import React from "react";

import ContactSection from "../components/organisms/contact";
import Hero from "../components/organisms/hero";
import LearningPathSection from "../components/organisms/learnigPath";
import Courses from "../components/organisms/courses";
import FormLogin from "../components/molecules/formLogin";

const Landing = () => {
  return (
    <>
      <Hero />
      <Courses />
      <LearningPathSection />
      <ContactSection />
      <FormLogin/>
    </>
  );
};

export default Landing;
