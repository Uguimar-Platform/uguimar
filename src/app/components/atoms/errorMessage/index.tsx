"use client";
import React from "react";

type FontFamily = "Poppins" | "Onest" | "SFProDisplay";
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

interface ErrorMessageAtomProps {
  message: string;
  isVisible: boolean;
  className?: string;
}

const ErrorMessageAtom: React.FC<ErrorMessageAtomProps> = ({
  message,
  isVisible,
  className = "",
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`text-red-500 text-sm ${className}`}
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default ErrorMessageAtom;
