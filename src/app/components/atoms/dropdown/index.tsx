"use client";

import { useState } from "react";

/**
 * Interface that defines the structure of an option for the dropdown
 * @param id Unique identifier for the option
 * @param name Text that will be displayed for the option
 */
interface Option {
  id: string;
  name: string;
}

/**
 * Interface that defines the properties of the Dropdown component
 * @param options Array of options to be displayed in the dropdown
 */
interface DropdownProps {
  options: Option[];
}

/**
 * Dropdown component that allows selecting an option from a dropdown list
 * @param options The options to be displayed in the dropdown
 * @returns A select component with the provided options
 */
const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  /**
   * State to store the currently selected option
   */
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <select
      aria-label="Seleccionar opción"
      className="btn-select bg-blue-500 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
