"use client";

import React from "react";
import InputAtom from "../../atoms/input";
import LabelAtom from "../../atoms/label";

// Define font family type for easier selection
export type FontFamily = "Poppins" | "Onest" | "SFProDisplay";
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
// Use the same InputType as in the InputAtom component
type InputType = "text" | "email" | "password" | "number";
interface InputFieldProps {
  /** Label text to display above the input. */
  label: string;
  /** Name attribute for the input field, useful for form handling. */
  name: string;
  /** The type of the input field (e.g., "text", "email", "password"). */
  type?: InputType;
  /** Placeholder text to display in the input field. */
  placeholder?: string;
  /** Additional Tailwind CSS classes for the label. */
  labelClassName?: string;
  /** Additional Tailwind CSS classes for the input field. */
  inputClassName?: string;
  /** Additional Tailwind CSS classes for the container div. */
  className?: string;
  /** Optional icon to display alongside the label. */
  icon?: React.ReactNode;
  /** Position of the icon relative to the label ("left" or "right"). */
  iconPosition?: "left" | "right";
  /** Position of the label relative to the input ("left", "right", or "center"). */
  labelPosition?: "left" | "right" | "center";
  /** Inline styles to apply to the input field. */
  style?: React.CSSProperties;
  /** Font weight for the label (e.g., "normal", "bold", "semibold"). */
  labelFontWeight?: FontWeight;
  /** Font family for the label (simplified names: "poppins", "onest", "blackmango", "sfpro"). */
  labelFontFamily?: FontFamily;
  /** Font family for the input */
  inputFontFamily?: FontFamily;
  /** Font weight for the input */
  inputFontWeight?: FontWeight;
  /** Background color for the input field */
  colorBG?: string;
}
/**
 * Component that represents an input field with label and error message.
 * Integrates with Formik for form management.
 *
 * @param props The component properties as defined in InputFieldProps.
 * @returns An input field component with label and validation.
 */
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  labelClassName = "",
  inputClassName = "",
  className = "",
  icon,
  iconPosition = "left",
  labelPosition = "left",
  style,
  labelFontWeight = "medium",
  labelFontFamily = "SFProDisplay",
  inputFontFamily = "Poppins",
  inputFontWeight = "regular",
  colorBG = "#E7F1FF",
}) => {
  // Clases para el contenedor del label y el input
  const getContainerClasses = () => {
    return "flex flex-col";
  };

  // Clases para la posición del label
  const getLabelPositionClasses = () => {
    switch (labelPosition) {
      case "center":
        return "self-center";
      case "right":
        return "self-end";
      case "left":
      default:
        return "self-start";
    }
  };

  return (
    <div className={`relative mb-7 ${getContainerClasses()} ${className}`}>
      <LabelAtom
        text={label}
        htmlFor={name}
        icon={icon}
        iconPosition={iconPosition}
        fontFamily={labelFontFamily}
        fontWeight={labelFontWeight}
        className={`mb-2 ${getLabelPositionClasses()} ${labelClassName}`}
      />
      <InputAtom
        type={type}
        name={name}
        placeholder={placeholder}
        fontFamily={inputFontFamily}
        fontWeight={inputFontWeight}
        colorBG={colorBG}
        className={`border px-4 py-2 rounded-md ${inputClassName}`}
        style={style}
      />
    </div>
  );
};

export default InputField;
