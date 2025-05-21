"use client";
import React, { useState, useEffect } from "react";
import Hero from "../components/organisms/hero";
import Courses from "../components/organisms/courses";
import CoursesExplorationSection from "../components/organisms/coursesExplorationSection";
import LearningPathSection from "../components/organisms/learnigPath";
import FeatureInstructor from "../components/organisms/featureInstructor";
import FrequentQuestions from "../components/organisms/frequentQuestions";
import Plans, { PlansChildren } from "../components/organisms/plans";
import ContactSection from "../components/organisms/contact";

// Agregar evento personalizado para comunicación entre componentes
export const USER_MODE_CHANGE_EVENT = "userModeChange";

// Hook simple para obtener y establecer el modo de usuario
export const useUserMode = () => {
  // Inicializar con un valor por defecto sin verificar window
  const [userMode, setUserModeState] = useState("adult");

  // Mover la lógica de localStorage a useEffect para que solo se ejecute en el cliente
  useEffect(() => {
    const storedMode = localStorage.getItem("userMode");
    if (storedMode) {
      setUserModeState(storedMode);
    }
  }, []);

  const setUserMode = (mode: string) => {
    setUserModeState(mode);
    localStorage.setItem("userMode", mode);
    // Disparar evento para actualizar otros componentes
    window.dispatchEvent(
      new CustomEvent(USER_MODE_CHANGE_EVENT, { detail: mode })
    );
  };

  return { userMode, setUserMode };
};

const Landing = () => {
  const [activeMode, setActiveMode] = useState("adult");

  useEffect(() => {
    // Mover la lógica de localStorage dentro de useEffect
    const storedMode = localStorage.getItem("userMode");
    if (storedMode) {
      setActiveMode(storedMode);
    }

    // Escuchar cambios en el modo de usuario
    const handleModeChange = (e) => setActiveMode(e.detail);
    window.addEventListener(USER_MODE_CHANGE_EVENT, handleModeChange);

    return () =>
      window.removeEventListener(USER_MODE_CHANGE_EVENT, handleModeChange);
  }, []);

  // Función para renderizar el plan según el modo activo
  const renderPlan = () => {
    switch (activeMode) {
      case "child":
        return <PlansChildren />;
      case "teen":
        return <Plans />;
      default:
        return <Plans />;
    }
  };

  return (
    <>
      <div className="mt-12 space-y-36">
        <Hero />
        <Courses />
        <CoursesExplorationSection />
        <LearningPathSection />
        <FeatureInstructor />
        <FrequentQuestions />
        {renderPlan()}
        <ContactSection />
      </div>
    </>
  );
};

export default Landing;
