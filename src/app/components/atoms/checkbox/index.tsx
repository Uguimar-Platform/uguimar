import React from "react";

/**
 * Interface that defines the properties for the Checkbox component.
 *
 * @param label Text to be displayed next to the checkbox.
 * @param disabled Indicates if the checkbox is disabled.
 * @param color Color of the label text (using theme color variables).
 */
interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  color?: string;
}

/**
 * Checkbox component that renders a checkbox input with a label.
 * Allows customization of text color and disabled state.
 *
 * @param label Text to be displayed next to the checkbox, empty by default.
 * @param disabled Disabled state of the checkbox, false by default.
 * @param color Color of the label text, "blue-dark" by default.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  label = "",
  disabled = false,
  color = "blue-dark",
}) => {
  /**
   * Generate a unique ID for the checkbox to associate it with its label.
   * This improves accessibility and allows clicking on the label to activate the checkbox.
   */
  const id = React.useMemo(
    () => "checkbox-" + Math.random().toString(36).slice(2, 11),
    []
  );

  /**
   * Method that determines the text color class based on the color property.
   * Converts the color name to the corresponding CSS class.
   * 
   * @returns CSS class for the text color.
   */
  const getTextColorClass = (): string => {
    switch (color) {
      case "blue-dark":
        return "text-[#081F5C]";
      case "blue-medium":
        return "text-[#334EAC]";
      case "blue-light":
        return "text-[#7098D1]";
      case "blue-lightest":
        return "text-[#D0E3FF]";
      case "blue-lighter":
        return "text-[#E7F1FF]";
      case "blue-faint":
        return "text-[#F9FCFF]";
      case "grey-light":
        return "text-[#E7E7E7]";
      default:
        return "text-[#081F5C]";
    }
  };

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
      <span className={`${getTextColorClass()} font-poppins`}>{label}</span>
    </label>
  );
};

export default Checkbox;
