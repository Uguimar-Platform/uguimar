"use client"; // Necesario porque usamos interactividad (onClick)

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  textColor?: string;
  bgColor?: string;
  disabled?: boolean;
  icon?: React.ReactNode; // Ahora acepta un React.ReactNode (como un componente de React Icons)
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  textColor = "text-white",
  bgColor = "bg-blue-500",
  disabled = false,
  icon,
  iconPosition = "left",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${bgColor} ${textColor} px-4 py-2 rounded flex items-center gap-2 ${className}`}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
