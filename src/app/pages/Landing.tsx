"use client";
import React, { useState, useEffect } from "react";
import Hero from "../components/organisms/hero";
import Courses from "../components/organisms/courses";
import CoursesExplorationSection from "../components/organisms/coursesExplorationSection";
import LearningPathSection from "../components/organisms/learnigPath";
import FeatureInstructor from "../components/organisms/featureInstructor";
import FrequentQuestions from "../components/organisms/frequentQuestions";
import Plans from "../components/organisms/plans";
import ContactSection from "../components/organisms/contact";

  const Landing = () => {
  const [userMode, setUserMode] = useState("child");

  useEffect(() => {
    // Leer desde localStorage (por si ya se eligió antes)
    const storedMode = localStorage.getItem("userMode");
    if (storedMode) {
      setUserMode(storedMode);
    }

    // Escuchar cambios
    const handleUserModeChange = (e: any) => {
      setUserMode(e.detail);
    };

    window.addEventListener("userModeChange", handleUserModeChange);
    return () => window.removeEventListener("userModeChange", handleUserModeChange);
  }, []);


  return (
    <>
      <div className="mt-12 space-y-36">
        <Hero />
        <Courses mode={userMode} />
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