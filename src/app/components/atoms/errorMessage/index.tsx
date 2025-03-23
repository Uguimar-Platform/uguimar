"use client";
import React from "react";

/**
 * Interface that defines the properties for the ErrorMessage component.
 *
 * @param children The content to be displayed as an error message.
 * @param className Custom CSS classes to style the message.
 */
interface ErrorMessageProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Component that displays an error message.
 * Used to show validation messages or form errors.
 *
 * @param children The content to be displayed as an error message.
 * @param className Custom CSS classes to style the message (default: "text-red-500 text-sm ml-4").
 * @returns The error message component or null if there's no content.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className = "text-red-500 text-sm ml-4",
}) => {
  if (!children) return null;

  return <span className={className}>{children}</span>;
};

export default ErrorMessage;
