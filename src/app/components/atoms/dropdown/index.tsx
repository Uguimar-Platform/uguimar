"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "@mynaui/icons-react";

type FontFamily = "Poppins" | "Onest" | "SFProDisplay";
type FontWeight =
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

interface DropdownAtomOption {
  id: string;
  name: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
}

interface DropdownAtomProps {
  options: DropdownAtomOption[];
  className?: string;
  defaultOption?: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  borderActive?: boolean;
  borderColor?: string;
  borderWeight?: string | number;
  colorBGButton?: string;
}

const DropdownAtom: React.FC<DropdownAtomProps> = ({
  options,
  className = "",
  defaultOption = options[0]?.id,
  fontFamily = "Onest",
  fontWeight = "bold",
  borderActive = true,
  borderColor = "#334EAC",
  borderWeight = 1.5,
  colorBGButton = "#fff",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOptionName =
    options.find((option) => option.id === selectedOption)?.name ||
    options[0]?.name;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full font-bold text-base px-5 py-2.5 rounded-full"
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          backgroundColor: colorBGButton,
          border: borderActive
            ? `${borderWeight}px solid ${borderColor}`
            : "none",
        }}
      >
        {selectedOptionName}
        <ChevronDown
          className={`w-6 h-6 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 right-0 mt-0.5 py-0.5 bg-white rounded-lg shadow-lg z-10 border border-gray-200"
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeight,
          }}
        >
          {options.map((option) => (
            <div
              key={option.id}
              className={`font-['Onest'] px-4 py-2 cursor-pointer hover:bg-[#334EAC] hover:text-white ${
                option.id === selectedOption ? "bg-[#334EAC] text-white" : ""
              }`}
              style={{
                fontFamily: fontFamily,
                fontWeight: fontWeight,
              }}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownAtom;
