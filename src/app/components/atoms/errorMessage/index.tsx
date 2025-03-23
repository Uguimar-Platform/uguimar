"use client";

/**
 * Interface that defines the properties for the ErrorMessage component.
 * @param children The error message content.
 * @param className Additional CSS classes to customize the style.
 */
interface ErrorMessageProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Component that displays an error message.
 * Renders an error message with default styling.
 * 
 * @param children The error message content.
 * @param className CSS classes to customize the message style.
 * @returns A span component with the error message or null if there's no content.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className = " text-red-500 text-sm ml-4",
}) => {
  if (!children) return null;
  return <span className={className}>{children}</span>;
};

export default ErrorMessage;
