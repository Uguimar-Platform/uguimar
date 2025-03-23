"use client";

import React from "react";

/**
 * Props for the ErrorMessage component.
 */
interface ErrorMessageProps {
  /** The content to display as the error message. */
  children?: React.ReactNode;
  /** Additional CSS classes to apply to the error message. */
  className?: string;
}

/**
 * A component to display error messages with customizable styling.
 * 
 * The ErrorMessage component renders a span element with an error message.
 * It only renders if the `children` prop is provided, otherwise it returns null.
 * The default styling includes red text and a small font size, but this can be customized via the `className` prop.
 * 
 * @example
 * ```tsx
 * <ErrorMessage className="text-red-700 text-base">
 *   Este campo es obligatorio.
 * </ErrorMessage>
 * ```
 * 
 * @remarks
 * - This component uses Tailwind CSS for default styling (e.g., `text-red-500`, `text-sm`).
 * - If no `children` is provided, the component will not render.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className = "text-red-500 text-sm ml-4",
}) => {
  // Do not render if there is no content
  if (!children) return null;

  return <span className={className}>{children}</span>;
};

export default ErrorMessage;