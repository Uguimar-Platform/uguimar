"use client";

import { useState } from "react";

interface Option {
  id: string;
  name: string;
}

interface DropdownProps {
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
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
