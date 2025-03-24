"use client";
import React from "react";

/**
 * Interface that defines the properties for the Checkbox component.
 *
 * @param label The text to be displayed next to the checkbox.
 * @param disabled Indicates if the checkbox is disabled.
 * @param color The color of the label text.
 */
interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  color?: string;
}

/**
 * Checkbox component that renders a checkbox input element with a label.
 * Allows users to select or deselect an option.
 *
 * @param label The text to be displayed next to the checkbox.
 * @param disabled Indicates if the checkbox is disabled.
 * @param color The color of the label text.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  label = "",
  disabled = false,
  color = "text-[#081F5C]",
}) => {
  /**
   * Generate a unique ID for the checkbox to ensure proper association
   * between the input and its label.
   */
  const id = React.useMemo(
    () => "checkbox-" + Math.random().toString(36).slice(2, 11),
    []
  );
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer py-2 px-2 m-2 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        className="w-4 h-4 accent-[#334EAC] rounded"
      />
      <span className={`${color} font-poppins`}>{label}</span>
    </label>
  );
};

export default Checkbox;
