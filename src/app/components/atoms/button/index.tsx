"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";

type FontFamily = "Poppins" | "Onest";
type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  textColor?: string;
  bgColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  icon?: "ArrowLeft" | "ArrowRight";
  iconPosition?: "left" | "right";
  iconSize?: number;
  iconColor?: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  textColor = "text-white",
  bgColor = "bg-blue-500",
  hoverColor = "hover:bg-blue-600",
  disabled = false,
  icon,
  iconPosition = "left",
  iconSize = 20,
  iconColor = "currentColor",
  fontFamily = "Poppins",
  fontWeight = 400,
}) => {
  const renderIcon = () => {
    if (!icon) return null;

    switch (icon) {
      case "ArrowLeft":
        return <ArrowLeft size={iconSize} color={iconColor} />;
      case "ArrowRight":
        return <ArrowRight size={iconSize} color={iconColor} />;
      default:
        return null;
    }
  };

  const fontStyle = {
    fontFamily,
    fontWeight,
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${bgColor} ${textColor} ${hoverColor} px-4 py-2 rounded flex items-center gap-2 cursor-pointer transition-colors duration-300 ${className}`}
      style={fontStyle}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{renderIcon()}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center">{renderIcon()}</span>
      )}
    </button>
  );
};

export default Button;
