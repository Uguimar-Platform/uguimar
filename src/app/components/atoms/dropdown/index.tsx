"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "@mynaui/icons-react";

interface DropdownOption {
  id: string;
  name: string;
}

interface DropdownProps {
  options: DropdownOption[];
  className?: string;
  defaultOption?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  className = "",
  defaultOption = options[0]?.id,
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
        className="flex items-center justify-between w-full font-bold text-base font-['Onest']"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {selectedOptionName}
        <ChevronDown
          className={`w-6 h-6 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2.5 py-0.5 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          {options.map((option) => (
            <div
              key={option.id}
              className={`font-['Onest'] px-4 py-2 cursor-pointer hover:bg-[#334EAC] hover:text-white ${
                option.id === selectedOption ? "bg-[#334EAC] text-white" : ""
              }`}
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

export default Dropdown;
