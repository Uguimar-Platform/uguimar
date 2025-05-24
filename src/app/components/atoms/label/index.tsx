import { MynaIconsProps } from "@mynaui/icons-react";
import * as MynaIcons from "@mynaui/icons-react";
import React, { isValidElement, cloneElement } from "react";

export type FontFamily = "Poppins" | "Onest" | "SFProDisplay" | "BlackMango" | "Kavoon";
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

export type LabelAtomProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "label" | "p" | "span";
  htmlFor?: string;
  textColor?: string;
  icon?: React.ReactNode | string;
  iconPosition?: "left" | "right";
  className?: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  fontSize?: string;
  textSize?: "xs" | "sm" | "base" | "lg" | "xl";
  iconSize?: number;
  iconSpacing?: "sm" | "md" | "lg";
};

const LabelAtom: React.FC<LabelAtomProps> = ({
  text,
  as = "label",
  htmlFor,
  icon,
  iconPosition = "left",
  textColor = "text-black",
  fontFamily = "SFProDisplay",
  fontWeight = 700,
  fontSize = "text-base",
  className = "",
  textSize = "base",
  iconSize = 20,
  iconSpacing = "md",
}) => {
  const Tag = as;

  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const iconSpacingClasses = {
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
  };

  const fontWeightMap: Record<string, number> = {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  };

  const resolvedFontWeight =
    typeof fontWeight === "string"
      ? fontWeightMap[fontWeight] || 400
      : fontWeight;

  let iconElement = icon;
  if (typeof icon === "string" && (MynaIcons as any)[icon]) {
    const IconComponent = (MynaIcons as any)[icon];
    iconElement = <IconComponent size={iconSize} />;
  }

  const isIconElement = isValidElement(iconElement);

  const iconWithMargin =
    isIconElement && iconPosition === "left"
      ? cloneElement(iconElement as React.ReactElement<MynaIconsProps>, {
          className: `${(iconElement as React.ReactElement<MynaIconsProps>).props.className || ""}`,
          size: iconSize,
        })
      : isIconElement && iconPosition === "right"
        ? cloneElement(iconElement as React.ReactElement<MynaIconsProps>, {
            className: `${(iconElement as React.ReactElement<MynaIconsProps>).props.className || ""}`,
            size: iconSize,
          })
        : iconElement;

  return (
    <Tag
      {...(as === "label" ? { htmlFor } : {})}
      className={`flex items-center ${fontSize} ${textSizeClasses[textSize]} ${iconSpacingClasses[iconSpacing]} ${className}`}
      style={{
        fontFamily: fontFamily,
        fontWeight: resolvedFontWeight,
        color: textColor,
      }}
    >
      {iconPosition === "left" && iconWithMargin}
      <span className="whitespace-normal">{text}</span>
      {iconPosition === "right" && iconWithMargin}
    </Tag>
  );
};
export default LabelAtom;
