"use client";
import React, { useState, KeyboardEvent } from "react";
import LabelAtom from "../../atoms/label";
import { Plus, Minus } from "@mynaui/icons-react";

export interface AccordionProps {
  title: string;
  content: string;
  isOpen?: boolean;
  className?: string;
  onToggle?: (expanded: boolean) => void;
  expanded?: boolean;
  contentId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen = false,
  className = "",
  onToggle,
  expanded,
  contentId,
}) => {
  const [isManuallyExpanded, setIsManuallyExpanded] = useState(false);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : isManuallyExpanded || isOpen;
  const uniqueContentId =
    contentId ||
    `accordion-content-${title.replace(/\s+/g, "-").toLowerCase()}`;

  const toggleAccordion = () => {
    if (isControlled && onToggle) {
      onToggle(!isExpanded);
    } else {
      setIsManuallyExpanded((prev) => !prev);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className={`w-full rounded-lg overflow-hidden ${className} mb-12`}>
      <button
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={uniqueContentId}
        className="grid grid-cols-[auto_1fr] items-center gap-4 cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-transparent border-0 w-full text-left p-0 mb-3"
        tabIndex={0}
        type="button"
      >
        <span className="text-xl">
          {isExpanded ? (
            <Minus className="w-4 h-auto lg:w-6 lg:h-auto" />
          ) : (
            <Plus className="w-4 h-auto lg:w-6 lg:h-auto" />
          )}
        </span>
        <LabelAtom
          text={title}
          fontFamily="SFProDisplay"
          fontWeight="bold"
          textColor="#081F5C"
          fontSize="text-[16px] md:text-[20px] lg:text-[24px]"
          className="max-w-[430px] leading-[20px] sm:leading-6 lg:leading-6"
        />
      </button>
      <div
        id={uniqueContentId}
        role="region"
        aria-labelledby={uniqueContentId + "-label"}
        className={`pl-8 lg:pl-10 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
        style={{
          transitionProperty: "max-height",
        }}
      >
        <LabelAtom
          text={content}
          fontFamily="SFProDisplay"
          fontWeight="regular"
          textColor="#081F5C"
          fontSize="text-[14px] md:text-[16px] lg:text-[20px]"
          className="leading-[18px] sm:leading-5 lg:leading-6 max-w-[420px]"
        />
      </div>
    </div>
  );
};
