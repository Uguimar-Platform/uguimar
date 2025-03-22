"use client";

import React, { useState, KeyboardEvent } from "react";
import { Label } from "../../atoms/label";

export interface AccordionProps {
  title: string;
  content: string;
  isOpen?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen = false,
  className = "",
}) => {
  // Internal state to track open/closed state
  const [isManuallyExpanded, setIsManuallyExpanded] = useState(false);

  // Determines if the accordion content should be visible
  const isExpanded = isManuallyExpanded || isOpen;

  // Toggles the expanded/collapsed state of the accordion
  const toggleAccordion = () => {
    setIsManuallyExpanded(!isManuallyExpanded);
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      toggleAccordion();
    } else if (e.key === " ") {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div
      className={`w-full rounded-lg overflow-hidden bg-[#E7F1FF] ${className}`}
    >
      <div
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        className="flex items-center justify-between cursor-pointer transition-colors outline-none"
      >
        <div className="flex items-center">
          <span className="mr-2 text-xl">{isExpanded ? "−" : "+"}</span>
          <Label
            text={title}
            font="font-sfProDisplay"
            textColor="text-blue-dark"
            className="font-bold"
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <Label
          text={content}
          font="font-sfProDisplay"
          textColor="text-blue-dark"
        />
      </div>
    </div>
  );
};
