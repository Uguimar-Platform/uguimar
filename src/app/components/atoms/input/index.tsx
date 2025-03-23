"use client";

import React from "react";

/**
 * Props for the InputAtom component.
 */
interface InputAtomProps {
  /** The type of the input field (e.g., "text", "email", "password"). */
  type?: string;
  /** Placeholder text to display in the input field. */
  placeholder?: string;
  /** Name attribute for the input field, useful for form handling. */
  name: string;
  /** Controlled value of the input field (optional). */
  value?: string;
  /** Callback triggered when the input value changes. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback triggered when the input loses focus. */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Additional CSS classes to apply to the input field. */
  className?: string;
  /** Inline styles to apply to the input field. */
  style?: React.CSSProperties;
}

/**
 * A reusable input field component with customizable styling.
 * 
 * The InputAtom component renders a controlled or uncontrolled input field with support for various types (e.g., text, email, password).
 * It allows customization through props like `type`, `placeholder`, `className`, and `style`, and supports event handlers for `onChange` and `onBlur`.
 * The component uses Tailwind CSS for default styling, providing a rounded appearance and padding.
 * 
 * @example
 * ```tsx
 * import { useState } from "react";
 * import InputAtom from "./InputAtom";
 * 
 * const App = () => {
 *   const [value, setValue] = useState("");
 * 
 *   return (
 *     <InputAtom
 *       type="email"
 *       name="email"
 *       placeholder="Enter your email"
 *       value={value}
 *       style={{ fontSize: "16px" }}
 *     />
 *   );
 * };
 * ```
 * 
 * @remarks
 * - This component uses Tailwind CSS for default styling (e.g., `rounded-md`, `px-3`, `py-2`).
 * - The `value` and `onChange` props can be used to make the input controlled.
 * - Accessibility can be improved by adding `aria-label` or associating the input with a label.
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
        className={`rounded-md px-3 py-2 focus:outline-none w-full ${className}`}
        style={style}
      />
    </div>
  );
};

export default InputAtom;