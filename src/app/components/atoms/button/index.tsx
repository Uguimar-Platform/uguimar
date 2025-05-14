"use client";
import React, { useState, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";

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

interface ButtonAtomProps {
  text: string | ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  textColor?: string;
  bgColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  icon?: "ArrowLeft" | "ArrowRight";
  iconPosition?: "left" | "right";
  iconSize?: string;
  iconColor?: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  fullWidth?: boolean;
  textSize?: "xs" | "sm" | "base" | "lg" | "xl";
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  text,
  onClick,
  type = "button",
  className,
  textColor = "#fff",
  bgColor = "#334EAC",
  hoverColor = "hover:bg-blue-600",
  disabled = false,
  icon,
  iconPosition = "left",
  iconSize,
  iconColor = "currentColor",
  fontFamily = "Poppins",
  fontWeight = "medium",
  fullWidth = false,
  textSize = "base",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const iconSizeClasses = {
    xs: "w-4 h-4",
    sm: "w-4.5 h-4.5",
    base: "w-5 h-5",
    lg: "w-5.5 h-5.5",
    xl: "w-6 h-6",
  };

  const renderIcon = () => {
    if (!icon) return null;

    const iconClass = iconSize || iconSizeClasses[textSize];

    switch (icon) {
      case "ArrowLeft":
        return <ArrowLeft className={iconClass} color={iconColor} />;
      case "ArrowRight":
        return <ArrowRight className={iconClass} color={iconColor} />;
      default:
        return null;
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-1 rounded flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 ${
        fullWidth ? "w-full" : ""
      } ${textSizeClasses[textSize]} ${className}`}
      disabled={disabled}
      style={{
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        backgroundColor: isHovered ? hoverColor : bgColor,
        color: textColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{renderIcon()}</span>
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center">{renderIcon()}</span>
      )}
    </button>
  );
};

export default ButtonAtom;
