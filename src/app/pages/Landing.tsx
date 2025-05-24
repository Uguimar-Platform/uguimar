"use client"
import React, { useState } from "react";
import Hero from "../components/organisms/hero";
import Courses from "../components/organisms/courses";
import CoursesExplorationSection from "../components/organisms/coursesExplorationSection";
import LearningPathSection from "../components/organisms/learnigPath";
import FeatureInstructor from "../components/organisms/featureInstructor";
import FrequentQuestions from "../components/organisms/frequentQuestions";
import Plans from "../components/organisms/plans";
import ContactSection from "../components/organisms/contact";
import Header from "../components/organisms/header";


const Landing = () => {
   const [ageGroup, setAgeGroup] = useState("ninos");

  return (
    <>
      <div className="mt-12 space-y-36">
        <Header onChangeGroup={setAgeGroup}/>
        <Hero ageGroup={ageGroup}/>
        <Courses />
        <CoursesExplorationSection />
        <LearningPathSection />
        <FeatureInstructor />
        <FrequentQuestions />
        <Plans />
        <ContactSection />
      </div>
    </>
  );
};

export default Landing;