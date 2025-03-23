import { MynaIconsProps } from "@mynaui/icons-react";
import React, { isValidElement, cloneElement } from "react";

/**
 * Supported font family options for the Label component.
 */
export type FontFamily =
  | "poppins"
  | "onest"
  | "black-mango"
  | "sf-pro"
  | string;

/**
 * Props for the Label component.
 */
export type LabelProps = {
  /** The text content to display in the label. */
  text: string;
  /** HTML tag to render the label as (e.g., "h1", "label", "span"). */
  as?: "h1" | "h2" | "h3" | "label" | "p" | "span";
  /** ID of the form element the label is associated with (used when `as` is "label"). */
  htmlFor?: string;
  /** Tailwind CSS class for the text color (e.g., "text-black", "text-blue-500"). */
  textColor?: string;
  /** Optional icon to display alongside the text (as a React node). */
  icon?: React.ReactNode;
  /** Position of the icon relative to the text ("left" or "right"). */
  iconPosition?: "left" | "right";
  /** Additional Tailwind CSS classes to apply to the label. */
  className?: string;
  /** Font family to use for the label (predefined or custom). */
  font?: FontFamily;
  /** Font weight for the label (100 to 900). */
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /** Inline styles to apply to the label (e.g., for custom colors or other CSS properties). */
  style?: React.CSSProperties;
};

/**
 * A customizable label component with support for icons, fonts, and styling.
 *
 * The Label component renders a text element with optional icons, customizable font families, and styling.
 * It can be rendered as different HTML tags (e.g., "label", "h1", "span") using the `as` prop.
 * The component supports Tailwind CSS classes for text color and additional styling, and applies font family and weight via inline styles.
 * An icon can be displayed on the left or right of the text, with automatic margin adjustments.
 *
 * @example
 * ```tsx
 * import { Label } from "./Label";
 * import { ArrowDown } from "@mynaui/icons-react";
 *
 * // Basic usage with a custom text color and font
 * <Label
 *   text="Email Address"
 *   as="label"
 *   htmlFor="email"
 *   textColor="text-gray-700"
 *   font="poppins"
 *   fontWeight={500}
 *   className="mb-2"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With an icon on the right
 * <Label
 *   text="Select Option"
 *   icon={<ArrowDown />}
 *   iconPosition="right"
 *   textColor="text-blue-600"
 *   font="onest"
 *   fontWeight={600}
 * />
 * ```
 *
 * @remarks
 * - This component uses Tailwind CSS for styling (e.g., `text-black`, `py-2`, `px-2`).
 * - The `font` prop requires the specified font to be imported in your project (e.g., Poppins, Onest).
 * - When using `as="label"`, the `htmlFor` prop should be provided to associate the label with a form element.
 * - The `icon` prop accepts any React node (e.g., an SVG icon component).
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
  // Dynamically set the HTML tag to render based on the `as` prop
  const Tag = as;

  // Check if the provided icon is a valid React element
  const isIconElement = isValidElement(icon);

  // Clone the icon and apply Tailwind CSS classes for size and margin based on its position
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

  // Mapping of font family keys to their actual font names
  const fontFamilyMap = {
    poppins: "Poppins",
    onest: "Onest",
    "black-mango": "Black Mango",
    "sf-pro": "SF Pro Display",
  };

  // Get the font name from the mapping, or use the provided font value if not in the map
  const fontName = fontFamilyMap[font as keyof typeof fontFamilyMap] || font;

  // Inline style object for applying font family and weight
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
