"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "@mynaui/icons-react";

/**
 * Interface that defines the structure of a dropdown option
 * 
 * @param id Unique identifier for the option
 * @param name Text that will be displayed for the option
 */
interface DropdownOption {
  id: string;
  name: string;
}

/**
 * Interface that defines the properties of the Dropdown component
 * 
 * @param options List of options to be displayed in the dropdown
 * @param className Additional CSS classes to customize the component
 * @param defaultOption Default selected option when the component loads
 */
interface DropdownProps {
  options: DropdownOption[];
  className?: string;
  defaultOption?: string;
}

/**
 * Dropdown component that allows selecting an option from a dropdown list
 * Displays the selected option and allows changing it on click
 * 
 * @param options Available options to select from
 * @param className Additional CSS classes to style the component
 * @param defaultOption The default selected option (uses the first one if not specified)
 */
const Dropdown: React.FC<DropdownProps> = ({
  options,
  className = "",
  defaultOption = options[0]?.id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Toggles the dropdown's open state
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles the selection of a dropdown option
   * 
   * @param optionId The ID of the selected option
   */
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setIsOpen(false);
  };

  /**
   * Effect that detects clicks outside the component to close the dropdown
   * Runs once when the component mounts
   */
  useEffect(() => {
    /**
     * Handles clicks outside the dropdown component
     * Closes the dropdown when a click is detected outside
     * 
     * @param event The mouse click event
     */
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

  // Gets the name of the selected option to display
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
