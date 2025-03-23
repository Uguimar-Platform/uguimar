import { MynaIconsProps } from "@mynaui/icons-react";
import React, { isValidElement, cloneElement } from "react";

/**
 * Available font families for the Label component
 */
export type FontFamily =
  | "poppins"
  | "onest"
  | "black-mango"
  | "sf-pro"
  | string;

/**
 * Props for the Label component
 * @param text The text to display in the label
 * @param as The HTML element type to render
 * @param htmlFor The htmlFor attribute for label elements
 * @param textColor The text color
 * @param icon Optional icon to display with the text
 * @param iconPosition Position of the icon relative to the text
 * @param className Additional CSS classes
 * @param font Font family to use
 * @param fontWeight Font weight
 * @param style Additional CSS styles
 */
export type LabelProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "label" | "p" | "span";
  htmlFor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  font?: FontFamily;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: React.CSSProperties;
};

/**
 * Label component that displays text with various styling options
 * Can be customized with icons, different fonts and styles
 *
 * @param text The text to display in the label
 * @param as The HTML element type to render (default: "label")
 * @param htmlFor The htmlFor attribute for label elements
 * @param icon Optional icon to display with the text
 * @param iconPosition Position of the icon relative to the text (default: "left")
 * @param textColor The text color (default: "text-black")
 * @param font Font family to use (default: "poppins")
 * @param fontWeight Font weight (default: 400)
 * @param className Additional CSS classes
 * @param style Additional CSS styles
 */
export const Label: React.FC<LabelProps> = ({
  text,
  as = "label",
  htmlFor,
  icon,
  iconPosition = "left",
  textColor = "text-black",
  font = "poppins",
  fontWeight = 400,
  className = "",
  style,
}) => {
  const Tag = as;
  const isIconElement = isValidElement(icon);

  /**
   * Configure the icon with margins based on its position
   */
  const iconWithMargin =
    isIconElement && iconPosition === "left"
      ? cloneElement(icon as React.ReactElement<MynaIconsProps>, {
          className: `${(icon as React.ReactElement<MynaIconsProps>).props.className || ""}`,
          size: 20,
          style: { display: "flex", alignItems: "center", marginRight: "8px" },
        })
      : isIconElement && iconPosition === "right"
        ? cloneElement(icon as React.ReactElement<MynaIconsProps>, {
            className: `${(icon as React.ReactElement<MynaIconsProps>).props.className || ""}`,
            size: 20,
            style: { display: "flex", alignItems: "center", marginLeft: "8px" },
          })
        : icon;

  /**
   * Map of font names for CSS usage
   */
  const fontFamilyMap = {
    poppins: "Poppins",
    onest: "Onest",
    "black-mango": "Black Mango",
    "sf-pro": "SF Pro Display",
  };

  const fontName = fontFamilyMap[font as keyof typeof fontFamilyMap] || font;

  /**
   * Configure font styles
   */
  const fontStyle = {
    fontFamily: `'${fontName}'`,
    fontWeight: fontWeight,
    ...style,
  };

  return (
    <Tag
      {...(as === "label" ? { htmlFor } : {})}
      className={`${textColor} ${className}`}
      style={fontStyle}
    >
      {iconPosition === "left" && iconWithMargin}
      <span className="flex items-center">{text}</span>
      {iconPosition === "right" && iconWithMargin}
    </Tag>
  );
};
