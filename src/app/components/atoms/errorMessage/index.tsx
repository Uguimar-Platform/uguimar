"use client";

interface ErrorMessageProps {
  children?: React.ReactNode; // Cambia message por children
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className = " text-red-500 text-sm ml-4",
}) => {
  if (!children) return null;
  return <span className={className}>{children}</span>;
};

export default ErrorMessage;
