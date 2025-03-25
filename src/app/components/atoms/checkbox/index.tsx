"use client";
import React, { useId } from "react";

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

interface CheckboxAtomProps {
  label: string;
  disabled?: boolean;
  color?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "filled";
  name?: string;
  error?: boolean | string;
  className?: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
}

const CheckboxAtom: React.FC<CheckboxAtomProps> = ({
  label = "",
  disabled = false,
  color = "#081F5C",
  checked,
  onChange,
  size = "md",
  variant = "default",
  name,
  error = false,
  className = "",
  fontFamily = "Poppins",
  fontWeight = "light",
}) => {
  const uniqueId = useId();
  const id = `checkbox-${uniqueId}`;

  const sizeStyles = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const variantStyles = {
    default: "accent-[#334EAC] bg-[#D9D9D9] border-0",
    outline: "accent-[#334EAC] bg-[#D9D9D9] border-0",
    filled: "accent-[#334EAC] bg-[#D9D9D9] border-0",
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={id}
        className={`flex items-center gap-2 cursor-pointer py-2 px-2 m-2 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${error ? "text-red-500" : ""}`}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          className={`${sizeStyles[size]} ${variantStyles[variant]} rounded ${
            error ? "border-red-500" : ""
          } transition-transform duration-200 ease-in-out checked:scale-110 appearance-none checked:appearance-auto`}
          style={{ accentColor: "#334EAC" }}
        />
        <span
          className={`select-none`}
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
          }}
        >
          {label}{" "}
        </span>
      </label>
      {typeof error === "string" && error && (
        <span className="text-red-500 text-sm px-2">{error}</span>
      )}
    </div>
  );
};

export default CheckboxAtom;
