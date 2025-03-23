"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";

/**
 * Available font families for the button.
 */
type FontFamily = "Poppins" | "Onest";

/**
 * Available font weights for the button.
 */
type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * Interface that defines the properties of the Button component.
 * 
 * @param children Content of the button.
 * @param onClick Function that executes when clicking the button.
 * @param type HTML button type (button, submit, reset).
 * @param className Additional CSS classes to customize the button.
 * @param textColor Text color of the button.
 * @param bgColor Background color of the button.
 * @param hoverColor Background color when hovering over the button.
 * @param disabled Indicates if the button is disabled.
 * @param icon Icon to display in the button (ArrowLeft or ArrowRight).
 * @param iconPosition Position of the icon (left or right).
 * @param iconSize Size of the icon in pixels.
 * @param iconColor Color of the icon.
 * @param fontFamily Font family for the button text.
 * @param fontWeight Font weight for the button text.
 */
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

/**
 * Button component that implements a customizable button with icon support.
 * Allows configuration of colors, fonts, icons, and behavior.
 */
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
  /**
   * Renders the selected icon based on the icon property.
   * @returns The corresponding icon component or null if there is no icon.
   */
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

  /**
   * Font styles applied directly to the button.
   */
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
