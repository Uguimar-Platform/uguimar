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
  onChange?: (selectedId: string) => void;
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
  onChange,
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
    onChange?.(optionId);
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

      const handleModeChange = (e:any) => setSelectedOption(e.detail);
      window.addEventListener("userModeChange", handleModeChange);
      return () =>
        window.removeEventListener("userModeChange", handleModeChange);
    }
  }, [options]);

  const selectedOptionName =
    options.find((option) => option.id === selectedOption)?.name || placeholder;

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        className={`flex items-center justify-between gap-2 px-4 py-2 rounded-full ${textSizeClasses[textSize]} ${fontFamily} ${fontWeight} ${borderActive ? `border-[${borderWeight}px] border-[${borderColor}]` : ""} bg-[${colorBGButton}] ${fullWidth ? "w-full" : ""} ring-2 ring-[#334EAC] ring-offset-2`}
      >
        <span>{selectedOptionName}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`block w-full px-4 py-2 text-left hover:bg-[#334EAC] hover:text-white ${option.fontFamily || fontFamily} ${option.fontWeight || fontWeight} ${textSizeClasses[textSize]} ${selectedOption === option.id ? "bg-[#334EAC] text-white" : ""}`}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownAtom;