"use client";

import { useState } from "react";

/**
 * Interface for each option in the dropdown.
 */
interface Option {
  /** Identificador único de la opción. */
  id: string;
  /** Texto que se muestra en la opción. */
  name: string;
}

/**
 * Props for the Dropdown component.
 */
interface DropdownProps {
  /** Lista de opciones para el menú desplegable. */
  options: Option[];
  /** Clases personalizadas para el select. */
  className?: string;
}

/**
 * A customizable dropdown component that allows users to select an option from a list.
 *
 * The Dropdown component renders a select element with a list of options.
 * It uses Tailwind CSS for styling and allows custom classes, including color customization.
 *
 * @example
 * ```tsx
 * <Dropdown
 *   options=[
 *     { id: "1", name: "Opción 1" },
 *     { id: "2", name: "Opción 2" },
 *     { id: "3", name: "Opción 3" }
 *   ]
 *   className="w-full border rounded bg-[#f0f0f0] text-[#1e3a8a]"
 * />
 * ```
 *
 * @remarks
 * - This component uses Tailwind CSS for styling.
 * - The component is controlled internally with state.
 * - Includes `aria-label` for accessibility.
 */
const Dropdown: React.FC<DropdownProps> = ({ options, className = "" }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <select
      aria-label="Seleccionar opción"
      className={`p-2 rounded-md ${className}`.trim()}
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
