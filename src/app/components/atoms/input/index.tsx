"use client";
import React from "react";

/**
 * Interface that defines the properties for the InputAtom component.
 *
 * @param type Type of input (text, password, email, etc).
 * @param placeholder Helper text displayed when the input is empty.
 * @param name Input name, required to identify the field.
 * @param value Current input value.
 * @param onChange Function executed when the input value changes.
 * @param onBlur Function executed when the input loses focus.
 * @param className Additional CSS classes to customize the input.
 * @param style Inline CSS styles for the input.
 */
interface InputAtomProps {
  type?: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Atomic component that represents an input field.
 *
 * This component encapsulates an HTML input with predefined styles
 * and provides a consistent interface for data entry.
 *
 * @param props The component properties according to InputAtomProps interface.
 * @returns A React component that renders a styled input.
 */
const InputAtom: React.FC<InputAtomProps> = ({
  type = "text",
  placeholder = "",
  name,
  value,
  onChange,
  onBlur,
  className = "",
  style,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`rounded-md px-3 py-2 focus:outline-none ${className}`}
        style={style}
      />
    </div>
  );
};

export default InputAtom;
