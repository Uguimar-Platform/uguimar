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
}) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
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
      className={`inline-flex items-center p-2 text-lg font-medium ${className}`}
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
      {label}
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
