"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";

type FontFamily = "Poppins" | "Onest";
type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * Interface that defines the properties of the Button component
 *
 * @param children The content to be displayed inside the button
 * @param onClick Function to be executed when clicking the button
 * @param type Button type (button, submit, reset)
 * @param className Additional CSS classes to customize the button
 * @param textColor Button text color
 * @param bgColor Button background color
 * @param hoverColor Background color when hovering over the button
 * @param disabled Button disabled state
 * @param icon Icon to display in the button (ArrowLeft or ArrowRight)
 * @param iconPosition Icon position (left or right)
 * @param iconSize Icon size in pixels
 * @param iconColor Icon color
 * @param fontFamily Font family for the button text
 * @param fontWeight Font weight for the button text
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
 * Button component that renders a customizable button with options for icons,
 * styles, and behavior.
 *
 * @returns A React button component with the specified properties
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
   * Function that renders the selected icon
   * 
   * @returns The corresponding icon component or null if there is no icon
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
