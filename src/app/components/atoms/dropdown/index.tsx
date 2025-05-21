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
  fullWidth?: boolean;
  textSize?: "xs" | "sm" | "base" | "lg";
  placeholder?: string;
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
  fullWidth = false,
  textSize = "base",
  placeholder = "Seleccionar opción",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // En la función handleOptionSelect, añade esta condición:
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setIsOpen(false);

    // Verificar si es el dropdown de selección de modo
    if (options.some((opt) => ["adult", "teen", "child"].includes(opt.id))) {
      // Actualizar localStorage y disparar evento
      localStorage.setItem("userMode", optionId);
      window.dispatchEvent(
        new CustomEvent("userModeChange", { detail: optionId })
      );
    }
  };

  // También añade este useEffect para mantener el dropdown sincronizado
  useEffect(() => {
    // Si este dropdown contiene opciones de modo de usuario, mantenerlo sincronizado
    if (options.some((opt) => ["adult", "teen", "child"].includes(opt.id))) {
      const currentMode = localStorage.getItem("userMode");
      if (currentMode && options.some((opt) => opt.id === currentMode)) {
        setSelectedOption(currentMode);
      }

      const handleModeChange = (e) => setSelectedOption(e.detail);
      window.addEventListener("userModeChange", handleModeChange);
      return () =>
        window.removeEventListener("userModeChange", handleModeChange);
    }
  }, [options]);

  const selectedOptionName =
    options.find((option) => option.id === selectedOption)?.name || placeholder;

  return (
    <div
      className={`relative ${fullWidth ? "w-full" : ""} ${className}`}
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full font-bold px-5 py-2.5 rounded-full ${textSizeClasses[textSize]}`}
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
        <span className="truncate">{selectedOptionName}</span>
        <ChevronDown
          className={`w-6 h-6 ml-2 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 right-0 mt-0.5 py-0.5 bg-white rounded-lg shadow-lg z-10 border border-gray-200 max-h-60 overflow-y-auto"
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeight,
          }}
        >
          {options.map((option) => (
            <div
              key={option.id}
              className={`${textSizeClasses[textSize]} px-4 py-3 cursor-pointer hover:bg-[#334EAC] hover:text-white transition-colors duration-200 ${
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
