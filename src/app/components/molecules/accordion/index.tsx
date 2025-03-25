"use client";
import React, { useState, KeyboardEvent } from "react";
import LabelAtom from "../../atoms/label";

export interface AccordionProps {
  title: string;
  content: string;
  isOpen?: boolean;
  className?: string;
  titleFontFamily?: "Poppins" | "Onest" | "SFProDisplay";
  titleFontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  contentFontFamily?: "Poppins" | "Onest" | "SFProDisplay";
  contentFontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen = false,
  className = "",
  titleFontFamily = "SFProDisplay",
  titleFontWeight = "bold",
  contentFontFamily = "SFProDisplay",
  contentFontWeight = "regular",
}) => {
  const [isManuallyExpanded, setIsManuallyExpanded] = useState(false);
  const isExpanded = isManuallyExpanded || isOpen;

  const toggleAccordion = () => {
    setIsManuallyExpanded(!isManuallyExpanded);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      toggleAccordion();
    } else if (e.key === " ") {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className={`w-full rounded-lg overflow-hidden ${className}`}>
      {/* Cabecera con botón de alternar */}
      <div
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        className="flex items-start cursor-pointer transition-colors outline-none"
      >
        <span className="mr-2 text-xl">{isExpanded ? "−" : "+"}</span>
        <LabelAtom
          text={title}
          fontFamily={titleFontFamily}
          fontWeight={titleFontWeight}
          textColor="text-blue-dark"
          fontSize={20}
        />
      </div>

      {/* Contenedor del contenido con padding para alinear con el título */}
      <div
        className={`pl-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <LabelAtom
          text={content}
          fontFamily={contentFontFamily}
          fontWeight={contentFontWeight}
          textColor="text-blue-dark"
          fontSize={18}
        />
      </div>
    </div>
  );
};
