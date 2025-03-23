import React, { isValidElement, cloneElement } from "react";
import type { MynaIconsProps } from "@mynaui/icons-react";

/**
 * Available font types for text components
 */
export type FontFamily =
  | "poppins"
  | "onest"
  | "black-mango"
  | "sf-pro"
  | string;

/**
 * Properties for the Label component
 *
 * @param text The text to be displayed in the label
 * @param as The type of HTML element to be rendered
 * @param htmlFor htmlFor attribute for form labels
 * @param textColor Text color (CSS class)
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
 * Label component that displays text with customization options
 * Allows configuration of element type, color, font, icons, and styles
 *
 * @param text The text to be displayed
 * @param as HTML element type to render (default: "label")
 * @param htmlFor htmlFor attribute for form labels
 * @param icon Optional icon to display with the text
 * @param iconPosition Icon position ("left" or "right")
 * @param textColor Text color (default: "text-black")
 * @param font Font family (default: "poppins")
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

  /**
   * Check if the icon is a valid React element
   */
  const isIconElement = isValidElement(icon);

  /**
   * Configure the icon with margins based on its position
   * If on the left, add right margin
   * If on the right, add left margin
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
   * Mapping of font identifiers to real font names
   */
  const fontFamilyMap = {
    poppins: "Poppins",
    onest: "Onest",
    "black-mango": "Black Mango",
    "sf-pro": "SF Pro Display",
  };

  /**
   * Get the real font name from the map or use the direct value
   */
  const fontName = fontFamilyMap[font as keyof typeof fontFamilyMap] || font;

  /**
   * Configure font styles for the component
   */
  const fontStyle = {
    fontFamily: `'${fontName}'`,
    fontWeight: fontWeight,
    ...style,
  };

  return (
    <Tag
      {...(as === "label" ? { htmlFor } : {})}
      className={`py-2 px-2 m-2 inline-flex items-center transition duration-300 ease-in-out ${textColor} ${className}`}
      style={fontStyle}
    >
      {iconPosition === "left" && iconWithMargin}
      <span className="flex items-center">{text}</span>
      {iconPosition === "right" && iconWithMargin}
    </Tag>
  );
};
