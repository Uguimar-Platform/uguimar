"use client";

import CardCategoryCourses from "./components/molecules/CardCategoryCourses";
import LearningPathSection from "./components/molecules/learnigPath";

export default function Home() {
  return <>
  <CardCategoryCourses 
      title="Curso de programación"
      course="javascript"
      description="Aprende a programar desde cero"
      categorycourseimage="/categorycourse.webp"
      buttonText="Inscríbete ahora"
  />
  <LearningPathSection />
  </>;
}
