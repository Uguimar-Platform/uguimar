"use client";

import React from "react";
import InputAtom from "../../atoms/input";
import { Label } from "../../atoms/label";

/**
 * Props for the InputField component.
 */
interface InputFieldProps {
  /** Label text to display above the input. */
  label: string;
  /** Name attribute for the input field, useful for form handling. */
  name: string;
  /** The type of the input field (e.g., "text", "email", "password"). */
  type?: string;
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
}

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
      <Label
        text={label}
        htmlFor={name}
        icon={icon}
        iconPosition={iconPosition}
        className={`mb-2 ${getLabelPositionClasses()} ${labelClassName}`}
      />
      <InputAtom
        type={type}
        name={name}
        placeholder={placeholder}
        className={`border px-4 rounded-md w-full ${inputClassName}`}
        style={style}
      />
    </div>
  );
};

export default InputField;