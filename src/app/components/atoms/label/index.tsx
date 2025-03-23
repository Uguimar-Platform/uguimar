import { MynaIconsProps } from "@mynaui/icons-react";
import React, { isValidElement, cloneElement } from "react";

export type FontFamily =
  | "poppins"
  | "onest"
  | "black-mango"
  | "sf-pro"
  | string;

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
  const fontFamilyMap = {
    poppins: "Poppins",
    onest: "Onest",
    "black-mango": "Black Mango",
    "sf-pro": "SF Pro Display",
  };

  const fontName = fontFamilyMap[font as keyof typeof fontFamilyMap] || font;

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
