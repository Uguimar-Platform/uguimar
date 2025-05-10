"use client";

import Link from "next/link";
import React from "react";
import * as MynaIcons from "@mynaui/icons-react";

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

type HoverStyle = "underline" | "color" | "background" | "none";

interface LinkAtomProps {
  to: string;
  label: string;
  className?: string;
  iconType?: keyof typeof MynaIcons;
  iconPosition?: "left" | "right";
  iconColor?: string;
  iconSize?: "sm" | "md" | "lg" | number;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  textSize?: "xs" | "sm" | "base" | "lg" | "xl";
  fullWidth?: boolean;
  hoverStyle?: HoverStyle;
  hoverColor?: string;
  hoverBackground?: string;
}

const LinkAtom: React.FC<LinkAtomProps> = ({
  to,
  label,
  className = "",
  iconType,
  iconPosition = "left",
  iconColor = "text-gray-600",
  iconSize = "md",
  fontFamily = "Poppins",
  fontWeight = 400,
  textSize = "base",
  fullWidth = false,
  hoverStyle = "underline",
  hoverColor = "#334EAC",
  hoverBackground = "transparent",
}) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const hoverClasses = {
    underline: "hover:underline",
    color: `hover:text-[${hoverColor}]`,
    background: `hover:bg-[${hoverBackground}]`,
    none: "",
  };

  const resolvedIconSize =
    typeof iconSize === "number" ? iconSize : sizeMap[iconSize];

  const IconComponent = iconType
    ? (MynaIcons[iconType] as React.ComponentType<
        React.SVGProps<SVGSVGElement>
      >)
    : null;

  return (
    <Link
      href={to}
      className={`inline-flex items-center p-2 ${textSizeClasses[textSize]} font-medium transition-all duration-200 ${
        hoverClasses[hoverStyle]
      } ${fullWidth ? "w-full justify-center" : ""} ${className}`}
      style={{
        fontFamily: fontFamily,
        fontWeight: fontWeight,
      }}
    >
      {IconComponent && iconPosition === "left" && (
        <IconComponent
          className={`mr-2 ${iconColor}`}
          style={{ width: resolvedIconSize, height: resolvedIconSize }}
        />
      )}
      <span className="whitespace-normal">{label}</span>
      {IconComponent && iconPosition === "right" && (
        <IconComponent
          className={`ml-2 ${iconColor}`}
          style={{ width: resolvedIconSize, height: resolvedIconSize }}
        />
      )}
    </Link>
  );
};

export default LinkAtom;
