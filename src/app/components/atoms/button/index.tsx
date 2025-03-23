"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";
/**
 * Available font families for the Button component.
 */
type FontFamily = "Poppins" | "Onest";

/**
 * Available font weights for the Button component.
 */
type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * Props for the Button component.
 */
interface ButtonProps {
  /** The content to be displayed inside the button. */
  children: React.ReactNode;

  /** Callback function triggered when the button is clicked. */
  onClick?: () => void;

  /** The type of the button. Defaults to "button". */
  type?: "button" | "submit" | "reset";

  /** Additional CSS classes to apply to the button. */
  className?: string;

  /** The text color of the button. Defaults to "text-white". */
  textColor?: string;

  /** The background color of the button. Defaults to "bg-blue-500". */
  bgColor?: string;

  /** The background color of the button on hover. Defaults to "hover:bg-blue-600". */
  hoverColor?: string;

  /** Whether the button is disabled. Defaults to false. */
  disabled?: boolean;

  /** The icon to display inside the button. Can be "ArrowLeft" or "ArrowRight". */
  icon?: "ArrowLeft" | "ArrowRight";

  /** The position of the icon relative to the button content. Defaults to "left". */
  iconPosition?: "left" | "right";

  /** The size of the icon in pixels. Defaults to 20. */
  iconSize?: number;

  /** The color of the icon. Defaults to "currentColor". */
  iconColor?: string;

  /** The font family of the button text. Defaults to "Poppins". */
  fontFamily?: FontFamily;

  /** The font weight of the button text. Defaults to 400. */
  fontWeight?: FontWeight;
}
/**
 * * A customizable checkbox component with a label.
 * 
 * The Checkbox component allows you to create a styled checkbox with an optional label.
 * It supports a disabled state and custom text color for the label.
 * 
 * @example
 * ```tsx
 * <Checkbox
 *   label="Acepto los términos y condiciones"
 *   disabled={false}
 *   color="text-[#334EAC]"
 * />
 * ```
 * @remarks
 * - The icons (`ArrowLeft`, `ArrowRight`) are imported from `@mynaui/icons-react`.
 * - The `textColor`, `bgColor`, and `hoverColor` props should use Tailwind CSS classes.
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
