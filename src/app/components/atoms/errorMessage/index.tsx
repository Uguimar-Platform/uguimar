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
  children?: React.ReactNode;
  className?: string;
  isVisible?: boolean;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
}

const ErrorMessageAtom: React.FC<ErrorMessageAtomProps> = ({
  children,
  className = "",
  isVisible = true,
  fontFamily = "Poppins",
  fontWeight = 400,
}) => {
  if (!children || !isVisible) return null;

  return (
    <span
      className={`text-red-500 text-sm ml-4 ${className}`}
      style={{
        fontFamily: fontFamily,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </span>
  );
};

export default ErrorMessageAtom;
