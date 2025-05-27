"use client";
import React, { useState, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";

type FontFamily = "Poppins" | "Onest" | "SFProDisplay";
type FontWeight =
  | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  | "thin" | "extralight" | "light" | "normal" | "regular"
  | "medium" | "semibold" | "bold" | "extrabold" | "black";

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
  className = "",
  textColor = "#fff",
  bgColor = "#334EAC",
  hoverColor = "#263a7e",
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

  const textSizeClasses: Record<string, string> = {
    xs: "text-xs py-1 px-3",
    sm: "text-sm py-1.5 px-4",
    base: "text-base py-2 px-5",
    lg: "text-lg py-2.5 px-6",
    xl: "text-xl py-3 px-8",
  };

  const iconSizeClasses: Record<string, string> = {
    xs: "w-4 h-4",
    sm: "w-4.5 h-4.5",
    base: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };

  const renderIcon = () => {
    if (!icon) return null;
    const size = iconSize || iconSizeClasses[textSize];
    const IconComponent = icon === "ArrowLeft" ? ArrowLeft : ArrowRight;
    return <IconComponent className={`${size}`} color={iconColor} />;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center justify-center gap-2 rounded-full transition-all duration-200 font-${fontWeight} font-${fontFamily?.toLowerCase()} ${
        fullWidth ? "w-full" : ""
      } ${textSizeClasses[textSize]} ${className}`}
      style={{
        backgroundColor: isHovered ? hoverColor : bgColor,
        color: textColor,
      }}
    >
      {icon && iconPosition === "left" && renderIcon()}
      <span className="truncate">{text}</span>
      {icon && iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default ButtonAtom;
