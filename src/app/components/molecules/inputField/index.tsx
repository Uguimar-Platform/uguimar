"use client";

import React from "react";
import InputAtom from "../../atoms/input";
import LabelAtom from "../../atoms/label";
import ErrorMessageAtom from "../../atoms/errorMessage";

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
type InputType = "text" | "email" | "password" | "number" | "date";

type Size = "sm" | "md" | "lg";
type Layout = "vertical" | "horizontal";

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
  /** Size of the input field ("sm", "md", or "lg"). */
  size?: Size;
  /** Layout of the input field ("vertical" or "horizontal"). */
  layout?: Layout;
  /** Error message to display below the input field. */
  error?: string;
  /** Success message to display below the input field. */
  success?: string;
  /** Disable the input field. */
  disabled?: boolean;
  /** Make the input field read-only. */
  readOnly?: boolean;
  /** Description text to display below the input field. */
  description?: string;
  /** Make the input field full width. */
  fullWidth?: boolean;
}

const sizeClasses = {
  sm: {
    label: "text-sm",
    input: "text-sm px-2 py-1",
  },
  md: {
    label: "text-base",
    input: "text-base px-3 py-2",
  },
  lg: {
    label: "text-lg",
    input: "text-lg px-4 py-3",
  },
};

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
  size = "md",
  layout = "vertical",
  error,
  success,
  disabled = false,
  readOnly = false,
  description,
  fullWidth = true,
}) => {
  // Layout classes
  const containerLayout =
    layout === "horizontal"
      ? "flex flex-row items-center gap-4"
      : "flex flex-col";

  // Label alignment
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

  // Estado visual para error/success
  const borderColor = error
    ? "border-red-500 focus:ring-red-200"
    : success
      ? "border-green-500 focus:ring-green-200"
      : "border-gray-200 focus:ring-blue-200";

  return (
    <div
      className={`relative ${containerLayout} ${className} ${fullWidth ? "w-full" : ""}`}
      aria-live="polite"
    >
      <LabelAtom
        text={label}
        htmlFor={name}
        icon={icon}
        iconPosition={iconPosition}
        fontFamily={labelFontFamily}
        fontWeight={labelFontWeight}
        className={`${sizeClasses[size].label} ${getLabelPositionClasses()} ${labelClassName} mb-2`}
      />
      <div className={`flex flex-col w-full`}>
        <InputAtom
          type={type}
          name={name}
          placeholder={placeholder}
          fontFamily={inputFontFamily}
          fontWeight={inputFontWeight}
          colorBG={colorBG}
          className={`w-full border rounded-md transition-all duration-200 outline-none focus:ring-2 ${sizeClasses[size].input} ${borderColor} ${inputClassName}`}
          style={style}
          disabled={disabled}
          readOnly={readOnly}
        />
        {description && (
          <span className="text-xs text-gray-500 mt-1">{description}</span>
        )}
        <ErrorMessageAtom message={error || ""} isVisible={!!error} />
        {success && !error && (
          <span className="text-xs text-green-600 mt-1">{success}</span>
        )}
      </div>
    </div>
  );
};

export default InputField;
